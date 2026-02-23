import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { TrackingWidget } from '@/components/TrackingWidget';

export default function TrackingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Rastreo de Envíos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Monitoree el estado de su carga en tiempo real desde origen hasta destino.
          </p>
        </div>
        <TrackingWidget />
      </main>
      <Footer />
    </div>
  );
}
