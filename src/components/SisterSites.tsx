// 姉妹サイト相互リンク（回遊 & クローラーの巡回導線）
// 自分自身（SELF_URL）は一覧から自動的に除外する。
// rel="nofollow" は付けない（自サイト同士なので SEO 評価を渡したい）。

type SisterSite = {
  /** サイト名 */
  name: string;
  /** 本番URL */
  url: string;
  /** 一言説明 */
  description: string;
};

/** このサイト自身のURL（一覧から除外するために使う） */
const SELF_URL = "https://koueigyannburu.vercel.app";

/** 運営中の全サイト一覧 */
const ALL_SITES: SisterSite[] = [
  { name: "AI News Japan", url: "https://ai-news-site-wheat.vercel.app", description: "AIの最新ニュースを日本語で毎日配信" },
  { name: "Beauty Tech Japan", url: "https://beauty-tech-japan.vercel.app", description: "海外の美容・コスメ最新トレンド" },
  { name: "暴露仙人のAI占い", url: "https://fortune-site-neon.vercel.app", description: "AIが本音で告げる無料占い・相性診断" },
  { name: "副業タイプ診断AI", url: "https://fukugyou-shindan-eosin.vercel.app", description: "あなたに合う副業を3分で診断" },
  { name: "YouTube伸びない原因診断", url: "https://youtubecons.vercel.app", description: "伸びない原因をAIが診断" },
  { name: "おつまみペアリング研究所", url: "https://otsumami.vercel.app", description: "お酒とおつまみの組み合わせ" },
  { name: "映画レビューDB", url: "https://movie2026.vercel.app", description: "名作映画のレビュー・検索" },
  { name: "金銀相場ナビ", url: "https://kingin-souba.vercel.app", description: "金・銀のリアルタイム相場" },
  { name: "ふるさと納税定期便", url: "https://furusato-teikibin.vercel.app", description: "定期便のふるさと納税ガイド" },
  { name: "新生活家電ガイド", url: "https://shinseikatsu-kaden.vercel.app", description: "一人暮らしの家電選び" },
  { name: "サンゴボディケア", url: "https://sango-bodycare.vercel.app", description: "産後のボディケア" },
  { name: "沖縄県立高校受験", url: "https://jyuken.vercel.app", description: "沖縄の高校受験情報" },
  { name: "公営ギャンブル入門", url: "https://koueigyannburu.vercel.app", description: "競馬・競艇などの基礎知識" },
  { name: "沖縄不動産", url: "https://realestate-ivory.vercel.app", description: "沖縄の不動産情報" },
  { name: "PlanGenius AI", url: "https://plangenius-ai.vercel.app", description: "AI事業計画書ジェネレーター" },
];

export default function SisterSites() {
  const sites = ALL_SITES.filter((site) => site.url !== SELF_URL);

  return (
    <section aria-labelledby="sister-sites-heading" className="border-t border-white/10 pt-8 mb-8">
      <h2 id="sister-sites-heading" className="text-white font-semibold mb-1">
        姉妹サイト
      </h2>
      <p className="text-gray-300 text-xs mb-4">
        同じ運営者がお届けしている他のサイトです。あわせてご覧ください。
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {sites.map((site) => (
          <li key={site.url}>
            <a
              href={site.url}
              className="block h-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-[#d4af37]"
            >
              <span className="block text-sm font-bold text-white">{site.name}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-gray-300">{site.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
