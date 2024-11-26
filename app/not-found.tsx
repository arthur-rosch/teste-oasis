import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link
          href="/"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}