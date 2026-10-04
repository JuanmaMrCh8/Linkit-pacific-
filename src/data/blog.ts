/**
 * Blog de Linkit Pacific.
 *
 * - `posts.json`      → artículos PUBLICADOS (lo que se ve en la web).
 * - `borradores.json` → artículos preparados por el agente de Marketing que esperan
 *                       aprobación. No se importan aquí, así que no salen en la web.
 *
 * Para publicar un borrador: se mueve a `posts.json` (con su foto y datos SEO)
 * en un cambio que se aprueba y se fusiona a `main`.
 */

import rawPosts from './posts.json';
import { imgSize } from '@/lib/seo-meta.js';

export type BlogCategory = 'Importación' | 'Exportación' | 'Regulatorio';

export interface BlogImage {
  src: string;
  alt: string;
}

export interface BlogPost {
  slug: string;
  titulo: string;
  /** Título para buscadores (≈50 caracteres) */
  tituloSeo?: string;
  /** Título corto para migas de pan y tarjetas */
  tituloCorto?: string;
  /** Fecha de publicación, AAAA-MM-DD */
  fecha: string;
  categoria: BlogCategory;
  extracto: string;
  /** Descripción para buscadores (≈155 caracteres) */
  descripcionSeo?: string;
  palabrasClave?: string[];
  imagen: BlogImage;
  /** Segunda foto, se muestra dentro del artículo */
  imagen2?: BlogImage;
  cuerpo: string[];
  /** Lista práctica (por ejemplo "3 preguntas antes de pagar") */
  guia?: { titulo: string; items: { titulo: string; texto: string }[] };
  datos: { dato: string; fuente: string }[];
  impacto: string;
  servicio: { nombre: string; ruta: string; texto: string };
  fuente: { medio: string; url: string };
}

export const posts = rawPosts as unknown as BlogPost[];

/** Artículos ordenados del más reciente al más antiguo */
export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatFecha(fecha: string): string {
  const [y, m, d] = fecha.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('es-EC', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Minutos de lectura aproximados */
export function readingMinutes(post: BlogPost): number {
  const words = [post.extracto, ...post.cuerpo, ...(post.guia?.items.map((i) => `${i.titulo} ${i.texto}`) ?? []), post.impacto]
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export { imgSize };
