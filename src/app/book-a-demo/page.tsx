import type { Metadata } from "next";
import { CalendarCheck, Languages, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See our humanlike AI phone agents live, a 30-minute demo tailored to your industry, in Arabic or English.",
};

export default function BookADemoPage() {
  return (
    <>
      <PageHero
        badge="Book a Demo"
        title="Humanlike AI phone agents, live in 30 minutes"
        sub="Hear the agent answer in Arabic, watch a booking land in a calendar, and get straight answers tailored to your industry."
        cta={false}
      />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 max-w-5xl">
          <div className="space-y-6">
            {[
              {
                icon: Languages,
                title: "Hear it speak your customers' languages",
                desc: "We'll run live calls in Omani Arabic, English, and any of our nine languages you choose.",
              },
              {
                icon: CalendarCheck,
                title: "See real workflows",
                desc: "Scheduling, lead qualification, escalation, demonstrated on flows from your industry, not canned scripts.",
              },
              {
                icon: ShieldCheck,
                title: "Compliance answered",
                desc: "Bring your DPO. We'll walk through Oman's Personal Data Protection Law data flows, residency, and our data-processing agreement.",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon className="h-6 w-6 text-primary mt-0.5" aria-hidden />
                <div>
                  <h2 className="font-semibold">{f.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="rounded-2xl border bg-card p-8 space-y-4" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first" className="text-sm font-medium">First name</label>
                <input id="first" name="first" required className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
              </div>
              <div>
                <label htmlFor="last" className="text-sm font-medium">Last name</label>
                <input id="last" name="last" required className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Work email</label>
              <input id="email" name="email" type="email" required className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <input id="company" name="company" required className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
            </div>
            <div>
              <label htmlFor="volume" className="text-sm font-medium">Monthly call volume</label>
              <select id="volume" name="volume" className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                <option>Under 500 calls</option>
                <option>500 – 5,000 calls</option>
                <option>5,000 – 50,000 calls</option>
                <option>50,000+ calls</option>
              </select>
            </div>
            <button type="submit" className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Request demo
            </button>
            <p className="text-xs text-muted-foreground">
              We reply within one business day, Sunday–Thursday. Details processed under Oman&rsquo;s Personal Data Protection Law.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
