// src/components/Header.tsx
import Link from "next/link";
import { kategoriler } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1e3d] text-lg font-bold text-white">
            S
          </span>
          <span className="text-lg font-extrabold tracking-tight text-[#0f1e3d]">
            Sınav<span className="text-orange-500">Hazırlık</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {kategoriler.map((k) => (
            <Link
              key={k.slug}
              href={`/sinav/${k.slug}`}
              className="hover:text-[#0f1e3d]"
            >
              {k.kisaAd}
            </Link>
          ))}
          <Link href="/blog" className="hover:text-[#0f1e3d]">
            Blog
          </Link>
        </nav>

        <Link
          href="/#kategoriler"
          className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
        >
          Ücretsiz Başla →
        </Link>
      </div>
    </header>
  );
}
