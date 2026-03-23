"use client";

import type { AiAnalysis } from "./types";
import { EmptyState } from "./SharedUI";

export function StpTab({ ai }: { ai: AiAnalysis | null }) {
  const stp = ai?.stp;
  if (!stp) return <EmptyState message="STP 전략 데이터가 없습니다." />;

  const cards = [
    {
      letter: "S",
      title: "Segmentation",
      borderColor: "border-t-amber-500",
      textColor: "text-amber-500",
      content: stp.segmentation,
    },
    {
      letter: "T",
      title: "Targeting",
      borderColor: "border-t-blue-500",
      textColor: "text-blue-500",
      content: stp.targeting,
    },
    {
      letter: "P",
      title: "Positioning",
      borderColor: "border-t-green-500",
      textColor: "text-green-500",
      content: stp.positioning,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.letter}
          className={`bg-white rounded-2xl border border-gray-100 border-t-[3px] ${card.borderColor} p-5 shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-3xl font-black ${card.textColor}`}>{card.letter}</span>
            <span className="text-sm font-bold text-gray-900">{card.title}</span>
          </div>

          {card.letter === "S" && Array.isArray(card.content) ? (
            <div className="space-y-3">
              {(card.content as Array<{ label: string; description: string }>).map((seg, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-gray-900">{seg.label}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{seg.description}</p>
                </div>
              ))}
            </div>
          ) : card.content && typeof card.content === "object" ? (
            <div className="space-y-2">
              {"label" in card.content && (
                <p className="text-sm font-semibold text-gray-900">
                  {(card.content as { label: string }).label}
                </p>
              )}
              {"description" in card.content && (
                <p className="text-sm text-gray-600">
                  {(card.content as { description: string }).description}
                </p>
              )}
              {"reason" in card.content && (
                <p className="text-xs text-gray-400 mt-2">
                  {(card.content as { reason: string }).reason}
                </p>
              )}
              {"differentiator" in card.content && (
                <p className="text-xs text-gray-400 mt-2">
                  {(card.content as { differentiator: string }).differentiator}
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-400">데이터 없음</p>
          )}
        </div>
      ))}
    </div>
  );
}
