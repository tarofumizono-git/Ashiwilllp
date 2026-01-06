import React from 'react';

export const SocialProof = () => {
  const logos = ["SHARE", "SARAYA", "Re-birth", "qualia"];

  return (
    <section className="py-12 border-y border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by Leading Medical Fitness Centers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <span 
              key={index} 
              className="text-xl md:text-2xl font-bold text-white tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
