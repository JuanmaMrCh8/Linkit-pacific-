import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Navbar, Footer } from '@/components/Layout';
import { cn } from '@/lib/utils';
import { getSortedPosts, formatFecha, type BlogCategory } from '@/data/blog';

export const categoryStyles: Record<BlogCategory, string> = {
  Importación: 'bg-primary/10 text-primary',
  Exportación: 'bg-accent/15 text-accent-dark',
  Regulatorio: 'bg-slate-900/10 text-slate-700',
};

export default function Blog() {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      <section className="relative pt-48 pb-28 bg-[#0F0F11] overflow-hidden">
        <div className="absolute top-20 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Blog</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase italic">
              Noticias de <br />
              <span className="text-primary">Comercio</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium border-l-2 border-primary/30 pl-8">
              Cada semana analizamos lo que pasa en el comercio entre China y Latinoamérica: aranceles, logística, tipo de cambio y regulaciones, con datos y fuentes.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500 font-medium">Pronto publicaremos nuestras primeras noticias.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
                >
                  <Link to={`/blog/${post.slug}`} className="flex flex-col h-full p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={cn(
                          'text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full',
                          categoryStyles[post.categoria]
                        )}
                      >
                        {post.categoria}
                      </span>
                      <time dateTime={post.fecha} className="text-xs font-medium text-slate-400">
                        {formatFecha(post.fecha)}
                      </time>
                    </div>
                    <h2 className="text-xl font-black text-slate-900 leading-snug mb-4 group-hover:text-primary transition-colors">
                      {post.titulo}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{post.extracto}</p>
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                      Leer más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
