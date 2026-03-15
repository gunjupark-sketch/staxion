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

export default async function VideosPage() {
  const supabase = await createClient();

  const { data: videos } = await supabase
    .from("waiting_videos")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">대기실 영상</h1>
      <p className="mt-1 text-sm text-text-muted">대기실 디스플레이 영상 관리</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>순서</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>영상 URL</TableHead>
              <TableHead>등록일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos && videos.length > 0 ? (
              videos.map((video) => (
                <TableRow key={video.id}>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        video.is_published
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }
                    >
                      {video.is_published ? "공개" : "비공개"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-text-muted">
                    {video.sort_order}
                  </TableCell>
                  <TableCell className="font-medium">{video.title}</TableCell>
                  <TableCell className="max-w-xs truncate text-text-muted">
                    {video.video_url}
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(video.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-text-muted py-8"
                >
                  등록된 영상이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
