import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { TrackingWidget } from '@/components/TrackingWidget';
import { motion } from 'motion/react';

export default function TrackingPage() {
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
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Logística en Tiempo Real</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Rastreo de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
                Envíos
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Monitoree el estado de su carga en tiempo real desde origen hasta destino con total transparencia.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TrackingWidget />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
