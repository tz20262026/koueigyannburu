import type { MetadataRoute } from "next";

const articleSlugs = [
  "keiba-kishu-ranking",
  "keiba-beginner-terms",
  "keiba-odds-guide",
  "kyotei-1course",
  "kyotei-a1-players",
  "keirin-ss-player",
  "keirin-line-guide",
  "autorace-engine",
  "takarakuji-loto6-hot",
  "takarakuji-compare",
];

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
    ...articleSlugs.map((slug) => ({
      url: `${base}/articles/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
