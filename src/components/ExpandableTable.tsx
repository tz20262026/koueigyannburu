"use client";

import { useState } from "react";

interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  render?: (value: string, row: Record<string, string>) => React.ReactNode;
}

interface ExpandableTableProps {
  columns: Column[];
  rows: Record<string, string>[];
  initialCount?: number;
  accentColor?: string;
}

export default function ExpandableTable({
  columns,
  rows,
  initialCount = 5,
  accentColor = "bg-[#d4af37] text-black",
}: ExpandableTableProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? rows : rows.slice(0, initialCount);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-white/10 text-gray-400 text-sm">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`pb-3 ${col.align === "right" ? "text-right pr-4" : col.align === "center" ? "text-center" : "text-left pl-4"}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {visible.map((row, i) => (
              <tr key={i} className="hover:bg-white/3 transition-colors">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-3 ${col.align === "right" ? "text-right pr-4" : col.align === "center" ? "text-center" : "pl-4"}`}
                  >
                    {col.render ? col.render(row[col.key], row) : (
                      <span className="text-gray-300 text-sm">{row[col.key]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rows.length > initialCount && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all flex items-center gap-2 mx-auto`}
          >
            {expanded ? (
              <>折りたたむ <span>▲</span></>
            ) : (
              <>もっと見る（残り{rows.length - initialCount}件） <span>▼</span></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
