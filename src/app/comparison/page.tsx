import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Comparison",
  description:
    "Weighing AI Customer Care against a global voice AI vendor? Here is where an Oman-hosted, Omani Arabic customer care service differs, in plain terms.",
};

const tableRows = [
  { cap: "Omani Arabic & Gulf dialects", vox: true },
  { cap: "Data hosted inside Oman", vox: true },
  { cap: "Oman Personal Data Protection Law compliance built in", vox: true },
  { cap: "9 languages incl. Swahili, Hindi, Malayalam, Tamil", vox: true },
  { cap: "Sub-second response latency", vox: true },
  { cap: "Pricing in OMR with local billing", vox: true },
  { cap: "Local support team in Muscat", vox: true },
];

export default function ComparisonPage() {
  return (
    <>
      <PageHero
        badge="Comparison"
        title="Comparing us with a global vendor? Read this first."
        sub="Most voice AI is designed English-first and hosted abroad, then localised later. We started from Omani callers, Omani Arabic and Omani data residency. Here is what that changes in practice."
      />
      <section className="pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Where the difference actually shows</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="px-4 py-3 font-semibold">Capability</th>
                  <th className="px-4 py-3 font-semibold">AI Customer Care</th>
                  <th className="px-4 py-3 font-semibold">Typical global vendor</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((r) => (
                  <tr key={r.cap} className="border-b last:border-0">
                    <td className="px-4 py-3">{r.cap}</td>
                    <td className="px-4 py-3">
                      <Check className="h-5 w-5 text-primary" aria-label="Included" />
                    </td>
                    <td className="px-4 py-3">
                      <Minus className="h-5 w-5 text-muted-foreground" aria-label="Varies or unavailable" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
