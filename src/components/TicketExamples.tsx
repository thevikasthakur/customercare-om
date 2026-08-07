"use client";

import { useState } from "react";
import {
  CreditCard,
  KeyRound,
  MessageSquare,
  Package,
  Wrench,
} from "lucide-react";

type Example = {
  tab: string;
  tag: string;
  icon: React.ElementType;
  convo: { from: "agent" | "customer"; text: string }[];
  ticket: {
    id: string;
    status: string;
    title: string;
    priority: string;
    assignee: string;
    initials: string;
    team: string;
    sentiment: string;
    labels: string[];
  };
};

const examples: Example[] = [
  {
    tab: "Billing dispute",
    tag: "Overcharge",
    icon: CreditCard,
    convo: [
      { from: "agent", text: "Thanks for calling Al Mounah. How can I help today?" },
      { from: "customer", text: "My card was charged twice for the same order this month." },
      { from: "customer", text: "Can you put the extra one back on my card?" },
      { from: "agent", text: "Done. The duplicate charge is reversed and you will see it within one business day." },
    ],
    ticket: {
      id: "TKT-4821",
      status: "In Progress",
      title: "Refund a duplicate charge",
      priority: "P2 · High",
      assignee: "Nadia",
      initials: "NA",
      team: "Billing",
      sentiment: "Positive",
      labels: ["Billing", "Refund"],
    },
  },
  {
    tab: "Maintenance",
    tag: "Emergency repair",
    icon: Wrench,
    convo: [
      { from: "agent", text: "Marhaba! What is happening?" },
      { from: "customer", text: "The AC in the master bedroom is leaking water onto the carpet." },
      { from: "customer", text: "It is villa 12 in Al Khoudh. Please hurry, it is spreading." },
      { from: "agent", text: "A technician is assigned for today between 4 and 6. I have marked it urgent." },
    ],
    ticket: {
      id: "TKT-4822",
      status: "Urgent",
      title: "AC water leak, master bedroom, Villa 12",
      priority: "P1 · Urgent",
      assignee: "Salim",
      initials: "SA",
      team: "Maintenance",
      sentiment: "Anxious",
      labels: ["Maintenance", "Villa 12"],
    },
  },
  {
    tab: "Order issue",
    tag: "Damaged delivery",
    icon: Package,
    convo: [
      { from: "agent", text: "Salaam, thank you for calling. How can I help?" },
      { from: "customer", text: "The majlis sofa arrived today but one panel is scratched." },
      { from: "customer", text: "Order 2214. I would like a replacement panel, not a refund." },
      { from: "agent", text: "Understood. A replacement panel ships this week and the fitter will call before visiting." },
    ],
    ticket: {
      id: "TKT-4823",
      status: "In Progress",
      title: "Replace scratched panel, order 2214",
      priority: "P2 · High",
      assignee: "Huda",
      initials: "HU",
      team: "Logistics",
      sentiment: "Neutral",
      labels: ["Order 2214", "Replacement"],
    },
  },
  {
    tab: "Tech support",
    tag: "Account access",
    icon: KeyRound,
    convo: [
      { from: "agent", text: "Welcome to support. What seems to be the trouble?" },
      { from: "customer", text: "I cannot log in to the customer portal since yesterday." },
      { from: "customer", text: "The OTP never arrives on my phone." },
      { from: "agent", text: "I have reset your OTP channel to WhatsApp and sent a fresh code. Please try now." },
    ],
    ticket: {
      id: "TKT-4824",
      status: "Resolved",
      title: "Restore portal access, OTP delivery",
      priority: "P3 · Normal",
      assignee: "Yusuf",
      initials: "YU",
      team: "Support",
      sentiment: "Relieved",
      labels: ["Account", "OTP"],
    },
  },
];

export default function TicketExamples() {
  const [active, setActive] = useState(0);
  const ex = examples[active];

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Pick a support situation</p>

        {/* situation tabs */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {examples.map((e, i) => (
            <button
              key={e.tab}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`flex flex-col items-center gap-1 border px-4 py-4 text-center transition-colors ${
                i === active
                  ? "border-lime bg-lime text-ink"
                  : "border-line-strong bg-ink-2 text-muted-foreground hover:bg-ink-3"
              }`}
            >
              <e.icon className="h-4 w-4" aria-hidden />
              <span className="text-sm font-semibold">{e.tab}</span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                  i === active ? "text-ink/70" : "text-muted-foreground/70"
                }`}
              >
                {e.tag}
              </span>
            </button>
          ))}
        </div>

        {/* conversation + ticket */}
        <div className="mt-6 grid gap-5 md:grid-cols-[1.05fr_1fr]">
          {/* conversation card */}
          <div className="overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <div className="flex items-center gap-2 border-b border-black/10 px-4 py-2.5">
              <MessageSquare className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
              <span className="text-xs font-semibold text-neutral-700">AI conversation</span>
            </div>
            <div className="space-y-3 p-5">
              {ex.convo.map((m, i) =>
                m.from === "agent" ? (
                  <p
                    key={i}
                    className="w-fit max-w-[85%] rounded-xl rounded-bl-sm border border-black/10 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700"
                  >
                    {m.text}
                  </p>
                ) : (
                  <p
                    key={i}
                    className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-lime px-4 py-2.5 text-sm font-medium text-ink"
                  >
                    {m.text}
                  </p>
                )
              )}
            </div>
          </div>

          {/* ticket card */}
          <div className="flex flex-col overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="font-mono text-xs text-neutral-500">{ex.ticket.id}</span>
              <span
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  ex.ticket.status === "Urgent"
                    ? "bg-amber-100 text-amber-800"
                    : ex.ticket.status === "Resolved"
                      ? "bg-lime/30 text-neutral-800"
                      : "bg-neutral-900 text-lime"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                {ex.ticket.status}
              </span>
            </div>
            <div className="flex-1 px-5 py-4">
              <h3 className="text-base font-semibold text-neutral-900">{ex.ticket.title}</h3>
              <p className="mt-1 text-xs text-neutral-500">Auto-created by AI Customer Care from the call</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-neutral-400">Priority</dt>
                  <dd className="font-medium text-neutral-800">{ex.ticket.priority}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-neutral-400">Assignee</dt>
                  <dd className="flex items-center gap-1.5 font-medium text-neutral-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[8px] font-bold text-lime">
                      {ex.ticket.initials}
                    </span>
                    {ex.ticket.assignee}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-neutral-400">Team</dt>
                  <dd className="font-medium text-neutral-800">{ex.ticket.team}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-neutral-400">Sentiment</dt>
                  <dd>
                    <span className="rounded bg-lime/25 px-2 py-0.5 text-xs font-medium text-neutral-800">
                      {ex.ticket.sentiment}
                    </span>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-neutral-400">Labels</dt>
                  <dd className="flex gap-1.5">
                    {ex.ticket.labels.map((l) => (
                      <span
                        key={l}
                        className="rounded border border-black/10 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-600"
                      >
                        {l}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
