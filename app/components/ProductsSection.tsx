import React from 'react';

const products = [
  {
    title: "Pasze",
    description: "Drobiu, Bydła, Królików i Trzody chlewnej",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?fm=jpg&q=60&w=800&auto=format&fit=crop" // Feed/Grain
  },
  {
    title: "Środki ochrony roślin",
    description: "Skuteczna ochrona upraw przed szkodnikami i chorobami.",
    image: "https://plus.unsplash.com/premium_photo-1661808770389-30a3ed35b7fe?fm=jpg&q=60&w=800&auto=format&fit=crop" // Sprayer
  },
  {
    title: "Flizy",
    description: "Różne rozmiary. Ochrona stogów słomy i siana.",
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Farming field
  },
  {
    title: "Nawozy dolistne",
    description: "Uzupełnienie niedoborów składników pokarmowych.",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Fertilizer
  },
  {
    title: "Sznurki",
    description: "Wytrzymałe sznurki rolnicze.",
    image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Rope/Twine (Generic texture)
  },
  {
    title: "Folie i siatki",
    description: "Do sianokiszonki. Najwyższa jakość i wytrzymałość.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Hay bales wrapped
  },
  {
    title: "Materiał siewny",
    description: "Zbóż, Kukurydzy, Rzepaku oraz traw.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Seeds
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Nasza Oferta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-700">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
