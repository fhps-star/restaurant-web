import React from 'react';
import { ChefHat, Utensils, Star, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light text-brand-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-auto object-cover"
                />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-4 border-brand-gold z-0 hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="About Royal Spice" 
              subtitle="The Art of Indian Cuisine" 
              centered={false}
            />
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Founded with a passion for authentic flavors, Royal Spice brings the rich heritage of Indian culinary art to your plate. For over 5 years, we have been serving royalty in every bite.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Our master chefs use traditional clay ovens (Tandoors) and secret spice blends to create dishes that are aromatic, flavorful, and truly unforgettable. We use only the freshest locally sourced ingredients.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">5+ Years</h4>
                  <p className="text-sm text-stone-500">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <ChefHat size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Master Chefs</h4>
                  <p className="text-sm text-stone-500">Professional Team</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Utensils size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fresh Food</h4>
                  <p className="text-sm text-stone-500">100% Organic</p>
                </div>
              </div>
               <div className="flex items-center gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Top Rated</h4>
                  <p className="text-sm text-stone-500">5 Star Reviews</p>
                </div>
              </div>
            </div>

            <Button variant="primary">Read Our Story</Button>
          </div>

        </div>
      </div>
    </section>
  );
};