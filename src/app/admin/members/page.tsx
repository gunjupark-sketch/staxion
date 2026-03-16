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

export default async function MembersPage() {
  const supabase = await createClient();

  const { data: members } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  const roleColors: Record<string, string> = {
    admin: "bg-brand-lime-safe/10 text-brand-lime-text",
    member: "bg-blue-50 text-blue-600",
    pending: "bg-yellow-50 text-yellow-600",
  };

  const licenseColors: Record<string, string> = {
    none: "bg-gray-100 text-gray-500",
    uploaded: "bg-yellow-50 text-yellow-600",
    approved: "bg-green-50 text-green-600",
    rejected: "bg-red-50 text-red-600",
  };

  const roleLabel: Record<string, string> = {
    admin: "관리자",
    member: "회원",
    pending: "승인대기",
  };

  const licenseLabel: Record<string, string> = {
    none: "미등록",
    uploaded: "검토중",
    approved: "승인",
    rejected: "반려",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">회원 관리</h1>
      <p className="mt-1 text-sm text-text-muted">전체 회원 목록 및 면허 승인 관리</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>치과명</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>면허</TableHead>
              <TableHead>가입일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members && members.length > 0 ? (
              members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name || "-"}</TableCell>
                  <TableCell className="text-text-muted">{member.email}</TableCell>
                  <TableCell>{member.clinic_name || "-"}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={roleColors[member.role]}>
                      {roleLabel[member.role]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={licenseColors[member.license_status]}>
                      {licenseLabel[member.license_status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(member.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-text-muted py-8">
                  회원이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
