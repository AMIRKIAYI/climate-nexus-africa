import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ImpactTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Hon. Amina Mohamed",
      role: "County Executive, Education - Garissa",
      content: "Climate Nexus Africa has revolutionized how we approach environmental education in our county. The GIS training has opened new career paths for our youth.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Garissa County"
    },
    {
      name: "Prof. David Ngugi",
      role: "Dean, School of Education - University of Nairobi",
      content: "Their teacher training program is exemplary. We've seen marked improvement in digital literacy and teaching methodologies across our partner schools.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Nairobi"
    },
    {
      name: "Sarah Johnson",
      role: "Program Officer, UNDP Kenya",
      content: "The data-driven approach and community engagement model of Climate Nexus Africa delivers measurable impact. They're a valued partner in our climate resilience programs.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "UNDP Kenya"
    },
    {
      name: "James Mwangi",
      role: "Community Elder, Kilifi",
      content: "The mangrove restoration project has brought new life to our coastline. Our youth now have jobs protecting the environment instead of destroying it.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Kilifi County"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
              VOICES OF IMPACT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Partners Say
            </h2>
          </div>

          <div className="relative">
            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-emerald-200" />

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-white"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                  <div className="flex space-x-1 mt-2 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-emerald-600'
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full bg-white shadow-md hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-full bg-white shadow-md hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-60">
            <img src="https://placehold.co/120x40/0f766e/white?text=UNDP" alt="UNDP" className="h-8" />
            <img src="https://placehold.co/120x40/0f766e/white?text=UNEP" alt="UNEP" className="h-8" />
            <img src="https://placehold.co/120x40/0f766e/white?text=World+Bank" alt="World Bank" className="h-8" />
            <img src="https://placehold.co/120x40/0f766e/white?text=Ministry+of+Education" alt="Ministry of Education" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTestimonials;