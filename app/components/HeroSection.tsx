import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-5819acf424d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          DORPLON
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Twój partner w rolnictwie. Oferujemy najwyższej jakości nawozy, środki ochrony roślin oraz materiał siewny.
        </p>
        <Link
          href="#products"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block"
        >
          Sprawdź naszą ofertę
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
