import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 신청 | MEDI STAXION",
  description: "미용치과 도입에 관한 무료 상담을 신청하세요. 맞춤형 컨설팅을 제공합니다.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
