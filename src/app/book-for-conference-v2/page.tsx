import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Conference Meetings",
  description:
    "Fast-track a meeting with AI Customer Care's leadership at regional technology events.",
};

export default function BookForConferenceV2Page() {
  return (
    <>
      <PageHero
        badge="Events"
        title="Skip the queue at our stand"
        sub="Attending the same event as AI Customer Care? Book a private 15-minute session with our founders, live agent demo included, coffee provided."
        cta={false}
      />
      <section className="pb-16 md:pb-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/book-for-conference/"
            className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Reserve a slot
          </Link>
        </div>
      </section>
    </>
  );
}
