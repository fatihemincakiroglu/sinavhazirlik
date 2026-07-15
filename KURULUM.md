# SınavHazırlık — Dosya Kurulumu

Bu klasördeki `src` içeriğini, kendi projendeki `src` klasörünün üzerine yaz.

## Adımlar

1. Bu zip'i aç.
2. İçindeki `src` klasörünü kopyala.
3. Kendi projene yapıştır: `C:\Users\Fatih Cakiroglu\sinavhazirlik\src`
   - "Dosyaların üzerine yazılsın mı?" sorusuna **Evet / Tümünü Değiştir** de.
4. Proje klasöründe terminalde çalıştır:
   ```
   npm run dev
   ```
5. Tarayıcıda `http://localhost:3000` — yeni site hazır.

## Yayına Alma (Vercel)

Değişiklikleri GitHub'a gönderince Vercel otomatik yayınlar:
```
git add .
git commit -m "Site tasarımı eklendi"
git push
```
Birkaç dakika içinde sinavhazirlik.com.tr güncellenir.

## Dosyaların Görevi

| Dosya | Ne işe yarar |
|-------|--------------|
| `src/lib/data.ts` | **Tüm sorular ve kategoriler burada.** Soru eklemek için burayı düzenle. |
| `src/app/page.tsx` | Ana sayfa (hero, kategoriler, yorumlar, SSS) |
| `src/app/layout.tsx` | Header + Footer'ı her sayfaya ekler |
| `src/app/globals.css` | Renk teması (lacivert + turuncu) |
| `src/components/Header.tsx` | Üst menü |
| `src/components/Footer.tsx` | Alt bilgi |
| `src/components/SSS.tsx` | Sıkça sorulan sorular akordeon |
| `src/app/sinav/[slug]/page.tsx` | Kategori detay sayfası |
| `src/app/sinav/[slug]/quiz/*` | Quiz çözme + sonuç ekranı |

## Yeni Soru Eklemek

`src/lib/data.ts` dosyasını aç. İlgili kategorinin `sorular` listesine şu formatta ekle:

```ts
{
  id: 4,
  soru: "Sorunun metni?",
  secenekler: ["A şıkkı", "B şıkkı", "C şıkkı", "D şıkkı"],
  dogru: 2,        // doğru şık (0=A, 1=B, 2=C, 3=D)
  cozum: "Çözüm açıklaması.",
},
```

Kaydet, sayfayı yenile — soru otomatik gelir.
