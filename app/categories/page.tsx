"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import js from '@/assets/icons/js.svg'
import vue from '@/assets/icons/vue.svg'
import css from '@/assets/icons/css.svg'
import react from '@/assets/icons/react.svg'
import tailwind from '@/assets/icons/tailwind.svg'


const categories = [
  { id: "CSS", name: "CSS", icon: css, description: "Estilize seus sites com CSS." },
  { id: "JavaScript", name: "JavaScript", icon: js, description: "Aprenda lógica e interatividade." },
  { id: "Tailwind", name: "Tailwind", icon: vue, description: "Estilização com utilitários poderosos." },
  { id: "Vue", name: "Vue JS", icon: tailwind, description: "Framework moderno para desenvolvimento web." },
  { id: "React", name: "React JS", icon: react, description: "Crie interfaces dinâmicas e escaláveis." },
];


export default function CategoriesPage() {
  return (
    <section className="mt-4 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-12">Todas as Categorias</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-16 w-16 mx-auto mb-4">
              <Image
                src={category.icon}
                alt={category.name}
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{category.description}</p>
            <Link
              href={`/categories/${category.id}`}
              className="text-yellow-500 hover:text-yellow-500 font-medium"
            >
              Explorar Categoria →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
