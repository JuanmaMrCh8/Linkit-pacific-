import React from 'react';

export function Logo({ className = "w-10 h-10", color = "text-white" }: { className?: string, color?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Lower L shape */}
      <path 
        d="M30 70 L30 50 L50 30 L70 50 L50 70 L30 70 Z" 
        fill="currentColor" 
        className={color}
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Upper L shape (simplified dot pattern representation as solid for scalability, or distinct path) */}
      <path 
        d="M70 30 L70 50 L50 70 L30 50 L50 30 L70 30 Z" 
        fill="currentColor" 
        className={color}
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Central connection */}
      <path 
        d="M40 60 L60 40" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoText({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-lg transform rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl transform -rotate-0">
          L
        </div>
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
