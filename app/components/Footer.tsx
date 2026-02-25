import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Dorplon. Wszelkie prawa zastrzeżone.</p>
        <div className="text-gray-400 text-sm">
          <p>Judyty 49, 82-440 Dzierzgoń</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
