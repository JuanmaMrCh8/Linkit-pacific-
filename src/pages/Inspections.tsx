import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Factory, Search, CheckSquare, ArrowRight, ClipboardCheck, AlertCircle, BarChart3, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const INSPECTION_TYPES = [
  {
    title: 'Auditoría de Fábrica',
    icon: <Factory className="w-8 h-8" />,
    description: 'Evaluación exhaustiva de sus proveedores potenciales antes de realizar el primer pago.',
    benefits: [
      'Verificación de licencias legales',
      'Evaluación de capacidad productiva',
      'Revisión del sistema de gestión de calidad',
      'Validación de condiciones sociales y laborales'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Inspección de Carga',
    icon: <Truck className="w-8 h-8" />,
    description: 'Supervisión presencial del proceso de carga para asegurar que el producto se maneje correctamente.',
    benefits: [
      'Verificación de condiciones del contenedor',
      'Supervisión de estiba y protección de carga',
      'Control de sellado y precintado de seguridad',
      'Registro fotográfico del proceso de cierre'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Inspección Pre-Embarque (PSI)',
    icon: <ShieldCheck className="w-8 h-8" />,
    description: 'La inspección más crítica. Se realiza cuando el 80-100% de la producción está terminada y embalada.',
    benefits: [
      'Verificación de cantidad y calidad final',
      'Control de embalaje y etiquetado',
      'Pruebas de funcionamiento in-situ',
      'Evita el envío de productos defectuosos'
    ],
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Control de Calidad (QC)',
    icon: <CheckSquare className="w-8 h-8" />,
    description: 'Procesos estandarizados para asegurar que cada unidad cumpla con sus especificaciones técnicas.',
    benefits: [
      'Pruebas de laboratorio especializadas',
      'Verificación de materiales y componentes',
      'Reportes fotográficos detallados',
      'Certificación de cumplimiento normativo'
    ],
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615ad?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Inspections() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-[#0F0F11] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial quality control" 
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Excelencia Operativa</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Control de <br />
              <span className="text-primary">Calidad</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-12 border-l-2 border-primary/30 pl-8">
              Protegemos su inversión mediante auditorías rigurosas y procesos de inspección certificados bajo estándares internacionales. No deje la calidad de su marca al azar.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/contacto" 
                className="group relative px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
                <span className="relative z-10 flex items-center gap-3">
                  Solicitar Inspección <ArrowRight size={14} />
                </span>
              </Link>
              <button className="group relative px-12 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:border-white inline-block rounded-full">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-black">Descargar Reporte Ejemplo</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </section>

      {/* Why Inspections? */}
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
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Importancia</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-12">
                ¿Por qué son <br />
                <span className="text-primary">Vitales?</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12 border-l-2 border-slate-200 pl-8">
                Garantizamos que lo que usted paga sea exactamente lo que recibe, actuando como sus ojos en la fábrica para mitigar riesgos y asegurar la calidad.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: <AlertCircle className="w-8 h-8 text-red-500" />, text: 'Reducción de riesgos' },
                  { icon: <ClipboardCheck className="w-8 h-8 text-green-500" />, text: 'Cumplimiento estricto' },
                  { icon: <BarChart3 className="w-8 h-8 text-blue-500" />, text: 'Mejora continua' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-4 text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/50 h-full"
                  >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 italic mt-auto">{item.text}</span>
                  </motion.div>
                ))}
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Quality control" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-halftone text-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-32 bg-[#0F0F11] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rotate-45 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Metodología</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.9] mb-8">
              Nuestro <br />
              <span className="text-primary">Proceso</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto border-t border-white/10 pt-8">Metodología rigurosa basada en estándares internacionales de calidad.</p>
          </div>

          <div className="space-y-32">
            {INSPECTION_TYPES.map((type, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
              >
                <div className="flex-1 relative group">
                  <div className="absolute -inset-4 bg-primary/10 -skew-x-12 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-12">
                      {React.cloneElement(type.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Servicio Especializado</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">{type.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-medium border-l-2 border-white/5 pl-8">
                    {type.description} En Linkit Pacific, no solo inspeccionamos; proporcionamos un análisis técnico profundo que le permite tomar decisiones informadas sobre sus compras internacionales.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-5 glass-panel rounded-2xl border border-white/5 hover:border-primary/30 transition-all group/benefit h-full">
                        <CheckSquare className="text-primary w-5 h-5 flex-shrink-0 group-hover/benefit:scale-125 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest text-white italic">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-halftone pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none mb-12">
            ¿Listo para Asegurar <br />
            <span className="text-white/50">su Producción?</span>
          </h2>
          <p className="text-xl text-white/80 font-medium mb-12 leading-relaxed">
            Obtenga reportes detallados en menos de 24 horas después de la inspección. Transparencia total en su cadena de suministro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contacto" 
              className="group relative px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 inline-block rounded-full"
            >
              <div className="absolute inset-0 bg-primary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
              <span className="relative z-10">Agendar Auditoría</span>
            </Link>
            <button className="group relative px-12 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:border-white inline-block rounded-full">
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-black">Descargar Reporte Ejemplo</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
