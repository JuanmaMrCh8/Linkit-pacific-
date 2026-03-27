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
    { name: 'Servicios', path: '/servicios' },
    { name: 'Inspecciones', path: '/inspecciones' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const whatsappUrl = "https://wa.me/8617813279893?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20importaci%C3%B3n%20desde%20China.";

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled || !isHome 
        ? "bg-white/90 backdrop-blur-md border-gray-100 py-4 shadow-sm" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <LogoText light={isHome && !isScrolled} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold transition-all hover:text-primary tracking-tight",
                  isHome && !isScrolled 
                    ? (location.pathname === link.path ? "text-white" : "text-white/70")
                    : (location.pathname === link.path ? "text-primary" : "text-gray-600")
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5",
                isHome && !isScrolled
                  ? "bg-white text-black hover:shadow-lg hover:shadow-white/20"
                  : "bg-primary text-white hover:shadow-lg hover:shadow-primary/30"
              )}
            >
              Cotizar Ahora
            </a>
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
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path ? "bg-primary/5 text-primary" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <LogoText light />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Socios de Crecimiento en Asia. Sourcing, Inspecciones y Logística. Conectando el futuro del comercio internacional.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Globe size={16} />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Sourcing & Compras</Link></li>
              <li><Link to="/inspecciones" className="hover:text-accent transition-colors">Inspección de Calidad</Link></li>
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Logística Internacional</Link></li>
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Entrada a China</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Compañía</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-accent transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>info@linkitpacific.com</li>
              <li>admin@linkitpacific.com</li>
              <li>+86 17813279893</li>
              <li>Shenzhen, China</li>
              <li>Quito, Ecuador</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Linkit Pacific. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
