import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";

export const metadata: Metadata = {
  title: "競艇（ボートレース）予想・データ分析",
  description:
    "競艇（ボートレース）の全24場コースデータ・選手成績を分析。1コース勝率・水面条件で的中率UP。",
  keywords: ["競艇予想", "ボートレース", "競艇攻略", "1コース", "水面条件", "競艇データ"],
};

const stadiums = [
  { name: "桐生", region: "群馬", feature: "淡水・狭い", course1: "55%", note: "周年SG常連" },
  { name: "戸田", region: "埼玉", feature: "狭水面・荒れやすい", course1: "48%", note: "インが強い" },
  { name: "江戸川", region: "東京", feature: "潮の満ち引き", course1: "42%", note: "最難関水面" },
  { name: "平和島", region: "東京", feature: "海水・荒れやすい", course1: "50%", note: "バック側強い" },
  { name: "多摩川", region: "東京", feature: "淡水・静水面", course1: "58%", note: "インが絶対的" },
  { name: "浜名湖", region: "静岡", feature: "潮の影響あり", course1: "53%", note: "オールスター開催" },
  { name: "蒲郡", region: "愛知", feature: "淡水・穏やか", course1: "57%", note: "グランプリ開催" },
  { name: "常滑", region: "愛知", feature: "海水・静か", course1: "56%", note: "ダービー常連" },
  { name: "津", region: "三重", feature: "海水・荒れることも", course1: "52%", note: "メモリアル開催" },
  { name: "大村", region: "長崎", feature: "淡水・インの聖地", course1: "66%", note: "1コース最強場" },
];

const players = [
  { rank: 1, name: "峰竜太", class: "A1", pref: "佐賀", winRate: "35.2%", no: "3415" },
  { rank: 2, name: "白井英治", class: "A1", pref: "山口", winRate: "31.8%", no: "3492" },
  { rank: 3, name: "毒島誠", class: "A1", pref: "群馬", winRate: "30.4%", no: "4238" },
  { rank: 4, name: "辻栄蔵", class: "A1", pref: "広島", winRate: "29.7%", no: "3562" },
  { rank: 5, name: "平本真之", class: "A1", pref: "愛知", winRate: "28.5%", no: "4349" },
];

const tips = [
  { icon: "1️⃣", title: "1コース勝率を確認", desc: "競艇は1コース（イン）が最も有利。場ごとの1コース勝率をチェック" },
  { icon: "🌊", title: "水面・天候確認", desc: "海水面と淡水、追い風・向かい風でレース傾向が大きく変わる" },
  { icon: "⚙️", title: "モーター成績", desc: "モーターの2連率が高いと成績に直結。ボートの足色を要チェック" },
  { icon: "🏅", title: "選手クラス", desc: "A1・A2・B1・B2の4クラス。A1選手が出走するSGレースは格が違う" },
];

const grades = [
  { grade: "SG", name: "SGグランプリ", prize: "1億800万円", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { grade: "G1", name: "全国選手権", prize: "2400万円", color: "bg-red-500/20 text-red-300 border-red-500/30" },
  { grade: "G2", name: "レディースCC", prize: "1400万円", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
  { grade: "G3", name: "プレミアムGP", prize: "1000万円", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { grade: "一般", name: "一般・企業杯", prize: "~500万円", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
];

export default function KyoteiPage() {
  return (
    <div>
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

      {/* 予想のコツ */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">💡 競艇予想の4大ポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((t) => (
              <div key={t.title} className="p-5 rounded-xl border border-cyan-700/30 bg-gradient-to-br from-cyan-900/20 to-[#0f0f1a]">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="text-white font-bold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全国場別データ */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">🗺️ 全国ボートレース場 1コース勝率</h2>
          <p className="text-gray-400 text-sm mb-6">主要10場のサンプルデータ</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm">
                  <th className="pb-3 text-left pl-4">競艇場</th>
                  <th className="pb-3 text-center">地域</th>
                  <th className="pb-3 text-center">水面特徴</th>
                  <th className="pb-3 text-right">1コース勝率</th>
                  <th className="pb-3 text-right pr-4">特記</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stadiums.map((s) => (
                  <tr key={s.name} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 pl-4 text-white font-bold">{s.name}</td>
                    <td className="py-3 text-center text-gray-400 text-sm">{s.region}</td>
                    <td className="py-3 text-center text-gray-400 text-sm">{s.feature}</td>
                    <td className="py-3 text-right">
                      <span className={`font-black ${parseInt(s.course1) >= 60 ? "text-[#d4af37]" : parseInt(s.course1) >= 50 ? "text-cyan-400" : "text-gray-300"}`}>
                        {s.course1}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-right text-gray-500 text-xs">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 選手ランキング */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">👑 A1ランク選手TOP5</h2>
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

      {/* グレード */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🏆 競艇グレード・賞金一覧</h2>
          <div className="space-y-3">
            {grades.map((g) => (
              <div key={g.grade} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#0a0a14]">
                <Badge className={`${g.color} text-sm font-black w-16 justify-center`}>{g.grade}</Badge>
                <span className="text-white font-bold flex-1">{g.name}</span>
                <span className="text-[#d4af37] font-black">{g.prize}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AffiliateSection genre="競艇" />
    </div>
  );
}
