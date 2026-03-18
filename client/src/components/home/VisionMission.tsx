import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 md:p-8 rounded-2xl border border-primary/10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <Eye className="text-primary w-5 h-5 md:w-8 md:h-8" size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Vision</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              To become Africa's leading climate innovation and digital transformation hub 
              empowering communities, institutions, and future leaders through sustainable 
              solutions and geospatial intelligence.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-secondary/5 to-transparent p-6 md:p-8 rounded-2xl border border-secondary/10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <Target className="text-secondary w-5 h-5 md:w-8 md:h-8" size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              To build resilient communities across Kenya and Africa by integrating 
              climate action, digital literacy, GIS technology, and youth empowerment 
              into education, research, and community development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;