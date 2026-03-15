import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "STAXION | 미용치과, 시작이 다르면 결과가 다릅니다",
  description:
    "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.",
  openGraph: {
    title: "STAXION | 미용치과 도입 전문",
    description:
      "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.",
    url: "https://staxion.co.kr",
    siteName: "STAXION",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn("font-sans", geist.variable)}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
