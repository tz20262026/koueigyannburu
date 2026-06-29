import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import LuckyGame from "@/components/LuckyGame";
import { SiteJsonLd } from "@/components/JsonLd";
import BetCalculator from "@/components/BetCalculator";
import GamblingQuiz from "@/components/GamblingQuiz";
import RaceCountdown from "@/components/RaceCountdown";
import StrategyGuide from "@/components/StrategyGuide";

export const metadata: Metadata = {
  title: "WINLAB｜公営ギャンブル予想・データ分析",
  description: "競馬・競輪・競艇・オートレース・宝くじの予想データ分析サイト。勝率UPに役立つ情報を徹底解説。JRAオッズ・競艇24場データ・競輪SS選手・ロト6当選番号を網羅。",
  alternates: { canonical: "https://koueigyannburu.vercel.app" },
};

const genres = [
  {
    href: "/keiba",
    icon: "🐎",
    label: "競馬",
    sub: "JRA・地方競馬",
    desc: "オッズ表・競馬場別傾向・騎手データを徹底分析",
    color: "from-emerald-900/50 to-emerald-800/20",
    border: "border-emerald-700/40",
    badge: "最人気",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    links: ["JRA競馬予想", "地方競馬攻略", "騎手成績データ"],
  },
  {
    href: "/keirin",
    icon: "🚴",
    label: "競輪",
    sub: "GP・G1・G2",
    desc: "ライン戦術・SS選手・決まり手データを分析",
    color: "from-blue-900/50 to-blue-800/20",
    border: "border-blue-700/40",
    badge: "高配当",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    links: ["SSランク選手一覧", "ライン戦術入門", "決まり手分析"],
  },
  {
    href: "/kyotei",
    icon: "⛵",
    label: "競艇",
    sub: "全24場データ",
    desc: "1コース勝率・水面条件・モーター成績を分析",
    color: "from-cyan-900/50 to-cyan-800/20",
    border: "border-cyan-700/40",
    badge: "初心者OK",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    links: ["24場勝率データ", "A1選手ランキング", "SGレース情報"],
  },
  {
    href: "/autorace",
    icon: "🏎️",
    label: "オートレース",
    sub: "全5場・機力分析",
    desc: "試走タイム・エンジン成績・選手クラスを分析",
    color: "from-orange-900/50 to-orange-800/20",
    border: "border-orange-700/40",
    badge: "穴狙い",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    links: ["機力（エンジン）解説", "選手ランキング", "SGレース一覧"],
  },
  {
    href: "/takarakuji",
    icon: "🎯",
    label: "宝くじ・LOTO",
    sub: "ロト6・7・ミニロト",
    desc: "当選数字・ホット数字・確率データを徹底分析",
    color: "from-purple-900/50 to-purple-800/20",
    border: "border-purple-700/40",
    badge: "億万長者",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    links: ["最新当選数字", "ホット数字分析", "種類比較"],
  },
];

const todayRaces = [
  { genre: "競馬", name: "東京10R 安田記念", time: "15:40", status: "G1", statusColor: "bg-red-500/20 text-red-300", href: "/keiba" },
  { genre: "競艇", name: "大村SG第1日", time: "14:00", status: "SG", statusColor: "bg-amber-500/20 text-amber-300", href: "/kyotei" },
  { genre: "競輪", name: "松山G1第2日", time: "20:00", status: "G1", statusColor: "bg-blue-500/20 text-blue-300", href: "/keirin" },
  { genre: "オートレース", name: "伊勢崎11R", time: "19:30", status: "特選", statusColor: "bg-orange-500/20 text-orange-300", href: "/autorace" },
];

const stats = [
  { label: "掲載ジャンル", value: "5" },
  { label: "分析レース数", value: "1,200+" },
  { label: "的中率実績", value: "68%" },
  { label: "月間利用者", value: "3.2万人" },
];

const pickups = [
  {
    href: "/keiba",
    icon: "🐎",
    title: "【競馬】安田記念の注目馬と予想ポイント",
    desc: "エフフォーリア vs パンサラッサ。オッズから読む本命・対抗の見解",
    color: "border-emerald-700/40",
    tag: "競馬",
    tagColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    href: "/kyotei",
    icon: "⛵",
    title: "【競艇】大村SGの1コース勝率と注目選手",
    desc: "イン勝率No.1の大村での戦い方。峰竜太の機力データを確認",
    color: "border-cyan-700/40",
    tag: "競艇",
    tagColor: "bg-cyan-500/20 text-cyan-300",
  },
  {
    href: "/takarakuji",
    icon: "🎯",
    title: "【ロト7】最新当選数字と次回のホット数字",
    desc: "第631回当選数字を公開。直近300回の出現頻度から次回を分析",
    color: "border-purple-700/40",
    tag: "宝くじ",
    tagColor: "bg-purple-500/20 text-purple-300",
  },
  {
    href: "/keirin",
    icon: "🚴",
    title: "【競輪】古性優作の最近の成績と買い方",
    desc: "現最強SSランクの古性優作。近況と今後の出走予定をチェック",
    color: "border-blue-700/40",
    tag: "競輪",
    tagColor: "bg-blue-500/20 text-blue-300",
  },
  {
    href: "/autorace",
    icon: "🏎️",
    title: "【オートレース】雨の日に穴が出やすい理由",
    desc: "天候と気温でエンジン成績が激変。荒れ予想の組み立て方",
    color: "border-orange-700/40",
    tag: "オートレース",
    tagColor: "bg-orange-500/20 text-orange-300",
  },
  {
    href: "/keiba",
    icon: "📊",
    title: "【データ】回収率100%超えを狙う馬券戦略",
    desc: "人気薄の複勝・ワイドで長期収支をプラスにする考え方を解説",
    color: "border-amber-700/40",
    tag: "攻略",
    tagColor: "bg-amber-500/20 text-amber-300",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteJsonLd />
      {/* ヒーロー */}
      <section className="relative overflow-hidden hero-gradient py-20 px-4">
        <div className="relative max-w-5xl mx-auto text-center">
          <Badge className="bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/40 mb-6 text-sm px-4 py-1">
            🏆 公営ギャンブル予想・データ分析の決定版
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            データで勝つ
            <span className="block bg-gradient-to-r from-[#d4af37] to-[#f5d060] bg-clip-text text-transparent">
              公営ギャンブル
            </span>
            予想NAVI
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            競馬・競輪・競艇・オートレース・宝くじ<br />
            全ジャンルのデータを分析して的中率UP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/keiba"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient text-black font-black text-lg hover:opacity-90 transition-opacity"
            >
              🐎 今日の競馬を見る
            </Link>
            <Link
              href="/takarakuji"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors"
            >
              🎯 最新当選数字
            </Link>
          </div>
        </div>
      </section>

      {/* 統計 */}
      <section className="border-y border-white/10 bg-[#0f0f1a] py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-black text-[#d4af37]">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ジャンル選択 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">ジャンルを選んで予想開始</h2>
            <p className="text-gray-400">全5ジャンルのデータ分析・予想情報をチェック</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {genres.map((genre) => (
              <Link key={genre.href} href={genre.href}>
                <Card className={`card-glow h-full bg-gradient-to-br ${genre.color} border ${genre.border} hover:scale-[1.02] transition-all cursor-pointer`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-4xl">{genre.icon}</span>
                      <Badge className={`${genre.badgeColor} border text-xs`}>{genre.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-black text-white mb-0.5">{genre.label}</h3>
                    <p className="text-gray-500 text-xs mb-2">{genre.sub}</p>
                    <p className="text-gray-400 text-sm mb-3">{genre.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {genre.links.map((l) => (
                        <span key={l} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                          {l}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-[#d4af37] text-sm font-medium">
                      <span>詳細を見る</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 今日の注目レース */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">🔥 今日の注目レース</h2>
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">LIVE</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {todayRaces.map((race) => (
              <Link key={race.name} href={race.href}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#0a0a14] hover:border-[#d4af37]/30 transition-all">
                  <div className="text-[#d4af37] font-black text-2xl w-12 text-center shrink-0">
                    {race.time.split(":")[0]}
                    <span className="text-sm text-gray-500">:{race.time.split(":")[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-0.5">{race.genre}</div>
                    <div className="text-white font-bold text-sm truncate">{race.name}</div>
                  </div>
                  <Badge className={`${race.statusColor} border-0 text-xs shrink-0`}>{race.status}</Badge>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 今日のピックアップ記事 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">📰 今日のピックアップ</h2>
            <span className="text-gray-500 text-sm">全ジャンルの最新情報</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pickups.map((p) => (
              <Link key={p.href + p.title} href={p.href}>
                <div className={`h-full p-5 rounded-xl border ${p.color} bg-[#0f0f1a] hover:bg-[#0f0f22] transition-all group`}>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${p.tagColor} border-0 text-xs`}>{p.tag}</Badge>
                    <span className="text-2xl">{p.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#d4af37] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
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

      {/* インタラクティブツール3本 */}
      <section className="bg-[#0a0a14] border-y border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-1">🎲 無料ツール・ゲーム</h2>
            <p className="text-gray-500 text-sm">予想に役立つ計算機・ゲームを使ってみよう</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <RaceCountdown />
            </div>
            <div className="lg:col-span-1">
              <BetCalculator />
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔮</span>
                  <div>
                    <h3 className="text-white font-black text-lg">今日のラッキーナンバー</h3>
                    <p className="text-gray-500 text-xs">生年月日×今日の日付で算出</p>
                  </div>
                </div>
                <LuckyGame />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ギャンブル知識クイズ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white mb-1">🧠 ギャンブル知識クイズ</h2>
            <p className="text-gray-500 text-sm">全6問・あなたのギャンブル知識レベルをチェック！</p>
          </div>
          <GamblingQuiz />
        </div>
      </section>

      {/* 公営ギャンブル総合攻略コラム */}
      <section className="py-12 px-4 bg-[#0a0a14] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <StrategyGuide
            title="📚 公営ギャンブル総合攻略コラム"
            accentColor="text-[#d4af37]"
            articles={[
              {
                title: "初心者必読：公営ギャンブル5種類の「向き不向き」を正直に解説",
                tag: "初心者",
                tagColor: "bg-[#d4af37]/20 text-[#d4af37]",
                summary: "競馬・競輪・競艇・オートレース・宝くじ、どれが自分に合っているかわからない人へ。各ジャンルの特性と始め方を比較解説。",
                body: `◆ 少額で楽しみたい → 宝くじ・ミニロト
200円から参加でき、ハマりにくい。スロットより確率が透明。
でも当選確率は現実的に低いことを覚悟する必要がある。

◆ データ分析が好き → 競馬
膨大な過去データが無料で公開されており、分析が最もやりやすい。
JRA公式で過去10年分のレースデータを無料確認できる。

◆ 初心者でも比較的わかりやすい → 競艇
「1コースが有利」というシンプルな法則があり、ルールが覚えやすい。
選手数が6艇と少ないため、情報を絞り込みやすい。

◆ 高配当を狙いたい → 競輪
ライン戦術が崩れた時に大荒れする。3連単で100万超えも珍しくない。

◆ 穴を狙いたい → オートレース
試走タイムという明快な指標があるため、機力差を見極めやすい。

どのジャンルから始めるか迷ったら「競艇」がおすすめです。
ルールがシンプルで、データも整理されており、入門しやすい公営ギャンブルです。`,
              },
              {
                title: "公営ギャンブル共通「還元率」の真実：胴元が取る割合を知ろう",
                tag: "基礎知識",
                tagColor: "bg-blue-500/20 text-blue-300",
                summary: "公営ギャンブルは「払戻率」が定められており、長期的に見ると必ず負ける設計。この前提を知った上で楽しむことが大切。",
                body: `公営ギャンブルには「払戻率」という概念があり、
投じたお金のうち何%が払い戻されるかが決まっています。

◆ 各ジャンルの払戻率（目安）
- 競馬（JRA）：単勝/複勝 80% / 3連単 72.5%
- 競輪：2車単/2車複 75% / 3連単 72.5%
- 競艇：2連単 77.5% / 3連単 74.8%
- オートレース：単勝 75% / 3連単 70%
- 宝くじ：約46%

◆ これが意味すること
1,000回買い続けると平均で25〜54%が損失になります。
つまり「勝ち続けるのは構造的に不可能」な設計です。

◆ だからこそ大切な考え方
① エンターテインメント費として楽しむ（映画代やゲーム課金と同じ感覚）
② 1回あたりの金額を決めて守る（月予算1万円など）
③ 「当てよう」より「楽しもう」にマインドシフトする

競馬で100万円当てるより、毎週500円ずつ楽しみながら
「今日は当たった！」と喜ぶ方が人生には価値があります。`,
              },
              {
                title: "ギャンブル依存を防ぐ3つのルール：楽しく続けるために",
                tag: "注意",
                tagColor: "bg-red-500/20 text-red-300",
                summary: "公営ギャンブルは娯楽として楽しむのが正解。依存してしまうリスクとその防ぎ方を知っておこう。",
                body: `公営ギャンブルは適切に楽しめば人生を豊かにする娯楽の一つです。
でもルールなく続けると生活を圧迫するリスクがあります。

◆ 3つのルール

【ルール1：月の予算を決めて守る】
最初に「月いくらまで」を決める。
負けて追加するのは絶対NG。

【ルール2：勝った分はすぐ口座に戻す】
利益をそのまま次のゲームに使わない。
「今日の利益はここまで」と引き際を決める。

【ルール3：生活費・貯金には絶対手をつけない】
「ゲーム代」から支出。生活費やローン返済は別口座で管理する。

◆ 心配な場合の相談窓口
・ギャンブル等依存症相談ポータルサイト（厚生労働省）
・全国依存症家族会連合会
・自助グループ「GA（ギャンブラーズ・アノニマス）」

楽しみながら適度に付き合える範囲で公営ギャンブルを楽しみましょう。`,
              },
              {
                title: "【プロが使う】「期待値プラス」の券種・タイミングを見つける方法",
                tag: "上級",
                tagColor: "bg-red-500/20 text-red-300",
                summary: "長期的に回収率100%超えを目指す思考法。競馬・競艇・競輪で共通して使える「期待値管理」の基礎を解説。",
                body: `公営ギャンブルで長期収支をプラスにしているプレイヤーは実在します。
彼らが使っているのが「期待値管理」という考え方です。

◆ 期待値とは
「この買い方を続けたら平均いくら返ってくるか」の計算式：
期待値 = オッズ × 実際の勝率

例：オッズ10倍の馬の本当の勝率が15%の場合
期待値 = 10 × 15% = 150円（100円投資に対して）→ プラス!

◆ 期待値をプラスにするための条件
① 「オッズが実際の実力より過大評価されている」馬・選手を選ぶ
② 人気選手・本命馬には人気分の割引（過小評価）がある
③ データを蓄積して自分だけの「勝ちパターン」を見つける

◆ 実践的なアプローチ
1. 特定のレース条件（距離・場所・馬場状態）に絞る
2. そのデータを100件以上集める
3. 実際の勝率 vs オッズを計算する
4. 期待値がプラスの条件のみ買い続ける

期待値プラスの買い方は確かに存在しますが、
データ収集・分析に時間と根気が必要です。
「コツコツ型」の人が最も向いています。`,
              },
            ]}
          />
        </div>
      </section>

      {/* アフィリエイト */}
      <div className="bg-[#0f0f1a]">
        <AffiliateSection />
      </div>

      {/* 全ジャンル横断ナビ */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-white mb-6">🔗 各ジャンルの詳細ページへ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {genres.map((g) => (
              <Link key={g.href} href={g.href}>
                <div className={`text-center p-4 rounded-xl border ${g.border} bg-[#0f0f1a] hover:bg-[#1a1a2e] transition-all`}>
                  <div className="text-3xl mb-2">{g.icon}</div>
                  <div className="text-white font-bold text-sm">{g.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{g.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
