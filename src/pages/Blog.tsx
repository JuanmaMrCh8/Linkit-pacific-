import React, { useRef } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative pt-48 pb-32 overflow-hidden bg-[#0F0F11]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
            alt="Logistics background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F11] via-transparent to-[#0F0F11]/80" />
        </div>

        {/* Horizontal Parallax Vectors */}
        <motion.div 
          style={{ x: xPos }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10 pointer-events-none"
        />
        <motion.div 
          style={{ x: xPosReverse }}
          className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Blog & Noticias</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Insights <br />
              <span className="text-primary">Estratégicos</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium border-l-2 border-primary/30 pl-8">
              Descubra las últimas tendencias, guías y noticias sobre el comercio entre Asia y Latinoamérica.
            </p>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </div>

      <main className="flex-grow py-32 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 clip-angled-left z-0" />
        <div className="absolute top-40 left-10 w-32 h-32 bg-halftone opacity-10 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer flex flex-col h-full bg-white border border-slate-100 hover:border-primary transition-all rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest inline-block border border-slate-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest inline-block rounded-full">
                      {post.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 space-y-6 flex flex-col flex-grow relative">
                  {/* Halftone accent on hover */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-5 transition-opacity" />
                  
                  <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-widest italic">
                    <User size={12} /> {post.author}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 font-black uppercase tracking-widest text-[10px] group-hover:text-primary transition-colors">
                      Leer más <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                    {/* Decorative Rhombus */}
                    <div className="w-4 h-4 border border-slate-100 rotate-45 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all" />
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
