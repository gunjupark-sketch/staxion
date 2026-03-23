import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AnalysisDashboard } from "./AnalysisDashboard";

interface ReportData {
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

export default async function AnalysisDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data } = await supabase
    .from("analysis_reports")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (!data) {
    notFound();
  }

  const report = data as ReportData;

  return <AnalysisDashboard report={report} />;
}
