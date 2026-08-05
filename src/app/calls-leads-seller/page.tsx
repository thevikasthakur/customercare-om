import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Call & Lead Terms (Seller)",
  description: "Terms applying to partners who supply calls and leads through VoxCare.",
};

export default function CallsLeadsSellerPage() {
  return (
    <LegalPage
      title="Call & Lead Terms, Seller"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Scope",
          p: [
            "These terms apply when you supply calls or leads into VoxCare's platform for routing to buyers. They supplement the Terms of Service.",
          ],
        },
        {
          h: "2. Origination standards",
          p: ["All supplied traffic must meet these standards:"],
          bullets: [
            "Consent: every lead consented to be contacted for the stated purpose, with records retained and produced on request.",
            "Disclosure: automated calls identify themselves as such where required by law.",
            "Accuracy: contact details are current and belong to the person described.",
            "No incentivised or fabricated traffic, and no traffic purchased from undisclosed third parties.",
          ],
        },
        {
          h: "3. Payment",
          p: [
            "We pay for accepted, qualified events at the rates in your order, monthly in arrears in OMR, net of credited disputes. Systematic quality failures may result in clawback and suspension.",
          ],
        },
        {
          h: "4. Compliance",
          p: [
            "You warrant compliance with Oman's Personal Data Protection Law, telecommunications regulations, and the laws of each jurisdiction where leads are collected. You indemnify VoxCare against claims arising from your origination practices.",
          ],
        },
      ]}
    />
  );
}
