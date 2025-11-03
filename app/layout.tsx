import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { SITE_URL, PRODUCT_NAME, SEO_DESCRIPTION } from "@/lib/constants";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PRODUCT_NAME,
    template: `%s | $${PRODUCT_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: [
    "złoto",
    "inwestycje",
    "poradnik",
    "metale szlachetne",
    "DCA",
  ],
  authors: [{ name: "Adam Złotopolski" }],
  creator: "Adam Złotopolski",
  publisher: "Złoto od Zera",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    title: PRODUCT_NAME,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: `$${SITE_URL}/og-fallback.png`,
        width: 1200,
        height: 630,
        alt: PRODUCT_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PRODUCT_NAME,
    description: SEO_DESCRIPTION,
    creator: "@zlotoodzeroa",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://plausible.io" />

        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#0B0B0B" />

        <link rel="apple-touch-icon" href="/covers/cover1.png" />

        
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="bg-white text-foreground antialiased">
        {children}


        <Analytics />
      </body>
    </html>
  );
}
