"use client";

import { CommentForm } from "./comment-form";
import { CommentList } from "./comment-list";
import { Separator } from "@/components/ui/separator";

interface CommentsSectionProps {
  postId: string;
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Comentários</h2>
        <CommentForm postId={postId} />
      </div>
      <Separator />
      <CommentList postId={postId} />
    </div>
  );
}