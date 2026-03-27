import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Ship, Search, Globe, Box, ShoppingBag, Zap, Users, BarChart3, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const words = ["Sourcing", "Inspecciones", "Control de calidad", "Logística"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Duotone/Degrade Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Logistics Containers" 
          className="w-full h-full object-cover opacity-50 grayscale contrast-125"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>
        
        {/* Animated Glow Accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Linking continents linking the future
            </span>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
              Expertos en <br />
              <div className="relative h-[1.2em] w-full overflow-hidden flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500 whitespace-nowrap"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Seguridad, agilidad y certeza en cada embarque. Conectamos sus operaciones desde los principales puertos de Asia con soluciones integrales de inspección y transporte.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/servicios"
                className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Logistics Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/servicios"
                className="group px-10 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Sourcing Solutions
              </Link>
            </div>
          </motion.div>
        </div>
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
      description: "Búsqueda y negociación con proveedores.",
      features: ["Verificación", "Negociación", "Muestras"],
      cta: "Ver más",
      highlight: true
    },
    {
      id: 'shopping',
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Compras",
      description: "Personal shopper y envíos de lujo.",
      features: ["Personal Shopper", "Consolidación", "Envíos"],
      cta: "Ver más",
      highlight: false
    },
    {
      id: 'logistics',
      icon: <Ship className="w-6 h-6" />,
      title: "Logística",
      description: "Transporte aéreo, marítimo y terrestre.",
      features: ["Flete", "Aduanas", "Almacenaje"],
      cta: "Ver más",
      highlight: false
    },
    {
      id: 'inspection',
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Inspección",
      description: "Control de calidad en fábrica.",
      features: ["Auditoría", "Pre-embarque", "Carga"],
      cta: "Ver más",
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué Podemos Hacer <span className="text-primary">Por Ti?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones ágiles para tu cadena de suministro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl transition-all hover:-translate-y-1 ${service.highlight ? 'bg-white shadow-xl border border-primary/10' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.highlight ? 'bg-primary text-white' : 'bg-gray-50 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors'}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                to="/servicios" 
                className={`text-sm font-bold flex items-center gap-1 ${service.highlight ? 'text-primary' : 'text-gray-400 group-hover:text-primary transition-colors'}`}
              >
                {service.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function AboutSummary() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              Un Equipo Integral <br />
              <span className="text-primary">Global</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Somos un equipo integral con presencia directa en <span className="font-semibold text-primary">China (Shenzhen)</span> y sedes en <span className="font-semibold text-primary">Quito</span>, conectando a Latinoamérica y España con los mercados más dinámicos de Asia.
              </p>
              <p>
                Nuestra experiencia abarca desde la creación de proyectos hasta el sector de compras para industrias y emprendimientos, garantizando calidad y eficiencia en cada paso.
              </p>
              <div className="pt-6">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  Conoce más sobre nosotros <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Presencia</h3>
              <p className="text-sm text-slate-500">China, Ecuador, Latam y España.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Calidad</h3>
              <p className="text-sm text-slate-500">Certificaciones ISO internacionales.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Expertos</h3>
              <p className="text-sm text-slate-500">Red de inspectores en toda China.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Experiencia</h3>
              <p className="text-sm text-slate-500">Años impulsando negocios globales.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
