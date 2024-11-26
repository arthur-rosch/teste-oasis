"use client";

import Link from "next/link";
import { Post } from "@/lib/types";
import { ArticleCard } from "./article-card";

interface ArticleGridProps {
  title: string;
  category?: string;
  articles: Post[];
}

export function ArticleGrid({ title, category, articles }: ArticleGridProps) {
  return (
    <div className="bg-white">
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-sub-h1 text-gray-900 flex items-center gap-2">
            {title}
            <span className="text-gray-900">—</span>
          </h2>
          <Link 
            href={`/categories/${category}`} 
            className="text-sub-h2 flex items-center gap-2 hover:text-yellow-500 transition-all"
          >
            Ver Todos Artigos
            <span>›</span>
          </Link>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <ArticleCard article={article} key={index} index={index}/>
          ))}
        </div>
      </section>
    </div>

  );
}