import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navbar, Footer } from '@/components/Layout';
import { FileCheck, ShieldCheck, Gavel, Scale, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Customs() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 bg-[#0F0F11] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
              alt="Customs Port" 
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
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Gestión Aduanera</span>
                </div>
                <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
                  Despacho <br />
                  <span className="text-primary">Sin Complicaciones</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-12 border-l-2 border-primary/30 pl-8">
                  Expertos en normativa internacional y procesos locales. Garantizamos la liberación ágil de su mercancía cumpliendo con todos los requisitos legales.
                </p>
                <Link 
                  to="/contacto"
                  className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
                  <span className="relative z-10 flex items-center gap-3">
                    Consultar con un experto <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Halftone accent */}
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
        </section>

        {/* Services Grid */}
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 clip-angled-left z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileCheck className="w-8 h-8" />,
                  title: "Documentación",
                  desc: "Gestión integral de facturas, packing list, certificados de origen y licencias de importación."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Clasificación",
                  desc: "Determinación precisa de la partida arancelaria para evitar multas y optimizar el pago de impuestos."
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Liberación Rápida",
                  desc: "Seguimiento en tiempo real y coordinación directa con agentes de aduana para minimizar tiempos de espera."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-10 border border-slate-100 rounded-[2.5rem] hover:border-primary transition-all duration-500 group relative overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 rounded-2xl group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight italic">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed flex-grow">{item.desc}</p>
                  {/* Decorative Rhombus */}
                  <div className="absolute bottom-6 right-6 w-4 h-4 border border-slate-200 rotate-45 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Compliance Section */}
        <section className="py-32 bg-[#0F0F11] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-halftone opacity-5 -rotate-12" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rotate-45 rounded-full blur-3xl" />
          
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
                  <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Cumplimiento Legal</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                  Seguridad <br />
                  <span className="text-primary">Normativa Total</span>
                </h2>
                <div className="space-y-8 text-slate-400 font-medium relative">
                  <div className="absolute -left-8 top-0 w-[1px] h-full bg-white/10" />
                  <div className="flex gap-6 items-start pl-8 group">
                    <div className="w-10 h-10 bg-white/5 text-primary flex items-center justify-center rounded-xl flex-shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Gavel size={18} />
                    </div>
                    <p className="text-lg leading-relaxed">Asesoría en regulaciones arancelarias y no arancelarias vigentes en cada país de destino.</p>
                  </div>
                  <div className="flex gap-6 items-start pl-8 group">
                    <div className="w-10 h-10 bg-white/5 text-primary flex items-center justify-center rounded-xl flex-shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Scale size={18} />
                    </div>
                    <p className="text-lg leading-relaxed">Prevención de riesgos legales mediante auditorías preventivas de documentos de embarque.</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-12 rounded-[3rem] relative z-10 border-white/5 hover:border-primary/30 transition-all duration-500"
                >
                  <h3 className="text-3xl font-black mb-8 uppercase italic text-white">¿Por qué Linkit Pacific?</h3>
                  <ul className="space-y-6 text-slate-300 font-medium">
                    {[
                      "Red de agentes certificados",
                      "Experiencia en múltiples aduanas",
                      "Transparencia total en costos",
                      "Soporte 24/7 durante el despacho"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-halftone pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none mb-12">
              ¿Listo para <br />
              <span className="text-white/50">Importar?</span>
            </h2>
            <p className="text-xl text-white/80 font-medium mb-12">
              Evite retrasos y multas con nuestra gestión aduanera profesional.
            </p>
            <Link 
              to="/contacto" 
              className="group relative px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
            >
              <div className="absolute inset-0 bg-primary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
              <span className="relative z-10">Contactar con Aduanas</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
