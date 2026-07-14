import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AffiliateSection from "@/components/AffiliateSection";
import MoshimoSection from "@/components/MoshimoSection";
import { articles } from "@/lib/articles";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "攻略記事一覧｜競馬・競輪・競艇・オートレース・宝くじ",
  description:
    "公営ギャンブルの攻略記事を全ジャンルまとめて掲載。騎手データ・モーター成績・ライン戦術・ロト6ホット数字など、勝率UPに役立つ実践的な記事一覧。",
  alternates: { canonical: "https://koueigyannburu.vercel.app/articles" },
  openGraph: {
    title: "攻略記事一覧 | WINLAB",
    description:
      "公営ギャンブルの攻略記事を全ジャンルまとめて掲載。勝率UPに役立つ実践的な記事一覧。",
    url: "https://koueigyannburu.vercel.app/articles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "攻略記事一覧 | WINLAB",
    description:
      "公営ギャンブルの攻略記事を全ジャンルまとめて掲載。勝率UPに役立つ実践的な記事一覧。",
  },
};

const genreOrder = [
  { genre: "keiba", label: "🐎 競馬", href: "/keiba" },
  { genre: "keirin", label: "🚴 競輪", href: "/keirin" },
  { genre: "kyotei", label: "⛵ 競艇", href: "/kyotei" },
  { genre: "autorace", label: "🏎️ オートレース", href: "/autorace" },
  { genre: "takarakuji", label: "🎯 宝くじ・LOTO", href: "/takarakuji" },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      <WebPageJsonLd
        name="攻略記事一覧 | WINLAB"
        description="公営ギャンブルの攻略記事を全ジャンルまとめて掲載。勝率UPに役立つ実践的な記事一覧。"
        url="https://koueigyannburu.vercel.app/articles"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "トップ", url: "https://koueigyannburu.vercel.app" },
          { name: "攻略記事一覧", url: "https://koueigyannburu.vercel.app/articles" },
        ]}
      />

      {/* パンくず */}
      <div className="px-4 py-3 border-b border-white/10 bg-[#0a0a14]">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">トップ</Link>
          <span>›</span>
          <span className="text-white">攻略記事一覧</span>
        </div>
      </div>

      {/* ヒーロー */}
      <section className="hero-gradient py-14 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            📚 公営ギャンブル攻略記事一覧
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            競馬・競輪・競艇・オートレース・宝くじの実践的な攻略記事を全ジャンルまとめました。<br />
            データで勝率を上げたい人のための保存版コンテンツです。
          </p>
        </div>
      </section>

      {/* ジャンル別記事一覧 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {genreOrder.map((g) => {
            const genreArticles = articles.filter((a) => a.genre === g.genre);
            if (genreArticles.length === 0) return null;
            return (
              <div key={g.genre}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <h2 className="text-xl font-black text-white">{g.label}の攻略記事</h2>
                  <Link href={g.href} className="text-[#d4af37] text-sm hover:underline">
                    {g.label.replace(/^\S+\s/, "")}のデータページへ →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {genreArticles.map((a) => (
                    <Link key={a.slug} href={`/articles/${a.slug}`}>
                      <div className="h-full p-5 rounded-xl border border-white/10 bg-[#0f0f1a] hover:border-[#d4af37]/40 transition-all group">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${a.tagBg} ${a.tagText} border-0 text-xs`}>{a.tag}</Badge>
                          <span className="text-gray-300 text-xs">📖 {a.readTime}で読める</span>
                        </div>
                        <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#d4af37] transition-colors">
                          {a.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{a.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* アフィリエイト */}
      <div className="bg-[#0f0f1a]">
        <AffiliateSection />
        <MoshimoSection />
      </div>
    </div>
  );
}
