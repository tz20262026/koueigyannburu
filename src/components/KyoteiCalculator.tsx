"use client";

import { useState } from "react";

type KyoteiBet = "tansho" | "fukusho" | "niren" | "nirentan" | "sanrenpuku" | "sanrentan";

const betTypes: { key: KyoteiBet; label: string; boats: number; refundRate: number }[] = [
  { key: "tansho", label: "単勝", boats: 1, refundRate: 0.75 },
  { key: "fukusho", label: "複勝", boats: 1, refundRate: 0.75 },
  { key: "niren", label: "2連複", boats: 2, refundRate: 0.75 },
  { key: "nirentan", label: "2連単", boats: 2, refundRate: 0.75 },
  { key: "sanrenpuku", label: "3連複", boats: 3, refundRate: 0.725 },
  { key: "sanrentan", label: "3連単", boats: 3, refundRate: 0.725 },
];

const combos: Record<KyoteiBet, number> = {
  tansho: 6,
  fukusho: 6,
  niren: 15,
  nirentan: 30,
  sanrenpuku: 20,
  sanrentan: 120,
};

export default function KyoteiCalculator() {
  const [betType, setBetType] = useState<KyoteiBet>("sanrentan");
  const [amount, setAmount] = useState("100");
  const [odds, setOdds] = useState("");
  const [result, setResult] = useState<{ payout: number; profit: number } | null>(null);

  function calc() {
    const a = parseInt(amount) || 0;
    const o = parseFloat(odds) || 0;
    if (a <= 0 || o <= 0) return;
    const payout = Math.floor((a * o) / 100) * 100;
    setResult({ payout, profit: payout - a });
  }

  const selected = betTypes.find((b) => b.key === betType)!;

  return (
    <div className="rounded-2xl border border-cyan-700/40 bg-gradient-to-br from-cyan-950/30 to-[#0f0f1a] p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">⛵</span>
        <div>
          <h3 className="text-white font-black text-lg">舟券払戻シミュレーター</h3>
          <p className="text-gray-500 text-xs">競艇の払戻金を素早く計算</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-gray-400 text-xs mb-2 block">舟券種別</label>
          <div className="grid grid-cols-3 gap-2">
            {betTypes.map((b) => (
              <button
                key={b.key}
                onClick={() => { setBetType(b.key); setResult(null); }}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                  betType === b.key ? "bg-cyan-500 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-1">組合せ数：{combos[betType]}通り</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-gray-400 text-xs mb-1 block">購入金額（円）</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => { setAmount(e.target.value); setResult(null); }}
              min={100} step={100}
              className="w-full px-3 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1 block">オッズ</label>
            <input
              type="number"
              value={odds}
              onChange={(e) => { setOdds(e.target.value); setResult(null); }}
              step={0.1} min={1}
              className="w-full px-3 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-cyan-500 focus:outline-none"
              placeholder="例: 25.6"
            />
          </div>
        </div>

        <button
          onClick={calc}
          disabled={!odds || !amount}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          計算する
        </button>

        {result && (
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
              <div className="text-gray-400 text-xs mb-1">払戻金</div>
              <div className="text-cyan-400 font-black text-2xl">{result.payout.toLocaleString()}円</div>
            </div>
            <div className={`p-4 rounded-xl border text-center ${result.profit >= 0 ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
              <div className="text-gray-400 text-xs mb-1">収支</div>
              <div className={`font-black text-2xl ${result.profit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                {result.profit >= 0 ? "+" : ""}{result.profit.toLocaleString()}円
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
