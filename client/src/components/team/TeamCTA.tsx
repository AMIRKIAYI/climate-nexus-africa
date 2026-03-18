import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Briefcase, ArrowRight } from 'lucide-react';

const TeamCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Be part of the team driving climate innovation and digital transformation across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center space-x-2 bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
            >
              <Mail size={18} />
              <span>Contact Our Team</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/careers"
              className="group inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Briefcase size={18} />
              <span>View Open Positions</span>
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            * We're always looking for passionate individuals to join our growing team
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;