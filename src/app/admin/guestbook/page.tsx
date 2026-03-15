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

export default async function GuestbookPage() {
  const supabase = await createClient();

  const { data: entries } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">커뮤니티 관리</h1>
      <p className="mt-1 text-sm text-text-muted">방명록 및 커뮤니티 글 관리</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>작성자</TableHead>
              <TableHead>내용</TableHead>
              <TableHead>작성일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries && entries.length > 0 ? (
              entries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        entry.is_visible
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }
                    >
                      {entry.is_visible ? "공개" : "숨김"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{entry.name}</TableCell>
                  <TableCell className="max-w-md truncate text-text-muted">
                    {entry.content}
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(entry.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-text-muted py-8"
                >
                  작성된 글이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
