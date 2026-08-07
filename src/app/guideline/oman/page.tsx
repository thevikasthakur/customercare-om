import type { Metadata } from "next";
import Link from "next/link";
import { Check, FileCheck2, Landmark, Lock, PhoneCall, ShieldCheck } from "lucide-react";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Calling and Customer Contact Rules in Oman",
  description:
    "A practical guide to Oman's Personal Data Protection Law, telecom marketing rules, and the etiquette of AI customer contact in the Sultanate. General guidance, not legal advice.",
};

const glance = [
  { icon: Landmark, label: "Royal Decree 6/2022, in force Feb 2023" },
  { icon: FileCheck2, label: "Executive Regulations, MD 34/2024" },
  { icon: ShieldCheck, label: "Regulator: MTCIT" },
  { icon: Lock, label: "Consent-centric processing" },
];

const sections = [
  {
    h: "The Personal Data Protection Law at a glance",
    p: [
      "Oman's Personal Data Protection Law was issued by Royal Decree 6/2022 in February 2022 and entered into force on 13 February 2023, replacing the older data provisions of the Electronic Transactions Law. It is supervised by the Ministry of Transport, Communications and Information Technology (MTCIT), which issued the law's Executive Regulations by Ministerial Decision 34/2024 with a transition period for existing controllers to bring their processing into line.",
      "The law is consent-centric: as a general rule, personal data may be processed only with the express consent of the data subject, unless another lawful basis in the law applies. Consent must be informed, and controllers must be able to show when and how it was given.",
    ],
  },
  {
    h: "What counts as personal data on a call",
    p: [
      "A recorded phone conversation is personal data: the caller's voice, phone number, name, and anything they disclose during the conversation. Transcripts, sentiment scores, and CRM notes derived from the call are personal data too. If your AI answers calls, you are processing personal data from the first second, which is why disclosure and consent belong at the very start of the call flow.",
    ],
    bullets: [
      "Voice recordings and their transcripts",
      "Caller line identity and contact details",
      "Details disclosed in conversation: orders, addresses, complaints",
      "Derived data: sentiment, intent, categorisation",
    ],
  },
  {
    h: "Sensitive data needs a permit",
    p: [
      "Processing of sensitive categories, such as health data, genetic and biometric data, and data about criminal convictions, requires a permit from the ministry under the law. This matters for clinics, insurers, and any AI flow that captures medical details: design the conversation so sensitive data is collected only where genuinely needed, and make sure your processing is covered before launch.",
    ],
  },
  {
    h: "Data subject rights your flows must honour",
    p: [
      "Callers in Oman hold enforceable rights over their data. Your AI contact flows, and the systems behind them, should be able to act on a request without drama.",
    ],
    bullets: [
      "Access: a copy of the personal data you hold about them",
      "Correction: fixing inaccurate or outdated records",
      "Erasure: deletion when processing is no longer justified",
      "Transfer: receiving their data in a usable form",
      "Withdrawal: revoking consent as easily as it was given",
    ],
  },
  {
    h: "Breaches, transfers, and penalties",
    p: [
      "Controllers must notify the ministry, and in qualifying cases the affected individuals, of personal data breaches within the timeframes set by the Executive Regulations. Transfers of personal data outside Oman are permitted only under the law's conditions, which is why keeping processing inside the Sultanate is the simplest compliant architecture: no transfer, no transfer problem.",
      "Violations carry administrative fines that can reach into the hundreds of thousands of rials, alongside possible criminal liability for the most serious offences. The cost of designing compliance in from day one is trivial by comparison.",
    ],
  },
  {
    h: "Telemarketing and outbound AI calls",
    p: [
      "Outbound customer contact in Oman sits under more than one instrument: the Personal Data Protection Law for the data itself, telecommunications regulation for how you use the network, and consumer protection law for honest dealing. Unsolicited marketing messages are regulated, and the safe pattern for AI campaigns is permission-based contact with clean records.",
    ],
    bullets: [
      "Call people who have a relationship with you or gave consent",
      "Say plainly, at the start, that an AI assistant is calling and why",
      "Offer an easy opt-out and honour it permanently",
      "Keep consent and contact logs you can produce on request",
      "Avoid prayer times, late evenings, and Ramadan daytime fasts",
    ],
  },
  {
    h: "The etiquette layer: how Oman expects to be called",
    p: [
      "Beyond the statutes, Omani business culture has its own rules. Greetings matter, and an abrupt robotic opener costs goodwill that a polite salaam preserves. Calls land best between mid-morning and early evening, never during Friday prayers, and campaign pacing should respect Ramadan and Eid schedules. An AI agent that follows these norms in Omani Arabic does not just comply, it represents your brand well.",
    ],
  },
  {
    h: "How AI Customer Care implements all of this",
    p: [
      "AI Customer Care was built in Oman, for these rules. Disclosure lines open every AI conversation, consent capture is logged with timestamps, opt-outs propagate across every channel instantly, and calling windows enforce Omani hours including seasonal schedules. All recordings, transcripts, and customer records are processed and stored on infrastructure inside the Sultanate, so cross-border transfer questions simply never arise.",
    ],
  },
];

export default function OmanGuidePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Oman AI Calling Guide</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            The rules for AI customer contact{" "}
            <span className="accent-italic">in Oman</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            What the Personal Data Protection Law, telecom rules, and Omani
            etiquette mean for AI phone, WhatsApp, and email contact. Written
            from Muscat, kept current, and offered as general guidance rather
            than legal advice: confirm specifics with qualified Omani counsel.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {glance.map((g) => (
              <span
                key={g.label}
                className="inline-flex items-center gap-2.5 border border-line-strong bg-ink-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.08em] text-muted-foreground"
              >
                <g.icon className="h-4 w-4 shrink-0 text-lime" aria-hidden />
                {g.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide body ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-14 gap-y-12 lg:grid-cols-2">
            {sections.map((s) => (
              <div key={s.h} className="border-t border-line-strong pt-6">
                <h2 className="text-xl md:text-2xl font-semibold">{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance CTA ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Want your call flows reviewed against{" "}
                <span className="accent-italic">these rules</span>?
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                Bring your data protection officer to a demo. We will walk
                through disclosure wording, consent records, retention, and
                residency, on your actual use case.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/book-a-demo/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden /> Book a Demo
              </Link>
              <Link
                href="/enterprise/"
                className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Enterprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
