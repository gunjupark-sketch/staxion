import {
  MapPin,
  Store,
  DollarSign,
  UserCheck,
  Target,
  AlertCircle,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */

export interface ReportData {
  id: string;
  address: string;
  sido: string | null;
  sgg: string | null;
  dong: string | null;
  status: string;
  upjong_name: string;
  created_at: string;
  completed_at: string | null;
  error_message: string | null;
  is_premium: boolean;
  sbiz_data: Record<string, unknown> | null;
  sgis_data: Record<string, unknown> | null;
  kosis_data: Record<string, unknown> | null;
  competitors_data: Record<string, unknown> | null;
  ai_analysis: Record<string, unknown> | null;
}

export type TableRow = Record<string, string>;

export interface AiAnalysis {
  type?: string;
  summary?: string;
  grade?: string;
  score?: number;
  alert_items?: string[];
  insights?: Record<string, string>;
  stp?: {
    segmentation?: Array<{ label: string; description: string }>;
    targeting?: { label: string; description: string; reason: string };
    positioning?: { label: string; description: string; differentiator: string };
  };
  swot?: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
    threats?: string[];
  };
  golden_signals?: Array<{
    rank: number;
    title: string;
    evidence: string;
    strategies: string[];
    kpi: string;
  }>;
  recommendations?: string[];
}

export interface Sg7Data {
  gender_ratio?: Array<{ name: string; rate: number; count: number }>;
  customer_type?: Array<{ name: string; rate: number; count: number }>;
  male_lifestyle?: Array<{ rate: number; hobby: string }>;
  female_lifestyle?: Array<{ rate: number; hobby: string }>;
  male_avg_income?: string;
  female_avg_income?: string;
  analysis_text?: string;
}

/* ──────────────────────────────────────────────
   Tab definitions
   ────────────────────────────────────────────── */

export const tabs = [
  { key: "overview", label: "권역 요약", icon: MapPin, premium: false },
  { key: "industry", label: "업종 현황", icon: Store, premium: false },
  { key: "sales", label: "매출 현황", icon: DollarSign, premium: false },
  { key: "customer", label: "고객 분석", icon: UserCheck, premium: false },
  { key: "competitor", label: "경쟁 분석", icon: Target, premium: false },
  { key: "issue", label: "권역 이슈", icon: AlertCircle, premium: false },
  { key: "online", label: "온라인 마케팅", icon: Globe, premium: true },
  { key: "stp", label: "STP 전략", icon: Target, premium: true },
  { key: "swot", label: "SWOT 분석", icon: Shield, premium: true },
  { key: "golden", label: "골든시그널 종합", icon: Zap, premium: true },
] as const;

export type TabKey = (typeof tabs)[number]["key"];
