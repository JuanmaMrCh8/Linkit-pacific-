import React, { useId } from 'react';

export function Logo({ className = "w-10 h-10", color = "text-white" }: { className?: string, color?: string }) {
  const patternId = useId();
  const maskId = useId();

  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} ${color}`}
    >
      <defs>
        {/* Pattern: White dots on transparent background */}
        <pattern id={patternId} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.5" fill="white" />
        </pattern>
        
        {/* Mask: White dots inside the chevron shape, black elsewhere */}
        <mask id={maskId}>
          <rect x="0" y="0" width="120" height="120" fill="black" />
          <path 
            d="M 15 25 L 60 70 L 105 25" 
            stroke={`url(#${patternId})`} 
            strokeWidth="32" 
            strokeLinecap="square" 
            strokeLinejoin="miter" 
            fill="none"
          />
        </mask>
      </defs>
      
      {/* Solid Chevron (Bottom) */}
      <path 
        d="M 15 95 L 60 50 L 105 95" 
        stroke="currentColor" 
        strokeWidth="32" 
        strokeLinecap="square" 
        strokeLinejoin="miter" 
        fill="none"
      />

      {/* Dotted Chevron (Top) - Rect filled with currentColor, masked by dots */}
      <rect 
        x="0" 
        y="0" 
        width="120" 
        height="120" 
        fill="currentColor" 
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
