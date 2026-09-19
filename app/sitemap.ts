import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/events`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/mosque`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
