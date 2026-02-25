import React from 'react';
import Link from 'next/link';
import { Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-extrabold text-white tracking-tight flex items-center">
              DORPLON
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Profesjonalny partner w Twoim gospodarstwie. Oferujemy najwyższej jakości środki do produkcji rolnej oraz fachowe doradztwo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063984976925"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="hover:text-green-500 transition-colors flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-green-500 transition-colors flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Nasza oferta
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-green-500 transition-colors flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Offer */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Oferta</h4>
            <ul className="space-y-3">
              <li className="hover:text-green-500 transition-colors cursor-default">Pasze</li>
              <li className="hover:text-green-500 transition-colors cursor-default">Nawozy</li>
              <li className="hover:text-green-500 transition-colors cursor-default">Środki ochrony roślin</li>
              <li className="hover:text-green-500 transition-colors cursor-default">Materiał siewny</li>
              <li className="hover:text-green-500 transition-colors cursor-default">Folie i sznurki</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Judyty 49<br/>82-440 Dzierzgoń</span>
              </li>
              <li>
                <a href="tel:+48609277058" className="flex items-center hover:text-green-500 transition-colors">
                  <Phone className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  +48 609 277 058
                </a>
              </li>
              <li>
                <a href="mailto:biuro@dorplon.pl" className="flex items-center hover:text-green-500 transition-colors">
                  <Mail className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  biuro@dorplon.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dorplon. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer">Polityka prywatności</span>
            <span className="hover:text-gray-300 cursor-pointer">Regulamin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
