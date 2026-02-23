import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { MapPin, Award, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">Nosotros</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Conectando continentes, facilitando negocios.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Un Equipo Integral Global
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    Somos un equipo integral, compuesto por personas en <span className="font-semibold text-primary">China (Shanghai y Shenzhen)</span>, además de sedes en <span className="font-semibold text-primary">Quito</span> y con socios estratégicos en toda <span className="font-semibold text-primary">Latinoamérica y España</span>.
                  </p>
                  <p className="mb-6">
                    Contamos con amplia experiencia en la creación de proyectos y en el sector de compras para industrias y emprendimientos. Nuestra presencia global nos permite entender y atender las necesidades específicas de cada mercado.
                  </p>
                  <p>
                    Nos respaldan certificaciones <span className="font-semibold text-accent">ISO para control de calidad</span> y una extensa red de inspectores expertos en toda China, listos para facilitar cualquier proyecto, sourcing o inspección con los más altos estándares.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <Globe size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Presencia Global</h3>
                  <p className="text-sm text-gray-500">China, Ecuador, Latam y España.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Certificación ISO</h3>
                  <p className="text-sm text-gray-500">Estándares internacionales de calidad.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Red de Expertos</h3>
                  <p className="text-sm text-gray-500">Inspectores en toda China.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Ubicaciones Clave</h3>
                  <p className="text-sm text-gray-500">Shanghai, Shenzhen, Quito.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
