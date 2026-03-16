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
import Link from "next/link";

export default async function InquiriesPage() {
  const supabase = await createClient();

  const { data: inquiries } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  const newCount = inquiries?.filter((inq) => !inq.is_read).length ?? 0;

  const typeLabel: Record<string, string> = {
    general: "일반",
    consulting: "컨설팅",
    education: "교육",
    global: "해외",
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-text-primary">상담 관리</h1>
        {newCount > 0 && (
          <Badge
            variant="secondary"
            className="bg-red-50 text-red-600"
          >
            새 문의 {newCount}건
          </Badge>
        )}
      </div>
      <p className="mt-1 text-sm text-text-muted">상담 신청 목록</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>유형</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>연락처</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>치과명</TableHead>
              <TableHead>내용</TableHead>
              <TableHead>신청일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries && inquiries.length > 0 ? (
              inquiries.map((inq) => (
                <TableRow
                  key={inq.id}
                  className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                >
                  <TableCell>
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      <Badge variant="secondary" className={inq.is_read ? "bg-gray-100 text-gray-500" : "bg-red-50 text-red-600"}>
                        {inq.is_read ? "읽음" : "새 문의"}
                      </Badge>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      <Badge variant="secondary">{typeLabel[inq.type]}</Badge>
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium">
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      {inq.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-text-muted whitespace-nowrap">
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      {inq.phone || "-"}
                    </Link>
                  </TableCell>
                  <TableCell className="text-text-muted">
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      {inq.email || "-"}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      {inq.clinic_name || "-"}
                    </Link>
                  </TableCell>
                  <TableCell className="max-w-xs truncate text-text-muted">
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      <span className="truncate">{inq.message || "-"}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    <Link href={`/admin/inquiries/${inq.id}`} className="block min-h-[44px] flex items-center">
                      {new Date(inq.created_at).toLocaleDateString("ko-KR")}
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-text-muted py-8">
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
