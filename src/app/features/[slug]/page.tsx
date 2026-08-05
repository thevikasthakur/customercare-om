import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features } from "@/data/features";
import { PageHero, ProseSections, CheckList, CtaBanner } from "@/components/sections";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  if (!f) return {};
  return { title: f.name, description: f.short };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  if (!f) notFound();

  return (
    <>
      <PageHero badge="Feature" title={f.heroTitle} sub={f.heroSub} />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProseSections sections={f.sections} />
          <div className="mx-auto max-w-3xl mt-12">
            <h2 className="text-xl font-bold mb-6">Capabilities</h2>
            <CheckList items={f.bullets} />
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
