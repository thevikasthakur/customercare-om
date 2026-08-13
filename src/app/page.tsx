import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, History, ShieldCheck, SplitSquareHorizontal } from "lucide-react";
import TalkWidget from "@/components/TalkWidget";
import { learnArticles } from "@/data/learn";
import { industries } from "@/data/industries";
import { templates } from "@/data/templates";
import { site } from "@/data/site";
import { CtaBanner, Faq } from "@/components/sections";

export const metadata: Metadata = {
  // Next.js does not apply a segment's own title template to its page, so the
  // home page is the one title that has to carry the brand string itself.
  title: `${site.name}, Omani Arabic customer service voice AI`,
  description: site.description,
};

const homeFaqs = [
  {
    q: "What is CustomerCare.OM?",
    a: "CustomerCare.OM, also written AI Customer Care, is an AI customer service platform for businesses in the Sultanate of Oman. It handles customer queries by phone, web chat, WhatsApp, and email in nine languages, and it runs entirely on infrastructure inside Oman.",
  },
  {
    q: "Which languages does CustomerCare.OM speak?",
    a: "CustomerCare.OM handles customer queries in Omani Arabic, Gulf Arabic, English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, and Tamil, and it detects the caller's language automatically within the first seconds of the call.",
  },
  {
    q: "Which channels does CustomerCare.OM cover?",
    a: "Phone, web chat, web voice, WhatsApp, and email. One agent with one memory across every channel, plus outbound campaigns when you need to reach customers first.",
  },
  {
    q: "Where is my customer data stored?",
    a: "Entirely inside the Sultanate of Oman. CustomerCare.OM runs on infrastructure hosted in-country, and nothing ever leaves the country: not recordings, not transcripts, not contact details.",
  },
  {
    q: "Is CustomerCare.OM compliant with Oman's Personal Data Protection Law?",
    a: "Yes. CustomerCare.OM was designed around the Personal Data Protection Law (Royal Decree 6/2022, in force since February 2023): consent capture, purpose limitation, data-subject rights workflows, and in-country residency are built into the platform, not bolted on.",
  },
  {
    q: "How quickly can I go live?",
    a: "Plan for about a week. Most of that is procuring a SIP trunk from Omantel or Ooredoo, which is the connection your AI agents answer calls on. We start your build in parallel: pick a template, connect your calendar or CRM, and train the agent on your content. Once the trunk is provisioned, going live takes under a day. Web chat, WhatsApp, and email channels need no trunk and can start the same day.",
    link: { label: "Omantel SIP trunk for business", href: "https://www.omantel.om/en/business/small-medium-enterprise/fixed-voice-sip-trunk" },

  },
  {
    q: "What happens when a caller needs a human?",
    a: "CustomerCare.OM detects escalation moments and performs a warm transfer to your team with full context, so the caller never repeats themselves. Outside working hours it takes a message and follows up by SMS or email.",
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
                Every customer query, handled in{" "}
                <span className="accent-italic">Omani Arabic</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                <strong className="font-medium text-foreground">{site.name}</strong>{" "}
                is an AI customer service platform for businesses in the
                Sultanate of Oman. Our Customer Service Voice AI Agents handle
                customer queries across phone, web chat, WhatsApp, and email, in
                nine languages your customers actually use, from data centres
                inside Oman. Ready out of the box, no experts to hire.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
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

      {/* ── Stats band ── */}
      <section className="hatch-gutters border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(212,255,79,0.28)]">
            {[
              { v: "24x7", l: "Customer queries handled in a human tone" },
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
              Five channels, nine languages,{" "}
              <span className="font-semibold">one agent.</span>
            </h2>
            <p className="max-w-[18rem] text-sm leading-[1.4] text-white/80">
              Routine customer queries are resolved end to end, so your service
              team in Oman spends its hours on the conversations that genuinely
              need a person.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
              {/* Integrations */}
              <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                <div className="h-48 md:h-[22.4rem] overflow-clip">
                  <Image
                    src="/media/bento-integrations.avif"
                    alt="Grid of CRM, calendar, and messaging tools CustomerCare.OM connects to"
                    width={1232}
                    height={717}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900">
                    Plugs into your CRM, calendar, and ticketing
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    Bookings, customer records, and support tickets update while
                    the conversation is still running, across 50+ business
                    systems, with a warm handover to your team whenever a query
                    needs one.
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
                    Fluent in Omani Arabic and eight more
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
                    Call analytics your service directors can act on
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    Every call is transcribed and scored for sentiment, topics,
                    outcomes, and follow-up tasks, then broken down by branch,
                    language, or campaign.
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
                    Customers pick the channel, the context follows
                  </h3>
                  <p className="text-sm leading-[1.4] text-neutral-500">
                    A caller who moves to WhatsApp or email is recognised and
                    picked up mid-story, across voice, web chat, SMS, and an API
                    you can embed in your own products.
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
                Test it on your own calls,{" "}
                <span className="accent-italic">100 minutes free</span>.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
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

      {/* ── Research / blog ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl">
                Field notes on voice AI{" "}
                <span className="accent-italic">from Muscat</span>.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-md">
                Benchmarks, dialect research, and practical guides from the team
                running customer service voice AI across the Sultanate.
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
                        CustomerCare.OM Research
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
                Go live with a template built for{" "}
                <span className="accent-italic">your sector</span>
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
