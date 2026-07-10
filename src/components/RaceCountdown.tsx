"use client";

import { useState, useEffect } from "react";

const races = [
  { name: "東京11R", time: "15:40", genre: "競馬", color: "text-emerald-400" },
  { name: "大村SG第1R", time: "14:00", genre: "競艇", color: "text-cyan-400" },
  { name: "松山G1第7R", time: "20:00", genre: "競輪", color: "text-blue-400" },
  { name: "伊勢崎11R", time: "19:30", genre: "オートレース", color: "text-orange-400" },
];

function getSecondsUntil(timeStr: string): number {
  const now = new Date();
  const [h, m] = timeStr.split(":").map(Number);
  const target = new Date(now);
  target.setHours(h, m, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
}

function fmt(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function RaceCountdown() {
  const [times, setTimes] = useState<number[]>(races.map((r) => getSecondsUntil(r.time)));

  useEffect(() => {
    const id = setInterval(() => {
      setTimes(races.map((r) => getSecondsUntil(r.time)));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const next = races.reduce((min, r, i) => (times[i] < times[min] ? i : min), 0);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <h3 className="text-white font-black text-sm">次のレースまで</h3>
      </div>
      <div className="space-y-2">
        {races.map((r, i) => (
          <div
            key={r.name}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
              i === next ? "bg-white/10 border border-[#d4af37]/30" : "bg-white/5"
            }`}
          >
            <div>
              <span className={`text-xs font-bold ${r.color}`}>{r.genre}</span>
              <div className="text-white text-sm font-medium">{r.name}</div>
            </div>
            <div className={`font-mono font-black text-lg ${i === next ? "text-[#d4af37]" : "text-gray-300"}`}>
              {fmt(times[i])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
