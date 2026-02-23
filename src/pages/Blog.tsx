import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Tendencias de Importación desde China 2026",
    excerpt: "Descubra los productos más rentables para importar este año y cómo la normativa aduanera está cambiando.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    date: "22 Feb 2026",
    author: "Carlos Méndez",
    category: "Tendencias"
  },
  {
    id: 2,
    title: "Cómo verificar proveedores en Alibaba",
    excerpt: "Guía paso a paso para evitar estafas y asegurar que su proveedor sea legítimo y confiable.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    date: "15 Feb 2026",
    author: "Li Wei",
    category: "Sourcing"
  },
  {
    id: 3,
    title: "Logística Verde: El futuro del transporte marítimo",
    excerpt: "Nuevas regulaciones IMO 2026 y cómo impactan los costos de flete internacional.",
    image: "https://images.unsplash.com/photo-1494412574643-35d324698428?q=80&w=800&auto=format&fit=crop",
    date: "10 Feb 2026",
    author: "Ana Torres",
    category: "Logística"
  },
  {
    id: 4,
    title: "Guía para exportar café a China",
    excerpt: "El mercado del café en China está explotando. Aprenda cómo posicionar su marca.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    date: "05 Feb 2026",
    author: "Roberto Gómez",
    category: "Exportación"
  },
  {
    id: 5,
    title: "Incoterms 2020 vs 2026: ¿Qué ha cambiado?",
    excerpt: "Actualización sobre los términos de comercio internacional y cómo afectan sus contratos.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    date: "01 Feb 2026",
    author: "Legal Team",
    category: "Legal"
  },
  {
    id: 6,
    title: "Feria de Cantón 2026: Guía de supervivencia",
    excerpt: "Consejos prácticos para sacar el máximo provecho a la feria comercial más grande del mundo.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    date: "28 Ene 2026",
    author: "Li Wei",
    category: "Eventos"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl md:text-5xl font-bold mb-6"
          >
            Blog & Noticias
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, guías y noticias sobre el comercio entre Asia y Latinoamérica.
          </p>
        </div>
      </div>

      <main className="flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-accent font-medium text-sm flex items-center mt-auto">
                    Leer artículo completo <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
