"use client";


import { useComments } from "@/hooks/use-comments";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDate } from "@/lib/formateDate";

interface CommentListProps {
  postId: string;
}

export function CommentList({ postId }: CommentListProps) {
  const { comments, loading, error } = useComments(postId);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 bg-red-50 rounded-lg">
        <p className="text-sm text-red-600">
          Erro ao carregar comentários. Tente novamente mais tarde.
        </p>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Seja o primeiro a comentar!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar>
            <AvatarFallback>
              {comment.author.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">{comment.author.name}</span>
              <span className="text-sm text-gray-500">
                {formatDate(String(comment.createdAt))}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}