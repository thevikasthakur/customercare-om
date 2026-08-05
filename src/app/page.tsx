import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  History,
  Play,
  ShieldCheck,
  SplitSquareHorizontal,
} from "lucide-react";
import TalkWidget from "@/components/TalkWidget";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import { learnArticles } from "@/data/learn";
import { industries } from "@/data/industries";
import { templates } from "@/data/templates";
import { site } from "@/data/site";
import { CtaBanner, Faq } from "@/components/sections";

export const metadata: Metadata = {
  title: "VoxCare, Answer every call perfectly with AI, in Omani Arabic",
  description: site.description,
};

const homeFaqs = [
  {
    q: "Which languages does VoxCare speak?",
    a: "VoxCare handles customer queries in Omani Arabic, Gulf Arabic, English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, and Tamil, and it detects the caller's language automatically within the first seconds of the call.",
  },
  {
    q: "Which channels does VoxCare cover?",
    a: "Phone, web chat, web voice, WhatsApp, and email. One agent with one memory across every channel, plus outbound campaigns when you need to reach customers first.",
  },
  {
    q: "Where is my customer data stored?",
    a: "Entirely inside the Sultanate of Oman. VoxCare runs on infrastructure hosted in-country, and zero customer data, recordings, transcripts, or contact details, ever leaves Oman.",
  },
  {
    q: "Is VoxCare compliant with Oman's Personal Data Protection Law?",
    a: "Yes. VoxCare was designed around the Personal Data Protection Law (Royal Decree 6/2022, in force since February 2023): consent capture, purpose limitation, data-subject rights workflows, and in-country residency are built into the platform, not bolted on.",
  },
  {
    q: "How quickly can I go live?",
    a: "Most businesses launch in under a day. Pick a template, connect your calendar or CRM, forward your number, and your AI agent starts answering. Your first 100 minutes are free.",
  },
  {
    q: "What happens when a caller needs a human?",
    a: "VoxCare detects escalation moments and performs a warm transfer to your team with full context, the caller never repeats themselves. Outside working hours it takes a message and follows up by SMS or email.",
  },
];

const showcaseTabs = [
  { icon: Bot, label: "Agent Builder", img: "/media/showcase-agent-builder.avif" },
  { icon: History, label: "Call History", img: "/media/showcase-call-history.avif" },
  { icon: SplitSquareHorizontal, label: "AB Testing", img: "/media/showcase-analytics.avif" },
  { icon: BarChart3, label: "AI Analytics", img: "/media/showcase-analytics.avif" },
];

const marqueeLogos = [
  "logo-1", "logo-2", "logo-3", "logo-4", "logo-5",
  "logo-6", "logo-7", "logo-8", "logo-9", "logo-10",
];

export default function HomePage() {
  const latestLearn = learnArticles.slice(0, 3);
  const featuredTemplates = templates.filter((t) => t.featured);

  return (
    <>
      {/* ── Hero: two-column, left copy / right mic widget ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl leading-[1.06]">
                Answer every call{" "}
                <span className="accent-italic">perfectly</span> with AI
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                VoxCare&rsquo;s Customer Service Voice AI Agents handle customer
                queries across phone, web chat, WhatsApp, and email, in Omani
                Arabic and eight more languages. Ready out of the box, no
                experts to hire.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
              <p className="mt-8 flex items-center gap-2 text-[11px] font-mono tracking-[0.12em] text-muted-foreground uppercase">
                <ShieldCheck className="h-4 w-4 text-lime shrink-0" aria-hidden />
                Oman Personal Data Protection Law Compliant
              </p>
            </div>
            <div className="relative">
              <TalkWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo marquee band ── */}
      <section className="hatch-gutters border-b border-border py-8 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Loved by 10,000+ businesses across Oman</p>
        </div>
        <div className="relative mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 items-center gap-16 pr-16 [animation:marquee_36s_linear_infinite]">
            {[...marqueeLogos, ...marqueeLogos].map((l, i) => (
              <img
                key={`${l}-${i}`}
                src={`/media/${l}.svg`}
                alt=""
                className="h-7 w-auto opacity-50 invert"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tabbed product showcase ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {showcaseTabs.map((t, i) => (
              <span
                key={t.label}
                className={`inline-flex items-center gap-2 border px-5 py-2.5 text-sm ${
                  i === 0
                    ? "border-lime/40 bg-ink-2 text-lime"
                    : "border-border bg-ink-2 text-muted-foreground"
                }`}
              >
                <t.icon className="h-4 w-4" aria-hidden />
                {t.label}
              </span>
            ))}
          </div>
          <div
            className="relative mt-4 overflow-hidden border border-line-strong"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 90px), radial-gradient(75% 85% at 78% 118%, rgba(212,255,79,0.6) 0%, rgba(212,255,79,0.16) 50%, rgba(212,255,79,0) 72%), linear-gradient(180deg, #10140A 0%, #1A2004 52%, #3A4A08 88%, #55690C 100%)",
            }}
          >
            <div className="relative p-6 md:p-12">
              <div className="relative border border-line-strong shadow-2xl shadow-black/60">
                <Image
                  src="/media/showcase-agent-builder.avif"
                  alt="VoxCare agent builder dashboard (placeholder visual)"
                  width={2216}
                  height={1385}
                  className="w-full"
                  priority
                />
                <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink/90 border border-line-strong">
                  <Play className="h-5 w-5 text-lime translate-x-0.5" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="hatch-gutters border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(212,255,79,0.28)]">
            {[
              { v: "24x7", l: "Calls answered in Human tone" },
              { v: "Omani Arabic", l: "English, Standard Arabic, Gulf Arabic +5 more" },
              { v: "<300ms", l: "To first word. Callers never wait" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-10 text-center">
                <h2 className="text-4xl md:text-5xl">{s.v}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer stories ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl md:text-5xl">
              From one call to <strong className="font-semibold">1M+</strong>{" "}
              with VoxCare
            </h2>
            <span className="eyebrow">Customer stories</span>
          </div>
          <p className="mt-4 max-w-lg text-muted-foreground">
            From family businesses in Muttrah to national enterprises, teams
            rely on VoxCare for quality conversations at scale.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="group relative overflow-hidden border border-line-strong">
              <Image
                src="/media/testimonial-poster.avif"
                alt="Customer story video (placeholder visual)"
                width={1280}
                height={860}
                className="h-full w-full object-cover opacity-90"
              />
              <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink/90 border border-line-strong">
                <Play className="h-5 w-5 text-lime translate-x-0.5" aria-hidden />
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6">
                <p className="text-lg font-semibold">Operations Director</p>
                <p className="text-sm text-muted-foreground">
                  National automotive group, Muscat
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between border border-border bg-ink-2 p-8">
              <blockquote className="text-lg leading-relaxed text-muted-foreground">
                &ldquo;Our service lines used to go quiet after 6pm. Now every
                caller is answered in their own language, Omani Arabic, Hindi,
                Malayalam, and bookings land straight in our CRM. Missed calls
                simply stopped being a metric we track.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <p className="text-sm">
                  Inquire about our{" "}
                  <em className="accent-italic">enterprise plans</em>
                </p>
                <Link
                  href="/enterprise/"
                  className="inline-flex h-9 items-center bg-lime px-4 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bento: everything in one platform, phonely layout, electric-lemon gradient ── */}
      <section
        className="relative overflow-hidden border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 108%, rgba(212,255,79,0.55) 0%, rgba(212,255,79,0) 62%), linear-gradient(180deg, #121603 0%, #232D05 26%, #4A5D0A 58%, #8CAD16 84%, #C3E332 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <h2 className="max-w-sm font-sans text-3xl md:text-[2.5rem] md:leading-[1.15] font-normal tracking-tight text-white">
              Everything you need in{" "}
              <span className="font-semibold">one platform.</span>
            </h2>
            <p className="max-w-[18rem] text-sm leading-[1.4] text-white/80">
              VoxCare handles the busywork of customer conversations so your
              team can focus on delivering great service across Oman, in nine
              languages, on every channel.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
              {/* Integrations */}
              <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                <div className="h-48 md:h-[22.4rem] overflow-clip">
                  <Image
                    src="/media/bento-integrations.avif"
                    alt="Grid of CRM, calendar, and messaging tools VoxCare connects to"
                    width={1232}
                    height={717}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900">
                    Prebuilt integrations to your tools
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    VoxCare integrates with your stack for real-time
                    appointment booking, CRM updates, and ticketing, 50+
                    tools with auto human transactions, and call data that
                    never leaves Oman.
                  </p>
                </div>
              </div>
              {/* Languages */}
              <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                <div className="h-48 md:h-[22.4rem] overflow-clip">
                  <Image
                    src="/media/bento-language.avif"
                    alt="Chat bubbles showing conversations in multiple languages"
                    width={824}
                    height={717}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900">
                    Respond in any language
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    Customer queries handled naturally in Omani Arabic, Gulf
                    Arabic, English, Standard Arabic, Swahili, Hindi, Bengali,
                    Malayalam, and Tamil, following mid-call when your caller
                    switches language.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_1.5fr]">
              {/* Analytics */}
              <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                <div className="h-48 md:h-[22.4rem] overflow-clip">
                  <Image
                    src="/media/bento-analytics.avif"
                    alt="Call analytics dashboard with volume and outcome charts"
                    width={824}
                    height={717}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900">
                    The most advanced analytics on the market
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    Every call is transcribed and scored, sentiment, topics,
                    outcomes, and tasks, with AI insights you can slice by
                    branch, language, or campaign.
                  </p>
                </div>
              </div>
              {/* Channels */}
              <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                <div className="h-48 md:h-[22.4rem] overflow-clip bg-neutral-50">
                  <Image
                    src="/media/bento-channels.svg"
                    alt="Diagram of channels orbiting one AI agent: phone, chat, SMS, and API"
                    width={1232}
                    height={717}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900">
                    Delivered by phone, chat, SMS, and API
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    One omnichannel agent with one memory, voice, web chat,
                    WhatsApp, SMS, and email, plus an API to embed VoxCare
                    into your own products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free minutes band ── */}
      <section
        className="border-b border-border py-16 md:py-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #2E3B06 0%, #161C03 60%, #0A0B0F 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-5xl">
                Your first 100 minutes are{" "}
                <span className="accent-italic">completely free</span>.
              </h2>
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
            <div className="flex items-center justify-center gap-1.5" aria-hidden>
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-lime/70"
                  style={{
                    height: `${14 + 42 * Math.abs(Math.sin((i + 1) * 0.55))}px`,
                    opacity: i === 17 ? 1 : 0.35 + 0.5 * Math.abs(Math.sin((i + 1) * 0.55)),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial stack ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          {[
            {
              pre: "We compared every AI voice platform we could reach from Muscat. Across Omani Arabic comprehension, integrations, workflows, and reporting, ",
              bold: "nothing else came close.",
              initials: "SD",
              role: "Service Delivery Director",
              org: "Gulf BPO group",
              tint: "linear-gradient(135deg, #F7FBE8 0%, #E9F5C2 55%, #D6EC8F 100%)",
            },
            {
              pre: "Our agents used to lose evenings to routine bookings and directions. VoxCare now clears ",
              bold: "hundreds of calls a day",
              post: " and hands our team only the conversations that need a human.",
              initials: "GE",
              role: "Head of Guest Experience",
              org: "Hospitality group, Muscat",
              tint: "linear-gradient(135deg, #FBFDF2 0%, #EFF7D3 55%, #DFF0A6 100%)",
            },
            {
              pre: "We were skeptical AI could carry a khareef-season surge in Salalah. It answered every single call, in five languages, and ",
              bold: "booked more than our best week on record.",
              initials: "OD",
              role: "Operations Director",
              org: "National automotive group",
              tint: "linear-gradient(135deg, #F4FAE4 0%, #E4F2B5 55%, #CFE97D 100%)",
            },
          ].map((t, i) => (
            <figure
              key={t.initials + t.org}
              className="grid overflow-clip rounded-[1.25rem] border border-black/10 shadow-[0_1px_4px_rgba(12,12,13,0.05)] md:grid-cols-[1.5fr_1fr]"
              style={{
                background: t.tint.replace("135deg", "180deg"),
              }}
            >
              <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
                <blockquote className="max-w-md text-2xl md:text-[1.75rem] leading-[1.3] tracking-tight text-neutral-900">
                  &ldquo;{t.pre}
                  <strong className="font-semibold">{t.bold}</strong>
                  {t.post ?? ""}&rdquo;
                </blockquote>
                <figcaption>
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-lime">
                      {t.initials}
                    </span>
                    <span className="text-sm font-semibold text-neutral-900">
                      {t.role}
                    </span>
                  </span>
                  <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {t.org}
                  </span>
                </figcaption>
              </div>
              <div className="hidden p-5 md:block">
                <Image
                  src={`/media/testimonial-${i + 1}.webp`}
                  alt="Customer portrait (placeholder visual)"
                  width={640}
                  height={640}
                  className="h-full max-h-[26rem] w-full rounded-xl object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Mini quote marquee ── */}
      <section className="hatch-gutters border-b border-border py-10 overflow-hidden">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 items-stretch gap-4 pr-4 [animation:marquee_44s_linear_infinite]">
            {[
              { q: "Running VoxCare is like service on easy mode, every call answered, every lead logged.", a: "Clinic manager, Ruwi" },
              { q: "Callers switch between Arabic and Hindi mid-sentence. It keeps up. Our old IVR never could.", a: "Dispatch lead, Sohar" },
              { q: "Set up on Sunday, live before Monday's first delivery run.", a: "E-commerce founder, Muscat" },
              { q: "The dashboard finally tells us why customers call, not just how many hung up.", a: "CX analyst, Salalah" },
              { q: "Our after-hours line went from voicemail graveyard to our best booking channel.", a: "Spa owner, Al Mouj" },
            ]
              .concat([
                { q: "Running VoxCare is like service on easy mode, every call answered, every lead logged.", a: "Clinic manager, Ruwi" },
                { q: "Callers switch between Arabic and Hindi mid-sentence. It keeps up. Our old IVR never could.", a: "Dispatch lead, Sohar" },
                { q: "Set up on Sunday, live before Monday's first delivery run.", a: "E-commerce founder, Muscat" },
                { q: "The dashboard finally tells us why customers call, not just how many hung up.", a: "CX analyst, Salalah" },
                { q: "Our after-hours line went from voicemail graveyard to our best booking channel.", a: "Spa owner, Al Mouj" },
              ])
              .map((m, i) => (
                <figure
                  key={i}
                  className="w-80 shrink-0 border border-border bg-ink-2 p-5"
                >
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{m.q}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-lime/80">
                    {m.a}
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>
      </section>

      {/* ── Industry case studies (tabbed) ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="max-w-xl text-3xl md:text-5xl">
              Whatever your industry, we&rsquo;ve{" "}
              <span className="accent-italic">answered it</span> before.
            </h2>
            <Link
              href="/industries/"
              className="hidden sm:inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <CaseStudyTabs />
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
            {industries.slice(0, 6).map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}/`}
                className="bg-ink-2 px-6 py-4 hover:bg-ink-3 transition-colors"
              >
                <span className="text-sm font-medium">{i.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research / blog ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl">
                Latest from VoxCare&rsquo;s{" "}
                <span className="accent-italic">research team</span>.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-md">
                VoxCare&rsquo;s research blog shares what we&rsquo;re learning about
                building better AI agents for Oman.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestLearn
              .map((a) => ({
                href: `/learn/voice-ai/${a.slug}/`,
                date: `${a.date} · Learn`,
                title: a.title,
                excerpt: a.excerpt,
                chips: ["guide", "voice AI"],
                kicker: a.title.split(":")[0].split(" ").slice(0, 5).join(" "),
              }))
              .map((card, i) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
              >
                <div
                  className="relative flex h-44 flex-col justify-between p-5"
                  style={{
                    backgroundImage: [
                      "linear-gradient(120deg, #E8F7B0 0%, #C9E96A 45%, #8FBF1F 100%)",
                      "linear-gradient(120deg, #F2FAD3 0%, #D6EC8F 50%, #A5C93A 100%)",
                      "linear-gradient(120deg, #DCE9F9 0%, #CBE783 55%, #D4FF4F 100%)",
                      "linear-gradient(120deg, #EFF7D3 0%, #BFDD5E 55%, #71900F 100%)",
                      "linear-gradient(120deg, #F7FBE8 0%, #DFF0A6 50%, #93B41A 100%)",
                      "linear-gradient(120deg, #E4F2B5 0%, #CFE97D 55%, #55690C 100%)",
                    ][i % 6],
                  }}
                >
                  <p className="max-w-[16rem] text-xl font-medium leading-snug text-neutral-900">
                    {card.kicker}
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-black/15 bg-white/60 px-2.5 py-1 text-xs text-neutral-800 backdrop-blur-sm"
                        >
                          {c.toLowerCase()}
                        </span>
                      ))}
                    </div>
                    <span className="mt-3 flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[8px] font-bold text-lime">
                        VC
                      </span>
                      <span className="text-[10px] font-medium text-neutral-800/80">
                        VoxCare Research
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs text-neutral-500">{card.date}</span>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-neutral-900 group-hover:underline underline-offset-4">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 line-clamp-3">
                    {card.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">Templates</p>
              <h2 className="max-w-xl text-3xl md:text-5xl">
                Start quickly with these{" "}
                <span className="accent-italic">AI templates</span>
              </h2>
            </div>
            <Link
              href="/template/"
              className="hidden sm:inline-flex h-10 items-center gap-2 bg-lime px-5 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTemplates.map((t, i) => (
              <Link
                key={t.slug}
                href={`/template/${t.slug}/`}
                className="group flex flex-col overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
              >
                <div className="p-4">
                  <div className="overflow-clip rounded-xl border border-black/10 bg-neutral-50">
                    <Image
                      src={`/media/template-flow-${(i % 3) + 1}.png`}
                      alt={`Workflow canvas for the ${t.name} template (placeholder visual)`}
                      width={1148}
                      height={628}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6">
                  <h3 className="text-base font-semibold leading-snug text-neutral-900 group-hover:underline underline-offset-4">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 line-clamp-2">{t.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={homeFaqs} />
      <CtaBanner />
    </>
  );
}
