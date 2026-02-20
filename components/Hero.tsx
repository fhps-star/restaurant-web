import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { RESTAURANT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
          alt="Royal Indian Restaurant Interior" 
          className="w-full h-full object-cover opacity-70"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <div className="inline-block mb-4">
             <div className="h-1 w-24 bg-brand-gold mx-auto mb-4"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Delicious Food <br />
            <span className="text-brand-gold">Made Fresh Everyday</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
            Experience the best taste in your city. Authentic Indian flavors prepared with passion and served with royalty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="gold"
              size="lg" 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              icon={<ArrowRight size={20} />}
            >
              View Menu
            </Button>
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                icon={<MessageCircle size={20} />}
              >
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('special')?.scrollIntoView({behavior: 'smooth'})}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-brand-gold/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-brand-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};