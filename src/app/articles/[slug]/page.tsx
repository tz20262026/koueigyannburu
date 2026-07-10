import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import AffiliateSection from "@/components/AffiliateSection";
import { articles, getArticleBySlug } from "@/lib/articles";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://koueigyannburu.vercel.app/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | WINLAB`,
      description: article.description,
      url: `https://koueigyannburu.vercel.app/articles/${article.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | WINLAB`,
      description: article.description,
    },
  };
}

const colorMap: Record<string, { border: string; text: string; bg: string; badge: string }> = {
  emerald: {
    border: "border-emerald-700/40",
    text: "text-emerald-400",
    bg: "from-emerald-950 to-[#08080f]",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  cyan: {
    border: "border-cyan-700/40",
    text: "text-cyan-400",
    bg: "from-cyan-950 to-[#08080f]",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  blue: {
    border: "border-blue-700/40",
    text: "text-blue-400",
    bg: "from-blue-950 to-[#08080f]",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  orange: {
    border: "border-orange-700/40",
    text: "text-orange-400",
    bg: "from-orange-950 to-[#08080f]",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  purple: {
    border: "border-purple-700/40",
    text: "text-purple-400",
    bg: "from-purple-950 to-[#08080f]",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const colors = colorMap[article.genreColor] ?? colorMap.emerald;

  const faqItems = article.sections.map((s) => ({
    q: s.heading,
    a: s.body.replace(/\n/g, " ").slice(0, 200),
  }));

  return (
    <div className="min-h-screen">
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        url={`https://koueigyannburu.vercel.app/articles/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "トップ", url: "https://koueigyannburu.vercel.app" },
          { name: article.genreLabel, url: `https://koueigyannburu.vercel.app${article.genreHref}` },
          { name: article.title, url: `https://koueigyannburu.vercel.app/articles/${article.slug}` },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* パンくず */}
      <div className="px-4 py-3 border-b border-white/10 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">トップ</Link>
          <span>›</span>
          <Link href={article.genreHref} className="hover:text-white transition-colors">
            {article.genreLabel}
          </Link>
          <span>›</span>
          <span className="text-gray-300 truncate">{article.title}</span>
        </div>
      </div>

      {/* ヒーロー */}
      <section className={`bg-gradient-to-br ${colors.bg} py-12 px-4 border-b border-white/10`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className={`${article.tagBg} ${article.tagText} border-0`}>{article.tag}</Badge>
            <span className="text-gray-300 text-sm">📖 {article.readTime}で読める</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
            {article.description}
          </p>
        </div>
      </section>

      {/* 記事本文 */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {article.sections.map((section, i) => (
            <div key={i} className={`border-l-2 ${colors.border} pl-5`}>
              <h2 className={`text-xl font-black ${colors.text} mb-3`}>{section.heading}</h2>
              <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </div>
          ))}

          {/* ポイントまとめ */}
          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/5 p-6">
            <h2 className="text-lg font-black text-[#d4af37] mb-4">✅ この記事のポイントまとめ</h2>
            <ul className="space-y-2">
              {article.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="text-[#d4af37] shrink-0 mt-0.5">▶</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 勝負運CTA（収益化導線） */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#1a1030] to-[#0f0f1a] p-6 text-center">
            <p className="text-white font-black text-lg mb-2">🔮 データの次は「運」も味方につけよう</p>
            <p className="text-gray-300 text-sm mb-4">
              大勝負の前に勝負運・金運をプロの占い師に相談する人が増えています。初回無料で試せるサービスをまとめました。
            </p>
            <a
              href="#recommend"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gold-gradient text-black font-black text-sm hover:opacity-90 transition-opacity"
            >
              初回無料の占いサービスを見る ↓
            </a>
          </div>

          {/* ジャンルに戻るCTA */}
          <div className="text-center py-4">
            <Link
              href={article.genreHref}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border ${colors.border} ${colors.text} hover:bg-white/5 transition-colors font-bold`}
            >
              ← {article.genreLabel}のデータページへ戻る
            </Link>
          </div>
        </div>
      </article>

      {/* アフィリエイト */}
      <div className="bg-[#0a0a14] border-t border-white/10">
        <AffiliateSection genre={article.genre} />
      </div>

      {/* 関連記事（同ジャンル） */}
      <RelatedGenreArticles currentSlug={article.slug} genre={article.genre} genreLabel={article.genreLabel} genreHref={article.genreHref} />
    </div>
  );
}

function RelatedGenreArticles({
  currentSlug,
  genre,
  genreLabel,
  genreHref,
}: {
  currentSlug: string;
  genre: string;
  genreLabel: string;
  genreHref: string;
}) {
  const related = articles.filter((a) => a.genre === genre && a.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-black text-white mb-6">
          📰 {genreLabel}の関連記事
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`}>
              <div className="h-full p-4 rounded-xl border border-white/10 bg-[#0f0f1a] hover:border-[#d4af37]/30 transition-all group">
                <Badge className={`${a.tagBg} ${a.tagText} border-0 text-xs mb-2`}>{a.tag}</Badge>
                <h3 className="text-white font-bold text-sm group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-gray-300 text-xs mt-2">📖 {a.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href={genreHref} className="text-[#d4af37] text-sm hover:underline">
            {genreLabel}のデータページへ →
          </Link>
        </div>
      </div>
    </section>
  );
}
