import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Mail } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { RESTAURANT_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Visit Our Restaurant" 
        />

        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden">
          {/* Info Side */}
          <div className="w-full lg:w-2/5 p-10 md:p-16 bg-brand-dark text-white flex flex-col justify-center relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-gold rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
             
             <div className="relative z-10 space-y-10">
              <div className="flex items-start gap-5">
                <div className="text-brand-gold shrink-0 mt-1">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-brand-gold">Address</h3>
                  <p className="text-stone-300 leading-relaxed">{RESTAURANT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="text-brand-gold shrink-0 mt-1">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-brand-gold">Phone</h3>
                  <p className="text-stone-300">{RESTAURANT_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="text-brand-gold shrink-0 mt-1">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-brand-gold">Email</h3>
                  <p className="text-stone-300">{RESTAURANT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="text-brand-gold shrink-0 mt-1">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-brand-gold">Opening Hours</h3>
                  <p className="text-stone-300">Mon - Sun: {RESTAURANT_INFO.hours.weekdays}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-stone-400 mb-6 text-sm">Have a question or want to book a table? Message us on WhatsApp!</p>
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button variant="gold" fullWidth icon={<MessageSquare size={20} />}>
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-3/5 min-h-[500px] relative bg-stone-200">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839487143494!2d-73.98773128459411!3d40.74844057932766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629783457493!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
                className="absolute inset-0"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};