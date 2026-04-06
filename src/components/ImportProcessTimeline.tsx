import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ShieldCheck, Ship, FileCheck, PackageCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Sourcing",
    description: "Identificación de proveedores confiables y negociación.",
    icon: <Search className="w-6 h-6 text-white" />,
    color: "bg-primary",
    link: "/servicios#sourcing"
  },
  {
    id: 2,
    title: "Inspección",
    description: "Control de calidad y auditoría de fábrica.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: "bg-accent",
    link: "/servicios#inspeccion"
  },
  {
    id: 3,
    title: "Logística",
    description: "Transporte internacional (Marítimo/Aéreo).",
    icon: <Ship className="w-6 h-6 text-white" />,
    color: "bg-primary-light",
    link: "/servicios#logistica"
  },
  {
    id: 4,
    title: "Aduanas",
    description: "Gestión de trámites y liberación aduanal.",
    icon: <FileCheck className="w-6 h-6 text-white" />,
    color: "bg-accent-light",
    link: "/servicios#aduanas"
  },
  {
    id: 5,
    title: "Entrega",
    description: "Distribución final hasta su almacén.",
    icon: <PackageCheck className="w-6 h-6 text-white" />,
    color: "bg-primary-dark",
    link: "/servicios#entrega"
  }
];

export function ImportProcessTimeline() {
  return (
    <section className="py-32 bg-[#0F0F11] overflow-hidden relative">
      {/* Background decoration - Diagonal lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-halftone" />
        <div className="absolute top-1/4 -left-20 w-[120%] h-[1px] bg-primary rotate-12" />
        <div className="absolute top-3/4 -left-20 w-[120%] h-[1px] bg-accent -rotate-6" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Proceso Simplificado</span>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic"
          >
            Soluciones <span className="text-primary">Integrales</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg font-medium border-l-2 border-primary/30 pl-6 text-left"
          >
            Gestionamos cada etapa de su cadena de suministro, desde la fábrica en China hasta su puerta en Latinoamérica.
          </motion.p>
        </div>

        <div className="relative">
          {/* Diagonal Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-3 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col group ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'}`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-panel p-8 relative overflow-hidden transition-all hover:border-primary duration-300 rounded-2xl h-full flex flex-col"
                >
                  {/* Step Number - Angular */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 flex items-center justify-center text-primary font-black italic text-xl clip-angled-right">
                    0{step.id}
                  </div>
                  
                  {/* Halftone accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />

                  <div className="relative mb-8">
                    <div className={`w-14 h-14 ${step.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 z-10 relative rounded-xl`}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight italic">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8 font-medium flex-grow">
                    {step.description}
                  </p>
                  
                  <Link 
                    to={step.link} 
                    className="group inline-flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest hover:gap-5 transition-all mt-auto"
                  >
                    Leer más <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
