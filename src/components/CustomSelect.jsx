import React, { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ options, value, onChange, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        className={`${className} cursor-pointer flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <span className={`material-symbols-outlined transition-transform duration-200 text-on-surface-variant/70 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
          expand_more
        </span>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-2xl shadow-primary/10 z-50 overflow-hidden animate-fade-in-up origin-top">
          <ul className="py-2 max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <li 
                key={opt}
                className={`px-4 py-3 hover:bg-primary/10 cursor-pointer font-body text-sm transition-colors ${value === opt ? 'bg-primary/5 text-primary font-bold border-l-2 border-primary' : 'text-on-surface border-l-2 border-transparent'}`}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
