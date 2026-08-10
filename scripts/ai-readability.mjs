/**
 * Post-build pass that makes the static export readable by AI agents.
 *
 * Runs after `next build` and, for every exported page:
 *   1. writes a Markdown twin at the same path plus `.md`
 *   2. injects <link rel="canonical"> and <link rel="alternate" type="text/markdown">
 * then writes /llms.txt (curated index) and /llms-full.txt (whole site as one file).
 *
 * No dependencies: the exported HTML is machine generated and consistent, so a
 * small parser is cheaper and more predictable than pulling in a converter.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const OUT = "out";
const ORIGIN = "https://customercare.om";
const SITE_NAME = "AI Customer Care";

/** Routes that should not advertise a Markdown twin or appear in llms.txt. */
const EXCLUDED = new Set([
  "/product/",
  "/thank-you/",
  "/demo-confirmed/",
  "/book-for-conference/",
  "/book-for-conference-v2/",
]);
/** Error pages get neither a canonical nor a twin. */
const NO_CANONICAL = new Set(["/404/", "/_not-found/"]);

/* ────────────────────────────── HTML parsing ────────────────────────────── */

const VOID = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);
const DROP = new Set(["script", "style", "svg", "noscript", "template", "path", "circle"]);

const NAMED = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", copy: "©",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
  hellip: "…", middot: "·", ndash: "–", mdash: "—", times: "×", deg: "°",
  raquo: "»", laquo: "«", check: "✓", asymp: "≈",
};

function decode(s) {
  return s.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (m, e) => {
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X"
        ? parseInt(e.slice(2), 16)
        : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return NAMED[e] ?? m;
  });
}

function parseAttrs(raw) {
  const attrs = {};
  for (const m of raw.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g)) {
    attrs[m[1].toLowerCase()] = decode(m[3] ?? m[4] ?? m[5] ?? "");
  }
  return attrs;
}

/** Parse an HTML fragment into a lightweight tree. */
function parse(html) {
  const root = { tag: "#root", attrs: {}, children: [] };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<\/([a-zA-Z][-a-zA-Z0-9]*)\s*>|<([a-zA-Z][-a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^>])*?)(\/?)>/g;
  let last = 0;
  let m;

  const pushText = (text) => {
    if (!text) return;
    stack[stack.length - 1].children.push({ tag: "#text", text: decode(text) });
  };

  while ((m = re.exec(html))) {
    pushText(html.slice(last, m.index));
    last = re.lastIndex;

    if (m[0].startsWith("<!--")) continue;

    if (m[1]) {
      const tag = m[1].toLowerCase();
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === tag) {
          stack.length = i;
          break;
        }
      }
      continue;
    }

    const tag = m[2].toLowerCase();
    const node = { tag, attrs: parseAttrs(m[3] || ""), children: [] };
    stack[stack.length - 1].children.push(node);
    if (!VOID.has(tag) && !m[4]) stack.push(node);
  }
  pushText(html.slice(last));
  return root;
}

/* ──────────────────────────── Markdown rendering ─────────────────────────── */

const HEADING = { h1: "#", h2: "##", h3: "###", h4: "####", h5: "#####", h6: "######" };
const BLOCK = new Set([
  "address", "article", "aside", "blockquote", "details", "div", "dl", "dd", "dt",
  "fieldset", "figcaption", "figure", "footer", "form", "header", "hr", "li",
  "main", "nav", "ol", "p", "pre", "section", "summary", "table", "tbody",
  "td", "tfoot", "th", "thead", "tr", "ul", ...Object.keys(HEADING),
]);

function absolute(href) {
  if (!href) return "";
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
  return href.startsWith("/") ? ORIGIN + href : href;
}

function render(node) {
  if (node.tag === "#text") return node.text.replace(/\s+/g, " ");
  if (DROP.has(node.tag)) return "";
  if (node.attrs?.["aria-hidden"] === "true") return "";

  // Adjacent inline elements carry no whitespace in the source markup
  // (`<span>AC-10238</span><span>Running late</span>`), so insert one where
  // both sides produced text and neither already ends or starts with space.
  const inner = () => {
    let out = "";
    for (const child of node.children) {
      const chunk = render(child);
      if (!chunk) continue;
      const needsGap =
        out &&
        child.tag !== "#text" &&
        !/[\s\n]$/.test(out) &&
        !/^[\s\n]/.test(chunk) &&
        !/[([]$/.test(out);
      out += needsGap ? ` ${chunk}` : chunk;
    }
    return out;
  };
  const block = (s) => (s.trim() ? `\n\n${s.trim()}\n\n` : "");

  switch (node.tag) {
    case "br":
      return "\n";
    case "hr":
      return "\n\n---\n\n";
    case "img": {
      const alt = (node.attrs.alt || "").trim();
      return alt ? `![${alt}](${absolute(node.attrs.src)})` : "";
    }
    case "a": {
      const text = inner().trim();
      const href = absolute(node.attrs.href);
      if (!text) return "";
      return href ? `[${text}](${href})` : text;
    }
    case "strong":
    case "b": {
      const t = inner().trim();
      return t ? `**${t}**` : "";
    }
    case "em":
    case "i": {
      const t = inner().trim();
      return t ? `*${t}*` : "";
    }
    case "code": {
      const t = inner().trim();
      return t ? `\`${t}\`` : "";
    }
    case "li": {
      const t = inner().trim().replace(/\n{2,}/g, " ");
      return t ? `\n- ${t}` : "";
    }
    case "ul":
    case "ol":
      return block(inner());
    case "summary":
      // FAQ questions render as their own heading so the answer stays attached.
      return block(`### ${inner().trim()}`);
    case "dt": {
      const t = inner().trim();
      return t ? `\n- **${t}**` : "";
    }
    case "dd": {
      const t = inner().trim();
      return t ? `: ${t}` : "";
    }
    case "blockquote":
      return block(
        inner().trim().split("\n").map((l) => (l ? `> ${l}` : ">")).join("\n")
      );
    case "th":
    case "td":
      return ` ${inner().trim()} |`;
    case "tr": {
      const t = inner().trim();
      return t ? `\n|${t.startsWith("|") ? t.slice(1) : t}` : "";
    }
    case "table":
      return block(inner());
    default: {
      if (HEADING[node.tag]) {
        const t = inner().trim().replace(/\s+/g, " ");
        return t ? `\n\n${HEADING[node.tag]} ${t}\n\n` : "";
      }
      const content = inner();
      return BLOCK.has(node.tag) ? block(content) : content;
    }
  }
}

function tidy(md) {
  return md
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/ {2,}/g, " ")
    .replace(/\n +/g, "\n")
    .trim();
}

/* ────────────────────────────── Page handling ───────────────────────────── */

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (name === "index.html") files.push(full);
  }
  return files;
}

function firstMatch(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]).trim() : "";
}

const pages = [];
const stamp = new Date().toISOString().slice(0, 10);

for (const file of walk(OUT)) {
  const html = readFileSync(file, "utf8");
  const dir = relative(OUT, dirname(file));
  const route = dir === "" ? "/" : `/${dir.split(/[\\/]/).join("/")}/`;

  const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/i);
  const description = firstMatch(html, /<meta name="description" content="([^"]*)"/i);
  const noindex = /<meta name="robots"[^>]*content="[^"]*noindex/i.test(html);
  const skip = EXCLUDED.has(route) || noindex || NO_CANONICAL.has(route);

  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const body = mainMatch ? tidy(render(parse(mainMatch[1]))) : "";

  const mdPath = route === "/" ? "/index.md" : `${route.replace(/\/$/, "")}.md`;
  const canonical = ORIGIN + route;

  // 1. head links
  if (!NO_CANONICAL.has(route) && !/rel="canonical"/i.test(html)) {
    const head = [`<link rel="canonical" href="${canonical}"/>`];
    if (!skip) {
      head.push(`<link rel="alternate" type="text/markdown" href="${ORIGIN}${mdPath}"/>`);
    }
    writeFileSync(file, html.replace("</head>", `${head.join("")}</head>`));
  }

  if (skip || !body) continue;

  // 2. Markdown twin, with front matter carrying the canonical URL back
  const front = [
    "---",
    `title: ${JSON.stringify(title)}`,
    description ? `description: ${JSON.stringify(description)}` : null,
    `canonical: ${canonical}`,
    `site: ${SITE_NAME}`,
    `updated: ${stamp}`,
    "---",
  ].filter(Boolean).join("\n");

  writeFileSync(join(OUT, mdPath.replace(/^\//, "")), `${front}\n\n${body}\n`);
  pages.push({ route, mdPath, title, description, body });
}

/* ──────────────────────────── llms.txt generation ───────────────────────── */

const byRoute = new Map(pages.map((p) => [p.route, p]));
const shortTitle = (p) => p.title.replace(new RegExp(`\\s*\\|\\s*${SITE_NAME}$`), "").trim();
const trim = (s, n = 200) => {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "")}…`;
};

function linkLine(route) {
  const p = byRoute.get(route);
  if (!p) return null;
  const note = p.description ? `: ${trim(p.description)}` : "";
  return `- [${shortTitle(p)}](${ORIGIN}${route})${note}`;
}

function group(title, routes) {
  const lines = routes.map(linkLine).filter(Boolean);
  return lines.length ? `## ${title}\n\n${lines.join("\n")}\n` : "";
}

const productRoutes = pages.map((p) => p.route).filter((r) => r.startsWith("/product/")).sort();
const under = (prefix) =>
  pages.map((p) => p.route).filter((r) => r.startsWith(prefix) && r !== prefix).sort();

const preamble = `# ${SITE_NAME}

> Customer Service Voice AI Agents for Omani enterprises. They handle customer
> queries in Omani Arabic, Gulf Arabic, Standard Arabic, English, Swahili, Hindi,
> Bengali, Malayalam and Tamil, across phone, web chat, WhatsApp and email.

Every page on this site has a Markdown twin: append \`.md\` to any path, for
example \`/product/smart-follow-ups.md\`. \`/llms-full.txt\` contains the whole
site as a single Markdown document.

Key facts, so they do not have to be inferred:

- The product is one system with several capabilities, not a catalogue of separate products.
- It is ready out of the box. Customers do not hire specialists to build agents.
- Hosting is entirely inside Oman and no customer data leaves the Sultanate, in line with Oman's Personal Data Protection Law (Royal Decree 6/2022, in force February 2023).
- Going live takes about a week, most of which is procuring a SIP trunk from Omantel or Ooredoo. Chat and email channels need no trunk and can start the same day.
- Target customers are Omani enterprises currently running IVR menus and human agent floors.
- Based in Muscat, Sultanate of Oman. Serving Oman only.
`;

const llms = [
  preamble,
  group("Product", productRoutes),
  group("Who it is for", ["/industries/", "/enterprise/"]),
  group("Platform", ["/features/", "/integration/", "/template/"]),
  group("Reference", ["/guideline/oman/", "/comparison/"]),
  group("Company", ["/about/", "/contact/", "/book-a-demo/"]),
  group("Optional", [
    ...under("/industries/"),
    ...under("/features/"),
    ...under("/template/"),
    ...under("/integration/"),
    ...under("/learn/voice-ai/"),
  ]),
].filter(Boolean).join("\n");

writeFileSync(join(OUT, "llms.txt"), `${llms.trimEnd()}\n`);

const order = (p) => {
  const r = p.route;
  if (r === "/") return 0;
  if (r.startsWith("/product/")) return 1;
  if (r === "/enterprise/" || r === "/industries/") return 2;
  if (r.startsWith("/features")) return 3;
  return 4;
};

const full = [
  `# ${SITE_NAME}, full site content`,
  "",
  `> Generated ${stamp} from ${ORIGIN}. Every section below is one page.`,
  "",
  ...[...pages]
    .sort((a, b) => order(a) - order(b) || a.route.localeCompare(b.route))
    .map((p) => [
      "---",
      "",
      `# ${shortTitle(p)}`,
      "",
      `Source: ${ORIGIN}${p.route}`,
      p.description ? `\n${p.description}` : "",
      "",
      p.body,
      "",
    ].join("\n")),
].join("\n");

writeFileSync(join(OUT, "llms-full.txt"), full);

const kb = (s) => `${Math.round(s / 1024)}KB`;
console.log(
  `ai-readability: ${pages.length} Markdown twins, ` +
  `llms.txt ${kb(Buffer.byteLength(llms))}, llms-full.txt ${kb(Buffer.byteLength(full))}`
);
