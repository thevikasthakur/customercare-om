import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  Check,
  ClipboardList,
  Ear,
  FileText,
  Route,
  Ticket,
  Users,
} from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner, Faq } from "@/components/sections";
import TicketExamples from "@/components/TicketExamples";

export const metadata: Metadata = {
  title: "Automated Support Tickets",
  description:
    "AI ticketing for Oman: tickets created, summarised, and routed automatically from every call, chat, and email, in Arabic and English, with data resident in Oman.",
};

const handsFree = [
  {
    icon: Ear,
    title: "It hears the problem as it happens",
    desc: "During the call or chat, the agent recognises a support issue: a duplicate charge, a delayed delivery, a broken tap, without asking the customer to fill anything in.",
  },
  {
    icon: FileText,
    title: "It writes and classifies the ticket",
    desc: "A clean summary in English, the original conversation attached in Arabic or any of our nine languages, category and priority set automatically.",
  },
  {
    icon: Route,
    title: "It routes to the right person instantly",
    desc: "Billing issues to finance, maintenance to operations, complaints to the duty manager, with due dates and reminders attached.",
  },
];

const capabilities = [
  "Auto-create tickets from calls, chats, WhatsApp, and email",
  "AI-generated ticket summaries in English or Arabic",
  "Smart routing to the right team member",
  "Custom ticket categories that match your business",
  "Status tracking from open to resolved",
  "Priority levels set from sentiment and urgency",
  "Due dates and reminders that chase themselves",
  "Team assignment with workload balancing",
  "Notes and a full activity log on every ticket",
  "CRM-linked tickets tied to the customer record",
  "Intake-form tickets for walk-in and web requests",
  "Ticket analytics: volumes, ages, and resolution times",
];

const ticketFaqs = [
  {
    q: "Do customers have to fill in a form?",
    a: "No. Nobody wants to submit a ticket. The ticket is a byproduct of the conversation: the customer just talks, and the system does the paperwork.",
  },
  {
    q: "Which channels create tickets?",
    a: "Phone calls, web chat, WhatsApp, and email, plus an intake form when you want one. Everything lands in one queue with one numbering scheme.",
  },
  {
    q: "Can tickets be in Arabic?",
    a: "Yes. Summaries can be generated in Arabic or English regardless of the conversation's language, and the original transcript is always attached.",
  },
  {
    q: "How does routing work?",
    a: "You define categories and owners once: billing to finance, maintenance to operations. The AI classifies each issue and assigns it, with fallbacks for anything ambiguous.",
  },
  {
    q: "Does it work with my existing helpdesk?",
    a: "VoxCare can run ticketing end-to-end or push tickets into the helpdesk you already use through our integrations and API.",
  },
];

export default function TicketsPage() {
  return (
    <>
      {/* ── Hero: text left, tickets board right ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
                Automated Support Tickets
              </p>
              <h1 className="max-w-xl text-4xl md:text-[3.4rem] leading-[1.08]">
                <span className="text-lime">AI ticketing.</span> Auto-create and
                route tickets from every channel.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Customers do not want to fill out a support form. They just want
                help. VoxCare hears the problem in the conversation, writes the
                ticket, scores the urgency, and routes it to the right person.{" "}
                <strong className="text-foreground">Before the call even ends.</strong>
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
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { v: "92%+", l: "Detection accuracy" },
                  { v: "40%", l: "Auto-resolved" },
                  { v: "5 min", l: "To go live" },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-display text-2xl md:text-3xl font-medium tracking-tight">{m.v}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-clip rounded-xl border border-black/10 bg-white p-2 shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
              <Image
                src="/media/tickets-screenshot.png"
                alt="VoxCare tickets board with open, in-progress, and resolved columns (placeholder visual)"
                width={1920}
                height={1200}
                className="w-full rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Four support situations ── */}
      <TicketExamples />

      {/* ── Nobody wants to submit a ticket ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">The support problem</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Nobody wants to <span className="accent-italic">&ldquo;submit a ticket&rdquo;</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Your customer just described the whole problem out loud, on the
            phone, in their own words. The old way asks them to log into a
            portal, retype it into form fields, and wait, while your team
            starts from scratch with zero context. The ticket should already be
            written by the time they hang up.
          </p>
          <p className="mt-5 font-semibold">
            With VoxCare it is. Because the AI is already on the conversation.
          </p>
        </div>
      </section>

      {/* ── Hands-free flow ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            From complaint to routed ticket.{" "}
            <span className="accent-italic">Hands-free.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {handsFree.map((s, i) => (
              <div key={s.title} className="relative border border-border bg-ink-2/95 p-8">
                <s.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < handsFree.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-lime md:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-lime">
            The ticket is a byproduct of the call.
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              Everything you need to track and resolve issues{" "}
              <span className="accent-italic">fast</span>.
            </h2>
            <Ticket className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-2.5 border border-border bg-ink-2 px-4 py-3.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Built for your businesses ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Built for customer-oriented businesses{" "}
                <span className="accent-italic">like yours</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Property managers chasing maintenance jobs, clinics tracking
                patient callbacks, e-commerce teams handling where-is-my-order:
                if issues arrive by phone and WhatsApp, this was built for you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: ClipboardList, label: "One queue, all channels" },
                { icon: AlarmClock, label: "Due dates that chase" },
                { icon: Users, label: "Team assignment" },
                { icon: Ticket, label: "Data resident in Oman" },
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

      <Faq items={ticketFaqs} />
      <CtaBanner />
    </>
  );
}
