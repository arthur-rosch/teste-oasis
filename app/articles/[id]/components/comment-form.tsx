"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCommentMutations } from "@/hooks/use-comments";


const commentSchema = z.object({
  content: z.string().min(1, "O comentário não pode estar vazio"),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentFormProps {
  postId: string;
  onSuccess?: () => void;
}

export function CommentForm({ postId, onSuccess }: CommentFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { createComment } = useCommentMutations();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentFormData) => {
    if (!user) {
      toast.error("Você precisa estar logado para comentar");
      return;
    }

    try {
      setIsLoading(true);
      await createComment(postId, data.content);
      toast.success("Comentário enviado com sucesso!");
      reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Erro ao enviar comentário");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Faça login para deixar um comentário
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Textarea
          placeholder="Escreva seu comentário..."
          {...register("content")}
          disabled={isLoading}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar comentário"
        )}
      </Button>
    </form>
  );
}