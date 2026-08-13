import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { PageHero, CardGrid, Faq, CtaBanner } from "@/components/sections";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = industries.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: item.heroTitle, description: item.heroSub };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = industries.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero badge={item.name} title={item.heroTitle} sub={item.heroSub} />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
            The calls you&rsquo;re losing today
          </h2>
          <CardGrid items={item.painPoints.map((p) => ({ title: p.title, desc: p.desc }))} />
        </div>
      </section>
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
            What CustomerCare.OM handles for you
          </h2>
          <CardGrid cols={2} items={item.useCases.map((u) => ({ title: u.title, desc: u.desc }))} />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="rounded-2xl border p-8">
            <h2 className="text-xl font-bold tracking-tight">Built for Oman</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{item.omanNote}</p>
          </div>
        </div>
      </section>
      <Faq items={item.faqs} />
      <CtaBanner />
    </>
  );
}
