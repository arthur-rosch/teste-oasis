import { ClientCategoryPage } from "./components/client-category-page";

export default async function CategoryPage({ params }: { params: { category: string } }) {
  return <ClientCategoryPage  categoryName={params.category}/>;
}
