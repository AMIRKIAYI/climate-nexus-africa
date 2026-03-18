import React from 'react';
import { Heart, Shield, Users, Target, Globe, Zap } from 'lucide-react';

const TeamValues: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Climate Action",
      description: "We are deeply committed to protecting Africa's environment and building climate-resilient communities."
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description: "We operate with honesty and accountability in all our partnerships and programs."
    },
    {
      icon: Users,
      title: "Community-Centered",
      description: "Every initiative is designed with and for the communities we serve."
    },
    {
      icon: Target,
      title: "Excellence in Execution",
      description: "We strive for the highest standards in research, training, and project implementation."
    },
    {
      icon: Globe,
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge GIS and digital tools for maximum impact."
    },
    {
      icon: Zap,
      title: "Youth Empowerment",
      description: "Investing in the next generation of African climate leaders."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            OUR VALUES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Drives Our
            <span className="text-emerald-600 block mt-2">Team Forward</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamValues;