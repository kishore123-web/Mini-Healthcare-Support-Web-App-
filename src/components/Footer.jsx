import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950/80 dark:bg-black/90 backdrop-blur-xl w-full py-12 px-8 shadow-2xl mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-bold text-white font-headline">Jarurat Care</div>
          <p className="font-headline text-xs uppercase tracking-widest text-slate-500">
            © 2026 Jarurat Care. Ethereal Clinical Excellence.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-headline text-xs uppercase tracking-widest text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="font-headline text-xs uppercase tracking-widest text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a className="font-headline text-xs uppercase tracking-widest text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100" href="#">Contact Us</a>
          <a className="font-headline text-xs uppercase tracking-widest text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100" href="#">Support</a>
        </div>
        
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">share</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
