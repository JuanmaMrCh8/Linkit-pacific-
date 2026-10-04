import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildMeta, SITE_NAME } from '@/lib/seo-meta.js';
import { posts } from '@/data/blog';

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function metaByName(name: string, content: string) {
  setTag(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', name);
    return m;
  }, 'content', content);
}

function metaByProperty(property: string, content: string) {
  setTag(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('property', property);
    return m;
  }, 'content', content);
}

/** Actualiza título, descripción, canónico, Open Graph y datos estructurados en cada ruta. */
export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = buildMeta(pathname, posts);

    document.title = meta.title;
    metaByName('description', meta.description);
    metaByName('robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setTag('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }, 'href', meta.canonical);

    metaByProperty('og:type', meta.type);
    metaByProperty('og:site_name', SITE_NAME);
    metaByProperty('og:locale', 'es_LA');
    metaByProperty('og:title', meta.title);
    metaByProperty('og:description', meta.description);
    metaByProperty('og:url', meta.canonical);
    metaByProperty('og:image', meta.image);
    metaByName('twitter:card', 'summary_large_image');
    metaByName('twitter:title', meta.title);
    metaByName('twitter:description', meta.description);
    metaByName('twitter:image', meta.image);

    // Datos estructurados (JSON-LD)
    document.head.querySelectorAll('script[data-route-ld]').forEach((n) => n.remove());
    document.head.querySelectorAll('script[type="application/ld+json"]:not([data-route-ld])').forEach((n) => n.remove());
    meta.jsonLd.forEach((obj: unknown) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-route-ld', 'true');
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [pathname]);

  return null;
}
