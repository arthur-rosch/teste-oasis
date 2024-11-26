"use client";

import Image from "next/image";
import { Post } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ArticleBody } from "./article-body";
import { ShareButtons } from "./share-buttons";
import { ArticleHeader } from "./article-header";
import { CommentsSection } from "./comment-section";

interface ArticleContentProps {
  article: Post;
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
          <Image
            src={"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <Badge variant="default" className="mb-4">
          Tecnologia
        </Badge>

        <ArticleHeader article={article} />
        
        <div className="flex flex-col gap-6">
          <div className="hidden lg:block">
            <ShareButtons />
          </div>
          
          <div className="flex-1">
            <ArticleBody content={article.content} />
          </div>

          <div className="mt-12">
            <CommentsSection postId={article.id} />
          </div>
        </div>
      </article>
    </div>
  );
}