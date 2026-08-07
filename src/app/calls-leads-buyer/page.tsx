import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Call & Lead Terms (Buyer)",
  description: "Terms applying to buyers of qualified calls and leads via AI Customer Care.",
};

export default function CallsLeadsBuyerPage() {
  return (
    <LegalPage
      title="Call & Lead Terms, Buyer"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Scope",
          p: [
            "These terms apply when you purchase qualified calls or leads generated through AI Customer Care (for example, warm transfers from an AI agent to your sales line). They supplement the Terms of Service.",
          ],
        },
        {
          h: "2. Qualification and billing",
          p: [
            "A call or lead is billable when it meets the qualification criteria stated in your order (such as minimum duration, expressed intent, or completed data fields). Billable events are logged with timestamps and recordings you can audit from the dashboard. Fees are in OMR and invoiced monthly.",
          ],
        },
        {
          h: "3. Disputes and credits",
          p: [
            "You may dispute a billed call or lead within 14 days of invoice with reasonable detail. Valid disputes (wrong number, no intent, duplicate within 30 days) are credited on the next invoice.",
          ],
        },
        {
          h: "4. Your obligations",
          p: [
            "You must contact leads only for the purpose they consented to, comply with Oman's Personal Data Protection Law and any applicable destination-country rules, and honour opt-out requests promptly. Leads may not be resold or shared outside your organisation.",
          ],
        },
        {
          h: "5. Data protection",
          p: [
            "Lead data is personal data. You become an independent controller on delivery and must protect it accordingly; call data remains hosted inside Oman while on AI Customer Care systems.",
          ],
        },
      ]}
    />
  );
}
