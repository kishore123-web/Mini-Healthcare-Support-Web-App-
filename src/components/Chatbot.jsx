import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, MessageSquare } from 'lucide-react';
import { getChatResponse } from '../services/ai';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Namaste! How can Jarurat Care assist you today with healthcare resources?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (customText = null) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;

    const userMessage = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    if (!customText) setInput("");
    setIsLoading(true);

    try {
      const response = await getChatResponse([...messages, userMessage]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="w-[calc(100vw-32px)] sm:w-80 md:w-[380px] h-[70vh] md:h-[500px] glass-panel bg-white/95 rounded-3xl shadow-2xl mb-4 flex flex-col overflow-hidden border border-primary/20 animate-fade-in-up origin-bottom-right transition-all pointer-events-auto">
          
          <div className="bg-primary p-4 md:p-5 flex items-center justify-between text-white shadow-md z-10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed care-glow animate-pulse"></div>
              <div>
                <span className="font-bold font-headline block leading-tight text-sm md:text-base">Jarurat AI Assistant</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-mint/80 font-bold block">Powered by Groq</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors cursor-pointer p-1.5 hover:bg-white/10 rounded-lg">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-surface-container-lowest/50 overscroll-contain">
            {messages.length === 1 && (
              <div className="bg-white/80 p-4 rounded-2xl border border-primary/10 shadow-sm mb-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/40 mb-3 block text-center">Suggested Topics</p>
                <div className="flex flex-col gap-2">
                  {["I need medical help", "How can I volunteer?", "What is Jarurat Care?"].map(suggestion => (
                    <button 
                      key={suggestion}
                      onClick={() => handleSend(suggestion)}
                      className="bg-surface-container-low text-xs text-primary px-4 py-3 rounded-xl hover:bg-primary hover:text-white transition-all text-center font-bold font-label cursor-pointer shadow-sm border border-primary/5 active:scale-95"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`w-full ${msg.role === 'user' ? 'flex flex-col items-end' : 'flex gap-2 items-start'}`}>
                {msg.role !== 'user' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 shadow-sm border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
                  </div>
                )}
                <div className={`p-3.5 rounded-2xl text-sm leading-relaxed max-w-[85%] font-body shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white border border-primary/10 text-on-surface-variant rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 shadow-sm border border-primary/5">
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-primary/10 shadow-sm rounded-tl-none">
                  <div className="flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: "150ms"}}></div>
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: "300ms"}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-outline-variant/20 bg-white shrink-0">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2 w-full">
               <input 
                 type="text" 
                 placeholder="Type your request..." 
                 className="flex-1 bg-surface-container-low border-none rounded-2xl px-5 py-3 focus:ring-2 focus:ring-primary/20 text-sm transition-all font-body text-on-surface"
                 value={input}
                 onChange={e => setInput(e.target.value)}
               />
               <button 
                 type="submit" 
                 disabled={!input.trim() || isLoading}
                 className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-primary text-white rounded-2xl hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer shadow-lg shadow-primary/20 active:scale-90"
               >
                 <Send size={18} />
               </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-2xl md:rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group border-2 border-white care-glow pointer-events-auto"
      >
        {isOpen ? <X size={24} /> : (
          <div className="relative">
            <MessageSquare size={24} className="md:w-7 md:h-7" />
            <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-tertiary-fixed rounded-full border-2 border-primary animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
          </div>
        )}
      </button>
    </div>
  );
}
