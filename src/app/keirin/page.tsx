import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import KeirinClient from "./KeirinClient";
import { WebPageJsonLd, FaqJsonLd } from "@/components/JsonLd";
import BetCalculator from "@/components/BetCalculator";
import StrategyGuide from "@/components/StrategyGuide";

export const metadata: Metadata = {
  title: "競輪予想・データ分析",
  description:
    "競輪のグレードレース・選手データを徹底分析。ライン戦術・決まり手データで的中率UP。SS選手ランキング・ケイリングランプリ情報も掲載。",
  keywords: ["競輪予想", "競輪データ", "KEIRIN", "G1", "KEIRINグランプリ", "競輪攻略", "競輪無料予想", "SS選手"],
  alternates: { canonical: "https://koueigyannburu.vercel.app/keirin" },
  openGraph: {
    title: "競輪予想・データ分析 | WINLAB",
    description: "競輪のグレードレース・選手データを徹底分析。ライン戦術・決まり手データで的中率UP。",
    url: "https://koueigyannburu.vercel.app/keirin",
    type: "website",
  },
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
    href: "/articles/keirin-line-guide",
    title: "競輪ライン戦術入門：初心者が最初に覚えること",
    desc: "ライン（連携戦術）を理解するだけで予想精度が劇的に向上する",
    tag: "入門",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "7分で読める",
  },
  {
    href: "/articles/keirin-ss-player",
    title: "競輪SS選手の成績と狙い方",
    desc: "SSランクの意味・バンク別成績・ライン戦術との組み合わせを解説",
    tag: "選手データ",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    time: "6分で読める",
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
      <WebPageJsonLd
        name="競輪予想・データ分析 | WINLAB"
        description="競輪のグレードレース・選手データを徹底分析。ライン戦術・決まり手データで的中率UP。"
        url="https://koueigyannburu.vercel.app/keirin"
      />
      <FaqJsonLd items={qa} />
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

      {/* 攻略コラム */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <StrategyGuide
            title="📖 競輪攻略コラム"
            accentColor="text-blue-400"
            articles={[
              {
                title: "ライン戦術を読めば競輪の8割がわかる",
                tag: "基本",
                tagColor: "bg-blue-500/20 text-blue-300",
                summary: "競輪予想の核心はライン（地域連携）の読み方。どのラインが有利か、誰が番手か、展開はどうなるかを解説。",
                body: `競輪はチーム戦。同じ地域の選手が「ライン」を組んで連携します。

◆ ラインの基本構造
先行選手（前）- 番手選手（2番目）- 3番手選手（後ろ）

先行選手は風を切って前を走り、番手・3番手選手を有利にします。
その見返りとして、番手選手が終盤に先行選手の後ろから差して1着を狙います。

◆ 予想への活かし方
① ラインの強さを比較する
 - 3名のライン vs 2名のライン vs 単騎：3名ラインが有利
 - 先行選手の格（SS・S1・S2）が高いラインが有利
② 番手選手の「決まり手」を確認
 - 差しが多い番手選手 → 先行選手との連系が強い
 - 追込が多い → 後方から来ることが多い
③ ライン切れを見極める
 - 番手選手が動いた場合や展開が崩れた場合は荒れる可能性大

◆ 実践的な買い方
安定して稼ぐなら「強いライン内の1-2着固定」。
高配当を狙うなら「ライン崩壊 or 単騎選手が絡む」展開に期待する。`,
              },
              {
                title: "KEIRINグランプリの攻略法：年末最高峰の一戦の見方",
                tag: "SGレース",
                tagColor: "bg-red-500/20 text-red-300",
                summary: "競輪最高峰「KEIRINグランプリ」は毎年12月30日に立川競輪場で開催。9名のトップ選手が激突するこのレースの特徴と予想のポイントを解説。",
                body: `KEIRINグランプリ（KGP）は年間最高賞金3億円以上を誇る競輪最大のレース。
年間賞金上位9名と各グレードレース優勝者が参戦します。

◆ KGPの特徴
・全員がSS〜S1の実力者で、実力差が小さい
・全国から集まるため「ライン」が組みにくい単騎も多い
・単騎選手が中心に絡むことが多く、荒れやすい傾向

◆ 予想のポイント
① 単騎選手の実力と脚質を徹底チェック
 - 単騎でも勝てる「自力型」が荒らすことが多い
② 2選手の連携ラインを確認
 - 2名ラインが3名ラインに絡む展開が定番
③ 枠番・スタート位置
 - インを狙える選手がラインの先頭に立てるかが鍵

過去の優勝者：
2023年 古性優作（近畿）
2022年 古性優作（2連覇）
2021年 脇本雄太（北日本）

脇本・古性の2強が台頭しているが、毎年サプライズが起きるのがKGPの魅力。`,
              },
              {
                title: "バンク（競走路）別の攻略ポイント",
                tag: "場別",
                tagColor: "bg-amber-500/20 text-amber-300",
                summary: "競輪場によってバンクの周長・カントが異なり、有利な脚質が変わる。代表的な競輪場の特性をまとめて解説。",
                body: `競輪場のバンク（走路）は場所によって特性が異なります。
主な違いは「周長（1周の長さ）」と「カント（バンクの傾き）」です。

◆ 短走路（333m）：急カーブ・カント大
 → 捲りが出にくい、逃げ・差しが有利
 場所例：函館・松山・川崎

◆ 標準走路（400m）：バランス型
 → どの脚質も出やすい、最も多いタイプ
 場所例：平塚・松戸・岐阜

◆ 長走路（500m）：緩やかなカーブ
 → 捲りが出やすい、スピード型の選手に有利
 場所例：大垣・弥彦

◆ 実践への活かし方
① 捲りが得意な選手 × 長走路 → 信頼度UP
② 逃げが得意な選手 × 短走路 → 逃げ切りやすい
③ カントが高い場 → 差しが遅れやすい（外から追い込みにくい）

この情報を頭に入れると、同じ選手でも場所によって
「買える/買えない」の判断が変わります。`,
              },
            ]}
          />
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

      {/* 車券計算機 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-2xl mx-auto">
          <BetCalculator />
        </div>
      </section>

      <AffiliateSection genre="競輪" />
    </div>
  );
}
