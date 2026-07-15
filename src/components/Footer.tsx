// src/components/Footer.tsx
import Link from "next/link";
import { kategoriler } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0f1e3d] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white">
                S
              </span>
              <span className="text-lg font-extrabold text-white">
                Sınav<span className="text-orange-500">Hazırlık</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              YKS, KPSS, ALES, DGS ve YDS/YÖKDİL sınavlarına hazırlık sürecinde
              yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Sınavlar
            </h4>
            <ul className="space-y-2 text-sm">
              {kategoriler.map((k) => (
                <li key={k.slug}>
                  <Link href={`/sinav/${k.slug}`} className="hover:text-orange-400">
                    {k.ad}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-orange-400">Blog / Rehberler</Link></li>
              <li><Link href="/#ozellikler" className="hover:text-orange-400">Özellikler</Link></li>
              <li><Link href="/#yorumlar" className="hover:text-orange-400">Yorumlar</Link></li>
              <li><Link href="/#sss" className="hover:text-orange-400">Sıkça Sorulan Sorular</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Yasal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-400">Gizlilik Politikası</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Kullanım Koşulları</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <a
            href="https://fatihemincakiroglu.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-slate-400 hover:text-orange-400"
          >
            Fatih Emin Çakıroğlu
          </a>{" "}
          © {new Date().getFullYear()} SınavHazırlık. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
