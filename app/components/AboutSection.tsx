import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1657639844448-d93452bb5f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8YWdyaWN1bHR1cmUlMjBmYXJtfGVufDB8fHx8MTc3MjA0MzE1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="O firmie Dorplon"
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-4 border-green-600 inline-block pb-2">O firmie Dorplon</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Firma Dorplon to dynamicznie rozwijające się przedsiębiorstwo z siedzibą w Dzierzgoniu, które od lat wspiera polskie rolnictwo. Specjalizujemy się w dostarczaniu kompleksowych rozwiązań dla gospodarstw rolnych, oferując szeroki asortyment produktów niezbędnych do efektywnej produkcji roślinnej i zwierzęcej.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Nasza oferta obejmuje wysokiej jakości pasze, nawozy, środki ochrony roślin oraz materiał siewny. Dzięki współpracy z renomowanymi producentami gwarantujemy skuteczność i bezpieczeństwo oferowanych produktów.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Zapraszamy do współpracy wszystkich rolników poszukujących sprawdzonych rozwiązań i fachowego doradztwa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
