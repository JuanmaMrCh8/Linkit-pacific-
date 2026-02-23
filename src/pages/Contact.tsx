import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-4xl md:text-5xl font-bold mb-6"
          >
            Contáctenos
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos listos para ser su socio estratégico. Envíenos un mensaje y nuestro equipo le responderá en menos de 24 horas.
          </p>
        </div>
      </div>

      <main className="flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-sans text-3xl font-bold text-primary mb-8">Información de Contacto</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Oficinas Principales</h3>
                  <p className="text-gray-600">
                    Shanghai, China<br />
                    No. 123, Nanjing Road, Huangpu District
                  </p>
                  <p className="text-gray-600 mt-4">
                    Ciudad de México, México<br />
                    Av. Paseo de la Reforma 456, Lomas de Chapultepec
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Correo Electrónico</h3>
                  <p className="text-gray-600">info@linkcontinents.com</p>
                  <p className="text-gray-600">ventas@linkcontinents.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Teléfono</h3>
                  <p className="text-gray-600">+86 21 1234 5678 (China)</p>
                  <p className="text-gray-600">+52 55 1234 5678 (México)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <h2 className="font-sans text-2xl font-bold text-gray-900 mb-6">Envíenos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Su nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Su apellido" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Nombre de su empresa" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="correo@ejemplo.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Enviar Mensaje <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
