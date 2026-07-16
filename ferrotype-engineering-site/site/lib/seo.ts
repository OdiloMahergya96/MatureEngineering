import type { Metadata } from "next";
import { siteConfig } from "./site";

interface SeoParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path = "", image, noIndex }: SeoParams): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-default.png`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
