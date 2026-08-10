export type FaqItem = {
  q: string;
  a: string;
  link?: { label: string; href: string };
};

export type Section = { h?: string; p: string[]; bullets?: string[] };

export type Industry = {
  slug: string;
  name: string; // e.g. "Dental Clinics"
  heroTitle: string;
  heroSub: string;
  painPoints: { title: string; desc: string }[]; // 3-4
  useCases: { title: string; desc: string }[]; // 4-6
  omanNote: string; // paragraph tying the industry to the Omani market
  faqs: FaqItem[]; // 3-5
};

export type Integration = {
  slug: string;
  name: string;
  category: string; // CRM, Calendar, Automation, Marketing, Messaging, Productivity
  short: string;
  sections: Section[];
  capabilities: string[]; // 4-6
};

export type Template = {
  slug: string;
  name: string;
  industry: string;
  short: string;
  featured?: boolean;
  sections: Section[];
  steps: string[]; // what the agent does, in order
};

export type Feature = {
  slug: string;
  name: string;
  short: string;
  heroTitle: string;
  heroSub: string;
  sections: Section[];
  bullets: string[]; // capability list
};

export type LearnArticle = {
  slug: string; // without the voice-ai/ prefix
  title: string;
  date: string;
  excerpt: string;
  sections: Section[];
};
