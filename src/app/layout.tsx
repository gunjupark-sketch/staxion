import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "MEDI STAXION | 미용치과, 시작이 다르면 결과가 다릅니다",
  description:
    "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.",
  openGraph: {
    title: "MEDI STAXION | 미용치과 도입 전문",
    description:
      "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.",
    url: "https://medistaxion.com",
    siteName: "MEDI STAXION",
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
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
