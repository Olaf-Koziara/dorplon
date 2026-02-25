"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Facebook, Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className={`p-2 rounded-lg mr-3 transition-colors ${scrolled ? 'bg-green-100 text-green-700' : 'bg-white text-green-700'}`}>
             {/* Logo Icon Placeholder */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.48 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight transition-colors ${scrolled ? 'text-green-800' : 'text-white md:text-white text-green-800'}`}>
            DORPLON
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
          <Link href="#about" className={`font-semibold text-sm uppercase tracking-wider transition-colors hover:text-green-400 ${scrolled ? 'text-gray-700' : 'text-white'}`}>O nas</Link>
          <Link href="#products" className={`font-semibold text-sm uppercase tracking-wider transition-colors hover:text-green-400 ${scrolled ? 'text-gray-700' : 'text-white'}`}>Oferta</Link>
          <Link href="#contact" className={`font-semibold text-sm uppercase tracking-wider transition-colors hover:text-green-400 ${scrolled ? 'text-gray-700' : 'text-white'}`}>Kontakt</Link>
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+48609277058"
            className={`flex items-center font-bold px-4 py-2 rounded-full transition-all hover:scale-105 shadow-sm ${scrolled ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-white text-green-800 hover:bg-green-50'}`}
          >
            <Phone size={16} className="mr-2" />
            <span>+48 609 277 058</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063984976925"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all hover:scale-110 ${scrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200'}`}
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-green-50">
            <span className="text-xl font-bold text-green-800 flex items-center">
              <span className="bg-green-200 p-1 rounded mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf text-green-700"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.48 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </span>
              Menu
            </span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" onClick={() => setIsOpen(false)} className="flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-600 group py-2 border-b border-gray-100">
                O nas
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-green-500" />
              </Link>
              <Link href="#products" onClick={() => setIsOpen(false)} className="flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-600 group py-2 border-b border-gray-100">
                Oferta
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-green-500" />
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-600 group py-2 border-b border-gray-100">
                Kontakt
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-green-500" />
              </Link>
            </nav>

            <div className="mt-8 space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Kontakt</h3>
              <a href="tel:+48609277058" className="flex items-center p-4 bg-green-50 rounded-xl text-green-800 hover:bg-green-100 transition-colors shadow-sm">
                <div className="bg-white p-2 rounded-full mr-4 shadow-sm">
                  <Phone size={20} className="text-green-600" />
                </div>
                <span className="font-bold">+48 609 277 058</span>
              </a>
              <a href="mailto:biuro@dorplon.pl" className="flex items-center p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors shadow-sm">
                <div className="bg-white p-2 rounded-full mr-4 shadow-sm">
                  <Mail size={20} className="text-gray-600" />
                </div>
                <span className="font-medium">biuro@dorplon.pl</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063984976925" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-blue-50 rounded-xl text-blue-700 hover:bg-blue-100 transition-colors shadow-sm">
                <div className="bg-white p-2 rounded-full mr-4 shadow-sm">
                  <Facebook size={20} className="text-blue-600" />
                </div>
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">© 2024 Dorplon. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
