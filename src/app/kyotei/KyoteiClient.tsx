"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const eastStadiums = [
  { name: "桐生", region: "群馬", feature: "淡水・狭い", course1: "55%", note: "周年SG常連" },
  { name: "戸田", region: "埼玉", feature: "狭水面・荒れやすい", course1: "48%", note: "インが強い" },
  { name: "江戸川", region: "東京", feature: "潮の満ち引き", course1: "42%", note: "最難関水面" },
  { name: "平和島", region: "東京", feature: "海水・荒れやすい", course1: "50%", note: "バック側強い" },
  { name: "多摩川", region: "東京", feature: "淡水・静水面", course1: "58%", note: "インが絶対的" },
  { name: "浜名湖", region: "静岡", feature: "潮の影響あり", course1: "53%", note: "オールスター開催" },
  { name: "蒲郡", region: "愛知", feature: "淡水・穏やか", course1: "57%", note: "グランプリ開催" },
  { name: "常滑", region: "愛知", feature: "海水・静か", course1: "56%", note: "ダービー常連" },
  { name: "津", region: "三重", feature: "海水・荒れることも", course1: "52%", note: "メモリアル開催" },
  { name: "三国", region: "福井", feature: "海水・うねりあり", course1: "49%", note: "荒れ気味" },
  { name: "びわこ", region: "滋賀", feature: "淡水・広い", course1: "53%", note: "インが強い" },
  { name: "住之江", region: "大阪", feature: "淡水・室内", course1: "59%", note: "グランプリ会場" },
];

const westStadiums = [
  { name: "尼崎", region: "兵庫", feature: "海水・穏やか", course1: "57%", note: "近畿の名門" },
  { name: "鳴門", region: "徳島", feature: "潮の流れあり", course1: "50%", note: "荒れやすい" },
  { name: "丸亀", region: "香川", feature: "海水・インが強い", course1: "60%", note: "イン天国" },
  { name: "児島", region: "岡山", feature: "海水・静か", course1: "54%", note: "ダービー常連" },
  { name: "宮島", region: "広島", feature: "海水・うねりあり", course1: "51%", note: "荒れる水面" },
  { name: "徳山", region: "山口", feature: "海水・静か", course1: "55%", note: "穏やかな水面" },
  { name: "下関", region: "山口", feature: "海水・荒れやすい", course1: "48%", note: "潮の影響大" },
  { name: "若松", region: "福岡", feature: "海水・荒れやすい", course1: "47%", note: "アウト有利" },
  { name: "芦屋", region: "福岡", feature: "海水・インが強い", course1: "58%", note: "インの聖地" },
  { name: "福岡", region: "福岡", feature: "海水・静か", course1: "54%", note: "安定した水面" },
  { name: "唐津", region: "佐賀", feature: "海水・荒れやすい", course1: "49%", note: "うねりが問題" },
  { name: "大村", region: "長崎", feature: "淡水・イン最強", course1: "66%", note: "イン勝率全国1位" },
];

function StadiumTable({ data }: { data: typeof eastStadiums }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? data : data.slice(0, 5);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[450px]">
          <thead>
            <tr className="border-b border-white/10 text-gray-300 text-sm">
              <th className="pb-3 text-left pl-4">競艇場</th>
              <th className="pb-3 text-center">地域</th>
              <th className="pb-3 text-center hidden sm:table-cell">水面特徴</th>
              <th className="pb-3 text-right">1コース勝率</th>
              <th className="pb-3 text-right pr-4 hidden sm:table-cell">特記</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {visible.map((s) => (
              <tr key={s.name} className="hover:bg-white/3 transition-colors">
                <td className="py-3 pl-4 text-white font-bold">{s.name}</td>
                <td className="py-3 text-center text-gray-300 text-sm">{s.region}</td>
                <td className="py-3 text-center text-gray-300 text-xs hidden sm:table-cell">{s.feature}</td>
                <td className="py-3 text-right">
                  <span className={`font-black ${parseInt(s.course1) >= 60 ? "text-[#d4af37]" : parseInt(s.course1) >= 54 ? "text-cyan-400" : parseInt(s.course1) >= 50 ? "text-gray-300" : "text-orange-400"}`}>
                    {s.course1}
                  </span>
                </td>
                <td className="py-3 pr-4 text-right text-gray-300 text-xs hidden sm:table-cell">{s.note}</td>
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
            {expanded ? <>折りたたむ ▲</> : <>残り{data.length - 5}場を見る ▼</>}
          </button>
        </div>
      )}
    </div>
  );
}

export default function KyoteiClient() {
  return (
    <section className="py-12 px-4 bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-2">🗺️ 全国24場 1コース勝率データ</h2>
        <p className="text-gray-300 text-sm mb-6">東日本・西日本で切り替えて確認できます</p>
        <div className="mb-4 flex gap-3 text-xs flex-wrap">
          <span className="flex items-center gap-1"><span className="text-[#d4af37] font-black">■</span> 60%以上（イン天国）</span>
          <span className="flex items-center gap-1"><span className="text-cyan-400 font-black">■</span> 54〜59%（イン有利）</span>
          <span className="flex items-center gap-1"><span className="text-gray-300 font-black">■</span> 50〜53%（標準）</span>
          <span className="flex items-center gap-1"><span className="text-orange-400 font-black">■</span> 50%未満（荒れ気味）</span>
        </div>
        <Tabs defaultValue="east">
          <TabsList className="bg-[#1a1a2e] border border-white/10 mb-6">
            <TabsTrigger value="east" className="data-[state=active]:bg-cyan-700 data-[state=active]:text-white">
              🗼 東日本（12場）
            </TabsTrigger>
            <TabsTrigger value="west" className="data-[state=active]:bg-cyan-700 data-[state=active]:text-white">
              ⛩️ 西日本（12場）
            </TabsTrigger>
          </TabsList>
          <TabsContent value="east">
            <StadiumTable data={eastStadiums} />
          </TabsContent>
          <TabsContent value="west">
            <StadiumTable data={westStadiums} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
