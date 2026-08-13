"use client";

import { useState } from "react";

type HorseInput = { name: string; winRate: string; odds: string };

const emptyRow = (): HorseInput => ({ name: "", winRate: "", odds: "" });

type Judge = "買い" | "見送り";

type ResultRow = { name: string; ev: number; judge: Judge };

type Result = {
  rows: ResultRow[];
  avgEv: number;
  riskLevel: "低" | "中" | "高";
};

export default function AIExpectedValueSimulator() {
  const [horses, setHorses] = useState<HorseInput[]>([emptyRow(), emptyRow(), emptyRow()]);
  const [result, setResult] = useState<Result | null>(null);

  function updateHorse(i: number, field: keyof HorseInput, value: string) {
    const next = [...horses];
    next[i] = { ...next[i], [field]: value };
    setHorses(next);
    setResult(null);
  }

  function addRow() {
    if (horses.length >= 6) return;
    setHorses([...horses, emptyRow()]);
    setResult(null);
  }

  function removeRow(i: number) {
    if (horses.length <= 1) return;
    setHorses(horses.filter((_, idx) => idx !== i));
    setResult(null);
  }

  function calc() {
    const valid = horses
      .map((h, i) => ({ ...h, i }))
      .filter((h) => parseFloat(h.winRate) > 0 && parseFloat(h.odds) > 0);

    if (valid.length === 0) return;

    const rows: ResultRow[] = valid.map((h) => {
      const p = parseFloat(h.winRate) / 100;
      const o = parseFloat(h.odds);
      const ev = p * o * 100;
      return {
        name: h.name || `${h.i + 1}頭目`,
        ev,
        judge: ev >= 100 ? "買い" : "見送り",
      };
    });

    const avgEv = rows.reduce((s, r) => s + r.ev, 0) / rows.length;

    const winRates = valid.map((h) => parseFloat(h.winRate) / 100);
    const meanP = winRates.reduce((s, p) => s + p, 0) / winRates.length;
    const variance = winRates.reduce((s, p) => s + (p - meanP) ** 2, 0) / winRates.length;
    const sd = Math.sqrt(variance);
    const cv = meanP > 0 ? sd / meanP : 0;
    const riskLevel: "低" | "中" | "高" = cv < 0.3 ? "低" : cv < 0.6 ? "中" : "高";

    setResult({ rows, avgEv, riskLevel });
  }

  return (
    <div className="rounded-2xl border border-emerald-700/30 bg-gradient-to-br from-[#0f0f1a] to-[#08080f] p-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🤖</span>
        <div>
          <h3 className="text-white font-black text-lg">AI期待値・回収率シミュレーター</h3>
          <p className="text-gray-300 text-xs">「AI予想勝率 × オッズ」で期待値を自動計算。買い時かどうかを判定します</p>
        </div>
      </div>
      <p className="text-gray-300 text-xs leading-relaxed mb-5 border-l-2 border-emerald-700/40 pl-3">
        競馬AIの基本原理は「的中確率 × オッズ = 期待値」。期待値が100%を超える馬券を狙い続けることが、
        長期的な回収率アップの鍵です。自分の予想勝率（またはAI予想ソフトが出した勝率）を入力するだけで、
        その馬券が「買い」か「見送り」かを一瞬で判定できます。
      </p>

      <div className="space-y-3">
        <div className="grid grid-cols-[1fr_80px_80px_28px] gap-2 text-gray-300 text-xs px-1">
          <span>馬名（任意）</span>
          <span>AI予想勝率%</span>
          <span>オッズ</span>
          <span></span>
        </div>
        {horses.map((h, i) => (
          <div key={i} className="grid grid-cols-[1fr_80px_80px_28px] gap-2 items-center">
            <input
              type="text"
              value={h.name}
              onChange={(e) => updateHorse(i, "name", e.target.value)}
              placeholder={`${i + 1}頭目`}
              className="w-full px-3 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-emerald-600 focus:outline-none"
            />
            <input
              type="number"
              value={h.winRate}
              onChange={(e) => updateHorse(i, "winRate", e.target.value)}
              min={0}
              max={100}
              step={0.1}
              placeholder="例: 25"
              className="w-full px-2 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-emerald-600 focus:outline-none"
            />
            <input
              type="number"
              value={h.odds}
              onChange={(e) => updateHorse(i, "odds", e.target.value)}
              min={1}
              step={0.1}
              placeholder="例: 5.5"
              className="w-full px-2 py-2 rounded-lg bg-[#08080f] border border-white/20 text-white text-sm focus:border-emerald-600 focus:outline-none"
            />
            <button
              onClick={() => removeRow(i)}
              disabled={horses.length <= 1}
              className="w-7 h-7 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-30 text-sm"
              aria-label="削除"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          onClick={addRow}
          disabled={horses.length >= 6}
          className="text-xs text-emerald-400 hover:text-emerald-300 disabled:opacity-30 transition-colors"
        >
          ＋ 頭を追加（最大6頭）
        </button>
      </div>

      <button
        onClick={calc}
        className="w-full mt-5 py-3 rounded-xl gold-gradient text-black font-black hover:opacity-90 transition-opacity"
      >
        期待値を計算する
      </button>

      {result && (
        <div className="mt-5 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-300 text-xs">
                  <th className="pb-2 text-left">馬名</th>
                  <th className="pb-2 text-right">期待値</th>
                  <th className="pb-2 text-right pr-1">判定</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {result.rows.map((r) => (
                  <tr key={r.name}>
                    <td className="py-2 text-white text-sm font-bold">{r.name}</td>
                    <td className={`py-2 text-right font-black ${r.ev >= 100 ? "text-emerald-400" : "text-gray-400"}`}>
                      {r.ev.toFixed(1)}%
                    </td>
                    <td className="py-2 text-right pr-1">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                          r.judge === "買い"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        {r.judge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-center">
              <div className="text-gray-300 text-xs mb-1">平均期待値</div>
              <div className="text-[#d4af37] font-black text-2xl">{result.avgEv.toFixed(1)}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-gray-300 text-xs mb-1">リスクレベル</div>
              <div
                className={`font-black text-2xl ${
                  result.riskLevel === "低"
                    ? "text-emerald-400"
                    : result.riskLevel === "中"
                    ? "text-amber-400"
                    : "text-red-400"
                }`}
              >
                {result.riskLevel}
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-xs leading-relaxed">
            {result.avgEv >= 100
              ? "平均期待値が100%を超えています。理論上は長期的にプラス収支が見込める組み合わせです。"
              : "平均期待値が100%未満です。このままでは長期的にマイナス収支になりやすいため、購入を見送るか勝率の見積もりを見直しましょう。"}
            {" "}リスクレベルは各馬の勝率のばらつきから算出した簡易指標で、「高」ほど結果が大きく振れやすいことを示します
            （動画解説でいうシャープレシオの考え方に近い、リターンに対するブレの目安です）。
          </p>
        </div>
      )}
    </div>
  );
}
