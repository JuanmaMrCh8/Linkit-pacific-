import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { ShieldCheck, Factory, Search, CheckSquare, ArrowRight, ClipboardCheck, AlertCircle, BarChart3, Truck } from 'lucide-react';

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
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial quality control" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Excelencia Operativa</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Control de Calidad e <span className="text-primary">Inspecciones</span> en Asia
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Protegemos su inversión mediante auditorías rigurosas y procesos de inspección certificados bajo estándares internacionales. No deje la calidad de su marca al azar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1 inline-block">
                Solicitar Inspección
              </Link>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-white/30 transition-all transform hover:-translate-y-1">
                Descargar Reporte Ejemplo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Inspections? */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                ¿Por qué son vitales las inspecciones?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Garantizamos que lo que usted paga sea exactamente lo que recibe, actuando como sus ojos en la fábrica para mitigar riesgos y asegurar la calidad.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <AlertCircle className="w-7 h-7 text-red-500" />, text: 'Reducción de riesgos de productos defectuosos' },
                { icon: <ClipboardCheck className="w-7 h-7 text-green-500" />, text: 'Cumplimiento estricto de especificaciones' },
                { icon: <BarChart3 className="w-7 h-7 text-blue-500" />, text: 'Mejora continua de la cadena de suministro' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-center text-sm max-w-[180px]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Proceso de Inspección</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Metodología rigurosa basada en estándares internacionales de calidad.</p>
          </div>

          <div className="space-y-24">
            {INSPECTION_TYPES.map((type, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-50" />
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="relative w-full aspect-video object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                    {type.icon}
                    <span>Servicio Especializado</span>
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 tracking-tight">{type.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {type.description} En Linkit Pacific, no solo inspeccionamos; proporcionamos un análisis técnico profundo que le permite tomar decisiones informadas sobre sus compras internacionales.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <CheckSquare className="text-primary w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">¿Listo para asegurar su producción?</h2>
          <p className="text-xl text-white/80 mb-12">
            Obtenga reportes detallados en menos de 24 horas después de la inspección. Transparencia total en su cadena de suministro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contacto" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl inline-block">
              Agendar Auditoría Ahora
            </Link>
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Descargar Reporte Ejemplo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
