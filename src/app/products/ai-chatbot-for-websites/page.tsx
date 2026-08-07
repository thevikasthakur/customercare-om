import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BarChart3,
  Database,
  Gauge,
  Globe2,
  Landmark,
  Lock,
  Mail,
  MessageSquare,
  Mic,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner } from "@/components/sections";
import ContextContinuity from "@/components/ContextContinuity";

export const metadata: Metadata = {
  title: "AI Chatbot for Websites",
  description:
    "Oman's own sovereign chatbot. Sells while you sleep, in Arabic and English, on your website, WhatsApp, and email. All chat data stays inside Oman.",
};

const stats = [
  { v: "<5s", l: "First reply, any hour" },
  { v: "3", l: "Channels, one memory" },
  { v: "81.8%", l: "Conversations end positive" },
  { v: "2 min", l: "From domain to live" },
];

const jobs = [
  {
    title: "Replies to serious buyers",
    desc: "Your best leads don't wait. The chatbot answers in seconds. Not hours. Not Monday morning.",
  },
  {
    title: "Turns chats into leads",
    desc: "Every conversation is a data point. Name, intent, channel, sentiment. Captured before your team even opens the CRM.",
  },
  {
    title: "Enriches every lead",
    desc: "Raw contacts are worthless. The chatbot adds context. What they asked, how they felt, what they almost bought.",
  },
  {
    title: "Books appointments",
    desc: "No back-and-forth. No 'let me check my calendar.' The chatbot finds the slot and locks it down.",
  },
  {
    title: "Books meetings",
    desc: "High-intent prospect wants a demo? The meeting is booked before they finish their coffee.",
  },
  {
    title: "Follows up without drama",
    desc: "Silent leads get a nudge. No-shows get rescheduled. The chatbot doesn't take it personally.",
  },
];

const voiceCards = [
  {
    icon: Mic,
    title: "Voice messages processed natively",
    desc: "The customer speaks. The chatbot understands.",
  },
  {
    icon: AudioLines,
    title: "Arabic, English, Omani & Gulf",
    desc: "Handled naturally, including tone and accent.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp voice notes supported",
    desc: "Voice notes work exactly how your customers already use them.",
  },
  {
    icon: Sparkles,
    title: "The sale moves forward",
    desc: "Voice becomes intent. Intent becomes a lead.",
  },
];

const intel = [
  {
    icon: BarChart3,
    title: "Accountability, not vibes",
    desc: "If you can't measure it, you can't fix it. See exactly which jobs the bot nails and where it falls short. Most businesses guess. You operate.",
  },
  {
    icon: Gauge,
    title: "Read the room at scale",
    desc: "Customer mood is a leading indicator. Revenue is a lagging one. When the line dips, something broke, and you see the shift in real time, not in next quarter's churn report.",
  },
  {
    icon: Sparkles,
    title: "The scoreboard",
    desc: "81.8% positive. That number should terrify your competitors. Nine out of eleven conversations end positive. The negative ones get flagged, escalated, and fixed. Nothing hides.",
  },
];

export default function ChatbotPage() {
  return (
    <>
      {/* ── Hero with product video ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">AI Chatbot for Websites</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              <span className="text-lime">Oman&rsquo;s own sovereign chatbot.</span>
              <br />
              Not a chatbot. A coworker.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
              It replies to serious buyers, books the meeting, and builds your
              lead sheet while your team sleeps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-a-demo/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                <Globe2 className="h-4 w-4" aria-hidden /> Build my chatbot
              </Link>
              <Link
                href={`${site.appUrl}/sign-up`}
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Start Free
              </Link>
              <Link
                href="/book-a-demo/"
                className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Book a Demo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {["Sovereign cloud-hosted", "Sells while you sleep", "Arabic + English", "Sales mindset by default"].map((b) => (
                <span key={b} className="eyebrow border border-border bg-ink-2 px-3 py-1.5">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* hero video panel */}
          <div className="mx-auto mt-14 max-w-5xl overflow-clip rounded-xl border border-black/10 bg-white p-2 shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <video
              className="w-full rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              poster="/media/chat-om-poster.webp"
              aria-label="AI Customer Care chatbot answering a customer conversation (product demo video)"
            >
              <source src="/media/chat-om-hero.mp4" type="video/mp4; codecs=av01.0.05M.08" />
              <source src="/media/chat-om-hero-h264.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-[rgba(212,255,79,0.28)] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="px-6 py-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-medium tracking-tight">{s.v}</p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jobs: rule-topped 3x2 ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What it does all day</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            Tell it what the business needs.{" "}
            <span className="text-lime">It works the chat.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((j) => (
              <div key={j.title} className="border-t border-line-strong pt-5">
                <h3 className="text-base font-semibold">{j.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All channels ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Everywhere your customers are</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                One chatbot. <span className="text-lime">All channels.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Website, WhatsApp, and email. It shows up where your customers
                already are, identifies returning visitors across channels and
                visits, and picks up every conversation exactly where it left
                off, whichever agent or channel handled it last.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-lime">
                Channels change. Context never breaks.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Globe2, label: "Website" },
                { icon: MessageSquare, label: "WhatsApp" },
                { icon: Mail, label: "Email" },
              ].map((c) => (
                <div key={c.label} className="border-t border-line-strong pt-5 text-center">
                  <c.icon className="mx-auto h-6 w-6 text-lime" aria-hidden />
                  <p className="mt-3 text-sm font-medium">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Context continuity ── */}
      <ContextContinuity />

      {/* ── Voice-first ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Voice-first by design</p>
          <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
            Oman doesn&rsquo;t type. <span className="text-lime">Oman talks.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Your customers send voice notes on WhatsApp. The chatbot treats
            them as first-class conversations.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {voiceCards.map((c) => (
              <div key={c.title} className="border-t border-line-strong pt-5">
                <c.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operating intelligence ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">The dashboard that makes people lean in</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Chats become <span className="text-lime">operating intelligence.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Every visitor is a signal. Names, channels, sentiment scored to the
            decimal. WhatsApp, web chat, email: every thread becomes a row in
            your pipeline. No CRM tab-switching, no copy-paste. The machine
            does the boring work so humans can do the closing.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {intel.map((c) => (
              <div key={c.title} className="border-t border-line-strong pt-5">
                <c.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data residency ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">Your data. Our commitment.</p>
              <h2 className="mt-4 max-w-xl text-2xl md:text-4xl">
                Your chat data stays <span className="accent-italic">inside Oman</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                We store and process all customer chat data exclusively within
                Oman. Your data stays local, private, and secure. 100% of chat
                data remains within the Sultanate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Landmark, label: "Stored in Oman" },
                { icon: Lock, label: "Private & secure" },
                { icon: ShieldCheck, label: "Personal Data Protection Law compliant" },
                { icon: Database, label: "Sensitive data encrypted" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2.5 border border-line-strong bg-ink-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.08em] text-muted-foreground"
                >
                  <b.icon className="h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Install CTA ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">
            Your website is quiet. <span className="text-lime">Fix that.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Install the chatbot that knows Oman. Enter your website: we review
            the site, connect approved data, and launch the chatbot. Less than
            two minutes to start.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Build my chatbot <ArrowRight className="h-4 w-4" aria-hidden />
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

      <CtaBanner />
    </>
  );
}
