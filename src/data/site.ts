export const site = {
  name: "VoxCare",
  domain: "voxcare.om",
  url: "https://voxcare.om",
  tagline: "AI customer service, built for Oman",
  description:
    "VoxCare's Customer Service Voice AI Agents handle customer queries in Omani Arabic, Gulf Arabic, English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, and Tamil. Ready out of the box, hosted entirely inside the Sultanate, and compliant with Oman's Personal Data Protection Law 2023.",
  languages: [
    "Omani Arabic",
    "Gulf Arabic",
    "English",
    "Standard Arabic",
    "Swahili",
    "Hindi",
    "Bengali",
    "Malayalam",
    "Tamil",
  ],
  appUrl: "https://app.voxcare.om",
  docsUrl: "https://docs.voxcare.om",
  email: "salaam@voxcare.om",
  phone: "+968 24 000 000",
  address: "Knowledge Oasis Muscat, Al Rusayl, Muscat, Sultanate of Oman",
};

export type NavChild = { label: string; desc?: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  {
    label: "Products",
    children: [
      {
        label: "Omani Arabic AI Customer Care",
        desc: "Customer Service Voice AI Agents for Oman",
        href: "/products/omani-arabic-ai-customer-care/",
      },
      {
        label: "AI Chatbot for Websites",
        desc: "Oman's own sovereign chatbot for web, WhatsApp, and email",
        href: "/products/ai-chatbot-for-websites/",
      },
      {
        label: "AI Email Agent",
        desc: "Your inbox organised, your replies drafted",
        href: "/products/ai-email-agent/",
      },
      {
        label: "Outbound Calling AI Agents",
        desc: "From CRM trigger to connected conversation",
        href: "/products/outbound-calling-ai-agents/",
      },
      {
        label: "Automated Support Tickets",
        desc: "Tickets created and routed from every channel",
        href: "/products/automated-support-tickets/",
      },
      {
        label: "Dashboard & Reporting",
        desc: "Real-time reporting on queries, calls, and revenue",
        href: "/products/dashboard-reporting/",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Comparison", desc: "Exploring alternatives to VoxCare?", href: "/comparison/" },
      { label: "Oman AI Calling Guide", desc: "The rules for AI customer contact in Oman", href: "/guideline/oman/" },
      { label: "Integrations", desc: "Connect the tools you already use", href: "/integration/" },
      { label: "Templates", desc: "Ready-made AI agent templates", href: "/template/" },
      { label: "Features", desc: "Explore VoxCare's features", href: "/features/" },
      { label: "Developers", desc: "APIs and webhooks for your stack", href: "/developer/" },
      { label: "Help Center", desc: "Get help for any platform issue", href: "https://docs.voxcare.om" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", desc: "Learn about VoxCare", href: "/about/" },
      { label: "Contact us", desc: "Use our form to connect with us", href: "/contact/" },
      { label: "Careers", desc: "Join the VoxCare team in Muscat", href: "/careers/" },
      { label: "Brand Kit", desc: "Logos and brand assets", href: "/brand-kit/" },
    ],
  },
  { label: "Industries", href: "/industries/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Enterprise", href: "/enterprise/" },
];

export const footerNav: { title: string; links: NavChild[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Omani Arabic AI Customer Care", href: "/products/omani-arabic-ai-customer-care/" },
      { label: "AI Chatbot for Websites", href: "/products/ai-chatbot-for-websites/" },
      { label: "AI Email Agent", href: "/products/ai-email-agent/" },
      { label: "Outbound Calling AI Agents", href: "/products/outbound-calling-ai-agents/" },
      { label: "Automated Support Tickets", href: "/products/automated-support-tickets/" },
      { label: "Dashboard & Reporting", href: "/products/dashboard-reporting/" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features/" },
      { label: "Integrations", href: "/integration/" },
      { label: "Templates", href: "/template/" },
      { label: "Developers", href: "/developer/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Enterprise", href: "/enterprise/" },
      { label: "Book a Demo", href: "/book-a-demo/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.voxcare.om" },
      { label: "Help Center", href: "https://docs.voxcare.om" },
      { label: "Oman AI Calling Guide", href: "/guideline/oman/" },
      { label: "Comparison", href: "/comparison/" },
      { label: "Industries", href: "/industries/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact", href: "/contact/" },
      { label: "Brand Kit", href: "/brand-kit/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Acceptable Use Policy", href: "/acceptable-use-policy/" },
      { label: "General Terms", href: "/general-terms/" },
      { label: "Call & lead T&C's (buyer)", href: "/calls-leads-buyer/" },
      { label: "Call & lead T&C's (mutual)", href: "/calls-leads-mutual/" },
      { label: "Call & lead T&C's (seller)", href: "/calls-leads-seller/" },
    ],
  },
];
