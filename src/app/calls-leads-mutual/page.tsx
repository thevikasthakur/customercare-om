import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Call & Lead Terms (Mutual)",
  description: "Mutual terms for partners who both buy and sell calls and leads via AI Customer Care.",
};

export default function CallsLeadsMutualPage() {
  return (
    <LegalPage
      title="Call & Lead Terms, Mutual"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Scope",
          p: [
            "These mutual terms apply to partners who both supply calls or leads to, and purchase calls or leads from, AI Customer Care. The Buyer terms govern traffic you receive and the Seller terms govern traffic you supply; this document resolves how they interact.",
          ],
        },
        {
          h: "2. Netting and settlement",
          p: [
            "Amounts payable in each direction are netted monthly, with a single OMR settlement and a statement itemising billable events, disputes, and credits in both directions.",
          ],
        },
        {
          h: "3. Disputes",
          p: [
            "Dispute windows and criteria mirror the Buyer terms in both directions. Where the same event is disputed in both directions, it is resolved once, with the outcome applied symmetrically.",
          ],
        },
        {
          h: "4. Data and compliance",
          p: [
            "Each party is an independent controller for personal data it receives and warrants Personal Data Protection Law compliant origination for traffic it supplies. Call data remains hosted inside Oman while on AI Customer Care systems.",
          ],
        },
      ]}
    />
  );
}
