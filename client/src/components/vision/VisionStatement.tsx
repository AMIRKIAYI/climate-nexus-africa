import React from 'react';
import { Eye, Target, ArrowRight } from 'lucide-react';


const VisionStatement: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Vision */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50"></div>
            <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10 rounded-3xl border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                To become <span className="text-emerald-600 font-semibold">Africa's leading climate innovation and digital transformation hub</span> empowering communities, institutions, and future leaders through sustainable solutions and geospatial intelligence.
              </p>
              <div className="border-t border-emerald-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">By 2030, we envision:</h3>
                <ul className="space-y-2">
                  {[
                    "100+ schools transformed into smart learning centers",
                    "50,000 youth trained in climate technology",
                    "1 million trees planted across Kenya",
                    "GIS mapping coverage for 20 counties",
                    "Regional hub for climate innovation in East Africa"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                      <ArrowRight size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Mission */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
            <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 p-8 md:p-10 rounded-3xl border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                To build <span className="text-teal-600 font-semibold">resilient communities across Kenya and Africa</span> by integrating climate action, digital literacy, GIS technology, and youth empowerment into education, research, and community development.
              </p>
              <div className="border-t border-teal-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Our mission in action:</h3>
                <ul className="space-y-2">
                  {[
                    "Integrating climate education into school curricula",
                    "Deploying GIS technology for environmental monitoring",
                    "Training teachers in digital literacy and smart teaching",
                    "Empowering youth through climate leadership programs",
                    "Supporting community-led conservation initiatives"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                      <ArrowRight size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="relative">
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
              "Technology, climate awareness, and education are the three strongest pillars for Africa's transformation."
            </p>
            <p className="text-emerald-600 font-semibold mt-4">— Our Core Motivation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;