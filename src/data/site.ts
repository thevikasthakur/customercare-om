export const site = {
  name: "AI Customer Care",
  domain: "customercare.om",
  url: "https://customercare.om",
  tagline: "AI customer service, built for Oman",
  description:
    "AI Customer Care handles customer queries in Omani Arabic, Gulf Arabic, English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, and Tamil. Customer Service Voice AI Agents that are ready out of the box, hosted entirely inside the Sultanate, and compliant with Oman's Personal Data Protection Law 2023.",
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
  email: "contact@customercare.om",
  phone: "+968 9730 2812",
  address: "1st Floor, Al Muzn Mall, Al Hail North, Muscat, Sultanate of Oman",
};

export type NavChild = { label: string; desc?: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  {
    label: "Product",
    children: [
      {
        label: "Omani Arabic AI Customer Care",
        desc: "Customer Service Voice AI Agents for Oman",
        href: "/product/omani-arabic-ai-customer-care/",
      },
      {
        label: "AI Chatbot for Websites",
        desc: "Oman's own sovereign chatbot for web, WhatsApp, and email",
        href: "/product/ai-chatbot-for-websites/",
      },
      {
        label: "AI Email Agent",
        desc: "Your inbox organised, your replies drafted",
        href: "/product/ai-email-agent/",
      },
      {
        label: "Outbound Calling AI Agents",
        desc: "Reminders and follow-ups your CRM starts for you",
        href: "/product/outbound-calling-ai-agents/",
      },
      {
        label: "Automated Support Tickets",
        desc: "Tickets created and routed from every channel",
        href: "/product/automated-support-tickets/",
      },
      {
        label: "Smart Follow-Ups",
        desc: "Staff chased, customers told where their issue stands",
        href: "/product/smart-follow-ups/",
      },
      {
        label: "Automated Lead Pipeline",
        desc: "Enquiry calls turned into enriched, owned leads",
        href: "/product/automated-lead-pipeline/",
      },
      {
        label: "Dashboard & Reporting",
        desc: "Real-time reporting on queries, calls, and revenue",
        href: "/product/dashboard-reporting/",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Comparison", desc: "Exploring alternatives to AI Customer Care?", href: "/comparison/" },
      { label: "Oman AI Calling Guide", desc: "The rules for AI customer contact in Oman", href: "/guideline/oman/" },
      { label: "Integrations", desc: "Connect the tools you already use", href: "/integration/" },
      { label: "Templates", desc: "Ready-made AI agent templates", href: "/template/" },
      { label: "Features", desc: "Explore AI Customer Care's features", href: "/features/" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", desc: "Learn about AI Customer Care", href: "/about/" },
      { label: "Contact us", desc: "Talk to the founder directly", href: "/contact/" },
    ],
  },
  { label: "Industries", href: "/industries/" },
  { label: "Enterprise", href: "/enterprise/" },
];

export const footerNav: { title: string; wide?: boolean; links: NavChild[] }[] = [
  {
    title: "Product",
    wide: true,
    links: [
      { label: "Omani Arabic AI Customer Care", href: "/product/omani-arabic-ai-customer-care/" },
      { label: "AI Chatbot for Websites", href: "/product/ai-chatbot-for-websites/" },
      { label: "AI Email Agent", href: "/product/ai-email-agent/" },
      { label: "Outbound Calling AI Agents", href: "/product/outbound-calling-ai-agents/" },
      { label: "Automated Support Tickets", href: "/product/automated-support-tickets/" },
      { label: "Smart Follow-Ups", href: "/product/smart-follow-ups/" },
      { label: "Automated Lead Pipeline", href: "/product/automated-lead-pipeline/" },
      { label: "Dashboard & Reporting", href: "/product/dashboard-reporting/" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features/" },
      { label: "Integrations", href: "/integration/" },
      { label: "Templates", href: "/template/" },
      { label: "Enterprise", href: "/enterprise/" },
      { label: "Book a Demo", href: "/book-a-demo/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Oman AI Calling Guide", href: "/guideline/oman/" },
      { label: "Comparison", href: "/comparison/" },
      { label: "Industries", href: "/industries/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];
