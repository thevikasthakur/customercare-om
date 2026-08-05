import { PageHero, ProseSections } from "@/components/sections";
import type { Section } from "@/data/types";

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero badge={`Last updated: ${updated}`} title={title} cta={false} />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProseSections sections={sections} />
        </div>
      </section>
    </>
  );
}
