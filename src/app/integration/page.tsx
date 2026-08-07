import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { integrations } from "@/data/integrations";
import { integrationLogos } from "@/data/media";
import { site } from "@/data/site";
import IntegrationsBrowser from "@/components/IntegrationsBrowser";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Partner Integrations",
  description:
    "Connect AI Customer Care to the CRMs, calendars, and tools your team already uses, with data-residency controls that keep call data inside Oman.",
};

export default function IntegrationsPage() {
  return (
    <>
      {/* ── Hero: text left, icon-grid visual right ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="text-4xl md:text-6xl leading-[1.06]">
                Partner <span className="accent-italic">integrations</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                AI Customer Care&rsquo;s integrations give your team ways to bring their
                data to their AI agent, real-time read and write, quick to
                deploy, and always with call data resident in Oman.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
                </Link>
                <Link
                  href={`${site.appUrl}/sign-up`}
                  className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
                >
                  Start Free
                </Link>
              </div>
            </div>
            <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white p-4 shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
              <Image
                src="/media/int-hero.webp"
                alt="Grid of partner integration tiles (placeholder visual)"
                width={1200}
                height={840}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <IntegrationsBrowser
        items={integrations.map((i) => ({
          slug: i.slug,
          name: i.name,
          category: i.category,
          logo: integrationLogos[i.slug],
        }))}
      />

      <CtaBanner />
    </>
  );
}
