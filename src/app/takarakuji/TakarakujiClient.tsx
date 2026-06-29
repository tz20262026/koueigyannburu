"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const loto6History = [
  { kai: "1924", date: "2026/06/26", nums: [5, 11, 17, 23, 31, 42], bonus: 9, prize1: "4億2000万円" },
  { kai: "1923", date: "2026/06/23", nums: [3, 8, 15, 27, 35, 41], bonus: 12, prize1: "2億1000万円" },
  { kai: "1922", date: "2026/06/19", nums: [1, 9, 19, 28, 33, 43], bonus: 6, prize1: "1億8000万円" },
  { kai: "1921", date: "2026/06/16", nums: [7, 14, 22, 30, 36, 40], bonus: 2, prize1: "3億6000万円" },
  { kai: "1920", date: "2026/06/12", nums: [4, 10, 18, 25, 32, 38], bonus: 20, prize1: "1億5000万円" },
  { kai: "1919", date: "2026/06/09", nums: [6, 13, 21, 29, 34, 43], bonus: 16, prize1: "2億8000万円" },
  { kai: "1918", date: "2026/06/05", nums: [2, 11, 20, 26, 37, 42], bonus: 8, prize1: "1億6000万円" },
];

const loto7History = [
  { kai: "631", date: "2026/06/27", nums: [3, 12, 19, 24, 30, 35, 37], bonus: [8, 21], prize1: "3億2000万円" },
  { kai: "630", date: "2026/06/20", nums: [5, 10, 17, 22, 28, 33, 36], bonus: [7, 15], prize1: "キャリーオーバー" },
  { kai: "629", date: "2026/06/13", nums: [1, 8, 16, 23, 29, 34, 37], bonus: [4, 11], prize1: "2億4000万円" },
  { kai: "628", date: "2026/06/06", nums: [6, 11, 18, 25, 31, 34, 37], bonus: [9, 20], prize1: "4億1000万円" },
  { kai: "627", date: "2026/05/30", nums: [2, 9, 15, 21, 27, 32, 36], bonus: [5, 13], prize1: "1億8000万円" },
];

const miniHistory = [
  { kai: "1231", date: "2026/06/24", nums: [4, 9, 16, 22, 28], bonus: 7, prize1: "834万円" },
  { kai: "1230", date: "2026/06/17", nums: [2, 11, 18, 24, 30], bonus: 5, prize1: "1041万円" },
  { kai: "1229", date: "2026/06/10", nums: [7, 13, 20, 26, 31], bonus: 3, prize1: "714万円" },
  { kai: "1228", date: "2026/06/03", nums: [1, 8, 15, 22, 29], bonus: 10, prize1: "987万円" },
];

export default function TakarakujiClient() {
  const [loto6Count, setLoto6Count] = useState(3);
  const [loto7Count, setLoto7Count] = useState(3);

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          🎉 最新当選数字
          <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">サンプルデータ</Badge>
        </h2>

        <Tabs defaultValue="loto6">
          <TabsList className="bg-[#1a1a2e] border border-white/10 mb-6 flex-wrap h-auto gap-1">
            <TabsTrigger value="loto6" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs sm:text-sm">
              6️⃣ ロト6
            </TabsTrigger>
            <TabsTrigger value="loto7" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs sm:text-sm">
              7️⃣ ロト7
            </TabsTrigger>
            <TabsTrigger value="mini" className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm">
              🎯 ミニロト
            </TabsTrigger>
          </TabsList>

          <TabsContent value="loto6">
            <div className="space-y-4">
              {loto6History.slice(0, loto6Count).map((r) => (
                <div key={r.kai} className="p-5 rounded-xl border border-amber-700/30 bg-gradient-to-br from-amber-900/10 to-[#0f0f1a]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-3">
                    <span className="text-white font-bold">第{r.kai}回</span>
                    <span className="text-gray-500 text-sm sm:ml-2">{r.date}</span>
                    <span className="sm:ml-auto text-[#d4af37] font-bold text-sm">1等 {r.prize1}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    {r.nums.map((n) => (
                      <span key={n} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#d4af37] text-black font-black text-sm">
                        {n}
                      </span>
                    ))}
                    <span className="text-gray-500 text-xs px-1">ボーナス</span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-amber-400 text-amber-300 font-black text-sm">
                      {r.bonus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {loto6Count < loto6History.length && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setLoto6Count(loto6History.length)}
                  className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all inline-flex items-center gap-2"
                >
                  過去の当選数字を見る（残り{loto6History.length - loto6Count}回分） ▼
                </button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="loto7">
            <div className="space-y-4">
              {loto7History.slice(0, loto7Count).map((r) => (
                <div key={r.kai} className="p-5 rounded-xl border border-purple-700/30 bg-gradient-to-br from-purple-900/10 to-[#0f0f1a]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-3">
                    <span className="text-white font-bold">第{r.kai}回</span>
                    <span className="text-gray-500 text-sm sm:ml-2">{r.date}</span>
                    <span className="sm:ml-auto text-[#d4af37] font-bold text-sm">1等 {r.prize1}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    {r.nums.map((n) => (
                      <span key={n} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#d4af37] text-black font-black text-sm">
                        {n}
                      </span>
                    ))}
                    <span className="text-gray-500 text-xs px-1">ボーナス</span>
                    {r.bonus.map((n) => (
                      <span key={n} className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-400 text-purple-300 font-black text-sm">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {loto7Count < loto7History.length && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setLoto7Count(loto7History.length)}
                  className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all inline-flex items-center gap-2"
                >
                  過去の当選数字を見る（残り{loto7History.length - loto7Count}回分） ▼
                </button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="mini">
            <div className="space-y-4">
              {miniHistory.map((r) => (
                <div key={r.kai} className="p-5 rounded-xl border border-green-700/30 bg-gradient-to-br from-green-900/10 to-[#0f0f1a]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-3">
                    <span className="text-white font-bold">第{r.kai}回</span>
                    <span className="text-gray-500 text-sm sm:ml-2">{r.date}</span>
                    <span className="sm:ml-auto text-[#d4af37] font-bold text-sm">1等 {r.prize1}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    {r.nums.map((n) => (
                      <span key={n} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#d4af37] text-black font-black text-sm">
                        {n}
                      </span>
                    ))}
                    <span className="text-gray-500 text-xs px-1">ボーナス</span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-400 text-green-300 font-black text-sm">
                      {r.bonus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
