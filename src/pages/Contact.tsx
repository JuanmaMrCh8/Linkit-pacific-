import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
                      <span className="font-semibold text-slate-900">Shanghai, China</span><br />
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
                  <p className="text-slate-600 text-lg">info@linkcontinents.com</p>
                  <p className="text-slate-600 text-lg">ventas@linkcontinents.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white p-5 rounded-2xl text-purple-600 shadow-lg shadow-purple-500/5 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Teléfono</h3>
                  <p className="text-slate-600 text-lg">+86 21 1234 5678 (China)</p>
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
            
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Envíenos un mensaje</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Nombre</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Su nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Apellido</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Su apellido" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Empresa</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Nombre de su empresa" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Correo Electrónico</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="correo@ejemplo.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Mensaje</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 group">
                Enviar Mensaje 
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <Send size={16} />
                </div>
              </button>
            </form>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
