import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import AutoraceClient from "./AutoraceClient";

export const metadata: Metadata = {
  title: "オートレース予想・データ分析",
  description:
    "オートレースの選手データ・機力分析。穴狙いで高配当を狙う攻略法を徹底解説。",
  keywords: ["オートレース予想", "オートレースデータ", "オート攻略", "穴狙い", "オートレース選手"],
};

const stadiums = [
  { name: "伊勢崎", pref: "群馬", feature: "本場SGが多い", nights: "夜開催あり", active: true },
  { name: "川口", pref: "埼玉", feature: "関東の中心", nights: "夜開催メイン", active: true },
  { name: "浜松", pref: "静岡", feature: "西の中心", nights: "昼・夜両方", active: true },
  { name: "山陽", pref: "岡山", feature: "西日本唯一", nights: "夜開催メイン", active: true },
  { name: "飯塚", pref: "福岡", feature: "九州の雄", nights: "昼開催メイン", active: true },
];

const points = [
  { icon: "⚙️", title: "機力（エンジン）", desc: "エンジン成績が最重要。試走タイムと2連率をチェック" },
  { icon: "📍", title: "枠番（インが有利）", desc: "内枠ほど有利。1・2枠の選手を中心に軸を決める" },
  { icon: "⛅", title: "天候・気温", desc: "気温が高いとエンジンパワーが上がる。夏場は成績安定" },
  { icon: "🔄", title: "周回数", desc: "通常6周。後半ほど上位選手の優位が崩れにくい" },
  { icon: "📏", title: "試走タイム", desc: "本番前の試走タイムで当日のエンジン状態を把握する" },
  { icon: "📈", title: "前走データ", desc: "直前の成績・乗り方から選手の調子と意欲を分析" },
];

const relatedArticles = [
  {
    href: "/autorace",
    title: "オートレース完全入門：基本ルールと賭け方",
    desc: "オートレースの仕組み・車券の種類・購入方法を初心者向けに解説",
    tag: "初心者",
    tagColor: "bg-orange-500/20 text-orange-300",
    time: "8分で読める",
  },
  {
    href: "/autorace",
    title: "エンジン（機力）の見方と選手への影響",
    desc: "オートレースはエンジン8割・選手2割。試走タイムの読み方を解説",
    tag: "分析",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "6分で読める",
  },
  {
    href: "/autorace",
    title: "青山周平の強さの秘密とデータ分析",
    desc: "絶対王者・青山周平の成績データと必勝パターンを徹底分析",
    tag: "選手",
    tagColor: "bg-red-500/20 text-red-300",
    time: "7分で読める",
  },
  {
    href: "/autorace",
    title: "5場それぞれの特徴と攻略法",
    desc: "伊勢崎・川口・浜松・山陽・飯塚の水面特性と穴の出やすさ",
    tag: "攻略",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "9分で読める",
  },
  {
    href: "/autorace",
    title: "オートレースで高配当が出やすい条件",
    desc: "雨・低気温・上位選手の機力不調時に穴が出やすい理由を解説",
    tag: "穴狙い",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "5分で読める",
  },
  {
    href: "/autorace",
    title: "オートレースSGレース一覧と開催場",
    desc: "日本選手権・スーパーレース・全日本選手権の格付けと賞金一覧",
    tag: "レース情報",
    tagColor: "bg-green-500/20 text-green-300",
    time: "4分で読める",
  },
];

const qa = [
  {
    q: "オートレースはどこで見られますか？購入もできますか？",
    a: "全国5場（伊勢崎・川口・浜松・山陽・飯塚）の競走場で観戦・購入できます。インターネットでは「オッズパーク」「SPAT4」などで車券購入が可能。スマホでライブ映像も視聴できます。",
  },
  {
    q: "試走タイムとは何ですか？",
    a: "本番レース前に行われる試走（練習走行）のタイムです。1周のタイムを計測し、タイムが速いほどエンジンの調子が良い証拠です。競輪でいうモーター成績に相当し、予想の最重要指標です。",
  },
  {
    q: "オートレースで穴が出やすい条件は？",
    a: "雨天時・低気温時（エンジン特性が変わる）、上位選手のエンジンが不調な時、内枠の実力者が外枠からのスタートになった場合などです。気象条件は予想の大きな変数になります。",
  },
  {
    q: "オートレースの還元率を教えてください",
    a: "オートレースの払戻率は車券の種類によって異なります。単勝は75%、2車単・2車複は72%、3連単・3連複は70%程度です。他の公営ギャンブルと比べると還元率がやや低めです。",
  },
  {
    q: "川崎競輪場が廃止されたと聞きましたが、オートレースも廃止はありますか？",
    a: "かつては全国7場ありましたが、川崎（2024年廃止）により現在5場となりました。残る5場は現在も継続して開催中です。廃止には自治体の財政や観客動員数が影響します。",
  },
];

export default function AutoracePage() {
  return (
    <div>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-orange-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🏎️</span>
            <div>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-2">穴狙い</Badge>
              <h1 className="text-4xl font-black text-white">オートレース<br className="sm:hidden" />予想・データ分析</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            日本唯一の公営オートレース。エンジン＝機力が勝敗の8割を決める。
            試走タイムと選手クラスで高配当を狙え。
          </p>
        </div>
      </section>

      {/* 予想ポイント */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🔑 オートレース予想の6つの鍵</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {points.map((p) => (
              <div key={p.title} className="p-4 rounded-xl border border-orange-700/30 bg-gradient-to-br from-orange-900/20 to-[#0f0f1a]">
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{p.title}</h3>
                <p className="text-gray-400 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選手・グレードタブ */}
      <AutoraceClient />

      {/* 競走場 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">🏁 全国オートレース場（現在5場）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stadiums.map((s) => (
              <Card key={s.name} className="border border-orange-700/30 hover:border-orange-500/50 bg-[#0a0a14] transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-black text-white">{s.name}</h3>
                    <Badge className="bg-white/10 text-gray-400 border-0 text-xs">{s.pref}</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{s.feature}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 text-xs">🌙</span>
                    <span className="text-gray-300 text-xs">{s.nights}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ オートレース よくある質問</h2>
          <GenreQA items={qa} accentColor="text-orange-400" />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 オートレース攻略コンテンツ" />

      <AffiliateSection />
    </div>
  );
}
