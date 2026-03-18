import React from 'react';
import ImpactHero from '../components/impact/ImpactHero';
import ImpactStats from '../components/impact/ImpactStats';
import ImpactMap from '../components/impact/ImpactMap';
import ImpactStories from '../components/impact/ImpactStories';
import ImpactReports from '../components/impact/ImpactReports';
import ImpactTestimonials from '../components/impact/ImpactTestimonials';
import ImpactCTA from '../components/impact/ImpactCTA';

const Impact: React.FC = () => {
  return (
    <div>
      <ImpactHero />
      <ImpactStats />
      <ImpactMap />
      <ImpactStories />
      <ImpactReports />
      <ImpactTestimonials />
      <ImpactCTA />
    </div>
  );
};

export default Impact;