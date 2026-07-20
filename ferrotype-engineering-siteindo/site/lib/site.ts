export const siteConfig = {
  name: "Ferrotype Engineering",
  shortName: "Ferrotype",
  tagline: "Merekayasa Sistem Industri yang Lebih Baik",
  description:
    "Ferrotype Engineering membantu perusahaan manufaktur menyelesaikan masalah engineering melalui mechanical engineering, automation, manufacturing network, dan engineering consulting.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ferrotype-engineering.com",
  email: "engineering@ferrotype-engineering.com",
  phone: "+62 21 5000 1234",
  whatsapp: "+62 812 3456 7890",
  address: "Kawasan Industri MM2100, Bekasi, Jawa Barat, Indonesia",
  social: {
    linkedin: "https://linkedin.com/company/ferrotype-engineering",
    youtube: "https://youtube.com/@ferrotype-engineering",
  },
  nav: [
    { label: "Tentang Kami", href: "/about" },
    { label: "Layanan", href: "/services" },
    { label: "Industri", href: "/industries" },
    { label: "Portofolio", href: "/portfolio" },
    { label: "Studi Kasus", href: "/case-studies" },
    { label: "Sumber Daya", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "Karier", href: "/careers" },
    { label: "Kontak", href: "/contact" },
  ],
  footerLinks: {
    company: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Karier", href: "/careers" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontak", href: "/contact" },
    ],
    services: [
      { label: "Semua Layanan", href: "/services" },
      { label: "Industri", href: "/industries" },
      { label: "Studi Kasus", href: "/case-studies" },
      { label: "Portofolio", href: "/portfolio" },
    ],
    resources: [
      { label: "Blog Engineering", href: "/blog" },
      { label: "Sumber Daya Gratis", href: "/resources" },
    ],
    legal: [
      { label: "Kebijakan Privasi", href: "/privacy-policy" },
      { label: "Syarat & Ketentuan", href: "/terms" },
    ],
  },
};
