import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "What you may and may not do with AI Customer Care.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Purpose",
          p: [
            "This policy protects callers, customers, and the telephone network from misuse of AI calling technology. It applies to everyone who uses AI Customer Care and is part of our Terms of Service.",
          ],
        },
        {
          h: "2. Prohibited uses",
          p: ["You must not use AI Customer Care to:"],
          bullets: [
            "Make calls that conceal or misrepresent that the caller is an automated assistant when disclosure is required.",
            "Spoof caller ID, impersonate people or institutions, or clone a voice without the documented consent of its owner.",
            "Send unsolicited marketing calls in violation of the laws of the destination country or telecom regulations of Oman.",
            "Harass, threaten, or defraud any person, or collect personal data unlawfully.",
            "Call emergency services, or conduct campaigns that could congest public networks.",
            "Attempt to breach, probe, or overload our infrastructure or that of any third party.",
          ],
        },
        {
          h: "3. Regulated industries",
          p: [
            "Healthcare, financial services, and government customers must ensure call flows meet their sector rules (for example Ministry of Health patient-privacy requirements and Central Bank of Oman customer-communication rules). We are happy to review flows with your compliance team before launch.",
          ],
        },
        {
          h: "4. Enforcement",
          p: [
            "We may suspend or terminate accounts that violate this policy, immediately in serious cases. Where the law requires, we cooperate with the Telecommunications Regulatory Authority and other Omani authorities. Report suspected abuse to salaam@customercare.om.",
          ],
        },
      ]}
    />
  );
}
