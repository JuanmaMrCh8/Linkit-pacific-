import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { motion } from 'motion/react';
import { MapPin, Award, Users, Globe, Check } from 'lucide-react';

export default function About() {
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
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Nuestra Historia</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Sobre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                Nosotros
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Conectando continentes, facilitando negocios. Un puente integral entre Asia y Latinoamérica.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Main Content */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                  Un Equipo Integral Global
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Somos un equipo integral, compuesto por personas en <span className="font-semibold text-primary">China (Shenzhen)</span>, además de sedes en <span className="font-semibold text-primary">Quito</span> y con socios estratégicos en toda <span className="font-semibold text-primary">Latinoamérica y España</span>.
                  </p>
                  <p>
                    Contamos con amplia experiencia en la creación de proyectos y en el sector de compras para industrias y emprendimientos. Nuestra presencia global nos permite entender y atender las necesidades específicas de cada mercado.
                  </p>
                  <div className="pt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-accent/10 p-1 rounded-full">
                        <Check size={16} className="text-accent" />
                      </div>
                      <span className="text-slate-700 font-medium">Certificaciones ISO para control de calidad</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-accent/10 p-1 rounded-full">
                        <Check size={16} className="text-accent" />
                      </div>
                      <span className="text-slate-700 font-medium">Extensa red de inspectores expertos en toda China</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Globe size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Presencia Global</h3>
                  <p className="text-slate-500 leading-relaxed">China, Ecuador, Latam y España.</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <Award size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Certificación ISO</h3>
                  <p className="text-slate-500 leading-relaxed">Estándares internacionales de calidad.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <Users size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Red de Expertos</h3>
                  <p className="text-slate-500 leading-relaxed">Inspectores en toda China.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Ubicaciones Clave</h3>
                  <p className="text-slate-500 leading-relaxed">Shenzhen, Quito.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Section with Parallax effect */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Impulsando su <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Crecimiento Global</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Nuestra misión es eliminar las barreras del comercio internacional, permitiendo que su empresa alcance nuevos horizontes con seguridad y eficiencia.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
