import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    title: "Pasze",
    description: "Drobiu, Bydła, Królików i Trzody chlewnej",
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Cows eating feed
  },
  {
    title: "Środki ochrony roślin",
    description: "Skuteczna ochrona upraw przed szkodnikami i chorobami.",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Tractor spraying field
  },
  {
    title: "Flizy",
    description: "Różne rozmiary. Ochrona stogów słomy i siana.",
    image: "https://images.unsplash.com/photo-1518994603110-1912b3272afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Large straw bales stack
  },
  {
    title: "Nawozy dolistne",
    description: "Uzupełnienie niedoborów składników pokarmowych.",
    image: "https://images.unsplash.com/photo-1532509774891-141d37f25ae9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Close up of healthy crops/fertilizing
  },
  {
    title: "Sznurki",
    description: "Wytrzymałe sznurki rolnicze.",
    image: "https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Twine/rope texture
  },
  {
    title: "Folie i siatki",
    description: "Do sianokiszonki. Najwyższa jakość i wytrzymałość.",
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Wrapped round bales
  },
  {
    title: "Materiał siewny",
    description: "Zbóż, Kukurydzy, Rzepaku oraz traw.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Hand holding seeds
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-900 mb-4 tracking-tight">Nasza Oferta</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dostarczamy sprawdzone produkty dla Twojego gospodarstwa.
            Gwarantujemy wysoką jakość i konkurencyjne ceny.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <Link href="#contact" className="inline-flex items-center font-bold text-green-600 hover:text-green-800 transition-colors group/link mt-auto">
                  Zapytaj o produkt
                  <ArrowRight size={18} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-200"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
