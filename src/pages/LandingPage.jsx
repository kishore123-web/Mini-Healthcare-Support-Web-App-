import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import SupportServices from '../components/SupportServices';
import AboutSection from '../components/AboutSection';
import FormSection from '../components/FormSection';
import Testimonials from '../components/Testimonials';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SupportServices />
      <StatsSection />
      <FormSection />
      <Testimonials />
      <AboutSection />
    </>
  );
}
