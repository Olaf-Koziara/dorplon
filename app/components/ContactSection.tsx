import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Skontaktuj się z nami</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-start">
                <MapPin className="text-green-600 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Adres</h3>
                  <p className="text-gray-600">Judyty 49</p>
                  <p className="text-gray-600">82-440 Dzierzgoń</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-start">
                <Phone className="text-green-600 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefon</h3>
                  <a href="tel:+48609277058" className="text-gray-600 hover:text-green-700 block">+48 609 277 058</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-start">
                <Mail className="text-green-600 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:biuro@dorplon.pl" className="text-gray-600 hover:text-green-700 block">biuro@dorplon.pl</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-start">
                <Clock className="text-green-600 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Godziny otwarcia</h3>
                  <p className="text-gray-600">Poniedziałek - Piątek: 8:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="md:w-1/2 min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Judyty+49+82-440+Dzierzgoń&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              title="Mapa dojazdu"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
