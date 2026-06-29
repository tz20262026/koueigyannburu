import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import KyoteiClient from "./KyoteiClient";
import { WebPageJsonLd, FaqJsonLd } from "@/components/JsonLd";
import KyoteiCalculator from "@/components/KyoteiCalculator";
import StrategyGuide from "@/components/StrategyGuide";

export const metadata: Metadata = {
  title: "競艇（ボートレース）予想・データ分析",
  description:
    "競艇（ボートレース）の全24場コースデータ・選手成績を分析。1コース勝率・水面条件で的中率UP。無料予想・SG情報も掲載。",
  keywords: ["競艇予想", "ボートレース", "競艇攻略", "1コース", "水面条件", "競艇データ", "ボートレース無料予想", "SG"],
  alternates: { canonical: "https://koueigyannburu.vercel.app/kyotei" },
  openGraph: {
    title: "競艇（ボートレース）予想・データ分析 | WINLAB",
    description: "競艇全24場コースデータ・選手成績を分析。1コース勝率・水面条件で的中率UP。",
    url: "https://koueigyannburu.vercel.app/kyotei",
    type: "website",
  },
};

const players = [
  { rank: 1, name: "峰竜太", class: "A1", pref: "佐賀", winRate: "35.2%", no: "3415" },
  { rank: 2, name: "白井英治", class: "A1", pref: "山口", winRate: "31.8%", no: "3492" },
  { rank: 3, name: "毒島誠", class: "A1", pref: "群馬", winRate: "30.4%", no: "4238" },
  { rank: 4, name: "辻栄蔵", class: "A1", pref: "広島", winRate: "29.7%", no: "3562" },
  { rank: 5, name: "平本真之", class: "A1", pref: "愛知", winRate: "28.5%", no: "4349" },
  { rank: 6, name: "桐生順平", class: "A1", pref: "埼玉", winRate: "27.9%", no: "4336" },
];

const tips = [
  { icon: "1️⃣", title: "1コース勝率を確認", desc: "競艇は1コース（イン）が最も有利。場ごとの1コース勝率をチェック" },
  { icon: "🌊", title: "水面・天候確認", desc: "海水面と淡水、追い風・向かい風でレース傾向が大きく変わる" },
  { icon: "⚙️", title: "モーター成績", desc: "モーターの2連率が高いと成績に直結。ボートの足色を要チェック" },
  { icon: "🏅", title: "選手クラス", desc: "A1・A2・B1・B2の4クラス。A1選手が出走するSGレースは格が違う" },
  { icon: "🎲", title: "展示タイム", desc: "本番直前の展示走行のタイムで当日の機力・選手の仕上がりを確認" },
  { icon: "📊", title: "コース別成績", desc: "選手によって得意・不得意コースが明確。過去のコース別成績は必須チェック" },
];

const relatedArticles = [
  {
    href: "/articles/kyotei-1course",
    title: "競艇1コース勝率の完全ガイド",
    desc: "全24場の1コース勝率データ・季節条件・効果的な馬券の組み方まで解説",
    tag: "基礎知識",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    time: "7分で読める",
  },
  {
    href: "/articles/kyotei-a1-players",
    title: "競艇A1選手ランキングの見方と狙い方",
    desc: "A1・A2・B1・B2の違い、選手ランキング確認方法、A1選手を軸にした戦略",
    tag: "選手データ",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "5分で読める",
  },
  {
    href: "/kyotei",
    title: "SGレースの見どころ・攻略法",
    desc: "競艇最高峰のSGレースはなぜ荒れる？A1選手の出走傾向を分析",
    tag: "攻略",
    tagColor: "bg-red-500/20 text-red-300",
    time: "7分で読める",
  },
  {
    href: "/kyotei",
    title: "大村ボートが1コース勝率No.1の理由",
    desc: "全国66%を誇る大村の水面特性と予想への活かし方",
    tag: "データ",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "5分で読める",
  },
  {
    href: "/kyotei",
    title: "モーター成績の見方と選び方のコツ",
    desc: "2連率・3連率・スタートタイムから良モーターを見極める方法",
    tag: "データ分析",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "6分で読める",
  },
  {
    href: "/kyotei",
    title: "競艇のオッズと舟券の還元率",
    desc: "2連単・3連単・ボックス買いの期待値計算と購入戦略",
    tag: "戦略",
    tagColor: "bg-green-500/20 text-green-300",
    time: "5分で読める",
  },
];

const qa = [
  {
    q: "競艇の舟券はどこで買えますか？",
    a: "全国のボートレース場・場外発売場（ボートピア）で購入できます。スマホからはboatracer（旧TELEBOAT）アプリでオンライン購入が可能。楽天Edyやクレジットカードでの入金にも対応しています。",
  },
  {
    q: "なぜ1コース（インコース）が有利なのですか？",
    a: "競艇は左回りで最初のターンマークが重要です。1コースはスタートラインに最も近く、第1ターンを最短距離で回れるため圧倒的に有利です。全国平均で1コースの1着率は55〜60%以上あります。",
  },
  {
    q: "競艇のグレードはどう分かれていますか？",
    a: "SG（最高峰）→G1→G2→G3→一般の順に格付けされます。SGは年6開催で最高賞金1億円以上。G1は年20回程度、各場で「周年記念」などで開催されます。",
  },
  {
    q: "競艇のモーターとは何ですか？",
    a: "競艇では選手全員が同じ規格のボートに乗りますが、モーター（エンジン）は抽選で割り当てられます。良いモーターを当てた選手は成績が上がりやすく、逆に悪いモーターだと実力がある選手でも苦戦します。",
  },
  {
    q: "展示タイムとは何ですか？",
    a: "本番レース直前に行われる練習走行（展示走行）のタイムです。直線を走るタイム（展示タイム）とターンの評価（展示ターン）から、当日の選手の仕上がりとモーターの調子を確認できます。",
  },
];

export default function KyoteiPage() {
  return (
    <div>
      <WebPageJsonLd
        name="競艇（ボートレース）予想・データ分析 | WINLAB"
        description="競艇全24場コースデータ・選手成績を分析。1コース勝率・水面条件で的中率UP。"
        url="https://koueigyannburu.vercel.app/kyotei"
      />
      <FaqJsonLd items={qa} />
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-cyan-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">⛵</span>
            <div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-2">初心者OK</Badge>
              <h1 className="text-4xl font-black text-white">競艇（ボートレース）<br className="sm:hidden" />予想・データ分析</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            全国24場・各場の水面特性と1コース勝率データで予想精度UP。
            選手クラスとモーター成績まで徹底分析。
          </p>
        </div>
      </section>

      {/* 予想ポイント */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">💡 競艇予想の6大ポイント</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {tips.map((t) => (
              <div key={t.title} className="p-4 rounded-xl border border-cyan-700/30 bg-gradient-to-br from-cyan-900/20 to-[#0f0f1a]">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{t.title}</h3>
                <p className="text-gray-400 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全国場別データ（タブ切り替え） */}
      <KyoteiClient />

      {/* 選手ランキング */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">👑 A1ランク選手TOP6</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((p) => (
              <Card key={p.name} className="bg-[#0f0f1a] border-white/10 hover:border-cyan-700/40 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-3xl font-black ${p.rank <= 3 ? "text-[#d4af37]" : "text-gray-500"}`}>
                      #{p.rank}
                    </span>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-0 text-xs">{p.class}</Badge>
                  </div>
                  <div className="text-xl font-black text-white mb-1">{p.name}</div>
                  <div className="text-gray-400 text-sm mb-3">{p.pref} · 登録{p.no}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">勝率</span>
                    <span className="text-[#d4af37] font-black text-lg">{p.winRate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 攻略コラム */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <StrategyGuide
            title="📖 競艇攻略コラム"
            accentColor="text-cyan-400"
            articles={[
              {
                title: "競艇は「1コース×良モーター」が最強の組み合わせ",
                tag: "基本",
                tagColor: "bg-cyan-500/20 text-cyan-300",
                summary: "競艇予想の出発点は1コース選手の確認。良モーターを引いた1コース選手はほぼ鉄板。この組み合わせを軸にした買い方を解説。",
                body: `全国平均で1コース選手の1着率は約55〜60%です。
つまり何も考えなくても半分以上のレースで1コースが勝つわけです。

そこに「良モーター（2連率40%以上）」が重なると：
- 1着率は65〜70%以上に跳ね上がります
- 配当は低くなりますが、1着固定フォーメーションで点数を絞れば回収率が上がります

◆ 実践的な使い方
① 出走表で1コース選手のモーター2連率を確認
② 40%以上なら1コース1着固定フォーメーション
③ 2・3着は2〜4コースの中からA1選手を選ぶ

これだけで「なんとなく買う」よりはるかに合理的な予想になります。

◆ 狙い目の場
大村（1コース勝率65%超）・常滑・津は特に1コースが強い。
逆に戸田・平和島は荒れやすく、1コース頼みは禁物。`,
              },
              {
                title: "展示タイムの読み方：ここを見るだけで当たりが変わる",
                tag: "データ",
                tagColor: "bg-blue-500/20 text-blue-300",
                summary: "本番直前の展示走行タイムは予想の精度を大きく左右する。見るべき数字と解釈の仕方をわかりやすく解説。",
                body: `展示タイムは本番前の練習走行を計測したタイムです。
数字が小さいほど速く、モーターの調子が良い証拠です。

◆ 展示タイムの目安（直線タイム）
- 6.7秒以下：超優秀モーター
- 6.8〜6.9秒：良好
- 7.0〜7.1秒：普通
- 7.2秒以上：要注意（調子が悪い可能性）

ただし、展示タイムだけで判断するのは危険です。

◆ セットで確認すること
① 展示ターン：ターン時の安定感・膨らみの有無
② スタートタイム：0.10〜0.18秒が理想。0.20以上はスロースタートの傾向
③ 前走成績：モーター替わりの有無、エンジン整備の内容

展示タイムが全選手の中で1番速い選手は「展示1位」と呼ばれ、
当日のトップフォーム選手として注目されます。

これを1コース選手以外が取っている場合、荒れるサインになります。`,
              },
              {
                title: "競艇で荒れやすいレースを見分ける5つの条件",
                tag: "穴狙い",
                tagColor: "bg-red-500/20 text-red-300",
                summary: "高配当を狙うなら「荒れる条件」を知ることが先決。1コース以外が来やすい状況をデータから読み解く。",
                body: `競艇は「1コースが来ない」＝荒れるサイン。
以下の条件が重なるほど高配当が出やすくなります。

◆ 荒れやすい条件5つ
① 1コース選手のモーター2連率が30%以下
  → 良いモーターが他のコースに集中している
② 1コース選手がB級（B1・B2）の格下選手
  → 格上の外コース選手に捲られやすい
③ 強風・波浪条件のとき
  → 技術力が高い選手が外コースから来やすい
④ 1コース選手のスタートタイムが0.25秒以上
  → スロースタートになりやすく、インの優位が消える
⑤ SG・G1などグレードが高いレース
  → 全選手がA1クラス以上で、格差が少ない

◆ 荒れるときの買い方
- 3連単で2〜4コースの選手を1着に置く
- 「2-1-3」「3-1-2」などの準人気ライン
- ボックスより1着固定フォーメーションの方がコスパ良い

荒れるかどうかの判断が正確になるほど、穴馬券の期待値が上がります。`,
              },
              {
                title: "「場のクセ」を覚えると予想の精度が劇的に上がる",
                tag: "上級",
                tagColor: "bg-purple-500/20 text-purple-300",
                summary: "全国24場それぞれに「クセ」がある。1コース有利な場・荒れやすい場・特定コースが強い場を覚えることが予想の近道。",
                body: `競艇は全国24場すべてでコースの癖が異なります。
この「場のクセ」を知るだけで予想精度が大幅に上がります。

◆ 1コース超強い（1着率60%以上）
大村・常滑・津・蒲郡
→ 1コース信頼で軸にする

◆ 荒れやすい（外コースが来やすい）
戸田・平和島・江戸川・多摩川
→ 1コース固定買いは危険。外から高配当を狙う

◆ 2コースが強い場
桐生・若松・芦屋
→ 1〜2コースのワンツーが多い。差しが出やすい

◆ 海水面（うねりが出やすい）
住之江・蒲郡・丸亀・多摩川
→ 天候・風向きによって大きくレース傾向が変わる

◆ 覚え方のコツ
最初は自分がよく予想する場を2〜3か所に絞り、
そこのデータを徹底的に記憶する方が効率的です。

「特定の場のスペシャリスト」として予想精度を高め、
合格した後で対象の場を広げていく方法が最も成功しやすいです。`,
              },
            ]}
          />
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ 競艇 よくある質問</h2>
          <GenreQA items={qa} accentColor="text-cyan-400" />
        </div>
      </section>

      {/* 舟券計算機 */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <KyoteiCalculator />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 競艇攻略コンテンツ" />

      <AffiliateSection genre="競艇" />
    </div>
  );
}
