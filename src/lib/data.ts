// src/lib/data.ts
// Tüm sınav kategorileri ve sorular buradan yönetilir.
// Yeni soru/kategori eklemek için sadece bu dosyayı düzenle.

export type Soru = {
  id: number;
  soru: string;
  secenekler: string[];
  dogru: number; // doğru şıkkın index'i (0-3)
  cozum?: string;
};

export type Kategori = {
  slug: string;
  ad: string;
  kisaAd: string;
  aciklama: string;
  uzunAciklama: string;
  renk: string; // tailwind renk sınıfı için
  ikon: string; // emoji ya da harf
  konular: string[];
  sorular: Soru[];
};

export const kategoriler: Kategori[] = [
  {
    slug: "yks",
    ad: "YKS",
    kisaAd: "YKS",
    aciklama: "Yükseköğretim Kurumları Sınavı",
    uzunAciklama:
      "Üniversiteye giriş için TYT ve AYT oturumlarını kapsayan kapsamlı hazırlık. Türkçe, Matematik, Fen ve Sosyal derslerinde binlerce soru.",
    renk: "sky",
    ikon: "🎓",
    konular: ["Türkçe", "Matematik", "Geometri", "Fizik", "Kimya", "Biyoloji", "Tarih", "Coğrafya"],
    sorular: [
      {
        id: 1,
        soru: "Aşağıdakilerden hangisi bir cümlede yüklem olamaz?",
        secenekler: ["Fiil", "İsim", "Edat", "Fiilimsi"],
        dogru: 2,
        cozum: "Edatlar tek başına anlam taşımaz ve yüklem görevinde kullanılamaz.",
      },
      {
        id: 2,
        soru: "2x + 5 = 15 denkleminde x kaçtır?",
        secenekler: ["3", "5", "7", "10"],
        dogru: 1,
        cozum: "2x = 15 - 5 = 10, buradan x = 5 bulunur.",
      },
      {
        id: 3,
        soru: "Işığın boşluktaki hızı yaklaşık kaç km/s'dir?",
        secenekler: ["150.000", "300.000", "500.000", "1.000.000"],
        dogru: 1,
        cozum: "Işık hızı boşlukta yaklaşık 300.000 km/s'dir.",
      },
    ],
  },
  {
    slug: "kpss",
    ad: "KPSS",
    kisaAd: "KPSS",
    aciklama: "Kamu Personeli Seçme Sınavı",
    uzunAciklama:
      "Devlet memurluğu için Genel Yetenek ve Genel Kültür alanlarında ÖSYM formatında denemeler. Türkçe, Matematik, Tarih, Coğrafya ve Vatandaşlık.",
    renk: "orange",
    ikon: "🏛️",
    konular: ["Türkçe", "Matematik", "Tarih", "Coğrafya", "Vatandaşlık", "Güncel Bilgiler"],
    sorular: [
      {
        id: 1,
        soru: "Türkiye Büyük Millet Meclisi hangi yıl açılmıştır?",
        secenekler: ["1919", "1920", "1921", "1923"],
        dogru: 1,
        cozum: "TBMM 23 Nisan 1920'de açılmıştır.",
      },
      {
        id: 2,
        soru: "Türkiye'nin en kalabalık ili hangisidir?",
        secenekler: ["Ankara", "İzmir", "İstanbul", "Bursa"],
        dogru: 2,
        cozum: "İstanbul, nüfus bakımından Türkiye'nin en kalabalık ilidir.",
      },
      {
        id: 3,
        soru: "Anayasaya göre TBMM üye sayısı kaçtır?",
        secenekler: ["450", "500", "550", "600"],
        dogru: 3,
        cozum: "2017 değişikliği ile TBMM üye sayısı 600'e çıkarılmıştır.",
      },
    ],
  },
  {
    slug: "ales",
    ad: "ALES",
    kisaAd: "ALES",
    aciklama: "Akademik Personel ve Lisansüstü Eğitim Sınavı",
    uzunAciklama:
      "Yüksek lisans, doktora ve akademik kadrolar için sayısal ve sözel yetenek soruları. Mantık, sayısal ilişkiler ve sözel akıl yürütme.",
    renk: "violet",
    ikon: "📚",
    konular: ["Sayısal Yetenek", "Sözel Yetenek", "Mantık", "Sayı Dizileri", "Paragraf"],
    sorular: [
      {
        id: 1,
        soru: "2, 4, 8, 16, ... dizisinde sıradaki sayı kaçtır?",
        secenekler: ["24", "30", "32", "36"],
        dogru: 2,
        cozum: "Her sayı bir öncekinin 2 katıdır: 16 × 2 = 32.",
      },
      {
        id: 2,
        soru: "'Bütün kediler hayvandır' önermesinin karşıtı hangisidir?",
        secenekler: [
          "Bazı kediler hayvan değildir",
          "Hiçbir kedi hayvan değildir",
          "Bazı hayvanlar kedidir",
          "Bütün hayvanlar kedidir",
        ],
        dogru: 0,
        cozum: "'Bütün ... dır' önermesinin çelişiği 'Bazı ... değildir' şeklindedir.",
      },
      {
        id: 3,
        soru: "Bir işi A tek başına 6 günde, B tek başına 12 günde bitiriyor. Birlikte kaç günde biter?",
        secenekler: ["3", "4", "5", "8"],
        dogru: 1,
        cozum: "1/6 + 1/12 = 3/12 = 1/4, yani birlikte 4 günde biter.",
      },
    ],
  },
  {
    slug: "dgs",
    ad: "DGS",
    kisaAd: "DGS",
    aciklama: "Dikey Geçiş Sınavı",
    uzunAciklama:
      "Önlisanstan lisansa geçiş için sayısal ve sözel yetenek soruları. Matematik, geometri ve sözel mantık ağırlıklı.",
    renk: "emerald",
    ikon: "🎯",
    konular: ["Sayısal Yetenek", "Sözel Yetenek", "Matematik", "Geometri", "Mantık"],
    sorular: [
      {
        id: 1,
        soru: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        secenekler: ["90", "180", "270", "360"],
        dogru: 1,
        cozum: "Bir üçgenin iç açıları toplamı her zaman 180 derecedir.",
      },
      {
        id: 2,
        soru: "%20 indirimli 400 TL'lik ürünün fiyatı kaç TL olur?",
        secenekler: ["300", "320", "360", "380"],
        dogru: 1,
        cozum: "400 × 0,20 = 80 TL indirim, 400 - 80 = 320 TL.",
      },
      {
        id: 3,
        soru: "3, 6, 9, 12 sayılarının ortalaması kaçtır?",
        secenekler: ["6", "7,5", "9", "10"],
        dogru: 1,
        cozum: "(3+6+9+12)/4 = 30/4 = 7,5.",
      },
    ],
  },
  {
    slug: "yds",
    ad: "YDS / YÖKDİL",
    kisaAd: "YDS",
    aciklama: "Yabancı Dil Sınavı",
    uzunAciklama:
      "Akademik ve resmi yabancı dil yeterliliği için kelime, dilbilgisi ve okuma soruları. YDS ve YÖKDİL formatında hazırlık.",
    renk: "rose",
    ikon: "🌐",
    konular: ["Kelime Bilgisi", "Dilbilgisi", "Okuma", "Cloze Test", "Çeviri"],
    sorular: [
      {
        id: 1,
        soru: "'Improve' kelimesinin Türkçe karşılığı nedir?",
        secenekler: ["Bozmak", "Geliştirmek", "Azaltmak", "Silmek"],
        dogru: 1,
        cozum: "'Improve' geliştirmek, iyileştirmek anlamına gelir.",
      },
      {
        id: 2,
        soru: "She ___ to school every day. (Doğru fiil çekimi)",
        secenekler: ["go", "goes", "going", "gone"],
        dogru: 1,
        cozum: "3. tekil şahıs (she) ile geniş zamanda fiile -es eklenir: goes.",
      },
      {
        id: 3,
        soru: "'Significant' kelimesinin eş anlamlısı hangisidir?",
        secenekler: ["Important", "Small", "Weak", "Empty"],
        dogru: 0,
        cozum: "'Significant' (önemli) kelimesinin eş anlamlısı 'important'tır.",
      },
    ],
  },
];

export function kategoriBul(slug: string): Kategori | undefined {
  return kategoriler.find((k) => k.slug === slug);
}
