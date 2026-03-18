import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Map, Satellite, Wind, Droplets, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '15+', label: 'Communities', icon: Map },
    { value: '5,200+', label: 'Students', icon: Wind },
    { value: '850+', label: 'Teachers Trained', icon: Satellite },
    { value: '10,250+', label: 'Trees Planted', icon: Leaf },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Video Background with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/africa-mapping.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900"></div>
        </video>

        {/* Loading State */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Multi-layered Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-teal-900/70 to-blue-950/80"></div>
        
        {/* Animated Grid Pattern (tech feel) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px),
                             linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs (climate/tech elements) */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content - REDUCED top padding to move content up */}
      <div className="container-custom relative z-10 text-white pt-2 md:pt-1 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-emerald-400/30 px-3 py-1.5 rounded-full">
              <Leaf className="text-emerald-400" size={14} />
              <span className="text-xs font-medium tracking-wide">CLIMATE INNOVATION • GIS TECHNOLOGY • DIGITAL LITERACY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                Empowering
              </span>
              <br />
              <span className="relative">
                Africa's Climate Future
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path d="M0 0L300 8" stroke="url(#gradient)" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="50%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed">
              Integrating <span className="text-emerald-400 font-semibold">climate action</span>,{' '}
              <span className="text-teal-400 font-semibold">GIS technology</span>, and{' '}
              <span className="text-blue-400 font-semibold">digital literacy</span> to build 
              resilient communities across Kenya and Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 p-[2px] hover:from-emerald-400 hover:to-teal-400 transition-all duration-300"
              >
                <div className="relative flex items-center space-x-2 rounded-lg bg-emerald-950/90 px-5 py-2.5 transition-all duration-300 group-hover:bg-transparent">
                  <span className="text-sm font-semibold">Partner With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/community"
                className="group flex items-center space-x-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-md px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Map className="w-3.5 h-3.5" />
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Rotating Stats Card */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 max-w-sm">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg">
                  {React.createElement(stats[currentStat].icon, { 
                    className: "w-4 h-4 text-emerald-400" 
                  })}
                </div>
                <div>
                  <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                    {stats[currentStat].value}
                  </div>
                  <div className="text-xs text-gray-300">{stats[currentStat].label}</div>
                </div>
              </div>
              
              {/* Progress Dots */}
              <div className="flex space-x-1.5 mt-2">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentStat === index 
                        ? 'w-6 bg-gradient-to-r from-emerald-400 to-blue-400' 
                        : 'w-3 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - GIS/Mapping Visualization */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 animate-pulse"></div>
              
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-3 rounded-full border border-teal-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-6 rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]"></div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Satellite className="w-12 h-12 text-emerald-400" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Floating Data Points */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animation: `pulse 2s ${i * 0.5}s infinite`
                    }}
                  />
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-45deg)' }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="70"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {/* Stats Cards */}
            <div className="absolute -top-3 -right-3 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Droplets className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Carbon Offset</div>
                  <div className="text-xs font-bold text-emerald-400">2,450t</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Wind className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">GIS Maps</div>
                  <div className="text-xs font-bold text-blue-400">28+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-0.5">
          <span className="text-[10px] text-gray-400 tracking-wider">SCROLL</span>
          <ChevronDown className="w-3 h-3 text-gray-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;