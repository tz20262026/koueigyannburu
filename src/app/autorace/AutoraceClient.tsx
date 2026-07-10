"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const topPlayers = [
  { rank: "1", name: "青山周平", pref: "伊勢崎", class: "特別選抜A", winRate: "29.8%", tryTime: "3.290", note: "絶対王者" },
  { rank: "2", name: "荒尾聡", pref: "飯塚", class: "特別選抜A", winRate: "25.3%", tryTime: "3.312", note: "九州の雄" },
  { rank: "3", name: "佐藤励", pref: "浜松", class: "特別選抜A", winRate: "23.1%", tryTime: "3.318", note: "浜松の若き王" },
  { rank: "4", name: "松本やすし", pref: "飯塚", class: "特別選抜A", winRate: "21.6%", tryTime: "3.325", note: "ベテランの意地" },
  { rank: "5", name: "岩見貴史", pref: "山陽", class: "選抜A", winRate: "19.2%", tryTime: "3.330", note: "山陽エース" },
  { rank: "6", name: "鈴木圭一郎", pref: "浜松", class: "選抜A", winRate: "18.5%", tryTime: "3.335", note: "浜松の実力者" },
  { rank: "7", name: "中村雅人", pref: "川口", class: "選抜A", winRate: "17.8%", tryTime: "3.340", note: "川口の重鎮" },
  { rank: "8", name: "田中茂", pref: "伊勢崎", class: "選抜A", winRate: "16.9%", tryTime: "3.345", note: "安定したレース" },
];

const grades = [
  { grade: "SG", name: "日本選手権オートレース", prize: "3000万円", track: "飯塚", month: "5月" },
  { grade: "SG", name: "スーパースターソング", prize: "3000万円", track: "川口", month: "8月" },
  { grade: "SG", name: "全日本選抜オートレース", prize: "2000万円", track: "浜松", month: "11月" },
  { grade: "GI", name: "ゴールデングランプリ", prize: "1000万円", track: "川口", month: "3月" },
  { grade: "GI", name: "グランドスラム", prize: "800万円", track: "伊勢崎", month: "10月" },
  { grade: "特選", name: "特別選抜戦", prize: "100〜300万円", track: "各場", month: "随時" },
];

function PlayersTable({ data }: { data: typeof topPlayers }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? data : data.slice(0, 5);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-white/10 text-gray-300 text-sm">
              <th className="pb-3 text-left pl-4">順位</th>
              <th className="pb-3 text-left">選手名</th>
              <th className="pb-3 text-center">所属</th>
              <th className="pb-3 text-center">クラス</th>
              <th className="pb-3 text-center">勝率</th>
              <th className="pb-3 text-right">試走タイム</th>
              <th className="pb-3 text-right pr-4">備考</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {visible.map((p) => (
              <tr key={p.name} className="hover:bg-white/3 transition-colors">
                <td className="py-3 pl-4">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-black ${parseInt(p.rank) <= 3 ? "bg-[#d4af37] text-black" : "bg-white/10 text-gray-300"}`}>
                    {p.rank}
                  </span>
                </td>
                <td className="py-3 text-white font-bold">{p.name}</td>
                <td className="py-3 text-center text-gray-300 text-sm">{p.pref}</td>
                <td className="py-3 text-center">
                  <Badge className="bg-orange-500/20 text-orange-300 border-0 text-xs">{p.class}</Badge>
                </td>
                <td className="py-3 text-center text-[#d4af37] font-bold">{p.winRate}</td>
                <td className="py-3 text-right text-cyan-300 font-mono">{p.tryTime}秒</td>
                <td className="py-3 pr-4 text-right text-gray-300 text-xs">{p.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all inline-flex items-center gap-2"
          >
            {expanded ? <>折りたたむ ▲</> : <>残り{data.length - 5}名を見る ▼</>}
          </button>
        </div>
      )}
    </div>
  );
}

export default function AutoraceClient() {
  return (
    <section className="py-12 px-4 bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-6">📊 選手ランキング・グレードレース</h2>
        <Tabs defaultValue="players">
          <TabsList className="bg-[#1a1a2e] border border-white/10 mb-6">
            <TabsTrigger value="players" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              🏎️ 選手ランキング
            </TabsTrigger>
            <TabsTrigger value="grades" className="data-[state=active]:bg-orange-700 data-[state=active]:text-white">
              🏆 グレードレース
            </TabsTrigger>
          </TabsList>

          <TabsContent value="players">
            <PlayersTable data={topPlayers} />
          </TabsContent>

          <TabsContent value="grades">
            <div className="space-y-3">
              {grades.map((g) => (
                <div key={g.name} className="flex items-center gap-4 p-4 rounded-xl border border-orange-700/30 bg-[#0a0a14]">
                  <Badge className={`${g.grade === "SG" ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : "bg-red-500/20 text-red-300 border-red-500/30"} text-xs w-14 justify-center shrink-0`}>
                    {g.grade}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold">{g.name}</div>
                    <div className="text-gray-300 text-xs">{g.track} · {g.month}</div>
                  </div>
                  <div className="text-[#d4af37] font-bold shrink-0">{g.prize}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
