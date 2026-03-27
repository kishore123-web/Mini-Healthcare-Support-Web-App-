import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { generateCaseSummary } from '../services/ai';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import CaseSummaryCard from './CaseSummaryCard';
import CustomSelect from './CustomSelect';

export default function PatientForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Male',
    city: '',
    contactNumber: '',
    email: '',
    supportTypes: [],
    situation: '',
    urgency: 'Moderate'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');

  const supportOptions = [
    { label: "Medical", id: "medical" },
    { label: "Financial", id: "financial" },
    { label: "Oxygen", id: "oxygen" },
    { label: "Emergency", id: "emergency" }
  ];

  const urgencyLevels = [
    { label: "Low", color: "peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary" },
    { label: "Moderate", color: "peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-secondary" },
    { label: "Critical", color: "peer-checked:border-error peer-checked:bg-error-container peer-checked:text-on-error-container" }
  ];

  const handleCheckboxChange = (label) => {
    setFormData(prev => {
      const current = prev.supportTypes;
      return {
        ...prev,
        supportTypes: current.includes(label) 
          ? current.filter(item => item !== label)
          : [...current, label]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const minWait = new Promise(resolve => setTimeout(resolve, 2000));
      const aiResponse = generateCaseSummary({...formData, type: 'Patient Support Request'});
      const [_, summaryData] = await Promise.all([minWait, aiResponse]);
      
      // Save to Firebase
      await addDoc(collection(db, "requests"), {
        ...formData,
        ai_summary: summaryData,
        submittedAt: serverTimestamp(),
        status: 'Pending Review'
      });

      setSummary(summaryData);
    } catch (err) {
      setError(err.message || 'AI Generation failed. Check API key.');
    } finally {
      setIsLoading(false);
    }
  };

  if (summary) {
    return (
      <div className="space-y-8 animate-fade-in-up">
        <div className="bg-primary/5 border border-primary/10 text-primary p-6 rounded-2xl flex items-center justify-center gap-3 font-label font-bold">
          <span className="material-symbols-outlined">check_circle</span>
          Request recorded. Our AI generated this summary for the relief team:
        </div>
        <CaseSummaryCard summary={summary} />
        <div className="text-center pt-4">
          <button 
            type="button"
            onClick={() => { setSummary(null); setFormData(f => ({...f, fullName:'', age:'', situation:''})) }}
            className="text-primary font-bold hover:underline font-label uppercase text-xs tracking-widest cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-surface-container-low border-transparent focus:border-primary/30 focus:ring-0 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all font-body text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <div className="p-4 bg-error-container text-on-error-container rounded-lg text-xs font-bold">{error}</div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Full Name</label>
          <input 
            required 
            className={inputClass}
            placeholder="e.g. Rahul Sharma" 
            type="text" 
            value={formData.fullName}
            onChange={e => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Age</label>
            <input 
              required 
              className={inputClass}
              type="number" 
              value={formData.age}
              onChange={e => setFormData({...formData, age: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Gender</label>
            <CustomSelect 
              className={inputClass}
              value={formData.gender}
              options={["Male", "Female", "Other"]}
              onChange={val => setFormData({...formData, gender: val})}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">City</label>
          <input 
            required 
            className={inputClass}
            type="text" 
            value={formData.city}
            onChange={e => setFormData({...formData, city: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Phone Number</label>
          <input 
            required 
            className={inputClass}
            type="tel" 
            value={formData.contactNumber}
            onChange={e => setFormData({...formData, contactNumber: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="font-label text-xs md:text-sm font-bold text-primary ml-1 text-center block md:text-left">Support Required</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-1">
          {supportOptions.map(opt => (
            <label key={opt.id} className="flex items-center gap-3 cursor-pointer group py-2">
              <input 
                type="checkbox" 
                className="rounded text-primary focus:ring-primary border-outline-variant/30 w-5 h-5 accent-primary cursor-pointer shrink-0"
                checked={formData.supportTypes.includes(opt.label)}
                onChange={() => handleCheckboxChange(opt.label)}
              />
              <span className="text-sm font-bold font-label text-on-surface-variant group-hover:text-primary transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-label text-xs md:text-sm font-bold text-primary ml-1">Describe Situation</label>
        <textarea 
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Please provide details..."
          value={formData.situation}
          onChange={e => setFormData({...formData, situation: e.target.value})}
        ></textarea>
      </div>

      <div className="space-y-4">
        <label className="font-label text-xs md:text-sm font-bold text-primary ml-1 text-center block md:text-left">Urgency Level</label>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {urgencyLevels.map(level => (
            <label key={level.label} className="cursor-pointer">
              <input 
                className="hidden peer" 
                name="urgency" 
                type="radio" 
                checked={formData.urgency === level.label}
                onChange={() => setFormData({...formData, urgency: level.label})}
              />
              <div className={`text-center py-4 px-2 rounded-2xl bg-surface-container-low border-2 border-transparent transition-all font-bold text-xs md:text-sm font-label shadow-sm h-full flex items-center justify-center ${level.color}`}>
                {level.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-secondary text-on-secondary py-5 rounded-xl font-label font-bold text-lg shadow-xl shadow-secondary/20 btn-spring disabled:opacity-70 flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <><Loader2 className="animate-spin" size={24} /> Generating Summary...</>
        ) : (
          "Submit Support Request"
        )}
      </button>
    </form>
  );
}
