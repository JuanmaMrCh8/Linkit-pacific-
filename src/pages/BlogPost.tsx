import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { Navbar, Footer } from '@/components/Layout';
import { cn } from '@/lib/utils';
import { getPostBySlug, getSortedPosts, formatFecha, readingMinutes, imgSize } from '@/data/blog';
import { categoryStyles } from '@/pages/Blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-40 pb-24">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Artículo no encontrado</h1>
          <p className="text-slate-500 mb-8">Es posible que el enlace haya cambiado.</p>
          <Link to="/blog" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2">
            <ArrowLeft size={14} /> Volver al blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const otros = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  // La segunda foto va después del segundo párrafo
  const fotoDespues = Math.min(2, post.cuerpo.length) - 1;

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      <header className="relative pt-44 pb-20 bg-[#0F0F11] overflow-hidden">
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-halftone opacity-10 rotate-12 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Migas de pan" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </nav>
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className={cn('text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full', categoryStyles[post.categoria])}>
              {post.categoria}
            </span>
            <time dateTime={post.fecha} className="text-xs font-medium text-slate-400">
              {formatFecha(post.fecha)}
            </time>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Clock size={12} /> {readingMinutes(post)} min de lectura
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">{post.titulo}</h1>
        </div>
      </header>

      <main className="flex-grow pb-16">
        {/* Foto principal */}
        <figure className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <img
            src={imgSize(post.imagen.src, 1600)}
            alt={post.imagen.alt}
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full aspect-[16/8] object-cover shadow-2xl bg-slate-200"
          />
        </figure>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <p className="text-xl text-slate-600 font-medium leading-relaxed border-l-2 border-primary/30 pl-6 mb-10">
            {post.extracto}
          </p>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            {post.cuerpo.map((p, i) => (
              <React.Fragment key={i}>
                <p>{p}</p>
                {post.imagen2 && i === fotoDespues && (
                  <figure className="!my-10 -mx-4 sm:mx-0">
                    <img
                      src={imgSize(post.imagen2.src, 1200)}
                      alt={post.imagen2.alt}
                      width={1200}
                      height={750}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover bg-slate-200"
                    />
                  </figure>
                )}
              </React.Fragment>
            ))}
          </div>

          {post.guia && (
            <section className="mt-14">
              <h2 className="text-2xl font-black text-slate-900 mb-6">{post.guia.titulo}</h2>
              <ol className="space-y-4">
                {post.guia.items.map((it, i) => (
                  <li key={i} className="flex gap-5 bg-slate-50 border border-gray-100 p-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-black text-slate-900 mb-1">{it.titulo}</h3>
                      <p className="text-slate-600 leading-relaxed">{it.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="mt-14">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Datos clave</h2>
            <ul className="space-y-4">
              {post.datos.map((d, i) => (
                <li key={i} className="border-l-2 border-primary pl-5 py-1">
                  <p className="font-bold text-slate-900">{d.dato}</p>
                  <p className="text-xs text-slate-400 mt-1">Fuente: {d.fuente}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Qué significa para tu negocio</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{post.impacto}</p>
          </section>

          <aside className="mt-14 bg-[#0F0F11] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-halftone opacity-10" />
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 relative z-10">
              Cómo podemos ayudarte
            </p>
            <h2 className="text-2xl font-black text-white mb-3 relative z-10">{post.servicio.nombre}</h2>
            <p className="text-slate-400 mb-8 relative z-10">{post.servicio.texto}</p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <Link
                to={post.servicio.ruta}
                className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:scale-105 transition-transform flex items-center gap-2"
              >
                Ver el servicio <ArrowRight size={14} />
              </Link>
              <Link
                to="/contacto"
                className="px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:border-white transition-colors"
              >
                Contactar
              </Link>
            </div>
          </aside>

          <p className="mt-10 text-sm text-slate-400 flex items-center gap-2 flex-wrap">
            Fuente de la noticia:
            <a
              href={post.fuente.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-bold hover:underline"
            >
              {post.fuente.medio} <ExternalLink size={12} />
            </a>
          </p>
        </article>

        {otros.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Más artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otros.map((o) => (
                <Link
                  key={o.slug}
                  to={`/blog/${o.slug}`}
                  className="group border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={imgSize(o.imagen.src, 600)}
                    alt={o.imagen.alt}
                    width={600}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[16/10] object-cover bg-slate-200"
                  />
                  <div className="p-6">
                    <time dateTime={o.fecha} className="text-xs text-slate-400">
                      {formatFecha(o.fecha)}
                    </time>
                    <h3 className="font-black text-slate-900 mt-2 leading-snug group-hover:text-primary transition-colors">
                      {o.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
