import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";

export const metadata: Metadata = {
  title: "競輪予想・データ分析",
  description:
    "競輪のグレードレース・選手データを徹底分析。ライン戦術・決まり手データで的中率UP。",
  keywords: ["競輪予想", "競輪データ", "KEIRIN", "G1", "KEIRINグランプリ", "競輪攻略"],
};

const grades = [
  { grade: "GP", name: "KEIRINグランプリ", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { grade: "G1", name: "全日本選抜競輪", color: "bg-red-500/20 text-red-300 border-red-500/30" },
  { grade: "G2", name: "共同通信社杯", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { grade: "G3", name: "各地記念競輪", color: "bg-green-500/20 text-green-300 border-green-500/30" },
  { grade: "FI", name: "一般・特別選抜", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
];

const players = [
  { rank: 1, name: "古性優作", class: "SS", city: "大阪", winRate: "23.5%", special: "追込", note: "現最強クラス" },
  { rank: 2, name: "眞杉匠", class: "SS", city: "栃木", winRate: "21.2%", special: "自力", note: "関東エース" },
  { rank: 3, name: "脇本雄太", class: "SS", city: "福井", winRate: "20.8%", special: "逃げ", note: "北日本主軸" },
  { rank: 4, name: "松浦悠士", class: "SS", city: "広島", winRate: "19.1%", special: "捲り", note: "中四国の星" },
  { rank: 5, name: "清水裕友", class: "SS", city: "山口", winRate: "18.4%", special: "差し", note: "中四国エース" },
];

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
  { region: "北日本", reps: "脇本・新田・佐藤慎", color: "bg-red-500/20 text-red-300" },
  { region: "中部", reps: "浅井・柴崎・大石", color: "bg-orange-500/20 text-orange-300" },
  { region: "近畿", reps: "古性・三谷・南潤", color: "bg-purple-500/20 text-purple-300" },
  { region: "中四国", reps: "松浦・清水・桑原", color: "bg-emerald-500/20 text-emerald-300" },
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

      {/* グレード説明 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">📊 競輪グレード一覧</h2>
          <div className="flex flex-wrap gap-3">
            {grades.map((g) => (
              <div key={g.grade} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#0f0f1a] min-w-[200px]">
                <Badge className={`${g.color} text-sm font-black`}>{g.grade}</Badge>
                <span className="text-white font-medium">{g.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SS選手ランキング */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">👑 SSランク選手（直近データ）</h2>
          <p className="text-gray-400 text-sm mb-6">サンプルデータ</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm">
                  <th className="pb-3 text-left pl-4">順位</th>
                  <th className="pb-3 text-left">選手名</th>
                  <th className="pb-3 text-center">クラス</th>
                  <th className="pb-3 text-center">所属</th>
                  <th className="pb-3 text-center">勝率</th>
                  <th className="pb-3 text-center">得意技</th>
                  <th className="pb-3 text-right pr-4">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {players.map((p) => (
                  <tr key={p.name} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 pl-4">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-black ${p.rank <= 3 ? "bg-[#d4af37] text-black" : "bg-white/10 text-gray-300"}`}>
                        {p.rank}
                      </span>
                    </td>
                    <td className="py-3 text-white font-bold">{p.name}</td>
                    <td className="py-3 text-center">
                      <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">{p.class}</Badge>
                    </td>
                    <td className="py-3 text-center text-gray-300 text-sm">{p.city}</td>
                    <td className="py-3 text-center text-[#d4af37] font-bold">{p.winRate}</td>
                    <td className="py-3 text-center text-gray-300 text-sm">{p.special}</td>
                    <td className="py-3 pr-4 text-right text-gray-400 text-xs">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 決まり手 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">⚡ 決まり手データ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {kettei.map((k) => (
              <Card key={k.name} className="bg-[#0f0f1a] border-white/10 text-center">
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
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">🗺️ 地域ライン構成</h2>
          <p className="text-gray-400 text-sm mb-6">競輪は同じ地域の選手が連携して走るライン戦術が重要</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lineStrategy.map((l) => (
              <div key={l.region} className="p-4 rounded-xl border border-white/10 bg-[#0a0a14]">
                <Badge className={`${l.color} border-0 mb-2`}>{l.region}ライン</Badge>
                <p className="text-gray-300 text-sm">{l.reps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AffiliateSection genre="競輪" />
    </div>
  );
}
