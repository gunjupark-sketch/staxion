"use client";

import type { AiAnalysis } from "./types";
import { EmptyState } from "./SharedUI";

export function GoldenSignalTab({ ai }: { ai: AiAnalysis | null }) {
  const signals = ai?.golden_signals;
  if (!signals || signals.length === 0) {
    return <EmptyState message="골든시그널 데이터가 없습니다." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {signals.slice(0, 3).map((signal) => (
        <div
          key={signal.rank}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          {/* Top gradient line */}
          <div className="h-1 bg-gradient-to-r from-brand-neon-safe to-brand-neon" />

          <div className="p-5">
            {/* Rank */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-neon text-[#1a1a1a] text-xs font-black">
                {String(signal.rank).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                SIGNAL {String(signal.rank).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-base font-bold text-gray-900 mb-3">{signal.title}</h4>

            {/* Evidence */}
            <div className="mb-3">
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">근거</p>
              <p className="text-sm text-gray-600 leading-relaxed">{signal.evidence}</p>
            </div>

            {/* Strategies */}
            {signal.strategies && signal.strategies.length > 0 && (
              <div className="mb-3">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">전략</p>
                <ul className="space-y-1">
                  {signal.strategies.map((s, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-1.5">
                      <span className="shrink-0 mt-1.5 h-1 w-1 rounded-full bg-brand-neon-safe" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* KPI */}
            {signal.kpi && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">KPI</p>
                <p className="text-sm font-semibold text-brand-neon-text">{signal.kpi}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
