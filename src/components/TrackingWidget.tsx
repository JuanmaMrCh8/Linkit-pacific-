import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, MapPin, Truck, CheckCircle, Ship } from 'lucide-react';

export function TrackingWidget() {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResult({
        id: trackingId,
        status: 'En Tránsito',
        origin: 'Shanghai, CN',
        destination: 'Manzanillo, MX',
        estimatedDelivery: '15 Oct 2026',
        steps: [
          { status: 'Recibido en Almacén', date: '01 Oct 2026', completed: true },
          { status: 'Despacho de Aduana (CN)', date: '03 Oct 2026', completed: true },
          { status: 'En Tránsito Marítimo', date: '05 Oct 2026', completed: true },
          { status: 'Llegada a Puerto Destino', date: 'Pending', completed: false },
        ]
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-primary p-6 text-white text-center">
        <h2 className="font-sans text-2xl font-bold">Rastreo de Envíos</h2>
        <p className="text-primary-100 text-sm mt-2">Ingrese su número de guía o contenedor</p>
      </div>
      
      <div className="p-8">
        <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Ej: LCL-2026-8899"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent-dark transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? 'Buscando...' : 'Rastrear'}
          </button>
        </form>

        {result && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-gray-100 pt-8"
          >
            <div className="flex flex-wrap justify-between items-center mb-8 bg-gray-50 p-6 rounded-xl">
              <div>
                <p className="text-sm text-gray-500">Número de Guía</p>
                <p className="font-mono font-bold text-lg text-primary">{result.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estado</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {result.status}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimado</p>
                <p className="font-bold text-gray-900">{result.estimatedDelivery}</p>
              </div>
            </div>

            <div className="relative">
              {/* Connector Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

              <div className="space-y-8">
                {result.steps.map((step: any, index: number) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className={`
                      relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 
                      ${step.completed ? 'bg-primary border-primary-light text-white' : 'bg-white border-gray-200 text-gray-300'}
                    `}>
                      {index === 0 && <Package size={24} />}
                      {index === 1 && <CheckCircle size={24} />}
                      {index === 2 && <Ship size={24} />}
                      {index === 3 && <MapPin size={24} />}
                    </div>
                    <div className="pt-3">
                      <h4 className={`font-bold text-lg ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.status}
                      </h4>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
