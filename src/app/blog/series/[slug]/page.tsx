import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleThumbnail from "@/components/ArticleThumbnail";
import JsonLd from "@/components/JsonLd";
import { CtaBanner } from "@/components/sections";
import { site } from "@/data/site";
import {
  formatArticleDate,
  getArticlesBySeriesSlug,
  getSeriesList,
  readTimeMinutes,
} from "@/lib/articles";

/** What each series is about, shown on its page and in its meta description. */
const SERIES_DESCRIPTIONS: Record<string, string> = {
  "customer-service-playbook":
    "One customer service skill, metric or practice per article, taught with worked examples an Omani team can copy.",
  "oman-service-pulse":
    "The Monday scan of Oman's official announcements, from MTCIT and TRA to the Ministry of Labour, translated into what customer-facing businesses should do.",
  "ai-explained-simply":
    "Conversational AI explained in plain language, from how machines understand Omani Arabic to what training an agent really involves.",
  "your-data-your-rights":
    "Oman's Personal Data Protection Law, consent and consumer rights, written for both the customer whose data it is and the business holding it.",
  "business-owner-playbook":
    "Real operational pains of running customer service in Oman, costed in OMR, with the fixes compared honestly.",
  "the-weekend-read":
    "Friday stories of work and service life in Oman, told through the people behind the counter.",
  "season-ready":
    "Getting your business ready for what Oman's calendar brings next: Ramadan, Khareef, National Day, Muscat Nights and more.",
};

export function generateStaticParams() {
  return getSeriesList().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSeriesList().find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.series}, from the ${site.name} Blog`,
    description: SERIES_DESCRIPTIONS[slug] ?? `Articles in the ${s.series} series.`,
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSeriesList().find((x) => x.slug === slug);
  if (!s) notFound();
  const articles = getArticlesBySeriesSlug(slug);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${s.series}, from the ${site.name} Blog`,
    url: `${site.url}/blog/series/${slug}/`,
    inLanguage: "en-OM",
    isPartOf: { "@id": `${site.url}/blog/#blog` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
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
          <span className="eyebrow inline-block mb-6">
            <Link href="/blog/" className="hover:text-lime transition-colors">
              Blog
            </Link>{" "}
            · Series
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl leading-[1.08]">{s.series}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {SERIES_DESCRIPTIONS[slug] ?? `Every article in the ${s.series} series.`}
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}/`} className="group bg-ink-2 hover:bg-ink-3 transition-colors">
                <ArticleThumbnail article={a} />
                <div className="p-6">
                  <p className="eyebrow">{formatArticleDate(a.publishDate)}</p>
                  <h2 className="mt-3 font-display text-xl font-medium leading-snug group-hover:text-lime transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{readTimeMinutes(a)} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
