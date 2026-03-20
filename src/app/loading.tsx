export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
        <p className="text-sm text-text-muted">로딩 중...</p>
      </div>
    </div>
  );
}
