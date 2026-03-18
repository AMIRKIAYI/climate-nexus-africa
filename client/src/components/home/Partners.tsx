import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Ministry of Education, Kenya", logo: "https://placehold.co/200x80/0f766e/white?text=Ministry+of+Education" },
    { name: "UNDP Kenya", logo: "https://placehold.co/200x80/0f766e/white?text=UNDP" },
    { name: "World Bank", logo: "https://placehold.co/200x80/0f766e/white?text=World+Bank" },
    { name: "KICD", logo: "https://placehold.co/200x80/0f766e/white?text=KICD" },
    { name: "UNEP", logo: "https://placehold.co/200x80/0f766e/white?text=UNEP" },
    { name: "NACONE", logo: "https://placehold.co/200x80/0f766e/white?text=NACONE" },
    { name: "County Government of Garissa", logo: "https://placehold.co/200x80/0f766e/white?text=Garissa+County" },
    { name: "Mombasa County", logo: "https://placehold.co/200x80/0f766e/white?text=Mombasa+County" },
  ];

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            OUR PARTNERS
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted by Leading Organizations
          </h3>
          <p className="text-gray-600">
            Collaborating with government, NGOs, and international bodies
          </p>
        </div>

        {/* Scrolling Partners Banner */}
        <div className="relative overflow-hidden group">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex animate-scroll space-x-12 items-center group-hover:[animation-play-state:paused]">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                  title={partner.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos Grid for Mobile */}
        <div className="grid grid-cols-2 md:hidden gap-4 mt-8">
          {partners.slice(0, 4).map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Partner Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">20+</div>
            <div className="text-sm text-gray-600">Active Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">8</div>
            <div className="text-sm text-gray-600">Government Agencies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">12+</div>
            <div className="text-sm text-gray-600">NGO Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">5</div>
            <div className="text-sm text-gray-600">International</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;