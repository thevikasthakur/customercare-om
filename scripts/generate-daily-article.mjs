/**
 * Daily article generator for the CustomerCare.OM blog.
 *
 * One run produces at most one article for today plus at most one catch-up
 * article for a missed recent day. The pipeline:
 *
 *   pick today's task (CLI override > dated override > weekday lane bank)
 *     -> build the prompt (Oman almanac by date proximity, link candidates,
 *        recent coverage, evidence and voice rules)
 *     -> `claude -p` with web research tools and a strict JSON schema
 *     -> deterministic post-processing (dash strip, heading ids, source
 *        self-healing, near-duplicate and slug guards)
 *     -> validate; on failure, ONE repair call back to the model with the
 *        exact errors; validate again
 *     -> atomic write to content/articles/<slug>.json, then whole-library
 *        validation with rollback if the library regressed
 *
 * The generator only ever writes article JSON. Index, RSS, sitemap, llms.txt
 * and Markdown twins are all derived at build time, so they cannot go stale.
 *
 * The model never edits files: it is a read-only research worker, and this
 * script is the only writer. Content is block JSON, never HTML, so nothing
 * the model returns is ever rendered with dangerouslySetInnerHTML.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  ARTICLES_DIR,
  REPO_ROOT,
  loadArticles,
  loadEditorialConfig,
  loadOmanContext,
  loadSourceRegistry,
  runValidation,
  validateArticle,
} from "./validate-articles.mjs";

const OMAN_TIME_ZONE = "Asia/Muscat";
const SITE_ORIGIN = "https://customercare.om";
const AUTHOR = "CustomerCare.OM Editorial Team";

/**
 * The sister publication. Its content store is read straight off disk (both
 * machines run on this Mac) for two jobs: never duplicating its coverage,
 * and offering its pages/articles as cross-recommendation candidates. The
 * split, from chatbot.om/comparison/: Chatbot.OM is the affordable chat-only
 * product for small message-first teams (live in about a day); CustomerCare.OM
 * is the full suite for organisations whose phone line is the main channel.
 */
const SISTER = {
  name: "Chatbot.OM",
  origin: "https://chatbot.om",
  articlesDir: "/Users/thakur/Workspace/chatbot-OM/content/articles",
  pages: [
    { path: "/", title: "Chatbot.OM home", context: "chat only product, website chat, WhatsApp with voice notes, small teams, live in a day, affordable" },
    { path: "/comparison/", title: "Chatbot.OM vs CustomerCare.OM", context: "which product fits which business, capability split, migration path, upgrade" },
    { path: "/product/whatsapp-ai-chatbot/", title: "WhatsApp AI Chatbot", context: "WhatsApp business automation, voice notes, catalogues, small message-first teams" },
    { path: "/product/ai-chatbot-for-websites/", title: "AI Chatbot for Websites", context: "website chat widget, instant answers online, visitor questions, lead capture on site" },
    { path: "/get-started/", title: "Get Chatbot.OM", context: "start with the chat product, live in about a day" },
  ],
};

function loadSisterEntries() {
  try {
    return readdirSync(SISTER.articlesDir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => ({ file: f, article: JSON.parse(readFileSync(join(SISTER.articlesDir, f), "utf8")) }));
  } catch {
    return [];
  }
}
const DEFAULT_OG_IMAGE = "/media/blog-og.png";
const STATE_PATH = join(REPO_ROOT, "scripts", ".article-generation-state.json");
const CATCH_UP_LOOKBACK_DAYS = 14;
const CATCH_UP_MAX_ATTEMPTS = 2;
const EVENT_HORIZON_DAYS = 30;

/**
 * Background themes for the card SVG, all dark-leaning so the artwork sits
 * naturally on the site's ink surfaces and light text stays readable. The
 * pick is deterministic (hash of the taskId), never Math.random, so a rerun
 * of the same task produces the same skin.
 */
const THUMBNAIL_THEMES = [
  { name: "Ink and Lime", direction: "top-left to bottom-right", colors: ["#0a0b0f", "#1a1d24", "#d4ff4f"] },
  { name: "Gulf Teal", direction: "top to bottom", colors: ["#062e2b", "#0f4c4c", "#79e0c8"] },
  { name: "Desert Night", direction: "bottom-left to top-right", colors: ["#181109", "#54371a", "#e8c07c"] },
  { name: "Oman Red", direction: "left to right", colors: ["#2c0a0d", "#7a1c22", "#f1a09a"] },
  { name: "Frankincense Smoke", direction: "top-left to bottom-right", colors: ["#14121c", "#3a3554", "#a8a8f8"] },
  { name: "Khareef Mist", direction: "top to bottom", colors: ["#0d1f16", "#1e4634", "#8fd3a8"] },
  { name: "Dawn Gold", direction: "radial from center", colors: ["#1c1408", "#6b4d12", "#ffd166"] },
];

function pickThumbnailTheme(taskId) {
  let hash = 0;
  for (const ch of String(taskId)) hash = (hash * 31 + ch.charCodeAt(0)) % 100000;
  return THUMBNAIL_THEMES[hash % THUMBNAIL_THEMES.length];
}

const THUMBNAIL_CONTRAST_RULES = `- TEXT CONTRAST RULE (critical, applies everywhere in the SVG): judge the actual background directly behind every text element, not the overall theme or gradient average.
- If text is light and the background at that exact spot is also light, either add a padded dark rectangle behind the text or move the text over a genuinely dark part of the theme.
- If text is dark and the background at that exact spot is also dark, do the opposite: add a padded light rectangle behind the text or move the text over a genuinely light part of the theme.
- Backing rectangles must cover the full text bounds with visible padding and be opaque enough to preserve strong card-size contrast.`;

const CLAUDE_READ_ONLY_TOOLS = ["WebSearch", "WebFetch", "Read", "Glob", "Grep"];
const CLAUDE_SYSTEM_PROMPT = [
  "You are a read-only research and article-generation worker in an unattended",
  "content pipeline. Use the available web and read-only tools to research the",
  "request. Never edit or write files, run shell commands, change the repository,",
  "or ask the caller to grant more permissions. The caller, not you, persists the",
  "validated result. Finish by returning only the structured output requested by",
  "the caller.",
].join("\n");

/* ────────────────────────────── dates ─────────────────────────────── */

function todayInMuscat() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: OMAN_TIME_ZONE }).format(new Date());
}

function addDays(dateStr, days) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function weekdayOf(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).getUTCDay();
}

function daysBetween(fromStr, toStr) {
  return Math.round((new Date(`${toStr}T00:00:00Z`) - new Date(`${fromStr}T00:00:00Z`)) / 86400000);
}

function humanDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Month/day window containment, handling windows that wrap the year end. */
function windowContains(win, dateStr) {
  if (!win) return true;
  const [, m, d] = dateStr.split("-").map(Number);
  const val = m * 100 + d;
  const start = win.startMonth * 100 + win.startDay;
  const end = win.endMonth * 100 + win.endDay;
  return start <= end ? val >= start && val <= end : val >= start || val <= end;
}

/* ─────────────────────────── task selection ────────────────────────── */

function isDateCovered(entries, dateStr) {
  return entries.some(
    ({ article }) => article.publishDate === dateStr || article.taskId?.startsWith(`${dateStr}-`)
  );
}

function isBankEntryUsed(entries, entryKey) {
  return entries.some(({ article }) => article.taskId?.endsWith(`-${entryKey}`));
}

function pickBankEntry(bank, entries, dateStr) {
  const inWindow = bank.filter((e) => !e.bestWindow || windowContains(e.bestWindow, dateStr));
  const pool = inWindow.length > 0 ? inWindow : bank;
  const unused = pool.filter((e) => !isBankEntryUsed(entries, e.key));
  if (unused.length > 0) return { entry: unused[0], reused: false };
  const usedCount = pool.filter((e) => isBankEntryUsed(entries, e.key)).length;
  return { entry: pool[usedCount % pool.length], reused: true };
}

function taskFromEntry(entry, lane, dateStr, { reused = false, kind = "lane" } = {}) {
  return {
    kind,
    dateStr,
    key: entry.key,
    taskId: `${dateStr}-${entry.key}`,
    workingTitle: entry.workingTitle,
    angle: entry.angle,
    series: entry.series ?? lane?.series,
    category: entry.category ?? lane?.category,
    laneBrief: lane?.laneBrief,
    newsDriven: Boolean(lane?.newsDriven),
    sourceIds: entry.sourceIds ?? [],
    eventRefs: entry.eventRefs ?? [],
    reused,
  };
}

function selectTask(config, entries, dateStr, { laneKey, taskKey } = {}) {
  const lanes = config.lanes ?? {};
  const laneList = Object.values(lanes);

  if (taskKey) {
    for (const lane of laneList) {
      const entry = (lane.bank ?? []).find((e) => e.key === taskKey);
      if (entry) return taskFromEntry(entry, lane, dateStr, { kind: "forced-task" });
    }
    const ov = (config.datedOverrides ?? []).find((o) => o.key === taskKey);
    if (ov) return taskFromEntry(ov, null, dateStr, { kind: "dated-override" });
    throw new Error(`--task "${taskKey}" not found in any lane bank or override`);
  }

  if (laneKey) {
    const lane = laneList.find((l) => l.key === laneKey);
    if (!lane) throw new Error(`--lane "${laneKey}" is not a configured lane`);
    const { entry, reused } = pickBankEntry(lane.bank, entries, dateStr);
    return taskFromEntry(entry, lane, dateStr, { reused, kind: "forced-lane" });
  }

  const override = (config.datedOverrides ?? []).find((o) => o.date === dateStr);
  if (override) return taskFromEntry(override, null, dateStr, { kind: "dated-override" });

  const lane = lanes[String(weekdayOf(dateStr))];
  if (!lane) return null;
  const { entry, reused } = pickBankEntry(lane.bank, entries, dateStr);
  return taskFromEntry(entry, lane, dateStr, { reused });
}

/* ─────────────────────── catch-up for missed days ──────────────────── */

function loadState() {
  try {
    return JSON.parse(readFileSync(STATE_PATH, "utf8"));
  } catch {
    return { catchUpAttempts: {} };
  }
}

function saveState(state) {
  writeFileSync(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);
}

function findCatchUpTask(config, entries, todayStr, state) {
  const attempts = state.catchUpAttempts ?? {};
  for (let back = CATCH_UP_LOOKBACK_DAYS; back >= 1; back--) {
    const dateStr = addDays(todayStr, -back);
    if (dateStr < (config.startsOn ?? dateStr)) continue;
    if (isDateCovered(entries, dateStr)) continue;
    const record = attempts[dateStr];
    if (record && record.attempts >= CATCH_UP_MAX_ATTEMPTS) continue;
    // Dated overrides are event-timed and never backfilled; use the weekday
    // lane for that date instead. News lanes never backfill either: writing
    // "news" for a past date misleads.
    const lane = (config.lanes ?? {})[String(weekdayOf(dateStr))];
    if (!lane || lane.newsDriven || lane.catchUpEligible === false) continue;
    const { entry, reused } = pickBankEntry(lane.bank, entries, dateStr);
    const task = taskFromEntry(entry, lane, dateStr, { reused, kind: "catch-up" });
    task.dateOverrideCutoff = dateStr;
    return task;
  }
  return null;
}

function recordCatchUpAttempt(state, dateStr, outcome) {
  state.catchUpAttempts ??= {};
  const rec = state.catchUpAttempts[dateStr] ?? { attempts: 0 };
  rec.attempts += 1;
  rec.lastOutcome = outcome;
  rec.lastAttemptDate = todayInMuscat();
  state.catchUpAttempts[dateStr] = rec;
  saveState(state);
}

/* ─────────────────────── Oman context injection ────────────────────── */

function describeProximity(dateStr, targetStr) {
  const diff = daysBetween(dateStr, targetStr);
  if (diff === 0) return "today";
  if (diff === 1) return "tomorrow";
  if (diff === -1) return "yesterday";
  if (diff > 1) return `in ${diff} days`;
  return `${-diff} days ago`;
}

function buildOmanContext(omanContext, task, dateStr) {
  const lines = [];
  const refs = new Set(task.eventRefs ?? []);
  const year = Number(dateStr.slice(0, 4));

  for (const e of omanContext.nationalDates ?? []) {
    // The occurrence in this year or the next, whichever is nearest ahead.
    const thisYear = `${year}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
    const target = thisYear >= dateStr ? thisYear : `${year + 1}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
    const diff = daysBetween(dateStr, target);
    if (refs.has(e.key) || (diff >= 0 && diff <= EVENT_HORIZON_DAYS)) {
      lines.push(`- ${e.name}: ${target} (${describeProximity(dateStr, target)}). ${e.impact} ${e.verify}`);
    }
  }
  for (const e of omanContext.islamicDates ?? []) {
    const diff = daysBetween(dateStr, e.approxDate);
    if (refs.has(e.key) || (diff >= -3 && diff <= EVENT_HORIZON_DAYS)) {
      lines.push(
        `- ${e.name}: expected around ${e.approxDate} (${describeProximity(dateStr, e.approxDate)}), always subject to the official moon sighting announcement. ${e.impact} ${e.verify}`
      );
    }
  }
  for (const e of omanContext.seasonalWindows ?? []) {
    const active = windowContains(e.window, dateStr);
    const startThisYear = `${year}-${String(e.window.startMonth).padStart(2, "0")}-${String(e.window.startDay).padStart(2, "0")}`;
    const startsIn = daysBetween(dateStr, startThisYear);
    if (refs.has(e.key) || active) {
      lines.push(`- ${e.name}: ACTIVE NOW. ${e.impact} ${e.verify}`);
    } else if (startsIn > 0 && startsIn <= 21) {
      lines.push(`- ${e.name}: starts in about ${startsIn} days. ${e.impact} ${e.verify}`);
    }
  }
  const laneKeyForMilestones = task.kind === "dated-override" ? null : task.laneKey;
  for (const e of omanContext.milestones ?? []) {
    const laneMatches = (e.lanes ?? []).includes(task.laneKey ?? "");
    if (refs.has(e.key) || laneMatches) {
      lines.push(`- ${e.name}: ${e.impact} ${e.verify}`);
    }
  }
  void laneKeyForMilestones;
  return lines;
}

/* ─────────────────── internal link candidate scoring ───────────────── */

const STOPWORDS = new Set(
  "a an and are as at be but by for from has have how in is it its of on or that the their this to was what when where which who why will with you your oman omani muscat business customer customers service care".split(" ")
);

function tokenize(text) {
  return new Set(
    String(text ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOPWORDS.has(w))
  );
}

function overlapScore(aTokens, bTokens) {
  let overlap = 0;
  for (const t of aTokens) if (bTokens.has(t)) overlap += 1;
  const union = aTokens.size + bTokens.size - overlap || 1;
  return overlap * 10 + overlap / union;
}

function buildLinkCandidates(config, entries, task) {
  const taskTokens = tokenize(`${task.workingTitle} ${task.angle} ${task.category} ${task.series}`);
  const pages = (config.sitePages ?? [])
    .map((p) => ({ ...p, score: overlapScore(taskTokens, tokenize(`${p.title} ${p.context}`)) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  const related = entries
    .map(({ article }) => ({
      path: `/blog/${article.slug}/`,
      title: article.title,
      score: overlapScore(taskTokens, tokenize(`${article.title} ${article.excerpt} ${article.tags?.join(" ")}`)),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  const sisterPages = SISTER.pages.map((p) => ({
    url: `${SISTER.origin}${p.path}`,
    title: p.title,
    score: overlapScore(taskTokens, tokenize(`${p.title} ${p.context}`)),
  }));
  const sisterArticles = loadSisterEntries()
    .map(({ article }) => ({
      url: `${SISTER.origin}/blog/${article.slug}/`,
      title: article.title,
      score: overlapScore(taskTokens, tokenize(`${article.title} ${article.excerpt} ${article.tags?.join(" ")}`)),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  const sister = [...sisterPages, ...sisterArticles].sort((a, b) => b.score - a.score).slice(0, 4);
  return { pages, related, sister };
}

function recentCoverageLines(entries, limit = 24) {
  return entries
    .map(({ article }) => article)
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
    .slice(0, limit)
    .map((a) => `- ${a.publishDate} | ${a.series} | ${a.title}`);
}

function sisterCoverageLines(limit = 18) {
  return loadSisterEntries()
    .map(({ article }) => article)
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
    .slice(0, limit)
    .map((a) => `- ${a.publishDate} | ${a.title}`);
}

/** Persona names used recently, so composite characters don't all share one name. */
function recentPersonaNames(entries, limit = 20) {
  const names = new Set();
  for (const { article } of entries) {
    for (const b of article.blocks ?? []) {
      if (b?.type === "quote" && b.persona && typeof b.attribution === "string") {
        const name = b.attribution.split(",")[0].trim();
        if (name) names.add(name);
      }
    }
    if (names.size >= limit) break;
  }
  return [...names];
}

/* ───────────────────────────── the prompt ──────────────────────────── */

function buildPrompt({ task, dateStr, config, omanContextLines, linkCandidates, coverage, registrySources, personaNames = [], sisterCoverage = [] }) {
  const personaNamesLine = personaNames.length
    ? `- Composite persona names already used on the site, pick a DIFFERENT name: ${personaNames.join(", ")}.`
    : "";
  const sisterLinkLines = (linkCandidates.sister ?? []).length
    ? linkCandidates.sister.map((p) => `  - ${p.url} (${p.title})`).join("\n")
    : "  - none suggested; skip the cross-recommendation";
  const sisterCoverageBlock = sisterCoverage.length ? sisterCoverage.join("\n") : "- nothing published there yet";
  const sourceLines = registrySources.length
    ? registrySources.map((s) => `  - ${s.label} (${s.kind}): ${s.url}`).join("\n")
    : "  - none registered for this topic; rely on live research";
  const pageLinkLines = linkCandidates.pages.map((p) => `  - ${p.path} (${p.title}: ${p.context})`).join("\n");
  const insightLinkLines = linkCandidates.related.length
    ? linkCandidates.related.map((p) => `  - ${p.path} (${p.title})`).join("\n")
    : "  - none yet";
  const coverageBlock = coverage.length ? coverage.join("\n") : "- nothing published yet";

  const newsScan = task.newsDriven
    ? `
NEWS SCAN FIRST (this is the Monday pulse lane)
1. Search the last 7 to 10 days of announcements from: MTCIT, TRA, the Ministry of Labour, the Ministry of Commerce Industry and Investment Promotion, Oman News Agency, and reputable Omani outlets (Oman Observer, Times of Oman, Muscat Daily).
2. If you find ONE development that materially affects how businesses in Oman serve customers (a rule, a deadline, an enforcement action, a fee change, a holiday announcement, a festival programme), write about that instead of the fallback topic. Explain what changed, who it applies to, from when, and exactly what a customer-facing business should do this week.
3. Only if nothing material happened, write the fallback evergreen topic below.
4. Never invent or exaggerate a development. A quiet week is fine.
`
    : "";

  const catchUp = task.dateOverrideCutoff
    ? `
PUBLICATION DATE AND RESEARCH CUTOFF (CRITICAL)
- This is a catch-up article whose publication date is ${task.dateOverrideCutoff}.
- Research and write as if today were ${task.dateOverrideCutoff}. Interpret "today", "this week" and all relative time from that date.
- Do not cite announcements or reporting first published after ${task.dateOverrideCutoff}. If a claim needs later information, omit it.
`
    : "";

  const reuseNote = task.reused
    ? "- NOTE: This working topic has appeared on the site before. Take a clearly different angle, a different worked example and a different headline. Check the recent coverage list and do not overlap."
    : "";

  return `Write one article for the CustomerCare.OM blog (customercare.om/blog), the plain-language customer service library of CustomerCare.OM, the AI customer service platform built for Oman.

THE READER
Two people share this article over WhatsApp: someone who runs customer service at an Omani business that already answers customers at scale, and the everyday customer who calls businesses like theirs. The first reader is an owner, operations manager, front office lead or customer service supervisor at a hotel, a clinic group or hospital, a car dealership, a real estate firm, an insurer, a delivery or utilities operation, a college: a business that already staffs telephone operators, a service desk or an IVR line. Both readers are smart and busy, and neither is technical. The test for every paragraph: would a hotel front office manager in Salalah or the operations lead of a Muscat polyclinic understand it on first read, and would they forward it to a colleague because it genuinely helps? The reader should know within the first three sentences how the topic touches their money, time, rights or peace of mind.

THE TARGET BUSINESS (who the worked examples are about)
- Every worked example, composite persona and cost comparison must be sized for a business that already runs customer service operations today: an operator desk, a front office team, a switchboard or an IVR. Hotels, polyclinics and hospital groups, dealerships, real estate brokerages, insurers, logistics and delivery firms, tour operators, colleges and training institutes, multi-branch retail.
- Never build the article's case around a one-person shop deciding whether to buy technology. AI customer care is a serious operational investment, and pitching it to a corner cafe reads as tone deaf. Small shops and their staff may appear as color in human stories, but the sums, staffing maths and fixes belong to businesses with a service team.
- The strongest angles for this audience: what the operator floor costs per handled call, what the IVR menu does to callers, what the team learns (or never learns) from a day of calls, coverage outside the team's shift, and peak seasons that swamp a fixed-size team.

ASSIGNMENT
- Publication date: ${dateStr} (${humanDate(dateStr)})
- Working title: ${task.workingTitle}
- Angle: ${task.angle}
- Series: ${task.series}
- Category: ${task.category}
${task.laneBrief ? `- Lane brief: ${task.laneBrief}` : ""}
${reuseNote}
${newsScan}${catchUp}
TITLE RULES
- Treat the working title as a starting point, not a fixed string. Keep or sharpen it; never lengthen it.
- Aim for 5 to 10 words and roughly 30 to 70 characters. Four shapes work best here: a direct question (What Counts as Consent When You Collect a Phone Number?), a counterintuitive claim (Why Standard Arabic Is Not the Arabic Your Customers Speak), a how-to with a concrete outcome, or a spelled-out number lead (Seven Signs...). Spell out a number that starts a title; digits are fine mid-title.
- This site already lives in an Oman context: drop "in Oman" style suffixes unless truly needed for clarity.
- No category prefixes ("Guide:", "Explainer:"), no stacked clauses after a colon, no clickbait that withholds the answer.
- Use a number only when the article genuinely verifies it. Never invent counts, superlatives or test results.
- The title must be worth forwarding: connect it to money, time, rights, risk or peace of mind.

WRITING FOR A LOCAL READER (this is what separates a real Omani publication from a foreign one)
- You are writing from inside Oman, for people who live here. Never explain Oman to Omanis. Anything a resident already knows should be referred to, not taught.
- Do NOT label the audience by nationality. Inside Oman "Omani" means Omani nationals, who are a minority of any business's customers. Write "customers", "your customers", "callers" or "people here". Never "Omani customers", "Omani callers", "Omani shoppers".
- "Omani" belongs to things that genuinely are Omani: Omani Arabic, an Omani business, Omani law, Omani nationals in an employment context.
- Skip legal qualifiers that everyone here takes for granted. During Ramadan, working hours are shorter: that is simply understood. Do not write "Muslim employees in the private sector are capped at six hours a day under the Labour Law (Royal Decree 53/2023)". Write "when working hours are shorter in Ramadan", or just "after iftar", and move on.
- Do not cite decree numbers inline in practical articles. Name a rule plainly ("Oman's data protection law", "the midday work ban") and let the sources list carry the citation. Decree numbers belong only in an article whose subject IS the rule.
- Aim for the register of a well-informed local colleague talking shop, not a compliance memo or a briefing for a foreign investor. If a sentence would only be written by someone explaining Oman from outside, cut it or shorten it.
- Same test for seasons and holidays: "after iftar", "during khareef", "over the National Day weekend" need no footnote. Explain only what genuinely changed or what is genuinely not common knowledge.

LANGUAGE RULES
- Simple, warm, conversational English at roughly grade 8 reading level. Short sentences. Second person where natural.
- Define every technical or legal term in one plain sentence the first time it appears. Write acronyms out on first use.
- Write "Personal Data Protection Law" in full on first use; after that say "the data protection law" or "the law". Avoid the bare acronym in reader-facing text.
- Oman is a Sultanate, never "the Kingdom". Use "the Sultanate of Oman" or simply "Oman". The head of state is the Sultan.
- NEVER use the words "receptionist" or "answering service" anywhere; this site describes the work as customer care, front desk work, or call handling.
- The brand is written exactly "CustomerCare.OM", never "Customer Care OM", "CustomerCare Oman" or bare "CustomerCare".
- Use concrete OMR amounts, real month names and named, clearly composite people, for example "Salim, who runs a maintenance company in Ruwi". Label invented scenarios as composite examples; never present them as real cases.
- NEVER use em dashes or en dashes anywhere. Use commas, full stops, colons or parentheses.
- Avoid "as of today", "next year", "coming soon", "recently" without a date, and empty hype. No exclamation marks.
- If a figure cannot be verified, write "the figure was not publicly available when this article was written" or omit the claim. Never write "in the sources reviewed".

STORY ARC (how the piece holds a reader to the end)
- Every article that names a problem must ALSO resolve it. The reader leaves knowing the way out: the process change, the coverage option, the tool, the habit, with enough detail to act on. A vivid description of pain with no fix fails this brief. When the honest fix includes automation, say so plainly and practically.
- Structure the piece as a held question. The lead opens a loop (a cost, a mystery, a number, the night everything went wrong) and the body deliberately delays the payoff: build the problem, raise the stakes, drop a small promise along the way ("what finally cut those missed calls comes later"), and only in the final third reveal the resolution. "What this means for you" then lands as the payoff the reader stayed for.
- Never resolve the problem in the first half. Never end without resolving it. The last heading before the wrap-up should answer the question the lead opened.
- In story pieces, the character who lives the problem is shown finding, or pointing at, the fix, so the resolution belongs to the story rather than arriving as a bolted-on pitch.

STRUCTURE (blocks, in order)
1. "lead": two or three sentences that hook with the concrete point, not throat-clearing.
2. A short body that flows: heading blocks (level 2, lowercase kebab-case ids, a heading roughly every 120 to 180 words), paragraphs of 2 to 4 sentences, and at least one list.
3. One worked example with real OMR numbers, as a table block or an ordered list, that the reader can redo with their own numbers.
4. One "quote" block giving a voice to the industry the article touches: your clearly composite persona (the hotel front office manager, the polyclinic call-desk coordinator, the dealership service manager) saying one line they would genuinely say, under 24 words. Set "persona": true and attribute with name, role and place, for example "Maha, front office manager, Salalah". For a real public quotation instead, "sourceUrl" is required and the quote must be verifiable word for word. Never invent a quote from a real person.
5. One or two "highlight" blocks: the single most forwardable sentence of the piece, pulled out of the flow in its own block (one strong standalone sentence, not a fragment). Place the first one a third of the way in.
6. One heading must be exactly "What this means for you" (id "what-this-means-for-you") with direct, second-person guidance.
7. One callout block, tone "key" or "tip", titled as a small action, for example "Try this today" or "Your two-minute check", containing a concrete self-check or mini checklist.
8. Optionally, when the topic naturally invites questions, one "faq" block with 2 to 4 short question-and-answer pairs placed near the end.
9. A short closing heading such as "The bottom line" with a two-or-three-sentence wrap-up.
- Total length: 700 to 1,200 words. Never below 650 or above 2,000 words.
- Use tables and lists generously: they are this site's visual illustrations. One good table beats three paragraphs.

OMAN CONTEXT AROUND THIS DATE (use ONLY what is natural; never force it)
${omanContextLines.length ? omanContextLines.join("\n") : "- nothing notable within the horizon"}
- If you reference any holiday, season or deadline above, verify the current official position with web search before asserting it.
- Islamic dates are expected dates. Phrase them as "expected around X, subject to the official moon sighting announcement". Never state an unannounced holiday as fixed.
- Mentioning nothing from this list is completely fine. Forced topicality reads as spam.

EVIDENCE RULES
- Verify every legal, regulatory or numeric claim against official Oman sources on the publication date: mtcit.gov.om, tra.gov.om, mol.gov.om, tejarah.gov.om, omannews.gov.om and ministry portals. Use web search; do not rely on memory or a search snippet alone.
- Start from these registered leads where relevant:
${sourceLines}
- Every external URL cited inline (as a segment href) must also appear in the "sources" array. Use HTTPS everywhere. Never invent URLs, statistics, quotes or case studies.
- Classify each source kind honestly: oman-official, regional-official, media, vendor, or analysis.
- Cite only sources you genuinely used. An article that makes legal or numeric claims MUST list the official sources behind them (at least two, with Oman official sources for Omani rules). A purely practical piece built on general good practice may list one or two genuinely useful references, or none. Never pad with decorative citations.
- Where an exact figure or date is not published, say so plainly rather than guessing.

INTERNAL LINKS (optional, 0 to 2, only where they feel inevitable)
- A link is allowed only if the sentence reads as a normal helpful sentence when the link is removed. If a link needs a sales pitch around it, drop it.
- Links exist ONLY as a segment's "href" field. Never write markdown syntax like [text](url) inside any text value; it renders literally on the page.
- Own-site links are relative paths ("/features/call-analytics-dashboard/"), never absolute customercare.om URLs, and never appear in the sources array.
- Never write "click here", never end with a link dump, never link the same path twice.
- Candidate CustomerCare.OM pages for this topic:
${pageLinkLines}
- Related articles on this blog:
${insightLinkLines}
- Skipping all links is better than one unnatural link.

SISTER PRODUCT (optional cross-recommendation, at most 1 link, most articles need none)
- Chatbot.OM (https://chatbot.om) is this site's affordable chat-only sister: website chat and WhatsApp (voice notes understood), replies on email threads, tickets, follow-ups, lead capture and reporting. Live in about a day, within reach of a business with four staff. It does not answer phone calls and does not run outbound calling; both products keep data inside Oman on the same platform family, so knowledge, history, tickets and leads carry across if a business upgrades.
- When a scene in the article involves a genuinely small, message-first business (most enquiries arrive on WhatsApp or the website, the phone rings but nobody is drowning in calls, they need something live this week, budget is tight), the honest recommendation for THAT business is Chatbot.OM, not this site's full suite. Say so plainly in one natural sentence with one link. The family's own line: we would rather put a business on the cheaper product that works than the bigger one that does not.
- Candidate Chatbot.OM links for this topic:
${sisterLinkLines}
- Never recommend both products to the same reader in one article, and never force the mention. Skipping it is the default.

BRAND MENTION POLICY
- CustomerCare.OM may appear at most once or twice, as a practical aside (for example inside one callout with tone "brand"), never as the article's hero. The article must be fully useful to someone who never clicks anything.
- When a scene involves a caller and an automated agent, let the caller speak the way Omani customers actually speak, dialect and mixed languages included, and let understanding that speech be the quiet point. Never write "our USP", never write marketing slogans.
- Natural CustomerCare.OM angles, when one fits: it replaces the IVR menu with a conversation, it holds the line when the operator desk is closed or swamped, it understands callers who speak Omani Arabic, it turns every conversation into notes and numbers the operations lead can see, and customer data stays inside Oman. Pick at most one. Frame it for a business that already staffs phone lines, never as a gadget for a shop without one.
- Never claim certifications, customer counts or awards for CustomerCare.OM.

ALREADY PUBLISHED (do not repeat these framings, examples or headlines)
${coverageBlock}
- Cover the same territory only if something materially new happened, and say what is new.
${personaNamesLine}

PUBLISHED ON THE SISTER SITE, chatbot.om (never duplicate these)
${sisterCoverageBlock}
- The sister site writes for small message-first teams; this site writes for operations leads at businesses with staffed phone lines. If your topic brushes against one of theirs, your angle, examples and worked numbers must clearly serve THIS site's reader, or you should choose a different emphasis entirely.

THUMBNAIL SVG (required; this is the article's card image on the blog index and related-article cards)
The "thumbnail" field must contain a complete inline SVG that makes the reader want to tap. It renders at about 400x225 on dark card surfaces. It must feel like a magazine cover detail, not a corporate infographic.
- ONE bold focal point, not ten scattered shapes: a single dominant visual idea that carries the story (a phone left ringing, a rising counter queue, a moon over a roster, a teapot pouring).
- BIG, punchy text: font-size 26 to 38 for the main hook (a number like "OMR 540" or two or three words), one smaller supporting line (12 to 16) at most. Text must read at card size.
- High contrast, no washed-out low-opacity clutter.
${THUMBNAIL_CONTRAST_RULES}
- Visual hierarchy: background gradient, one large illustration element, bold text. Three layers, nothing more.
- BACKGROUND THEME: {{THUMBNAIL_BACKGROUND_THEME}} Build the background gradient from exactly these colors. For foreground elements and text, use the site accent #d4ff4f, warm sand #e8c07c, soft teal #79e0c8 and near-white #f4f4f0, whichever reads best on this theme.
Technical requirements:
- A valid, self-contained SVG string starting with <svg and ending with </svg>.
- viewBox="0 0 400 225" with width="400" height="225".
- font-family="Arial, sans-serif" for all text, font-weight="bold" for the hook.
- Aim for 2KB to 8KB of markup. Efficient shapes, no excessive path data.
- No external references of any kind: no <image>, no xlink, no href except internal "#fragment" references, no data: URIs, no <script>, no event handlers, no <foreignObject>.
- No em or en dashes in any SVG text.

SEO
- Use the main search phrase naturally in the title, the lead, one heading and the seoDescription.
- seoTitle: 35 to 65 characters. seoDescription: 120 to 165 characters. excerpt: 100 to 220 characters, written as a hook, not a summary of sections.
- slug: lowercase kebab-case, compact, no dates.
- tags: 3 to 10 short topical tags.

OUTPUT
Return ONLY the structured JSON output requested by the caller.
- status "article" plus every article field, including the thumbnail SVG, when you can write the piece credibly.
- status "skip" plus skipReason ONLY if even best-effort research finds nothing credible to write (this should be extremely rare; missing minor details is never a reason to skip).
- blocks must follow the block format exactly. No HTML, no Markdown syntax, no SVG, no scripts anywhere in any block string; the only SVG lives in the "thumbnail" field.`;
}

/* ─────────────────────── structured output schema ──────────────────── */

function articleOutputSchema() {
  const segment = {
    type: "object",
    properties: {
      text: { type: "string" },
      href: { type: "string" },
      strong: { type: "boolean" },
      emphasis: { type: "boolean" },
    },
    required: ["text"],
    additionalProperties: false,
  };
  const segments = { type: "array", minItems: 1, items: segment };
  const cell = {
    anyOf: [
      { type: "string" },
      {
        type: "object",
        properties: { text: { type: "string" }, note: { type: "string" } },
        required: ["text"],
        additionalProperties: false,
      },
    ],
  };
  const block = {
    anyOf: [
      {
        type: "object",
        properties: { type: { const: "lead" }, text: { type: "string" } },
        required: ["type", "text"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: {
          type: { const: "heading" },
          level: { type: "integer", enum: [2, 3] },
          id: { type: "string" },
          text: { type: "string" },
        },
        required: ["type", "level", "id", "text"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: { type: { const: "paragraph" }, segments },
        required: ["type", "segments"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: {
          type: { const: "list" },
          ordered: { type: "boolean" },
          items: { type: "array", minItems: 2, items: segments },
        },
        required: ["type", "ordered", "items"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: {
          type: { const: "quote" },
          quote: { type: "string" },
          attribution: { type: "string" },
          sourceUrl: { type: "string" },
          persona: { type: "boolean" },
        },
        required: ["type", "quote", "attribution"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: { type: { const: "highlight" }, text: { type: "string" } },
        required: ["type", "text"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: {
          type: { const: "callout" },
          tone: { type: "string", enum: ["key", "note", "tip", "brand"] },
          title: { type: "string" },
          paragraphs: { type: "array", minItems: 1, items: { type: "string" } },
        },
        required: ["type", "tone", "title", "paragraphs"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: {
          type: { const: "table" },
          caption: { type: "string" },
          compact: { type: "boolean" },
          headers: { type: "array", minItems: 2, items: { type: "string" } },
          rows: { type: "array", minItems: 2, items: { type: "array", minItems: 2, items: cell } },
        },
        required: ["type", "headers", "rows"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: {
          type: { const: "faq" },
          items: {
            type: "array",
            minItems: 2,
            maxItems: 4,
            items: {
              type: "object",
              properties: { q: { type: "string" }, a: { type: "string" } },
              required: ["q", "a"],
              additionalProperties: false,
            },
          },
        },
        required: ["type", "items"],
        additionalProperties: false,
      },
      {
        type: "object",
        properties: { type: { const: "divider" } },
        required: ["type"],
        additionalProperties: false,
      },
    ],
  };
  return {
    type: "object",
    properties: {
      status: { type: "string", enum: ["article", "skip"] },
      skipReason: { type: "string" },
      title: { type: "string" },
      seoTitle: { type: "string" },
      seoDescription: { type: "string" },
      excerpt: { type: "string" },
      slug: { type: "string" },
      tags: { type: "array", items: { type: "string" } },
      thumbnail: { type: "string" },
      sources: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            label: { type: "string" },
            url: { type: "string" },
            kind: { type: "string", enum: ["oman-official", "regional-official", "media", "vendor", "analysis"] },
          },
          required: ["id", "label", "url", "kind"],
          additionalProperties: false,
        },
      },
      blocks: { type: "array", items: block },
    },
    required: ["status"],
    additionalProperties: false,
  };
}

/* ───────────────────────── Claude CLI plumbing ─────────────────────── */

function isTransientClaudeFailure(message) {
  return /connection (?:closed|reset)|econnreset|etimedout|timed? out|network error|overloaded|rate limit|http (?:429|502|503|504)|api error:.*(?:connection|timeout|overloaded)/i.test(
    message
  );
}

function claudeCliStructured(prompt, label, { maxTurns = 40 } = {}) {
  const maxAttempts = 2;
  const args = [
    "-p",
    prompt,
    "--system-prompt",
    CLAUDE_SYSTEM_PROMPT,
    "--output-format",
    "json",
    "--json-schema",
    JSON.stringify(articleOutputSchema()),
    "--max-turns",
    String(maxTurns),
    "--permission-mode",
    "dontAsk",
    "--tools",
    CLAUDE_READ_ONLY_TOOLS.join(","),
    "--allowedTools",
    CLAUDE_READ_ONLY_TOOLS.join(","),
    "--strict-mcp-config",
    "--disable-slash-commands",
    "--no-session-persistence",
  ];
  if (process.env.CUSTOMERCARE_CLAUDE_MODEL) {
    args.push("--model", process.env.CUSTOMERCARE_CLAUDE_MODEL);
  }

  let lastError = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    console.log(`   🤖 claude call (${label}), attempt ${attempt}/${maxAttempts}...`);
    const completed = spawnSync("claude", args, {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
      timeout: 20 * 60 * 1000,
      env: { ...process.env, CLAUDE_FLOW_NON_INTERACTIVE: "true" },
    });
    try {
      if (completed.error) throw completed.error;
      if (completed.status !== 0) {
        throw new Error(`claude exited ${completed.status}: ${String(completed.stderr).slice(0, 800)}`);
      }
      const outer = JSON.parse(completed.stdout);
      if (outer.is_error) throw new Error(`claude reported an error: ${String(outer.result).slice(0, 800)}`);
      if (outer.subtype === "error_max_turns") throw new Error("claude hit the max-turns limit");
      if (outer.subtype === "error_max_structured_output_retries") {
        throw new Error("claude could not satisfy the output schema");
      }
      if (outer.structured_output) return outer.structured_output;
      const result = outer.result;
      if (result && typeof result === "object") return result;
      if (typeof result === "string") {
        const fenced = result.match(/```json\s*([\s\S]*?)```/i);
        const raw = fenced ? fenced[1] : result.slice(result.indexOf("{"), result.lastIndexOf("}") + 1);
        return JSON.parse(raw);
      }
      throw new Error("claude returned no usable output");
    } catch (err) {
      lastError = err;
      const message = String(err?.message ?? err);
      const isLast = attempt === maxAttempts;
      const transient = isTransientClaudeFailure(message) || err?.code === "ETIMEDOUT";
      console.warn(`   ⚠️ ${label} failed: ${message.slice(0, 300)}`);
      if (isLast || !transient) break;
      console.log("   ⏳ transient failure, retrying in 10s...");
      spawnSync("sleep", ["10"]);
    }
  }
  throw lastError ?? new Error(`claude call failed (${label})`);
}

/* ─────────────────────── deterministic clean-up ────────────────────── */

/** The model is told not to use em/en dashes; when it does anyway, repair. */
function stripDashes(value) {
  if (typeof value === "string") {
    return value
      .replace(/\s+[—–]\s+/g, ", ")
      .replace(/[—–]/g, "-");
  }
  if (Array.isArray(value)) return value.map(stripDashes);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = stripDashes(v);
    return out;
  }
  return value;
}

function toSlug(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .slice(0, 80)
    .replace(/^-+|-+$/g, "");
}

function dedupeHeadingIds(blocks) {
  const seen = new Map();
  for (const b of blocks ?? []) {
    if (b?.type !== "heading") continue;
    let id = toSlug(b.id || b.text);
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count + 1}`;
    b.id = id;
  }
}

function guessSourceKind(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (host.endsWith(".gov.om")) return "oman-official";
    if (host === "oman2040.om" || host === "omannews.gov.om") return "oman-official";
    if (["omanobserver.om", "timesofoman.com", "muscatdaily.com"].includes(host)) return "media";
    if (/gulfnews\.com|thenationalnews\.com|zawya\.com|arabianbusiness\.com/.test(host)) return "media";
    if (host.endsWith(".om")) return "vendor";
    return "analysis";
  } catch {
    return "analysis";
  }
}

/**
 * Self-heal the citation invariant: any inline external link missing from
 * sources[] gets appended, so "every inline citation is a listed source"
 * always holds by construction.
 */
const OWN_DOMAIN_RE = /^https?:\/\/(www\.)?customercare\.om/i;

/** Own-site links must be relative paths; heal absolute forms the model emits. */
function relativizeOwnLinks(article) {
  const fixSegment = (s) => {
    if (!s?.href || !OWN_DOMAIN_RE.test(s.href)) return;
    const path = s.href.replace(OWN_DOMAIN_RE, "") || "/";
    s.href = path.endsWith("/") || /\.[a-z0-9]+$/i.test(path) ? path : `${path}/`;
  };
  for (const b of article.blocks ?? []) {
    if (b?.type === "paragraph") for (const s of b.segments ?? []) fixSegment(s);
    if (b?.type === "list") for (const item of b.items ?? []) for (const s of item ?? []) fixSegment(s);
  }
  article.sources = (article.sources ?? []).filter((s) => !OWN_DOMAIN_RE.test(s?.url ?? ""));
}

function normalizeSources(article) {
  const sources = [];
  const byUrl = new Map();
  const usedIds = new Set();
  for (const s of article.sources ?? []) {
    if (!s?.url || byUrl.has(s.url)) continue;
    let id = toSlug(s.id || s.label || new URL(s.url).hostname);
    while (usedIds.has(id)) id = `${id}-x`;
    usedIds.add(id);
    const entry = { id, label: s.label ?? id, url: s.url, kind: s.kind ?? guessSourceKind(s.url) };
    byUrl.set(s.url, entry);
    sources.push(entry);
  }
  const addFromHref = (href) => {
    if (!href || !href.startsWith("https://") || byUrl.has(href)) return;
    let host = "source";
    try {
      host = new URL(href).hostname.replace(/^www\./, "");
    } catch {
      return;
    }
    let id = toSlug(host);
    while (usedIds.has(id)) id = `${id}-x`;
    usedIds.add(id);
    const entry = { id, label: host, url: href, kind: guessSourceKind(href) };
    byUrl.set(href, entry);
    sources.push(entry);
  };
  for (const b of article.blocks ?? []) {
    if (b?.type === "paragraph") for (const s of b.segments ?? []) addFromHref(s?.href);
    if (b?.type === "list") for (const item of b.items ?? []) for (const s of item ?? []) addFromHref(s?.href);
    if (b?.type === "quote") addFromHref(b.sourceUrl);
  }
  article.sources = sources;
}

/* ───────────────────── near-duplicate protection ───────────────────── */

function findNearDuplicate(entries, candidate) {
  const candTokens = tokenize(`${candidate.title} ${candidate.excerpt}`);
  const pools = [
    { label: "", entries },
    { label: ` on ${SISTER.name}`, entries: loadSisterEntries() },
  ];
  for (const pool of pools) {
    for (const { article } of pool.entries) {
      const tokens = tokenize(`${article.title} ${article.excerpt}`);
      let inter = 0;
      for (const t of candTokens) if (tokens.has(t)) inter += 1;
      const union = candTokens.size + tokens.size - inter || 1;
      if (inter / union >= 0.5) return `${article.slug}${pool.label}`;
    }
  }
  return null;
}

/**
 * Sister links must point at real sister pages or articles. Checked in the
 * generator (both repos exist on this machine), not the validator (which
 * also runs on Netlify, where the sibling checkout does not).
 */
function validateSisterLinks(article) {
  const errors = [];
  const known = new Set(SISTER.pages.map((p) => `${SISTER.origin}${p.path}`));
  for (const { article: a } of loadSisterEntries()) known.add(`${SISTER.origin}/blog/${a.slug}/`);
  const check = (href, where) => {
    if (!href || !href.startsWith(SISTER.origin)) return;
    const normalized = href.endsWith("/") ? href : `${href}/`;
    if (!known.has(normalized) && !known.has(href)) {
      errors.push(`${where}: sister link ${href} does not match any known ${SISTER.name} page or article`);
    }
  };
  (article.blocks ?? []).forEach((b, i) => {
    if (b?.type === "paragraph") for (const s of b.segments ?? []) check(s?.href, `blocks[${i}]`);
    if (b?.type === "list") for (const item of b.items ?? []) for (const s of item ?? []) check(s?.href, `blocks[${i}]`);
  });
  return errors;
}

/* ───────────────────────────── assembly ────────────────────────────── */

function assembleArticle(raw, task, entries) {
  const cleaned = stripDashes(raw);
  dedupeHeadingIds(cleaned.blocks);

  let slug = toSlug(cleaned.slug || cleaned.title);
  const existingSlugs = new Set(entries.map(({ article }) => article.slug));
  let n = 2;
  while (existingSlugs.has(slug)) slug = `${toSlug(cleaned.slug || cleaned.title)}-${n++}`;

  const publishDate = task.dateStr;
  const words = null; // computed by the validator
  const article = {
    id: `article-${task.taskId}`,
    taskId: task.taskId,
    slug,
    title: cleaned.title?.trim(),
    seoTitle: cleaned.seoTitle?.trim() || cleaned.title?.trim(),
    excerpt: cleaned.excerpt?.trim(),
    seoDescription: cleaned.seoDescription?.trim(),
    series: task.series,
    category: task.category,
    topic: task.workingTitle,
    author: AUTHOR,
    publishDate,
    modifiedDate: publishDate,
    reviewedDate: publishDate,
    reviewBy: addDays(publishDate, 90),
    status: "published",
    tags: Array.from(new Set([...(cleaned.tags ?? [])].map((t) => String(t).trim()).filter(Boolean))).slice(0, 12),
    ogImage: DEFAULT_OG_IMAGE,
    thumbnail: typeof cleaned.thumbnail === "string" ? cleaned.thumbnail.trim() : undefined,
    sources: cleaned.sources ?? [],
    blocks: cleaned.blocks ?? [],
  };
  void words;
  relativizeOwnLinks(article);
  normalizeSources(article);
  return article;
}

function writeArticleFile(article) {
  mkdirSync(ARTICLES_DIR, { recursive: true });
  const finalPath = join(ARTICLES_DIR, `${article.slug}.json`);
  if (existsSync(finalPath)) throw new Error(`Refusing to overwrite existing article ${finalPath}`);
  const tmpPath = join(ARTICLES_DIR, `.tmp-${process.pid}.json`);
  writeFileSync(tmpPath, `${JSON.stringify(article, null, 2)}\n`);
  renameSync(tmpPath, finalPath);
  return finalPath;
}

/* ─────────────────────────── repair loop ───────────────────────────── */

function buildRepairPrompt(article, errors) {
  return `You produced the article JSON below for the CustomerCare.OM blog, but it failed validation. Fix every listed error and return the complete corrected JSON (status "article" plus every field). Preserve the article's substance, tone and sources. Do not add new factual claims that would need new research. Remember: no em or en dashes anywhere, no HTML, blocks format exactly as before.

VALIDATION ERRORS
${errors.map((e) => `- ${e}`).join("\n")}

ARTICLE JSON
${JSON.stringify(article, null, 2)}`;
}

/* ───────────────────────── generation driver ───────────────────────── */

function generateForTask(task, { config, omanContext, registry, entries, showPrompt, dryRun }) {
  task.laneKey = task.laneKey ?? (config.lanes?.[String(weekdayOf(task.dateStr))]?.key ?? null);
  const omanContextLines = buildOmanContext(omanContext, task, task.dateStr);
  const linkCandidates = buildLinkCandidates(config, entries, task);
  const registrySources = (registry.sources ?? []).filter((s) => (task.sourceIds ?? []).includes(s.id));
  const coverage = recentCoverageLines(entries);
  const personaNames = recentPersonaNames(entries);
  const sisterCoverage = sisterCoverageLines();
  const theme = pickThumbnailTheme(task.taskId);
  console.log(`   🎨 thumbnail theme: ${theme.name}`);
  const prompt = buildPrompt({
    task,
    dateStr: task.dateStr,
    config,
    omanContextLines,
    linkCandidates,
    coverage,
    registrySources,
    personaNames,
    sisterCoverage,
  }).replace(
    "{{THUMBNAIL_BACKGROUND_THEME}}",
    `"${theme.name}": a gradient flowing ${theme.direction} through ${theme.colors.join(", ")}.`
  );

  if (showPrompt) {
    console.log("\n────────────────────── PROMPT ──────────────────────\n");
    console.log(prompt);
    console.log("\n─────────────────────────────────────────────────────\n");
  }
  if (dryRun) return null;

  const raw = claudeCliStructured(prompt, task.taskId);
  if (raw.status === "skip") {
    console.log(`   ⏭️  model skipped: ${raw.skipReason ?? "no reason given"}`);
    return { skipped: true };
  }

  let article = assembleArticle(raw, task, entries);
  let errors = [
    ...validateArticle(article, { filename: `${article.slug}.json`, allArticles: entries, config }),
    ...validateSisterLinks(article),
  ];

  if (errors.length) {
    console.warn(`   🔧 draft failed validation with ${errors.length} error(s); attempting one repair pass...`);
    for (const e of errors) console.warn(`      - ${e}`);
    try {
      const repaired = claudeCliStructured(buildRepairPrompt(article, errors), `${task.taskId}-repair`, { maxTurns: 12 });
      if (repaired.status !== "skip") {
        const repairedArticle = assembleArticle(repaired, task, entries);
        const repairedErrors = [
          ...validateArticle(repairedArticle, {
            filename: `${repairedArticle.slug}.json`,
            allArticles: entries,
            config,
          }),
          ...validateSisterLinks(repairedArticle),
        ];
        if (repairedErrors.length === 0) {
          article = repairedArticle;
          errors = [];
        } else {
          errors = repairedErrors;
        }
      }
    } catch (err) {
      console.warn(`   ⚠️ repair call failed: ${String(err?.message ?? err).slice(0, 300)}`);
    }
  }

  if (errors.length) {
    const rejectedPath = join(REPO_ROOT, "scripts", `.rejected-${task.taskId}.json`);
    writeFileSync(rejectedPath, `${JSON.stringify({ errors, article }, null, 2)}\n`);
    throw new Error(`article failed validation after repair; draft kept at ${rejectedPath}`);
  }

  const dupSlug = findNearDuplicate(entries, article);
  if (dupSlug) {
    console.warn(`   ⏭️  near-duplicate of "${dupSlug}"; not publishing`);
    return { skipped: true };
  }

  const path = writeArticleFile(article);
  console.log(`   💾 saved ${path}`);
  return { article, path };
}

/* ─────────────────────────────── main ──────────────────────────────── */

function parseArgs(argv) {
  const args = { catchup: true };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--show-prompt") args.showPrompt = true;
    else if (a === "--no-catchup") args.catchup = false;
    else if (a === "--date") args.date = argv[++i];
    else if (a === "--lane") args.lane = argv[++i];
    else if (a === "--task") args.task = argv[++i];
    else throw new Error(`unknown argument ${a}`);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);
  const dateStr = args.date ?? process.env.CUSTOMERCARE_GENERATION_DATE ?? todayInMuscat();
  const config = loadEditorialConfig();
  const omanContext = loadOmanContext();
  const registry = loadSourceRegistry();
  let entries = loadArticles();

  console.log(`📅 Oman date: ${dateStr} (${humanDate(dateStr)})`);

  let generated = 0;
  let failed = 0;

  const runOne = async (task, label) => {
    console.log(`\n📝 ${label}: [${task.series}] ${task.workingTitle} (${task.taskId})`);
    try {
      const result = generateForTask(task, {
        config,
        omanContext,
        registry,
        entries,
        showPrompt: args.showPrompt,
        dryRun: args.dryRun,
      });
      if (result?.article) {
        generated += 1;
        entries = loadArticles();
        const { errors } = await runValidation({});
        if (errors.length) {
          unlinkSync(join(ARTICLES_DIR, `${result.article.slug}.json`));
          entries = loadArticles();
          throw new Error(`library validation regressed after write; rolled back:\n  ${errors.join("\n  ")}`);
        }
      }
      return result;
    } catch (err) {
      failed += 1;
      console.error(`   ❌ ${String(err?.message ?? err)}`);
      return { failed: true };
    }
  };

  if (isDateCovered(entries, dateStr) && !args.lane && !args.task) {
    console.log(`✅ ${dateStr} already has an article; nothing to do for today.`);
  } else {
    const task = selectTask(config, entries, dateStr, { laneKey: args.lane, taskKey: args.task });
    if (!task) {
      console.log("📭 no lane configured for this weekday");
    } else {
      await runOne(task, "today");
    }
  }

  if (args.catchup && !args.lane && !args.task && !args.dryRun) {
    const state = loadState();
    const catchUpTask = findCatchUpTask(config, entries, dateStr, state);
    if (catchUpTask) {
      const result = await runOne(catchUpTask, `catch-up for ${catchUpTask.dateStr}`);
      recordCatchUpAttempt(state, catchUpTask.dateStr, result?.article ? "generated" : result?.skipped ? "skipped" : "failed");
    }
  }

  console.log(`\n✅ Done! Generated: ${generated}${failed ? `, Failed: ${failed}` : ""}`);
  if (failed > 0 && generated === 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(`fatal: ${String(err?.stack ?? err)}`);
  process.exit(1);
});
