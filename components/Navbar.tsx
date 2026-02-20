import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS, RESTAURANT_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center group">
            <span className="text-2xl md:text-3xl font-serif font-bold text-brand-gold tracking-wide">
              Royal Spice
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/80 group-hover:text-brand-gold transition-colors">
              Restaurant
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-white hover:text-brand-gold transition-colors font-medium text-sm uppercase tracking-widest relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-red text-white px-6 py-2 rounded font-bold hover:bg-red-800 transition-colors flex items-center gap-2 text-sm uppercase tracking-wide border border-transparent hover:border-brand-gold"
            >
              <ShoppingBag size={18} />
              Order Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-brand-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center py-8 gap-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-white text-lg font-medium hover:text-brand-gold uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
            className="text-brand-gold font-bold text-lg flex items-center gap-2 uppercase tracking-wide border px-6 py-2 border-brand-gold rounded hover:bg-brand-gold hover:text-black transition-all"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};