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
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      <Navbar />
      
      {/* Integrated Header */}
      <div className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50" />
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Blog & Noticias</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Insights <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                Estratégicos
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Descubra las últimas tendencias, guías y noticias sobre el comercio entre Asia y Latinoamérica.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest shadow-lg">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-accent" /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <span className="text-primary font-bold text-sm flex items-center gap-2 group/link">
                      Leer artículo completo 
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:translate-x-2 transition-transform">
                        <ArrowRight size={14} />
                      </div>
                    </span>
                  </div>
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
