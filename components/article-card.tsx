"use client";

import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/formateDate";

interface ArticleCardProps {
  article: Post;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600";
  
  return (
    <motion.article
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/articles/${article.id}`} className="block">
        <div className="relative aspect-[16/9] bg-gray-100">
          <Image
            src={fallbackImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 text-gray-900 group-hover:text-yellow-500 transition-colors">
            {article.title}
          </h3>
          
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={"https://api.dicebear.com/7.x/avataaars/png?seed=Dasteen"}
                alt={article.author?.name || "Author"}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                {article.author?.name || "Anonymous"}
              </span>
              <span className="text-xs text-gray-500">
                {formatDate(String(article.createdAt))} •  3 min
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}