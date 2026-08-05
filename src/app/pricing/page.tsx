import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, Faq, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple OMR pricing for every stage, from a single shop in Muttrah to government-scale call volumes. First 100 minutes free.",
};

const plans = [
  {
    name: "Starter",
    price: "OMR 29",
    period: "/month",
    desc: "For small businesses that miss calls every day.",
    features: [
      "300 AI minutes included",
      "1 AI agent, 1 phone number",
      "Omani Arabic + all 9 languages",
      "Calendar booking & SMS follow-up",
      "Call transcripts & recordings",
      "Data hosted in Oman",
    ],
    cta: "Start Free",
    href: `${site.appUrl}/sign-up`,
  },
  {
    name: "Growth",
    price: "OMR 99",
    period: "/month",
    highlighted: true,
    desc: "For teams that live on the phone.",
    features: [
      "1,500 AI minutes included",
      "5 AI agents, 3 phone numbers",
      "CRM & helpdesk integrations",
      "AI workflow builder",
      "Warm transfers with context",
      "Analytics dashboard",
      "Priority support from Muscat",
    ],
    cta: "Start Free",
    href: `${site.appUrl}/sign-up`,
  },
  {
    name: "Enterprise & Government",
    price: "Custom",
    period: "",
    desc: "For banks, ministries, utilities, and national call volumes.",
    features: [
      "Unlimited scale, 1M+ calls",
      "Dedicated in-Oman infrastructure",
      "Personal Data Protection Law data-processing agreements",
      "Custom voices & fine-tuned models",
      "SLA with 99.99% uptime",
      "On-site onboarding in Oman",
    ],
    cta: "Book a Demo",
    href: "/book-a-demo/",
  },
];

const pricingFaqs = [
  {
    q: "Do prices include VAT?",
    a: "Prices are shown excluding Oman's 5% VAT. Invoices are issued in OMR by our Omani entity, so procurement and finance teams get local, VAT-compliant billing.",
  },
  {
    q: "What counts as an AI minute?",
    a: "Only connected talk-time. Ringing, voicemail drops, and failed calls are never billed. Unused minutes roll over for one month on all paid plans.",
  },
  {
    q: "What happens if I go over my included minutes?",
    a: "Overage is billed per minute at your plan's rate, no punitive multipliers. You can set hard caps and alerts so there are never surprises.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Plans are month-to-month with no lock-in. Annual billing is available with two months free.",
  },
  {
    q: "Is there really a free tier?",
    a: "Your first 100 minutes are completely free with no credit card. That's typically 2-3 weeks of real answering for a small business.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="From small business to government"
        sub="Simple OMR pricing, local billing, and a free start. Every plan includes Omani Arabic, Personal Data Protection Law compliance, and in-country hosting, those are never add-ons."
        cta={false}
      />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-3 max-w-5xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border bg-card p-8 flex flex-col ${
                p.highlighted ? "border-primary shadow-lg" : ""
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className={`mt-8 inline-flex h-10 w-full items-center justify-center rounded-md px-4 text-sm font-medium transition-colors ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input hover:bg-accent"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 bg-muted/40 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose-vox">
          <h2>What you need to know</h2>
          <p>
            Every plan, including Starter, runs on infrastructure inside the
            Sultanate of Oman and complies with the Personal Data Protection Law
            (Royal Decree 6/2022). We never train shared models on your call data,
            and you can export or delete everything at any time from the dashboard.
          </p>
        </div>
      </section>
      <Faq items={pricingFaqs} />
      <CtaBanner />
    </>
  );
}
