import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { learnArticles } from "@/data/learn";
import { PageHero, ProseSections, CtaBanner } from "@/components/sections";

export function generateStaticParams() {
  return learnArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = learnArticles.find((x) => x.slug === slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt };
}

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = learnArticles.find((x) => x.slug === slug);
  if (!a) notFound();

  return (
    <>
      <PageHero badge={`Learn · ${a.date}`} title={a.title} sub={a.excerpt} cta={false} />
      <article className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProseSections sections={a.sections} />
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
