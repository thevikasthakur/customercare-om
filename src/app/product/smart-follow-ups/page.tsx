import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  BellRing,
  Check,
  Clock,
  Flag,
  Gauge,
  Repeat,
  ShieldCheck,
  Timer,
  UserCheck,
  Users,
} from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import FollowUpTimeline from "@/components/FollowUpTimeline";

export const metadata: Metadata = {
  title: "Smart Follow-Ups",
  description:
    "AI follow-up for Omani service desks: every ticket chased with the staff member who owns it, and every customer told where their issue stands, including a new date and the reason whenever the first estimate slips.",
};

const chases = [
  {
    icon: UserCheck,
    title: "Your assignee, until they pick it up",
    desc: "An unopened ticket gets a nudge, then a second one, then it goes back to the queue and the supervisor hears about it. Nothing rots quietly in someone's list while they are on leave.",
  },
  {
    icon: Timer,
    title: "The clock, before it runs out",
    desc: "The chase lands while the promise can still be kept. Twenty minutes before a booked window, not the morning after the customer has already complained.",
  },
  {
    icon: BellRing,
    title: "Your customer, on the channel they used",
    desc: "Whoever called, chatted, or emailed hears back the same way, in the same language, at every point where something actually changed for them.",
  },
];

const capabilities = [
  "Acknowledgement chasing on every newly assigned ticket",
  "Unclaimed tickets released back for someone else to take",
  "Escalation ladders you define, per team and per priority",
  "Proactive customer updates on phone, chat, WhatsApp, or email",
  "Revised completion dates sent with the reason attached",
  "Reschedule offered to the customer, not just announced at them",
  "Closure verified with the customer, never declared",
  "Reassignment when the owner is on leave or off shift",
  "Updates written in the language the customer used",
  "Recurring delay causes trended month over month",
  "Quiet hours and holiday rules, including Eid and Fridays",
  "Full follow-up history stamped onto the ticket record",
];

const rungs = [
  {
    at: "Nothing happens for 10 minutes",
    who: "The assignee",
    what: "A direct nudge with the ticket, the promise, and a one-tap way to hand it back.",
  },
  {
    at: "Halfway to the promised time",
    who: "The assignee",
    what: "A progress check. If there is no answer, the ticket is flagged as at risk before it is late.",
  },
  {
    at: "The promise is about to break",
    who: "The duty supervisor",
    what: "An alert naming the ticket, the owner, and how much of the window is left.",
  },
  {
    at: "The date has moved",
    who: "The customer",
    what: "The new window, the reason it moved, and the option to take a different slot instead.",
  },
  {
    at: "Marked resolved",
    who: "The customer",
    what: "Confirmation that it is done, and a question asking whether it actually is.",
  },
];

const followUpFaqs = [
  {
    q: "Who gets chased, my staff or my customers?",
    a: "Both, for different reasons. Your staff are chased so the work moves: acknowledge it, progress it, or hand it back. Your customers are updated so they never have to ring and ask. The two run on the same ticket, so what the customer hears always matches what your team is actually doing.",
  },
  {
    q: "What happens when a job is going to miss its promised date?",
    a: "The assignee is asked for the new window and the cause before the deadline passes. The customer then receives both: the revised time and, in plain words, why it moved. They are also offered the choice of keeping the new slot or taking a different one. A silent slip is the one outcome the system will not allow.",
  },
  {
    q: "Will customers be buried in notifications?",
    a: "No. Updates go out when something has genuinely changed for the customer: the work is assigned, the date has moved, the job is done. Steps that only matter internally, such as an assignee finally acknowledging a ticket, never reach them.",
  },
  {
    q: "Can I control the chasing rules myself?",
    a: "Yes. Timings, escalation ladders, who gets alerted at each rung, quiet hours, and the wording of every customer message are all yours to set, per team and per priority level.",
  },
  {
    q: "Does this work with the helpdesk we already run?",
    a: "It runs end-to-end on CustomerCare.OM tickets, and it can also sit on top of the helpdesk you already use, reading assignment and due-date changes through our integrations and API and doing the chasing your current tool does not.",
  },
  {
    q: "Which language does the customer update arrive in?",
    a: "The one they used with us. A customer who reported a fault in Omani Arabic gets their updates in Omani Arabic, while your team reads the same thread in English or Arabic as they prefer. All nine of our languages are covered.",
  },
];

export default function SmartFollowUpsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
                Smart Follow-Ups
              </p>
              <h1 className="max-w-xl text-4xl md:text-[3.4rem] leading-[1.08]">
                <span className="text-lime">Raising the ticket was the easy part.</span>{" "}
                This is the part that keeps the promise.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Every ticket CustomerCare.OM creates is then followed to the
                end: the assignee is chased until the work moves, and the
                customer is told where it stands.{" "}
                <strong className="text-foreground">
                  Including the day it is going to take longer, and why.
                </strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
                </Link>
                <Link
                  href="/product/automated-support-tickets/"
                  className="inline-flex h-11 items-center gap-2 border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
                >
                  See how tickets are raised <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { v: "0", l: "Chase calls the customer makes" },
                  { v: "2 ways", l: "Staff nudged, customer updated" },
                  { v: "9", l: "Languages updates go out in" },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                      {m.v}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* status card mock */}
            <div className="overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
                <span className="font-mono text-xs text-neutral-500">AC-10238</span>
                <span className="flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                  Running late
                </span>
              </div>
              <div className="px-5 py-5">
                <h2 className="text-base font-semibold text-neutral-900">
                  AC water leak, master bedroom, Villa 12
                </h2>
                <p className="mt-1 text-xs text-neutral-500">
                  Owner: Salim, Maintenance · Promised today 4pm to 6pm
                </p>

                <ol className="mt-5 space-y-3.5">
                  {[
                    { t: "09:12", d: "Assigned to Salim, customer told 4pm to 6pm", done: true },
                    { t: "09:26", d: "Nudged at 10 minutes, accepted at 14", done: true },
                    { t: "15:40", d: "Checked in before the window opens", done: true },
                    { t: "16:05", d: "Part missing from van, new window 6pm to 7pm", done: false },
                    { t: "16:06", d: "Customer sent the revised window and the cause", done: false },
                  ].map((row) => (
                    <li key={row.t} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                          row.done ? "bg-ink text-lime" : "bg-amber-100 text-amber-800"
                        }`}
                        aria-hidden
                      >
                        {row.done ? "✓" : "!"}
                      </span>
                      <span className="text-sm text-neutral-700">
                        <span className="font-mono text-xs text-neutral-400">{row.t}</span>{" "}
                        {row.d}
                      </span>
                    </li>
                  ))}
                </ol>

                <p className="mt-5 border-t border-black/10 pt-4 text-xs text-neutral-500">
                  Delay reason recorded: drain pump not stocked on van 4.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The gap this closes ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Where service desks lose people</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            The danger zone sits between{" "}
            <span className="accent-italic">assigned and done</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            The complaint that damages you is rarely the fault itself. It is the
            week of not knowing: a reference number, a promise nobody repeated,
            and a customer who has to ring three times to find out that the part
            was never ordered.
          </p>
          <p className="mt-5 font-semibold">
            Somebody has to chase. Ours does it every time, on both sides at once.
          </p>
        </div>
      </section>

      {/* ── Three things it chases ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Three things get chased,{" "}
            <span className="accent-italic">none of them by your supervisor</span>.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {chases.map((c) => (
              <div key={c.title} className="border border-border bg-ink-2/95 p-8">
                <c.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-lime">
            Chased on time. Explained honestly. Confirmed at the end.
          </p>
        </div>
      </section>

      {/* ── Lifecycle walkthrough ── */}
      <FollowUpTimeline />

      {/* ── When the estimate slips ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <span className="inline-block h-1.5 w-6 bg-lime" aria-hidden />
                The awkward message
              </p>
              <h2 className="mt-4 max-w-lg text-3xl md:text-5xl">
                Break the bad news{" "}
                <span className="accent-italic">before it breaks trust</span>.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
                Most service teams do eventually tell the customer about a delay.
                They tell them on the third chase call, after the promise has
                already been broken, and usually without a reason anyone believes.
              </p>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Here the sequence is reversed. The assignee is asked for a cause
                and a new window while the original one is still open, and the
                customer receives both before they notice anything is wrong.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Clock,
                  t: "A new date, not a vague apology",
                  d: "Every revised commitment carries a specific window, so the customer can plan around it.",
                },
                {
                  icon: Flag,
                  t: "The real reason, in plain words",
                  d: "Part on back order, site access refused, technician pulled to an emergency. Written for a customer to read, not for an audit log.",
                },
                {
                  icon: Repeat,
                  t: "A choice, not an announcement",
                  d: "Keep the new slot or take a different one. The reply comes back on the same thread and updates the ticket.",
                },
                {
                  icon: Gauge,
                  t: "A cause that gets counted",
                  d: "Every delay is tagged, so by the end of the month you can see that van stock, not effort, is costing you your promises.",
                },
              ].map((r) => (
                <div key={r.t} className="flex gap-4 border border-border bg-ink-2 p-6">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold">{r.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Escalation ladder ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              The ladder your desk climbs{" "}
              <span className="accent-italic">before anyone complains</span>.
            </h2>
            <AlarmClock className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <div className="divide-y divide-[rgba(212,255,79,0.18)] border-y border-[rgba(212,255,79,0.18)]">
            {rungs.map((r) => (
              <div
                key={r.at}
                className="grid gap-2 py-5 md:grid-cols-[1fr_0.6fr_1.4fr] md:items-baseline md:gap-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-lime">{r.at}</p>
                <p className="text-sm font-semibold">{r.who}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Every timing, recipient and message above is yours to change, per team
            and per priority.
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              Everything the follow-up engine{" "}
              <span className="accent-italic">does on its own</span>.
            </h2>
            <Users className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 border border-border bg-ink-2 px-4 py-3.5 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pairs with tickets ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Two halves of the same promise:{" "}
                <span className="accent-italic">raised, then kept</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Automated Support Tickets turns a conversation into an owned
                record. Smart Follow-Ups makes sure that record reaches a
                confirmed ending, with every update stored on infrastructure
                inside Oman under the Personal Data Protection Law.
              </p>
              <Link
                href="/product/automated-support-tickets/"
                className="mt-6 inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Automated Support Tickets <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: BellRing, label: "Chased on both sides" },
                { icon: Clock, label: "Dates that get revised" },
                { icon: Flag, label: "Delay causes counted" },
                { icon: ShieldCheck, label: "Data resident in Oman" },
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

      <Faq items={followUpFaqs} />
      <CtaBanner />
    </>
  );
}
