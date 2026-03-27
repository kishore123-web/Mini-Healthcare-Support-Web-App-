import React from 'react';
import { FileText, Printer, CheckCircle } from 'lucide-react';

export default function CaseSummaryCard({ summary }) {
  if (!summary) return null;

  const priorityColors = {
    "Low": "bg-green-100 text-green-800 border-green-200",
    "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "High": "bg-orange-100 text-orange-800 border-orange-200",
    "Critical": "bg-red-100 text-red-800 border-red-200",
  };

  const getPriorityColor = (level) => {
    return priorityColors[level] || priorityColors["Medium"];
  };

  const printSummary = () => {
    window.print();
  };

  return (
    <div className="border-l-4 border-l-primary pt-2 animate-fade-in-up mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="text-emerald-500" size={20} />
            <h3 className="text-xl font-serif font-bold text-dark-teal">Support Request Received</h3>
          </div>
          <p className="text-sm text-slate-500">Auto-generated Case Summary</p>
        </div>
        <button onClick={printSummary} className="text-slate-400 hover:text-primary transition-colors cursor-pointer" title="Print/Save">
          <Printer size={20} />
        </button>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Case ID</span>
          <div className="font-bold text-primary">{summary.case_id}</div>
        </div>
        <div>
          <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Priority</span>
          <div className={`text-xs px-2.5 py-1 rounded-full border font-bold inline-block ${getPriorityColor(summary.priority_level)}`}>
            {summary.priority_level || 'Pending'}
          </div>
        </div>
        <div>
          <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Est. Response Time</span>
          <div className="font-bold text-slate-700">{summary.estimated_response_time}</div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
          <FileText size={16} className="text-primary"/> 
          Situation Summary
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed bg-white border border-slate-200 p-4 rounded-lg">
          {summary.summary}
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-800 mb-3">Recommended Next Steps</h4>
        <ul className="space-y-2">
          {summary.recommended_next_steps?.map((step, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-slate-600 items-start">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
