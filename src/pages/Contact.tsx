import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVICES = [
  'Sourcing & Compras',
  'Inspección de Calidad',
  'Logística Internacional',
  'Entrada al Mercado Chino',
  'Otros'
];

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Horizontal parallax vectors
  const xPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const xPosReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  const [formState, setFormState] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    email: '',
    servicio: '',
    mensaje: '',
    verification: ''
  });

  const [step, setStep] = useState(1); // 1: Form, 2: Verification
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mathProblem, setMathProblem] = useState({ a: 0, b: 0, result: 0 });

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setMathProblem({ a, b, result: a + b });
  }, [step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }

    if (parseInt(formState.verification) !== mathProblem.result) {
      alert('Verificación incorrecta. Por favor, intente de nuevo.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulating API call to send emails to info@linkitpacific.com
    console.log('Enviando datos a: info@linkitpacific.com', formState);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({
      nombre: '',
      apellido: '',
      empresa: '',
      email: '',
      servicio: '',
      mensaje: '',
      verification: ''
    });
    setStep(1);
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative pt-48 pb-32 overflow-hidden bg-[#0F0F11]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" 
            alt="Global communication" 
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Contacto</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
              Hablemos <br />
              <span className="text-primary">Sin Límites</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium border-l-2 border-primary/30 pl-8">
              Estamos listos para ser su socio estratégico. Envíenos un mensaje y nuestro equipo le responderá en menos de 24 horas.
            </p>
          </motion.div>
        </div>
        
        {/* Halftone accent */}
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-halftone opacity-10 rotate-12 pointer-events-none" />
      </div>

      <main className="flex-grow py-32 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 clip-angled-left z-0" />
        <div className="absolute top-40 left-10 w-32 h-32 bg-halftone opacity-10 z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Información</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-16">
              Canales <br />
              <span className="text-primary">Directos</span>
            </h2>
            
            <div className="space-y-12 relative">
              <div className="absolute -left-8 top-0 w-[1px] h-full bg-slate-200" />
              
              <div className="flex items-start gap-8 group pl-8">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-12">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic mb-4">Oficinas Principales</h3>
                  <div className="space-y-6">
                    <p className="text-slate-500 font-medium leading-relaxed">
                      <span className="text-slate-900 font-black uppercase tracking-widest text-[10px] italic block mb-1">Shenzhen, China</span>
                      No. 123, Nanjing Road, Huangpu District
                    </p>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      <span className="text-slate-900 font-black uppercase tracking-widest text-[10px] italic block mb-1">Quito, Ecuador</span>
                      Av. de los Shyris y Naciones Unidas
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group pl-8">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all duration-500 group-hover:rotate-12">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic mb-4">Correo Electrónico</h3>
                  <p className="text-slate-500 font-medium text-lg hover:text-primary transition-colors cursor-pointer">info@linkitpacific.com (林肯i他)</p>
                  <p className="text-slate-500 font-medium text-lg hover:text-primary transition-colors cursor-pointer">admin@linkitpacific.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group pl-8">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-12">
                  <Phone size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic mb-4">Teléfono</h3>
                  <p className="text-slate-500 font-medium text-lg">+86 17813279893 (China)</p>
                  <p className="text-slate-500 font-medium text-lg">+593 2 123 4567 (Ecuador)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 rounded-[3rem] border border-white/20 relative shadow-2xl"
          >
            <div className="absolute top-0 right-10 w-24 h-24 bg-halftone text-primary/5 -translate-y-1/2" />
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight italic mb-4">¡Mensaje Enviado!</h2>
                  <p className="text-slate-500 font-medium mb-12">Gracias por contactarnos. Le responderemos lo antes posible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="group relative px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 rounded-full"
                  >
                    <div className="absolute inset-0 bg-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
                    <span className="relative z-10">Enviar otro mensaje</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight italic mb-12">
                    {step === 1 ? 'Envíenos un mensaje' : 'Verificación'}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {step === 1 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-3 italic">Nombre</label>
                            <input 
                              required
                              name="nombre"
                              value={formState.nombre}
                              onChange={handleInputChange}
                              type="text" 
                              className="w-full px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium" 
                              placeholder="Su nombre" 
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-3 italic">Apellido</label>
                            <input 
                              required
                              name="apellido"
                              value={formState.apellido}
                              onChange={handleInputChange}
                              type="text" 
                              className="w-full px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium" 
                              placeholder="Su apellido" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-3 italic">Empresa</label>
                            <input 
                              name="empresa"
                              value={formState.empresa}
                              onChange={handleInputChange}
                              type="text" 
                              className="w-full px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium" 
                              placeholder="Nombre de su empresa" 
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-3 italic">Servicio</label>
                            <div className="relative">
                              <select
                                required
                                name="servicio"
                                value={formState.servicio}
                                onChange={handleInputChange}
                                className="w-full px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all appearance-none font-medium"
                              >
                                <option value="">Seleccionar</option>
                                {SERVICES.map(s => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                <ArrowRight size={16} className="rotate-90 text-slate-400" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-3 italic">Email</label>
                          <input 
                            required
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            type="email" 
                            className="w-full px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium" 
                            placeholder="correo@ejemplo.com" 
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-3 italic">Mensaje</label>
                          <textarea 
                            required
                            name="mensaje"
                            value={formState.mensaje}
                            onChange={handleInputChange}
                            rows={4} 
                            className="w-full px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all resize-none font-medium" 
                            placeholder="¿En qué podemos ayudarle?"
                          ></textarea>
                        </div>

                        <button type="submit" className="group relative w-full px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-[1.02] flex items-center justify-center gap-4 rounded-full">
                          <div className="absolute inset-0 bg-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
                          <span className="relative z-10">Siguiente Paso</span>
                          <Send size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div className="bg-slate-900 text-white p-8 rounded-3xl border border-white/10 flex items-center gap-6">
                          <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                            <ShieldCheck size={32} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest italic mb-1">Paso 2: Verificación</p>
                            <p className="font-black italic">Por favor resuelva la operación:</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-8 justify-center py-8">
                          <span className="text-5xl font-black text-slate-900 italic">{mathProblem.a} + {mathProblem.b} =</span>
                          <input 
                            required
                            autoFocus
                            name="verification"
                            value={formState.verification}
                            onChange={handleInputChange}
                            type="number" 
                            className="w-32 px-6 py-6 rounded-2xl bg-white border border-slate-200 text-center text-4xl font-black focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all italic" 
                            placeholder="?" 
                          />
                        </div>

                        <div className="flex gap-4">
                          <button 
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 px-8 py-6 bg-slate-100 text-slate-500 font-black uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all rounded-full"
                          >
                            Atrás
                          </button>
                          <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="flex-[2] group relative px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-[1.02] flex items-center justify-center gap-4 disabled:opacity-50 rounded-full"
                          >
                            <div className="absolute inset-0 bg-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -skew-x-12" />
                            <span className="relative z-10">{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                            {!isSubmitting && <Send size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
