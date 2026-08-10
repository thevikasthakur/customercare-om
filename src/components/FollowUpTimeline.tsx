"use client";

import { useState } from "react";
import { BellRing, CalendarClock, MessageSquare, UserCheck } from "lucide-react";

type Stage = {
  label: string;
  time: string;
  state: "on-track" | "attention" | "done";
  internal: { to: string; text: string }[];
  customer: { text: string } | null;
  /** what the customer is holding on to when no new message goes out */
  standing: { expects: string; since: string };
  note: string;
};

const stages: Stage[] = [
  {
    label: "Assigned",
    time: "09:12",
    state: "on-track",
    internal: [
      {
        to: "Salim, Maintenance",
        text: "AC-10238 is yours. AC water leak, Villa 12, Al Khoudh. Promised to the customer today, 4pm to 6pm.",
      },
    ],
    customer: {
      text: "Your AC leak is logged as AC-10238. A technician is booked for today between 4pm and 6pm.",
    },
    standing: { expects: "A technician today, 4pm to 6pm", since: "Told at 09:12" },
    note: "The promise made on the call becomes the clock everything else is measured against.",
  },
  {
    label: "Acknowledged",
    time: "09:26",
    state: "on-track",
    internal: [
      {
        to: "Salim, Maintenance",
        text: "AC-10238 has been sitting unopened for 10 minutes. Take it, or send it back to the queue.",
      },
      { to: "Queue", text: "Salim accepted AC-10238 at 09:26. Chase cleared." },
    ],
    customer: null,
    standing: { expects: "A technician today, 4pm to 6pm", since: "Unchanged since 09:12" },
    note: "Whether Salim opened the ticket at 09:16 or 09:26 changes nothing for the customer, so they are not told about it. The window they were promised still stands.",
  },
  {
    label: "Chased",
    time: "15:40",
    state: "on-track",
    internal: [
      {
        to: "Salim, Maintenance",
        text: "Twenty minutes to your 4pm window at Villa 12 and you are still checked in at Ghala. Will you make it?",
      },
    ],
    customer: null,
    standing: { expects: "A technician today, 4pm to 6pm", since: "Unchanged since 09:12" },
    note: "Salim is running behind, but 4pm is still reachable. The nudge goes to him, not to the customer, because the promise has not moved yet.",
  },
  {
    label: "Running late",
    time: "16:05",
    state: "attention",
    internal: [
      {
        to: "Salim, Maintenance",
        text: "You reported no drain pump on the van. Collecting from Ruwi adds about 90 minutes. Confirm a new window and I will tell the customer why.",
      },
      {
        to: "Duty supervisor",
        text: "AC-10238 has moved to 6pm to 7pm. Cause recorded: part not stocked on van 4.",
      },
    ],
    customer: {
      text: "Update on AC-10238. The technician needs a drain pump from our Ruwi store, so he will reach you between 6pm and 7pm today instead of 4pm to 6pm. Reply 1 to keep today, or 2 to move to tomorrow morning.",
    },
    standing: { expects: "A technician today, 6pm to 7pm", since: "Revised at 16:06" },
    note: "The customer hears the new time and the reason for it from you, before they have to ring and ask.",
  },
  {
    label: "Resolved",
    time: "18:48",
    state: "done",
    internal: [
      {
        to: "Queue",
        text: "Salim closed AC-10238 with a photo of the replaced pump. Nine hours 36 minutes against a 12 hour target.",
      },
    ],
    customer: {
      text: "Your AC leak is fixed. If any water returns within 30 days, reply here and we will send the same technician back.",
    },
    standing: { expects: "Nothing further, unless the leak returns", since: "Closed at 18:48" },
    note: "Closure is a message the customer receives, not a status only your team can see.",
  },
  {
    label: "Confirmed",
    time: "Next day, 10:00",
    state: "done",
    internal: [
      {
        to: "Operations",
        text: "Customer confirmed the repair held overnight. AC-10238 closed. Delay tagged to van stock, third time this month.",
      },
    ],
    customer: {
      text: "Good morning. Is the bedroom still dry? Reply yes to close this off, or tell us what is still wrong.",
    },
    standing: { expects: "Nothing further, unless the leak returns", since: "Closed at 18:48" },
    note: "The last question is asked by us. That is the difference between a closed ticket and a fixed problem.",
  },
];

const stateStyle: Record<Stage["state"], string> = {
  "on-track": "bg-neutral-900 text-lime",
  attention: "bg-amber-100 text-amber-800",
  done: "bg-lime/30 text-neutral-800",
};

export default function FollowUpTimeline() {
  const [active, setActive] = useState(0);
  const s = stages[active];

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">One ticket, followed the whole way</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl md:text-5xl">
          A leaking AC in Al Khoudh,{" "}
          <span className="accent-italic">from assignment to confirmed</span>.
        </h2>

        {/* stage rail */}
        <div className="mt-10 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((st, i) => (
            <button
              key={st.label}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`flex flex-col items-start gap-1 border px-3.5 py-3 text-left transition-colors ${
                i === active
                  ? "border-lime bg-lime text-ink"
                  : "border-line-strong bg-ink-2 text-muted-foreground hover:bg-ink-3"
              }`}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                  i === active ? "text-ink/70" : "text-muted-foreground/70"
                }`}
              >
                {st.time}
              </span>
              <span className="text-sm font-semibold">{st.label}</span>
            </button>
          ))}
        </div>

        {/* internal + customer */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* what the staff member gets */}
          <div className="flex flex-col overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                <BellRing className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
                Inside your team
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${stateStyle[s.state]}`}
              >
                {s.label}
              </span>
            </div>
            <div className="flex-1 space-y-3 p-5">
              {s.internal.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl rounded-bl-sm border border-black/10 bg-neutral-50 px-4 py-3"
                >
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                    <UserCheck className="h-3 w-3" aria-hidden />
                    {m.to}
                  </p>
                  <p className="mt-1.5 text-sm text-neutral-700">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* what the customer gets */}
          <div className="flex flex-col overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                <MessageSquare className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
                On the customer&rsquo;s side
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  s.customer ? "bg-lime/30 text-neutral-800" : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {s.customer ? "We message them" : "We stay quiet"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              {s.customer && (
                <p className="w-fit max-w-[92%] rounded-xl rounded-br-sm bg-lime px-4 py-3 text-sm font-medium text-ink">
                  {s.customer.text}
                </p>
              )}
              <div className={`rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 ${s.customer ? "mt-4" : ""}`}>
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                  <CalendarClock className="h-3 w-3" aria-hidden />
                  What they are now expecting
                </p>
                <p className="mt-1.5 text-sm font-medium text-neutral-800">{s.standing.expects}</p>
                <p className="mt-0.5 text-xs text-neutral-500">{s.standing.since}</p>
              </div>
              <p className="mt-auto pt-5 text-xs leading-relaxed text-neutral-500">{s.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
