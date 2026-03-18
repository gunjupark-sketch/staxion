export default function RedesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 기존 LayoutShell(헤더/푸터) 없이 독립 레이아웃
  return <>{children}</>;
}
