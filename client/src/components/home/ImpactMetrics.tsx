import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { School, Users, Map, TreePine, BookOpen, Heart, Globe, Target } from 'lucide-react';

const ImpactMetrics: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    { icon: School, value: 45, label: 'Schools Reached', suffix: '+', color: 'from-emerald-400 to-teal-400' },
    { icon: Users, value: 850, label: 'Teachers Trained', suffix: '+', color: 'from-teal-400 to-blue-400' },
    { icon: BookOpen, value: 5200, label: 'Students Impacted', suffix: '+', color: 'from-blue-400 to-indigo-400' },
    { icon: TreePine, value: 10250, label: 'Trees Planted', suffix: '+', color: 'from-emerald-400 to-green-400' },
    { icon: Map, value: 28, label: 'GIS Maps Produced', suffix: '', color: 'from-cyan-400 to-blue-400' },
    { icon: Heart, value: 15, label: 'Communities Reached', suffix: '+', color: 'from-rose-400 to-pink-400' },
    { icon: Globe, value: 8, label: 'Counties in Kenya', suffix: '', color: 'from-purple-400 to-indigo-400' },
    { icon: Target, value: 100, label: 'Partner Organizations', suffix: '+', color: 'from-amber-400 to-orange-400' },
  ];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px),
                           linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-emerald-400 text-xs md:text-sm font-semibold mb-4 border border-emerald-500/30">
            OUR IMPACT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Making a Difference Across
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 block mt-2">
              Kenya & Africa
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Measurable results in climate resilience, education, and community development
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                {/* Icon with gradient */}
                <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${metric.color} p-2 md:p-3 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                {/* Counter */}
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-1 md:mb-2">
                  {inView ? (
                    <CountUp 
                      end={metric.value} 
                      duration={2.5} 
                      suffix={metric.suffix}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                    />
                  ) : (
                    <span className="text-white">0</span>
                  )}
                </div>
                
                {/* Label */}
                <p className="text-center text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {metric.label}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-2 left-2 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-emerald-400/30 group-hover:border-emerald-400/60 transition-colors"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors"></div>
              </div>
            );
          })}
        </div>

        {/* National Impact Statement */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
          <p className="text-lg md:text-xl lg:text-2xl text-center text-white leading-relaxed">
            <span className="text-emerald-400 font-semibold">Climate Nexus Africa</span> has empowered institutions across Kenya by 
            enhancing digital literacy, strengthening climate resilience, and promoting smart 
            education systems that prepare learners for the 21st century.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;