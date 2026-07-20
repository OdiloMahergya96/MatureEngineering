export const siteConfig = {
  name: "Ferrotype Engineering",
  shortName: "Ferrotype",
  tagline: "Engineering Better Industrial Systems",
  description:
    "Ferrotype Engineering helps manufacturers solve engineering problems through mechanical engineering, automation, manufacturing network, and engineering consulting.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ferrotype-engineering.com",
  email: "engineering@ferrotype-engineering.com",
  phone: "+62 21 5000 1234",
  whatsapp: "+62 812 3456 7890",
  address: "Kawasan Industri MM2100, Bekasi, West Java, Indonesia",
  social: {
    linkedin: "https://linkedin.com/company/ferrotype-engineering",
    youtube: "https://youtube.com/@ferrotype-engineering",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Services Overview", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Portfolio", href: "/portfolio" },
    ],
    resources: [
      { label: "Engineering Blog", href: "/blog" },
      { label: "Downloadable Resources", href: "/resources" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
