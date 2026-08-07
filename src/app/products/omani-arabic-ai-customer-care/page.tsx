import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AudioLines, Blocks, FileBarChart, Play } from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner, Faq } from "@/components/sections";
import ContextContinuity from "@/components/ContextContinuity";

export const metadata: Metadata = {
  title: "Product",
  description:
    "AI Customer Care is the only thing you need to answer any call with AI, choose a voice, train your agent, connect your software, deploy, and analyse. Built for Oman, hosted in Oman.",
};

const productFaqs = [
  {
    q: "How quickly can I go live?",
    a: "Plan for about a week. Most of that is procuring a SIP trunk from Omantel or Ooredoo, which is the connection your AI agents answer calls on. We start your build in parallel: pick a template, connect your calendar or CRM, and train the agent on your content. Once the trunk is provisioned, going live takes under a day. Web chat, WhatsApp, and email channels need no trunk and can start the same day.",
    link: { label: "Omantel SIP trunk for business", href: "https://www.omantel.om/en/business/small-medium-enterprise/fixed-voice-sip-trunk" },
  },
  {
    q: "Do I need to change my phone number?",
    a: "It depends on your current setup. If you already run a SIP trunk, we use your existing SIP numbers and nothing changes for your customers. If you do not, the new trunk from Omantel or Ooredoo is issued with new numbers, but your published customer care numbers can simply forward to them, so the number your customers already know keeps working. You choose whether that forwarding applies always, after hours only, or only when your lines are busy.",
  },
  {
    q: "Can the agent switch languages mid-call?",
    a: "Yes. If a caller starts in English and switches to Omani Arabic, or Hindi, or Swahili, the agent follows naturally without missing a beat.",
  },
  {
    q: "How does training work?",
    a: "Upload your price list, FAQs, and policies, or point AI Customer Care at your website. The knowledge base keeps answers grounded in your business, the agent won't invent things it doesn't know.",
  },
  {
    q: "Which channels does the agent cover?",
    a: "Phone, web chat, web voice, WhatsApp, and email, one agent with one memory across all of them, plus outbound campaigns when you need to reach customers first.",
  },
  {
    q: "Can I listen to calls?",
    a: "Every call is recorded and transcribed (with Personal Data Protection Law compliant caller disclosure), searchable from the dashboard, and stored only in Oman.",
  },
];

const steps = [
  {
    n: 1,
    title: "Choose a voice",
    desc: "Pick from natural Arabic and multilingual voices tuned for Gulf listeners, male or female, formal or warm. Preview each with your own greeting before you commit.",
    img: "/media/product-voice-library.avif",
    alt: "Voice library with voices across languages and accents (placeholder visual)",
    w: 824,
    h: 717,
  },
  {
    n: 2,
    title: "Train your agent",
    desc: "Feed it your services, prices, policies, and FAQs, or point it at your website. The knowledge base grounds every answer in your real business information.",
    img: "/media/product-train.avif",
    alt: "Agent training screen with knowledge sources (placeholder visual)",
    w: 824,
    h: 717,
  },
  {
    n: 3,
    title: "Connect your software",
    desc: "Link Google Calendar, Outlook, Salesforce, HubSpot, and 50+ other tools so the agent can book, log, and update records while the caller is still on the line.",
    img: "/media/product-connect.avif",
    alt: "Integration connections around the agent (placeholder visual)",
    w: 824,
    h: 717,
  },
  {
    n: 4,
    title: "Deploy and analyse",
    desc: "After every call AI Customer Care produces AI summaries, sentiment, topics, and tasks, so you get insight into your customer calls, not just recordings of them.",
    img: "/media/bento-analytics.avif",
    alt: "Analytics dashboard with call volume and outcomes (placeholder visual)",
    w: 824,
    h: 717,
  },
];

const featureCards = [
  {
    icon: AudioLines,
    title: "Choose your voice",
    p1: "Natural voices across our nine languages, tuned for Gulf listeners.",
    p2: "Select a ready voice, or record a custom branded one with Omani voice talent, and deliver conversations in any language.",
  },
  {
    icon: Blocks,
    title: "Build custom integrations",
    p1: "Connect any software your team runs on, even without a public API.",
    p2: "Prebuilt connectors, REST APIs, webhooks, and browser-based automations cover the long tail of local systems.",
  },
  {
    icon: FileBarChart,
    title: "Get custom reports",
    p1: "Build the insights your managers actually ask for, right in the platform.",
    p2: "Or stream structured call data into your own BI stack, residency-safe, inside Oman.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-12 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl leading-[1.06]">
            AI Customer Care is the only thing you need to answer{" "}
            <span className="accent-italic">any call</span> with AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Customer Service Voice AI Agents that handle customer queries in
            Omani Arabic and eight more languages. Ready out of the box, no
            experts to hire, and hosted entirely inside the Sultanate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
      </section>

      {/* ── Product demo panel ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden border border-line-strong"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 90px), radial-gradient(75% 85% at 50% 118%, rgba(212,255,79,0.55) 0%, rgba(212,255,79,0.14) 50%, rgba(212,255,79,0) 72%), linear-gradient(180deg, #10140A 0%, #1A2004 52%, #3A4A08 88%, #55690C 100%)",
            }}
          >
            <div className="relative p-6 md:p-12">
              <div className="relative border border-line-strong shadow-2xl shadow-black/60">
                <Image
                  src="/media/product-video-thumb.webp"
                  alt="AI Customer Care product tour video (placeholder visual)"
                  width={1920}
                  height={1080}
                  className="w-full"
                  priority
                />
                <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink/90 border border-line-strong">
                  <Play className="h-6 w-6 text-lime translate-x-0.5" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blazingly fast + steps ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Blazingly fast, <span className="accent-italic">amazingly flexible</span>.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Four steps from sign-up to a live agent that sounds like it grew up
            in Muscat, with sub-300ms responses on every turn.
          </p>

          <div className="mt-14 space-y-16 md:space-y-20">
            {steps.map((s) => (
              <div key={s.n} className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <p className="eyebrow flex items-center gap-2">
                    <span className="inline-block h-1.5 w-6 bg-lime" aria-hidden />
                    Step {s.n}
                  </p>
                  <h3 className="mt-4 font-display text-2xl md:text-4xl font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
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
            <div className="relative flex items-center justify-center gap-1.5" aria-hidden>
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-lime/70"
                  style={{
                    height: `${14 + 42 * Math.abs(Math.sin((i + 1) * 0.55))}px`,
                    opacity: 0.35 + 0.5 * Math.abs(Math.sin((i + 1) * 0.55)),
                  }}
                />
              ))}
              <span className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-ink border border-line-strong">
                <AudioLines className="h-6 w-6 text-lime" aria-hidden />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three capability cards ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((c) => (
              <div
                key={c.title}
                className="rounded-[1.25rem] border border-black/10 bg-white p-8 text-center shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
              >
                <c.icon className="mx-auto h-6 w-6 text-neutral-800" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{c.p1}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{c.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context continuity ── */}
      <ContextContinuity />

      {/* ── Testimonial ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <figure
            className="grid overflow-clip rounded-[1.25rem] border border-black/10 shadow-[0_1px_4px_rgba(12,12,13,0.05)] md:grid-cols-[1.5fr_1fr]"
            style={{
              background: "linear-gradient(180deg, #F7FBE8 0%, #E9F5C2 55%, #D6EC8F 100%)",
            }}
          >
            <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
              <blockquote className="max-w-md text-2xl md:text-[1.75rem] leading-[1.3] tracking-tight text-neutral-900">
                &ldquo;We compared every AI voice platform we could reach from
                Muscat. Across Omani Arabic comprehension, integrations,
                workflows, and reporting,{" "}
                <strong className="font-semibold">nothing else came close.</strong>&rdquo;
              </blockquote>
              <figcaption>
                <span className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-lime">
                    SD
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">
                    Service Delivery Director
                  </span>
                </span>
                <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  Gulf BPO group
                </span>
              </figcaption>
            </div>
            <div className="hidden p-5 md:block">
              <Image
                src="/media/testimonial-1.webp"
                alt="Customer portrait (placeholder visual)"
                width={640}
                height={640}
                className="h-full max-h-[26rem] w-full rounded-xl object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ── Build any call flow ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="max-w-xl text-3xl md:text-5xl">
                Build any call flow <span className="accent-italic">in seconds</span>.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Chain greetings, questions, conditions, bookings, transfers, and
                follow-ups with drag and drop, a clinic triage in Arabic, an
                e-commerce return in Malayalam, a contractor quote in English.
                No code required.
              </p>
            </div>
            <Link
              href="/template/"
              className="hidden sm:inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Explore Templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="overflow-hidden border border-line-strong p-6 md:p-12"
            style={{
              backgroundImage:
                "radial-gradient(75% 85% at 22% 118%, rgba(212,255,79,0.5) 0%, rgba(212,255,79,0.12) 50%, rgba(212,255,79,0) 72%), linear-gradient(180deg, #10140A 0%, #1A2004 55%, #3A4A08 100%)",
            }}
          >
            <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-2xl shadow-black/60">
              <Image
                src="/media/product-callflow.avif"
                alt="Drag-and-drop call flow builder canvas (placeholder visual)"
                width={2216}
                height={1385}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Faq items={productFaqs} />
      <CtaBanner />
    </>
  );
}
