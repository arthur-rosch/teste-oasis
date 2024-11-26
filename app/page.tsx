import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { ListArticlesByCategory } from "@/components/list-articles-by-category";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ListArticlesByCategory />
    </>
  );
}
