"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";
import { PencilIcon, EyeIcon } from "lucide-react";

interface Post {
  id: string;
  title: string;
  category: string;
  view_count: number;
  created_at: string;
}

export default function MypagePostsPage() {
  const supabase = createClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("community_posts")
        .select("id, title, category, view_count, created_at")
        .eq("author_id", user.id)
        .is("deleted_at", null)
        .order("created_at", { ascending: false });

      if (data) setPosts(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-text-primary">내가 쓴 글</h2>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-3 py-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-surface-secondary">
              <PencilIcon className="size-7 text-text-muted" />
            </div>
            <p className="text-sm font-medium text-text-secondary">아직 작성한 글이 없습니다</p>
            <p className="text-xs text-text-muted">커뮤니티에서 첫 글을 작성해보세요</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/community/${post.id}`}>
              <Card className="transition-colors hover:border-brand-lime-safe/50">
                <CardContent className="flex items-center justify-between pt-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs shrink-0">{post.category}</Badge>
                      <p className="text-sm font-medium text-text-primary truncate">{post.title}</p>
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-text-muted">
                      <span>
                        {new Date(post.created_at).toLocaleDateString("ko-KR", {
                          month: "short", day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <EyeIcon className="size-3" /> {post.view_count}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
