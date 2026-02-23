import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { Search, ShieldCheck, Ship, TrendingUp, Check, ShoppingBag } from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    title: 'Soluciones de Sourcing',
    icon: <Search className="w-12 h-12 text-white" />,
    description: 'Identificamos y validamos proveedores en China para asegurar la mejor relación calidad-precio.',
    features: [
      'Búsqueda de proveedores verificados',
      'Negociación de precios y contratos',
      'Desarrollo de productos OEM/ODM',
      'Gestión de muestras'
    ]
  },
  {
    id: 'shopping',
    title: 'Soluciones de Compras',
    icon: <ShoppingBag className="w-12 h-12 text-white" />,
    description: 'Asistencia de compra personal para productos de lujo y tecnología desde China.',
    features: [
      'Personal Shopper dedicado',
      'Consolidación de paquetes',
      'Envío puerta a puerta',
      'Acceso a productos exclusivos'
    ]
  },
  {
    id: 'inspection',
    title: 'Inspección de Calidad',
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    description: 'Proteja su inversión con auditorías y controles de calidad antes de que la mercancía salga de la fábrica.',
    features: [
      'Auditoría de fábrica (Factory Audit)',
      'Inspección durante la producción',
      'Inspección pre-embarque (PSI)',
      'Supervisión de carga de contenedores'
    ]
  },
  {
    id: 'logistics',
    title: 'Logística Internacional',
    icon: <Ship className="w-12 h-12 text-white" />,
    description: 'Soluciones logísticas integrales puerta a puerta, desde China hasta cualquier puerto de Latinoamérica.',
    features: [
      'Flete marítimo (FCL/LCL)',
      'Flete aéreo express',
      'Consolidación de carga',
      'Despacho aduanal y seguros'
    ]
  },
  {
    id: 'china-entry',
    title: 'Entrada al Mercado Chino',
    icon: <TrendingUp className="w-12 h-12 text-white" />,
    description: 'Ayudamos a marcas latinoamericanas a expandirse y vender sus productos en el mercado de consumo más grande del mundo.',
    features: [
      'Estudio de mercado y competencia',
      'Registro de marca y propiedad intelectual',
      'Estrategia de e-commerce (Tmall, JD, Douyin)',
      'Logística de importación a China'
    ],
    highlight: true
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl md:text-5xl font-bold mb-6"
          >
            Nuestras Soluciones
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un puente integral entre Asia y Latinoamérica. Simplificamos la complejidad del comercio internacional.
          </p>
        </div>
      </div>

      <main className="flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.highlight ? 'bg-accent text-white' : 'bg-primary/10 text-primary'}`}>
                  {React.cloneElement(service.icon as React.ReactElement, { className: `w-12 h-12 ${service.highlight ? 'text-white' : 'text-primary'}` })}
                </div>
                <h2 className="font-sans text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-accent/10 p-1 rounded-full">
                        <Check size={16} className="text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200">
                  {/* Placeholder images based on service type */}
                  <img 
                    src={
                      service.id === 'sourcing' ? "https://images.unsplash.com/photo-1566576912902-48f6d932843c?q=80&w=800&auto=format&fit=crop" :
                      service.id === 'inspection' ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" :
                      service.id === 'logistics' ? "https://images.unsplash.com/photo-1494412574643-35d324698428?q=80&w=800&auto=format&fit=crop" :
                      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=800&auto=format&fit=crop"
                    }
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
