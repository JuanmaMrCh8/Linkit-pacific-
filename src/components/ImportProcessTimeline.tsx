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
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-white to-white opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block"
          >
            Proceso Simplificado
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Soluciones Integrales
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Gestionamos cada etapa de su cadena de suministro, desde la fábrica en China hasta su puerta en Latinoamérica.
          </motion.p>
        </div>

        <div className="relative">
          {/* Curved Line Background - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 h-32 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path 
                d="M0,50 C200,50 300,20 400,20 C500,20 600,80 700,80 C800,80 900,50 1200,50" 
                fill="none" 
                stroke="#E5E7EB" 
                strokeWidth="4" 
                strokeDasharray="10 10"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col items-center text-center group ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-16'}`}
              >
                {/* Connector Line Mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-0 left-1/2 w-0.5 h-8 bg-gray-200 -mb-8 transform -translate-x-1/2" />
                )}

                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} shadow-lg shadow-purple-500/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 z-10 relative`}>
                    {step.icon}
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${step.color} blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 w-full relative z-10">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                    0{step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <Link 
                    to={step.link} 
                    className="text-primary text-sm font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all"
                  >
                    Leer más <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
