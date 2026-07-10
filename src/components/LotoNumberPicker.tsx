"use client";

import { useState } from "react";

type LotoType = "loto6" | "loto7" | "miniloto";

const lotoConfig = {
  loto6: { label: "ロト6", max: 43, pick: 6, color: "bg-amber-500", ring: "ring-amber-500" },
  loto7: { label: "ロト7", max: 37, pick: 7, color: "bg-purple-500", ring: "ring-purple-500" },
  miniloto: { label: "ミニロト", max: 31, pick: 5, color: "bg-green-500", ring: "ring-green-500" },
};

export default function LotoNumberPicker() {
  const [type, setType] = useState<LotoType>("loto6");
  const [selected, setSelected] = useState<number[]>([]);
  const [quick, setQuick] = useState<number[] | null>(null);

  const cfg = lotoConfig[type];

  function toggle(n: number) {
    setQuick(null);
    if (selected.includes(n)) {
      setSelected(selected.filter((x) => x !== n));
    } else if (selected.length < cfg.pick) {
      setSelected([...selected, n].sort((a, b) => a - b));
    }
  }

  function quickPick() {
    const nums: number[] = [];
    const pool = Array.from({ length: cfg.max }, (_, i) => i + 1);
    while (nums.length < cfg.pick) {
      const idx = Math.floor(Math.random() * pool.length);
      nums.push(...pool.splice(idx, 1));
    }
    const sorted = nums.sort((a, b) => a - b);
    setSelected(sorted);
    setQuick(sorted);
  }

  function reset() {
    setSelected([]);
    setQuick(null);
  }

  function handleTypeChange(t: LotoType) {
    setType(t);
    setSelected([]);
    setQuick(null);
  }

  return (
    <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0f0f1a] p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">🎯</span>
        <div>
          <h3 className="text-white font-black text-lg">数字選択シミュレーター</h3>
          <p className="text-gray-300 text-xs">自分で選ぶかクイックピックで自動選択</p>
        </div>
      </div>

      <div className="flex gap-2 mb-5">
        {(Object.keys(lotoConfig) as LotoType[]).map((t) => (
          <button
            key={t}
            onClick={() => handleTypeChange(t)}
            className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${
              type === t ? `${lotoConfig[t].color} text-white` : "bg-white/5 text-gray-300"
            }`}
          >
            {lotoConfig[t].label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300 text-xs">選んだ数字（{selected.length}/{cfg.pick}個）</span>
          {selected.length > 0 && (
            <button onClick={reset} className="text-gray-300 text-xs hover:text-white">クリア</button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 min-h-[48px] p-3 rounded-xl bg-black/30 border border-white/10">
          {selected.map((n) => (
            <span key={n} className={`w-10 h-10 rounded-full ${cfg.color} text-white font-black flex items-center justify-center text-sm`}>
              {n}
            </span>
          ))}
          {selected.length === 0 && <span className="text-gray-300 text-sm">下の数字をタップして選択</span>}
        </div>
      </div>

      <div className="grid grid-cols-7 sm:grid-cols-9 gap-1.5 mb-5">
        {Array.from({ length: cfg.max }, (_, i) => i + 1).map((n) => {
          const isSel = selected.includes(n);
          return (
            <button
              key={n}
              onClick={() => toggle(n)}
              className={`w-full aspect-square rounded-full text-xs font-black transition-all ${
                isSel
                  ? `${cfg.color} text-white scale-110 ${cfg.ring} ring-2`
                  : selected.length >= cfg.pick
                  ? "bg-white/5 text-gray-700 cursor-not-allowed"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>

      <button
        onClick={quickPick}
        className="w-full py-3 rounded-xl gold-gradient text-black font-black hover:opacity-90 transition-opacity"
      >
        🎲 クイックピック（ランダム）
      </button>

      {quick && (
        <div className="mt-4 p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-center">
          <p className="text-gray-300 text-xs mb-2">クイックピック結果</p>
          <div className="flex justify-center flex-wrap gap-2">
            {quick.map((n) => (
              <span key={n} className="w-11 h-11 rounded-full bg-[#d4af37] text-black font-black flex items-center justify-center text-sm">
                {n}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-3">※当選を保証するものではありません</p>
        </div>
      )}
    </div>
  );
}
