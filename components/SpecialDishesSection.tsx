import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { SPECIAL_DISHES, RESTAURANT_INFO } from '../constants';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export const SpecialDishesSection: React.FC = () => {
  const handleOrder = (itemName: string) => {
    const message = `Hi Royal Spice, I would like to order from your specials: ${itemName}`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="special" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Specials" 
          subtitle="Signature Dishes" 
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIAL_DISHES.map((item) => (
            <div 
              key={item.id}
              className="group bg-brand-dark rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-brand-gold text-black font-bold px-3 py-1 rounded shadow-lg text-sm">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h3>
                  <p className="text-stone-400 text-sm">{item.description}</p>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                   <span className="text-brand-red font-bold text-sm uppercase tracking-wider">Chef's Choice</span>
                   <button 
                     onClick={() => handleOrder(item.name)}
                     className="bg-white/10 hover:bg-brand-red text-white p-3 rounded-full transition-all duration-300 transform group-hover:scale-110"
                     aria-label={`Order ${item.name}`}
                   >
                     <ShoppingCart size={20} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};