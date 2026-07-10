import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Article {
  href: string;
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  time: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

export default function RelatedArticles({
  articles,
  title = "📚 関連記事・攻略コンテンツ",
}: RelatedArticlesProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <Link key={a.href} href={a.href}>
              <div className="h-full p-5 rounded-xl border border-white/10 bg-[#0f0f1a] hover:border-[#d4af37]/40 hover:bg-[#0f0f22] transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${a.tagColor} border-0 text-xs`}>{a.tag}</Badge>
                  <span className="text-gray-300 text-xs">{a.time}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#d4af37] transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">{a.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-[#d4af37] text-xs">
                  <span>続きを読む</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
