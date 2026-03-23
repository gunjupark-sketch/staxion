"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Lightbulb,
  Lock,
  Clock,
} from "lucide-react";
import { parseNum } from "./utils";

/* ──────────────────────────────────────────────
   KpiCard
   ────────────────────────────────────────────── */

export function KpiCard({
  label,
  value,
  change,
  sub,
}: {
  label: string;
  value: string | number;
  change?: string;
  sub?: string;
}) {
  const changeStr = change ?? "";
  const isNegative = changeStr.includes("-") || changeStr.includes("감소");
  const isPositive = !isNegative && (parseNum(changeStr) > 0 || changeStr.includes("+") || changeStr.includes("증가"));
  const changeColor = change
    ? isNegative
      ? "text-red-500"
      : isPositive
        ? "text-green-600"
        : "text-amber-600"
    : undefined;

  const ChangeIcon = change
    ? isNegative
      ? TrendingDown
      : isPositive
        ? TrendingUp
        : Minus
    : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs text-gray-400 font-medium">{label}</p>
      <p className="mt-1 text-2xl font-black text-gray-900">{String(value)}</p>
      {change && (
        <p className={`mt-1 text-xs font-semibold flex items-center gap-1 ${changeColor}`}>
          {ChangeIcon && <ChangeIcon className="h-3 w-3" />}
          {change}
        </p>
      )}
      {sub && <p className="mt-0.5 text-[10px] text-gray-400">{sub}</p>}
    </div>
  );
}

/* ──────────────────────────────────────────────
   SectionCard
   ────────────────────────────────────────────── */

export function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   InsightBox
   ────────────────────────────────────────────── */

export function InsightBox({ text, pending }: { text?: string | null; pending?: boolean }) {
  if (pending) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4">
        <h4 className="text-sm font-bold text-gray-400 flex items-center gap-1.5">
          <Lightbulb className="h-4 w-4" />
          AI 분석 준비 중
        </h4>
        <p className="mt-2 text-sm text-gray-400">분석이 완료되면 AI 인사이트가 제공됩니다.</p>
      </div>
    );
  }
  if (!text) return null;
  return (
    <div className="bg-gradient-to-r from-brand-neon/5 to-brand-neon/0 border border-brand-neon-safe/20 rounded-xl p-4 mt-4">
      <h4 className="text-sm font-bold text-brand-neon-text flex items-center gap-1.5">
        <Lightbulb className="h-4 w-4" />
        AI 인사이트
      </h4>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   SimpleTable
   ────────────────────────────────────────────── */

export function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  if (rows.length === 0) return <EmptyState message="데이터가 없습니다." />;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs text-gray-400 font-semibold border-b bg-gray-50 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-b border-gray-50 text-gray-600 whitespace-nowrap">
                  {cell ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ──────────────────────────────────────────────
   EmptyState
   ────────────────────────────────────────────── */

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   PremiumLock
   ────────────────────────────────────────────── */

export function PremiumLock() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Lock className="h-16 w-16 text-gray-300" />
      <p className="text-lg font-bold text-gray-900 mt-4">
        골든시그널 캐치전략 구독이 필요합니다
      </p>
      <p className="text-sm text-gray-500 mt-2 text-center max-w-md">
        데이터 기반 STP 전략, SWOT 분석, 골든시그널 TOP3을 확인하세요
      </p>
      <Link
        href="/services/golden-signal-catch-strategy"
        className="mt-6 inline-flex items-center justify-center bg-brand-neon text-[#1a1a1a] rounded-xl px-6 h-12 font-bold text-sm hover:brightness-95 transition-all"
      >
        캐치전략 알아보기
      </Link>
    </div>
  );
}

/* ──────────────────────────────────────────────
   PlaceholderTab
   ────────────────────────────────────────────── */

export function PlaceholderTab({ title, message, locked }: { title: string; message: string; locked?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {locked ? (
        <Lock className="h-12 w-12 text-gray-300" />
      ) : (
        <Clock className="h-12 w-12 text-gray-300" />
      )}
      <p className="text-lg font-bold text-gray-900 mt-4">{title}</p>
      <p className="text-sm text-gray-500 mt-2">{message}</p>
    </div>
  );
}
