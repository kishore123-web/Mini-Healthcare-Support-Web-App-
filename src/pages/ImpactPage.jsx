import React from 'react';
import StatsSection from '../components/StatsSection';
import SupportServices from '../components/SupportServices';
import FeaturesSection from '../components/FeaturesSection';

export default function ImpactPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface-container-lowest">
      <div className="py-12 text-center bg-white border-b border-outline-variant/10">
        <h1 className="text-4xl md:text-6xl font-black font-headline text-on-secondary-container mb-4 tracking-tighter">Our Deep Impact</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">See how our AI-driven approach is actively saving lives and streamlining patient-volunteer connectivity.</p>
      </div>
      <SupportServices />
      <StatsSection type="impact" />
      <FeaturesSection />
    </div>
  );
}
