'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Category } from "@/lib/types";
import { ArticleGrid } from "./article-grid";
import { usePostByCategory } from "@/hooks/use-post";

export const ListArticlesByCategory = () => {
  const [category, setCategory] = useState<Category>(Category.CSS);
  const [visibleCategories, setVisibleCategories] = useState(3);

  const { posts, loading, error } = usePostByCategory(category);

  const loadMoreCategories = () => {
    setVisibleCategories((prev) => prev + 3);
  };

  const noPosts = posts.length === 0;

  if (loading) {
    return (
      <div className="text-center my-12">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-12 text-red-500">
        <p>Erro ao carregar os posts. Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <>
      {Object.values(Category).slice(0, visibleCategories).map((category, index) => {
        return (
          <ArticleGrid
            key={index}
            title={category}
            category={category}
            articles={posts.slice(0, 3)}
          />
        );
      })}

      {noPosts && (
        <div className="text-gray-500 text-center my-12">
          <p>Não há posts disponíveis para a categoria selecionada.</p>
        </div>
      )}

      {visibleCategories < Object.values(Category).length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center my-12"
        >
          <Button type="button" size="default" onClick={loadMoreCategories}>
            Mostrar Mais Categorias
          </Button>
        </motion.div>
      )}
    </>
  );
}
