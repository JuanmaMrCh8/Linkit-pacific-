import React, { useRef } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative pt-48 pb-32 overflow-hidden bg-[#0F0F11]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team collaboration" 
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Nuestra Historia</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Sobre <br />
              <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium border-l-2 border-primary/30 pl-8">
              Conectando continentes, facilitando negocios. Un puente integral entre Asia y Latinoamérica con precisión y agilidad.
            </p>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </div>

      <main className="flex-grow">
        {/* Main Content */}
        <section className="py-32 relative overflow-hidden">
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
                  <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Equipo Global</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
                  Presencia <br />
                  <span className="text-primary">Integral</span>
                </h2>
                <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium relative">
                  <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
                  <p className="pl-8">
                    Somos un equipo integral, con presencia directa en <span className="text-slate-900 font-bold border-b-2 border-primary/20">Shenzhen, China</span>, sedes en <span className="text-slate-900 font-bold border-b-2 border-primary/20">Quito</span> y socios estratégicos en toda <span className="text-slate-900 font-bold border-b-2 border-primary/20">Latinoamérica</span>.
                  </p>
                  <p className="pl-8">
                    Nuestra experiencia abarca desde la creación de proyectos hasta el sector de compras para industrias y emprendimientos. Nuestra presencia global nos permite entender y atender las necesidades específicas de cada mercado.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Globe />, title: "Presencia Global", desc: "China, Ecuador, Latam y España.", color: "primary" },
                  { icon: <Award />, title: "Certificación ISO", desc: "Estándares internacionales de calidad.", color: "accent" },
                  { icon: <Users />, title: "Red de Expertos", desc: "Inspectores en toda China.", color: "primary" },
                  { icon: <MapPin />, title: "Ubicaciones Clave", desc: "Shenzhen, Quito.", color: "accent" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white p-10 border border-slate-100 hover:border-primary transition-all group relative overflow-hidden rounded-3xl h-full flex flex-col"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-12",
                      item.color === 'primary' ? "bg-slate-900 text-white group-hover:bg-primary" : "bg-slate-900 text-white group-hover:bg-accent"
                    )}>
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic mb-3">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed flex-grow">{item.desc}</p>
                    {/* Decorative Rhombus */}
                    <div className="absolute bottom-6 right-6 w-4 h-4 border border-slate-100 rotate-45 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 bg-[#0F0F11] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
              alt="Business strategy" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-[#0F0F11]" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rotate-45 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Nuestra Misión</span>
                <div className="w-12 h-[2px] bg-primary" />
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.9] mb-12">
                Impulsando su <br />
                <span className="text-primary">Crecimiento Global</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium border-t border-white/10 pt-12">
                Nuestra misión es eliminar las barreras del comercio internacional, permitiendo que su empresa alcance nuevos horizontes con seguridad, certeza y eficiencia absoluta.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
