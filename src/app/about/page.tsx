import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Stat, CardGrid, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Customer Care is building the future of how every Omani business answers the phone, AI agents that speak the Sultanate's languages, hosted on its soil.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About AI Customer Care"
        title="Building the future of how every Omani business answers the phone"
        sub="AI Customer Care is the Oman-specialised sister of VoxReception. Where VoxReception serves the global market, AI Customer Care exists for one purpose: perfect customer service for the Sultanate of Oman."
        cta={false}
      />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose-vox">
          <h2>AI that speaks for itself, in Omani Arabic</h2>
          <p>
            Every global voice AI platform we tested had the same blind spot: it could
            not hold a natural conversation with a caller from Nizwa, switch to
            Malayalam for a shopkeeper in Ruwi, or explain an invoice in Swahili. The
            workforce and customers of Oman are gloriously multilingual, and the
            phone is still where business happens. So we built the agent we could not
            buy.
          </p>
          <h2>The optimisation engine for Omani phone calls</h2>
          <p>
            Our agents answer instantly, around the clock, through Ramadan
            schedules, khareef season surges in Salalah, and national holidays. Every
            call is transcribed, analysed, and turned into structured data your team
            can act on, bookings made, leads qualified, complaints escalated with
            full context.
          </p>
          <h2>Compliance is our foundation, not a feature</h2>
          <p>
            We founded AI Customer Care after Oman&rsquo;s Personal Data Protection Law
            (Royal Decree 6/2022) came into force in 2023, and we made a decision most
            vendors would not: all infrastructure lives inside Oman, and zero customer
            data ever leaves the country. Not for model training, not for analytics,
            not for &ldquo;quality assurance&rdquo; abroad. Ever.
          </p>
        </div>
      </section>
      <section className="border-y bg-muted/40 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Stat value="1M+" label="Calls answered across Oman" />
          <Stat value="9" label="Languages spoken natively" />
          <Stat value="0" label="Bytes of customer data stored outside Oman" />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Why customers choose AI Customer Care
          </h2>
          <CardGrid
            items={[
              {
                title: "Built by people who know voice AI is hard",
                desc: "Dialect-aware speech models, sub-second latency, and graceful escalation, engineered by a team that has shipped voice AI at global scale.",
              },
              {
                title: "More than just a phone call",
                desc: "Bookings in your calendar, leads in your CRM, tickets in your helpdesk. AI Customer Care turns conversations into completed work.",
              },
              {
                title: "Anchored in Muscat",
                desc: "Our team works from Knowledge Oasis Muscat. When you call support, you reach someone who knows your market, and probably your neighbourhood.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-16 bg-muted/40 border-y text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Join the team</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We are hiring engineers, linguists, and customer-success specialists in
            Muscat, and we are proud contributors to Omanisation.
          </p>
          <Link
            href="/careers/"
            className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Open Roles
          </Link>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
