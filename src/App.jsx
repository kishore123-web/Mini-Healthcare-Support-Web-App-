import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import LandingPage from './pages/LandingPage';
import ImpactPage from './pages/ImpactPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
