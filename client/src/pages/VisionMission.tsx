import React from 'react';
import VisionHero from '../components/vision/VisionHero';
import VisionStatement from '../components/vision/VisionStatement';
import MissionPillars from '../components/vision/MissionPillars';
import StrategicGoals from '../components/vision/StrategicGoals';
import CoreValues from '../components/vision/CoreValues';
import Timeline from '../components/vision/Timeline';

const VisionMission: React.FC = () => {
  return (
    <div>
      <VisionHero />
      <VisionStatement />
      <MissionPillars />
      <StrategicGoals />
      <CoreValues />
      <Timeline />
    </div>
  );
};

export default VisionMission;