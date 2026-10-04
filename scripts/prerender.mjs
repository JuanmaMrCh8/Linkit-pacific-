// Se ejecuta después de `vite build`.
// Genera una página HTML por cada ruta (con título, descripción, datos estructurados y
// el texto principal ya escritos) para que Google, las redes sociales y los asistentes de IA
// lean el contenido sin ejecutar JavaScript. También crea sitemap.xml, robots.txt y llms.txt.
//
// Si algo falla aquí, la web sigue funcionando igual (React toma el control en el navegador).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildMeta, staticRoutes, SITE_URL, SITE_NAME } from '../src/lib/seo-meta.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const posts = JSON.parse(fs.readFileSync(path.join(root, 'src/data/posts.json'), 'utf8'));
const sorted = [...posts].sort((a, b) => b.fecha.localeCompare(a.fecha));

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonLdSafe = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

function headBlock(meta) {
  const lines = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    `<link rel="canonical" href="${esc(meta.canonical)}" />`,
    `<link rel="alternate" hreflang="es" href="${esc(meta.canonical)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${esc(meta.canonical)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="es_LA" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${esc(meta.canonical)}" />`,
    `<meta property="og:image" content="${esc(meta.image)}" />`,
  ];
  if (meta.publishedTime) lines.push(`<meta property="article:published_time" content="${meta.publishedTime}" />`);
  lines.push(
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`
  );
  for (const ld of meta.jsonLd) {
    lines.push(`<script type="application/ld+json" data-route-ld="true">${jsonLdSafe(ld)}</script>`);
  }
  return lines.join('\n    ');
}

const navLinks = staticRoutes
  .filter((r) => r.path !== '/')
  .map((r) => `<li><a href="${r.path}">${esc(r.title.split(' | ')[0])}</a></li>`)
  .join('');

function bodyFor(pathname, meta) {
  const postMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const p = posts.find((x) => x.slug === postMatch[1]);
    const guia = p.guia
      ? `<h2>${esc(p.guia.titulo)}</h2><ol>${p.guia.items.map((i) => `<li><strong>${esc(i.titulo)}</strong> ${esc(i.texto)}</li>`).join('')}</ol>`
      : '';
    return `<article><h1>${esc(p.titulo)}</h1><p><time datetime="${p.fecha}">${p.fecha}</time> · ${esc(p.categoria)}</p>${p.cuerpo
      .map((t) => `<p>${esc(t)}</p>`)
      .join('')}${guia}<h2>Datos clave</h2><ul>${p.datos
      .map((d) => `<li>${esc(d.dato)} (Fuente: ${esc(d.fuente)})</li>`)
      .join('')}</ul><h2>Qué significa para tu negocio</h2><p>${esc(p.impacto)}</p><p><a href="${esc(p.servicio.ruta)}">${esc(p.servicio.nombre)}</a>: ${esc(p.servicio.texto)}</p><p>Fuente: <a href="${esc(p.fuente.url)}" rel="noopener">${esc(p.fuente.medio)}</a></p><p><a href="/blog">Volver al blog</a></p></article>`;
  }
  if (pathname === '/blog') {
    return `<h1>Importar desde China: noticias y guías de comercio</h1><p>${esc(meta.description)}</p><ul>${sorted
      .map((p) => `<li><a href="/blog/${p.slug}">${esc(p.titulo)}</a> — ${esc(p.extracto)}</li>`)
      .join('')}</ul>`;
  }
  return `<h1>${esc(meta.title.split(' | ')[0])}</h1><p>${esc(meta.description)}</p>`;
}

function render(template, pathname) {
  const meta = buildMeta(pathname, posts);
  let html = template;

  const start = html.indexOf('<!-- seo:start');
  const end = html.indexOf('<!-- seo:end -->');
  if (start === -1 || end === -1) {
    throw new Error('Faltan los marcadores seo:start / seo:end en index.html');
  }
  const startClose = html.indexOf('-->', start) + 3;
  html = html.slice(0, startClose) + '\n    ' + headBlock(meta) + '\n    ' + html.slice(end);

  const body = `<div id="root"><main style="font-family:sans-serif;max-width:48rem;margin:0 auto;padding:6rem 1rem">${bodyFor(pathname, meta)}<nav aria-label="Principal"><ul><li><a href="/">Inicio</a></li>${navLinks}</ul></nav></main></div>`;
  html = html.replace('<div id="root"></div>', body);
  return html;
}

function writeRoute(pathname, html) {
  const file = pathname === '/' ? path.join(dist, 'index.html') : path.join(dist, pathname, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

try {
  const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
  const routes = ['/', ...staticRoutes.map((r) => r.path).filter((p) => p !== '/'), ...posts.map((p) => `/blog/${p.slug}`)];
  for (const r of routes) writeRoute(r, render(template, r));

  // sitemap.xml
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...staticRoutes.map((r) => ({ loc: `${SITE_URL}${r.path === '/' ? '/' : r.path}`, lastmod: today, priority: r.priority })),
    ...posts.map((p) => ({ loc: `${SITE_URL}/blog/${p.slug}`, lastmod: p.fecha, priority: '0.7' })),
  ];
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((u) => `  <url><loc>${esc(u.loc)}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`)
      .join('\n')}\n</urlset>\n`
  );

  // robots.txt
  fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

  // llms.txt: resumen para asistentes de IA
  const llms = [
    `# ${SITE_NAME}`,
    '',
    '> Socio para importar desde China a Latinoamérica: búsqueda y verificación de proveedores, inspección de calidad, logística internacional, aduanas y entrega. También ayuda a marcas latinoamericanas a vender en China. Oficinas en Shenzhen (China) y Quito (Ecuador).',
    '',
    '## Servicios',
    ...staticRoutes.filter((r) => r.path.startsWith('/servicios') || r.path === '/inspecciones').map((r) => `- [${r.title.split(' | ')[0]}](${SITE_URL}${r.path}): ${r.description}`),
    '',
    '## Blog',
    ...sorted.map((p) => `- [${p.titulo}](${SITE_URL}/blog/${p.slug}): ${p.extracto}`),
    '',
    '## Contacto',
    `- [Contacto](${SITE_URL}/contacto)`,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(dist, 'llms.txt'), llms);

  console.log(`prerender: ${routes.length} páginas, sitemap.xml, robots.txt y llms.txt generados`);
} catch (err) {
  // No bloquear la publicación: la web funciona sin el prerender.
  console.warn('prerender: omitido por un error ->', err.message);
}
