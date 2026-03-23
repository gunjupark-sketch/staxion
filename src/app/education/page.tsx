import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import EducationFilter from "./EducationFilter";

export const metadata: Metadata = {
  title: "미용치과 교육/세미나 | MEDI STAXION",
  description:
    "미용치과 시술 실습 교육과 세미나. 보톡스, 필러, 스킨부스터 등 핵심 시술 교육 프로그램.",
};

export default async function EducationPage() {
  const supabase = await createClient();

  const { data: seminars } = await supabase
    .from("seminars")
    .select(
      "id, title, slug, description, image_url, date, price, seminar_type, max_seats, early_bird_price, early_bird_deadline"
    )
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("date", { ascending: true });

  return (
    <div className="min-h-screen bg-white">
      <EducationFilter seminars={seminars ?? []} />
    </div>
  );
}
