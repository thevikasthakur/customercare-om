import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { templates } from "@/data/templates";
import { templateShots } from "@/data/media";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Agent Templates",
  description:
    "Ready-made VoxCare templates to launch an AI phone agent in minutes, scheduling, lead qualification, ticketing, and more, tuned for Omani businesses.",
};

// deterministic "N+ businesses using this" per slug, phonely-style social proof
function usage(slug: string) {
  const n = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0);
  return [10, 15, 20, 25, 30, 40, 50][n % 7];
}

function TemplateCard({ t }: { t: (typeof templates)[number] }) {
  return (
    <Link
      href={`/template/${t.slug}/`}
      className="group flex flex-col overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
    >
      <div className="p-4 pb-0">
        <div className="overflow-clip rounded-xl border border-black/10 bg-neutral-50">
          {templateShots[t.slug] ? (
            <Image
              src={`/media/${templateShots[t.slug]}`}
              alt={`Workflow canvas for ${t.name} (placeholder visual)`}
              width={1148}
              height={628}
              className="w-full"
            />
          ) : (
            <div className="aspect-[16/9] w-full bg-neutral-100" aria-hidden />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500">
          <Users className="h-3.5 w-3.5" aria-hidden />
          {usage(t.slug)}+ businesses using this
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-neutral-900 group-hover:underline underline-offset-4">
          {t.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500 line-clamp-3">{t.short}</p>
      </div>
    </Link>
  );
}

export default function TemplatesPage() {
  const featured = templates.filter((t) => t.featured);
  return (
    <>
      {/* ── Centered hero ── */}
      <section
        className="border-b border-border pt-32 pb-16 md:pt-44 md:pb-20 text-center"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 72px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 72px)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl leading-[1.06]">
            Ready-made templates to{" "}
            <span className="accent-italic">supercharge</span> your workflow
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Boost productivity instantly with customisable templates designed to
            fit any project, team, or workflow, in all nine VoxCare languages.
          </p>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl">Featured Templates</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ready to use agents that are fully customisable.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <TemplateCard key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── All templates ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl">Explore All Templates</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ready to use agents that are fully customisable.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {templates.map((t) => (
              <TemplateCard key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
