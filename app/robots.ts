import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/admin", "/.well-known"],
    },
    sitemap: "https://zlotoodzera.com/sitemap.xml",
  };
}

