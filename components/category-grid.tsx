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
  { id: "CSS", name: "CSS", icon: css },
  { id: "JavaScript", name: "JavaScript", icon: js },
  { id: "Tailwind", name: "Tailwind", icon: tailwind },
  { id: "Vue", name: "Vue JS", icon: vue },
  { id: "React", name: "React JS", icon: react },
];

export function CategoryGrid() {
  return (
    <div className="bg-gray-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Navegue Pela Categoria</h2>
          <Link href="/categories" className="text-sub-h2 flex items-center gap-2 hover:text-yellow-500 transition-all">
            Ver Todas Categorias →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => window.location.href = `/categories/${category.id}`}
              className="h-60 bg-white text-gray-900 rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:bg-yellow-500 hover:text-white transform hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
            >
              <div className="h-24 w-24 mx-auto mb-4 flex items-center justify-center flex-col">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={62}
                  height={62}
                />
              </div>
              <h3 className="text-sub-h2">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}