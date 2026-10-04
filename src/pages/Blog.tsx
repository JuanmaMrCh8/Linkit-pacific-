import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { Navbar, Footer } from '@/components/Layout';
import { cn } from '@/lib/utils';
import { getSortedPosts, formatFecha, readingMinutes, imgSize, type BlogCategory } from '@/data/blog';

export const categoryStyles: Record<BlogCategory, string> = {
  Importación: 'bg-primary/10 text-primary',
  Exportación: 'bg-accent/15 text-accent-dark',
  Regulatorio: 'bg-slate-900/10 text-slate-700',
};

export default function Blog() {
  const posts = getSortedPosts();
  const [destacado, ...resto] = posts;

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
              Importar desde <br />
              <span className="text-primary">China</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium border-l-2 border-primary/30 pl-8">
              Noticias y guías semanales sobre comercio entre China y Latinoamérica: aranceles, logística, tipo de cambio y regulaciones, con datos y fuentes.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!destacado ? (
            <p className="text-center text-slate-500 font-medium">Pronto publicaremos nuestras primeras noticias.</p>
          ) : (
            <>
              {/* Artículo destacado */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow mb-12"
              >
                <Link to={`/blog/${destacado.slug}`} className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-slate-200">
                    <img
                      src={imgSize(destacado.imagen.src, 1200)}
                      alt={destacado.imagen.alt}
                      width={1200}
                      height={750}
                      loading="eager"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={cn('text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full', categoryStyles[destacado.categoria])}>
                        {destacado.categoria}
                      </span>
                      <time dateTime={destacado.fecha} className="text-xs font-medium text-slate-400">
                        {formatFecha(destacado.fecha)}
                      </time>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 leading-snug mb-4 group-hover:text-primary transition-colors">
                      {destacado.titulo}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-8">{destacado.extracto}</p>
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                      Leer artículo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>

              {resto.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resto.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                      className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
                    >
                      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                          <img
                            src={imgSize(post.imagen.src, 800)}
                            alt={post.imagen.alt}
                            width={800}
                            height={500}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                          <div className="flex items-center justify-between mb-5">
                            <span className={cn('text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full', categoryStyles[post.categoria])}>
                              {post.categoria}
                            </span>
                            <time dateTime={post.fecha} className="text-xs font-medium text-slate-400">
                              {formatFecha(post.fecha)}
                            </time>
                          </div>
                          <h2 className="text-xl font-black text-slate-900 leading-snug mb-4 group-hover:text-primary transition-colors">
                            {post.titulo}
                          </h2>
                          <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{post.extracto}</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                              Leer más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              <Clock size={12} /> {readingMinutes(post)} min
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
