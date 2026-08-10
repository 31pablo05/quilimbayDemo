import { useEffect, useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Pequeño delay para que la animación de entrada se vea
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Esperar a que termine la animación de salida antes de desmontar
      const timeout = setTimeout(() => setShouldRender(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Destinos', href: '/#destinos' },
    { name: 'Experiencias', href: '/#experiencias' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay invisible - solo para capturar clicks fuera del panel */}
      <div 
        className="absolute inset-0 z-10"
        onClick={onClose}
      />
      
      {/* Panel dropdown compacto */}
      <div 
        className="absolute right-0 w-[220px] bg-navy-light border-l border-b border-gold/20 rounded-bl-lg shadow-lg z-20"
        onClick={(e) => e.stopPropagation()}
        style={{
          top: '80px',
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'scale(1)' : 'scale(0.95)',
          transformOrigin: 'top right',
          transition: 'opacity 200ms ease-out, transform 200ms ease-out',
        }}
      >
        <nav className="py-2">
          {links.map((link, index) => (
            <div key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block px-5 py-3 text-white text-sm hover:text-gold hover:bg-gold/5 transition-colors duration-200"
              >
                {link.name}
              </a>
              {index < links.length - 1 && (
                <div className="mx-4 h-px bg-gold/10" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
