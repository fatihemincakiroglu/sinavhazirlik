// src/app/sinav/[slug]/quiz/QuizClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Kategori } from "@/lib/data";

export default function QuizClient({ kategori }: { kategori: Kategori }) {
  const sorular = kategori.sorular;
  const [aktif, setAktif] = useState(0);
  const [secimler, setSecimler] = useState<(number | null)[]>(
    Array(sorular.length).fill(null)
  );
  const [bitti, setBitti] = useState(false);

  const soru = sorular[aktif];
  const secili = secimler[aktif];

  function sec(i: number) {
    if (secili !== null) return; // seçim yapıldıysa değiştirme (isteğe bağlı)
    const yeni = [...secimler];
    yeni[aktif] = i;
    setSecimler(yeni);
  }

  function ileri() {
    if (aktif < sorular.length - 1) setAktif(aktif + 1);
    else setBitti(true);
  }

  const dogruSayisi = secimler.filter((s, i) => s === sorular[i].dogru).length;
  const yanlisSayisi = secimler.filter((s, i) => s !== null && s !== sorular[i].dogru).length;
  const bosSayisi = secimler.filter((s) => s === null).length;
  const yuzde = Math.round((dogruSayisi / sorular.length) * 100);

  // SONUÇ EKRANI
  if (bitti) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">{yuzde >= 60 ? "🎉" : "💪"}</div>
          <h1 className="mt-4 text-2xl font-extrabold text-[#0f1e3d]">
            {kategori.ad} Quiz Sonucun
          </h1>
          <div className="mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-full border-8 border-orange-500 text-3xl font-extrabold text-[#0f1e3d]">
            %{yuzde}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-emerald-50 p-4">
              <div className="text-2xl font-bold text-emerald-600">{dogruSayisi}</div>
              <div className="text-xs text-slate-500">Doğru</div>
            </div>
            <div className="rounded-lg bg-rose-50 p-4">
              <div className="text-2xl font-bold text-rose-600">{yanlisSayisi}</div>
              <div className="text-xs text-slate-500">Yanlış</div>
            </div>
            <div className="rounded-lg bg-slate-100 p-4">
              <div className="text-2xl font-bold text-slate-500">{bosSayisi}</div>
              <div className="text-xs text-slate-500">Boş</div>
            </div>
          </div>
        </div>

        {/* Çözümler */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold text-[#0f1e3d]">Çözümler</h2>
          <div className="space-y-4">
            {sorular.map((s, i) => {
              const secim = secimler[i];
              const dogruMu = secim === s.dogru;
              return (
                <div key={s.id} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-[#0f1e3d]">
                      {i + 1}. {s.soru}
                    </p>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        secim === null
                          ? "bg-slate-100 text-slate-500"
                          : dogruMu
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {secim === null ? "Boş" : dogruMu ? "Doğru" : "Yanlış"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Doğru cevap:{" "}
                    <span className="font-semibold text-emerald-600">
                      {s.secenekler[s.dogru]}
                    </span>
                  </p>
                  {s.cozum && (
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">💡 {s.cozum}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              setAktif(0);
              setSecimler(Array(sorular.length).fill(null));
              setBitti(false);
            }}
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Tekrar Çöz
          </button>
          <Link
            href="/#kategoriler"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0f1e3d] hover:bg-slate-50"
          >
            Başka Sınav Seç
          </Link>
        </div>
      </section>
    );
  }

  // QUIZ EKRANI
  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      {/* İlerleme */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span className="font-medium text-[#0f1e3d]">{kategori.ad}</span>
          <span>
            Soru {aktif + 1} / {sorular.length}
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-orange-500 transition-all"
            style={{ width: `${((aktif + 1) / sorular.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Soru kartı */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold leading-relaxed text-[#0f1e3d]">{soru.soru}</h2>
        <div className="mt-6 space-y-3">
          {soru.secenekler.map((s, i) => {
            const harf = ["A", "B", "C", "D"][i];
            let stil = "border-slate-200 hover:border-orange-300 hover:bg-orange-50";
            if (secili !== null) {
              if (i === soru.dogru) stil = "border-emerald-400 bg-emerald-50";
              else if (i === secili) stil = "border-rose-400 bg-rose-50";
              else stil = "border-slate-200 opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => sec(i)}
                disabled={secili !== null}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium text-[#0f1e3d] ${stil}`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                  {harf}
                </span>
                {s}
              </button>
            );
          })}
        </div>

        {secili !== null && soru.cozum && (
          <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
            💡 {soru.cozum}
          </div>
        )}
      </div>

      {/* Alt buton */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={ileri}
          disabled={secili === null}
          className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {aktif < sorular.length - 1 ? "Sonraki Soru →" : "Quiz'i Bitir"}
        </button>
      </div>
    </section>
  );
}
