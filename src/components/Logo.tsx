import React, { useId } from 'react';

export function Logo({ className = "w-10 h-10", color = "text-white" }: { className?: string, color?: string }) {
  const patternId = useId();
  const maskId = useId();

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} ${color}`}
    >
      <defs>
        {/* Halftone Pattern */}
        <pattern id={patternId} x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.8" fill="white" />
        </pattern>
        
        {/* Mask for the top part of the 'S' */}
        <mask id={maskId}>
          <path 
            d="M 85 15 L 35 65 L 55 85 L 105 35 Z" 
            fill="white" 
          />
          {/* Gradient to simulate halftone fade */}
          <rect x="0" y="0" width="100" height="100" fill="url(#fadeGradient)" />
        </mask>

        <linearGradient id="fadeGradient" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="70%" stopColor="black" />
        </linearGradient>
      </defs>
      
      {/* Bottom Solid Part of the 'S' */}
      <path 
        d="M 15 85 L 65 35 L 45 15 L -5 65 Z" 
        fill="currentColor" 
      />

      {/* Top Dotted Part of the 'S' */}
      <path 
        d="M 85 15 L 35 65 L 55 85 L 105 35 Z" 
        fill="currentColor" 
        mask={`url(#${maskId})`}
      />
      
      {/* Dots overlay */}
      <rect 
        x="0" 
        y="0" 
        width="100" 
        height="100" 
        fill={`url(#${patternId})`} 
        mask={`url(#${maskId})`} 
      />
    </svg>
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
