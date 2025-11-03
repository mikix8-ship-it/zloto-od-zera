import { DefaultSeoProps } from "next-seo";
import {
  SITE_URL,
  CANONICAL_URL,
  PRODUCT_NAME,
  SEO_DESCRIPTION,
  AUTHOR_NAME,
} from "./constants";

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: `%s | $${PRODUCT_NAME}`,
  defaultTitle: PRODUCT_NAME,
  description: SEO_DESCRIPTION,
  canonical: CANONICAL_URL,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    title: PRODUCT_NAME,
    description: SEO_DESCRIPTION,
    siteName: PRODUCT_NAME,
    images: [
      {
        url: `$${SITE_URL}/og-fallback.png`,
        width: 1200,
        height: 630,
        alt: PRODUCT_NAME,
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@zlotoodzeroa",
    site: "@zlotoodzeroa",
    cardType: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    description: SEO_DESCRIPTION,
    image: `$${SITE_URL}/og-fallback.png`,
    brand: {
      "@type": "Brand",
      name: AUTHOR_NAME,
    },
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
  };
}

export function generateSitemapUrls() {
  return [
    { url: SITE_URL, changefreq: "weekly", priority: 1.0 },
    { url: `$${SITE_URL}/privacy`, changefreq: "yearly", priority: 0.3 },
    { url: `$${SITE_URL}/terms`, changefreq: "yearly", priority: 0.3 },
    { url: `$${SITE_URL}/refunds`, changefreq: "yearly", priority: 0.3 },
  ];
}
