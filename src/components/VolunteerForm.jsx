import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import CustomSelect from './CustomSelect';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    role: 'Volunteer',
    skills: [],
    availability: 'Flexible',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [volunteerId, setVolunteerId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const skillOptions = [
    "Medical professional", "Social worker", "Financial donor",
    "Logistics", "Digital support", "General volunteer"
  ];

  const handleCheckboxChange = (option) => {
    setFormData(prev => {
      const current = prev.skills;
      return {
        ...prev,
        skills: current.includes(option) 
          ? current.filter(item => item !== option)
          : [...current, option]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Save to Firebase
      const docRef = await addDoc(collection(db, "volunteers"), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: 'Unprocessed'
      });

      const id = 'JC-' + docRef.id.substring(0, 5).toUpperCase();
      setVolunteerId(id);
      setSubmitted(true);
    } catch (err) {
      console.error("Firestore Error:", err);
      setError(err.message || "Failed to register. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 animate-fade-in-up">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/10">
          <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
        </div>
        <h3 className="text-3xl font-headline font-bold text-primary mb-4">Welcome to the Family!</h3>
        <p className="text-on-surface-variant mb-10 max-w-sm mx-auto font-body">Thank you, {formData.fullName}. Our team will review your application and reach out within 48 hours.</p>
        
        <div className="inline-block bg-primary text-on-primary rounded-2xl px-12 py-8 mb-10 shadow-2xl shadow-primary/20">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] block mb-2 opacity-70">Volunteer ID</span>
          <span className="text-3xl font-mono font-black">{volunteerId}</span>
        </div>
        
        <div>
          <button 
            type="button"
            onClick={() => { setSubmitted(false); setFormData(f => ({...f, fullName:'', email:'', phone:'', message:''})) }}
            className="text-primary hover:underline font-label font-bold uppercase text-xs tracking-widest cursor-pointer"
          >
            Register Another Person
          </button>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-surface-container-low border-transparent focus:border-primary/30 focus:ring-0 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all font-body text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 bg-error-container text-on-error-container rounded-lg text-xs font-bold border border-error/20 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">error</span>
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Full Name</label>
          <input required placeholder="e.g. Priya Mehta" className={inputClass} type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
        </div>
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Email Address</label>
          <input required placeholder="priya@example.com" className={inputClass} type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Phone Number</label>
          <input required className={inputClass} type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
        </div>
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">City</label>
          <input required className={inputClass} type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
        </div>
      </div>

      <div className="space-y-4">
        <label className="font-label text-xs md:text-sm font-bold text-primary ml-1 text-center block md:text-left">Help As</label>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          {['Volunteer', 'Donor', 'Both'].map(role => (
            <label key={role} className="flex-1 min-w-0">
              <input 
                className="hidden peer" 
                name="role" 
                type="radio" 
                checked={formData.role === role}
                onChange={() => setFormData({...formData, role: role})}
              />
              <div className="text-center p-3.5 md:p-3 rounded-2xl md:rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all cursor-pointer font-bold text-sm font-label shadow-sm active:scale-95">
                {role}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="font-label text-xs md:text-sm font-bold text-primary ml-1 text-center block md:text-left">Skills / Interests</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-1">
          {skillOptions.map(option => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group py-2">
              <input 
                type="checkbox" 
                className="rounded text-primary focus:ring-primary border-outline-variant/30 w-5 h-5 accent-primary cursor-pointer shrink-0"
                checked={formData.skills.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="text-sm font-bold font-label text-on-surface-variant group-hover:text-primary transition-colors">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Availability</label>
        <CustomSelect 
          className={inputClass}
          value={formData.availability}
          options={["Weekdays", "Weekends", "Both", "Flexible"]}
          onChange={val => setFormData({...formData, availability: val})}
        />
      </div>

      <div className="space-y-2">
        <label className="font-label text-sm font-bold text-primary ml-1">Motivation</label>
        <textarea rows={3} className={`${inputClass} resize-none`} placeholder="Tell us why you'd like to join..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-primary text-on-primary py-5 rounded-xl font-label font-bold text-lg shadow-xl shadow-primary/20 btn-spring disabled:opacity-70 flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <><Loader2 className="animate-spin" size={24} /> Registering...</>
        ) : (
          "Register as Volunteer"
        )}
      </button>
    </form>
  );
}
