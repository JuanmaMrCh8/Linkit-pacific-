import React, { useRef } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Search, Ship, CheckCircle2, ArrowRight, Heart, Star, Zap, TrendingUp, Camera, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Shopping() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Personal Shopper",
      description: "Asesoría dedicada para encontrar productos exclusivos y marcas de lujo en China."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Gestión de Compras",
      description: "Realizamos la compra por usted, asegurando la autenticidad y el mejor precio."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Consolidación",
      description: "Agrupamos sus compras de diferentes proveedores en un solo envío para ahorrar costos."
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Envío Express",
      description: "Logística rápida y segura puerta a puerta, con seguimiento en tiempo real."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-[#0F0F11] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury shopping China" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F11] via-transparent to-[#0F0F11]/80" />
        </div>

        {/* Horizontal Parallax Vectors */}
        <motion.div 
          style={{ x: xPos }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10 pointer-events-none"
        />
        <motion.div 
          style={{ x: xPosReverse }}
          className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10 pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Experiencia Premium</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Compras <br />
              <span className="text-primary">Exclusivas</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-12 border-l-2 border-primary/30 pl-8">
              Acceda a los productos más exclusivos de Asia con nuestro servicio de Personal Shopper. Lujo, tecnología y calidad a su alcance.
            </p>
            <Link 
              to="/contacto" 
              className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
              <span className="relative z-10 flex items-center gap-3">
                Solicitar Personal Shopper <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-50 clip-angled-right z-0" />
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-halftone opacity-10 z-0" />

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
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Sin Complicaciones</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
                Sus Compras, <br />
                <span className="text-primary">Nuestra Gestión</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium relative">
                <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
                <p className="pl-8">
                  Ya sea para uso personal o para su negocio, nuestro servicio de compras le permite acceder a mercados exclusivos en China. Nos encargamos de la búsqueda, validación, compra y envío, garantizando que reciba exactamente lo que desea.
                </p>
                <div className="pl-8 space-y-6">
                  {[
                    "Acceso a plataformas exclusivas", 
                    "Validación de autenticidad", 
                    "Consolidación de múltiples paquetes", 
                    "Envíos internacionales con seguro"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-[2px] bg-accent group-hover:w-12 transition-all duration-300" />
                      <span className="text-slate-900 font-black uppercase tracking-widest text-xs italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/5 -skew-x-12 blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop" 
                  alt="Shopping luxury" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-halftone text-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-commerce & Trends Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-angled-left z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-10 bg-accent/5 skew-x-12 blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                  alt="E-commerce trends" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-halftone text-accent/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">E-commerce Pro</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
                Búsqueda de <br />
                <span className="text-accent">Tendencias</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium relative">
                <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
                <p className="pl-8">
                  No solo compramos, analizamos. Identificamos los productos con mayor potencial de venta en plataformas globales para que su tienda esté siempre un paso adelante de la competencia.
                </p>
                <div className="pl-8 space-y-6">
                  {[
                    "Análisis de nichos rentables", 
                    "Identificación de productos virales", 
                    "Reportes de mercado en tiempo real", 
                    "Estrategia de catálogo dinámico"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all duration-300" />
                      <span className="text-slate-900 font-black uppercase tracking-widest text-xs italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Photography Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-slate-50 clip-angled-right z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Acelera tus Ventas</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
                Vende Antes <br />
                <span className="text-primary">de que Llegue</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium relative">
                <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
                <p className="pl-8">
                  Optimizamos su flujo de caja. Con nuestro servicio de fotografía y video profesional en China, usted recibe el material visual de sus productos antes de que salgan del puerto.
                </p>
                <div className="pl-8 space-y-6">
                  {[
                    "Fotografía de estudio profesional", 
                    "Videos de producto para Ads", 
                    "Contenido listo para redes sociales", 
                    "Infografías técnicas de producto"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-[2px] bg-accent group-hover:w-12 transition-all duration-300" />
                      <span className="text-slate-900 font-black uppercase tracking-widest text-xs italic">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 pl-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10">
                    <Camera className="text-primary" size={20} />
                    <span className="text-primary font-black uppercase tracking-widest text-[10px]">Material visual en 48h</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/5 -skew-x-12 blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop" 
                  alt="Product photography" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-panel rounded-3xl border border-white/20 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-black uppercase tracking-tighter italic text-xl">Vende tu producto antes que llegue de China</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-halftone text-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#0F0F11] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rotate-45 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Servicios</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.9] mb-8">
              Servicio <br />
              <span className="text-primary">Personalizado</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto border-t border-white/10 pt-8">Hacemos que comprar en China sea tan fácil como comprar en su ciudad.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-primary transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-12 mb-6">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight italic mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed flex-grow">{feature.description}</p>
                {/* Decorative Rhombus */}
                <div className="absolute bottom-6 right-6 w-4 h-4 border border-white/10 rotate-45 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-halftone pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none mb-12">
            ¿Desea algo <br />
            <span className="text-white/50">Especial de China?</span>
          </h2>
          <p className="text-xl text-white/80 font-medium mb-12">
            Nuestro equipo está listo para encontrar y enviar cualquier producto que necesite.
          </p>
          <Link 
            to="/contacto" 
            className="group relative px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
          >
            <div className="absolute inset-0 bg-primary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
            <span className="relative z-10">Contactar Personal Shopper</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
