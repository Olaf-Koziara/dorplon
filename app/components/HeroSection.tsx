import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transform scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.85)"
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="text-green-400">DORPLON</span>
            <span className="block text-3xl md:text-5xl mt-2 text-white font-bold">Twoje Plony, Nasza Pasja</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-light leading-relaxed drop-shadow-md">
            Kompleksowe wsparcie dla Twojego gospodarstwa.
            Oferujemy najwyższej jakości <span className="font-semibold text-green-300">nawozy</span>,
            <span className="font-semibold text-green-300"> środki ochrony roślin</span> oraz
            <span className="font-semibold text-green-300"> materiał siewny</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="#products"
              className="group bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              Sprawdź naszą ofertę
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link
              href="#contact"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
