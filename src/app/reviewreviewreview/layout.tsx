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
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {children}
    </div>
  );
}
