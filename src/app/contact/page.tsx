import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the AI Customer Care team in Muscat, sales, support, partnerships, and press.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in touch"
        sub="Salaam! Whether you're a two-person workshop in Sur or a ministry in Muscat, we'd love to talk about your phone lines."
        cta={false}
      />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 max-w-5xl">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-primary mt-1" aria-hidden />
              <div>
                <h2 className="font-semibold">Email</h2>
                <p className="text-sm text-muted-foreground mt-1">{site.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-1" aria-hidden />
              <div>
                <h2 className="font-semibold">Phone</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {site.phone}, answered by our own AI agent, naturally. Ask it anything.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1" aria-hidden />
              <div>
                <h2 className="font-semibold">Office</h2>
                <p className="text-sm text-muted-foreground mt-1">{site.address}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed border-t pt-6">
              Working hours: Sunday–Thursday, 8:00–17:00 Gulf Standard Time. Our AI
              answers around the clock; humans reply within one business day.
            </p>
          </div>
          <form className="rounded-2xl border bg-card p-8 space-y-4" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send message
            </button>
            <p className="text-xs text-muted-foreground">
              Your details are processed under Oman&rsquo;s Personal Data Protection Law and never leave the country.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
