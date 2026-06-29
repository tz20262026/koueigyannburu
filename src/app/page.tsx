import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";

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
