// src/app/sinav/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kategoriBul, kategoriler } from "@/lib/data";

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
    title: `${kategori.ad} Hazırlık — Online Deneme ve Quiz | SınavHazırlık`,
    description: kategori.uzunAciklama,
    alternates: {
      canonical: `https://sinavhazirlik.com.tr/sinav/${kategori.slug}`,
    },
  };
}

export default async function KategoriSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kategori = kategoriBul(slug);
  if (!kategori) notFound();

  return (
    <>
      {/* Başlık bandı */}
      <section className="bg-[#0f1e3d] py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/#kategoriler" className="text-sm text-slate-400 hover:text-white">
            ← Tüm sınavlar
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
              {kategori.ikon}
            </span>
            <div>
              <h1 className="text-3xl font-extrabold text-white">{kategori.ad}</h1>
              <p className="text-slate-400">{kategori.aciklama}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-300">
            {kategori.uzunAciklama}
          </p>
          <Link
            href={`/sinav/${kategori.slug}/quiz`}
            className="mt-8 inline-block rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600"
          >
            Quiz'e Başla ({kategori.sorular.length} soru) →
          </Link>
        </div>
      </section>

      {/* Konular */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-extrabold text-[#0f1e3d]">Kapsanan Konular</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {kategori.konular.map((konu) => (
            <span
              key={konu}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {konu}
            </span>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-bold text-[#0f1e3d]">Hazır mısın?</h3>
          <p className="mt-2 text-slate-500">
            {kategori.sorular.length} soruluk deneme quizini çözerek başla.
          </p>
          <Link
            href={`/sinav/${kategori.slug}/quiz`}
            className="mt-6 inline-block rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Quiz'e Başla →
          </Link>
        </div>
      </section>
    </>
  );
}
