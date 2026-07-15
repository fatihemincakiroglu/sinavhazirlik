// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { kategoriler } from "@/lib/data";
import { yazilar } from "@/lib/blog";

const BASE = "https://sinavhazirlik.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const simdi = new Date();

  const sabitler: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: simdi, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, lastModified: simdi, changeFrequency: "weekly", priority: 0.8 },
  ];

  const kategoriSayfalari: MetadataRoute.Sitemap = kategoriler.flatMap((k) => [
    { url: `${BASE}/sinav/${k.slug}`, lastModified: simdi, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/sinav/${k.slug}/quiz`, lastModified: simdi, changeFrequency: "weekly" as const, priority: 0.7 },
  ]);

  const blogSayfalari: MetadataRoute.Sitemap = yazilar.map((y) => ({
    url: `${BASE}/blog/${y.slug}`,
    lastModified: new Date(y.tarih),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...sabitler, ...kategoriSayfalari, ...blogSayfalari];
}
