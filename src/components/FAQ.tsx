import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo garantizan la calidad de los proveedores en China?",
    answer: "Realizamos auditorías exhaustivas de fábrica que incluyen verificación de licencias legales, capacidad productiva, sistemas de gestión de calidad y condiciones laborales. Además, nuestro equipo local en Shenzhen visita personalmente las instalaciones."
  },
  {
    question: "¿Cuáles son los tiempos promedio de envío?",
    answer: "Los tiempos varían según el método: Aéreo (7-12 días), Marítimo FCL/LCL (35-45 días). Estos tiempos incluyen la gestión aduanal y el transporte interno, aunque pueden variar según el puerto de destino."
  },
  {
    question: "¿Pueden ayudarme si soy un pequeño emprendedor?",
    answer: "Absolutamente. Ofrecemos servicios de consolidación de carga (LCL) y asesoría en sourcing para pequeñas cantidades, permitiendo que emprendedores accedan a precios de fábrica sin necesidad de importar contenedores completos."
  },
  {
    question: "¿Cómo puedo viajar a China para visitar proveedores?",
    answer: "Ofrecemos servicios de acompañamiento integral que incluyen gestión de visados, reserva de hoteles, servicios de traducción y logística de transporte interno. Además, organizamos visitas personalizadas a fábricas y ferias comerciales como la Feria de Cantón."
  },
  {
    question: "¿Cómo se manejan los pagos a los proveedores?",
    answer: "Asesoramos en métodos de pago seguros como Cartas de Crédito, Transferencias Bancarias (T/T) con depósitos fraccionados y plataformas de pago protegidas, asegurando que su capital esté resguardado durante todo el proceso."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rotate-45 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Preguntas Frecuentes</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
            Resolvemos <br />
            <span className="text-primary">Tus Dudas</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full text-left p-8 rounded-3xl transition-all duration-500 border flex items-center justify-between gap-6 ${
                  activeIndex === index 
                    ? 'bg-primary border-primary shadow-2xl shadow-primary/20' 
                    : 'bg-white border-slate-100 hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    activeIndex === index ? 'bg-white/10 text-white' : 'bg-slate-50 text-primary group-hover:bg-primary/5'
                  }`}>
                    <HelpCircle size={24} />
                  </div>
                  <span className={`text-lg font-black uppercase tracking-tight italic ${
                    activeIndex === index ? 'text-white' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-white' : 'text-primary'}`}>
                  {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-4 text-slate-500 font-medium leading-relaxed border-l-2 border-primary/20 ml-14 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
