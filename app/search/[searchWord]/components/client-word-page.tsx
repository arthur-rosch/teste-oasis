'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useSearchPosts } from "@/hooks/use-post"; 
import { ArticleCard } from "@/components/article-card";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

interface ClientWordSearchPageProps {
  searchWord: string;
}

export const ClientWordSearchPage = ({ searchWord }: ClientWordSearchPageProps) => {
  const articlesPerPage = 4;
  const [visibleCount, setVisibleCount] = useState(articlesPerPage);

  const { posts: filteredArticles, loading, error } = useSearchPosts(searchWord);

  const loadMoreArticles = () => {
    setVisibleCount(prevCount => prevCount + articlesPerPage);
  };

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  if (error) {
    notFound()
  }


  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Encontre todos os nossos blogs<br />
            aqui, para a palavra {searchWord}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nossos blogs são escritos a partir de muitas pesquisas e escritores conhecidos, para que possamos fornecer a você os melhores blogs e artigos para você lê-los o tempo todo
          </p>
        </div>

        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index}/>
              ))}
            </div>

            {displayedArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-12"
              >
                <p className="text-gray-500">Nenhum artigo encontrado para a palavra: {searchWord}.</p>
              </motion.div>
            )}

            {visibleCount < filteredArticles.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
              >
                <Button type="button" size="default" onClick={loadMoreArticles}>
                  Mais Artigos
                </Button>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};