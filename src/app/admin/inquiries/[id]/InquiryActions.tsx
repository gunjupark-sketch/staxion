"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function InquiryActions({
  inquiryId,
  initialNote,
}: {
  inquiryId: string;
  initialNote: string;
}) {
  const router = useRouter();
  const supabase = createClient();
  const [note, setNote] = useState(initialNote);
  const [isSaving, startSaving] = useTransition();
  const [isDeleting, startDeleting] = useTransition();
  const [saveMessage, setSaveMessage] = useState("");

  function handleSaveNote() {
    startSaving(async () => {
      const { error } = await supabase
        .from("inquiries")
        .update({ admin_note: note })
        .eq("id", inquiryId);

      if (error) {
        setSaveMessage("저장 실패: " + error.message);
      } else {
        setSaveMessage("저장 완료");
        setTimeout(() => setSaveMessage(""), 2000);
      }
    });
  }

  function handleDelete() {
    startDeleting(async () => {
      const { error } = await supabase
        .from("inquiries")
        .delete()
        .eq("id", inquiryId);

      if (error) {
        alert("삭제 실패: " + error.message);
      } else {
        router.push("/admin/inquiries");
        router.refresh();
      }
    });
  }

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      {/* 관리자 메모 */}
      <Card className="border-border/50">
        <CardContent className="p-4 sm:p-6">
          <h2 className="font-semibold text-text-primary mb-4">관리자 메모</h2>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="답변이나 메모를 입력하세요..."
            className="min-h-[120px]"
          />
          <div className="mt-3 flex items-center gap-3">
            <Button
              onClick={handleSaveNote}
              disabled={isSaving}
              className="min-h-[44px]"
            >
              {isSaving ? "저장 중..." : "메모 저장"}
            </Button>
            {saveMessage && (
              <span className="text-sm text-green-600">{saveMessage}</span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 삭제 */}
      <Card className="border-border/50">
        <CardContent className="p-4 sm:p-6">
          <h2 className="font-semibold text-text-primary mb-4">문의 관리</h2>
          <p className="text-sm text-text-muted mb-4">
            삭제한 문의는 복구할 수 없습니다.
          </p>
          <Dialog>
            <DialogTrigger
              render={
                <Button
                  variant="destructive"
                  className="min-h-[44px]"
                />
              }
            >
              문의 삭제
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>문의를 삭제하시겠습니까?</DialogTitle>
                <DialogDescription>
                  이 작업은 되돌릴 수 없습니다. 문의 데이터가 영구적으로
                  삭제됩니다.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose
                  render={
                    <Button variant="outline" className="min-h-[44px]" />
                  }
                >
                  취소
                </DialogClose>
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="min-h-[44px]"
                >
                  {isDeleting ? "삭제 중..." : "삭제"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
