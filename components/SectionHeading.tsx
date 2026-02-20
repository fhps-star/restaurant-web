import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <span className={`uppercase tracking-[0.2em] text-sm font-bold ${light ? 'text-brand-gold' : 'text-brand-red'} mb-3 block`}>
        {title}
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl font-bold ${light ? 'text-white' : 'text-brand-dark'} mb-6`}>
        {subtitle}
      </h2>
      <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-12 bg-brand-gold" />
        <div className="h-2 w-2 bg-brand-gold rotate-45" />
        <div className="h-[2px] w-12 bg-brand-gold" />
      </div>
    </div>
  );
};