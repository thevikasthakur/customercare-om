"use client";

import { useState } from "react";

type CaseStudy = {
  tab: string;
  sector: string;
  quote: string;
  emphasis: string;
  role: string;
  org: string;
  metrics: { value: string; label: string }[];
};

const studies: CaseStudy[] = [
  {
    tab: "Call Centres",
    sector: "Business process outsourcing · Muscat",
    quote:
      "We benchmarked every voice AI we could get our hands on. Across Omani Arabic comprehension, live CRM writes, and reporting, ",
    emphasis: "nothing else handled our call mix at this cost.",
    role: "Service Delivery Director",
    org: "Gulf BPO group",
    metrics: [
      { value: "68%", label: "Cost reduction" },
      { value: "Unlimited", label: "Call concurrency" },
      { value: "31%", label: "Higher first-call resolution" },
    ],
  },
  {
    tab: "Healthcare",
    sector: "Private clinic network · Muscat & Sohar",
    quote:
      "Patients call in Arabic, Malayalam, and English, often anxious, always urgent. ",
    emphasis:
      "Every call is answered in seconds, triaged correctly, and documented under Personal Data Protection Law.",
    role: "Head of Patient Services",
    org: "Clinic network, Muscat & Sohar",
    metrics: [
      { value: "100%", label: "Personal Data Protection Law compliant, data in Oman" },
      { value: "0s", label: "Hold time" },
      { value: "90K+", label: "Appointments booked" },
    ],
  },
  {
    tab: "Retail & SMBs",
    sector: "E-commerce & neighbourhood retail",
    quote:
      "Small shops here cannot afford a missed call, that is the whole sale gone. ",
    emphasis:
      "Since VoxCare, our merchant partners capture every lead, even at 2am during Ramadan.",
    role: "VP of Partnerships",
    org: "Omani commerce platform",
    metrics: [
      { value: "100%", label: "Calls answered" },
      { value: "3x", label: "Lead capture rate" },
      { value: "24/7", label: "Coverage, 365 days" },
    ],
  },
  {
    tab: "Insurance",
    sector: "Motor & health insurance · national",
    quote:
      "Claims intake used to mean queues and call-backs. Now the first notice of loss is captured conversationally, ",
    emphasis: "in the caller's own language, before an adjuster ever picks up.",
    role: "Chief Operating Officer",
    org: "National insurer",
    metrics: [
      { value: "45s", label: "Average claim intake" },
      { value: "9", label: "Languages served" },
      { value: "52%", label: "Lower cost per call" },
    ],
  },
];

export default function CaseStudyTabs() {
  const [active, setActive] = useState(0);
  const s = studies[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {studies.map((st, i) => (
          <button
            key={st.tab}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 text-sm border transition-colors ${
              i === active
                ? "bg-lime text-ink border-lime font-medium"
                : "border-line-strong text-muted-foreground hover:bg-ink-3"
            }`}
            aria-pressed={i === active}
          >
            {st.tab}
          </button>
        ))}
      </div>

      <div
        className="mt-4 border border-line-strong p-8 md:p-12"
        style={{
          backgroundImage:
            "radial-gradient(70% 50% at 50% 112%, rgba(212,255,79,0.5) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #161C03 0%, #2A3506 45%, #55690C 80%, #93B41A 100%)",
        }}
      >
        <p className="eyebrow">{s.sector}</p>
        <blockquote className="mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed text-white/85 italic">
          &ldquo;{s.quote}
          <strong className="not-italic font-semibold text-white">{s.emphasis}</strong>
          &rdquo;
        </blockquote>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-white/70">
          {s.role} · {s.org}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {s.metrics.map((m) => (
            <div key={m.label} className="bg-white/95 px-6 py-7 rounded-[1.25rem] border border-black/10">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                {m.value}
              </p>
              <p className="mt-1.5 text-sm text-neutral-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
