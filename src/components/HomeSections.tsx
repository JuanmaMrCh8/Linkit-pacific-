import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Ship, Search, Globe, Box, ShoppingBag, Zap, Users, BarChart3, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const words = ["Sourcing", "Inspecciones", "Control de calidad", "Logística"];
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax for background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const { scrollY } = useScroll();
  
  // Horizontal parallax vector
  const xPos = useTransform(scrollY, [0, 1000], [0, 200]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0F0F11]">
      {/* Background Image with Parallax and Angular Mask */}
      <motion.div 
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Logistics Containers" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F11] via-transparent to-[#0F0F11]/80"></div>
      </motion.div>

      {/* Horizontal Parallax Vector */}
      <motion.div 
        style={{ x: xPos }}
        className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10 pointer-events-none"
      />
      <motion.div 
        style={{ x: xPosReverse }}
        className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10 pointer-events-none"
      />

      {/* Decorative Diagonal Lines - Parallax */}
      <motion.div 
        style={{ x: -50 }}
        animate={{ x: 50 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-1 pointer-events-none"
      >
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-12" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent -rotate-6" />
      </motion.div>

      {/* Halftone Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-halftone opacity-10 rotate-45 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-halftone opacity-5 -rotate-12 pointer-events-none" />

      {/* Rhombus Decorative Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 right-[15%] w-12 h-12 border border-primary/40 rotate-45 hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [-45, -40, -45] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/4 left-[10%] w-8 h-8 border border-accent/30 -rotate-45 hidden md:block"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 glass-panel mb-8 relative rounded-full">
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                Linking continents linking the future
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] mb-10 tracking-tighter uppercase italic">
              Expertos en <br />
              <div className="relative h-[1.1em] w-full overflow-hidden flex justify-center py-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ x: 100, opacity: 0, skewX: -20 }}
                    animate={{ x: 0, opacity: 1, skewX: 0 }}
                    exit={{ x: -100, opacity: 0, skewX: 20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute text-white drop-shadow-[0_0_30px_rgba(98,54,255,0.3)]"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <div className="relative max-w-2xl mx-auto mb-14">
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-primary via-transparent to-transparent" />
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium pl-6 text-left">
                Seguridad, agilidad y certeza en cada embarque. Conectamos sus operaciones desde los principales puertos de Asia con soluciones integrales de inspección y transporte.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/servicios/logistica"
                className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:translate-x-2 rounded-full"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
                <span className="relative z-10 flex items-center gap-3">
                  Logistics Solutions <ArrowRight size={16} />
                </span>
              </Link>
              
              <Link 
                to="/servicios/sourcing"
                className="group relative px-12 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:border-white rounded-full"
              >
                <span className="relative z-10">Sourcing Solutions</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Angular */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.5em] text-white">Scroll</span>
      </div>
    </div>
  );
}

export function ServicesOverview() {
  const services = [
    {
      id: 'sourcing',
      icon: <Search className="w-6 h-6" />,
      title: "Sourcing",
      description: "Búsqueda y negociación estratégica con proveedores confiables en Asia.",
      features: ["Verificación", "Negociación", "Muestras"],
      cta: "Ver más",
      highlight: true,
      link: "/servicios/sourcing"
    },
    {
      id: 'shopping',
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Compras",
      description: "Personal shopper y consolidación de envíos de lujo y comerciales.",
      features: ["Personal Shopper", "Consolidación", "Envíos"],
      cta: "Ver más",
      highlight: false,
      link: "/servicios/compras"
    },
    {
      id: 'logistics',
      icon: <Ship className="w-6 h-6" />,
      title: "Logística",
      description: "Transporte integral aéreo, marítimo y terrestre con tracking real.",
      features: ["Flete", "Aduanas", "Almacenaje"],
      cta: "Ver más",
      highlight: false,
      link: "/servicios/logistica"
    },
    {
      id: 'inspection',
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Inspección",
      description: "Control de calidad riguroso en fábrica para garantizar su inversión.",
      features: ["Auditoría", "Pre-embarque", "Carga"],
      cta: "Ver más",
      highlight: false,
      link: "/inspecciones"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rotate-45 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Nuestras Soluciones</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
              ¿Qué Podemos <br />
              <span className="text-primary">Hacer Por Ti?</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg font-medium border-l-2 border-slate-200 pl-6 max-w-md">
            Soluciones ágiles y precisas para optimizar cada eslabón de tu cadena de suministro global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`group relative p-10 transition-all cursor-pointer flex flex-col h-full rounded-3xl overflow-hidden ${
                service.highlight 
                  ? 'bg-primary text-white shadow-2xl shadow-primary/20' 
                  : 'bg-white border border-slate-100 hover:border-primary shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Halftone accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className={`w-16 h-16 flex items-center justify-center mb-8 rounded-2xl transition-all duration-500 ${
                service.highlight 
                  ? 'bg-white/10 text-white' 
                  : 'bg-slate-900 text-white group-hover:bg-primary group-hover:rotate-12'
              }`}>
                {service.icon}
              </div>
              
              <h3 className={`text-2xl font-black mb-4 uppercase tracking-tight italic ${
                service.highlight ? 'text-white' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>
              
              <p className={`text-sm mb-8 leading-relaxed font-medium flex-grow ${
                service.highlight ? 'text-white/80' : 'text-slate-500'
              }`}>
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-current/10">
                <Link 
                  to={service.link} 
                  className={`text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group-hover:gap-5 transition-all ${
                    service.highlight ? 'text-white' : 'text-primary'
                  }`}
                >
                  {service.cta} <ArrowRight size={14} />
                </Link>
                {/* Decorative Rhombus */}
                <div className={`w-4 h-4 border rotate-45 transition-colors ${
                  service.highlight ? 'border-white/20 group-hover:bg-white/10' : 'border-primary/20 group-hover:bg-primary/10'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function AboutSummary() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 clip-angled-left z-0" />
      <div className="absolute top-40 left-10 w-32 h-32 bg-halftone opacity-10 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic leading-none">
              Un Equipo <br />
              <span className="text-transparent stroke-primary stroke-2" style={{ WebkitTextStroke: '1px var(--color-primary)' }}>Integral</span> <br />
              <span className="text-primary">Global</span>
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed relative">
              <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
              <p className="pl-8">
                Somos un equipo integral con presencia directa en <span className="font-bold text-slate-900 border-b-2 border-primary/20">China (Shenzhen)</span> y sedes en <span className="font-bold text-slate-900 border-b-2 border-primary/20">Quito</span>, conectando a Latinoamérica y España con los mercados más dinámicos de Asia.
              </p>
              <p className="pl-8">
                Nuestra experiencia abarca desde la creación de proyectos hasta el sector de compras para industrias y emprendimientos, garantizando calidad y eficiencia en cada paso.
              </p>
              <div className="pt-8 pl-8">
                <Link 
                  to="/about" 
                  className="group inline-flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs hover:gap-6 transition-all"
                >
                  Conoce más <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            {/* Decorative Rhombus */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rotate-45 clip-angled-right z-0" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 relative z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-10 border border-slate-100 hover:border-primary transition-all group relative overflow-hidden rounded-2xl h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors rounded-xl">
                  <Globe size={24} />
                </div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Presencia</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed flex-grow">China, Ecuador, Latam y España.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-10 border border-slate-100 hover:border-primary transition-all group mt-8 relative overflow-hidden rounded-2xl h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors rounded-xl">
                  <Award size={24} />
                </div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Calidad</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed flex-grow">Certificaciones ISO internacionales.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-10 border border-slate-100 hover:border-primary transition-all group -mt-8 relative overflow-hidden rounded-2xl h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors rounded-xl">
                  <Users size={24} />
                </div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Expertos</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed flex-grow">Red de inspectores en toda China.</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-10 border border-slate-100 hover:border-primary transition-all group relative overflow-hidden rounded-2xl h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors rounded-xl">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Experiencia</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed flex-grow">Años impulsando negocios globales.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
