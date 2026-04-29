import React from 'react';
import { Users, Camera } from 'lucide-react';

const TeamHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users size={16} />
            <span>OUR TEAM</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet the Team Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 block mt-2">
              Climate Nexus Africa
            </span>
          </h1>
        </div>

        {/* Group Photo - 80% width from edges */}
        <div className="w-[80%] mx-auto mt-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/team/group.png" 
              alt="Climate Nexus Africa Team Group Photo"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1200x600/0f766e/white?text=Climate+Nexus+Africa+Team+Photo";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Camera size={20} className="text-emerald-300" />
                <span className="text-sm uppercase tracking-wider">Our Team</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Climate Nexus Africa</h3>
              <p className="text-sm md:text-base text-gray-200">Dedicated to climate innovation and digital transformation across Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;