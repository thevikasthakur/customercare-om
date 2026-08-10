import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to AI Customer Care in Muscat. Email, phone, and office address, no forms and no queues.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in touch"
        sub="Salaam. Whether you run one service line or a national contact centre, we would like to hear how your customers are being answered today."
        cta={false}
      />
      <section className="border-b border-border pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-ink-2 p-8">
              <Mail className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Email</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-sm text-muted-foreground hover:text-lime transition-colors"
              >
                {site.email}
              </a>
            </div>

            <div className="bg-ink-2 p-8">
              <Phone className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Phone</h2>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-sm text-muted-foreground hover:text-lime transition-colors"
              >
                {site.phone}
              </a>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Answered by the founder. In person. With a human mouth. We do
                sell AI agents, and one day this line will surely have one, but
                for now you get the guy who built them, and he quite likes
                talking to customers.
              </p>
            </div>

            <div className="bg-ink-2 p-8 sm:col-span-2">
              <MapPin className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Office</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {site.address}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
