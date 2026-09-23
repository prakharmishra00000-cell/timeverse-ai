'use client';

import React, { useState } from 'react';
import { Bot, Send, Sparkles, X, Minimize2, Maximize2, Compass } from 'lucide-react';

interface ContextualAIChatProps {
  currentContextName?: string;
  currentContextType?: string;
  contextDetails?: string;
}

export const ContextualAIChat: React.FC<ContextualAIChatProps> = ({
  currentContextName = 'Original Timeline 2026',
  currentContextType = 'Timeline',
  contextDetails = 'Baseline Earth-Alpha recorded history.',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; timestamp: string }>>([
    {
      sender: 'ai',
      text: `Greetings, Traveler. I am your Timeverse Companion. You are currently exploring **${currentContextName}** (${currentContextType}). How would you like to probe this temporal space?`,
      timestamp: 'Now',
    }
  ]);
  const [input, setInput] = useState('');

  const quickActions = [
    { label: 'Explain', query: `Explain the key historical mechanisms of ${currentContextName}.` },
    { label: 'Explore', query: `What hidden details exist in this era of ${currentContextName}?` },
    { label: 'Change Event', query: `What if a major pivot occurred right now in ${currentContextName}?` },
    { label: 'Travel', query: `Jump to the nearest downstream consequence year.` },
    { label: 'Compare', query: `Compare ${currentContextName} against the baseline 2026 history.` },
    { label: 'Simulate', query: `Simulate the 50-year future projection for this space.` },
  ];

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user' as const, text: textToSend, timestamp: 'Now' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // AI Response with Contextual Awareness
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai' as const,
        text: `[Context: ${currentContextName}]\nAnalyzing temporal vectors for "${textToSend}"...\n\nBased on the causality matrix of ${currentContextName}, this shift alters local economic structures by ~34% and introduces a new branch node. Would you like to save this branch to your Universe profile?`,
        timestamp: 'Now',
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 800);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-semibold shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition-all border border-cyan-300/40"
      >
        <Bot className="w-5 h-5 text-cyan-200 animate-pulse" />
        <span>Time Companion</span>
        <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f0ff]" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 glass-panel border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
      isMinimized ? 'w-80 h-14' : 'w-96 h-[480px]'
    }`}>
      {/* Header bar */}
      <div className="p-3.5 border-b border-white/10 bg-space-900/90 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5 font-mono">
              TIME COMPANION
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                {currentContextType}
              </span>
            </div>
            <div className="text-[10px] text-cyan-300/80 truncate max-w-[180px]">
              {currentContextName}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-white/5"
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-white/5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Quick Context Bar */}
          <div className="px-3 py-1.5 bg-space-950/80 border-b border-white/5 text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
            <Compass className="w-3 h-3 text-purple-400" />
            <span className="truncate">{contextDetails}</span>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-tr-none'
                      : 'bg-space-900/90 border border-cyan-500/20 text-slate-200 rounded-tl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Chips */}
          <div className="px-3 py-2 border-t border-white/5 bg-space-900/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickActions.map((act) => (
              <button
                key={act.label}
                onClick={() => handleSend(act.query)}
                className="px-2.5 py-1 rounded-full bg-space-800 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-500/40 text-[10px] font-mono text-cyan-300 whitespace-nowrap transition-colors"
              >
                [{act.label}]
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="p-3 border-t border-white/10 bg-space-950/90 rounded-b-2xl flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Time Companion..."
              className="flex-1 glass-input px-3 py-1.5 rounded-lg text-xs placeholder:text-slate-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
