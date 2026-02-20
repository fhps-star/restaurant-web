import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What Our Customers Say" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-10 rounded-xl shadow-xl relative border-t-4 border-brand-gold group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 right-8 bg-brand-dark text-brand-gold p-3 rounded-full shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    className={i < testimonial.rating ? "" : "text-stone-300"}
                  />
                ))}
              </div>

              <p className="text-stone-600 italic leading-relaxed mb-8 text-lg font-light">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-gold ring-offset-2"
                />
                <div>
                  <h4 className="font-bold text-brand-dark font-serif text-lg">{testimonial.name}</h4>
                  <p className="text-xs text-brand-red font-bold uppercase tracking-wider">Verified Diner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};