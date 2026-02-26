const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

            <img
              src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Traktor na polu - nowoczesne rolnictwo"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px] relative z-10 transform transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 md:p-8 rounded-full shadow-2xl z-20 hidden lg:flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 border-4 border-white animate-bounce-slow">
              <span className="block text-3xl md:text-4xl font-extrabold leading-none">
                10+
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center mt-1">
                Lat
                <br />
                doświadczenia
              </span>
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest flex items-center">
                <span className="w-8 h-0.5 bg-green-600 mr-2"></span>O nas
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Twoje gospodarstwo w{" "}
                <span className="text-green-600 relative inline-block">
                  dobrych rękach
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
              </h3>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed">
                Firma <span className="font-bold text-gray-900">Dorplon</span>{" "}
                to dynamicznie rozwijające się przedsiębiorstwo z siedzibą w
                Dzierzgoniu. Od lat z pasją wspieramy polskie rolnictwo,
                dostarczając innowacyjne rozwiązania dla nowoczesnych
                gospodarstw.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
              <p className="text-gray-800 font-medium italic relative pl-6">
                <span className="absolute top-0 left-0 text-4xl text-green-300 leading-none">
                  "
                </span>
                Nasza misja to dostarczanie najwyższej jakości produktów, które
                realnie wpływają na wzrost plonów i rentowność gospodarstw
                naszych klientów.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Gwarancja Jakości
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Tylko sprawdzeni dostawcy.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Fachowe Doradztwo
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Ekspercka wiedza i wsparcie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
