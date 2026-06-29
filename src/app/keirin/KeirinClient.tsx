"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const g1Players = [
  { rank: "1", name: "古性優作", class: "SS", city: "大阪", winRate: "23.5%", special: "追込", note: "現最強クラス" },
  { rank: "2", name: "眞杉匠", class: "SS", city: "栃木", winRate: "21.2%", special: "自力", note: "関東エース" },
  { rank: "3", name: "脇本雄太", class: "SS", city: "福井", winRate: "20.8%", special: "逃げ", note: "北日本主軸" },
  { rank: "4", name: "松浦悠士", class: "SS", city: "広島", winRate: "19.1%", special: "捲り", note: "中四国の星" },
  { rank: "5", name: "清水裕友", class: "SS", city: "山口", winRate: "18.4%", special: "差し", note: "中四国エース" },
  { rank: "6", name: "郡司浩平", class: "SS", city: "神奈川", winRate: "17.9%", special: "捲り", note: "南関東主軸" },
  { rank: "7", name: "深谷知広", class: "SS", city: "愛知", winRate: "16.2%", special: "逃げ", note: "中部のエース" },
  { rank: "8", name: "山口拳矢", class: "S1", city: "岐阜", winRate: "15.8%", special: "逃げ", note: "ルーキーエース" },
];

const g2Players = [
  { rank: "1", name: "平原康多", class: "S1", city: "埼玉", winRate: "18.2%", special: "差し", note: "関東の重鎮" },
  { rank: "2", name: "新田祐大", class: "S1", city: "福島", winRate: "17.6%", special: "逃げ", note: "北日本系" },
  { rank: "3", name: "守沢太志", class: "S1", city: "秋田", winRate: "16.9%", special: "差し", note: "北日本の壁" },
  { rank: "4", name: "和田健太郎", class: "S1", city: "千葉", winRate: "16.1%", special: "追込", note: "南関東勢" },
  { rank: "5", name: "渡邉雄太", class: "S1", city: "静岡", winRate: "15.4%", special: "捲り", note: "中部の実力者" },
];

const races = {
  gp: [
    { grade: "GP", name: "KEIRINグランプリ", track: "立川", date: "12/30", prize: "1億円" },
  ],
  g1: [
    { grade: "G1", name: "全日本選抜競輪", track: "高知", date: "2/6〜10", prize: "4370万円" },
    { grade: "G1", name: "競輪祭", track: "小倉", date: "11/10〜15", prize: "4370万円" },
    { grade: "G1", name: "寛仁親王牌", track: "前橋", date: "10/9〜12", prize: "4370万円" },
  ],
  g2: [
    { grade: "G2", name: "共同通信社杯", track: "熊本", date: "9/4〜7", prize: "1540万円" },
    { grade: "G2", name: "オールスター競輪", track: "四日市", date: "8/20〜25", prize: "3380万円" },
  ],
};

function PlayersTable({ data }: { data: typeof g1Players }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? data : data.slice(0, 5);

  return (
    <div>
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
            {visible.map((p) => (
              <tr key={p.name} className="hover:bg-white/3 transition-colors">
                <td className="py-3 pl-4">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-black ${parseInt(p.rank) <= 3 ? "bg-[#d4af37] text-black" : "bg-white/10 text-gray-300"}`}>
                    {p.rank}
                  </span>
                </td>
                <td className="py-3 text-white font-bold">{p.name}</td>
                <td className="py-3 text-center">
                  <Badge className={`${p.class === "SS" ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : "bg-blue-500/20 text-blue-300 border-blue-500/30"} text-xs`}>{p.class}</Badge>
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
      {data.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all inline-flex items-center gap-2"
          >
            {expanded ? <>折りたたむ ▲</> : <>もっと見る（残り{data.length - 5}名） ▼</>}
          </button>
        </div>
      )}
    </div>
  );
}

export default function KeirinClient() {
  return (
    <>
      {/* グレード×選手 タブ */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">📊 グレード別レース・選手データ</h2>
          <Tabs defaultValue="gp_g1">
            <TabsList className="bg-[#1a1a2e] border border-white/10 mb-6 flex-wrap h-auto gap-1">
              <TabsTrigger value="gp_g1" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs sm:text-sm">
                👑 GP・G1
              </TabsTrigger>
              <TabsTrigger value="g2" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
                🏅 G2
              </TabsTrigger>
              <TabsTrigger value="players" className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-xs sm:text-sm">
                🚴 SS選手TOP
              </TabsTrigger>
              <TabsTrigger value="s1" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-xs sm:text-sm">
                🎯 S1選手
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gp_g1">
              <div className="space-y-3">
                {[...races.gp, ...races.g1].map((r) => (
                  <div key={r.name} className="flex items-center gap-4 p-4 rounded-xl border border-amber-700/30 bg-[#0f0f1a]">
                    <Badge className={`${r.grade === "GP" ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : "bg-red-500/20 text-red-300 border-red-500/30"} text-xs w-12 justify-center`}>{r.grade}</Badge>
                    <div className="flex-1">
                      <span className="text-white font-bold">{r.name}</span>
                      <span className="text-gray-500 text-sm ml-2">{r.track} / {r.date}</span>
                    </div>
                    <span className="text-[#d4af37] font-bold shrink-0">{r.prize}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="g2">
              <div className="space-y-3">
                {races.g2.map((r) => (
                  <div key={r.name} className="flex items-center gap-4 p-4 rounded-xl border border-blue-700/30 bg-[#0f0f1a]">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs w-12 justify-center">{r.grade}</Badge>
                    <div className="flex-1">
                      <span className="text-white font-bold">{r.name}</span>
                      <span className="text-gray-500 text-sm ml-2">{r.track} / {r.date}</span>
                    </div>
                    <span className="text-[#d4af37] font-bold shrink-0">{r.prize}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="players">
              <PlayersTable data={g1Players} />
            </TabsContent>

            <TabsContent value="s1">
              <PlayersTable data={g2Players} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
