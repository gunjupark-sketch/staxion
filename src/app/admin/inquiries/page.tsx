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

export default async function InquiriesPage() {
  const supabase = await createClient();

  const { data: inquiries } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const typeLabel: Record<string, string> = {
    general: "일반",
    consulting: "컨설팅",
    education: "교육",
    global: "해외",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">상담 관리</h1>
      <p className="mt-1 text-sm text-text-muted">상담 신청 목록</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>유형</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>연락처</TableHead>
              <TableHead>치과명</TableHead>
              <TableHead>내용</TableHead>
              <TableHead>신청일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries && inquiries.length > 0 ? (
              inquiries.map((inq) => (
                <TableRow key={inq.id}>
                  <TableCell>
                    <Badge variant="secondary" className={inq.is_read ? "bg-gray-100 text-gray-500" : "bg-red-50 text-red-600"}>
                      {inq.is_read ? "읽음" : "새 문의"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{typeLabel[inq.type]}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{inq.name}</TableCell>
                  <TableCell className="text-text-muted whitespace-nowrap">{inq.phone || "-"}</TableCell>
                  <TableCell>{inq.clinic_name || "-"}</TableCell>
                  <TableCell className="max-w-xs truncate text-text-muted">{inq.message || "-"}</TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(inq.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-text-muted py-8">
                  상담 신청이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
