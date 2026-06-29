import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";

export const metadata: Metadata = {
  title: "オートレース予想・データ分析",
  description:
    "オートレースの選手データ・機力分析。穴狙いで高配当を狙う攻略法を徹底解説。",
  keywords: ["オートレース予想", "オートレースデータ", "オート攻略", "穴狙い", "オートレース選手"],
};

const stadiums = [
  { name: "伊勢崎", pref: "群馬", feature: "本場SGが多い", nights: "夜開催あり" },
  { name: "川口", pref: "埼玉", feature: "関東の中心", nights: "夜開催メイン" },
  { name: "浜松", pref: "静岡", feature: "西の中心", nights: "昼・夜両方" },
  { name: "山陽", pref: "岡山", feature: "西日本唯一", nights: "夜開催メイン" },
  { name: "飯塚", pref: "福岡", feature: "九州の雄", nights: "昼開催メイン" },
  { name: "川崎", pref: "神奈川", feature: "廃止（2024年）", nights: "-" },
];

const players = [
  { rank: 1, name: "青山周平", pref: "伊勢崎", class: "特別選抜A", winRate: "29.8%", note: "絶対王者" },
  { rank: 2, name: "荒尾聡", pref: "飯塚", class: "特別選抜A", winRate: "25.3%", note: "九州の雄" },
  { rank: 3, name: "佐藤励", pref: "浜松", class: "特別選抜A", winRate: "23.1%", note: "浜松の若き王" },
  { rank: 4, name: "松本やすし", pref: "飯塚", class: "特別選抜A", winRate: "21.6%", note: "ベテランの意地" },
  { rank: 5, name: "岩見貴史", pref: "山陽", class: "選抜A", winRate: "19.2%", note: "山陽エース" },
];

const grades = [
  { grade: "SG", name: "日本選手権", desc: "最高峰レース", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { grade: "GI", name: "スーパーレース", desc: "全国選手権など", color: "bg-red-500/20 text-red-300 border-red-500/30" },
  { grade: "特選", name: "特別選抜", desc: "上位選手限定", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { grade: "選抜", name: "選抜戦", desc: "中位グループ", color: "bg-green-500/20 text-green-300 border-green-500/30" },
  { grade: "予選", name: "予選戦", desc: "全選手が出走", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
];

const points = [
  { icon: "⚙️", title: "機力（エンジン）", desc: "オートレースはエンジン成績が最重要。試走タイムと2連率をチェック" },
  { icon: "📍", title: "枠番（インが有利）", desc: "内枠ほど有利。1・2枠の選手を中心に軸を決める" },
  { icon: "⛅", title: "天候・気温", desc: "気温が高いとエンジンパワーが上がる。夏場は成績が安定しやすい" },
  { icon: "🔄", title: "周回数", desc: "通常6周。後半になるほど上位選手の優位が崩れにくい" },
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
          <h2 className="text-2xl font-black text-white mb-6">🔑 オートレース予想の鍵</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {points.map((p) => (
              <div key={p.title} className="p-5 rounded-xl border border-orange-700/30 bg-gradient-to-br from-orange-900/20 to-[#0f0f1a]">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 競走場 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">🏁 全国オートレース場</h2>
          <p className="text-gray-400 text-sm mb-6">現在5場で開催（川崎は2024年廃止）</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stadiums.map((s) => (
              <Card key={s.name} className={`border ${s.pref === "神奈川" ? "border-white/5 opacity-50" : "border-orange-700/30 hover:border-orange-500/50"} bg-[#0a0a14] transition-all`}>
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

      {/* 選手ランキング */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">👑 トップ選手ランキング</h2>
          <div className="space-y-3">
            {players.map((p) => (
              <div key={p.name} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#0f0f1a] hover:border-orange-700/40 transition-all">
                <span className={`text-2xl font-black w-8 shrink-0 ${p.rank <= 3 ? "text-[#d4af37]" : "text-gray-600"}`}>
                  {p.rank}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-white font-bold">{p.name}</span>
                    <span className="text-gray-500 text-sm">{p.pref}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-500/20 text-orange-300 border-0 text-xs">{p.class}</Badge>
                    <span className="text-gray-500 text-xs">{p.note}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[#d4af37] font-black text-lg">{p.winRate}</div>
                  <div className="text-gray-500 text-xs">勝率</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* グレード */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">📊 レースグレード</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {grades.map((g) => (
              <div key={g.grade} className="p-4 rounded-xl border border-white/10 bg-[#0a0a14]">
                <Badge className={`${g.color} text-sm font-black mb-2`}>{g.grade}</Badge>
                <div className="text-white font-bold">{g.name}</div>
                <div className="text-gray-400 text-sm">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AffiliateSection />
    </div>
  );
}
