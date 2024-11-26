"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDebounce } from "@/hooks/use-debounce"; 
import { useSearchPosts } from "@/hooks/use-post"; 
import { motion, AnimatePresence } from "framer-motion";
import { ArticleCard } from "./article-card";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300); 

  
  const { posts, loading, error } = useSearchPosts(debouncedSearch);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}`);
      onClose();
    }
  };

  
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
    }
  }, [isOpen]);

  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-3xl mx-auto mt-20 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-xl">
              <div className="p-4 border-b">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Procurar artigos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-full"
                      autoFocus
                    />
                  </div>
                  <Button
                    type="button"
                    variant="default"
                    size="icon"
                    onClick={onClose}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4">
                {loading ? (
                  <p className="text-center text-gray-500 py-8">Carregando...</p>
                ) : error ? (
                  <p className="text-center text-gray-500 py-8">Erro ao carregar artigos.</p>
                ) : posts.length > 0 ? (
                  <div className="space-y-4">
                    {posts.map((post, index) => (
                      <ArticleCard article={post} index={index} key={post.id} />
                    ))}
                  </div>
                ) : searchTerm ? (
                  <p className="text-center text-gray-500 py-8">
                    Nenhum artigo encontrado para {searchTerm}
                  </p>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    Digite para procurar artigos
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
