import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const SERVICES = [
  'Sourcing & Compras',
  'Inspección de Calidad',
  'Logística Internacional',
  'Entrada al Mercado Chino',
  'Otros'
];

export default function Contact() {
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
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      <Navbar />
      
      {/* Integrated Header */}
      <div className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50" />
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Contacto</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Hablemos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                Sin Límites
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Estamos listos para ser su socio estratégico. Envíenos un mensaje y nuestro equipo le responderá en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow py-24 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight">Información de Contacto</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-5 rounded-2xl text-primary shadow-lg shadow-primary/5 border border-slate-100 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Oficinas Principales</h3>
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-900">Shenzhen, China</span><br />
                      No. 123, Nanjing Road, Huangpu District
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-900">Quito, Ecuador</span><br />
                      Av. de los Shyris y Naciones Unidas
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white p-5 rounded-2xl text-accent shadow-lg shadow-accent/5 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Correo Electrónico</h3>
                  <p className="text-slate-600 text-lg">info@linkitpacific.com (林肯i他)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white p-5 rounded-2xl text-purple-600 shadow-lg shadow-purple-500/5 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Teléfono</h3>
                  <p className="text-slate-600 text-lg">+86 17813279893 (China)</p>
                  <p className="text-slate-600 text-lg">+593 2 123 4567 (Ecuador)</p>
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
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <div className="absolute top-0 right-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2" />
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Mensaje Enviado!</h2>
                  <p className="text-slate-600 mb-8">Gracias por contactarnos. Le responderemos lo antes posible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                    {step === 1 ? 'Envíenos un mensaje' : 'Verificación de Seguridad'}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {step === 1 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Nombre</label>
                            <input 
                              required
                              name="nombre"
                              value={formState.nombre}
                              onChange={handleInputChange}
                              type="text" 
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" 
                              placeholder="Su nombre" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Apellido</label>
                            <input 
                              required
                              name="apellido"
                              value={formState.apellido}
                              onChange={handleInputChange}
                              type="text" 
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" 
                              placeholder="Su apellido" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Empresa</label>
                            <input 
                              name="empresa"
                              value={formState.empresa}
                              onChange={handleInputChange}
                              type="text" 
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" 
                              placeholder="Nombre de su empresa" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Servicio de Interés</label>
                            <select
                              required
                              name="servicio"
                              value={formState.servicio}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none"
                            >
                              <option value="">Seleccione un servicio</option>
                              {SERVICES.map(s => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Correo Electrónico</label>
                          <input 
                            required
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            type="email" 
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" 
                            placeholder="correo@ejemplo.com" 
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Mensaje</label>
                          <textarea 
                            required
                            name="mensaje"
                            value={formState.mensaje}
                            onChange={handleInputChange}
                            rows={4} 
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none" 
                            placeholder="¿En qué podemos ayudarle?"
                          ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 group">
                          Siguiente Paso
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <Send size={16} />
                          </div>
                        </button>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                            <ShieldCheck size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Paso 2: Verificación Anti-Spam</p>
                            <p className="text-slate-900 font-medium">Por favor resuelva la siguiente operación:</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 justify-center py-4">
                          <span className="text-4xl font-bold text-slate-900">{mathProblem.a} + {mathProblem.b} =</span>
                          <input 
                            required
                            autoFocus
                            name="verification"
                            value={formState.verification}
                            onChange={handleInputChange}
                            type="number" 
                            className="w-24 px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-center text-2xl font-bold focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" 
                            placeholder="?" 
                          />
                        </div>

                        <div className="flex gap-4">
                          <button 
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl hover:bg-slate-200 transition-all"
                          >
                            Atrás
                          </button>
                          <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="flex-[2] bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 disabled:opacity-50"
                          >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            {!isSubmitting && <Send size={16} />}
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
