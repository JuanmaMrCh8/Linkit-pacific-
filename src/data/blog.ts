/**
 * Artículos del blog de Linkit Pacific.
 *
 * Cada semana el agente de Marketing prepara las noticias de comercio China–LatAm
 * y se agregan aquí como nuevos elementos de `posts`. Un artículo sale en la web
 * cuando el cambio se aprueba y se fusiona a `main`.
 */

export type BlogCategory = 'Importación' | 'Exportación' | 'Regulatorio';

export interface BlogPost {
  slug: string;
  titulo: string;
  /** Fecha de publicación, formato AAAA-MM-DD */
  fecha: string;
  categoria: BlogCategory;
  extracto: string;
  /** Párrafos del artículo, en orden */
  cuerpo: string[];
  /** Cifras clave con su fuente */
  datos: { dato: string; fuente: string }[];
  /** Lo que significa para el lector */
  impacto: string;
  /** Servicio de Linkit Pacific relacionado */
  servicio: { nombre: string; ruta: string; texto: string };
  fuente: { medio: string; url: string };
}

export const posts: BlogPost[] = [
  {
    slug: 'feria-de-canton-140-compradores-fases',
    titulo: 'La 140.ª Feria de Cantón abre el 15 de octubre con más de 220.000 compradores extranjeros preinscritos',
    fecha: '2026-10-05',
    categoria: 'Importación',
    extracto:
      'La feria más grande de China se celebra en tres fases por categoría de producto. Elegir la fase correcta y llegar con proveedores preseleccionados marca la diferencia.',
    cuerpo: [
      'La Feria de Importación y Exportación de China, conocida como Feria de Cantón, celebra su 140.ª edición en Guangzhou entre el 15 de octubre y el 4 de noviembre. La organización informa de una cifra récord de compradores extranjeros preinscritos y de más de 32.000 empresas expositoras.',
      'El evento se divide en tres fases según el tipo de producto: electrónica, maquinaria y herramientas en la primera; bienes de consumo, hogar y materiales de construcción en la segunda; y juguetes, textiles, calzado, oficina y alimentos en la tercera.',
      'Para un importador latinoamericano, ir a la fase equivocada significa no encontrar a sus proveedores. Y dentro de la feria, un stand de intermediario puede presentarse como fábrica: por eso conviene preseleccionar y verificar antes de pagar un anticipo.',
    ],
    datos: [
      { dato: 'Más de 220.000 compradores extranjeros preinscritos, de 197 países y regiones', fuente: 'Infobae / PR Newswire, 22-09-2026' },
      { dato: 'Casi 80% de los preinscritos son compradores profesionales', fuente: 'Infobae / PR Newswire, 22-09-2026' },
      { dato: 'Más de 32.000 empresas expositoras y más de 75.000 stands', fuente: 'Infobae / PR Newswire, 22-09-2026' },
      { dato: 'Fase 1: 15-19 oct · Fase 2: 23-27 oct · Fase 3: 31 oct-4 nov', fuente: 'Sino Business Partner, guía Canton Fair 2026' },
    ],
    impacto:
      'Ir sin preseleccionar proveedores ni elegir la fase correcta implica tiempo y viaje perdidos, y riesgo de cerrar con intermediarios que se presentan como fábrica.',
    servicio: {
      nombre: 'Sourcing y verificación de proveedores',
      ruta: '/servicios/ferias',
      texto: 'Te acompañamos en la feria y verificamos a los proveedores desde nuestra oficina en Shenzhen.',
    },
    fuente: {
      medio: 'Infobae (agencias) / PR Newswire',
      url: 'https://www.infobae.com/america/agencias/2026/09/22/la-140-canton-fair-se-inaugurara-el-15-de-octubre-con-mas-de-220-000-compradores-extranjeros-preinscritos/',
    },
  },
  {
    slug: 'mexico-aranceles-1463-fracciones-importaciones-china',
    titulo: 'México mantiene aranceles de 5% a 50% a 1.463 fracciones de países sin TLC',
    fecha: '2026-10-06',
    categoria: 'Regulatorio',
    extracto:
      'En plena disputa arancelaria con China, revisar la fracción arancelaria antes de cotizar puede evitar que el margen desaparezca.',
    cuerpo: [
      'Desde el 1 de enero de 2026, México aplica aranceles de entre 5% y 50% a 1.463 fracciones arancelarias de países con los que no tiene tratado comercial, y China es el principal afectado. La presidenta Sheinbaum viajará a Shenzhen el 18 y 19 de noviembre para la cumbre APEC, en medio de esta disputa.',
      'China respondió en agosto con cuotas compensatorias a la nuez pecana mexicana, y México impuso cuotas definitivas al acero laminado en caliente chino. Las importaciones de vehículos chinos a México cayeron en el primer semestre.',
      'La lección práctica para cualquier importador de la región: el precio FOB no es el costo real. Clasificar bien el producto y calcular el costo puesto en destino antes de comprar protege el margen.',
    ],
    datos: [
      { dato: 'Aranceles de 5% a 50% sobre 1.463 fracciones de países sin TLC, vigentes desde el 1-01-2026', fuente: 'Reporte Asia, 30-09-2026' },
      { dato: 'Importaciones de vehículos chinos a México: -31,1% interanual en el primer semestre de 2026 (158.571 unidades)', fuente: 'Reporte Asia, 30-09-2026' },
      { dato: 'Cuotas compensatorias de hasta 51,6% de China a la nuez pecana mexicana, desde agosto', fuente: 'Reporte Asia, 30-09-2026' },
      { dato: 'Comercio bilateral México-China: US$139.730 millones en 2024', fuente: 'Reporte Asia, 30-09-2026' },
    ],
    impacto:
      'Un importador que no revisa su fracción arancelaria puede ver su margen desaparecer; además hay riesgo de represalias que afectan a los exportadores.',
    servicio: {
      nombre: 'Logística y aduanas',
      ruta: '/servicios/aduanas',
      texto: 'Clasificación arancelaria correcta y cálculo del costo puesto en destino antes de comprar.',
    },
    fuente: {
      medio: 'Reporte Asia',
      url: 'https://reporteasia.com/america/mexico/2026/09/30/sheinbaum-viajara-china-cumbre-apec-medio-disputa-arancelaria-ambos-paises/',
    },
  },
  {
    slug: 'china-arancel-55-carne-vacuna-brasil-cuota',
    titulo: 'China aplica un arancel adicional de 55% a la carne vacuna de Brasil tras agotarse su cuota anual',
    fecha: '2026-10-07',
    categoria: 'Exportación',
    extracto:
      'El acceso al mercado chino se gestiona: depende de cuotas, reglas sanitarias y registros, no solo de la demanda.',
    cuerpo: [
      'Brasil completó el 30 de septiembre su cuota anual de carne vacuna en China. Desde el 1 de octubre, los envíos adicionales pagan un recargo de 55%, que sumado al arancel base de 12% llega a 67%. Pekín no aprobó que Brasil use la cuota no utilizada de Uruguay.',
      'Las exportaciones brasileñas de carne a China ya mostraban caídas en septiembre y se proyecta una baja en 2026. Es una señal para todo exportador latinoamericano: el acceso al mercado chino puede cerrarse por cuota.',
      'La oportunidad está en las marcas con categorías diferenciadas y con el registro en regla (registro GACC, etiquetado GB, distribuidor en destino) antes de escalar.',
    ],
    datos: [
      { dato: 'Arancel adicional de 55% desde el 1-10-2026; total de 67% (55% + 12% base)', fuente: 'China las Américas, 30-09-2026' },
      { dato: 'Cuota anual de Brasil: 1,1 millones de toneladas', fuente: 'China las Américas, 30-09-2026' },
      { dato: 'Proyección: exportaciones brasileñas de carne a China -10% interanual en 2026', fuente: 'China las Américas, 30-09-2026' },
      { dato: 'Primeras dos semanas de septiembre: promedio diario de exportaciones de carne vacuna -30,3% interanual', fuente: 'Secex vía Gazeta Mercantil, 16-09-2026' },
    ],
    impacto:
      'Depender de un solo producto o de un acceso que puede cerrarse por cuota es un riesgo; diversificar categorías y entender las reglas de acceso es la oportunidad.',
    servicio: {
      nombre: 'Growth Partner',
      ruta: '/servicios/entrada-china',
      texto: 'Inteligencia de mercado y registro GACC para marcas latinoamericanas que quieren vender en China.',
    },
    fuente: {
      medio: 'China las Américas (con Reuters)',
      url: 'https://chinalasamericas.com/2026/09/30/china-aplica-un-arancel-del-55-a-la-carne-vacuna-de-brasil-al-alcanzar-las-importaciones-su-cuota/',
    },
  },
  {
    slug: 'yuan-rompe-6-7-por-dolar-nivel-mas-fuerte-desde-2022',
    titulo: 'El yuan rompe 6,7 por dólar y toca su nivel más fuerte desde junio de 2022',
    fecha: '2026-10-08',
    categoria: 'Importación',
    extracto:
      'Un yuan fuerte encarece en dólares lo que se compra a proveedores que cotizan en yuanes. Fijar condiciones en la proforma evita absorber la diferencia.',
    cuerpo: [
      'El yuan se apreció hasta 6,6853 por dólar el 18 de septiembre, su nivel más fuerte en más de tres años. Lo impulsan el superávit comercial chino, la venta estacional de dólares de los exportadores y fijaciones más fuertes de la tasa de referencia del banco central.',
      'Para quien importa, el efecto es directo: lo que se compra a proveedores que cotizan en yuanes o ajustan su precio al tipo de cambio cuesta más en dólares, y aumentan las presiones de renegociación entre la proforma y el pago del saldo.',
      'Un diferencial de tasas entre Estados Unidos y China cercano a 330 puntos básicos podría frenar la apreciación, pero la recomendación práctica no cambia: definir la moneda, los plazos de pago y la vigencia de la cotización por escrito.',
    ],
    datos: [
      { dato: 'Yuan a 6,6853 por dólar el 18-09-2026, el más fuerte desde junio de 2022', fuente: 'Caixin Global, 18-09-2026' },
      { dato: 'Superávit comercial de China: más de US$800.000 millones en los primeros ocho meses de 2026', fuente: 'Caixin Global, 18-09-2026' },
      { dato: 'El banco central fijó la tasa de referencia más fuerte durante 8 días seguidos', fuente: 'Caixin Global, 18-09-2026' },
    ],
    impacto:
      'Las cotizaciones pueden subir en dólares entre la proforma y el pago del saldo; quien no fija condiciones absorbe la diferencia.',
    servicio: {
      nombre: 'Sourcing y agente de compras',
      ruta: '/servicios/compras',
      texto: 'Negociamos moneda, plazos de pago y vigencia de las cotizaciones con el proveedor.',
    },
    fuente: {
      medio: 'Caixin Global',
      url: 'https://www.caixinglobal.com/2026-09-18/yuan-surges-past-67-per-dollar-to-three-year-high-102486356.html',
    },
  },
  {
    slug: 'navieras-alzas-contenedor-octubre-q4',
    titulo: 'Navieras anuncian alzas de US$2.000-3.000 por contenedor desde el 1 de octubre',
    fecha: '2026-10-09',
    categoria: 'Importación',
    extracto:
      'Con la Semana Dorada china y el pico de fin de año, confirmar espacio en el buque importa tanto como confirmar la producción.',
    cuerpo: [
      'Las navieras aplican desde el 1 de octubre aumentos generales de tarifa de entre US$2.000 y US$3.000 por contenedor de 40 pies en el transpacífico, y los operadores advierten de reservas desplazadas y cupos confirmados que se cancelan.',
      'La presión coincide con la Semana Dorada china (1 al 7 de octubre), con fábricas y operaciones a medio ritmo hasta cerca del 10 de octubre. Los operadores recomiendan reservar con tres a seis semanas de anticipación.',
      'Las tarifas citadas corresponden a rutas Asia-Estados Unidos y sirven como referencia de la presión general sobre la capacidad; no existe un índice Asia-Latinoamérica publicado esta semana. Para los pedidos de temporada, la planificación hacia atrás desde la fecha de llegada es la mejor defensa.',
    ],
    datos: [
      { dato: 'GRI de US$2.000 a US$3.000 por contenedor de 40 pies desde el 1-10-2026 en el transpacífico, según naviera', fuente: 'The Loadstar, 25-09-2026' },
      { dato: 'Shanghái-Los Ángeles: US$7.838 por contenedor de 40 pies (+2% semanal)', fuente: 'The Loadstar, 25-09-2026' },
      { dato: 'Semana Dorada 2026: 1 al 7 de octubre; normalización estimada hacia el 10 de octubre', fuente: 'DSV, 08-09-2026' },
    ],
    impacto:
      'Los pedidos que salen después de la Semana Dorada pueden encontrar fletes más caros, reservas desplazadas y llegada tardía para la temporada.',
    servicio: {
      nombre: 'Logística internacional',
      ruta: '/servicios/logistica',
      texto: 'Planificación de reservas y seguimiento del embarque desde el origen.',
    },
    fuente: {
      medio: 'The Loadstar',
      url: 'https://theloadstar.com/shippers-face-rate-hikes-and-a-classic-supply-demand-mismatch-in-q4/',
    },
  },
  {
    slug: 'ruta-chancay-shanghai-carga-2026',
    titulo: 'Ruta Chancay-Shanghái: 170 viajes y US$602 millones en carga entre enero y agosto',
    fecha: '2026-10-10',
    categoria: 'Importación',
    extracto:
      'La ruta directa entre Perú y China crece en volumen y valor, y un piloto reduce las inspecciones de fruta refrigerada.',
    cuerpo: [
      'La ruta marítima directa entre el puerto peruano de Chancay y Shanghái movió más carga y más valor en los primeros ocho meses de 2026. Hacia Sudamérica viajan sobre todo vehículos fabricados en China; hacia China, fruta peruana como el arándano.',
      'Un piloto lanzado el 21 de septiembre reconoce el monitoreo de temperatura de los contenedores refrigerados y reduce de forma importante las inspecciones, con cerca de medio día menos por contenedor.',
      'Las rutas directas cambian tiempos y costos de tránsito. Evaluar puerto y ruta para la carga China-Sudamérica puede evitar trasbordos más largos.',
    ],
    datos: [
      { dato: '170 viajes, 141.000 toneladas y US$602,68 millones en carga entre enero y agosto de 2026', fuente: 'PortalPortuario, 30-09-2026' },
      { dato: 'Volumen de carga +13,7% y valor +33,3% interanual', fuente: 'PortalPortuario, 30-09-2026' },
      { dato: 'Piloto del 21-09-2026: inspecciones de contenedores de fruta refrigerada reducidas en más de 90%', fuente: 'PortalPortuario, 30-09-2026' },
      { dato: 'El puerto de Shanghái recibe más del 70% de las importaciones chinas de fruta peruana', fuente: 'PortalPortuario, 30-09-2026' },
    ],
    impacto:
      'Quien no evalúa las nuevas rutas directas puede seguir pagando trasbordos más largos.',
    servicio: {
      nombre: 'Logística y entrega',
      ruta: '/servicios/logistica',
      texto: 'Elegimos ruta y puerto, y coordinamos la entrega final hasta tu almacén en Latinoamérica.',
    },
    fuente: {
      medio: 'PortalPortuario (con datos de Aduanas de Shanghái / Jiefang Daily)',
      url: 'https://portalportuario.cl/carga-transportada-por-ruta-maritima-chancay-shanghai-aumenta-137-de-enero-a-agosto-de-2026',
    },
  },
  {
    slug: 'ecuador-china-protocolo-arandanos-frescos',
    titulo: 'Ecuador firma con China el protocolo fitosanitario para exportar arándanos frescos',
    fecha: '2026-10-11',
    categoria: 'Exportación',
    extracto:
      'El protocolo abre la puerta, pero sin registro de plantas y huertos, etiquetado y comprador en destino la fruta no llega al anaquel chino.',
    cuerpo: [
      'La agencia fitosanitaria de Ecuador (Agrocalidad) y la Administración General de Aduanas de China (GACC) firmaron el protocolo que fija los requisitos para el ingreso de arándanos frescos ecuatorianos. Exige registro y aprobación de los sitios de producción, monitoreo de plagas y controles de empaque, almacenamiento, transporte e inspección.',
      'Aún faltan fases técnicas antes de los primeros envíos. Las exportaciones de arándano fresco de Ecuador ya crecieron con fuerza en el primer semestre de 2026, y el comercio total de Ecuador con China sigue en aumento.',
      'La ventaja es para quien se prepara antes: registro de planta y huertos, etiquetado y un comprador o distribuidor en destino.',
    ],
    datos: [
      { dato: 'Exportaciones de arándano fresco de Ecuador: US$495.000 en enero-junio de 2026 frente a US$108.000 en 2025 (+359%)', fuente: 'El Universo, 22-09-2026' },
      { dato: 'Exportaciones de Ecuador a China en el primer semestre de 2026: US$3.644 millones (+23%)', fuente: 'Primicias, 18-08-2026' },
    ],
    impacto:
      'Un protocolo firmado no equivale a poder exportar: la ventaja es para quien se prepara antes con registro, etiquetado y canal.',
    servicio: {
      nombre: 'Growth Partner',
      ruta: '/servicios/entrada-china',
      texto: 'Registro GACC, etiquetado GB, logística en China y ejecución en canal para marcas latinoamericanas.',
    },
    fuente: {
      medio: 'El Universo / EFE',
      url: 'https://www.eluniverso.com/noticias/economia/ecuador-firma-protocolo-con-china-para-abrir-mercado-al-arandano-fresco-nota/',
    },
  },
];

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
