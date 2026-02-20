import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../constants';
import { MenuCategory } from '../types';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

const CATEGORIES: MenuCategory[] = ['Starters', 'Main Course', 'Fast Food', 'Drinks', 'Desserts'];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Starters');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleOrder = (itemName: string) => {
    const message = `Hi, I would like to order: ${itemName}`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-brand-light skew-y-3 transform origin-top-left -z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Discover" 
          subtitle="Our Food Menu" 
        />

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-brand-red border-brand-red text-white shadow-lg'
                  : 'bg-transparent border-stone-200 text-stone-500 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 items-center sm:items-start group border-b border-stone-100 pb-8 hover:border-brand-gold/30 transition-colors"
            >
              <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                 <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-baseline mb-2">
                   <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors">{item.name}</h3>
                   <span className="text-brand-gold font-bold text-lg">${item.price.toFixed(2)}</span>
                </div>
                <div className="w-12 h-0.5 bg-brand-gold/30 mx-auto sm:mx-0 mb-3"></div>
                <p className="text-stone-500 text-sm mb-4 leading-relaxed">{item.description}</p>
                <button 
                  onClick={() => handleOrder(item.name)}
                  className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-brand-gold transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  <ShoppingBag size={14} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
                Book a Table
            </Button>
        </div>
      </div>
    </section>
  );
};