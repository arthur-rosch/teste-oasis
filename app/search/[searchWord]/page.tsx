import { ClientWordSearchPage } from "./components/client-word-page";

export default async function SearchPage({ params }: { params: { searchWord: string } }) {  
  const decodedSearchWord = decodeURIComponent(params.searchWord);

  return <ClientWordSearchPage searchWord={decodedSearchWord} />;
}
