import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://koueigyannburu.vercel.app";
  const now = new Date("2026-06-29");
  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/keiba`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/keirin`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/kyotei`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/autorace`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/takarakuji`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
