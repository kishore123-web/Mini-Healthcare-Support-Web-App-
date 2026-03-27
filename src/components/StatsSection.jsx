import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endValue = parseInt(end.replace(/[^0-9]/g, ''));
    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    const totalFrames = Math.round(duration / 16);
    const increment = endValue / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const suffix = end.replace(/[0-9]/g, '');

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

export default function StatsSection({ type = "impact" }) {
  const allStats = [
    { value: "54", label: "Mentor", icon: "groups", type: "about", color: "from-primary/80 to-primary" },
    { value: "28", label: "Doctor", icon: "medical_services", type: "about", color: "from-secondary/80 to-secondary" },
    { value: "1245", label: "People", icon: "person", type: "impact", color: "from-primary to-primary/80" },
    { value: "95%", label: "Early Treatments\nInitiated", icon: "monitor_heart", type: "impact", color: "from-secondary to-secondary/80" },
    { value: "150+", label: "Patients\nAssisted", icon: "favorite", type: "about", color: "from-primary/70 to-primary/90" },
    { value: "2000", label: "People Reached", icon: "language", type: "impact", color: "from-secondary/70 to-secondary/90" },
    { value: "50+", label: "Emotional Support", icon: "sentiment_satisfied", type: "about", color: "from-primary/60 to-primary/80" },
    { value: "95+", label: "Treatments\nInitiated", icon: "add_circle", type: "impact", color: "from-secondary/60 to-secondary/80" }
  ];

  const stats = allStats.filter(s => s.type === type);

  return (
    <section className="py-12 md:py-16 bg-surface-container-low/30 relative font-body overflow-hidden" id="impact">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-on-secondary-container font-headline mb-4 tracking-tighter">Impact at Scale</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-medium opacity-80">
            Real progress measured in human lives and healthcare efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="premium-glass p-8 rounded-[2rem] group hover:-translate-y-2 transition-all duration-500 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-xl shadow-black/5 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-white text-3xl" style={{fontVariationSettings: "'FILL' 0"}}>{stat.icon}</span>
              </div>
              <div className="text-4xl md:text-5xl font-black text-on-surface font-headline tracking-tighter mb-2">
                <CountUp end={stat.value} />
              </div>
              <p className="text-on-surface-variant font-bold text-sm uppercase tracking-widest opacity-60 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
