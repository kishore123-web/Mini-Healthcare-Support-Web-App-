import React from 'react';

export default function StatsBanner() {
  const stats = [
    { value: "2,400+", label: "Patients Served" },
    { value: "850+", label: "Volunteers" },
    { value: "120+", label: "NGO Partners" },
    { value: "18", label: "Cities Active" }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="community members and volunteers" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ90GQBF1dNGiKLBYXYP93tYrrsCU32xIxKoPdnd-7h_xZU44gffaRYx9BdE3N9zmpm-QbcoLuQJpol8nvIk5Wz_4RtXP7iWlAlBEZ8PyR3zN3U8t4DKw7ah6M1VxMKbK2rdlrv8WeKbKxx9Pud-wVpt81DLnkjqBxoEHUEIuag9gF0XvcEZryoxxpstJPTnW1ZU-r0zN7yHXXeTXXm9oMkIP9v4WZF5ydy_ikM-kCs6JSkacdx3OmsKQMyGFXIalxrJbTtalJnBY" 
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <h2 className="font-headline text-5xl md:text-6xl font-black mb-2">{stat.value}</h2>
              <p className="font-label text-sm uppercase tracking-widest opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
