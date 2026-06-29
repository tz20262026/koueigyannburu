"use client";

import { useState } from "react";

const questions = [
  {
    q: "競馬のG1レースはJRAで年間何レース開催される？",
    options: ["12レース", "24レース", "36レース", "48レース"],
    answer: 1,
    explanation: "JRAのG1は年間24レース。天皇賞・日本ダービー・安田記念など豪華なラインナップ。",
  },
  {
    q: "競艇（ボートレース）で1コースの全国平均勝率は？",
    options: ["約30%", "約43%", "約55%", "約65%"],
    answer: 1,
    explanation: "全国平均で約43%。競技場によって大きく差があり、大村は55%超、戸田は30%台。",
  },
  {
    q: "競輪で「SS」ランクの選手は全体の何%くらい？",
    options: ["約1%", "約5%", "約10%", "約20%"],
    answer: 0,
    explanation: "SS（スーパースター）はランクの最上位で全体の約1〜2%。古性優作・松浦悠士など超一流選手のみ。",
  },
  {
    q: "ロト6の1等当選確率はどのくらい？",
    options: ["約1/100万", "約1/609万", "約1/1029万", "約1/1億"],
    answer: 1,
    explanation: "ロト6の1等は約1/609万。ロト7は約1/1029万でさらに低い。",
  },
  {
    q: "宝くじの当選金に所得税は？",
    options: ["20%かかる", "10%かかる", "かからない（非課税）", "50%以上かかる"],
    answer: 2,
    explanation: "宝くじの当選金は完全非課税！どんな高額でも所得税・住民税ゼロ。ただし贈与は別。",
  },
  {
    q: "オートレースの競走距離は通常何周？",
    options: ["3周", "5周", "8周", "10周"],
    answer: 1,
    explanation: "オートレースは500m×6周コースで通常8周（4,000m）。レース展開が重要。",
  },
];

export default function GamblingQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function handleAnswer(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function reset() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0f0f1a] p-6 text-center">
        <div className="text-5xl mb-4">{pct >= 80 ? "🏆" : pct >= 50 ? "📊" : "📚"}</div>
        <h3 className="text-white font-black text-xl mb-2">クイズ終了！</h3>
        <div className="text-[#d4af37] font-black text-4xl mb-2">{score}/{questions.length}問正解</div>
        <p className="text-gray-400 text-sm mb-2">正答率 {pct}%</p>
        <p className="text-gray-300 text-sm mb-5">
          {pct >= 80 ? "素晴らしい！ギャンブル博士レベル 🎉" : pct >= 50 ? "なかなかの知識！もう少しで上級者" : "基本知識を身につけてレベルアップ！"}
        </p>
        <button onClick={reset} className="px-6 py-3 rounded-xl gold-gradient text-black font-black hover:opacity-90 transition-opacity">
          もう一度挑戦
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-xs">問題 {current + 1}/{questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-6 h-1.5 rounded-full transition-all ${
                i < current ? "bg-[#d4af37]" : i === current ? "bg-[#d4af37]/60" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <span className="text-[#d4af37] font-black text-sm">{score}点</span>
      </div>

      <h3 className="text-white font-bold text-base mb-4 leading-relaxed">{q.q}</h3>

      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let cls = "w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ";
          if (selected === null) {
            cls += "border-white/10 text-gray-300 hover:border-[#d4af37]/40 hover:bg-white/5";
          } else if (i === q.answer) {
            cls += "border-emerald-500 bg-emerald-500/10 text-emerald-300";
          } else if (i === selected) {
            cls += "border-red-500 bg-red-500/10 text-red-300";
          } else {
            cls += "border-white/5 text-gray-600";
          }
          return (
            <button key={i} className={cls} onClick={() => handleAnswer(i)}>
              <span className="font-black mr-2 text-gray-500">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
          <p className="text-gray-300 text-xs leading-relaxed">
            <span className="text-[#d4af37] font-black">解説: </span>{q.explanation}
          </p>
        </div>
      )}

      {selected !== null && (
        <button onClick={next} className="w-full py-3 rounded-xl gold-gradient text-black font-black hover:opacity-90 transition-opacity">
          {current + 1 >= questions.length ? "結果を見る" : "次の問題 →"}
        </button>
      )}
    </div>
  );
}
