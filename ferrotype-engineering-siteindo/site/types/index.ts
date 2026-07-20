export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  challenges: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  industry: string;
  service: string;
  summary: string;
  scope: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export interface Resource {
  slug: string;
  title: string;
  description: string;
  fileType: string;
  category: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  featured?: boolean;
  readingTime?: string;
}
