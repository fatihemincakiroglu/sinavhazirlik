// src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { yazilar } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Sınav Rehberleri ve Hazırlık İpuçları | SınavHazırlık",
  description:
    "YKS, KPSS, ALES, DGS ve YDS için sınav takvimleri, puan hesaplama rehberleri ve çalışma taktikleri.",
  alternates: {
    canonical: "https://sinavhazirlik.com.tr/blog",
  },
};

export default function BlogSayfasi() {
  return (
    <>
      <section className="bg-[#0f1e3d] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Sınav Rehberleri
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Sınav takvimleri, puan hesaplama ve çalışma taktikleri — hepsi tek yerde.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-6">
          {yazilar.map((y) => (
            <Link
              key={y.slug}
              href={`/blog/${y.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-600">
                  {y.etiket}
                </span>
                <span className="text-slate-400">
                  {new Date(y.tarih).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-slate-400">· {y.okumaSuresi} okuma</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-[#0f1e3d] group-hover:text-orange-600">
                {y.baslik}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {y.aciklama}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                Devamını oku
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
