import React from 'react';

export default function SupportServices() {
  const services = [
    {
      title: "Seek Support",
      description: "Professional guidance and resource assistance for your health journey.",
      buttonText: "Request Now",
      icon: "add_notes",
      onClick: () => document.getElementById('forms')?.scrollIntoView({behavior: 'smooth'})
    },
    {
      title: "Community Care",
      description: "Join a supportive network of survivors, doctors, and volunteers.",
      buttonText: "Join Group",
      icon: "groups",
      onClick: () => document.getElementById('forms')?.scrollIntoView({behavior: 'smooth'})
    },
    {
      title: "HOPE AI Bot",
      description: "Instant medical queries and emotional support 24/7.",
      buttonText: "Try Chatbot",
      icon: "smart_toy",
      onClick: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-surface-container-low/30 relative font-body overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black font-headline text-on-secondary-container mb-4 tracking-tighter">Our Support Services</h2>
          <p className="text-on-surface-variant font-medium max-w-xl mx-auto opacity-70">Streamlined access to the care and community you deserve.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="premium-glass p-8 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 0"}}>{service.icon}</span>
              </div>
              <h3 className="text-xl font-black font-headline text-on-surface mb-3 tracking-tight">{service.title}</h3>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-8 opacity-70 px-2">{service.description}</p>
              <button 
                onClick={service.onClick}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-95 text-sm"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
