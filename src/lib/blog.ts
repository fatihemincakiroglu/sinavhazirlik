// src/lib/blog.ts
// Blog / rehber yazıları buradan yönetilir.
// Yeni yazı eklemek için diziye yeni bir nesne ekle — sitemap'e otomatik girer.

export type BlogBolum = {
  baslik?: string; // ara başlık (h2)
  metin?: string; // paragraf
  liste?: string[]; // madde listesi
};

export type BlogYazi = {
  slug: string;
  baslik: string;
  aciklama: string; // meta description + kart özeti
  tarih: string; // YYYY-MM-DD
  etiket: string; // ilgili sınav
  okumaSuresi: string;
  bolumler: BlogBolum[];
};

export const yazilar: BlogYazi[] = [
  {
    slug: "kpss-2026-sinav-takvimi",
    baslik: "2026 KPSS Ne Zaman? Sınav Takvimi ve Başvuru Rehberi",
    aciklama:
      "2026 KPSS oturumları ne zaman yapılacak? Başvuru tarihleri, oturum türleri ve başvuru adımları bu rehberde.",
    tarih: "2026-07-13",
    etiket: "KPSS",
    okumaSuresi: "4 dk",
    bolumler: [
      {
        metin:
          "KPSS (Kamu Personel Seçme Sınavı), kamu kurumlarına personel alımında kullanılan ve her yıl yüz binlerce adayın girdiği sınavdır. Lisans, ön lisans ve ortaöğretim düzeylerinde farklı oturumlarla yapılır. Kesin sınav ve başvuru tarihleri her yıl ÖSYM tarafından yayımlanan sınav takviminde duyurulur; bu nedenle güncel tarihleri mutlaka osym.gov.tr adresinden doğrulayın.",
      },
      {
        baslik: "KPSS Oturumları Genellikle Hangi Aylarda Yapılır?",
        metin:
          "Geçmiş yıllardaki takvimlere bakıldığında KPSS oturumları genellikle şu dönemlerde gerçekleşir:",
        liste: [
          "Lisans (Genel Yetenek – Genel Kültür): Temmuz",
          "Eğitim Bilimleri ve ÖABT (öğretmen adayları): Temmuz",
          "Alan Bilgisi (A Grubu): Ağustos–Eylül",
          "Ön lisans ve ortaöğretim oturumları: Eylül–Ekim (çift yıllarda ön lisans, tek yıllarda ortaöğretim yapılır)",
        ],
      },
      {
        baslik: "Başvuru Nasıl Yapılır?",
        liste: [
          "ÖSYM Aday İşlemleri Sistemi'ne (ais.osym.gov.tr) giriş yapın.",
          "Başvuru döneminde ilgili sınavı seçip bilgilerinizi güncelleyin.",
          "Sınav ücretini belirtilen bankalar veya ÖSYM ödeme kanallarından yatırın.",
          "Başvurunuzun 'tamamlandı' durumuna geçtiğini mutlaka kontrol edin.",
        ],
      },
      {
        baslik: "Hazırlığa Ne Zaman Başlamalı?",
        metin:
          "KPSS'de Genel Yetenek – Genel Kültür oturumu için ortalama 6-8 aylık düzenli bir çalışma yeterli görülür. Alan sınavına girecek adaylar içinse bu süre 10-12 aya çıkabilir. En kritik nokta, konu çalışmasını erken bitirip son 2-3 ayı tamamen deneme çözümüne ayırmaktır. SınavHazırlık'taki KPSS quizleriyle seviyeni hemen ölçebilir, hangi konularda eksiğin olduğunu görebilirsin.",
      },
    ],
  },
  {
    slug: "yks-taban-puanlari-nasil-belirlenir",
    baslik: "YKS Taban Puanları Nasıl Belirlenir? Sıralama Mantığı",
    aciklama:
      "Üniversite taban puanları nasıl oluşur? Taban puan mı başarı sırası mı önemli? Tercih öncesi bilmen gereken her şey.",
    tarih: "2026-07-13",
    etiket: "YKS",
    okumaSuresi: "5 dk",
    bolumler: [
      {
        metin:
          "Her tercih döneminde en çok merak edilen konu taban puanlardır. Ancak çoğu adayın gözden kaçırdığı önemli bir gerçek var: taban puanlar önceden belirlenmez. Bir bölümün taban puanı, o yıl o bölümü tercih edip yerleşen son öğrencinin puanıdır. Yani taban puan, tercih dönemi bittikten sonra ortaya çıkar.",
      },
      {
        baslik: "Taban Puan mı, Başarı Sırası mı?",
        metin:
          "Tercih yaparken taban puandan çok başarı sırasına bakmalısın. Çünkü sınavın zorluğu her yıl değişir ve puanlar buna göre dalgalanır; ancak bir bölümü kazanan öğrencilerin Türkiye sıralaması yıldan yıla çok daha az değişir. Örneğin bir bölümün taban puanı bir yıl 450, ertesi yıl 430 olabilir ama son yerleşen kişinin başarı sırası her iki yıl da 50.000 civarında kalabilir.",
      },
      {
        baslik: "Yerleştirme Puanı Nasıl Hesaplanır?",
        liste: [
          "TYT puanının %40'ı + AYT puanının %60'ı ile yerleştirme puanı oluşur.",
          "Ortaöğretim Başarı Puanı (OBP), diploma notunun 5 ile çarpılmasıyla bulunur ve 0,12 katsayısıyla puana eklenir.",
          "TYT'de en az 150, AYT hesaplaması için ilgili puan türünde en az 180 puan almak gerekir.",
        ],
      },
      {
        baslik: "Tercih Stratejisi İçin İpuçları",
        liste: [
          "Listenin üst sıralarına 'hayal' bölümlerini, orta sıralara gerçekçi hedefleri, alta garanti seçenekleri yaz.",
          "Sadece geçen yılın verisine değil, son 3 yılın başarı sırası eğilimine bak.",
          "Kontenjan artan bölümlerde sıralamanın gevşeyebileceğini, azalanlarda sıkılaşabileceğini unutma.",
        ],
      },
      {
        metin:
          "Netlerini artırmak taban puan tartışmalarından çok daha önemli. SınavHazırlık'taki YKS quizleriyle hangi derste kaç net yaptığını görebilir, tercih dönemine daha güçlü girebilirsin.",
      },
    ],
  },
  {
    slug: "ales-puan-hesaplama",
    baslik: "ALES Puanı Nasıl Hesaplanır? Kaç Net Kaç Puan Yapar?",
    aciklama:
      "ALES puan hesaplama mantığı, sayısal-sözel-eşit ağırlık puan türleri ve akademik başvurularda geçerli puanlar.",
    tarih: "2026-07-13",
    etiket: "ALES",
    okumaSuresi: "4 dk",
    bolumler: [
      {
        metin:
          "ALES (Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı); yüksek lisans, doktora ve akademik kadro başvurularında kullanılan temel sınavdır. Yılda üç kez yapılır ve sonuçlar açıklandığı tarihten itibaren 5 yıl geçerlidir.",
      },
      {
        baslik: "Sınavın Yapısı",
        liste: [
          "Sayısal bölüm: 50 soru (sayısal akıl yürütme, temel matematik, geometri)",
          "Sözel bölüm: 50 soru (sözel akıl yürütme, paragraf, anlam bilgisi)",
          "Toplam süre: 150 dakika",
          "Yanlışlar doğruları götürmez; 4 yanlış 1 doğruyu silmez, bu yüzden boş bırakma.",
        ],
      },
      {
        baslik: "Puan Türleri Nasıl Oluşur?",
        metin:
          "Ham puanlar, soruların zorluğuna göre standart puana çevrilir ve üç puan türü hesaplanır: Sayısal ağırlıklı (SAY), sözel ağırlıklı (SÖZ) ve eşit ağırlıklı (EA). Her puan türünde iki bölümün katkı oranı farklıdır; örneğin SAY puanında sayısal testin ağırlığı %75, sözel testin ağırlığı %25 civarındadır. Puanlar 100 üzerinden açıklanır.",
      },
      {
        baslik: "Başvurularda Kaç Puan Gerekir?",
        liste: [
          "Lisansüstü programların çoğu için alt sınır 55 puandır (üniversiteler daha yükseğini isteyebilir).",
          "Araştırma görevlisi kadroları için genellikle 70 ve üzeri puan istenir.",
          "Doçentlik başvurusu için ALES şartı aranmaz.",
        ],
      },
      {
        metin:
          "ALES'te başarının anahtarı hız ve soru aşinalığıdır. SınavHazırlık'taki ALES quizleriyle mantık ve problem sorularında pratiğini artırabilirsin.",
      },
    ],
  },
  {
    slug: "dgs-ile-hangi-bolumlere-gecilir",
    baslik: "DGS ile Hangi Bölümlere Geçilir? Dikey Geçiş Rehberi",
    aciklama:
      "DGS ile ön lisanstan lisansa geçiş nasıl yapılır? Hangi bölümden hangi lisans programlarına geçilebilir?",
    tarih: "2026-07-13",
    etiket: "DGS",
    okumaSuresi: "4 dk",
    bolumler: [
      {
        metin:
          "DGS (Dikey Geçiş Sınavı), ön lisans (2 yıllık) mezunlarının lisans (4 yıllık) programlarına geçiş yapmasını sağlayan sınavdır. Her yıl temmuz ayı civarında yapılır ve sayısal ile sözel yetenek sorularından oluşur.",
      },
      {
        baslik: "Hangi Bölüme Geçebilirim?",
        metin:
          "DGS'de her önlisans programının geçiş yapabileceği lisans bölümleri, ÖSYM'nin yayımladığı DGS kılavuzundaki tablolarla belirlenir. Yani istediğin her bölüme değil, mezun olduğun programla ilişkili bölümlere geçebilirsin. Örneğin:",
        liste: [
          "Bilgisayar Programcılığı → Bilgisayar Mühendisliği, Yazılım Mühendisliği, Yönetim Bilişim Sistemleri",
          "Muhasebe ve Vergi → İşletme, İktisat, Maliye",
          "Elektrik → Elektrik-Elektronik Mühendisliği",
          "Çocuk Gelişimi → Okul Öncesi Öğretmenliği, Çocuk Gelişimi (lisans)",
        ],
      },
      {
        baslik: "DGS Puanı Nasıl Hesaplanır?",
        liste: [
          "Sayısal ve sözel testlerdeki netlerden standart puanlar hesaplanır.",
          "Ön lisans başarı puanı (AGNO'dan hesaplanan ÖBP) puana eklenir.",
          "Sayısal, sözel ve eşit ağırlık puan türleri oluşturulur; her bölüm kendi puan türüyle öğrenci alır.",
        ],
      },
      {
        baslik: "Hazırlık İçin Öneriler",
        metin:
          "DGS'nin en belirleyici kısmı sayısal bölümdür; sorular ağırlıklı olarak temel matematik ve mantık üzerinedir. Uzun süre matematikten uzak kalan adayların temel konulardan başlaması gerekir. SınavHazırlık'taki DGS quizleriyle seviyeni ölçüp eksik konularını hemen görebilirsin.",
      },
    ],
  },
  {
    slug: "yds-kelime-ezberleme-teknikleri",
    baslik: "YDS Kelime Ezberleme Teknikleri: Kalıcı Öğrenmenin Yolları",
    aciklama:
      "YDS ve YÖKDİL için kelime nasıl ezberlenir? Aralıklı tekrar, bağlam yöntemi ve kelime çalışmasında yapılan hatalar.",
    tarih: "2026-07-13",
    etiket: "YDS",
    okumaSuresi: "5 dk",
    bolumler: [
      {
        metin:
          "YDS ve YÖKDİL'de başarının bel kemiği kelime bilgisidir. Sınavın paragraf, boşluk doldurma ve eş anlam sorularının neredeyse tamamı güçlü bir kelime dağarcığı gerektirir. Ancak çoğu aday kelimeleri liste halinde ezberlemeye çalıştığı için birkaç hafta içinde unutur. İşte kalıcı öğrenme için kanıtlanmış yöntemler:",
      },
      {
        baslik: "1. Aralıklı Tekrar (Spaced Repetition)",
        metin:
          "Beyin, bilgiyi unutmaya başladığı anda yapılan tekrarla çok daha kalıcı öğrenir. Yeni öğrendiğin kelimeyi 1 gün, 3 gün, 1 hafta ve 1 ay sonra tekrar et. Bu döngüyü uygulayan adaylar, düz tekrar yapanlara göre aynı sürede iki kata yakın kelime öğrenebilir.",
      },
      {
        baslik: "2. Bağlam İçinde Öğren",
        metin:
          "Kelimeyi tek başına değil, cümle içinde öğren. 'Comprehensive = kapsamlı' diye ezberlemek yerine 'The report provides a comprehensive analysis' cümlesini aklında tut. Sınavda kelimeler her zaman bağlam içinde karşına çıkar; bağlamla öğrenilen kelime sınav anında çok daha hızlı hatırlanır.",
      },
      {
        baslik: "3. Kelime Ailelerini Birlikte Çalış",
        metin:
          "Bir kelimenin isim, fiil ve sıfat hallerini birlikte öğren: analyze – analysis – analytical gibi. YDS'de aynı kökün farklı halleri sıkça sorulur ve bu yöntem tek çabayla üç kelime kazandırır.",
      },
      {
        baslik: "Sık Yapılan Hatalar",
        liste: [
          "Günde 100 kelime ezberleyip ertesi gün hiç tekrar etmemek",
          "Sadece Türkçe karşılık ezberleyip örnek cümle okumamak",
          "Çıkmış soru kelimelerini ihmal edip rastgele listelerle çalışmak",
          "Okuma pratiği yapmadan yalnızca kelime kartlarına güvenmek",
        ],
      },
      {
        metin:
          "Kelime bilgini test etmenin en iyi yolu soru çözmek. SınavHazırlık'taki YDS quizleriyle kelime ve okuma pratiğini bugün başlatabilirsin.",
      },
    ],
  },
];

export function yaziBul(slug: string): BlogYazi | undefined {
  return yazilar.find((y) => y.slug === slug);
}
