import { allArticles, Article } from "./data";

export function searchArticles(query: string): Article[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];

  return allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.category?.toLowerCase().includes(searchTerm)
  );
}