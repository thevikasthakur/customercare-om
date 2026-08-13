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
    "AI ticketing for Omani enterprises: support issues heard on live calls, chats, and email become graded, assigned tickets before the conversation ends, stored entirely inside Oman.",
};

const handsFree = [
  {
    icon: Ear,
    title: "Heard live, on the call",
    desc: "While the customer is still speaking, the agent picks out the complaint: an overcharged invoice, a van that never showed, a unit that stopped cooling. No form appears at any point.",
  },
  {
    icon: FileText,
    title: "Drafted with severity and context",
    desc: "The write-up arrives in Arabic or English with the original recording and transcript alongside, in any of our nine supported languages, and an urgency grade drawn from the caller's own words.",
  },
  {
    icon: Route,
    title: "Delivered to whoever answers for it",
    desc: "Finance takes the billing dispute, operations takes the fault, the duty desk takes the escalation. The deadline and its reminder schedule travel with the ticket.",
  },
];

const capabilities = [
  "Tickets opened automatically from calls, chats, WhatsApp, and email",
  "Write-ups drafted by AI in Arabic or English",
  "Issues routed straight to the owning team",
  "Categories modelled on your own departments",
  "Progress visible from intake through to closure",
  "Severity graded from the customer's own words",
  "Deadlines that send their own reminders",
  "Workload spread evenly across the team",
  "A complete audit trail kept on each ticket",
  "Every case pinned to its CRM account",
  "Optional web form for walk-in requests",
  "Reporting on backlog, ageing, and time to fix",
];

const ticketFaqs = [
  {
    q: "What does the customer have to do to raise a ticket?",
    a: "Nothing beyond explaining the issue the way they already were, on the call or in the chat. The record is assembled on our side; no portal, no reference form, no repeating themselves.",
  },
  {
    q: "Where can tickets come from?",
    a: "Phone calls, web chat, WhatsApp threads, and email, with an optional intake form for the front desk. All of them feed a single numbered queue, so nothing lives in two systems.",
  },
  {
    q: "Does it write tickets in Arabic?",
    a: "Yes. You choose whether write-ups are drafted in Arabic or English, in whichever language the call took place, and the recording and transcript are kept in the original alongside.",
  },
  {
    q: "How do tickets reach the right team?",
    a: "You map categories to owners once, such as invoicing disputes to finance and site faults to operations. Each new issue is classified against that map, and anything the AI cannot place confidently goes to a fallback owner instead of waiting unassigned.",
  },
  {
    q: "Can it feed the helpdesk we already run?",
    a: "Yes. Run ticketing end to end on CustomerCare.OM, or keep your current helpdesk and let us create and update tickets there through our integrations and API.",
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
                <span className="text-lime">The ticket writes itself while the customer talks.</span>{" "}
                Logged, graded, and assigned before the call ends.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Omani enterprises take thousands of support issues a week by
                phone, chat, WhatsApp and email. CustomerCare.OM listens to the
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
                  { v: "4", l: "Ways in, one queue out" },
                  { v: "0", l: "Portals customers must log into" },
                  { v: "Day one", l: "Working your chat and inbox" },
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
                alt="CustomerCare.OM tickets board with open, in-progress, and resolved columns"
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
            Nobody should fill in paperwork{" "}
            <span className="accent-italic">to report a problem</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            By the time a customer finishes explaining an issue on the phone,
            every detail your desk needs has been spoken aloud. Sending them to
            a portal afterwards asks them to repeat it, and your team still
            inherits a case stripped of its context.
          </p>
          <p className="mt-5 font-semibold">
            CustomerCare.OM hears the original conversation, so the record
            starts complete.
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
            The customer explains once.{" "}
            <span className="accent-italic">The ticket does the rest.</span>
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
            No forms filled. No context dropped. No orphan tickets.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
              A ticket with an owner still needs momentum. Smart Follow-Ups
              takes over from here, nudging the assignee and keeping the
              customer posted until the fix is confirmed on both sides.
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
              The whole support load,{" "}
              <span className="accent-italic">readable at a glance</span>.
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
