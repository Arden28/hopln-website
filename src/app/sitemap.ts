import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hopln.app";
  return [
    { url: base,              lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/community`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
