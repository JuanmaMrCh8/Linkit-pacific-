import React, { useRef } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import { Plane, Languages, Calendar, Briefcase, Users, Coffee, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function FactoryVisits() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  const features = [
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Traductor Profesional",
      description: "Acompañamiento por traductores expertos en negocios y terminología técnica."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Itinerario Personalizado",
      description: "Organizamos su agenda completa, desde visitas a fábricas hasta traslados internos."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Recomendaciones de Negocios",
      description: "Asesoría estratégica basada en nuestra amplia experiencia en el mercado asiático."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ayuda en Procesos",
      description: "Soporte integral en negociaciones, firmas de contratos y validación de proveedores."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Experiencia Cultural",
      description: "Inmersión en la cultura de negocios china para facilitar relaciones a largo plazo."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-[#0F0F11] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Business travel China" 
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Experiencia Linkit Pacific</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Visita de <br />
              <span className="text-primary">Fábricas</span>
            </h1>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel border border-white/10 p-10 rounded-[2.5rem] mb-12 max-w-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-halftone opacity-10 group-hover:opacity-20 transition-opacity" />
              <p className="text-xl md:text-2xl text-white font-black italic leading-tight relative z-10">
                "¿Viaje por negocios o placer? <br />
                <span className="text-primary">Hacer negocios es un placer</span>"
              </p>
            </motion.div>

            <Link 
              to="/contacto" 
              className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
              <span className="relative z-10 flex items-center gap-3">
                Planear mi Viaje <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </section>

      {/* Description Section */}
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
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Ventaja Competitiva</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
                Mucho más que un Viaje, <br />
                <span className="text-primary">Una Ventaja</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium relative">
                <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
                <p className="pl-8">
                  Visitar a sus proveedores en China es el paso definitivo para consolidar su cadena de suministro. En Linkit Pacific, transformamos la complejidad de un viaje internacional en una experiencia fluida, productiva y enriquecedora.
                </p>
                <div className="pl-8 space-y-6">
                  {[
                    "Traducción técnica especializada", 
                    "Gestión de logística interna en China", 
                    "Validación presencial de instalaciones", 
                    "Cenas de negocios y protocolo cultural"
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
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop" 
                  alt="Business meeting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-halftone text-primary/20" />
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
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Propuesta</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.9] mb-8">
              ¿Qué <br />
              <span className="text-primary">Incluye?</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto border-t border-white/10 pt-8">Soporte integral desde su llegada hasta el cierre de sus negociaciones.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ¿Planeando su Próxima <br />
            <span className="text-white/50">Visita a China?</span>
          </h2>
          <p className="text-xl text-white/80 font-medium mb-12">
            Permítanos ser sus ojos, oídos y voz en el gigante asiático. Hacemos que su viaje de negocios sea un verdadero placer.
          </p>
          <Link 
            to="/contacto" 
            className="group relative px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
          >
            <div className="absolute inset-0 bg-primary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
            <span className="relative z-10">Contactar con un Asesor</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
