import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialDishesSection } from './components/SpecialDishesSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <SpecialDishesSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;