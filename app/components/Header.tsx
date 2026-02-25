"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Facebook, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          DORPLON
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#about" className="text-gray-600 hover:text-green-700 font-medium transition-colors">O nas</Link>
          <Link href="#products" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Oferta</Link>
          <Link href="#contact" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Kontakt</Link>
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+48609277058" className="flex items-center text-gray-600 hover:text-green-700 transition-colors">
            <Phone size={18} className="mr-2" />
            <span className="text-sm font-medium">+48 609 277 058</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063984976925" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <Facebook size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link href="#about" className="block py-2 text-gray-600 hover:text-green-700 font-medium" onClick={() => setIsOpen(false)}>O nas</Link>
            <Link href="#products" className="block py-2 text-gray-600 hover:text-green-700 font-medium" onClick={() => setIsOpen(false)}>Oferta</Link>
            <Link href="#contact" className="block py-2 text-gray-600 hover:text-green-700 font-medium" onClick={() => setIsOpen(false)}>Kontakt</Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
               <a href="tel:+48609277058" className="flex items-center text-gray-600 hover:text-green-700">
                <Phone size={18} className="mr-3" />
                <span>+48 609 277 058</span>
              </a>
               <a href="mailto:biuro@dorplon.pl" className="flex items-center text-gray-600 hover:text-green-700">
                <Mail size={18} className="mr-3" />
                <span>biuro@dorplon.pl</span>
              </a>
               <a href="https://www.facebook.com/profile.php?id=100063984976925" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                <Facebook size={18} className="mr-3" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
