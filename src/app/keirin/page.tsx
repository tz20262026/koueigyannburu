import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import KeirinClient from "./KeirinClient";

export const metadata: Metadata = {
  title: "競輪予想・データ分析",
  description:
    "競輪のグレードレース・選手データを徹底分析。ライン戦術・決まり手データで的中率UP。",
  keywords: ["競輪予想", "競輪データ", "KEIRIN", "G1", "KEIRINグランプリ", "競輪攻略"],
};

const kettei = [
  { name: "逃げ", pct: "28%", desc: "先頭でゴールまで逃げ切る", icon: "🏃" },
  { name: "捲り", pct: "22%", desc: "後方から外を回って先頭へ", icon: "🌀" },
  { name: "差し", pct: "31%", desc: "マークして直線で差す", icon: "⚡" },
  { name: "追込", pct: "15%", desc: "後方で展開を待ち追い込む", icon: "🎯" },
  { name: "恵まれ", pct: "4%", desc: "前の選手の落車などで繰り上がり", icon: "🍀" },
];

const lineStrategy = [
  { region: "関東", reps: "眞杉・平原・和田", color: "bg-blue-500/20 text-blue-300" },
  { region: "南関東", reps: "郡司・山中・和田健", color: "bg-cyan-500/20 text-cyan-300" },
  { region: "北日本", reps: "脇本・新田・守沢", color: "bg-red-500/20 text-red-300" },
  { region: "中部", reps: "深谷・山口・大石", color: "bg-orange-500/20 text-orange-300" },
  { region: "近畿", reps: "古性・三谷・南潤", color: "bg-purple-500/20 text-purple-300" },
  { region: "中四国", reps: "松浦・清水・桑原", color: "bg-emerald-500/20 text-emerald-300" },
  { region: "九州", reps: "中川誠一郎・荒井崇博", color: "bg-yellow-500/20 text-yellow-300" },
];

const relatedArticles = [
  {
    href: "/keirin",
    title: "競輪のライン戦術を完全理解する",
    desc: "地域ラインとは何か？連携・切り・捲りの展開を読む基本戦術",
    tag: "戦術",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "8分で読める",
  },
  {
    href: "/keirin",
    title: "SSランクとS1・A1クラスの違いを解説",
    desc: "競輪選手のクラス分けの仕組みと各クラスのレースへの影響",
    tag: "基礎知識",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    time: "5分で読める",
  },
  {
    href: "/keirin",
    title: "決まり手データから狙い目を探す方法",
    desc: "逃げ・捲り・差しの決まり手別発生率を活用した予想法",
    tag: "データ",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "6分で読める",
  },
  {
    href: "/keirin",
    title: "KEIRINグランプリ歴代優勝者と回顧",
    desc: "競輪最高峰の一戦。過去の名勝負を振り返りトレンドを掴む",
    tag: "歴史",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "7分で読める",
  },
  {
    href: "/keirin",
    title: "競輪場別の特徴と攻略ポイント一覧",
    desc: "バンク周長・カントの違いで変わる有利不利を徹底解説",
    tag: "攻略",
    tagColor: "bg-red-500/20 text-red-300",
    time: "10分で読める",
  },
  {
    href: "/keirin",
    title: "競輪の車券種類と初心者向け買い方ガイド",
    desc: "単勝・2車単・2車複・3連単・3連複の特徴と狙い目",
    tag: "初心者",
    tagColor: "bg-green-500/20 text-green-300",
    time: "5分で読める",
  },
];

const qa = [
  {
    q: "競輪の車券はどこで購入できますか？",
    a: "競輪場・場外車券売り場（サテライト）のほか、インターネット（楽天Kドリームス・K-NET）で24時間購入可能です。PayPay残高でも購入できるサービスもあります。",
  },
  {
    q: "ラインとは何ですか？なぜ協力するのですか？",
    a: "競輪では同じ地域の選手が連携してレースを進める「ライン」を組みます。先頭選手が風を受ける役割（番手・追込選手を引き付け有利に）を担うため、地域ラインで協力し合います。",
  },
  {
    q: "競輪の還元率（払戻率）を教えてください",
    a: "競輪の払戻率は車券の種類によって異なります。2車単・2車複は75%、3連単・3連複は72.5%が基本です。KEIRINグランプリなど特別なレースでは若干異なる場合があります。",
  },
  {
    q: "SSランク選手とS1・A1の違いは何ですか？",
    a: "競輪選手は能力に応じてSSからA3まで9段階に格付けされます。SSは最上位クラスで全国の精鋭約30名。G1レースはSSとS1選手が中心。S2・A1以下はGⅢや一般戦に出走します。",
  },
  {
    q: "競輪の開催日程はどうやって調べますか？",
    a: "JKAの公式サイトやkeirin.jpで全国の開催スケジュールを確認できます。競輪場ごとに開催日が異なり、G1やGPは事前にスケジュールが公表されます。",
  },
];

export default function KeirinPage() {
  return (
    <div>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-blue-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🚴</span>
            <div>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-2">高配当</Badge>
              <h1 className="text-4xl font-black text-white">競輪予想・データ分析</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            競輪はライン戦術とグレードが勝負の鍵。SS選手のデータから
            決まり手・ライン構成を徹底分析して高配当を狙え。
          </p>
        </div>
      </section>

      {/* タブ（グレード×選手） */}
      <KeirinClient />

      {/* 決まり手 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">⚡ 決まり手データ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {kettei.map((k) => (
              <Card key={k.name} className="bg-[#0a0a14] border-white/10 text-center">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{k.icon}</div>
                  <div className="text-white font-black text-lg">{k.name}</div>
                  <div className="text-[#d4af37] font-black text-xl mt-1">{k.pct}</div>
                  <p className="text-gray-500 text-xs mt-2">{k.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ライン戦術 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">🗺️ 地域ライン構成</h2>
          <p className="text-gray-400 text-sm mb-6">競輪は同じ地域の選手が連携して走るライン戦術が重要</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {lineStrategy.map((l) => (
              <div key={l.region} className="p-4 rounded-xl border border-white/10 bg-[#0f0f1a]">
                <Badge className={`${l.color} border-0 mb-2`}>{l.region}ライン</Badge>
                <p className="text-gray-300 text-sm">{l.reps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ 競輪 よくある質問</h2>
          <GenreQA items={qa} accentColor="text-blue-400" />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 競輪攻略コンテンツ" />

      <AffiliateSection genre="競輪" />
    </div>
  );
}
