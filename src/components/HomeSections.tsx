import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Ship, Search, Globe, Box, ShoppingBag, Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const words = ["Sourcing", "Inspections", "Logistics", "Market"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary/10 to-accent/10 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              <div className="flex flex-col items-start">
                <div className="relative h-[1.2em] w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[index]}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent whitespace-nowrap"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-gray-900">Solutions</span>
              </div>
            </h1>

            <div className="mt-12 mb-12">
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Sourcing experto, logística sin fisuras y entrada estratégica al mercado. Somos el puente entre América Latina y China.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Abstract 3D-like Visual */}
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[3rem] rotate-6 opacity-10 blur-xl" />
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=1000&auto=format&fit=crop" 
                  alt="Logística Futurista" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Envíos Activos</p>
                      <h3 className="text-3xl font-bold">1,248</h3>
                    </div>
                    <div className="h-10 w-24 bg-gradient-to-r from-accent to-transparent rounded-full opacity-50" />
                  </div>
                </motion.div>
              </div>
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

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Enfoque</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Socios estratégicos en tu crecimiento global
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              En Linkit Pacific, no solo movemos cajas; impulsamos negocios. Nuestra metodología combina un profundo conocimiento de la industria, tecnología innovadora y un enfoque centrado en el cliente.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Procesos Transparentes", desc: "Rastreo en tiempo real y modelos de precios claros." },
                { title: "Experiencia Local", desc: "Equipos nativos tanto en China como en América Latina." },
                { title: "Soporte Integral", desc: "Desde el piso de la fábrica hasta la puerta de tu almacén." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Conoce más sobre nosotros <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Reunión de Equipo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            
            {/* Floating Stat */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl text-accent">
                  <Users size={24} />
                </div>
                <span className="font-bold text-gray-900 text-lg">Éxito del Cliente</span>
              </div>
              <p className="text-gray-500 text-sm">
                "Linkit Pacific transformó la eficiencia de nuestra cadena de suministro en un 40% en solo 6 meses."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TrustIndicators() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Con la confianza de líderes de la industria</h2>
          <p className="text-gray-500">Impulsando cadenas de suministro para empresas en toda América Latina.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
              <span className="font-bold text-xl text-gray-400">SOCIO {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
