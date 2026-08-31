import type { Metadata } from "next";
import { ArrowUpRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, CtaBanner } from "@/components/sections";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Muscat Office",
  description:
    `CustomerCare.OM moves to Office 315, Muscat Pavilion, Muscat Hills on ${site.office.availableFromLabel}. Until then, in-person meetings in Muscat and Seeb are by appointment only.`,
};

const officePage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact/#page`,
  url: `${site.url}/contact/`,
  name: "CustomerCare.OM contact and Muscat office",
  description: metadata.description,
  dateModified: "2026-08-31",
  mainEntity: {
    "@type": "Place",
    name: `CustomerCare.OM — Muscat Hills office from ${site.office.availableFromLabel}`,
    description:
      `CustomerCare.OM will be available at this office from ${site.office.availableFromLabel}. Until then, in-person meetings in Muscat and Seeb are available by appointment only.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 315, Muscat Pavilion, Hayy al Arafat Road, Muscat Hills",
      addressLocality: "Muscat",
      addressCountry: "OM",
    },
    hasMap: site.office.mapsUrl,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={officePage} />
      <PageHero
        badge="Contact"
        title="Get in touch"
        sub="Salaam. Whether you run one service line or a national contact centre, we would like to hear how your customers are being answered today."
        cta={false}
      />
      <section className="border-b border-border bg-ink-2 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="border border-border bg-ink p-7 md:p-10">
            <p className="eyebrow">Office update · Effective {site.office.availableFromLabel}</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
              More room. More calls. More conversations. <span className="text-lime">Same mission.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              CustomerCare.OM is moving to a bigger space in Muscat Hills. We
              are building it for the customer volume ahead—not the volume behind.
            </p>
            <address className="mt-6 not-italic text-base leading-relaxed">
              <span className="block font-semibold">From {site.office.availableFromLabel}</span>
              <span className="mt-1 block text-muted-foreground">{site.office.address}</span>
            </address>
            <div className="mt-7 grid gap-6 border-t border-border pt-7 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="flex items-start gap-3">
                <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
                <div>
                  <h3 className="text-sm font-semibold">Until launch day</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Meetings are by appointment only. In-person meetings are available in Muscat and Seeb.
                  </p>
                </div>
              </div>
              <a
                href={site.office.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 border border-line-strong px-4 text-sm font-medium transition-colors hover:bg-ink-3"
              >
                Open the new location <ArrowUpRight className="h-4 w-4 text-lime" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
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

            <a
              href={site.office.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-ink-2 p-8 transition-colors hover:bg-ink-3 sm:col-span-2"
            >
              <MapPin className="h-5 w-5 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">New office · from 1 Dec</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {site.office.address}
              </p>
            </a>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
