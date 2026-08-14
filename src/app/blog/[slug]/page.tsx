import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/ArticleBody";
import ArticleThumbnail from "@/components/ArticleThumbnail";
import JsonLd from "@/components/JsonLd";
import { CtaBanner } from "@/components/sections";
import { site } from "@/data/site";
import {
  articlePlainText,
  formatArticleDate,
  getArticleBySlug,
  getPublishedArticles,
  getRelatedArticles,
  isScheduled,
  readTimeMinutes,
  seriesSlug,
} from "@/lib/articles";

export function generateStaticParams() {
  return getPublishedArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  return {
    title: a.seoTitle,
    description: a.seoDescription,
    openGraph: {
      type: "article",
      title: a.title,
      description: a.seoDescription,
      publishedTime: a.publishDate,
      modifiedTime: a.modifiedDate,
      tags: a.tags,
      images: [{ url: a.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.seoDescription,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const words = articlePlainText(article).split(/\s+/).filter(Boolean).length;
  const url = `${site.url}/blog/${article.slug}/`;

  const posting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    image: `${site.url}${article.ogImage}`,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate,
    inLanguage: "en-OM",
    isAccessibleForFree: true,
    wordCount: words,
    articleSection: article.category,
    keywords: article.tags.join(", "),
    ...(article.sources.length ? { citation: article.sources.map((s) => s.url) } : {}),
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${site.url}/blog/` },
      { "@type": "ListItem", position: 2, name: article.series, item: `${site.url}/blog/series/${seriesSlug(article.series)}/` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const faqBlocks = article.blocks.filter((b) => b.type === "faq");
  const faqJsonLd = faqBlocks.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqBlocks.flatMap((b) =>
          (b.type === "faq" ? b.items : []).map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          }))
        ),
      }
    : null;

  return (
    <>
      <JsonLd data={posting} />
      <JsonLd data={breadcrumbs} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <section className="border-b border-border pt-32 pb-12 md:pt-40 md:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[42rem]">
            <p className="eyebrow">
              <Link href="/blog/" className="hover:text-lime transition-colors">
                Blog
              </Link>{" "}
              ·{" "}
              <Link
                href={`/blog/series/${seriesSlug(article.series)}/`}
                className="hover:text-lime transition-colors"
              >
                {article.series}
              </Link>{" "}
              · {formatArticleDate(article.publishDate)} · {readTimeMinutes(article)} min read
              {isScheduled(article) && (
                <span className="ml-2 border border-[rgba(212,255,79,0.45)] px-1.5 py-0.5 text-[0.6rem] text-lime">
                  SCHEDULED
                </span>
              )}
            </p>
            <h1 className="mt-5 text-3xl md:text-[2.75rem] leading-[1.12]">{article.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-[rgba(244,244,240,0.75)]">{article.excerpt}</p>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[42rem]">
            <ArticleBody blocks={article.blocks} />

            <div className="mt-14">
              {article.sources.length > 0 && (
                <details className="border border-border bg-ink-2 p-5 text-sm">
                  <summary className="cursor-pointer font-medium text-foreground">
                    Sources checked for this article
                  </summary>
                  <ul className="mt-3 space-y-1.5">
                    {article.sources.map((s) => (
                      <li key={s.id}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime underline underline-offset-4 decoration-[rgba(212,255,79,0.4)] hover:decoration-current"
                        >
                          {s.label}
                        </a>{" "}
                        <span className="text-muted-foreground">({s.kind})</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              <p className="mt-6 text-xs text-muted-foreground">
                Practical information, not legal advice. Rules and dates were checked on{" "}
                {formatArticleDate(article.reviewedDate)}; verify current official positions before acting.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((t) => (
                  <span key={t} className="border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl">Keep reading</h2>
            <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}/`} className="group bg-ink-2 hover:bg-ink-3 transition-colors">
                  <ArticleThumbnail article={a} />
                  <div className="p-6">
                    <p className="eyebrow">
                      {a.series} · {formatArticleDate(a.publishDate)}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium leading-snug group-hover:text-lime transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
