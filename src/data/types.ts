export type FaqItem = { q: string; a: string };

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

export type GlossaryTerm = {
  slug: string;
  term: string;
  short: string; // one-line definition for index page
  sections: Section[]; // full article
  related: string[]; // slugs
};

export type Integration = {
  slug: string;
  name: string;
  category: string; // CRM, Calendar, Automation, Marketing, Messaging, Productivity
  short: string;
  sections: Section[];
  capabilities: string[]; // 4-6
};

export type Guideline = {
  slug: string;
  country: string;
  region: string;
  summary: string;
  sections: Section[]; // regulations for AI voice calls in that country
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

export type Comparison = {
  slug: string;
  competitor: string;
  title: string;
  summary: string;
  rows: { capability: string; voxcare: string; competitor: string }[]; // 6-8
  verdict: Section[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // "Jan 14, 2026"
  category: string;
  excerpt: string;
  sections: Section[];
};

export type LearnArticle = {
  slug: string; // without the voice-ai/ prefix
  title: string;
  date: string;
  excerpt: string;
  sections: Section[];
};
