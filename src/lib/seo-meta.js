// Metadatos de SEO compartidos entre la web (React) y el script de prerender (Node).
// Es JavaScript simple, sin importaciones, para que funcione en ambos lados.

export const SITE_URL = 'https://linkitpacific.com';
export const SITE_NAME = 'Linkit Pacific';
export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop';
export const LOGO_URL = `${SITE_URL}/logo-mark.svg`;

/** Páginas fijas del sitio, con título (≈60 caracteres) y descripción (≈155). */
export const staticRoutes = [
  {
    path: '/',
    title: 'Importar desde China a Latinoamérica | Linkit Pacific',
    description:
      'Importa desde China con proveedores verificados, inspección de calidad, logística y aduanas hasta tu almacén en Latinoamérica. Equipo en Shenzhen y Quito.',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'Sobre Linkit Pacific | Tu socio para importar desde China',
    description:
      'Equipo en Shenzhen y Quito que conecta a empresas de Latinoamérica con fábricas y proveedores en China, desde la compra hasta la entrega.',
    priority: '0.7',
  },
  {
    path: '/servicios/sourcing',
    title: 'Búsqueda de proveedores en China (Sourcing) | Linkit Pacific',
    description:
      'Encontramos y verificamos fábricas y proveedores en China, negociamos condiciones y te ayudamos a comprar con seguridad desde Latinoamérica.',
    priority: '0.9',
  },
  {
    path: '/servicios/compras',
    title: 'Agente de compras en China | Linkit Pacific',
    description:
      'Agente de compras en China: cotizamos, negociamos, consolidamos y gestionamos tus pedidos con varios proveedores para importar a Latinoamérica.',
    priority: '0.9',
  },
  {
    path: '/servicios/logistica',
    title: 'Logística internacional China–Latinoamérica | Linkit Pacific',
    description:
      'Transporte marítimo y aéreo desde China a Latinoamérica, con seguimiento de tu carga y entrega hasta tu almacén.',
    priority: '0.9',
  },
  {
    path: '/servicios/aduanas',
    title: 'Aduanas y desaduanización de importaciones | Linkit Pacific',
    description:
      'Trámites y liberación aduanal de tus importaciones desde China, con clasificación arancelaria correcta y cumplimiento de la normativa de tu país.',
    priority: '0.8',
  },
  {
    path: '/servicios/entrada-china',
    title: 'Vender en China: entrada al mercado chino | Linkit Pacific',
    description:
      'Growth Partner para marcas latinoamericanas que quieren vender en China: registro GACC, etiquetado, distribuidores, comercio electrónico y retail.',
    priority: '0.8',
  },
  {
    path: '/servicios/visita-fabricas',
    title: 'Visita a fábricas en China con traducción | Linkit Pacific',
    description:
      'Organizamos tu visita a fábricas en China con agenda, traducción y acompañamiento para verificar a tus proveedores en persona.',
    priority: '0.7',
  },
  {
    path: '/servicios/ferias',
    title: 'Acompañamiento en la Feria de Cantón y ferias en China | Linkit Pacific',
    description:
      'Te acompañamos en la Feria de Cantón y otras ferias en China: preselección de proveedores, traducción y verificación posterior.',
    priority: '0.7',
  },
  {
    path: '/inspecciones',
    title: 'Inspección de calidad en China: pre-embarque y fábrica | Linkit Pacific',
    description:
      'Control de calidad (QC), inspección pre-embarque, inspección de carga y auditoría de fábrica en China, con reporte y fotos para tu tranquilidad.',
    priority: '0.9',
  },
  {
    path: '/blog',
    title: 'Blog de comercio China–Latinoamérica: noticias semanales | Linkit Pacific',
    description:
      'Noticias semanales sobre importar desde China y comercio internacional en Latinoamérica: aranceles, logística, tipo de cambio y regulaciones, con datos y fuentes.',
    priority: '0.8',
  },
  {
    path: '/contacto',
    title: 'Contacto: cotiza tu importación desde China | Linkit Pacific',
    description:
      'Escríbenos para cotizar tu importación desde China. Oficinas en Shenzhen (China) y Quito (Ecuador); atendemos por WhatsApp y correo.',
    priority: '0.8',
  },
];

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    'Socio para importar desde China: búsqueda de proveedores, inspección de calidad, logística, aduanas y entrega en Latinoamérica.',
  email: 'info@linkitpacific.com',
  areaServed: 'Latinoamérica',
  knowsAbout: ['Importar desde China', 'Sourcing en China', 'Inspección de calidad', 'Logística internacional', 'Aduanas', 'Exportar a China'],
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', telephone: '+593984178610', areaServed: 'EC', availableLanguage: ['es'] },
    { '@type': 'ContactPoint', contactType: 'sales', telephone: '+8617813279893', areaServed: 'CN', availableLanguage: ['es', 'zh'] },
  ],
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Shenzhen', addressCountry: 'CN' },
    { '@type': 'PostalAddress', addressLocality: 'Quito', addressCountry: 'EC' },
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'es',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Cambia el ancho de una imagen de Unsplash. */
export function imgSize(src, w) {
  return src.replace(/([?&])w=\d+/, `$1w=${w}`);
}

/**
 * Construye los metadatos de una ruta.
 * @param {string} pathname  ruta, por ejemplo "/blog/mi-articulo"
 * @param {Array} posts      artículos publicados
 */
export function buildMeta(pathname, posts = []) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  const postMatch = path.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const post = posts.find((p) => p.slug === postMatch[1]);
    if (!post) {
      return {
        title: `Artículo no encontrado | ${SITE_NAME}`,
        description: 'El artículo que buscas no está disponible.',
        canonical: `${SITE_URL}/blog`,
        image: DEFAULT_IMAGE,
        type: 'website',
        noindex: true,
        jsonLd: [],
      };
    }
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = imgSize(post.imagen.src, 1200);
    return {
      title: `${post.tituloSeo || post.titulo} | ${SITE_NAME}`,
      description: post.descripcionSeo || post.extracto,
      canonical: url,
      image,
      type: 'article',
      publishedTime: post.fecha,
      noindex: false,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          headline: post.titulo,
          description: post.descripcionSeo || post.extracto,
          image: [image],
          datePublished: post.fecha,
          dateModified: post.fecha,
          inLanguage: 'es',
          articleSection: post.categoria,
          keywords: (post.palabrasClave || []).join(', '),
          author: { '@id': `${SITE_URL}/#organization` },
          publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: LOGO_URL } },
          citation: post.fuente.url,
        },
        breadcrumb([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.tituloCorto || post.titulo, path: `/blog/${post.slug}` },
        ]),
      ],
    };
  }

  const route = staticRoutes.find((r) => r.path === path);
  if (!route) {
    return {
      title: `Página no encontrada | ${SITE_NAME}`,
      description: staticRoutes[0].description,
      canonical: `${SITE_URL}/`,
      image: DEFAULT_IMAGE,
      type: 'website',
      noindex: true,
      jsonLd: [],
    };
  }

  const jsonLd = [];
  if (path === '/') {
    jsonLd.push(organization, website);
  } else if (path === '/blog') {
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog de comercio China–Latinoamérica',
        url: `${SITE_URL}/blog`,
        inLanguage: 'es',
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.titulo,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.fecha,
        })),
      },
      breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Blog', path: '/blog' }])
    );
  } else {
    jsonLd.push(breadcrumb([{ name: 'Inicio', path: '/' }, { name: route.title.split(' | ')[0], path }]));
  }

  return {
    title: route.title,
    description: route.description,
    canonical: `${SITE_URL}${path === '/' ? '/' : path}`,
    image: DEFAULT_IMAGE,
    type: 'website',
    noindex: false,
    jsonLd,
  };
}
