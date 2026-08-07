import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { PageHero, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Comparison",
  description:
    "Exploring alternatives to AI Customer Care? See how Oman's AI customer-service platform stacks up against global voice AI vendors.",
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
        title="Exploring alternatives to AI Customer Care? Here's how it stacks up."
        sub="Global voice AI platforms are built for English-first, US-hosted deployments. AI Customer Care is built for Oman. Compare for yourself."
      />
      <section className="pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Comparison table</h2>
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
