import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFormsClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById('forms')?.scrollIntoView({behavior: 'smooth'}), 100);
    } else {
      document.getElementById('forms')?.scrollIntoView({behavior: 'smooth'});
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-2xl shadow-sm border-b border-primary/10 transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1600px] mx-auto px-6 md:px-16 py-4">
        <div 
          onClick={handleLogoClick}
          className="text-2xl font-black tracking-tighter text-primary font-headline cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>health_and_safety</span>
          Jarurat Care
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/impact" className="font-headline text-sm font-bold tracking-tight text-on-surface hover:text-primary transition-colors cursor-pointer">Impact</Link>
          <button onClick={handleFormsClick} className="font-headline text-sm font-bold tracking-tight text-on-surface hover:text-primary transition-colors cursor-pointer">Volunteers</button>
          <Link to="/about" className="font-headline text-sm font-bold tracking-tight text-on-surface hover:text-primary transition-colors cursor-pointer">About Us</Link>
          <button onClick={handleFormsClick} className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 hover:scale-105">
            Donate Now
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary cursor-pointer p-2 hover:bg-surface-container-low rounded-xl transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-primary/10 shadow-2xl animate-fade-in-up origin-top">
          <div className="flex flex-col p-6 space-y-2">
            <Link 
              to="/impact"
              onClick={() => setIsMenuOpen(false)}
              className="text-left font-headline text-xl font-bold text-on-surface hover:bg-primary/5 p-4 rounded-xl transition-colors block"
            >
              Impact
            </Link>
            <button 
              onClick={handleFormsClick} 
              className="text-left font-headline text-xl font-bold text-on-surface hover:bg-primary/5 p-4 rounded-xl transition-colors"
            >
              Volunteers
            </button>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-left font-headline text-xl font-bold text-on-surface hover:bg-primary/5 p-4 rounded-xl transition-colors block"
            >
              About Us
            </Link>
            <div className="pt-4 mt-2 border-t border-outline-variant/30">
              <button 
                 onClick={handleFormsClick} 
                 className="bg-primary text-white w-full py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-transform"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
