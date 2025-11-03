import { MetadataRoute } from "next";
import { generateSitemapUrls } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapUrls().map((item) => ({
    url: item.url,
    lastModified: new Date(),
    changeFrequency: item.changefreq as
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never",
    priority: item.priority,
  }));
}
