import React from 'react';

export default function AboutSection() {
  const features = [
    {
      icon: "health_metrics",
      title: "Empathetic Care",
      desc: "Personalized medical assistance focusing on the dignity and comfort of every patient we serve.",
      color: "bg-primary"
    },
    {
      icon: "volunteer_activism",
      title: "Community Spirit",
      desc: "A network of 850+ specialized volunteers providing critical logistics and emotional support.",
      color: "bg-secondary"
    },
    {
      icon: "smart_toy",
      title: "AI-Powered Insights",
      desc: "Leveraging precision data to predict healthcare gaps and optimize resource distribution across cities.",
      color: "bg-tertiary"
    }
  ];
  return (
    <section id="about" className="py-16 md:py-20 px-6 md:px-16 max-w-[1600px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-[45%] animate-fade-in-up">
          <img 
            className="rounded-2xl w-full h-[450px] md:h-[500px] object-cover shadow-2xl" 
            alt="Doctor consulting with patient" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBouB1oUHkR1LIJf81dCl7fANsDy26RMTtEi7BBxVHBKx70pGquyp9Ey4rSfhOPathErAzxgTFLulANaaWf873ycg2uH76gdLzJdRyNxOhK4BbnbQqc_UFXwcQ30-WiEo6lfXl7TrcjuXug0Kksd4lz5BiuAaqXddCfOacPiGr9drV5jQYCaH58KY5w0TbrxqAK7roTAAWX7WIciY9U6xN8tlCQcLURFyWpMkAgdz2OUz3F2ExQRav2wuFBFzH3wOdfcCzXxdQAU_Y" 
          />
        </div>
        
        <div className="w-full lg:w-[55%] space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-label text-xs font-bold uppercase tracking-widest">
            OUR MISSION
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-[48px] text-primary leading-tight font-bold">
            We believe healthcare is a right, not a privilege.
          </h2>
          
          <div className="grid gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-surface-container rounded-2xl btn-spring group">
                <div className={`w-12 h-12 ${item.color} text-on-primary rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
