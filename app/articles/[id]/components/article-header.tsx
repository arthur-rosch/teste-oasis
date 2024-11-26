import Image from "next/image";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/formateDate";

interface ArticleHeaderProps {
  article: Post;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      
      <div className="flex items-center gap-4">
        <Image
          src={"https://api.dicebear.com/7.x/avataaars/png?seed=Dasteen"}
          alt={article.author?.name || ''}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium">{article.author?.name || ""}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{formatDate(String(article.createdAt))}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}