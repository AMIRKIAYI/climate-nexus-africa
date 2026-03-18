import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, Share2, ArrowRight } from 'lucide-react';

const ImpactCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Help Us Scale Our Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join us in reaching more communities, training more teachers, and planting more trees across Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center space-x-2 bg-white text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
            >
              <Mail size={18} />
              <span>Partner With Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              <Download size={18} />
              <span>Download Impact Deck</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>Share our impact:</span>
            <button className="hover:text-white transition-colors">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCTA;