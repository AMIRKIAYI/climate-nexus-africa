import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  School, Users, Map, TreePine, BookOpen, Heart, 
  Globe, Target, Award, Battery, Droplets, Wind,
  GraduationCap, Briefcase, Home, Leaf
} from 'lucide-react';

const ImpactStats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: School, value: 45, label: 'Schools Reached', suffix: '+', color: 'from-emerald-500 to-teal-500' },
    { icon: Users, value: 850, label: 'Teachers Trained', suffix: '+', color: 'from-teal-500 to-blue-500' },
    { icon: GraduationCap, value: 5200, label: 'Students Impacted', suffix: '+', color: 'from-blue-500 to-indigo-500' },
    { icon: TreePine, value: 10250, label: 'Trees Planted', suffix: '+', color: 'from-emerald-500 to-green-500' },
    { icon: Map, value: 28, label: 'GIS Maps Produced', suffix: '', color: 'from-cyan-500 to-blue-500' },
    { icon: Heart, value: 15, label: 'Communities Reached', suffix: '+', color: 'from-rose-500 to-pink-500' },
    { icon: Globe, value: 8, label: 'Counties in Kenya', suffix: '', color: 'from-purple-500 to-indigo-500' },
    { icon: Target, value: 25, label: 'Partner Organizations', suffix: '+', color: 'from-amber-500 to-orange-500' },
    { icon: Award, value: 12, label: 'Awards Received', suffix: '', color: 'from-yellow-500 to-amber-500' },
    { icon: Battery, value: 350, label: 'Solar Units Installed', suffix: '+', color: 'from-green-500 to-emerald-500' },
    { icon: Droplets, value: 25, label: 'Water Points', suffix: '', color: 'from-blue-500 to-cyan-500' },
    { icon: Wind, value: 40, label: 'Clean Energy Projects', suffix: '', color: 'from-teal-500 to-green-500' },
    { icon: Briefcase, value: 120, label: 'Green Jobs Created', suffix: '+', color: 'from-indigo-500 to-purple-500' },
    { icon: Home, value: 8, label: 'Regional Offices', suffix: '', color: 'from-red-500 to-rose-500' },
    { icon: BookOpen, value: 15, label: 'Research Papers', suffix: '', color: 'from-orange-500 to-amber-500' },
    { icon: Leaf, value: 95, label: 'Biodiversity Score', suffix: '%', color: 'from-lime-500 to-green-500' }
  ];

  return (
    <section className="py-16 md:py-20 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            KEY METRICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in
            <span className="text-emerald-600 block mt-2">Numbers</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Quantifiable results across education, environment, and community development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.color} p-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {inView ? (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <p className="text-[10px] md:text-xs text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Annual Growth */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Year-over-Year Growth</h3>
            <div className="text-3xl font-bold text-emerald-600 mb-1">+45%</div>
            <p className="text-sm text-gray-600">Increase in schools reached (2023-2024)</p>
          </div>
          <div className="bg-teal-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Community Engagement</h3>
            <div className="text-3xl font-bold text-teal-600 mb-1">+60%</div>
            <p className="text-sm text-gray-600">Growth in volunteer participation</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Environmental Impact</h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">12.5k</div>
            <p className="text-sm text-gray-600">Tons of CO2 offset through projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;