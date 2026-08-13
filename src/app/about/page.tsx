import type { Metadata } from "next";
import { PageHero, Stat, CardGrid, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "CustomerCare.OM builds customer service voice AI for Omani enterprises: agents that handle customer queries in the Sultanate's own languages, hosted on its own soil.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About CustomerCare.OM"
        title="Customer service AI built in Muscat, for the way Oman speaks"
        sub="CustomerCare.OM is the Oman-specialised sister of VoxReception. Where VoxReception serves the global market, CustomerCare.OM exists for one purpose: perfect customer service for the Sultanate of Oman."
        cta={false}
      />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose-vox">
          <p>
            CustomerCare.OM is an AI customer service platform for businesses in
            the Sultanate of Oman. The company is named after its domain,
            customercare.om, and is also referred to as AI Customer Care. Both
            names refer to the same company, based in Muscat.
          </p>
          <h2>The customer conversations global voice AI could not hold</h2>
          <p>
            Every global voice AI platform we tested had the same blind spot: it could
            not hold a natural conversation with a caller from Nizwa, switch to
            Malayalam for a shopkeeper in Ruwi, or explain an invoice in Swahili. The
            workforce and customers of Oman are gloriously multilingual, and the
            phone is still where business happens. So we built the agent we could not
            buy.
          </p>
          <h2>Customer care that runs on Oman&rsquo;s own calendar</h2>
          <p>
            Our agents respond in under a second, around the clock, through Ramadan
            schedules, khareef season surges in Salalah, and national holidays. Every
            call is transcribed, analysed, and turned into structured data your team
            can act on: bookings made, leads qualified, complaints escalated with
            full context.
          </p>
          <h2>Compliance is our foundation, not a feature</h2>
          <p>
            We founded CustomerCare.OM after Oman&rsquo;s Personal Data Protection Law
            (Royal Decree 6/2022) came into force in 2023, and we made a decision most
            vendors would not: all infrastructure lives inside Oman, and zero customer
            data ever leaves the country. Not for model training, not for analytics,
            not for &ldquo;quality assurance&rdquo; abroad. Ever.
          </p>
        </div>
      </section>
      <section className="border-y bg-muted/40 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Stat value="1M+" label="Customer calls handled across Oman" />
          <Stat value="9" label="Languages spoken natively" />
          <Stat value="0" label="Bytes of customer data stored outside Oman" />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            What Omani enterprises get with CustomerCare.OM
          </h2>
          <CardGrid
            items={[
              {
                title: "Voice AI engineered down to the millisecond",
                desc: "Dialect-aware speech models, sub-second latency, and graceful escalation, engineered by a team that has shipped voice AI at global scale.",
              },
              {
                title: "Your systems updated before the call ends",
                desc: "Bookings in your calendar, leads in your CRM, tickets in your helpdesk. CustomerCare.OM turns conversations into completed work.",
              },
              {
                title: "Anchored in Muscat",
                desc: "Our team works from Knowledge Oasis Muscat. When you call support, you reach someone who knows your market, and probably your neighbourhood.",
              },
            ]}
          />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
