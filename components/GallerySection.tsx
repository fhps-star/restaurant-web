import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ZoomIn } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", // Interior
  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80", // Food
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80", // Chef
  "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=600&q=80", // Table
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80", // Biryani
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80", // Drink
];

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Gallery" 
          subtitle="Moments of Joy" 
          light
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden h-72 rounded cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-red/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                    <ZoomIn className="text-white mx-auto mb-2" size={32} />
                    <p className="font-serif font-bold text-xl text-white">Royal Spice</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};