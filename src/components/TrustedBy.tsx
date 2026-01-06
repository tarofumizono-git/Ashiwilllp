import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import shareLogo from 'figma:asset/949dafffd0f05b9ed9816932d031b17eaa65b5db.png';
import rebirthLogo from 'figma:asset/0ac8f10341bcf22eed2311e54c244a5fd8e726c5.png';
import vitalezzaLogo from 'figma:asset/5c7951dd8ef5ec337271371a9e778da716d56055.png';

export const TrustedBy = () => {
  const companies = [
    { name: 'SHARE', logo: shareLogo, width: 600 },
    { name: 'Re-Birth', logo: rebirthLogo, width: 375 },
    { name: 'VITALEZZA LABO', logo: vitalezzaLogo, width: 500 },
  ];

  return (
    <section className="py-20 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        <p className="text-xl font-bold tracking-widest text-white uppercase whitespace-nowrap shrink-0">
          導入実績
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32">
          {companies.map((company, index) => (
             <div key={index} className="relative h-32 md:h-40 w-auto flex items-center justify-center hover:opacity-80 transition-opacity">
                <ImageWithFallback 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-full w-auto object-contain"
                  style={{ maxWidth: company.width }}
                />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
