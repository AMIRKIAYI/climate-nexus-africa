import React from 'react';
import { Eye, Target, Compass } from 'lucide-react';

const VisionHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Compass size={16} className="text-emerald-400" />
            <span>OUR VISION & MISSION</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Guiding Africa's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 block mt-2">
              Climate Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            A clear roadmap for transforming communities through innovation, 
            education, and sustainable development across Kenya and Africa.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Eye className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">2030</div>
              <div className="text-xs text-gray-400">Vision Target</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Target className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-xs text-gray-400">Mission Pillars</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Compass className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs text-gray-400">SDG Alignments</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Compass className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs text-gray-400">Strategic Goals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionHero;