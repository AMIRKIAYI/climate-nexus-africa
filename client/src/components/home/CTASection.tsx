import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Calendar, ArrowRight, Leaf, Map, Users } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900">
        {/* Map Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 0 L30 60 M0 30 L60 30" stroke="%234ade80" stroke-width="0.5"/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons Row */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <Leaf className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <Map className="w-8 h-8 text-teal-400" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Make a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 block mt-2">
              Difference?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in building climate-resilient communities and empowering the next generation 
            of African leaders through technology, education, and environmental action.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 p-[2px] hover:from-emerald-400 hover:to-teal-400 transition-all duration-300"
            >
              <div className="relative flex items-center space-x-2 rounded-lg bg-emerald-950/90 px-8 py-4 text-white transition-all duration-300 group-hover:bg-transparent">
                <Mail size={20} />
                <span className="font-semibold">Partner With Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link
              to="/training"
              className="group flex items-center space-x-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Calendar size={20} />
              <span>Book Training</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center space-x-2 group hover:text-emerald-400 transition-colors">
              <Mail size={16} className="text-emerald-400" />
              <span>info@climatenexusafrica.org</span>
            </div>
            <div className="flex items-center space-x-2 group hover:text-emerald-400 transition-colors">
              <Phone size={16} className="text-emerald-400" />
              <span>+254 746 743 936</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
            <Link to="/team" className="text-gray-400 hover:text-emerald-400 transition-colors">Our Team</Link>
            <Link to="/community" className="text-gray-400 hover:text-emerald-400 transition-colors">Community Impact</Link>
            <Link to="/training" className="text-gray-400 hover:text-emerald-400 transition-colors">Training Programs</Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;