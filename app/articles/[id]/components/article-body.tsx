'use client';

import React from "react";
import { cn } from "@/lib/utils";

interface ArticleBodyProps {
  content: string;
  className?: string;
}

export function ArticleBody({ content, className }: ArticleBodyProps) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none dark:prose-invert",
        "prose-headings:font-bold prose-headings:tracking-tight",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        "prose-img:rounded-lg",
        className
      )}
    >
      {content}
    </div>
  );
}
