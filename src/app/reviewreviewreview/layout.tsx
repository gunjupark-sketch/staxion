import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "초고 리뷰 | MEDI STAXION",
  robots: { index: false, follow: false },
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      {children}
    </div>
  );
}
