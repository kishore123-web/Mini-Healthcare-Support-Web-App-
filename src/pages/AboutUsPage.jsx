import React from 'react';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';

export default function AboutUsPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface">
      <AboutSection />
      <StatsSection type="about" />
    </div>
  );
}
