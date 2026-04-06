import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "Tendencias de Importación desde China 2026",
    excerpt: "Descubra los productos más rentables para importar este año y cómo la normativa aduanera está cambiando.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    date: "22 Feb 2026",
    author: "Carlos Méndez"
  },
  {
    id: 2,
    title: "Cómo verificar proveedores en Alibaba",
    excerpt: "Guía paso a paso para evitar estafas y asegurar que su proveedor sea legítimo y confiable.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    date: "15 Feb 2026",
    author: "Li Wei"
  },
  {
    id: 3,
    title: "Logística Verde: El futuro del transporte marítimo",
    excerpt: "Nuevas regulaciones IMO 2026 y cómo impactan los costos de flete internacional.",
    image: "https://images.unsplash.com/photo-1494412574643-35d324698428?q=80&w=800&auto=format&fit=crop",
    date: "10 Feb 2026",
    author: "Ana Torres"
  }
];

export function BlogPreview() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative halftone background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-50 clip-diagonal-reverse-15 z-0" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-halftone opacity-10 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Noticias & Recursos</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
              Insights <br />
              <span className="text-primary">Estratégicos</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium border-l-2 border-slate-200 pl-6">
              Manténgase informado sobre el comercio internacional, logística y oportunidades de negocio.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="group inline-flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs hover:gap-6 transition-all border-b-2 border-primary/20 pb-2"
          >
            Ver todo el blog <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white border border-slate-100 overflow-hidden hover:border-primary transition-all group cursor-pointer relative rounded-2xl flex flex-col h-full"
            >
              {/* Halftone accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity z-10" />
              
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                {/* Sharp corner accent */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest italic">
                  {post.date}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                  <span className="flex items-center gap-2"><User size={12} className="text-primary" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors uppercase tracking-tight italic leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 font-medium leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group-hover:gap-5 transition-all">
                    Leer más <ArrowRight size={14} />
                  </span>
                  {/* Decorative Rhombus */}
                  <div className="w-4 h-4 border border-primary/20 rotate-45 group-hover:bg-primary/10 transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
