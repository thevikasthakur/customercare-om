import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Check,
  Database,
  FileSpreadsheet,
  History,
  PhoneForwarded,
  PhoneOutgoing,
  Repeat,
  Voicemail,
  Workflow,
} from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner, Faq } from "@/components/sections";
import ContextContinuity from "@/components/ContextContinuity";
import OutboundWorkflowPanel from "@/components/OutboundWorkflowPanel";

export const metadata: Metadata = {
  title: "Outbound Calling AI Agents",
  description:
    "AI outbound calling for Oman: from CRM trigger to connected conversation, with full context, perfect timing, and compliance with Omani calling norms built in.",
};

const flow = [
  {
    n: 1,
    icon: Database,
    title: "CRM trigger",
    desc: "A new lead lands, an appointment nears, an invoice falls due. Your CRM fires the trigger; no one has to remember to call.",
  },
  {
    n: 2,
    icon: History,
    title: "Load context",
    desc: "The agent reads the record first: name, history, language preference, and the reason for the call.",
  },
  {
    n: 3,
    icon: Workflow,
    title: "Personalise the script",
    desc: "Variables fill themselves: the customer's name, the amount, the slot on offer, in Arabic or English as appropriate.",
  },
  {
    n: 4,
    icon: PhoneOutgoing,
    title: "Make the call",
    desc: "The agent dials at a respectful hour, speaks naturally, handles questions, and logs the outcome back to the CRM.",
  },
];

const contextCards = [
  {
    title: "Auto-filled context",
    desc: "Every call starts with the full customer story loaded, so nobody is asked to repeat their order number again.",
  },
  {
    title: "Perfect timing",
    desc: "Calling windows respect Omani norms: prayer times, Ramadan hours, and weekends are avoided automatically.",
  },
  {
    title: "Conversation memory",
    desc: "If the customer spoke to AI Customer Care last week, the agent remembers, and continues rather than restarts.",
  },
  {
    title: "Instant booking",
    desc: "When the customer says yes, the slot is booked during the call and confirmed by SMS or WhatsApp.",
  },
  {
    title: "Script personalisation",
    desc: "Tone shifts by audience: formal Arabic for ministries, warm Gulf Arabic for families, English for expat customers.",
  },
  {
    title: "Seamless transfer",
    desc: "Interested prospects are warm-transferred to your team mid-call, with a spoken summary before the handoff.",
  },
];

const scaleFeatures = [
  "Campaign builder with audience segments",
  "Dynamic call scripts with variables",
  "Voicemail drop when nobody answers",
  "Retry logic with sensible spacing",
  "Call outcome tracking in your CRM",
  "Live transfer to human closers",
  "Scheduling controls and calling windows",
  "CRM-triggered single calls",
  "Concurrent dialling at campaign scale",
  "Campaign analytics and cost per outcome",
];

const outboundFaqs = [
  {
    q: "How quickly can we launch our first campaign?",
    a: "Allow about a week. Outbound dialling runs over a SIP trunk from Omantel or Ooredoo, and procuring it takes most of that time. We build your campaign, scripts, and calling windows while you wait, so once the trunk is provisioned the first campaign can start within a day.",
    link: { label: "Omantel SIP trunk for business", href: "https://www.omantel.om/en/business/small-medium-enterprise/fixed-voice-sip-trunk" },
  },
  {
    q: "Is outbound AI calling allowed in Oman?",
    a: "Yes, within the rules: calls must respect consent, identify themselves honestly, and follow telecom regulations and the Personal Data Protection Law. AI Customer Care bakes disclosure, consent records, and calling-hour limits into every campaign. See our Oman guideline page for the details.",
  },
  {
    q: "How many calls can it place at once?",
    a: "Campaigns dial concurrently and scale to thousands of calls per hour. You set the pace; the platform respects it.",
  },
  {
    q: "What happens when someone answers?",
    a: "A natural conversation in the customer's language. The agent explains why it is calling, handles questions, books or confirms, and logs everything. If the customer wants a human, it transfers warmly with context.",
  },
  {
    q: "What about numbers that never pick up?",
    a: "Retry logic spaces attempts respectfully, voicemail drop leaves a clear message, and after the limit you set, the record is marked unreachable rather than harassed.",
  },
  {
    q: "Can it run reminder campaigns during Ramadan?",
    a: "Yes. Calling windows adjust to the hours your customers actually keep, including seasonal schedules, so reminders land politely.",
  },
];

export default function OutboundPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
            Outbound Calling AI Agents
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl leading-[1.06]">
            AI outbound calling, <span className="accent-italic">done politely</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Reminders, confirmations, lead follow-ups, and payment nudges,
            placed at the right hour in the right language, from a CSV or
            straight from your CRM.
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

      {/* ── Workflow campaign panel ── */}
      <OutboundWorkflowPanel />

      {/* ── Trigger-to-call flow ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            From CRM trigger to{" "}
            <span className="accent-italic">connected conversation</span>.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {flow.map((s, i) => (
              <div key={s.n} className="relative border border-border bg-ink-2 p-7">
                <s.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < flow.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-lime md:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full context cards ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-xl text-3xl md:text-5xl">
            Outbound calls with <span className="accent-italic">full context</span>.
          </h2>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {contextCards.map((c) => (
              <div key={c.title} className="bg-ink-2/95 p-8">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context continuity ── */}
      <ContextContinuity />

      {/* ── Everything at scale ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <h2 className="text-3xl md:text-5xl">
                Everything you need to run outbound{" "}
                <span className="accent-italic">at scale</span>.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Upload a list and launch thousands of calls before lunch, or let
                CRM events trigger one perfect call at a time. Every dial is
                logged, every outcome measured.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: FileSpreadsheet, label: "CSV upload" },
                  { icon: Repeat, label: "Retry logic" },
                  { icon: Voicemail, label: "Voicemail drop" },
                  { icon: CalendarClock, label: "Calling windows" },
                  { icon: PhoneForwarded, label: "Live transfer" },
                  { icon: Database, label: "CRM sync" },
                ].map((b) => (
                  <div key={b.label} className="border border-border bg-ink-2 p-4 text-center">
                    <b.icon className="mx-auto h-5 w-5 text-lime" aria-hidden />
                    <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {scaleFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 border border-border bg-ink-2 px-4 py-3.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Compliance band ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mx-auto max-w-2xl text-2xl md:text-4xl">
            Stop blast-dialling. <span className="accent-italic">Start conversing.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Every dial follows the book: honest disclosure, consent records,
            Omani calling hours, and the Personal Data Protection Law. Outbound
            that builds your brand instead of burning it.
          </p>
        </div>
      </section>

      <Faq items={outboundFaqs} />
      <CtaBanner />
    </>
  );
}
