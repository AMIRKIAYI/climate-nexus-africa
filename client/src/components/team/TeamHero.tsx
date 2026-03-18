import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const TeamHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users size={16} />
            <span>OUR LEADERSHIP TEAM</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet the Minds Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 block mt-2">
              Climate Nexus Africa
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A dedicated team of experts committed to driving climate innovation, 
            digital transformation, and sustainable development across Kenya and Africa.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Award className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Users className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">9</div>
              <div className="text-xs text-gray-600">Team Members</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Globe className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-xs text-gray-600">Counties</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Heart className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-xs text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;