"use client";

import { useState } from "react";

type BetType = "tansho" | "fukusho" | "umaren" | "wide" | "umatan" | "sanrenpuku" | "sanrentan";

const betTypes: { key: BetType; label: string; desc: string; refundRate: number }[] = [
  { key: "tansho", label: "単勝", desc: "1着を当てる", refundRate: 0.80 },
  { key: "fukusho", label: "複勝", desc: "3着以内を当てる", refundRate: 0.80 },
  { key: "umaren", label: "馬連", desc: "1・2着の組み合わせ", refundRate: 0.775 },
  { key: "wide", label: "ワイド", desc: "3着以内2頭の組み合わせ", refundRate: 0.775 },
  { key: "umatan", label: "馬単", desc: "1・2着の順番", refundRate: 0.775 },
  { key: "sanrenpuku", label: "3連複", desc: "3着以内3頭の組み合わせ", refundRate: 0.725 },
  { key: "sanrentan", label: "3連単", desc: "1・2・3着の順番全て", refundRate: 0.725 },
];

export default function BetCalculator() {
  const [betType, setBetType] = useState<BetType>("tansho");
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
    <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#0f0f1a] to-[#08080f] p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">🧮</span>
        <div>
          <h3 className="text-white font-black text-lg">馬券払戻金シミュレーター</h3>
          <p className="text-gray-500 text-xs">オッズと購入金額を入れると払戻金を計算</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-gray-400 text-xs mb-2 block">馬券種別</label>
          <div className="grid grid-cols-4 gap-2">
            {betTypes.map((b) => (
              <button
                key={b.key}
                onClick={() => { setBetType(b.key); setResult(null); }}
                className={`py-2 px-1 rounded-lg text-xs font-bold transition-all ${
                  betType === b.key
                    ? "bg-[#d4af37] text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-1">{selected.desc}（還元率 {(selected.refundRate * 100).toFixed(1)}%）</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-gray-400 text-xs mb-1 block">購入金額（円）</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => { setAmount(e.target.value); setResult(null); }}
              min={100}
              step={100}
              className="w-full px-3 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-[#d4af37] focus:outline-none"
              placeholder="100"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1 block">オッズ</label>
            <input
              type="number"
              value={odds}
              onChange={(e) => { setOdds(e.target.value); setResult(null); }}
              step={0.1}
              min={1}
              className="w-full px-3 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-[#d4af37] focus:outline-none"
              placeholder="例: 12.5"
            />
          </div>
        </div>

        <button
          onClick={calc}
          disabled={!odds || !amount}
          className="w-full py-3 rounded-xl gold-gradient text-black font-black hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          計算する
        </button>

        {result && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-center">
              <div className="text-gray-400 text-xs mb-1">払戻金</div>
              <div className="text-[#d4af37] font-black text-2xl">{result.payout.toLocaleString()}円</div>
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
