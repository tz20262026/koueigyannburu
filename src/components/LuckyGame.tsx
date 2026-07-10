"use client";

import { useState } from "react";

const genres = [
  { label: "🐎 競馬", key: "keiba", max: 18, unit: "番枠", color: "text-emerald-400" },
  { label: "⛵ 競艇", key: "kyotei", max: 6, unit: "コース", color: "text-cyan-400" },
  { label: "🚴 競輪", key: "keirin", max: 9, unit: "番車", color: "text-blue-400" },
  { label: "🏎️ オート", key: "auto", max: 8, unit: "番車", color: "text-orange-400" },
  { label: "🎯 ロト6", key: "loto", max: 43, unit: "", color: "text-purple-400", count: 6 },
];

function getRand(seed: number, max: number, offset: number) {
  const x = Math.sin(seed * 9301 + offset * 49297 + 233) * 1000003;
  return (Math.abs(Math.floor(x)) % max) + 1;
}

function getUniqueNums(seed: number, max: number, count: number): number[] {
  const nums: number[] = [];
  let offset = 0;
  while (nums.length < count) {
    const n = getRand(seed, max, offset++);
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.sort((a, b) => a - b);
}

export default function LuckyGame() {
  const [birth, setBirth] = useState("");
  const [results, setResults] = useState<Record<string, number[]> | null>(null);
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function handleCalc() {
    if (!birth) return;
    setLoading(true);
    setRevealed(false);
    setTimeout(() => {
      const seed = birth.replace(/-/g, "").split("").reduce((a, c) => a + c.charCodeAt(0), 0);
      const today = new Date();
      const daySeed = seed + today.getDate() * 1000 + today.getMonth() * 100;
      const r: Record<string, number[]> = {};
      genres.forEach((g) => {
        r[g.key] = getUniqueNums(daySeed + g.key.charCodeAt(0) * 77, g.max, g.count ?? 1);
      });
      setResults(r);
      setLoading(false);
      setTimeout(() => setRevealed(true), 100);
    }, 1500);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/5 to-[#0f0f1a] p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🔮</div>
          <h2 className="text-2xl font-black text-white">今日のラッキーナンバー</h2>
          <p className="text-gray-300 text-sm mt-1">生年月日と今日の日付から今日だけの勝負数字を算出</p>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            max="2010-01-01"
            min="1930-01-01"
            className="flex-1 px-4 py-3 rounded-xl bg-[#08080f] border border-white/20 text-white focus:border-[#d4af37] focus:outline-none text-sm"
          />
          <button
            onClick={handleCalc}
            disabled={!birth || loading}
            className="px-6 py-3 rounded-xl gold-gradient text-black font-black text-sm disabled:opacity-50 hover:opacity-90 transition-opacity shrink-0"
          >
            {loading ? "算出中…" : "占う！"}
          </button>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block w-10 h-10 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-gray-300 text-sm">運勢データを解析中…</p>
          </div>
        )}

        {results && !loading && (
          <div className={`space-y-3 transition-all duration-700 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {genres.map((g) => {
              const nums = results[g.key] ?? [];
              return (
                <div key={g.key} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-sm font-bold text-gray-300 w-20 shrink-0">{g.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {nums.map((n) => (
                      <span
                        key={n}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-base bg-white/10 ${g.color} border border-current/30`}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-300 text-xs ml-auto shrink-0">{g.unit}</span>
                </div>
              );
            })}
            <p className="text-center text-gray-300 text-xs pt-2">
              ※エンターテインメント目的です。購入判断の参考にしないでください。
            </p>
            <button
              onClick={() => { setResults(null); setBirth(""); setRevealed(false); }}
              className="w-full py-2 rounded-xl border border-white/20 text-gray-300 text-sm hover:border-white/40 hover:text-white transition-all"
            >
              もう一度占う
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
