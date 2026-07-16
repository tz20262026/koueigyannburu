import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import AutoraceClient from "./AutoraceClient";
import { WebPageJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import BetCalculator from "@/components/BetCalculator";
import StrategyGuide from "@/components/StrategyGuide";

export const metadata: Metadata = {
  title: "オートレース予想・データ分析",
  description:
    "オートレースの選手データ・機力（エンジン）分析。穴狙いで高配当を狙う攻略法を徹底解説。伊勢崎・浜松・川口・飯塚・山陽の全5場対応。",
  keywords: ["オートレース予想", "オートレースデータ", "オート攻略", "穴狙い", "オートレース選手", "伊勢崎オートレース", "機力分析"],
  alternates: { canonical: "https://koueigyannburu.vercel.app/autorace" },
  openGraph: {
    title: "オートレース予想・データ分析 | WINLAB",
    description: "オートレース選手データ・機力分析。穴狙いで高配当を狙う攻略法を徹底解説。",
    url: "https://koueigyannburu.vercel.app/autorace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "オートレース予想・データ分析 | WINLAB",
    description: "オートレース選手データ・機力分析。穴狙いで高配当を狙う攻略法を徹底解説。",
  },
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
    href: "/articles/autorace-engine",
    title: "オートレース機力（エンジン）の見方と狙い方",
    desc: "試走タイムの読み方・エンジン成績・気象条件との関係を徹底解説",
    tag: "予想ポイント",
    tagColor: "bg-orange-500/20 text-orange-300",
    time: "6分で読める",
  },
  {
    href: "/articles/autorace-beginner-guide",
    title: "オートレース完全入門：基本ルールと賭け方",
    desc: "オートレースの仕組み・車券の種類・購入方法を初心者向けに解説",
    tag: "初心者",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "8分で読める",
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
    href: "/articles/autorace-sg-races",
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
      <BreadcrumbJsonLd
        items={[
          { name: "トップ", url: "https://koueigyannburu.vercel.app" },
          { name: "オートレース", url: "https://koueigyannburu.vercel.app/autorace" },
        ]}
      />
      <WebPageJsonLd
        name="オートレース予想・データ分析 | WINLAB"
        description="オートレース選手データ・機力分析。穴狙いで高配当を狙う攻略法を徹底解説。"
        url="https://koueigyannburu.vercel.app/autorace"
      />
      <FaqJsonLd items={qa} />
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
                <p className="text-gray-300 text-xs">{p.desc}</p>
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
                    <Badge className="bg-white/10 text-gray-300 border-0 text-xs">{s.pref}</Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{s.feature}</p>
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

      {/* 攻略コラム */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <StrategyGuide
            title="📖 オートレース攻略コラム"
            accentColor="text-orange-400"
            articles={[
              {
                title: "試走タイムで機力（エンジン）を判断する方法",
                tag: "基本",
                tagColor: "bg-orange-500/20 text-orange-300",
                summary: "オートレース予想の最重要指標「試走タイム」。数字の読み方と他選手との比較方法を初心者向けに解説。",
                body: `オートレースでは本番前に試走（試験走行）が行われ、そのタイムが予想の最大指標になります。

◆ 試走タイムの目安（1周タイム）
各場・気温によって異なりますが、一般的に：
- 他選手より0.1秒以上速い → 絶好調の機力
- 平均タイム前後 → 標準的な機力
- 他選手より0.2秒以上遅い → 機力不良の可能性

◆ タイムと順位の両方を見る
タイム自体だけでなく、出走選手の中での相対的な位置が重要です。
同じ3.4秒でも、他の選手が3.6秒なら断然のトップ機力です。

◆ 注意点
試走タイムが速くても不調なケース：
- 前走で機力を消耗した直後
- スタートラインでのセット調整不足
- 気温急変による調整不足

試走タイムは「その日の機力」の目安。過去の2連率と組み合わせて判断するのが基本です。

◆ 実践的な使い方
試走1位の選手を1着固定にして、残りをフォーメーションで購入する。
これだけで「なんとなく買い」よりも合理的な予想になります。`,
              },
              {
                title: "オートレースで穴が出るパターン5選",
                tag: "穴狙い",
                tagColor: "bg-red-500/20 text-red-300",
                summary: "人気選手が絡まないサプライズが起きやすい条件を解説。高配当を狙うならこの5パターンを覚えておこう。",
                body: `オートレースは競馬や競艇と比べて荒れにくいとされますが、
以下の条件が重なると穴が出やすくなります。

◆ 穴が出やすいパターン5つ

① 気温が急激に下がった日
エンジンの設定が合わず、強い選手でもタイムが出ない。
前日より5℃以上気温が下がった場合は要注意。

② 人気選手の試走タイムが平均以下
「実績はあるが今日は機力が低い」状況。
試走でベテラン選手が下位になっていたら穴のチャンス。

③ 若手・B級選手が試走1位のとき
格上選手でも機力が劣れば無力。実力差が縮まる。

④ 1枠（内枠）に実力下位の選手が入ったとき
オートレースも内枠が有利なため、通常は内枠の選手が本命。
でも機力が劣る内枠は、外から強い機力選手に早々に抜かれる。

⑤ スタートが乱れた後のレース
前のレースで激しい接触・落車があった後は、選手心理が乱れやすく
思わぬ走りが出やすい。`,
              },
              {
                title: "全国5場の特徴と場別攻略ポイント",
                tag: "場別",
                tagColor: "bg-amber-500/20 text-amber-300",
                summary: "伊勢崎・川口・浜松・山陽・飯塚の5場それぞれの特性と予想への活かし方を詳しく解説。",
                body: `現在の全国5場それぞれに独自の特性があります。

◆ 伊勢崎オートレース場（群馬）
- SGの本場として最も格式が高い
- コースが広く、外捲りが出やすい
- 人気上位が堅い傾向だがSGは荒れることも

◆ 川口オートレース場（埼玉）
- 関東の中心。ナイター開催がメイン
- コースが狭めで内枠が有利な傾向
- 地元の川口地区選手が強い

◆ 浜松オートレース場（静岡）
- 西日本への窓口的な存在
- 昼・夜両方の開催がある
- 機力差が出やすいコース設計

◆ 山陽オートレース場（岡山）
- 西日本唯一のオートレース場
- ナイター中心で暗さが予想を難しくする
- ローカル色が強く、地元選手有利

◆ 飯塚オートレース場（福岡）
- 九州の雄。昼開催が多い
- 観客数が多く活気がある
- 気温変化が激しく、試走タイムが変動しやすい

まず1〜2場に絞って予想精度を高めるのが効率的です。`,
              },
            ]}
          />
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

      {/* 車券計算機 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-2xl mx-auto">
          <BetCalculator />
        </div>
      </section>

      <AffiliateSection />
    </div>
  );
}
