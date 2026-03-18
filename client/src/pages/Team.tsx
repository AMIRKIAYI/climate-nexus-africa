import React from 'react';
import TeamHero from '../components/team/TeamHero';
import TeamGrid from '../components/team/TeamGrid';
import TeamValues from  '../components/team/TeamValues';
import TeamCTA from '../components/team/TeamCTA';

const Team: React.FC = () => {
  return (
    <div>
      <TeamHero />
      <TeamGrid />
      <TeamValues />
      <TeamCTA />
    </div>
  );
};

export default Team;