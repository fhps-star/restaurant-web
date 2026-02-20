import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, ArrowRight } from 'lucide-react';
import { NAV_LINKS, RESTAURANT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <a href="#" className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold text-brand-gold tracking-wide">
                Royal Spice
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                Restaurant
              </span>
            </a>
            <p className="text-stone-400 mb-8 leading-relaxed text-sm">
              Experience the authentic taste of India. We are dedicated to serving you the best quality food with a royal dining experience.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, href: RESTAURANT_INFO.socials.facebook },
                { icon: <Instagram size={18} />, href: RESTAURANT_INFO.socials.instagram },
                { icon: <Twitter size={18} />, href: RESTAURANT_INFO.socials.twitter }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="bg-white/5 p-3 rounded-full hover:bg-brand-red hover:text-white transition-all duration-300 text-stone-400 border border-white/10 hover:border-brand-red"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-stone-400 hover:text-brand-gold transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
             <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
              Find Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold -mb-2"></span>
            </h4>
            <div className="flex gap-3 text-stone-400 mb-4">
               <MapPin className="shrink-0 mt-1 text-brand-red" size={20} />
               <p className="text-sm leading-relaxed">{RESTAURANT_INFO.address}</p>
            </div>
            <div className="h-40 w-full rounded bg-stone-800 overflow-hidden relative group">
                <img 
                   src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" 
                   alt="Location Map Preview" 
                   className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-xs font-bold uppercase tracking-widest bg-black/80 px-3 py-1 rounded text-white">View Map</span>
                </div>
            </div>
          </div>

          {/* Newsletter / Hours */}
          <div>
             <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
              Working Hours
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold -mb-2"></span>
            </h4>
             <ul className="space-y-4 text-stone-400 text-sm">
               <li className="flex justify-between border-b border-white/5 pb-2">
                 <span>Mon - Fri</span>
                 <span className="text-white">{RESTAURANT_INFO.hours.weekdays.split(' - ')[1]}</span>
               </li>
               <li className="flex justify-between border-b border-white/5 pb-2">
                 <span>Sat - Sun</span>
                 <span className="text-white">{RESTAURANT_INFO.hours.weekends.split(' - ')[1]}</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Royal Spice Restaurant. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};