import React from 'react';

export default function AIConsultation() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
      <div className="flex-1 space-y-6 animate-fade-in-up">
        <h2 className="font-headline text-5xl font-bold text-primary leading-tight">Have Questions?</h2>
        <p className="text-xl text-on-surface-variant max-w-lg font-body leading-relaxed">
          Our AI Care assistant is available 24/7 to help you navigate medical resources and eligibility.
        </p>
        <img 
          className="w-full max-w-md rounded-2xl grayscale opacity-80 mix-blend-multiply hover:grayscale-0 transition-all duration-700" 
          alt="AI assistant illustration" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVX8zLVbYRSuzRca8zldJ8VUexr7tdPA2rqxCH0_KtRnG8m5eq_932h8Ey6kEeWTSsvgpGTZMOPfKpHX3JCtc8KhfAh4KmMgCnpw88ra3aeUegh4x6fjng1k9IT_49vaspmYn2WzxSS2L0pKfOiV4pEXe7ZMMT_LzvwqfGYlVT8faSsOIxRwqVPv3RIheNTLNHpsApfVB1npbc_RC_PlULTeBtmelSbWL6sIHP5_4cdef-vtWWAKhyGvAI7DwQvk0HKFIaJ5RiOUg" 
        />
      </div>
      
      {/* CareBot AI Preview Widget */}
      <div className="w-full max-w-[400px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-primary/5">
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-mint/20 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <div>
              <p className="text-on-primary font-bold font-label text-sm uppercase tracking-tight">CareBot AI</p>
              <p className="text-mint text-[10px] font-bold uppercase tracking-widest opacity-80">Online • Responds instantly</p>
            </div>
          </div>
          
          <div className="h-96 p-6 overflow-y-auto space-y-6 bg-surface-container-low/30 scroll-smooth">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xs">smart_toy</span>
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none text-sm text-on-surface-variant shadow-sm border border-black/5 leading-relaxed font-body">
                Namaste! How can Jarurat Care assist you today with healthcare resources?
              </div>
            </div>
            
            <div className="flex gap-3 justify-end">
              <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none text-sm shadow-sm font-body">
                I need help finding a bed in Mumbai.
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white border-t border-outline-variant/20 flex gap-2">
            <input 
              readOnly
              className="flex-1 bg-surface-container-low border-none rounded-full px-4 text-sm focus:ring-1 focus:ring-primary py-3" 
              placeholder="Type your query..." 
              type="text" 
            />
            <button className="w-11 h-11 bg-primary text-on-primary rounded-full flex items-center justify-center btn-spring shadow-lg">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
        <p className="text-[10px] text-center mt-4 text-slate-400 font-bold uppercase tracking-widest">Interactive AI Preview</p>
      </div>
    </section>
  );
}
