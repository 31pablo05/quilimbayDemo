import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Destinos', href: '/#destinos' },
    { name: 'Experiencias', href: '/#experiencias' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>
      
      {/* Menu */}
      <div className="absolute right-0 top-0 h-full w-64 bg-navy-light border-l border-gold/20">
        <div className="flex flex-col p-6">
          <button
            onClick={onClose}
            className="self-end text-white text-2xl mb-8"
          >
            ×
          </button>
          
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-white text-lg py-2 border-b border-gold/20 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://wa.me/5492804581234"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gold text-navy py-3 px-6 rounded-md font-semibold text-center hover:bg-gold-dark transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
