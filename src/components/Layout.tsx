import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { LogoText } from '@/components/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { 
      name: 'Servicios', 
      path: '#',
      megaMenu: [
        {
          category: 'Compras',
          items: [
            { name: 'Búsqueda de proveedores', path: '/servicios/sourcing' },
            { name: 'Agente de Compras', path: '/servicios/compras' },
            { name: 'Consolidación', path: '/servicios/compras' },
          ]
        },
        {
          category: 'Inspecciones',
          items: [
            { name: 'Auditoría de Fábrica', path: '/inspecciones' },
            { name: 'Control de calidad', path: '/inspecciones' },
            { name: 'Inspección Pre carga', path: '/inspecciones' },
            { name: 'Inspección de Carga', path: '/inspecciones' },
          ]
        },
        {
          category: 'Logística',
          items: [
            { name: 'Envío aéreo', path: '/servicios/logistica' },
            { name: 'Envío Marítimo', path: '/servicios/logistica' },
            { name: 'Aduanas', path: '/servicios/aduanas' },
            { name: 'Tracking', path: '/servicios/logistica' },
          ]
        },
        {
          category: 'Visita China',
          items: [
            { name: 'Visita ferias', path: '/servicios/ferias' },
            { name: 'Visita a fábricas', path: '/servicios/visita-fabricas' },
            { name: 'Traducciones', path: '/servicios/visita-fabricas' },
            { name: 'Acercamiento cultural', path: '/servicios/visita-fabricas' },
          ]
        },
        {
          category: 'Entrada al mercado Chino',
          items: [
            { name: 'Estrategia de Mercado', path: '/servicios/entrada-china' },
          ]
        },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const whatsappUrl = "https://wa.me/8617813279893?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20importaci%C3%B3n%20desde%20China.";

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || !isHome 
        ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" 
        : "bg-transparent"
    )}>
      {/* Decorative Diagonal Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex justify-between items-center transition-all duration-300",
          isScrolled || !isHome ? "h-20" : "h-24"
        )}>
          <div className="flex items-center h-full">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <LogoText light={isHome && !isScrolled} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center h-full space-x-8">
            {links.map((link) => (
              <div key={link.path} className={cn("h-full flex items-center group", link.megaMenu ? "static" : "relative")}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-bold transition-all hover:text-primary tracking-tight flex items-center gap-1 h-full px-2 relative",
                    isHome && !isScrolled 
                      ? (location.pathname === link.path ? "text-white" : "text-white/70")
                      : (location.pathname === link.path ? "text-primary" : "text-gray-600")
                  )}
                >
                  {link.name}
                  {link.megaMenu && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                  {/* Hover indicator - sharp bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>

                {link.megaMenu && (
                  <div className="absolute top-full left-0 right-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="bg-white shadow-2xl border border-t-0 border-gray-100 p-8 grid grid-cols-5 gap-8 overflow-hidden relative">
                        {/* Halftone background accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-halftone opacity-10 -rotate-12 translate-x-1/2 -translate-y-1/2" />
                        
                        {link.megaMenu.map((cat, idx) => (
                          <div key={idx} className="space-y-4 relative z-10">
                            <h3 className="text-xs font-black text-primary uppercase tracking-widest border-l-2 border-primary pl-2">
                              {cat.category}
                            </h3>
                            <div className="flex flex-col space-y-2">
                              {cat.items.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={sub.path}
                                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors py-1 hover:translate-x-1 duration-200"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center h-full">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-8 py-2.5 text-sm font-bold transition-all transform hover:-translate-y-0.5 border-2 rounded-full",
                  isHome && !isScrolled
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    : "bg-primary text-white border-primary hover:bg-transparent hover:text-primary"
                )}
              >
                Cotizar Ahora
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 transition-colors",
                isHome && !isScrolled ? "text-white" : "text-gray-600"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => !link.megaMenu && setIsOpen(false)}
                    className={cn(
                      "block px-3 py-3 rounded-md text-base font-medium",
                      location.pathname === link.path ? "bg-primary/5 text-primary" : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.megaMenu && (
                    <div className="pl-4 space-y-4 mt-2 mb-4">
                      {link.megaMenu.map((cat, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 px-3">
                            {cat.category}
                          </h4>
                          <div className="space-y-1">
                            {cat.items.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-primary-dark transition-colors text-center"
                >
                  Cotizar Ahora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F0F11] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background decoration - Angular bars */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 -rotate-45 translate-x-1/2 -translate-y-1/2 clip-angled-right" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rotate-45 -translate-x-1/2 translate-y-1/2 clip-angled-left" />
      
      {/* Halftone accent */}
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-halftone opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <LogoText light />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-primary/30 pl-4">
              Socios de Crecimiento en Asia. Sourcing, Inspecciones y Logística. Conectando el futuro del comercio internacional.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-all cursor-pointer border border-white/10 hover:border-primary">
                <Globe size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-4 h-[2px] bg-primary" /> Servicios
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/servicios/sourcing" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Sourcing & Compras</Link></li>
              <li><Link to="/inspecciones" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Inspección de Calidad</Link></li>
              <li><Link to="/servicios/logistica" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Logística Internacional</Link></li>
              <li><Link to="/servicios/aduanas" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Gestión Aduanera</Link></li>
              <li><Link to="/servicios/entrada-china" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Entrada a China</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-4 h-[2px] bg-primary" /> Compañía
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Sobre Nosotros</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all" /> Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-white flex items-center gap-2">
              <span className="w-4 h-[2px] bg-primary" /> Contacto
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary" /> info@linkitpacific.com</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary" /> admin@linkitpacific.com</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary" /> +86 17813279893</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary" /> Shenzhen, China</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary" /> Quito, Ecuador</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
          <p>&copy; 2026 Linkit Pacific. Todos los derechos reservados.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
