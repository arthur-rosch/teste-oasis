import Link from "next/link";
import { Logo } from "./logo";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold flex items-center justify-center gap-2"><Logo width={48} height={48}/> oasis</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Compartilhando conhecimento e experiências sobre desenvolvimento front-end.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">CATEGORIA</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/CSS" className="text-gray-900 text-p4 transction-all hover:text-yellow-500 transition-all">CSS</Link></li>
              <li><Link href="/categories/Javascript" className="text-gray-900 text-p4 hover:text-yellow-500 transition-all">JavaScript</Link></li>
              <li><Link href="/categories/Tailwind" className="text-gray-900 text-p4 hover:text-yellow-500 transition-all">Tailwind</Link></li>
              <li><Link href="/categories/Vue" className="text-gray-900 text-p4 hover:text-yellow-500 transition-all">Vue</Link></li>
              <li><Link href="/categories/React" className="text-gray-900 text-p4 hover:text-yellow-500 transition-all">React</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-p4 font-bold mb-4">ENTRE EM CONTATO</h3>
            <ul className="space-y-2">
              <li className="text-gray-900 text-p4 hover:text-yellow-500 transition-all">+55 11 9999-9999</li>
              <li className="text-gray-900 text-p4 hover:text-yellow-500 transition-all">seuemail@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">SIGA-NOS</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-yellow-500 transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-500 transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-500 transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2024 Oasis Blog
        </div>
      </div>
    </footer>
  );
}