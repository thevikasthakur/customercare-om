/**
 * Markdown content negotiation for AI agents (Vercel Routing Middleware,
 * wired up by the `proxy` entry in vercel.json).
 *
 * There is exactly one public URL per page. Ask for it as HTML and you get
 * HTML; ask for it as Markdown and you get Markdown:
 *
 *   curl -H "Accept: text/markdown" https://customercare.om/product/smart-follow-ups/
 *
 * `scripts/ai-readability.mjs` exports a Markdown twin beside every page, but
 * those files are an implementation detail: they are the payload this proxy
 * fetches and serves under the page's own URL, and any request that asks for
 * one directly is redirected to the canonical page. One piece of content, one
 * address.
 *
 * Browsers send `text/html` and are unaffected. Both variants carry
 * `Vary: Accept` so caches never serve one where the other was asked for.
 */
import { next } from "@vercel/functions";

const MARKDOWN = "text/markdown; charset=utf-8";

/**
 * Set on the proxy's own fetch of a twin so that request reaches the file
 * instead of being redirected back to the page. Anyone can send it; all it
 * exposes is the same Markdown a negotiated request already gets.
 */
const TWIN_FETCH = "x-markdown-twin-fetch";

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

/** The inverse: `/about.md` -> `/about/`, `/index.md` -> `/`. */
function pageFor(pathname: string): string {
  const stem = pathname.replace(/\.md$/i, "");
  return stem === "/index" ? "/" : `${stem}/`;
}

/** Fetches a twin from this deployment; null when the page has none. */
async function fetchTwin(request: Request, twin: URL): Promise<Response | null> {
  const headers = new Headers({ [TWIN_FETCH]: "1" });
  // Preview deployments sit behind Vercel Authentication; pass the caller's
  // credentials through so the sub-request is allowed wherever they are.
  for (const name of ["cookie", "authorization", "x-vercel-protection-bypass"]) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const response = await fetch(twin, { method: request.method, headers, redirect: "manual" });
  return response.ok ? response : null;
}

export default async function markdown(request: Request): Promise<Response> {
  if (request.method !== "GET" && request.method !== "HEAD") return next();
  if (request.headers.has(TWIN_FETCH)) return next();

  const url = new URL(request.url);

  // A twin is not a public address. Anyone arriving at one gets sent to the
  // page it belongs to, so the content has a single canonical URL.
  if (url.pathname.endsWith(".md")) {
    return Response.redirect(new URL(pageFor(url.pathname), url.origin), 301);
  }

  const twin = twinFor(url.pathname);
  // Assets and discovery files (`/llms.txt` etc.) get their headers from
  // vercel.json.
  if (!twin) return next();

  if (prefersMarkdown(request.headers.get("accept") ?? "")) {
    const found = await fetchTwin(request, new URL(twin, url.origin));
    // Pages without a twin (error and utility routes) fall through to HTML.
    if (found) {
      const headers = new Headers(found.headers);
      // fetch() already decoded the body, so the upstream framing is stale.
      headers.delete("content-encoding");
      headers.delete("content-length");
      headers.set("content-type", MARKDOWN);
      headers.set("vary", "Accept");
      return new Response(found.body, { status: 200, headers });
    }
  }

  return next({ headers: { vary: "Accept" } });
}
