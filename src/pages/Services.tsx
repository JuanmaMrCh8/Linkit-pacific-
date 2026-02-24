import React, { useRef, useState } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Search, ShieldCheck, Ship, TrendingUp, Check, ShoppingBag, ArrowRight, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/Logo';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
  highlight?: boolean;
  luxury?: boolean;
}

const services: Service[] = [
  {
    id: 'sourcing',
    title: 'Soluciones de Sourcing',
    icon: <Search className="w-8 h-8 text-white" />,
    description: 'Identificamos y validamos proveedores en China para asegurar la mejor relación calidad-precio.',
    features: [
      'Búsqueda de proveedores verificados',
      'Negociación de precios y contratos',
      'Desarrollo de productos OEM/ODM',
      'Gestión de muestras'
    ],
    image: "https://images.unsplash.com/photo-1566576912902-48f6d932843c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'shopping',
    title: 'Soluciones de Compras',
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    description: 'Asistencia de compra personal para productos de lujo y tecnología desde China.',
    features: [
      'Personal Shopper dedicado',
      'Consolidación de paquetes',
      'Envío puerta a puerta',
      'Acceso a productos exclusivos'
    ],
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'inspection',
    title: 'Inspección de Calidad',
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    description: 'Proteja su inversión con auditorías y controles de calidad antes de que la mercancía salga de la fábrica.',
    features: [
      'Auditoría de fábrica (Factory Audit)',
      'Inspección durante la producción',
      'Inspección pre-embarque (PSI)',
      'Supervisión de carga de contenedores'
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'logistics',
    title: 'Logística Internacional',
    icon: <Ship className="w-8 h-8 text-white" />,
    description: 'Soluciones logísticas integrales puerta a puerta, desde China hasta cualquier puerto de Latinoamérica.',
    features: [
      'Flete marítimo (FCL/LCL)',
      'Flete aéreo express',
      'Consolidación de carga',
      'Despacho aduanal y seguros'
    ],
    image: "https://images.unsplash.com/photo-1494412574643-35d324698428?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'china-entry',
    title: 'Entrada al Mercado Chino',
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    description: 'Ayudamos a marcas latinoamericanas a expandirse y vender sus productos en el mercado de consumo más grande del mundo.',
    features: [
      'Estudio de mercado y competencia',
      'Registro de marca y propiedad intelectual',
      'Estrategia de e-commerce (Tmall, JD, Douyin)',
      'Logística de importación a China'
    ],
    image: "https://images.unsplash.com/photo-1512358958014-b651a7ee1773?q=80&w=800&auto=format&fit=crop",
    highlight: true,
    luxury: true
  }
];

const ServiceSection: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const isEven = index % 2 === 0;
  const isLuxury = service.luxury;

  return (
    <div ref={ref} id={service.id} className={`min-h-[70vh] flex items-center py-12 relative z-10 ${isLuxury ? 'bg-black text-white py-24 my-12' : ''}`}>
      {isLuxury && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          
          {/* Text Content */}
          <motion.div 
            style={{ y }}
            className="lg:w-1/2"
          >
            <div className={`inline-flex p-3 rounded-xl mb-6 ${isLuxury ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' : (service.highlight ? 'bg-accent' : 'bg-primary')} shadow-lg ${isLuxury ? 'shadow-amber-500/10' : 'shadow-primary/20'}`}>
              {React.cloneElement(service.icon as React.ReactElement, { className: `w-8 h-8 ${isLuxury ? 'text-amber-500' : 'text-white'}` })}
            </div>
            <h2 className={`font-sans text-4xl md:text-5xl font-bold mb-6 ${isLuxury ? 'text-white font-serif tracking-wide' : 'text-gray-900'}`}>
              {service.title}
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className={`text-xl mb-8 leading-relaxed ${isLuxury ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className={`mt-1 p-1 rounded-full ${isLuxury ? 'bg-amber-500/20' : 'bg-gray-100'}`}>
                      <Check size={14} className={isLuxury ? 'text-amber-500' : 'text-gray-900'} />
                    </div>
                    <span className={`font-medium ${isLuxury ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            style={{ y: imageY }}
            className="lg:w-1/2 w-full relative group"
          >
            <div className={`relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200 ${isLuxury ? 'border border-amber-500/20 shadow-amber-900/20' : ''}`}>
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${isLuxury ? 'from-black/80 to-amber-900/40' : 'from-primary/40 to-accent/40'} mix-blend-multiply transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function CurvedTrace() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-full hidden lg:block pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <path
          d="M 50% 0 
             C 50% 200, 20% 400, 20% 800 
             S 80% 1200, 80% 1600 
             S 20% 2000, 20% 2400 
             S 80% 2800, 80% 3200 
             S 50% 3600, 50% 4000"
          stroke="#E5E7EB"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 10"
          className="opacity-50"
        />
      </svg>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      <Navbar />
      
      {/* Integrated Header */}
      <div className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50" />
           {/* Abstract background shapes */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Nuestras Capacidades</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Soluciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                Sin Fronteras
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Diseñamos estrategias a medida para conectar su negocio con el potencial de Asia.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow relative">
        <CurvedTrace />
        
        <div className="pb-32">
          {services.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
