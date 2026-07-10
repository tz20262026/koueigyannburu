"use client";

import { useState } from "react";

interface Horse {
  num: number;
  name: string;
  jockey: string;
  trainer: string;
  weight: number;
  weightChange: number;
  age: number;
  popularity: number;
  odds: number;
  winRate: string;
  color: string;
}

const sampleHorses: Horse[] = [
  { num: 1, name: "サイレントキング", jockey: "川田将雅", trainer: "藤岡健一", weight: 480, weightChange: -2, age: 4, popularity: 1, odds: 2.4, winRate: "32%", color: "bg-white text-black" },
  { num: 2, name: "スターライトウェーブ", jockey: "戸崎圭太", trainer: "国枝栄", weight: 466, weightChange: +4, age: 5, popularity: 3, odds: 5.8, winRate: "18%", color: "bg-black text-white" },
  { num: 3, name: "ミラクルフラッシュ", jockey: "福永祐一", trainer: "池江泰寿", weight: 494, weightChange: 0, age: 4, popularity: 5, odds: 9.2, winRate: "12%", color: "bg-red-600 text-white" },
  { num: 4, name: "ゴールデンアロー", jockey: "横山武史", trainer: "手塚貴久", weight: 476, weightChange: -6, age: 6, popularity: 2, odds: 4.1, winRate: "23%", color: "bg-blue-600 text-white" },
  { num: 5, name: "ダイヤモンドレイン", jockey: "松山弘平", trainer: "昆貢", weight: 458, weightChange: +2, age: 3, popularity: 7, odds: 14.5, winRate: "8%", color: "bg-yellow-400 text-black" },
  { num: 6, name: "サンダーボルト", jockey: "岩田康誠", trainer: "友道康夫", weight: 502, weightChange: -4, age: 5, popularity: 4, odds: 7.6, winRate: "14%", color: "bg-green-600 text-white" },
  { num: 7, name: "クリムゾンローズ", jockey: "M.デムーロ", trainer: "木村哲也", weight: 444, weightChange: +8, age: 4, popularity: 8, odds: 18.3, winRate: "6%", color: "bg-orange-500 text-white" },
  { num: 8, name: "フェアリーウィンド", jockey: "浜中俊", trainer: "高野友和", weight: 472, weightChange: -2, age: 5, popularity: 6, odds: 11.0, winRate: "10%", color: "bg-pink-500 text-white" },
];

export default function OddsTable() {
  const [sortKey, setSortKey] = useState<"num" | "odds" | "popularity">("popularity");
  const [selectedHorses, setSelectedHorses] = useState<number[]>([]);

  const sorted = [...sampleHorses].sort((a, b) => {
    if (sortKey === "odds") return a.odds - b.odds;
    if (sortKey === "popularity") return a.popularity - b.popularity;
    return a.num - b.num;
  });

  const toggleHorse = (num: number) => {
    setSelectedHorses((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  return (
    <div className="rounded-2xl border border-emerald-700/30 bg-[#0a0a14] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div>
          <h3 className="text-white font-black text-lg">📊 オッズ表（サンプル）</h3>
          <p className="text-gray-300 text-xs">東京11R・芝1600m・G1</p>
        </div>
        <div className="flex gap-2">
          {(["num", "odds", "popularity"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setSortKey(key)}
              className={`text-xs px-3 py-1 rounded-full border transition-all ${
                sortKey === key
                  ? "bg-emerald-600 border-emerald-500 text-white"
                  : "border-white/20 text-gray-300 hover:border-white/40"
              }`}
            >
              {key === "num" ? "馬番" : key === "odds" ? "オッズ" : "人気"}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-gray-300 text-xs">
              <th className="py-2 px-3 text-left w-8"></th>
              <th className="py-2 px-3 text-left">馬</th>
              <th className="py-2 px-3 text-center">騎手</th>
              <th className="py-2 px-3 text-center">馬体重</th>
              <th className="py-2 px-3 text-center">人気</th>
              <th className="py-2 px-3 text-right">単勝オッズ</th>
              <th className="py-2 px-3 text-right">推定勝率</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((h) => (
              <tr
                key={h.num}
                className={`border-b border-white/5 cursor-pointer transition-colors ${
                  selectedHorses.includes(h.num) ? "bg-emerald-900/20" : "hover:bg-white/5"
                }`}
                onClick={() => toggleHorse(h.num)}
              >
                <td className="py-3 px-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${h.color}`}>
                    {h.num}
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="text-white font-bold">{h.name}</div>
                  <div className="text-gray-300 text-xs">{h.age}歳 / {h.trainer}厩舎</div>
                </td>
                <td className="py-3 px-3 text-center text-gray-300 text-xs whitespace-nowrap">{h.jockey}</td>
                <td className="py-3 px-3 text-center">
                  <span className="text-gray-200">{h.weight}kg</span>
                  <span className={`text-xs ml-1 ${h.weightChange > 0 ? "text-red-400" : h.weightChange < 0 ? "text-cyan-400" : "text-gray-300"}`}>
                    {h.weightChange > 0 ? `+${h.weightChange}` : h.weightChange === 0 ? "±0" : h.weightChange}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`font-black ${h.popularity <= 3 ? "text-[#d4af37]" : "text-gray-300"}`}>
                    {h.popularity}番人気
                  </span>
                </td>
                <td className="py-3 px-3 text-right">
                  <span className={`font-black text-lg ${h.odds < 5 ? "text-red-400" : h.odds < 10 ? "text-amber-400" : "text-gray-300"}`}>
                    {h.odds.toFixed(1)}
                  </span>
                </td>
                <td className="py-3 px-3 text-right text-emerald-400 font-bold">{h.winRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedHorses.length > 0 && (
        <div className="px-5 py-4 border-t border-emerald-700/30 bg-emerald-900/10">
          <p className="text-emerald-300 text-sm font-bold mb-1">
            ✅ 選択中：{selectedHorses.sort((a, b) => a - b).map((n) => `${n}番`).join(" / ")}
          </p>
          <p className="text-gray-300 text-xs">
            ※これはサンプルデータです。実際の予想は公式オッズをご確認ください
          </p>
        </div>
      )}

      {selectedHorses.length === 0 && (
        <div className="px-5 py-3 border-t border-white/5">
          <p className="text-gray-300 text-xs">👆 行をタップして注目馬をチェック</p>
        </div>
      )}
    </div>
  );
}
