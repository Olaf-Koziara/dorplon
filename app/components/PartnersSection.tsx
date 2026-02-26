import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Kersia', logo: '/assets/partners/kersia_logo.svg' },
  { name: 'UPL', logo: '/assets/partners/uplag.png' },
  { name: 'Sumi Agro', logo: '/assets/partners/sumiagro.png' },
  { name: 'Biofeed', logo: '/assets/partners/biofeed.png' },
  { name: 'Wipasz', logo: '/assets/partners/wipasz.png' },
  { name: 'NaturalCrop', logo: '/assets/partners/naturalcrop.png' },
  { name: 'Gemetica', logo: '/assets/partners/gemetica.png' },
  { name: 'Ekoplon', logo: '/assets/partners/ekoplon.png' },
  { name: 'Ekodarpol', logo: '/assets/partners/ekodarpol.png' },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden" id="partners">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Zaufali nam
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Współpracujemy z najlepszymi producentami w branży rolniczej.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradient overlays to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-scroll-left hover:pause">
          {/* First set of logos */}
          <div className="flex items-center gap-12 mx-6">
            {partners.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="flex items-center justify-center w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 transform hover:scale-105"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for infinite scroll */}
          <div className="flex items-center gap-12 mx-6">
            {partners.map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="flex items-center justify-center w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 transform hover:scale-105"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
