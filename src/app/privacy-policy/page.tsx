import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VoxCare collects, uses, and protects personal data under Oman's Personal Data Protection Law.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 July 2026"
      sections={[
        {
          h: "1. Who we are",
          p: [
            "VoxCare Technologies LLC (\"VoxCare\", \"we\") is a company registered in the Sultanate of Oman with its office at Knowledge Oasis Muscat, Al Rusayl. We operate the voxcare.om website and the VoxCare AI customer-service platform. For the purposes of Oman's Personal Data Protection Law (Royal Decree 6/2022, the \"Personal Data Protection Law\"), VoxCare acts as a controller for data about our own customers and website visitors, and as a processor for personal data contained in calls our customers ask us to handle.",
          ],
        },
        {
          h: "2. Data we collect",
          p: ["We collect the following categories of personal data:"],
          bullets: [
            "Account data: name, work email, company, and billing details when you register.",
            "Call data: audio recordings, transcripts, and caller phone numbers processed on behalf of our customers.",
            "Usage data: dashboard activity, feature usage, and device information used to secure and improve the service.",
            "Support data: messages you send to our team.",
          ],
        },
        {
          h: "3. Where your data lives",
          p: [
            "All personal data processed by the VoxCare platform is stored on infrastructure located inside the Sultanate of Oman. We do not transfer customer call data outside Oman for any purpose, including model training, analytics, or support. Where the Personal Data Protection Law requires permits or safeguards for any cross-border transfer, we simply avoid the transfer altogether.",
          ],
        },
        {
          h: "4. Legal bases and purposes",
          p: [
            "We process personal data to perform our contracts, to comply with Omani law, with your consent where the Personal Data Protection Law requires it (for example, call recording disclosures), and for legitimate operational purposes such as fraud prevention and service security. AI callers identify themselves as automated assistants at the start of each call.",
          ],
        },
        {
          h: "5. Your rights",
          p: [
            "Under the Personal Data Protection Law you may request access to, correction of, transfer of, or erasure of your personal data, and you may withdraw consent at any time. Write to salaam@voxcare.om and we will respond within the timelines set by the law. You may also lodge a complaint with the Ministry of Transport, Communications and Information Technology, the Personal Data Protection Law's supervisory authority.",
          ],
        },
        {
          h: "6. Retention and security",
          p: [
            "Call recordings and transcripts are retained according to the schedule set by each customer, and deleted on request. We apply encryption in transit and at rest, role-based access controls, and audit logging. Our security programme is reviewed by independent assessors annually.",
          ],
        },
        {
          h: "7. Changes and contact",
          p: [
            "We will post any changes to this policy on this page and, for material changes, notify account holders by email. Questions? Contact our data protection officer at salaam@voxcare.om.",
          ],
        },
      ]}
    />
  );
}
