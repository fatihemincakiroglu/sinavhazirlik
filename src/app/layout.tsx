// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sinavhazirlik.com.tr"),
  title: "SınavHazırlık — YKS, KPSS, ALES, DGS, YDS Online Deneme ve Quiz",
  description:
    "YKS, KPSS, ALES, DGS ve YDS/YÖKDİL sınavlarına online deneme ve quizlerle hazırlan. Netlerini gör, eksiklerini kapat.",
  authors: [
    { name: "Fatih Emin Çakıroğlu", url: "https://fatihemincakiroglu.com/" },
  ],
  creator: "Fatih Emin Çakıroğlu",
  publisher: "Fatih Emin Çakıroğlu",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
