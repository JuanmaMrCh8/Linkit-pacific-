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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-primary font-sans text-4xl font-bold mb-4">Noticias & Recursos</h2>
            <p className="text-gray-600 max-w-2xl">
              Manténgase informado sobre el comercio internacional, logística y oportunidades de negocio.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center text-primary font-medium hover:text-primary-dark">
            Ver todo el blog <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-accent font-medium text-sm flex items-center">
                  Leer más <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
