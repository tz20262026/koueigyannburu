import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koueigyannburu.vercel.app"),
  title: {
    default: "WINLAB｜公営ギャンブル予想・データ分析",
    template: "%s | WINLAB",
  },
  description:
    "競馬・競輪・競艇・オートレース・宝くじの予想データ分析サイト。勝率UPに役立つ情報を徹底解説。",
  keywords: [
    "公営ギャンブル",
    "競馬予想",
    "競輪予想",
    "競艇予想",
    "オートレース予想",
    "宝くじ当選番号",
    "ロト6",
    "ロト7",
    "データ分析",
    "競馬オッズ",
    "競艇予想無料",
    "競輪予想",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "WINLAB｜公営ギャンブル予想・データ分析",
    description:
      "競馬・競輪・競艇・オートレース・宝くじの予想データ分析サイト。勝率UPに役立つ情報を徹底解説。",
    type: "website",
    locale: "ja_JP",
    url: "https://koueigyannburu.vercel.app",
    siteName: "WINLAB",
  },
  twitter: {
    card: "summary_large_image",
    title: "WINLAB｜公営ギャンブル予想・データ分析",
    description:
      "競馬・競輪・競艇・オートレース・宝くじの予想データ分析サイト。勝率UPに役立つ情報を徹底解説。",
    creator: "@Ryokox70",
  },
  alternates: {
    canonical: "https://koueigyannburu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08080f]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
