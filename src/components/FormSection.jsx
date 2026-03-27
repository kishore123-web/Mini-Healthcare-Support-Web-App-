import React, { useState } from 'react';
import PatientForm from './PatientForm';
import VolunteerForm from './VolunteerForm';

export default function FormSection() {
  const [activeTab, setActiveTab] = useState('patient');

  return (
    <section id="forms" className="py-12 md:py-16 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight">Need immediate assistance?</h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body max-w-2xl mx-auto lg:mx-0">Fill out the clinical request form. Our system prioritizes based on urgency and resource availability. If you wish to help, you can also register as a volunteer.</p>
          
          <div className="space-y-4 md:space-y-6 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-white/20 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="font-bold">01</span>
              </div>
              <p className="font-medium text-on-surface font-body text-sm md:text-base">Enter Personal Details</p>
            </div>
            <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-white/20 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="font-bold">02</span>
              </div>
              <p className="font-medium text-on-surface font-body text-sm md:text-base">Specify Resource / Capability</p>
            </div>
            <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-white/20 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="font-bold">03</span>
              </div>
              <p className="font-medium text-on-surface font-body text-sm md:text-base">Immediate Network Action</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden bg-white/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="absolute top-0 left-0 w-full h-1.5 bg-surface-container">
            <div className="h-full w-1/3 bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(0,105,92,0.3)]"></div>
          </div>
          
          <div className="mb-8">
            <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-4 font-label text-center lg:text-left">Request Type</label>
            <div className="flex gap-2 sm:gap-3">
              <button 
                onClick={() => setActiveTab('patient')}
                className={`flex-1 py-3.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer border ${
                  activeTab === 'patient'
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-on-surface-variant border-outline-variant/30 hover:bg-surface-container'
                }`}
                type="button"
              >
                Get Support
              </button>
              <button 
                onClick={() => setActiveTab('volunteer')}
                className={`flex-1 py-3.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer border ${
                  activeTab === 'volunteer'
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-on-surface-variant border-outline-variant/30 hover:bg-surface-container'
                }`}
                type="button"
              >
                Give Support
              </button>
            </div>
          </div>

          <div className="mt-2">
             {activeTab === 'patient' ? <PatientForm /> : <VolunteerForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
