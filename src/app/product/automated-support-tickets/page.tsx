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
    title: "Detected live, without prompting",
    desc: "Mid-conversation, the agent recognises a support issue: a duplicate charge, a delayed delivery, a failed installation, and never asks the customer to fill anything in.",
  },
  {
    icon: FileText,
    title: "Summary, category and priority filled in",
    desc: "A clear write-up in English or Arabic, the full transcript attached in whichever of our nine languages the customer used, with severity graded from what was actually said.",
  },
  {
    icon: Route,
    title: "Assignment lands with the owning team",
    desc: "Billing to finance, faults to operations, escalations to the duty desk, each one carrying its due date and its chase reminders.",
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
    a: "No. The customer describes the issue in their own words, and the record is built from that conversation. The paperwork happens on our side, not theirs.",
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
    a: "AI Customer Care can run ticketing end-to-end or push tickets into the helpdesk you already use through our integrations and API.",
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
                <span className="text-lime">Ticketing without the typing.</span>{" "}
                Support issues raised, ranked and routed across every channel.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Omani enterprises take thousands of support issues a week by
                phone, chat, WhatsApp and email. AI Customer Care listens to the
                live conversation, drafts the record, grades the urgency and
                hands it to the team that owns it.{" "}
                <strong className="text-foreground">Before the customer says goodbye.</strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
                </Link>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { v: "4", l: "Channels into one queue" },
                  { v: "0", l: "Forms for the customer" },
                  { v: "Same day", l: "Live on chat and email" },
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
                src="/media/ai-customercare-tickets.webp"
                alt="AI Customer Care tickets board with open, in-progress, and resolved columns"
                width={1536}
                height={1024}
                className="w-full rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Four support situations ── */}
      <TicketExamples />

      {/* ── Support should begin with a conversation ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">The support problem</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Support should begin with a conversation, <span className="accent-italic">not a form</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            The customer has already set out the whole problem, in their own
            words, in Arabic or English. A portal login and a page of form
            fields only make them say it a second time, and your support team
            still opens the case with no context at all.
          </p>
          <p className="mt-5 font-semibold">
            AI Customer Care is already on that conversation, so the record is
            written from it.
          </p>
        </div>
      </section>

      {/* ── Conversation to owned ticket flow ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            One conversation in,{" "}
            <span className="accent-italic">one owned ticket out.</span>
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
            Zero typing. Full history. Correct owner.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
              And once it is owned, somebody has to keep it moving. Smart
              Follow-Ups chases the assignee and updates the customer until the
              ticket reaches a confirmed ending.
            </p>
            <Link
              href="/product/smart-follow-ups/"
              className="inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Smart Follow-Ups <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              Every queue, owner and outcome{" "}
              <span className="accent-italic">on one board</span>.
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

      {/* ── Sized for Omani enterprise support volumes ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Sized for the support volumes{" "}
                <span className="accent-italic">Omani enterprises carry</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Telecoms operators, banks, utilities, hospital groups, logistics
                networks: when thousands of issues arrive each week by phone and
                WhatsApp, the queue stays ordered and nothing sits unowned.
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
