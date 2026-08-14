/**
 * Loader for the blog content store: one JSON file per article in
 * content/articles/. Bodies are a small block format rendered by React
 * (see components/ArticleBody.tsx), so every string is escaped by default
 * and generated content never goes through dangerouslySetInnerHTML.
 *
 * Reading happens with fs at build time only; the whole site is a static
 * export. Articles dated in the future are filtered out so a future-dated
 * file can never leak into a build.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

export type Segment = {
  text: string;
  href?: string;
  strong?: boolean;
  emphasis?: boolean;
};

export type TableCell = string | { text: string; note?: string };

export type Block =
  | { type: "lead"; text: string }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; segments: Segment[] }
  | { type: "list"; ordered: boolean; items: Segment[][] }
  | { type: "quote"; quote: string; attribution: string; sourceUrl?: string; persona?: boolean }
  | { type: "highlight"; text: string }
  | { type: "callout"; tone: "key" | "note" | "tip" | "brand"; title: string; paragraphs: string[] }
  | { type: "table"; caption?: string; compact?: boolean; headers: string[]; rows: TableCell[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "divider" };

export type ArticleSource = {
  id: string;
  label: string;
  url: string;
  kind: "oman-official" | "regional-official" | "media" | "vendor" | "analysis";
};

export type Article = {
  id: string;
  taskId: string;
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  seoDescription: string;
  series: string;
  category: string;
  topic: string;
  author: string;
  publishDate: string;
  modifiedDate: string;
  reviewedDate: string;
  reviewBy: string;
  status: "draft" | "published";
  tags: string[];
  ogImage: string;
  /**
   * Model-authored card artwork (400x225 SVG). Never rendered inline: it is
   * served as a data: URI inside an <img>, which isolates fragment IDs and
   * cannot execute script. Shown on the blog index, series pages and related
   * article cards, never on the article page itself.
   */
  thumbnail?: string;
  sources: ArticleSource[];
  blocks: Block[];
};

const ARTICLES_DIR = join(process.cwd(), "content", "articles");

/** Build-time "today" in Oman, overridable for reproducible builds. */
function contentAsOf(): string {
  return (
    process.env.CONTENT_AS_OF ??
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Muscat" }).format(new Date())
  );
}

/**
 * A production build never ships an article before its publish date. Local
 * development is the opposite need: `npm run dev` should show everything in
 * the store, including tomorrow's article, or a generated piece looks like it
 * vanished. Setting CONTENT_AS_OF explicitly opts back into strict filtering
 * at any date, which is what the build and any date-pinned check should use.
 */
function showsScheduled(): boolean {
  return process.env.NODE_ENV !== "production" && !process.env.CONTENT_AS_OF;
}

/** True when an article is dated ahead of the current content date. */
export function isScheduled(article: Article): boolean {
  return article.publishDate > contentAsOf();
}

let cache: Article[] | null = null;

function loadAll(): Article[] {
  if (cache) return cache;
  if (!existsSync(ARTICLES_DIR)) {
    cache = [];
    return cache;
  }
  cache = readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(ARTICLES_DIR, f), "utf8")) as Article);
  return cache;
}

export function getPublishedArticles(): Article[] {
  const asOf = contentAsOf();
  const preview = showsScheduled();
  return loadAll()
    .filter((a) => a.status === "published" && (preview || a.publishDate <= asOf))
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : a.publishDate > b.publishDate ? -1 : a.slug.localeCompare(b.slug)));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getPublishedArticles().find((a) => a.slug === slug);
}

/** Related articles scored by shared tags, category and series. */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const tags = new Set(article.tags.map((t) => t.toLowerCase()));
  return getPublishedArticles()
    .filter((a) => a.slug !== article.slug)
    .map((a) => {
      const shared = a.tags.filter((t) => tags.has(t.toLowerCase())).length;
      const score =
        shared * 2 + (a.category === article.category ? 1 : 0) + (a.series === article.series ? 1 : 0);
      return { a, score };
    })
    .sort((x, y) => y.score - x.score || (x.a.publishDate < y.a.publishDate ? 1 : -1))
    .slice(0, limit)
    .map(({ a }) => a);
}

function segmentsText(segments: Segment[]): string {
  return segments.map((s) => s.text).join("");
}

/** Plain-text body, used for RSS descriptions and word counts. */
export function articlePlainText(article: Article): string {
  const parts: string[] = [];
  for (const b of article.blocks) {
    switch (b.type) {
      case "lead":
      case "heading":
        parts.push(b.text);
        break;
      case "paragraph":
        parts.push(segmentsText(b.segments));
        break;
      case "list":
        for (const item of b.items) parts.push(segmentsText(item));
        break;
      case "quote":
        parts.push(`"${b.quote}" (${b.attribution})`);
        break;
      case "highlight":
        parts.push(b.text);
        break;
      case "callout":
        parts.push(b.title, ...b.paragraphs);
        break;
      case "table":
        if (b.caption) parts.push(b.caption);
        break;
      case "faq":
        for (const item of b.items) parts.push(item.q, item.a);
        break;
      default:
        break;
    }
  }
  return parts.join(" ");
}

export function readTimeMinutes(article: Article): number {
  const words = articlePlainText(article).split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}

export function formatArticleDate(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function seriesSlug(series: string): string {
  return series
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

export type SeriesInfo = { series: string; slug: string; count: number };

export function getSeriesList(): SeriesInfo[] {
  const bySeries = new Map<string, number>();
  for (const a of getPublishedArticles()) {
    bySeries.set(a.series, (bySeries.get(a.series) ?? 0) + 1);
  }
  return [...bySeries.entries()]
    .map(([series, count]) => ({ series, slug: seriesSlug(series), count }))
    .sort((a, b) => b.count - a.count || a.series.localeCompare(b.series));
}

export function getArticlesBySeriesSlug(slug: string): Article[] {
  return getPublishedArticles().filter((a) => seriesSlug(a.series) === slug);
}
