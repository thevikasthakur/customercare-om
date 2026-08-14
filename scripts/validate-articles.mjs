/**
 * Shared validation for the CustomerCare.OM blog content store.
 *
 * One rulebook, three callers: the daily generator validates before it writes,
 * `npm run articles:validate` gates the commit, and `prebuild` gates the
 * Netlify deploy. Keeping every caller on the same module is what makes the
 * rules actually hold; duplicated checks drift.
 *
 * Articles are block-based JSON (never model-authored HTML), so React escapes
 * every string and nothing here ever reaches dangerouslySetInnerHTML.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = join(__dirname, "..");
export const ARTICLES_DIR = join(REPO_ROOT, "content", "articles");
export const EDITORIAL_PATH = join(REPO_ROOT, "content", "daily-editorial.json");
export const OMAN_CONTEXT_PATH = join(REPO_ROOT, "content", "oman-context.json");
export const SOURCE_REGISTRY_PATH = join(REPO_ROOT, "content", "source-registry.json");

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const KEBAB_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DASH_RE = /[—–]/; // em dash, en dash
const HTML_RE = /<\/?[a-z][^>]*>/i;
// Links live in segment href fields; markdown syntax in a text value renders
// literally on the page ("[after closing time](https://...)").
const MARKDOWN_LINK_RE = /\[[^\]\n]+\]\([^)\s]+\)/;
const OWN_DOMAIN_RE = /^https?:\/\/(www\.)?customercare\.om/i;
// The sister product. Links to it are editorial cross-recommendations, not
// evidence: allowed without a sources[] entry, capped at one per article,
// and never listed as a source.
const SISTER_DOMAIN_RE = /^https:\/\/(www\.)?chatbot\.om/i;
const SOURCE_KINDS = new Set(["oman-official", "regional-official", "media", "analysis", "vendor"]);
const CALLOUT_TONES = new Set(["key", "note", "tip", "brand"]);
const STATUSES = new Set(["draft", "published"]);
// Phrases that rot: an article published on a date must not lean on them.
const BANNED_TEMPORAL = ["as of today", "next year", "coming soon", "when 2027 arrives", "when 2028 arrives"];

/**
 * Local-register rules. This site is read inside Oman, so writing that
 * explains Oman to Omanis, or that labels the audience by nationality,
 * reads as foreign and machine written. Each rule carries the fix.
 */
const LOCAL_REGISTER = [
  {
    re: /\bOmani\s+(customers?|callers?|clients?|buyers?|shoppers?|consumers?|patients?|guests?|visitors?|tenants?)\b/i,
    message:
      'nationality used as an audience label. Inside Oman "Omani" means nationals, who are a minority of any customer base. Write "customers", "your customers" or "callers".',
  },
  {
    re: /\bMuslim\s+(employees?|staff|workers?|workforce|colleagues?)\b/i,
    message:
      'the "Muslim" qualifier on Ramadan working rules is legal boilerplate every reader here already assumes. Write "staff" or "your team".',
  },
  {
    re: /\bRoyal Decree\s*\d+\s*\/\s*\d{4}/i,
    regulatedOnly: true,
    message:
      "decree number cited inline in a practical article. Readers here know these rules exist; name the rule plainly and leave the citation to sources[].",
  },
];
const REGULATED_CATEGORIES = new Set(["Rules & Updates", "Privacy & Consumer Rights"]);

/* ────────────────────────────── loaders ────────────────────────────── */

export function loadJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function loadEditorialConfig() {
  return loadJson(EDITORIAL_PATH);
}

export function loadOmanContext() {
  return loadJson(OMAN_CONTEXT_PATH);
}

export function loadSourceRegistry() {
  return loadJson(SOURCE_REGISTRY_PATH);
}

export function loadArticles() {
  if (!existsSync(ARTICLES_DIR)) return [];
  return readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((file) => ({ file, article: loadJson(join(ARTICLES_DIR, file)) }));
}

/* ─────────────────────────── text extraction ───────────────────────── */

function segmentsText(segments) {
  return (segments ?? []).map((s) => s?.text ?? "").join("");
}

/** Every human-readable string in an article, flattened. */
export function articlePlainText(article) {
  const parts = [article.title, article.excerpt];
  for (const b of article.blocks ?? []) {
    switch (b?.type) {
      case "lead":
        parts.push(b.text);
        break;
      case "heading":
        parts.push(b.text);
        break;
      case "paragraph":
        parts.push(segmentsText(b.segments));
        break;
      case "list":
        for (const item of b.items ?? []) parts.push(segmentsText(item));
        break;
      case "quote":
        parts.push(b.quote, b.attribution);
        break;
      case "highlight":
        parts.push(b.text);
        break;
      case "callout":
        parts.push(b.title, ...(b.paragraphs ?? []));
        break;
      case "table":
        parts.push(b.caption ?? "");
        parts.push((b.headers ?? []).join(" "));
        for (const row of b.rows ?? []) {
          for (const cell of row) parts.push(typeof cell === "string" ? cell : `${cell?.text ?? ""} ${cell?.note ?? ""}`);
        }
        break;
      case "faq":
        for (const item of b.items ?? []) parts.push(item?.q, item?.a);
        break;
      default:
        break;
    }
  }
  return parts.filter(Boolean).join("\n");
}

export function wordCount(article) {
  return articlePlainText(article).split(/\s+/).filter(Boolean).length;
}

function collectHrefs(article) {
  const hrefs = [];
  const fromSegments = (segments, where) => {
    for (const s of segments ?? []) if (s?.href) hrefs.push({ href: s.href, where });
  };
  (article.blocks ?? []).forEach((b, i) => {
    const where = `blocks[${i}] (${b?.type})`;
    if (b?.type === "paragraph") fromSegments(b.segments, where);
    if (b?.type === "list") for (const item of b.items ?? []) fromSegments(item, where);
    if (b?.type === "quote" && b.sourceUrl) hrefs.push({ href: b.sourceUrl, where });
  });
  return hrefs;
}

/* ─────────────────────────── field helpers ─────────────────────────── */

function isStr(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function lenBetween(v, min, max) {
  return typeof v === "string" && v.length >= min && v.length <= max;
}

function validDate(v) {
  if (!DATE_RE.test(v ?? "")) return false;
  const d = new Date(`${v}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v;
}

/* ─────────────────────────── block validation ──────────────────────── */

function validateSegments(segments, path, errors) {
  if (!Array.isArray(segments) || segments.length === 0) {
    errors.push(`${path}: segments must be a non-empty array`);
    return;
  }
  segments.forEach((s, i) => {
    if (!isStr(s?.text)) errors.push(`${path}.segments[${i}]: text is required`);
    if (s?.href !== undefined) {
      if (!isStr(s.href) || !(s.href.startsWith("/") || s.href.startsWith("https://"))) {
        errors.push(`${path}.segments[${i}]: href must start with "/" or "https://"`);
      }
    }
    for (const k of Object.keys(s ?? {})) {
      if (!["text", "href", "strong", "emphasis"].includes(k)) errors.push(`${path}.segments[${i}]: unknown key "${k}"`);
    }
  });
}

function validateBlocks(article, errors) {
  const blocks = article.blocks;
  if (!Array.isArray(blocks) || blocks.length < 8) {
    errors.push(`blocks: need at least 8 blocks, got ${Array.isArray(blocks) ? blocks.length : "none"}`);
    return;
  }
  if (blocks[0]?.type !== "lead") errors.push('blocks[0]: must be a "lead" block');

  const headingIds = new Map();
  blocks.forEach((b, i) => {
    const path = `blocks[${i}]`;
    switch (b?.type) {
      case "lead":
        if (i !== 0) errors.push(`${path}: "lead" is only allowed as the first block`);
        if (!isStr(b.text)) errors.push(`${path}: lead text required`);
        break;
      case "heading":
        if (b.level !== 2 && b.level !== 3) errors.push(`${path}: heading level must be 2 or 3`);
        if (!isStr(b.id) || !KEBAB_RE.test(b.id)) errors.push(`${path}: heading id must be lowercase kebab-case`);
        else headingIds.set(b.id, (headingIds.get(b.id) ?? 0) + 1);
        if (!isStr(b.text)) errors.push(`${path}: heading text required`);
        break;
      case "paragraph":
        validateSegments(b.segments, path, errors);
        break;
      case "list":
        if (typeof b.ordered !== "boolean") errors.push(`${path}: list.ordered must be boolean`);
        if (!Array.isArray(b.items) || b.items.length < 2) errors.push(`${path}: list needs at least 2 items`);
        else b.items.forEach((item, j) => validateSegments(item, `${path}.items[${j}]`, errors));
        break;
      case "quote": {
        if (!isStr(b.quote)) errors.push(`${path}: quote text required`);
        else if (b.quote.split(/\s+/).length > 40) errors.push(`${path}: quotes must stay under 40 words`);
        if (!isStr(b.attribution)) errors.push(`${path}: quote attribution required`);
        // Honesty rule: a quote is either the voice of a labeled composite
        // persona, or a real sourced quotation. Nothing in between.
        if (b.persona === true) {
          if (b.sourceUrl !== undefined) errors.push(`${path}: persona quotes must not carry a sourceUrl`);
        } else if (!isStr(b.sourceUrl) || !/^https:\/\//.test(b.sourceUrl)) {
          errors.push(`${path}: quote needs persona: true (composite voice) or an https sourceUrl (real quote)`);
        }
        break;
      }
      case "highlight":
        if (!isStr(b.text)) errors.push(`${path}: highlight text required`);
        else if (b.text.length < 30 || b.text.length > 220) {
          errors.push(`${path}: highlight must be one strong sentence, 30 to 220 characters (got ${b.text.length})`);
        }
        break;
      case "callout":
        if (!CALLOUT_TONES.has(b.tone)) errors.push(`${path}: callout tone must be one of ${[...CALLOUT_TONES].join(", ")}`);
        if (!isStr(b.title)) errors.push(`${path}: callout title required`);
        if (!Array.isArray(b.paragraphs) || b.paragraphs.length === 0 || !b.paragraphs.every(isStr)) {
          errors.push(`${path}: callout paragraphs must be non-empty strings`);
        }
        break;
      case "table": {
        if (!Array.isArray(b.headers) || b.headers.length < 2 || !b.headers.every(isStr)) {
          errors.push(`${path}: table needs at least 2 string headers`);
        }
        if (!Array.isArray(b.rows) || b.rows.length < 2) errors.push(`${path}: table needs at least 2 rows`);
        else {
          b.rows.forEach((row, r) => {
            if (!Array.isArray(row) || row.length !== (b.headers?.length ?? 0)) {
              errors.push(`${path}.rows[${r}]: row width must match headers`);
              return;
            }
            row.forEach((cell, c) => {
              const ok = isStr(cell) || (cell && typeof cell === "object" && isStr(cell.text));
              if (!ok) errors.push(`${path}.rows[${r}][${c}]: cell must be a string or {text, note}`);
            });
          });
        }
        break;
      }
      case "faq":
        if (!Array.isArray(b.items) || b.items.length < 2) errors.push(`${path}: faq needs at least 2 items`);
        else {
          b.items.forEach((item, j) => {
            if (!isStr(item?.q) || !isStr(item?.a)) errors.push(`${path}.items[${j}]: faq items need q and a strings`);
          });
        }
        break;
      case "divider":
        break;
      default:
        errors.push(`${path}: unknown block type "${b?.type}"`);
    }
  });

  for (const [id, count] of headingIds) {
    if (count > 1) errors.push(`heading id "${id}" appears ${count} times; ids must be unique`);
  }

  const hasMeansForYou = blocks.some(
    (b) => b?.type === "heading" && b.id === "what-this-means-for-you"
  );
  if (!hasMeansForYou) {
    errors.push('missing the required heading with id "what-this-means-for-you"');
  }

  const highlightCount = blocks.filter((b) => b?.type === "highlight").length;
  if (highlightCount > 2) errors.push(`found ${highlightCount} highlight blocks; at most 2 per article`);
}

/* ─────────────────────── thumbnail (SVG) safety ────────────────────── */

/**
 * The thumbnail is model-authored SVG. It is only ever rendered as a data:
 * URI inside an <img> (which cannot execute script), but defense in depth:
 * anything dynamic, external or embeddable is rejected at the store gate.
 */
const THUMBNAIL_FORBIDDEN = [
  [/<script\b/i, "script tag"],
  [/\son[a-z]+\s*=/i, "event handler attribute"],
  [/javascript:/i, "javascript: URL"],
  [/<foreignobject\b/i, "foreignObject"],
  [/<image\b/i, "embedded image"],
  [/<iframe\b|<embed\b|<object\b/i, "embedded document"],
  [/xlink:href/i, "xlink reference"],
  [/\bhref\s*=\s*["'](?!#)/i, "non-fragment href"],
  [/data:/i, "nested data: URI"],
  [/<!ENTITY|<!DOCTYPE/i, "DTD declaration"],
];

export function validateThumbnail(svg, errors) {
  if (!isStr(svg)) {
    errors.push("thumbnail: required SVG string missing");
    return;
  }
  const trimmed = svg.trim();
  if (!trimmed.startsWith("<svg") || !trimmed.endsWith("</svg>")) {
    errors.push("thumbnail: must be a self-contained <svg>...</svg> string");
    return;
  }
  if (trimmed.length < 300) errors.push("thumbnail: implausibly small SVG");
  if (trimmed.length > 20000) errors.push(`thumbnail: too large (${trimmed.length} chars; keep under 20000)`);
  if (!/viewBox\s*=\s*["']0 0 400 225["']/.test(trimmed)) {
    errors.push('thumbnail: must use viewBox="0 0 400 225"');
  }
  for (const [re, label] of THUMBNAIL_FORBIDDEN) {
    if (re.test(trimmed)) errors.push(`thumbnail: forbidden content (${label})`);
  }
}

/* ─────────────────────── policy (voice and brand) ──────────────────── */

function validatePolicy(article, config, errors) {
  const raw = JSON.stringify(article);
  if (DASH_RE.test(raw)) errors.push("em or en dash found; the site bans them everywhere");

  const text = articlePlainText(article);
  if (HTML_RE.test(text)) errors.push("raw HTML markup found inside article text");
  const md = text.match(MARKDOWN_LINK_RE);
  if (md) {
    errors.push(
      `markdown link syntax "${md[0].slice(0, 80)}" inside text; it renders literally. Links belong in a segment's href field.`
    );
  }

  const settings = config?.settings ?? {};
  const lower = text.toLowerCase();
  for (const term of settings.bannedTerms ?? []) {
    if (lower.includes(term.toLowerCase())) errors.push(`banned term "${term}" found in article text`);
  }
  for (const form of settings.wrongBrandForms ?? []) {
    if (text.includes(form)) errors.push(`wrong brand form "${form}"; the brand is written exactly "${settings.brandName}"`);
  }
  // The domain-as-name must carry its exact casing when used as a name in prose.
  const brand = settings.brandName ?? "CustomerCare.OM";
  const mentionRe = /customercare\.om/gi;
  let m;
  while ((m = mentionRe.exec(text)) !== null) {
    const found = text.slice(m.index, m.index + brand.length);
    const before = text.slice(Math.max(0, m.index - 12), m.index);
    const isUrl = /https?:\/\/$|https?:\/\/www\.$|\/\/$/.test(before);
    if (!isUrl && found !== brand) {
      errors.push(`brand written "${found}" in text; use exactly "${brand}" (links may use the bare domain)`);
      break;
    }
  }
  for (const phrase of BANNED_TEMPORAL) {
    if (lower.includes(phrase)) errors.push(`banned temporal phrase "${phrase}"`);
  }

  const regulated = REGULATED_CATEGORIES.has(article.category);
  for (const rule of LOCAL_REGISTER) {
    if (rule.regulatedOnly && regulated) continue;
    const global = new RegExp(rule.re.source, `${rule.re.flags.replace("g", "")}g`);
    const hits = [...new Set([...text.matchAll(global)].map((m) => m[0]))];
    if (hits.length) {
      errors.push(`local register: ${hits.map((h) => `"${h}"`).join(", ")} ${rule.message}`);
    }
  }
}

/* ───────────────────────── link and source rules ───────────────────── */

function knownInternalPaths(config, allArticles) {
  const paths = new Set((config?.sitePages ?? []).map((p) => p.path));
  paths.add("/blog/");
  for (const { article } of allArticles) paths.add(`/blog/${article.slug}/`);
  return paths;
}

function validateLinksAndSources(article, config, allArticles, errors) {
  const hrefs = collectHrefs(article);
  const internal = knownInternalPaths(config, allArticles);

  const sources = article.sources ?? [];
  if (!Array.isArray(sources)) {
    errors.push("sources must be an array");
    return;
  }
  const sourceUrls = new Set();
  const sourceIds = new Set();
  sources.forEach((s, i) => {
    if (!isStr(s?.id) || !KEBAB_RE.test(s.id)) errors.push(`sources[${i}]: id must be kebab-case`);
    else if (sourceIds.has(s.id)) errors.push(`sources[${i}]: duplicate source id "${s.id}"`);
    else sourceIds.add(s.id);
    if (!isStr(s?.label)) errors.push(`sources[${i}]: label required`);
    if (!isStr(s?.url) || !/^https:\/\//.test(s.url)) errors.push(`sources[${i}]: url must be https`);
    else if (OWN_DOMAIN_RE.test(s.url)) errors.push(`sources[${i}]: sources are external references; own-site pages are internal links, not sources`);
    else if (SISTER_DOMAIN_RE.test(s.url)) errors.push(`sources[${i}]: sister-site pages are cross-recommendations, not sources`);
    else if (sourceUrls.has(s.url)) errors.push(`sources[${i}]: duplicate source url`);
    else sourceUrls.add(s.url);
    if (!SOURCE_KINDS.has(s?.kind)) errors.push(`sources[${i}]: kind must be one of ${[...SOURCE_KINDS].join(", ")}`);
  });

  let internalCount = 0;
  let sisterCount = 0;
  for (const { href, where } of hrefs) {
    if (OWN_DOMAIN_RE.test(href)) {
      errors.push(`${where}: own-site link "${href}" must be a relative path`);
      continue;
    }
    if (SISTER_DOMAIN_RE.test(href)) {
      sisterCount += 1;
      continue;
    }
    if (href.startsWith("/")) {
      internalCount += 1;
      if (!internal.has(href)) {
        errors.push(`${where}: internal link "${href}" does not match any known site path`);
      }
      if (href === `/blog/${article.slug}/`) errors.push(`${where}: article links to itself`);
    } else if (!sourceUrls.has(href)) {
      errors.push(`${where}: external link ${href} is not listed in sources[]`);
    }
  }
  if (internalCount > 3) errors.push(`article has ${internalCount} internal links; keep it to at most 3`);
  if (sisterCount > 1) errors.push(`article has ${sisterCount} sister-site links; at most 1 cross-recommendation per article`);

  // Regulated categories must stand on official Omani ground.
  const regulated = new Set(["Rules & Updates", "Privacy & Consumer Rights"]);
  if (regulated.has(article.category)) {
    const officialCount = sources.filter((s) => s.kind === "oman-official").length;
    if (sources.length < 2 || officialCount < 1) {
      errors.push(
        `category "${article.category}" requires at least 2 sources including 1 oman-official (found ${sources.length} total, ${officialCount} official)`
      );
    }
  }
}

/* ───────────────────────── article validation ──────────────────────── */

export function validateArticle(article, { filename, allArticles = [], config } = {}) {
  const errors = [];
  const cfg = config ?? loadEditorialConfig();

  if (!article || typeof article !== "object") return ["article is not an object"];

  for (const field of ["id", "taskId", "slug", "title", "seoTitle", "excerpt", "seoDescription", "series", "category", "topic", "author", "publishDate", "modifiedDate", "reviewedDate", "reviewBy", "status", "ogImage"]) {
    if (!isStr(article[field])) errors.push(`${field}: required string missing`);
  }

  if (isStr(article.slug)) {
    if (!KEBAB_RE.test(article.slug)) errors.push("slug: must be lowercase kebab-case");
    if (article.slug.length > 80) errors.push("slug: keep under 80 characters");
    if (/\d{4}-\d{2}/.test(article.slug)) errors.push("slug: no dates in slugs");
    if (filename && filename !== `${article.slug}.json`) errors.push(`filename "${filename}" must equal "${article.slug}.json"`);
  }
  if (isStr(article.id) && isStr(article.taskId) && article.id !== `article-${article.taskId}`) {
    errors.push('id must be exactly "article-" + taskId');
  }

  if (isStr(article.title) && !lenBetween(article.title, 20, 105)) errors.push(`title: 20 to 105 characters (got ${article.title.length})`);
  if (isStr(article.seoTitle) && !lenBetween(article.seoTitle, 30, 70)) errors.push(`seoTitle: 30 to 70 characters (got ${article.seoTitle.length})`);
  if (isStr(article.excerpt) && !lenBetween(article.excerpt, 90, 240)) errors.push(`excerpt: 90 to 240 characters (got ${article.excerpt.length})`);
  if (isStr(article.seoDescription) && !lenBetween(article.seoDescription, 105, 175)) errors.push(`seoDescription: 105 to 175 characters (got ${article.seoDescription.length})`);

  const seriesSet = new Set();
  for (const lane of Object.values(cfg.lanes ?? {})) seriesSet.add(lane.series);
  for (const ov of cfg.datedOverrides ?? []) seriesSet.add(ov.series);
  if (isStr(article.series) && seriesSet.size && !seriesSet.has(article.series)) {
    errors.push(`series "${article.series}" is not a configured series`);
  }

  for (const field of ["publishDate", "modifiedDate", "reviewedDate", "reviewBy"]) {
    if (isStr(article[field]) && !validDate(article[field])) errors.push(`${field}: invalid date "${article[field]}"`);
  }
  if (validDate(article.publishDate) && validDate(article.modifiedDate) && article.modifiedDate < article.publishDate) {
    errors.push("modifiedDate must not be before publishDate");
  }
  if (validDate(article.publishDate) && validDate(article.reviewBy) && article.reviewBy <= article.publishDate) {
    errors.push("reviewBy must be after publishDate");
  }
  if (!STATUSES.has(article.status)) errors.push('status must be "draft" or "published"');

  if (!Array.isArray(article.tags) || article.tags.length < 3 || article.tags.length > 12 || !article.tags.every(isStr)) {
    errors.push("tags: 3 to 12 non-empty strings");
  }
  if (isStr(article.ogImage) && !article.ogImage.startsWith("/")) errors.push("ogImage must be a site-relative path");

  validateBlocks(article, errors);
  validateThumbnail(article.thumbnail, errors);
  validatePolicy(article, cfg, errors);
  validateLinksAndSources(article, cfg, allArticles.filter((e) => e.article.slug !== article.slug), errors);

  const words = wordCount(article);
  if (words < 550 || words > 2300) errors.push(`word count ${words} outside 550 to 2300`);

  return errors;
}

/* ─────────────────────── library-level validation ──────────────────── */

function trigrams(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const grams = new Set();
  for (let i = 0; i + 2 < words.length; i++) grams.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  return grams;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const g of a) if (b.has(g)) inter += 1;
  return inter / (a.size + b.size - inter);
}

export function validateLibrary(entries, config) {
  const errors = [];
  const seen = { id: new Map(), taskId: new Map(), slug: new Map(), title: new Map(), seoTitle: new Map() };
  for (const { file, article } of entries) {
    for (const key of Object.keys(seen)) {
      const v = article[key];
      if (!isStr(v)) continue;
      const prev = seen[key].get(v.toLowerCase());
      if (prev) errors.push(`duplicate ${key} "${v}" in ${file} and ${prev}`);
      else seen[key].set(v.toLowerCase(), file);
    }
  }
  const grams = entries.map(({ article }) => trigrams(articlePlainText(article)));
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const sim = jaccard(grams[i], grams[j]);
      if (sim > 0.55) {
        errors.push(
          `articles "${entries[i].article.slug}" and "${entries[j].article.slug}" are ${Math.round(sim * 100)}% trigram-similar; too close to publish both`
        );
      }
    }
  }
  return errors;
}

/* ─────────────────── editorial config validation ───────────────────── */

function validateWindow(win, path, errors) {
  if (!win) return;
  for (const k of ["startMonth", "startDay", "endMonth", "endDay"]) {
    if (!Number.isInteger(win[k])) errors.push(`${path}: window.${k} must be an integer`);
  }
}

export function validateEditorialConfig(config, omanContext, registry) {
  const errors = [];
  const raw = readFileSync(EDITORIAL_PATH, "utf8") + readFileSync(OMAN_CONTEXT_PATH, "utf8") + readFileSync(SOURCE_REGISTRY_PATH, "utf8");
  if (DASH_RE.test(raw)) errors.push("em or en dash found in a content config file");

  const registryIds = new Set((registry.sources ?? []).map((s) => s.id));
  const contextKeys = new Set([
    ...(omanContext.nationalDates ?? []).map((e) => e.key),
    ...(omanContext.islamicDates ?? []).map((e) => e.key),
    ...(omanContext.seasonalWindows ?? []).map((e) => e.key),
    ...(omanContext.milestones ?? []).map((e) => e.key),
  ]);

  const keys = new Set();
  const checkEntry = (entry, path) => {
    if (!isStr(entry.key) || !KEBAB_RE.test(entry.key)) errors.push(`${path}: key must be kebab-case`);
    else if (keys.has(entry.key)) errors.push(`${path}: duplicate key "${entry.key}"`);
    else keys.add(entry.key);
    if (!isStr(entry.workingTitle)) errors.push(`${path}: workingTitle required`);
    if (!isStr(entry.angle)) errors.push(`${path}: angle required`);
    for (const id of entry.sourceIds ?? []) {
      if (!registryIds.has(id)) errors.push(`${path}: unknown sourceId "${id}"`);
    }
    for (const ref of entry.eventRefs ?? []) {
      if (!contextKeys.has(ref)) errors.push(`${path}: unknown eventRef "${ref}"`);
    }
    validateWindow(entry.bestWindow, path, errors);
  };

  for (const [day, lane] of Object.entries(config.lanes ?? {})) {
    if (!/^[0-6]$/.test(day)) errors.push(`lanes: invalid weekday key "${day}"`);
    for (const field of ["key", "series", "category", "laneBrief"]) {
      if (!isStr(lane[field])) errors.push(`lane ${day}: ${field} required`);
    }
    if (!Array.isArray(lane.bank) || lane.bank.length === 0) errors.push(`lane ${day}: bank must be non-empty`);
    else lane.bank.forEach((entry, i) => checkEntry(entry, `lane ${day} bank[${i}]`));
  }
  (config.datedOverrides ?? []).forEach((ov, i) => {
    const path = `datedOverrides[${i}]`;
    if (!validDate(ov.date)) errors.push(`${path}: invalid date "${ov.date}"`);
    if (!isStr(ov.series) || !isStr(ov.category)) errors.push(`${path}: series and category required`);
    checkEntry(ov, path);
  });
  (config.sitePages ?? []).forEach((p, i) => {
    if (!isStr(p.path) || !p.path.startsWith("/")) errors.push(`sitePages[${i}]: path must start with "/"`);
    if (!isStr(p.title) || !isStr(p.context)) errors.push(`sitePages[${i}]: title and context required`);
  });
  for (const entry of [...(omanContext.islamicDates ?? []), ...(omanContext.milestones ?? [])]) {
    if (entry.approxDate && !validDate(entry.approxDate)) errors.push(`oman-context ${entry.key}: invalid approxDate`);
    if (entry.date && !validDate(entry.date)) errors.push(`oman-context ${entry.key}: invalid date`);
  }
  return errors;
}

/* ───────────────────────────── entry point ─────────────────────────── */

export async function runValidation({ checkExternalLinks = false } = {}) {
  const config = loadEditorialConfig();
  const omanContext = loadOmanContext();
  const registry = loadSourceRegistry();
  const entries = loadArticles();

  const errors = [];
  errors.push(...validateEditorialConfig(config, omanContext, registry).map((e) => `[config] ${e}`));
  for (const { file, article } of entries) {
    for (const err of validateArticle(article, { filename: file, allArticles: entries, config })) {
      errors.push(`[${file}] ${err}`);
    }
  }
  errors.push(...validateLibrary(entries, config).map((e) => `[library] ${e}`));

  if (checkExternalLinks) {
    const urls = new Set();
    for (const { article } of entries) for (const s of article.sources ?? []) urls.add(s.url);
    for (const url of urls) {
      try {
        const res = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(10000) });
        // Some government sites reject HEAD; retry those with GET before failing.
        if (res.status >= 400 && res.status !== 403 && res.status !== 405) {
          const res2 = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(15000) });
          if (res2.status >= 400) errors.push(`[links] ${url} responded ${res2.status}`);
        }
      } catch (err) {
        errors.push(`[links] ${url} failed: ${err?.message ?? err}`);
      }
    }
  }

  return { errors, articleCount: entries.length };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const checkExternalLinks = process.argv.includes("--check-links");
  runValidation({ checkExternalLinks }).then(({ errors, articleCount }) => {
    if (errors.length) {
      console.error(`✗ validation failed with ${errors.length} error(s) across ${articleCount} article(s):`);
      for (const e of errors) console.error(`  - ${e}`);
      process.exit(1);
    }
    console.log(`✓ ${articleCount} article(s) and the editorial config are valid`);
  });
}
