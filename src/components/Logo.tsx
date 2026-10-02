import React from 'react';

// Símbolo oficial de Linkit Pacific (degradado verde #00D26A → morado #6236FF),
// exportado del archivo de marca y guardado en public/logo-mark.svg.
export function Logo({ className = "w-10 h-10" }: { className?: string; color?: string }) {
  return (
    <img
      src="/logo-mark.svg"
      alt="Linkit Pacific"
      className={`${className} object-contain`}
      draggable={false}
    />
  );
}

export function LogoText({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Logo className="w-full h-full" color={light ? "text-white" : "text-primary"} />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-xl leading-none tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
          <span className="text-accent">LINKIT</span> <span className={light ? 'text-white' : 'text-primary'}>PACIFIC</span>
        </span>
        <span className={`text-[0.6rem] uppercase tracking-[0.2em] font-medium ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          Linking the future
        </span>
      </div>
    </div>
  );
}
