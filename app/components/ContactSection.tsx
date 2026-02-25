import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-green-50/50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-green-900 tracking-tight">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Masz pytania dotyczące naszej oferty? Jesteśmy do Twojej dyspozycji.
            Zadzwoń, napisz lub odwiedź nas osobiście.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Contact Info Cards */}
          <div className="lg:w-5/12 space-y-6">

            {/* Address Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="p-4 bg-green-50 rounded-xl mr-6 group-hover:bg-green-100 transition-colors">
                  <MapPin className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Adres</h3>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">Judyty 49</p>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">82-440 Dzierzgoń</p>
                  <a
                    href="https://maps.google.com/?q=Judyty+49+82-440+Dzierzgoń"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-green-600 font-semibold hover:text-green-800 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Pokaż na mapie
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="p-4 bg-green-50 rounded-xl mr-6 group-hover:bg-green-100 transition-colors">
                  <Phone className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Telefon</h3>
                  <p className="text-gray-600 mb-2 text-sm">Zadzwoń do nas:</p>
                  <a href="tel:+48609277058" className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors block tracking-tight">
                    +48 609 277 058
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="p-4 bg-green-50 rounded-xl mr-6 group-hover:bg-green-100 transition-colors">
                  <Mail className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-600 mb-2 text-sm">Napisz do nas:</p>
                  <a href="mailto:biuro@dorplon.pl" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors break-all">
                    biuro@dorplon.pl
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="p-4 bg-green-50 rounded-xl mr-6 group-hover:bg-green-100 transition-colors">
                  <Clock className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Godziny otwarcia</h3>
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between w-full max-w-[200px]">
                      <span className="text-gray-600 font-medium">Pon - Pt:</span>
                      <span className="text-gray-900 font-bold">8:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between w-full max-w-[200px]">
                      <span className="text-gray-600 font-medium">Sob - Nd:</span>
                      <span className="text-gray-900 font-bold">Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-7/12 h-[500px] lg:h-auto bg-white p-2 rounded-3xl shadow-lg border border-gray-200">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
               {/* Map Overlay Loading State or Custom Style can go here */}
              <iframe
                src="https://maps.google.com/maps?q=Judyty+49+82-440+Dzierzgoń&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                title="Mapa dojazdu do firmy Dorplon"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
