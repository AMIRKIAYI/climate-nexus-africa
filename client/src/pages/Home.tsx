import React from 'react';
import Hero from '../components/home/Hero';
import VisionMission from '../components/home/VisionMission';
import WhatWeDo from '../components/home/WhatWeDo';
import ImpactMetrics from '../components/home/ImpactMetrics';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <VisionMission />
      <WhatWeDo />
      <ImpactMetrics />
      <FeaturedProjects />
      <Testimonials />
      <Partners />
      <CTASection />
    </div>
  );
};

export default Home;