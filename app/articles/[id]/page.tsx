/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useSinglePost } from "@/hooks/use-post"; 
import { ArticleContent } from "./components/article-content";
import { Loader2 } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { post, loading, error } = useSinglePost(params.id);

  if (loading) {
    return { title: "Carregando...", description: "Aguarde enquanto carregamos os dados." };
  }

  if (error || !post) {
    notFound();
  }

  return {
    title: post.title,
    description:  post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      images: [{ url: post.image }],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const { post, loading, error } = useSinglePost(params.id);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      </div>
    )
  }

  if (error || !post) {
    notFound();
  }

  return <ArticleContent article={post} />;
}
