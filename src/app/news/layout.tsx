import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소식 | MEDI STAXION",
  description: "미용치과 업계 최신 소식, 트렌드, 이벤트 안내",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
