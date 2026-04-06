import React, { useRef } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import { Languages, Calendar, Briefcase, MapPin, ArrowRight, CheckCircle2, Ticket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function FairAccompaniment() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  const fairs = [
    {
      name: "Feria de Cantón",
      location: "Guangzhou",
      description: "La feria comercial más grande de China, con tres fases que cubren casi todas las industrias."
    },
    {
      name: "Feria de Yiwu",
      location: "Yiwu",
      description: "El mercado mayorista más grande del mundo para bienes de consumo pequeños."
    },
    {
      name: "Hong Kong Source",
      location: "Hong Kong",
      description: "Feria líder en electrónica, regalos y moda con enfoque internacional."
    },
    {
      name: "Ferias por Industrias",
      location: "Diversas ciudades",
      description: "Acompañamiento a ferias especializadas en muebles, maquinaria, textiles y más."
    }
  ];

  const features = [
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Traducción en Tiempo Real",
      description: "Comunicación fluida con expositores para obtener los mejores precios y condiciones."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Itinerario de Ferias",
      description: "Planificamos su ruta por los pabellones más relevantes para su sector."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Acompañamiento Experto",
      description: "Nuestros asesores le ayudan a filtrar proveedores confiables entre miles de expositores."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-[#0F0F11] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop" 
            alt="Trade fair China" 
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Presencia en Eventos Globales</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Acompañamiento <br />
              <span className="text-primary">a Ferias</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-12 border-l-2 border-primary/30 pl-8">
              No se pierda en la inmensidad de las ferias comerciales chinas. Le proporcionamos la estructura y el soporte necesarios para maximizar su tiempo y resultados.
            </p>
            <Link 
              to="/contacto" 
              className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
              <span className="relative z-10 flex items-center gap-3">
                Agendar Acompañamiento <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </section>

      {/* Fairs Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 clip-angled-left z-0" />
        <div className="absolute top-40 left-10 w-32 h-32 bg-halftone opacity-10 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Eventos</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter italic leading-[0.9] mb-8">
              Ferias <br />
              <span className="text-primary">Principales</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto border-t border-slate-200 pt-8">Cubrimos los eventos comerciales más importantes de la región.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fairs.map((fair, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel-light p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:rotate-12 transition-all duration-500">
                    <Ticket size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">{fair.name}</h3>
                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] italic">
                      <MapPin size={12} />
                      <span>{fair.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed flex-grow">{fair.description}</p>
                {/* Decorative Rhombus */}
                <div className="absolute bottom-6 right-6 w-4 h-4 border border-slate-200 rotate-45 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-[#0F0F11] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rotate-45 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:bg-primary group-hover:scale-110 border border-white/5 group-hover:border-primary/50 mb-8">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight italic mb-4">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Próximo Paso</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
            ¿Listo para su Próxima <br />
            <span className="text-primary">Feria Comercial?</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
            Hacemos que su experiencia en las ferias de Asia sea productiva, organizada y exitosa. No deje sus negocios al azar.
          </p>
          <Link 
            to="/contacto" 
            className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
            <span className="relative z-10">Solicitar Itinerario</span>
          </Link>
        </div>
        {/* Decorative Rhombus shapes */}
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-slate-100 rotate-12 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-halftone opacity-5 pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
}
