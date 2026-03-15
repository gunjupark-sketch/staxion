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

export default async function PostsPage() {
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  const categoryLabel: Record<string, string> = {
    blog: "블로그",
    column: "칼럼",
    news: "뉴스",
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">블로그 관리</h1>
          <p className="mt-1 text-sm text-text-muted">블로그·칼럼·뉴스 관리</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>작성자</TableHead>
              <TableHead className="text-right">조회수</TableHead>
              <TableHead>작성일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts?.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      post.is_published
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }
                  >
                    {post.is_published ? "공개" : "비공개"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {categoryLabel[post.category]}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium max-w-xs truncate">
                  {post.title}
                </TableCell>
                <TableCell className="text-text-muted">
                  {post.author_name || "-"}
                </TableCell>
                <TableCell className="text-right text-text-muted">
                  {post.view_count}
                </TableCell>
                <TableCell className="text-text-muted text-sm">
                  {new Date(post.created_at).toLocaleDateString("ko-KR")}
                </TableCell>
              </TableRow>
            )) ?? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-text-muted py-8"
                >
                  등록된 글이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
