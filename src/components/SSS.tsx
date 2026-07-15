// src/components/SSS.tsx
"use client";

import { useState } from "react";

const sorular = [
  {
    s: "Platform ücretsiz mi?",
    c: "Her sınav kategorisinde ilk quiz ve deneme ücretsizdir. Kayıt olmadan da örnek soruları çözebilirsin.",
  },
  {
    s: "Hangi sınavları kapsıyor?",
    c: "YKS, KPSS, ALES, DGS ve YDS/YÖKDİL sınavlarını kapsıyoruz. Hepsi tek platformda.",
  },
  {
    s: "Sorular güncel mi?",
    c: "Sorular güncel ÖSYM formatına uygun olarak hazırlanır ve düzenli güncellenir.",
  },
  {
    s: "Sonuçlarımı görebilir miyim?",
    c: "Evet. Her quiz ve deneme sonunda doğru-yanlış sayını, puanını ve her sorunun çözümünü görürsün.",
  },
  {
    s: "Mobil cihazdan kullanabilir miyim?",
    c: "Evet, platform telefon, tablet ve bilgisayarda sorunsuz çalışır.",
  },
];

export default function SSS() {
  const [acik, setAcik] = useState<number | null>(0);

  return (
    <section id="sss" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f1e3d]">Sıkça Sorulan Sorular</h2>
          <p className="mt-3 text-slate-500">Platform hakkında merak edilenler</p>
        </div>
        <div className="mt-10 space-y-3">
          {sorular.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setAcik(acik === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-[#0f1e3d]">{item.s}</span>
                <span className={`text-xl text-orange-500 transition ${acik === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {acik === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.c}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
