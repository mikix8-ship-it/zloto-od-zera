import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jak Kupić Złoto BEZ Oszustwa - E-book 49,99 PLN",
  description: "Poradnik do złota dla początkujących. System DCA, skrypty weryfikacyjne, podatki, bezpieczeństwo. 9 rozdziałów + 7 bonusów. Gwarancja 14 dni.",
  keywords: [
    "inwestycje w złoto",
    "jak kupić złoto",
    "poradnik złoto",
    "złoto dla początkujących",
    "system DCA",
    "bezpieczeństwo złota",
    "podatki złoto",
    "e-book złoto",
    "oszustwa przy złocie",
    "jak bezpiecznie kupić złoto",
    "gdzie kupić złoto w Polsce",
  ],
  authors: [{ name: "Adam Złotopolski" }],
  creator: "Adam Złotopolski",
  publisher: "Złoto od Zera",
  openGraph: {
    title: "Jak Kupić Złoto BEZ Oszustwa - E-book",
    description: "Poradnik do złota dla początkujących. System DCA, skrypty weryfikacyjne, podatki. 49,99 PLN.",
    url: "https://zlotoodzera.com",
    siteName: "Złoto od Zera",
    images: [
      {
        url: "/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jak Kupić Złoto BEZ Oszustwa - Okładka E-booka",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak Kupić Złoto BEZ Oszustwa",
    description: "System DCA, bezpieczeństwo, podatki. E-book 49,99 PLN. Kup teraz!",
    images: ["/images/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Jak Kupić Złoto BEZ Oszustwa - System DCA",
  "description": "Kompletny poradnik inwestowania w złoto dla początkujących. 9 rozdziałów, system DCA, bezpieczeństwo, podatki.",
  "image": "https://zlotoodzera.com/images/cover.jpg",
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "PLN",
    "availability": "InStock",
    "url": "https://www.naffy.io/enappia/zloto-bez-oszustwa"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "10",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "Adam Złotopolski"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
