/**
 * Markdown content negotiation for AI agents.
 *
 * Every page is exported twice by `scripts/ai-readability.mjs`: as HTML and as
 * a Markdown twin at the same path plus `.md`. This function lets an agent ask
 * for either at the *same* URL:
 *
 *   curl -H "Accept: text/markdown" https://customercare.om/product/smart-follow-ups/
 *
 * Browsers send `text/html` and are unaffected. Both variants carry
 * `Vary: Accept` so caches never serve one where the other was asked for.
 */
import type { Config, Context } from "@netlify/edge-functions";

const MARKDOWN = "text/markdown; charset=utf-8";

/**
 * True only when the client asked for Markdown at least as strongly as HTML.
 * A browser sending `text/html,...,*​/*;q=0.8` must never be given Markdown.
 */
function prefersMarkdown(accept: string): boolean {
  if (!accept.toLowerCase().includes("text/markdown")) return false;

  let markdown = -1;
  let html = -1;

  for (const entry of accept.split(",")) {
    const [rawType, ...params] = entry.trim().split(";");
    const type = rawType.trim().toLowerCase();

    let q = 1;
    for (const p of params) {
      const [k, v] = p.split("=").map((s) => s.trim().toLowerCase());
      if (k === "q") {
        const parsed = Number.parseFloat(v);
        if (Number.isFinite(parsed)) q = parsed;
      }
    }

    if (type === "text/markdown") markdown = Math.max(markdown, q);
    else if (type === "text/html" || type === "application/xhtml+xml") {
      html = Math.max(html, q);
    }
  }

  return markdown > 0 && markdown >= html;
}

/** `/about/` -> `/about.md`, `/` -> `/index.md`. Null for asset requests. */
function twinFor(pathname: string): string | null {
  if (pathname === "/") return "/index.md";
  if (/\.[a-z0-9]+$/i.test(pathname)) return null;
  return `${pathname.replace(/\/+$/, "")}.md`;
}

function withVary(response: Response, contentType?: string): Response {
  const out = new Response(response.body, response);
  if (contentType) out.headers.set("content-type", contentType);

  const existing = out.headers.get("vary");
  const parts = existing ? existing.split(",").map((s) => s.trim()) : [];
  if (!parts.some((p) => p.toLowerCase() === "accept")) parts.push("Accept");
  out.headers.set("vary", parts.join(", "));

  return out;
}

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);

  // Discovery files are Markdown despite the .txt extension the spec mandates.
  if (url.pathname === "/llms.txt" || url.pathname === "/llms-full.txt") {
    const response = await context.next();
    return response.ok ? withVary(response, MARKDOWN) : response;
  }

  // Direct hit on a twin: static hosting would call it text/plain or worse.
  if (url.pathname.endsWith(".md")) {
    const response = await context.next();
    return response.ok ? withVary(response, MARKDOWN) : response;
  }

  if (prefersMarkdown(request.headers.get("accept") ?? "")) {
    const twin = twinFor(url.pathname);
    if (twin) {
      const rewritten = await context.rewrite(new URL(twin, url.origin));
      // Pages without a twin (error and utility routes) fall through to HTML.
      if (rewritten.ok) return withVary(rewritten, MARKDOWN);
    }
  }

  const response = await context.next();
  const type = response.headers.get("content-type") ?? "";
  return type.includes("text/html") ? withVary(response) : response;
}

export const config: Config = {
  path: "/*",
  excludedPath: ["/_next/*", "/media/*"],
};
