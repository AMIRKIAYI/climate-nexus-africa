import React from 'react';
import { 
  Heart, Shield, Users, Leaf, 
  Zap, Globe, Award, Sparkles 
} from 'lucide-react';

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Impact",
      description: "We are driven by a deep commitment to creating positive change in communities."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and accountability in all we do."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Every initiative is designed with and for the people we serve."
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "We protect and restore our planet for future generations."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace technology and creative solutions to solve complex challenges."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "We ensure equal opportunities for all, regardless of gender or background."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do."
    },
    {
      icon: Sparkles,
      title: "Youth Empowerment",
      description: "We invest in the next generation of African leaders."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-white text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4 shadow-sm">
            CORE VALUES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our decisions and actions every day
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;