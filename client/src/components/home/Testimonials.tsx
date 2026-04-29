
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Fatima Hassan",
      role: "Principal, Garissa Islamic Academy",
      content: "Climate Nexus Africa transformed our approach to environmental education. The GIS training opened new possibilities for our students, and we've seen a 40% increase in student engagement in climate-related subjects.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      location: "Garissa"
    },
    {
      name: "James Mwangi",
      role: "Community Leader, Nairobi",
      content: "The tree planting initiative and community training has brought new hope to our region. We're seeing real environmental change, and our youth are now employed in environmental conservation projects.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      location: "Nairobi"
    },
    {
      name: "Dr. Sarah Okonjo",
      role: "Education Officer, Mombasa",
      content: "Their teacher training program is exceptional. Our educators are now equipped with modern digital skills for the 21st century. The GIS integration has made geography and environmental science come alive.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      location: "Mombasa"
    },
    {
      name: "Omar Abdallah",
      role: "Head of Programs, UNDP Kenya",
      content: "Climate Nexus Africa has been a valuable partner in implementing climate resilience programs. Their data-driven approach and community engagement model delivers measurable impact.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      location: "Nairobi"
    },
    {
      name: "Grace Wanjiku",
      role: "Climate Advocate, Kisumu",
      content: "The digital literacy program opened my eyes to new possibilities. Now I can track environmental data and present it to my community effectively. This is the future of climate action in Africa.",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
      rating: 5,
      location: "Kisumu"
    },
    {
      name: "Mohamed Ali",
      role: "County Official, Kilifi",
      content: "The mangrove restoration project has brought life back to our coastline. This partnership with Climate Nexus Africa has created jobs and protected our community from coastal erosion.",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Kilifi"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Say
            <span className="text-emerald-600 block mt-2">About Our Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from partners, educators, and community members about our impact
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-emerald-200" />

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                {/* Image */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-emerald-100 bg-emerald-50 flex items-center justify-center">
                    {imageErrors[currentIndex] ? (
                      <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-2xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(currentIndex)}
                      />
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1">
                    <Quote size={12} className="text-white" />
                  </div>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonials[currentIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-emerald-600'
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors group"
                  >
                    <ChevronLeft size={20} className="text-gray-600 group-hover:text-emerald-600" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-full border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors group"
                  >
                    <ChevronRight size={20} className="text-gray-600 group-hover:text-emerald-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">50+</div>
            <div className="text-sm text-gray-600">Partner Schools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">15+</div>
            <div className="text-sm text-gray-600">Communities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">8</div>
            <div className="text-sm text-gray-600">Counties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">100%</div>
            <div className="text-sm text-gray-600">Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
