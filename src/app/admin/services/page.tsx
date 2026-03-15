import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function ServicesPage() {
  const supabase = await createClient();

  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">서비스 관리</h1>
      <p className="mt-1 text-sm text-text-muted">서비스 소개 페이지 관리</p>

      <div className="mt-8 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>순서</TableHead>
              <TableHead>서비스명</TableHead>
              <TableHead>설명</TableHead>
              <TableHead>등록일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services?.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      service.is_published
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }
                  >
                    {service.is_published ? "공개" : "비공개"}
                  </Badge>
                </TableCell>
                <TableCell className="text-text-muted">
                  {service.sort_order}
                </TableCell>
                <TableCell className="font-medium">{service.name}</TableCell>
                <TableCell className="max-w-xs truncate text-text-muted">
                  {service.description || "-"}
                </TableCell>
                <TableCell className="text-text-muted text-sm">
                  {new Date(service.created_at).toLocaleDateString("ko-KR")}
                </TableCell>
              </TableRow>
            )) ?? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-text-muted py-8"
                >
                  등록된 서비스가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
