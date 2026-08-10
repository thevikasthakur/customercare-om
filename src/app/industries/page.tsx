import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneOff, Sparkles } from "lucide-react";
import { industries } from "@/data/industries";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "For Omani enterprises still running IVR menus and human agent floors: AI Customer Care replaces press-1 queues with Customer Service Voice AI Agents in nine languages.",
};

const ivr = [
  "Press 1 for Arabic, press 2 for English, then hold",
  "Callers repeat their story to every department",
  "Peak hours mean queues; nights mean voicemail",
  "One language menu for a nine-language customer base",
  "Agent floors that cost more every single year",
  "Reporting that counts calls but explains nothing",
];

const vox = [
  "Callers just speak, in any of nine languages",
  "Context follows the customer across channels and agents",
  "Every call answered in under a second, day or night",
  "Omani Arabic handled naturally, not as an afterthought",
  "Your best agents keep the hard conversations only",
  "Every conversation scored, attributed, and reported in OMR",
];

const sectors: { title: string; desc: string; slugs: string[] }[] = [
  {
    title: "Banking, insurance & financial services",
    desc: "Claims intake, policy queries, and payment reminders under Central Bank of Oman customer-communication expectations.",
    slugs: ["insurance-ai-customer-service", "mortgage-brokers-ai-customer-service"],
  },
  {
    title: "Healthcare networks",
    desc: "Clinic groups, dental chains, and wellness operators triaging thousands of patient calls under Ministry of Health privacy expectations.",
    slugs: [
      "medical-and-wellness-ai-customer-service",
      "dental-clinics-ai-customer-service",
      "veterinary-clinics-ai-customer-service",
      "spas-ai-customer-service",
    ],
  },
  {
    title: "Property, facilities & development",
    desc: "Developers, property managers, and facilities operators handling tenant lines, maintenance queues, and leasing enquiries at portfolio scale.",
    slugs: [
      "property-management-ai-customer-service",
      "real-estate-agencies-ai-customer-service",
      "contractors-and-builders-ai-customer-service",
      "cleaning-companies-ai-customer-service",
      "pest-control-ai-customer-service",
      "moving-companies-ai-customer-service",
    ],
  },
  {
    title: "Automotive & mobility",
    desc: "Dealer groups, service networks, and transport fleets where every missed call is a lost booking or a stranded customer.",
    slugs: ["car-dealers-and-workshops-ai-customer-service", "taxi-and-transport-ai-customer-service"],
  },
  {
    title: "Retail & e-commerce groups",
    desc: "Where-is-my-order lines, returns, and store enquiries for national retail brands and marketplace operators.",
    slugs: ["ecommerce-and-retail-ai-customer-service"],
  },
  {
    title: "Travel & hospitality",
    desc: "Booking changes, itinerary questions, and khareef-season surges for travel groups and hospitality operators.",
    slugs: ["travel-agencies-ai-customer-service"],
  },
  {
    title: "Professional & business services",
    desc: "Law firms, agencies, staffing groups, education providers, and technology companies with reception lines their teams cannot keep up with.",
    slugs: [
      "law-firms-ai-customer-service",
      "marketing-agencies-ai-customer-service",
      "public-relations-firms-ai-customer-service",
      "saas-companies-ai-customer-service",
      "staffing-agencies-ai-customer-service",
      "tuition-centres-ai-customer-service",
    ],
  },
  {
    title: "Field-service & utilities contractors",
    desc: "Electrical, plumbing, carpentry, and solar operations dispatching crews from a constantly ringing service line.",
    slugs: [
      "electrical-contractors-ai-customer-service",
      "plumbing-businesses-ai-customer-service",
      "carpentry-and-joinery-ai-customer-service",
      "solar-energy-companies-ai-customer-service",
    ],
  },
];

const byName = Object.fromEntries(industries.map((i) => [i.slug, i.name]));

export default function IndustriesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Industries</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            <span className="text-lime">Your IVR had a good run.</span>
            <br />
            Your customers disagree.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            AI Customer Care is built for Omani enterprises still running press-1 menus
            and human agent floors. Replace the queue with Customer Service
            Voice AI Agents that handle customer queries in nine languages, and
            let your people handle what actually needs people.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Book a Demo <span aria-hidden>+</span>
            </Link>
            <Link
              href="/enterprise/"
              className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Enterprise
            </Link>
          </div>
        </div>
      </section>

      {/* ── IVR vs AI Customer Care ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            <div className="bg-ink-2 p-8 md:p-10">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <PhoneOff className="h-4 w-4" aria-hidden /> The IVR you run today
              </p>
              <ul className="mt-6 space-y-3.5">
                {ivr.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 text-muted-foreground/50" aria-hidden>✕</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink-3 p-8 md:p-10">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-lime">
                <Sparkles className="h-4 w-4" aria-hidden /> The line AI Customer Care runs
              </p>
              <ul className="mt-6 space-y-3.5">
                {vox.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 text-lime" aria-hidden>✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 divide-x divide-[rgba(212,255,79,0.28)] border-y border-[rgba(212,255,79,0.28)] md:grid-cols-4">
            {[
              { v: "0s", l: "Hold time" },
              { v: "31%", l: "Higher first-call resolution" },
              { v: "68%", l: "Lower cost per call" },
              { v: "9", l: "Languages, one line" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-medium tracking-tight">{s.v}</p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector directory ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Where we deploy</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl">
            Find your <span className="text-lime">sector</span>.
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {sectors.map((s) => (
              <div key={s.title} className="border-t border-line-strong pt-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-lg text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.slugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/industries/${slug}/`}
                      className="inline-flex items-center gap-1.5 border border-border bg-ink-2 px-3.5 py-2 text-xs font-medium text-muted-foreground hover:bg-ink-3 hover:text-foreground transition-colors"
                    >
                      {byName[slug] ?? slug}
                      <ArrowRight className="h-3 w-3 text-lime" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
