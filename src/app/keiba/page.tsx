import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import KeibaClient from "./KeibaClient";

export const metadata: Metadata = {
  title: "競馬予想・データ分析",
  description:
    "JRA・地方競馬の最新オッズ・出走データを徹底分析。勝率UPのための競馬予想情報を無料提供。",
  keywords: ["競馬予想", "競馬データ", "JRA", "地方競馬", "オッズ", "競馬攻略"],
};

const relatedArticles = [
  {
    href: "/keiba",
    title: "競馬初心者が最初に覚えるべき5つの基本用語",
    desc: "単勝・複勝・馬連・馬単・3連複の違いを図解でわかりやすく解説",
    tag: "初心者",
    tagColor: "bg-emerald-500/20 text-emerald-300",
    time: "5分で読める",
  },
  {
    href: "/keiba",
    title: "JRAと地方競馬の違いを完全比較",
    desc: "中央競馬と地方競馬の開催日・売上・賞金・馬のレベルを徹底比較",
    tag: "基礎知識",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "7分で読める",
  },
  {
    href: "/keiba",
    title: "オッズの読み方と期待値計算の基本",
    desc: "オッズから回収率を計算する方法。長期的に勝つための数字の見方",
    tag: "データ分析",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "8分で読める",
  },
  {
    href: "/keiba",
    title: "騎手成績ランキングから軸馬を選ぶ方法",
    desc: "勝利数・勝率・回収率の3指標で騎手を評価する実践的手法",
    tag: "攻略",
    tagColor: "bg-red-500/20 text-red-300",
    time: "6分で読める",
  },
  {
    href: "/keiba",
    title: "馬場状態別の傾向と狙い目まとめ",
    desc: "良馬場・稍重・重・不良それぞれで有利になる馬のタイプを解説",
    tag: "データ分析",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "5分で読める",
  },
  {
    href: "/keiba",
    title: "G1レース歴代最高配当ランキングTOP10",
    desc: "あの大波乱はなぜ起きた？歴史に残る高配当レースを振り返る",
    tag: "データ",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "4分で読める",
  },
];

const qa = [
  {
    q: "競馬の馬券はどこで買えますか？",
    a: "JRAの競馬場・場外馬券売り場（ウインズ）のほか、スマホアプリ「JRA-PAT」「SPAT4」でオンライン購入が可能です。地方競馬はオッズパーク・楽天競馬などのサービスを利用できます。",
  },
  {
    q: "単勝と複勝の違いを教えてください",
    a: "単勝は1着になる馬を当てる馬券（1着のみ的中）、複勝は3着以内に入る馬を当てる馬券です。複勝は的中しやすい分、配当が低くなります。初心者には複勝から始めることをおすすめします。",
  },
  {
    q: "1番人気の馬はどのくらいの確率で勝ちますか？",
    a: "JRAの過去データでは1番人気の勝率は約33%です。3頭に1頭は1番人気が勝つ計算ですが、残りの2/3は2番人気以下が勝ちます。人気上位3頭の複勝率は約65%です。",
  },
  {
    q: "G1レースとG2・G3の違いは何ですか？",
    a: "グレードは競走の格付けです。G1が最高峰で賞金・格も最上位（安田記念・日本ダービーなど）。G2はその次、G3は格付け最下位のグレードレースです。G1ほど強い馬が集まります。",
  },
  {
    q: "競馬の還元率（払戻率）はどのくらいですか？",
    a: "JRAの場合、単勝・複勝は80%、馬連・馬単・ワイドは77.5%、3連複・3連単は72.5%が還元されます。残りは国庫・地方公共団体・JRA運営費に充てられます。",
  },
  {
    q: "地方競馬のナイターレースはいつ開催されますか？",
    a: "大井競馬（TCK）は毎週水・木・金・土曜日の夜間開催が基本。川崎・浦和・船橋も夜間開催あり。南関東四場（大井・川崎・浦和・船橋）は特に充実しています。",
  },
];

export default function KeibaPage() {
  return (
    <div>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-emerald-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🐎</span>
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-2">最人気ジャンル</Badge>
              <h1 className="text-4xl font-black text-white">競馬予想・データ分析</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            JRA（日本中央競馬会）・地方競馬のオッズ・出走データを徹底分析。
            プロも使うデータ指標で勝率を飛躍的にアップさせよう。
          </p>
        </div>
      </section>

      {/* クライアントコンポーネント（タブ・テーブル展開） */}
      <KeibaClient />

      {/* Q&A */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ 競馬 よくある質問</h2>
          <GenreQA items={qa} accentColor="text-emerald-400" />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 競馬攻略コンテンツ" />

      <AffiliateSection genre="競馬" />
    </div>
  );
}
