import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The agreement governing use of the VoxCare platform.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Agreement",
          p: [
            "These Terms of Service form a binding agreement between VoxCare Technologies LLC and the customer identified at sign-up. By creating an account or using the platform you accept these terms. If you are acting for a company, you confirm you have authority to bind it.",
          ],
        },
        {
          h: "2. The service",
          p: [
            "VoxCare provides AI-powered voice agents that answer, place, and process telephone calls, together with dashboards, integrations, and APIs. We may improve or modify features, provided we do not materially reduce the core functionality you have paid for during a subscription term.",
          ],
        },
        {
          h: "3. Your responsibilities",
          p: ["You agree to:"],
          bullets: [
            "Use the service in compliance with Omani law, including the Personal Data Protection Law and telecommunications regulations, and the laws of any country you call into.",
            "Provide any legally required notices and obtain any required consents from your callers, including call-recording disclosures.",
            "Not use the service for spam, harassment, deception about the identity of the caller, or any unlawful purpose.",
            "Keep account credentials secure and notify us of any suspected compromise.",
          ],
        },
        {
          h: "4. Fees",
          p: [
            "Fees are stated in Omani Rial (OMR), exclusive of VAT, and billed monthly or annually in advance, with usage-based minutes billed in arrears. Late amounts may bear a charge permitted by law. You may cancel at any time; paid periods are not refunded except where the law requires.",
          ],
        },
        {
          h: "5. Data",
          p: [
            "As between the parties, you own your call data. We process it only to provide the service, under our Privacy Policy and a Personal Data Protection Law compliant data-processing agreement. All customer call data is stored inside the Sultanate of Oman.",
          ],
        },
        {
          h: "6. Warranties and liability",
          p: [
            "The service is provided with reasonable skill and care. Except as stated, the service is provided \"as is\", and our total liability in any twelve-month period is limited to the fees you paid in that period. Neither party is liable for indirect or consequential loss. Nothing limits liability that cannot be limited under Omani law.",
          ],
        },
        {
          h: "7. Term and termination",
          p: [
            "Either party may terminate for material breach not cured within 30 days of notice. On termination we will make your data available for export for 30 days, then delete it.",
          ],
        },
        {
          h: "8. Governing law",
          p: [
            "These terms are governed by the laws of the Sultanate of Oman, and the courts of Muscat have exclusive jurisdiction.",
          ],
        },
      ]}
    />
  );
}
