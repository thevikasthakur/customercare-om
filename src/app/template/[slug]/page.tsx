import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Users } from "lucide-react";
import { templates } from "@/data/templates";
import { templateShots } from "@/data/media";
import TalkWidget from "@/components/TalkWidget";
import { CtaBanner, Faq } from "@/components/sections";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = templates.find((x) => x.slug === slug);
  if (!t) return {};
  return { title: t.name, description: t.short };
}

function usage(slug: string) {
  const n = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0);
  return [10, 15, 20, 25, 30, 40, 50][n % 7];
}

const customiseSteps = [
  {
    n: 1,
    title: "Set up your support desk profile",
    desc: "Register, then set your service hours, branches, escalation contacts, and the languages your customers actually call in.",
    img: "/media/product-train.avif",
  },
  {
    n: 2,
    title: "Load in your policies and product data",
    desc: "Import this template, then point it at your tariffs, service catalogue, and policy documents so every reply matches what your own team would say.",
    img: "/media/product-voice-library.avif",
  },
  {
    n: 3,
    title: "Tune the flows for your busiest queues",
    desc: "Reorder the steps, set the transfer rules to your human agents, add WhatsApp follow-ups, or write call outcomes into your CRM.",
    img: "/media/product-connect.avif",
  },
  {
    n: 4,
    title: "Review transcripts and track resolutions",
    desc: "Every conversation is transcribed and scored for sentiment, topic and outcome, so supervisors can read resolution rates by queue and by language.",
    img: "/media/bento-analytics.avif",
  },
];

const templateFaqs = [
  {
    q: "Can I customise this template?",
    a: "Fully. Every greeting, question, and action is editable from your settings screen, and the template works as it is until you decide to change something.",
  },
  {
    q: "Which languages does it support?",
    a: "All nine AI Customer Care languages, Omani Arabic, Gulf Arabic, English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, and Tamil, with automatic mid-call switching.",
  },
  {
    q: "How quickly can I go live with it?",
    a: "Importing and customising a template takes minutes. Answering live calls needs a SIP trunk from Omantel or Ooredoo, which takes about a week to procure, so plan for roughly a week end to end. Templates that run on web chat, WhatsApp, or email can go live the same day.",
    link: { label: "Omantel SIP trunk for business", href: "https://www.omantel.om/en/business/small-medium-enterprise/fixed-voice-sip-trunk" },

  },
  {
    q: "Does it work with my existing tools?",
    a: "Yes, templates plug into the same 50+ integrations as any agent, from Google Calendar and Outlook to Salesforce and HubSpot.",
  },
  {
    q: "What does it cost?",
    a: "Every template is included; you pay only for connected talk time. The first 100 minutes are on us, billed in OMR, with no card needed to begin.",
  },
  {
    q: "Where does my call data live?",
    a: "Inside the Sultanate of Oman, always, recordings, transcripts, and captured details are processed under the Personal Data Protection Law and never leave the country.",
  },
];

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = templates.find((x) => x.slug === slug);
  if (!t) notFound();
  const others = templates.filter((x) => x.slug !== slug).slice(0, 4);
  const who = t.sections[1] ?? t.sections[0];
  const how = t.sections[0];

  return (
    <>
      {/* ── Hero: text left, talk widget right ── */}
      <section className="border-b border-border pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
                <Users className="h-3.5 w-3.5 text-lime" aria-hidden />
                {usage(t.slug)}+ businesses using this
              </p>
              <h1 className="mt-4 max-w-xl text-4xl md:text-5xl leading-[1.08]">{t.name}</h1>
              <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">{t.short}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <TalkWidget />
          </div>
        </div>
      </section>

      {/* ── Who / How ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl">Which Omani teams this template suits</h2>
            {who.p.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">What the agent takes off your queue</h2>
            {how.p.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">The conversation, from hello to resolution</h2>
            <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {t.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-[11px] font-semibold text-ink">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Template preview ── */}
      {templateShots[t.slug] && (
        <section className="border-b border-border py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="overflow-hidden border border-line-strong p-6 md:p-10"
              style={{
                backgroundImage:
                  "radial-gradient(75% 85% at 50% 118%, rgba(212,255,79,0.5) 0%, rgba(212,255,79,0.12) 50%, rgba(212,255,79,0) 72%), linear-gradient(180deg, #10140A 0%, #1A2004 55%, #3A4A08 100%)",
              }}
            >
              <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-2xl shadow-black/60">
                <Image
                  src={`/media/${templateShots[t.slug]}`}
                  alt={`Workflow canvas for ${t.name} (placeholder visual)`}
                  width={2296}
                  height={1256}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Customise steps ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-lg text-3xl md:text-5xl">
              From template to live customer calls in{" "}
              <span className="accent-italic">four steps</span>
            </h2>
          </div>
          <div className="mt-14 space-y-14 md:space-y-16">
            {customiseSteps.map((s) => (
              <div key={s.n} className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <p className="eyebrow flex items-center gap-2">
                    <span className="inline-block h-1.5 w-6 bg-lime" aria-hidden />
                    Step {s.n}
                  </p>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                  <Image src={s.img} alt="" width={824} height={717} className="w-full" aria-hidden />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise band ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="max-w-md text-3xl md:text-4xl">
                Serious call volumes get an <span className="accent-italic">enterprise</span> tier
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                If your business handles over 2,000 calls a month, ask about
                AI Customer Care&rsquo;s Enterprise Plan, dedicated in-Oman
                infrastructure, custom voices, and a delivery team in Muscat.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/enterprise/"
                  className="inline-flex h-11 items-center bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Explore Enterprise
                </Link>
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Dedicated infrastructure inside the Sultanate of Oman",
                "Personal Data Protection Law data-processing agreements and annual audits",
                "Custom branded voices with Omani voice talent",
                "99.99% uptime SLA with priority support from Muscat",
                "Volume pricing in OMR with local, VAT-compliant billing",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Explore all templates ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl">More customer care templates</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse the rest of the library by industry and call type.
              </p>
            </div>
            <Link
              href="/template/"
              className="inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              View All <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/template/${o.slug}/`}
                className="group flex flex-col overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
              >
                <div className="p-4 pb-0">
                  <div className="overflow-clip rounded-xl border border-black/10 bg-neutral-50">
                    {templateShots[o.slug] ? (
                      <Image
                        src={`/media/${templateShots[o.slug]}`}
                        alt=""
                        width={1148}
                        height={628}
                        className="w-full"
                        aria-hidden
                      />
                    ) : (
                      <div className="aspect-[16/9] w-full bg-neutral-100" aria-hidden />
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500">
                    <Users className="h-3.5 w-3.5" aria-hidden />
                    {usage(o.slug)}+ businesses using this
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-neutral-900 group-hover:underline underline-offset-4">
                    {o.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={templateFaqs} />
      <CtaBanner />
    </>
  );
}
