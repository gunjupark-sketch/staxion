import { createClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui/card";

export default async function SettingsPage() {
  const supabase = await createClient();

  const { data: settings } = await supabase
    .from("site_settings")
    .select("*")
    .order("key", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">사이트 설정</h1>
      <p className="mt-1 text-sm text-text-muted">사이트 전반 설정 관리</p>

      <div className="mt-8 space-y-4">
        {settings && settings.length > 0 ? (
          settings.map((setting) => (
            <Card key={setting.key} className="border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-text-primary">
                      {setting.key}
                    </h3>
                    <pre className="mt-2 text-sm text-text-muted bg-gray-50 rounded p-3 overflow-auto max-w-full">
                      {JSON.stringify(setting.value, null, 2)}
                    </pre>
                  </div>
                  <span className="text-xs text-text-muted shrink-0">
                    {new Date(setting.updated_at).toLocaleDateString("ko-KR")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-border/50">
            <CardContent className="p-8 text-center text-text-muted">
              등록된 설정이 없습니다.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
