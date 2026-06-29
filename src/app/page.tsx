import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";

const genres = [
  {
    href: "/keiba",
    icon: "🐎",
    label: "競馬",
    desc: "JRA・地方競馬のオッズ・予想データを徹底分析",
    color: "from-emerald-900/50 to-emerald-800/20",
    border: "border-emerald-700/40",
    badge: "最人気",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/keirin",
    icon: "🚴",
    label: "競輪",
    desc: "KEIRINグランプリ・G1レース予想データ分析",
    color: "from-blue-900/50 to-blue-800/20",
    border: "border-blue-700/40",
    badge: "高配当",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    href: "/kyotei",
    icon: "⛵",
    label: "競艇",
    desc: "ボートレース全24場の水面条件・選手データ",
    color: "from-cyan-900/50 to-cyan-800/20",
    border: "border-cyan-700/40",
    badge: "初心者OK",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    href: "/autorace",
    icon: "🏎️",
    label: "オートレース",
    desc: "スピードレースの予想・出走表データ分析",
    color: "from-orange-900/50 to-orange-800/20",
    border: "border-orange-700/40",
    badge: "穴狙い",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    href: "/takarakuji",
    icon: "🎯",
    label: "宝くじ・LOTO",
    desc: "ロト6・ロト7・ミニロト・ナンバーズの当選数字分析",
    color: "from-purple-900/50 to-purple-800/20",
    border: "border-purple-700/40",
    badge: "億万長者",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
];

const todayRaces = [
  { genre: "競馬", name: "東京10R 安田記念", time: "15:40", status: "注目", statusColor: "bg-red-500/20 text-red-300" },
  { genre: "競艇", name: "大村SG第1日", time: "14:00", status: "SG", statusColor: "bg-amber-500/20 text-amber-300" },
  { genre: "競輪", name: "松山G1第2日", time: "20:00", status: "G1", statusColor: "bg-blue-500/20 text-blue-300" },
  { genre: "オートレース", name: "伊勢崎11R", time: "19:30", status: "特選", statusColor: "bg-orange-500/20 text-orange-300" },
];

const stats = [
  { label: "掲載ジャンル", value: "5" },
  { label: "分析レース数", value: "1,200+" },
  { label: "的中率実績", value: "68%" },
  { label: "月間利用者", value: "3.2万人" },
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
            競馬・競輪・競艇・オートレース・宝くじ
            <br />
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
              🎯 宝くじ当選数字
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
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-5xl">{genre.icon}</span>
                      <Badge className={`${genre.badgeColor} border text-xs`}>{genre.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{genre.label}</h3>
                    <p className="text-gray-400 text-sm">{genre.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#d4af37] text-sm font-medium">
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
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              🔥 今日の注目レース
            </h2>
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">LIVE</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {todayRaces.map((race) => (
              <div
                key={race.name}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#0a0a14] hover:border-[#d4af37]/30 transition-all"
              >
                <div className="text-[#d4af37] font-black text-2xl w-12 text-center shrink-0">
                  {race.time.split(":")[0]}
                  <span className="text-sm text-gray-500">:{race.time.split(":")[1]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-0.5">{race.genre}</div>
                  <div className="text-white font-bold text-sm truncate">{race.name}</div>
                </div>
                <Badge className={`${race.statusColor} border-0 text-xs shrink-0`}>
                  {race.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSection />
    </div>
  );
}
