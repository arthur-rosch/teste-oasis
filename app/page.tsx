import { NextSeo } from 'next-seo';
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { ListArticlesByCategory } from "@/components/list-articles-by-category";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Oasis - Front End Development Blog"
        description="A blog about front-end development, tutorials, best practices, and the latest trends in web development."
        openGraph={{
          url: 'https://teste-oasis.vercel.app/',
          title: 'Oasis - Front End Development Blog',
          description: 'A blog about front-end development, tutorials, best practices, and the latest trends in web development.',
          images: [
            {
              url: '../assets/cover.svg',
              alt: 'Oasis Blog Image',
              width: 1200,
              height: 630,
            },
          ],
          site_name: 'Oasis Blog',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@OasisBlog',
        }}
      />
      <Hero />
      <CategoryGrid />
      <ListArticlesByCategory />
    </>
  );
}
