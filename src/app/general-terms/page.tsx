import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "General Terms",
  description: "AI Customer Care's general commercial terms for orders and service schedules.",
};

export default function GeneralTermsPage() {
  return (
    <LegalPage
      title="General Terms"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Structure",
          p: [
            "These General Terms apply to every order form, service schedule, or statement of work executed with AI Customer Care Technologies LLC. If a signed order conflicts with these terms, the order prevails for that engagement. The current version is v2.0; the prior version remains available at /general-terms-v1-0/.",
          ],
        },
        {
          h: "2. Orders and delivery",
          p: [
            "Services begin on the start date in the order. Minutes, seats, and numbers are as stated in the order; overage is billed monthly in arrears at the order's rates in OMR.",
          ],
        },
        {
          h: "3. Service levels",
          p: [
            "Platform availability commitments and support response times are set out in the applicable service schedule. Service credits are the exclusive remedy for missed availability targets.",
          ],
        },
        {
          h: "4. Confidentiality and data",
          p: [
            "Each party protects the other's confidential information with at least reasonable care. Personal data is handled under our Personal Data Protection Law compliant data-processing agreement; all customer call data remains within the Sultanate of Oman.",
          ],
        },
        {
          h: "5. General",
          p: [
            "Neither party may assign without consent except to an affiliate or in a merger. Notices go to the addresses in the order. These terms are governed by the laws of the Sultanate of Oman; the courts of Muscat have exclusive jurisdiction.",
          ],
        },
      ]}
    />
  );
}
