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

export default async function SeminarsPage() {
  const supabase = await createClient();

  const { data: seminars } = await supabase
    .from("seminars")
    .select("*")
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">세미나 관리</h1>
          <p className="mt-1 text-sm text-text-muted">세미나·교육 프로그램 관리</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>일시</TableHead>
              <TableHead>장소</TableHead>
              <TableHead className="text-right">신청/정원</TableHead>
              <TableHead className="text-right">가격</TableHead>
              <TableHead>등록일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {seminars && seminars.length > 0 ? (
              seminars.map((seminar) => (
                <TableRow key={seminar.id}>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        seminar.is_published
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }
                    >
                      {seminar.is_published ? "공개" : "비공개"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium max-w-xs truncate">
                    {seminar.title}
                  </TableCell>
                  <TableCell className="text-text-muted whitespace-nowrap">
                    {seminar.date
                      ? new Date(seminar.date).toLocaleDateString("ko-KR")
                      : "-"}
                  </TableCell>
                  <TableCell className="text-text-muted">
                    {seminar.location || "-"}
                  </TableCell>
                  <TableCell className="text-right text-text-muted whitespace-nowrap">
                    {seminar.current_seats}/{seminar.max_seats ?? "\u221E"}
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    {seminar.price === 0
                      ? "무료"
                      : `${seminar.price.toLocaleString()}원`}
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(seminar.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-text-muted py-8"
                >
                  등록된 세미나가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
