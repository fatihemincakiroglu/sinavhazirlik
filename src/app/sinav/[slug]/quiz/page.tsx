// src/app/sinav/[slug]/quiz/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { kategoriBul, kategoriler } from "@/lib/data";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return kategoriler.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kategori = kategoriBul(slug);
  if (!kategori) return {};
  return {
    title: `${kategori.ad} Quiz — Soru Çöz | SınavHazırlık`,
    description: `${kategori.ad} için ${kategori.sorular.length} soruluk online quiz. Çöz, netini gör, çözümleri incele.`,
    alternates: {
      canonical: `https://sinavhazirlik.com.tr/sinav/${kategori.slug}/quiz`,
    },
  };
}

export default async function QuizSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kategori = kategoriBul(slug);
  if (!kategori) notFound();

  return <QuizClient kategori={kategori} />;
}
