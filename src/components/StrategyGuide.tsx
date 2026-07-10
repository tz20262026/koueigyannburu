"use client";

import { useState } from "react";

interface Article {
  title: string;
  tag: string;
  tagColor: string;
  summary: string;
  body: string;
}

interface StrategyGuideProps {
  title: string;
  articles: Article[];
  accentColor?: string;
}

export default function StrategyGuide({ title, articles, accentColor = "text-[#d4af37]" }: StrategyGuideProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-black text-white mb-6">{title}</h2>
      <div className="space-y-3">
        {articles.map((a, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-[#0f0f1a] overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${a.tagColor}`}>{a.tag}</span>
                <span className="text-white font-bold text-sm leading-snug">{a.title}</span>
              </div>
              <svg
                className={`w-5 h-5 shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""} ${accentColor}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-5 border-t border-white/5">
                <p className="text-gray-300 text-sm mt-3 mb-3 leading-relaxed">{a.summary}</p>
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{a.body}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
