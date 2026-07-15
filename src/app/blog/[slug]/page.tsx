// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { yaziBul, yazilar } from "@/lib/blog";

export function generateStaticParams() {
  return yazilar.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const yazi = yaziBul(slug);
  if (!yazi) return {};
  return {
    title: `${yazi.baslik} | SınavHazırlık`,
    description: yazi.aciklama,
    alternates: {
      canonical: `https://sinavhazirlik.com.tr/blog/${yazi.slug}`,
    },
  };
}

export default async function BlogYaziSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const yazi = yaziBul(slug);
  if (!yazi) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: yazi.baslik,
    description: yazi.aciklama,
    datePublished: yazi.tarih,
    inLanguage: "tr",
    mainEntityOfPage: `https://sinavhazirlik.com.tr/blog/${yazi.slug}`,
    author: {
      "@type": "Person",
      name: "Fatih Emin Çakıroğlu",
      url: "https://fatihemincakiroglu.com/",
    },
    publisher: {
      "@type": "Person",
      name: "Fatih Emin Çakıroğlu",
      url: "https://fatihemincakiroglu.com/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[#0f1e3d] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/blog" className="text-sm text-slate-400 hover:text-white">
            ← Tüm rehberler
          </Link>
          <div className="mt-4 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-orange-500/15 px-3 py-1 font-semibold text-orange-300">
              {yazi.etiket}
            </span>
            <span className="text-slate-400">
              {new Date(yazi.tarih).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-slate-400">· {yazi.okumaSuresi} okuma</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {yazi.baslik}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        {yazi.bolumler.map((b, i) => (
          <div key={i} className="mb-8">
            {b.baslik && (
              <h2 className="mb-3 text-xl font-bold text-[#0f1e3d]">{b.baslik}</h2>
            )}
            {b.metin && (
              <p className="leading-relaxed text-slate-600">{b.metin}</p>
            )}
            {b.liste && (
              <ul className="mt-3 space-y-2">
                {b.liste.map((madde, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-slate-600">
                    <span className="mt-1 text-orange-500">•</span>
                    {madde}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-12 rounded-2xl bg-[#0f1e3d] p-8 text-center">
          <h3 className="text-xl font-bold text-white">
            Öğrendiklerini hemen test et
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-300">
            Ücretsiz quizlerle netini gör, eksik konularını keşfet.
          </p>
          <Link
            href="/#kategoriler"
            className="mt-5 inline-block rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Ücretsiz Quiz Çöz →
          </Link>
        </div>
      </article>
    </>
  );
}
