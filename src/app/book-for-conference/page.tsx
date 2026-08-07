import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Meet AI Customer Care at an Event",
  description:
    "Book time with the AI Customer Care team at COMEX Muscat and other regional technology events.",
};

export default function BookForConferencePage() {
  return (
    <>
      <PageHero
        badge="Events"
        title="Meet AI Customer Care at an event"
        sub="We exhibit at COMEX Global Technology Show in Muscat and technology events across the GCC. Reserve a slot and hear the agent live at our stand."
        cta={false}
      />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <form className="rounded-2xl border bg-card p-8 space-y-4" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Full name</label>
              <input id="name" name="name" required className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Work email</label>
              <input id="email" name="email" type="email" required className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
            </div>
            <div>
              <label htmlFor="event" className="text-sm font-medium">Which event?</label>
              <input id="event" name="event" placeholder="e.g. COMEX Muscat" className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm" />
            </div>
            <button type="submit" className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Reserve a slot
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
