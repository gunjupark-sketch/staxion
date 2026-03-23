import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "메디포스트 | MEDI STAXION",
  description: "미용치과 업계 인사이트, 트렌드, 실무 칼럼",
};

export default function MediaPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
