import React from 'react';
import { Leaf, Map, Laptop, Users, TreePine, BookOpen, BarChart3 } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const services = [
    { icon: <Leaf className="text-primary" size={24} />, title: "Climate Resilience", description: "Comprehensive sustainability programs and environmental restoration initiatives" },
    { icon: <Map className="text-primary" size={24} />, title: "GIS Mapping", description: "Advanced geospatial data solutions for informed decision-making" },
    { icon: <Laptop className="text-primary" size={24} />, title: "Digital Literacy", description: "Training programs for schools and institutions across Kenya" },
    { icon: <Users className="text-primary" size={24} />, title: "Youth Empowerment", description: "Capacity building programs for teachers and young leaders" },
    { icon: <TreePine className="text-primary" size={24} />, title: "Environmental Restoration", description: "Community outreach and ecosystem rehabilitation projects" },
    { icon: <BookOpen className="text-primary" size={24} />, title: "Research & Policy", description: "Data-driven insights for climate policy development" },
    { icon: <BarChart3 className="text-primary" size={24} />, title: "Impact Assessment", description: "Comprehensive M&E frameworks for sustainable development" }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Integrating climate action, technology, and education for sustainable development across Africa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-600">7+</div>
            <div className="text-xs md:text-sm text-gray-600">Core Programs</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-600">15+</div>
            <div className="text-xs md:text-sm text-gray-600">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-600">8</div>
            <div className="text-xs md:text-sm text-gray-600">Kenyan Counties</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-600">100%</div>
            <div className="text-xs md:text-sm text-gray-600">Community Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;