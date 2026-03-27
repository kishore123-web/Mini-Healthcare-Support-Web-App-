import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-label">Precision Care</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-6">
            Designed for Human Impact
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body max-w-2xl mx-auto">
            We leverage advanced technology to ensure no request goes unheard and every volunteer finds their purpose.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="group p-8 md:p-10 bg-white rounded-[2rem] border border-outline-variant/20 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 0"}}>psychology</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-headline text-on-surface">AI-powered Matching</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed mb-8 font-body text-[15px]">
              Our neural engine connects the most relevant donors and volunteers to specific patient needs in milliseconds.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all font-label text-sm uppercase tracking-wide" href="#">
              Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
          
          <div className="group p-8 md:p-10 bg-white rounded-[2rem] border border-outline-variant/20 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 0"}}>groups_3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-headline text-on-surface">Community Support</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed mb-8 font-body text-[15px]">
              Localized hubs of trained volunteers ready to assist with medicine delivery, blood donation, and guidance.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all font-label text-sm uppercase tracking-wide" href="#">
              Join Community <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
          
          <div className="group p-8 md:p-10 bg-white rounded-[2rem] border border-outline-variant/20 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 0"}}>rocket_launch</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-headline text-on-surface">Real-time Response</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed mb-8 font-body text-[15px]">
              When every second counts, our emergency protocol activates immediate local notifications to first responders.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all font-label text-sm uppercase tracking-wide" href="#">
              View Protocol <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
