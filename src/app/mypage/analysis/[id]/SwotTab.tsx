"use client";

import type { AiAnalysis } from "./types";
import { EmptyState } from "./SharedUI";

export function SwotTab({ ai }: { ai: AiAnalysis | null }) {
  const swot = ai?.swot;
  if (!swot) return <EmptyState message="SWOT 분석 데이터가 없습니다." />;

  const quadrants = [
    {
      key: "strengths",
      label: "Strengths (강점)",
      items: swot.strengths,
      bg: "bg-green-50",
      border: "border-green-200",
      heading: "text-green-700",
      icon: "S",
    },
    {
      key: "weaknesses",
      label: "Weaknesses (약점)",
      items: swot.weaknesses,
      bg: "bg-red-50",
      border: "border-red-200",
      heading: "text-red-600",
      icon: "W",
    },
    {
      key: "opportunities",
      label: "Opportunities (기회)",
      items: swot.opportunities,
      bg: "bg-blue-50",
      border: "border-blue-200",
      heading: "text-blue-600",
      icon: "O",
    },
    {
      key: "threats",
      label: "Threats (위협)",
      items: swot.threats,
      bg: "bg-orange-50",
      border: "border-orange-200",
      heading: "text-orange-600",
      icon: "T",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quadrants.map((q) => (
        <div key={q.key} className={`${q.bg} border ${q.border} rounded-2xl p-5`}>
          <h5 className={`text-sm font-bold ${q.heading} mb-3 flex items-center gap-2`}>
            <span className="text-lg font-black">{q.icon}</span>
            {q.label}
          </h5>
          {q.items && q.items.length > 0 ? (
            <ul className="space-y-2">
              {q.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">데이터 없음</p>
          )}
        </div>
      ))}
    </div>
  );
}
