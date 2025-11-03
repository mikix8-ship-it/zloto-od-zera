"use client";

import Script from "next/script";
import { GA_ID, PLAUSIBLE_DOMAIN } from "@/lib/constants";

export function Analytics() {
  if (PLAUSIBLE_DOMAIN) {
    return (
      <Script
        defer
        data-domain={PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.js"
        strategy="lazyOnload"
      />
    );
  }

  if (GA_ID) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=$${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "$${GA_ID}", {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </>
    );
  }

  return null;
}

export default Analytics;
