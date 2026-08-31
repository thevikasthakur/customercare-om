import type { Metadata } from "next";
import { CalendarCheck, Languages, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "A 30-minute working session on your own call scenarios, in Arabic or English. Call or email the founder directly to arrange one.",
};

export default function BookADemoPage() {
  return (
    <>
      <PageHero
        badge="Book a Demo"
        title="Thirty minutes, your call flows, our agent answering"
        sub="Hear the agent handle a call in Arabic, watch a booking land in a calendar, and get straight answers about what it would take on your lines."
        cta={false}
      />

      <section className="border-b border-border pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">To book, just reach out</p>
          <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-ink-2 p-8">
              <Phone className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Call or WhatsApp</h2>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-sm text-muted-foreground hover:text-lime transition-colors"
              >
                {site.phone}
              </a>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Answered by the founder, not an AI agent. Yes, we hear the irony.
              </p>
            </div>
            <div className="bg-ink-2 p-8">
              <Mail className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Email</h2>
              <a
                href={`mailto:${site.email}?subject=Demo%20request`}
                className="mt-2 block text-sm text-muted-foreground hover:text-lime transition-colors"
              >
                {site.email}
              </a>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Tell us your industry and roughly how many calls a month you
                handle, and we will tailor the demo to it.
              </p>
            </div>
            <a
              href={site.office.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-ink-2 p-8 transition-colors hover:bg-ink-3 sm:col-span-2"
            >
              <MapPin className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">New office · from 1 Dec</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {site.office.address}. Until then, in-person meetings in Muscat
                and Seeb are by appointment only.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl">What the demo covers</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {[
              {
                icon: Languages,
                title: "Your customers' languages",
                desc: "Live calls in Omani Arabic, English, and any of our nine languages you want to hear.",
              },
              {
                icon: CalendarCheck,
                title: "Real workflows",
                desc: "Scheduling, lead qualification, and escalation shown on flows from your industry, not canned scripts.",
              },
              {
                icon: ShieldCheck,
                title: "Compliance answered",
                desc: "Bring your data protection officer. We walk through Personal Data Protection Law data flows and residency.",
              },
            ].map((f) => (
              <div key={f.title} className="border-t border-line-strong pt-5">
                <f.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
