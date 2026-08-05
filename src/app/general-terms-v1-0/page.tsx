import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "General Terms v1.0 (Archived)",
  description: "Archived version 1.0 of VoxCare's general commercial terms.",
  robots: { index: false },
};

export default function GeneralTermsV1Page() {
  return (
    <LegalPage
      title="General Terms, v1.0 (archived)"
      updated="Superseded on 1 July 2026"
      sections={[
        {
          p: [
            "This is the archived first version of VoxCare's General Terms, retained for customers whose orders reference v1.0. New orders are governed by the current General Terms at /general-terms/.",
          ],
        },
        {
          h: "1. Orders",
          p: [
            "Services begin on the start date stated in the order form. Quantities and rates are as stated in the order, billed in OMR.",
          ],
        },
        {
          h: "2. Data",
          p: [
            "Personal data is processed under the Privacy Policy and Oman's Personal Data Protection Law. Customer call data is stored within the Sultanate of Oman.",
          ],
        },
        {
          h: "3. Liability",
          p: [
            "Aggregate liability in any twelve-month period is limited to fees paid in that period; indirect loss is excluded to the extent permitted by Omani law.",
          ],
        },
        {
          h: "4. Governing law",
          p: [
            "The laws of the Sultanate of Oman govern; the courts of Muscat have exclusive jurisdiction.",
          ],
        },
      ]}
    />
  );
}
