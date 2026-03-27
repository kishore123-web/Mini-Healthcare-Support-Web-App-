import React from 'react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('forms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-[85vh] flex items-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover grayscale-[10%] brightness-[0.7]" 
          alt="Healthcare support" 
          src="/herosection.jpeg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 w-full pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-2 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-bold mx-auto lg:mx-0 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-primary care-glow animate-pulse"></span>
              Live in 42 Cities Across India
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-headline leading-[1.05] text-white tracking-tighter">
              Healthcare <br/>Support, <br/><span className="text-primary">Delivered <br className="hidden lg:block"/>Instantly</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed font-body mx-auto lg:mx-0 font-medium">
              Connecting patients, volunteers, and resources with AI-driven efficiency. We turn critical medical needs into organized community actions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                Request Help
                <span className="material-symbols-outlined font-bold">emergency_share</span>
              </button>
              <button 
                onClick={scrollToForm}
                className="bg-white/10 backdrop-blur-3xl text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 border border-white/30 cursor-pointer shadow-xl backdrop-saturate-150"
              >
                Become a Volunteer
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:grid grid-cols-1 gap-8 justify-items-end">
            <div className="bg-white/95 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl shadow-black/20 transform hover:-translate-y-2 transition-all duration-500 border border-white/20 w-80">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              </div>
              <h3 className="text-on-surface font-black text-2xl font-headline tracking-tight mb-2">99.8% Success</h3>
              <p className="text-on-surface-variant text-sm font-bold font-body leading-tight">Emergency match rate in Q1 2026</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl shadow-black/20 transform hover:-translate-y-2 transition-all duration-500 delay-100 border border-white/20 w-80 mr-12">
              <div className="flex -space-x-4 mb-6">
                <img className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md" alt="Doctor 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHO7AHhegkUcln3BeOg5bMSufYpU59tAKXbjiB-txV6WdmRz7Rb0lbcF3EeELjizY1gA1EjslW_GynrkPJ7cxI4k-3Ers-ETdTG9gUW4OQOZQ8zMMSOMlIAldhMkLIiOjj66ap8XIJmHAq4mjhqLWiCQq0Cd5mU3hcQwSqdKaH1ZzR4ZkqXJ4qXxVQk2EW2uhEYPtaIpcfXHoOl0fO-NfLlZkConPCrNC4vIWZb2dvGJer43FLWCmP09GXqFMrM8EiULGV3HwFTeM"/>
                <img className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md" alt="Nurse 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZW8EjmjA-HT-Q9fmXNTMwbtI9jr7G_zef5uTioIhnDfNMBXHLABoU63P6Al52QOC2ijfzNsZ990HvYllryPC8-ZG-o4ctsuuf9I4WU79hxJ3RP8eYOZxqUeuM9tLo-L40fgKIgfIWlpyoRLqAFTuyvKTaHlD8OXNHfUi3AaU7Lm_wLNxhlB79buJcoKTayfIIsjE6pHGT4Wh_CZ9ATdA7m-DIIglm_MDkMD5bsiad9Oy9CVmUzfHtWZfOFBA3-1FzGG-2jALHrr4"/>
                <img className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md" alt="Volunteer 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgLisgH07n6MQNnb6QpHsAJOk7rd94bywTRj6XF4IYd4QkZ7yhKc7Xqdtj85zXQuatzCswZOdX8dcrTixZA8KXnsw7lQxAQ54QlZl0YD1u3E65znCYwNloVtO6MCw9zjHZuZeLuKEhMdEm5lR-ePS2BEiCW20U2Z0vLcdHgCylbCoFYN_9VYY3dwuIsXIRniNNmCifQn-iIqZC0trhaGHnZYPi0pPPS-ACqu0ots4UUb3aiDJTmAq2pEXxL95n_Af3iZDOGrDT6DM"/>
                <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-black border-4 border-white shadow-md">+5k</div>
              </div>
              <h3 className="text-on-surface font-black text-2xl font-headline tracking-tight mb-2">Active Volunteers</h3>
              <p className="text-on-surface-variant text-sm font-bold font-body leading-tight">Ready to assist in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
