"use client";

import { useState } from "react";
import { Building2, MessageSquare, Sun, Wrench } from "lucide-react";

type Field = { k: string; v: string; from: "call" | "enriched" };

type Enquiry = {
  tab: string;
  tag: string;
  icon: React.ElementType;
  convo: { from: "agent" | "caller"; text: string }[];
  lead: {
    ref: string;
    stage: string;
    score: string;
    owner: string;
    initials: string;
    fields: Field[];
  };
};

const enquiries: Enquiry[] = [
  {
    tab: "Solar",
    tag: "Sohar factory roof",
    icon: Sun,
    convo: [
      { from: "caller", text: "I want to know if you do solar panels for a factory roof." },
      { from: "agent", text: "We do. Roughly what does the site pay for electricity each month?" },
      { from: "caller", text: "About 4,000 rials in summer. The roof is around 3,000 square metres, in Sohar industrial." },
      { from: "agent", text: "And when would the board want this running?" },
      { from: "caller", text: "Before next summer. We need a proposal to take to them in Ramadan." },
    ],
    lead: {
      ref: "LD-2291",
      stage: "Qualified",
      score: "Hot",
      owner: "Maryam",
      initials: "MA",
      fields: [
        { k: "Interest", v: "Rooftop solar, industrial", from: "call" },
        { k: "Roof area", v: "≈3,000 m²", from: "call" },
        { k: "Monthly bill", v: "OMR 4,000 in summer", from: "call" },
        { k: "Decision by", v: "Board paper due Ramadan", from: "call" },
        { k: "Caller", v: "Facilities manager", from: "call" },
        { k: "Company", v: "Matched from caller ID", from: "enriched" },
        { k: "Site", v: "Sohar Industrial Estate", from: "enriched" },
        { k: "History", v: "No prior contact", from: "enriched" },
        { k: "Source", v: "Main line, 11:42", from: "enriched" },
        { k: "Language", v: "English", from: "enriched" },
      ],
    },
  },
  {
    tab: "Hospitality",
    tag: "Salalah hotel refit",
    icon: Building2,
    convo: [
      { from: "caller", text: "Do you supply blackout curtains for hotels?" },
      { from: "agent", text: "Yes. How many rooms are we talking about?" },
      { from: "caller", text: "Forty two rooms, and we need them fitted before khareef season starts." },
      { from: "agent", text: "Have you a budget in mind for the whole job?" },
      { from: "caller", text: "Around 6,000 rials. We ordered from you for the lobby two years ago." },
    ],
    lead: {
      ref: "LD-2292",
      stage: "Qualified",
      score: "Hot",
      owner: "Yusuf",
      initials: "YU",
      fields: [
        { k: "Interest", v: "Blackout curtains, 42 rooms", from: "call" },
        { k: "Budget", v: "≈OMR 6,000", from: "call" },
        { k: "Deadline", v: "Before khareef", from: "call" },
        { k: "Fitting", v: "Supply and install", from: "call" },
        { k: "Account", v: "Existing customer", from: "enriched" },
        { k: "Last order", v: "Lobby drapes, 2 years ago", from: "enriched" },
        { k: "Payment record", v: "Settled on terms", from: "enriched" },
        { k: "Branch", v: "Salalah", from: "enriched" },
        { k: "Source", v: "WhatsApp, 20:10", from: "enriched" },
        { k: "Language", v: "Omani Arabic", from: "enriched" },
      ],
    },
  },
  {
    tab: "Facilities",
    tag: "Three-building contract",
    icon: Wrench,
    convo: [
      { from: "caller", text: "We are unhappy with our current AC maintenance company." },
      { from: "agent", text: "Sorry to hear it. How many buildings do you manage?" },
      { from: "caller", text: "Three towers in Al Khuwair, about ninety split units in total." },
      { from: "agent", text: "Is your present contract running until a fixed date?" },
      { from: "caller", text: "It ends in two months, so we are looking now." },
    ],
    lead: {
      ref: "LD-2293",
      stage: "Assigned",
      score: "Warm",
      owner: "Nadia",
      initials: "NA",
      fields: [
        { k: "Interest", v: "Annual AC maintenance contract", from: "call" },
        { k: "Scale", v: "3 towers, ≈90 split units", from: "call" },
        { k: "Trigger", v: "Unhappy with incumbent", from: "call" },
        { k: "Window", v: "Contract expires in 2 months", from: "call" },
        { k: "Caller", v: "Property manager", from: "call" },
        { k: "Portfolio", v: "Al Khuwair, mixed use", from: "enriched" },
        { k: "History", v: "Quoted 2024, lost on price", from: "enriched" },
        { k: "Competitor", v: "Incumbent noted on file", from: "enriched" },
        { k: "Source", v: "Main line, 08:55", from: "enriched" },
        { k: "Language", v: "English", from: "enriched" },
      ],
    },
  },
];

export default function LeadEnrichment() {
  const [active, setActive] = useState(0);
  const e = enquiries[active];

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Pick an enquiry</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl md:text-5xl">
          What the caller said,{" "}
          <span className="accent-italic">and what the record ends up holding</span>.
        </h2>

        {/* enquiry tabs */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {enquiries.map((q, i) => (
            <button
              key={q.tab}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`flex flex-col items-center gap-1 border px-4 py-4 text-center transition-colors ${
                i === active
                  ? "border-lime bg-lime text-ink"
                  : "border-line-strong bg-ink-2 text-muted-foreground hover:bg-ink-3"
              }`}
            >
              <q.icon className="h-4 w-4" aria-hidden />
              <span className="text-sm font-semibold">{q.tab}</span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                  i === active ? "text-ink/70" : "text-muted-foreground/70"
                }`}
              >
                {q.tag}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1fr]">
          {/* conversation */}
          <div className="overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <div className="flex items-center gap-2 border-b border-black/10 px-4 py-2.5">
              <MessageSquare className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
              <span className="text-xs font-semibold text-neutral-700">The enquiry call</span>
            </div>
            <div className="space-y-3 p-5">
              {e.convo.map((m, i) =>
                m.from === "agent" ? (
                  <p
                    key={i}
                    className="w-fit max-w-[88%] rounded-xl rounded-bl-sm border border-black/10 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700"
                  >
                    {m.text}
                  </p>
                ) : (
                  <p
                    key={i}
                    className="ml-auto w-fit max-w-[88%] rounded-xl rounded-br-sm bg-lime px-4 py-2.5 text-sm font-medium text-ink"
                  >
                    {m.text}
                  </p>
                )
              )}
            </div>
          </div>

          {/* lead record */}
          <div className="flex flex-col overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="font-mono text-xs text-neutral-500">{e.lead.ref}</span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-semibold text-lime">
                  {e.lead.stage}
                </span>
                <span className="rounded-full bg-lime/30 px-2.5 py-1 text-[10px] font-semibold text-neutral-800">
                  {e.lead.score}
                </span>
              </span>
            </div>
            <div className="flex-1 px-5 py-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[8px] font-bold text-lime">
                  {e.lead.initials}
                </span>
                Owned by {e.lead.owner}, end to end
              </p>
              <dl className="mt-4 divide-y divide-black/5">
                {e.lead.fields.map((f) => (
                  <div key={f.k} className="flex items-center justify-between gap-4 py-2">
                    <dt className="flex items-center gap-2 text-xs text-neutral-400">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          f.from === "call" ? "bg-neutral-300" : "bg-lime"
                        }`}
                        aria-hidden
                      />
                      {f.k}
                    </dt>
                    <dd className="text-right text-sm font-medium text-neutral-800">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-black/10 pt-3 text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" aria-hidden />
                  Heard on the call
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
                  Attached from your records
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
