// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { kategoriler } from "@/lib/data";
import SSS from "@/components/SSS";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sinavhazirlik.com.tr/",
  },
};

const renkHarita: Record<string, { bg: string; text: string; ring: string }> = {
  sky: { bg: "bg-sky-50", text: "text-sky-600", ring: "hover:ring-sky-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", ring: "hover:ring-orange-200" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", ring: "hover:ring-violet-200" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", ring: "hover:ring-emerald-200" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", ring: "hover:ring-rose-200" },
};

const ozellikler = [
  { ikon: "📝", baslik: "Online Quiz", metin: "Konu bazlı yüzlerce soruyla pratik yap, anında sonucunu gör." },
  { ikon: "🏆", baslik: "Deneme Sınavları", metin: "Gerçek sınav formatında denemelerle kendini ölç, eksiğini gör." },
  { ikon: "📊", baslik: "Anlık Sonuç", metin: "Her denemede doğru-yanlış ve net analizini tek ekranda gör." },
  { ikon: "💡", baslik: "Detaylı Çözüm", metin: "Her sorunun çözümünü gör, nerede hata yaptığını anla." },
  { ikon: "🎯", baslik: "5 Sınav Tek Platform", metin: "YKS, KPSS, ALES, DGS ve YDS aynı yerde, tek hesapla." },
  { ikon: "⚡", baslik: "Ücretsiz Başla", metin: "Kredi kartı gerekmez. Hemen çözmeye başla, istediğin zaman bırak." },
];

const yorumlar = [
  { ad: "Ayşe Y.", sinav: "KPSS", puan: "91 Net", metin: "Deneme sınavları gerçek formata çok yakın. Netlerimi düzenli takip ederek hedefime ulaştım." },
  { ad: "Mehmet C.", sinav: "DGS", puan: "88 Net", metin: "Sayısal mantık sorularındaki çözümler harika. Bilgisayar mühendisliğine geçiş yaptım." },
  { ad: "Selin B.", sinav: "YDS", puan: "85 Puan", metin: "Kelime ve okuma quizleri nokta atışı. Akademik başvurum için gereken puanı aldım." },
  { ad: "Onur D.", sinav: "ALES", puan: "90 Net", metin: "Mantık sorularını çözme hızım ikiye katlandı. Süre sorunumu tamamen aştım." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0f1e3d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-orange-300">
              ● 5 Sınav · Online Deneme & Quiz
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Sınavına{" "}
              <span className="text-orange-500">netlerini görerek</span> hazırlan
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
              YKS, KPSS, ALES, DGS ve YDS/YÖKDİL için online quizler ve gerçek
              formatta deneme sınavları. Kaç net yaptığını ve nerede eksiğin
              olduğunu tek panelde gör.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#kategoriler"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
              >
                Ücretsiz Denemeye Başla →
              </Link>
              <Link
                href="#ozellikler"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Özellikleri İncele
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
              <span>✓ Her zaman ücretsiz</span>
              <span>✓ Üyeliksiz anında başla</span>
              <span>✓ Netini anlık gör</span>
            </div>
          </div>

          {/* Sağ görsel kart */}
          <div className="relative">
            <div className="hero-kart rounded-2xl border border-white/10 bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0f1e3d]">Net Gelişimin</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">Son 7 deneme</span>
              </div>
              <svg viewBox="0 0 300 120" className="w-full">
                <defs>
                  <linearGradient id="grafikDolgu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="10" y1="30" x2="285" y2="30" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
                <polygon
                  className="grafik-alan"
                  fill="url(#grafikDolgu)"
                  points="10,100 55,88 100,92 145,70 190,58 235,40 285,25 285,115 10,115"
                />
                <polyline
                  className="grafik-cizgi"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="10,100 55,88 100,92 145,70 190,58 235,40 285,25"
                />
                {[
                  [10, 100],
                  [55, 88],
                  [100, 92],
                  [145, 70],
                  [190, 58],
                  [235, 40],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    className="grafik-nokta"
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#ffffff"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
                <circle className="grafik-uc-halka" cx="285" cy="25" r="5" fill="#f97316" opacity="0.3" />
                <circle className="grafik-nokta" cx="285" cy="25" r="4.5" fill="#f97316" stroke="#ffffff" strokeWidth="2" style={{ animationDelay: "0.72s" }} />
              </svg>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-lg font-bold text-[#0f1e3d]">84,2</div>
                  <div className="text-xs text-slate-500">Ortalama Net</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-lg font-bold text-[#0f1e3d]">%9</div>
                  <div className="text-xs text-slate-500">Yüzdelik Dilim</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-lg font-bold text-orange-500">↑ 3,1</div>
                  <div className="text-xs text-slate-500">Son Artış</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section id="kategoriler" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f1e3d]">Sınav Kategorileri</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Hazırlandığın sınavı seç, quiz ve denemelere hemen başla.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {kategoriler.map((k) => {
            const r = renkHarita[k.renk];
            return (
              <Link
                key={k.slug}
                href={`/sinav/${k.slug}`}
                className={`group rounded-2xl border border-slate-200 bg-white p-6 ring-4 ring-transparent transition ${r.ring} hover:shadow-lg`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${r.bg}`}>
                  {k.ikon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0f1e3d]">{k.ad}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{k.aciklama}</p>
                <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${r.text}`}>
                  Çözmeye başla
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section id="ozellikler" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">Neden Biz?</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0f1e3d]">
              Sınav hazırlığını kolaylaştıran araçlar
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ozellikler.map((o) => (
              <div key={o.baslik} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-2xl">{o.ikon}</div>
                <h3 className="mt-4 text-lg font-bold text-[#0f1e3d]">{o.baslik}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{o.metin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section id="yorumlar" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">Sizden Gelenler</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0f1e3d]">Öğrenci Yorumları</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {yorumlar.map((y) => (
            <div key={y.ad} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f1e3d] font-bold text-white">
                    {y.ad[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0f1e3d]">{y.ad}</div>
                    <div className="text-xs text-slate-400">{y.sinav}</div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  {y.puan}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{y.metin}&rdquo;</p>
              <div className="mt-3 text-orange-400">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <SSS />

      {/* CTA */}
      <section className="bg-orange-500">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Başarıya giden yolda ilk adımı at
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-orange-50">
            Hemen bir sınav seç, ücretsiz quizlerle çözmeye başla.
          </p>
          <Link
            href="#kategoriler"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-orange-600 shadow-lg hover:bg-orange-50"
          >
            Ücretsiz Başla →
          </Link>
        </div>
      </section>
    </>
  );
}
