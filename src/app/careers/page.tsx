import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero, CardGrid, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the VoxCare team in Muscat, engineering, linguistics, and customer success roles building Oman's voice AI platform.",
};

const roles = [
  { title: "Senior Speech ML Engineer", desc: "Own our Omani and Gulf Arabic acoustic models. Muscat or hybrid. OMR-competitive package." },
  { title: "Arabic Computational Linguist", desc: "Shape how our agents understand dialects from Dhofar to Musandam. Full-time, Muscat." },
  { title: "Customer Success Manager", desc: "Guide clinics, dealerships, and ministries to great launches. Bilingual Arabic/English." },
  { title: "Full-Stack Engineer (TypeScript)", desc: "Build the dashboard, workflow builder, and analytics our customers live in." },
  { title: "Solutions Engineer, Government", desc: "Design Personal Data Protection Law compliant deployments with public-sector IT teams." },
  { title: "Voice Talent (Omani Arabic)", desc: "Freelance recording work for custom branded voices. Muscat studio sessions." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Join the team"
        sub="We're building Oman's voice AI from Knowledge Oasis Muscat, a small team with a national mission, proud to hire and grow Omani talent."
        cta={false}
      />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CardGrid cols={2} items={roles} />
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Don&rsquo;t see your role? Write to{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>{" "}
           , exceptional people always have a desk here.
          </p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
