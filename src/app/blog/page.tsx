import type { Metadata } from "next";
import Link from "next/link";
import ArticleThumbnail from "@/components/ArticleThumbnail";
import JsonLd from "@/components/JsonLd";
import { CtaBanner } from "@/components/sections";
import { site } from "@/data/site";
import {
  formatArticleDate,
  getPublishedArticles,
  getSeriesList,
  isScheduled,
  readTimeMinutes,
} from "@/lib/articles";

/** Dev-only marker: this article is dated ahead and is not live yet. */
function ScheduledTag({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span className="ml-2 border border-[rgba(212,255,79,0.45)] px-1.5 py-0.5 text-[0.6rem] text-lime">
      SCHEDULED
    </span>
  );
}

export const metadata: Metadata = {
  title: "Blog: Customer Service in Oman, Explained Simply",
  description:
    "A daily read on customer care in Oman: the rules from MTCIT and TRA in plain language, the seasons that move demand, and how AI helps Omani businesses serve customers better.",
  alternates: {
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

export default function BlogIndexPage() {
  const articles = getPublishedArticles();
  const seriesList = getSeriesList();
  const [featured, ...rest] = articles;

  const collection = {
    "@context": "https://schema.org",
    "@type": ["CollectionPage", "Blog"],
    "@id": `${site.url}/blog/#blog`,
    name: `${site.name} Blog`,
    url: `${site.url}/blog/`,
    inLanguage: "en-OM",
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.slice(0, 12).map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/blog/${a.slug}/`,
        name: a.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={collection} />
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow inline-block mb-6">Blog · One new read every day</span>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl leading-[1.06]">
            Customer service in Oman, <span className="accent-italic">explained simply</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            The rules, the seasons, and the technology that shape how Omani
            businesses serve their customers. Plain language, worked examples,
            no jargon.
          </p>
          {seriesList.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {seriesList.map((s) => (
                <Link
                  key={s.slug}
                  href={`/blog/series/${s.slug}/`}
                  className="border border-line-strong px-3 py-1.5 text-xs text-muted-foreground hover:border-lime hover:text-lime transition-colors"
                >
                  {s.series}
                </Link>
              ))}
            </div>
          )}
          <p className="mt-6 text-sm text-muted-foreground">
            <a href="/blog/feed.xml" className="text-lime underline underline-offset-4 hover:brightness-110">
              RSS feed
            </a>
          </p>
        </div>
      </section>

      {featured && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <Link
              href={`/blog/${featured.slug}/`}
              className="group grid overflow-hidden border border-[rgba(212,255,79,0.32)] bg-ink-2 hover:bg-ink-3 transition-colors lg:grid-cols-2"
            >
              <ArticleThumbnail
                article={featured}
                className="!border-b lg:!border-b-0 lg:border-l lg:order-2 h-full"
              />
              <div className="p-8 md:p-12 lg:order-1">
                <p className="eyebrow">
                  Latest · {featured.series} · {formatArticleDate(featured.publishDate)}
                  <ScheduledTag show={isScheduled(featured)} />
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl leading-[1.1] group-hover:text-lime transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <p className="mt-6 text-sm font-medium text-lime">
                  Read it ({readTimeMinutes(featured)} min) <span aria-hidden>&rarr;</span>
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {rest.length > 0 ? (
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}/`} className="group bg-ink-2 hover:bg-ink-3 transition-colors">
                  <ArticleThumbnail article={a} />
                  <div className="p-6">
                    <p className="eyebrow">
                      {a.series} · {formatArticleDate(a.publishDate)}
                      <ScheduledTag show={isScheduled(a)} />
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium leading-snug group-hover:text-lime transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                    <p className="mt-4 text-xs text-muted-foreground">{readTimeMinutes(a)} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            !featured && (
              <p className="text-center text-muted-foreground">
                The first article publishes soon. Subscribe to the RSS feed to catch it.
              </p>
            )
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
