'use client';

import React, { useState } from 'react';
import { DEMO_BUTTERFLY_EFFECT } from '@/lib/store/demo-data';
import { generateButterflyEffect } from '@/lib/ai/timeverse-engine';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Zap, Sparkles, RefreshCw, ArrowDown, Cpu, DollarSign, Users, Landmark, Globe } from 'lucide-react';
import { ButterflyEffectChain } from '@/types/timeverse';

export default function ButterflyEffectPage() {
  const [chain, setChain] = useState<ButterflyEffectChain>(DEMO_BUTTERFLY_EFFECT);
  const [triggerInput, setTriggerInput] = useState('What if smartphones were invented 20 years earlier?');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!triggerInput.trim()) return;

    setIsCalculating(true);
    try {
      const res = await generateButterflyEffect(triggerInput);
      setChain(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsCalculating(false);
    }
  };

  const steps = [
    { title: 'TRIGGER', items: [chain.trigger], icon: Zap, color: 'text-amber-400 border-amber-500/40 bg-amber-950/40' },
    { title: 'IMMEDIATE EFFECTS', items: chain.immediateEffects, icon: Sparkles, color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/40' },
    { title: 'TECHNOLOGY EFFECTS', items: chain.technologyEffects, icon: Cpu, color: 'text-purple-400 border-purple-500/40 bg-purple-950/40' },
    { title: 'ECONOMIC EFFECTS', items: chain.economicEffects, icon: DollarSign, color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40' },
    { title: 'SOCIAL EFFECTS', items: chain.socialEffects, icon: Users, color: 'text-indigo-400 border-indigo-500/40 bg-indigo-950/40' },
    { title: 'POLITICAL EFFECTS', items: chain.politicalEffects, icon: Landmark, color: 'text-pink-400 border-pink-500/40 bg-pink-950/40' },
    { title: 'CULTURAL EFFECTS', items: chain.culturalEffects, icon: Globe, color: 'text-teal-400 border-teal-500/40 bg-teal-950/40' },
    { title: 'LONG-TERM CONSEQUENCES', items: chain.longTermConsequences, icon: Zap, color: 'text-rose-400 border-rose-500/40 bg-rose-950/40' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-mono text-amber-300 mb-2">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>BUTTERFLY EFFECT ENGINE</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Cascading Causal Graph
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Input one small historical change and track how the ripple propagates across technology, economy, society, and culture.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleCalculate} className="p-6 rounded-2xl glass-panel border border-amber-500/30 space-y-4">
        <label className="block text-xs font-mono text-slate-300 font-bold">ENTER SINGLE PIVOT CHANGE</label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={triggerInput}
            onChange={(e) => setTriggerInput(e.target.value)}
            placeholder="e.g. What if electricity became widely available 50 years earlier?"
            className="flex-1 px-4 py-2.5 rounded-xl glass-input text-xs"
          />
          <button
            type="submit"
            disabled={isCalculating}
            className="cyber-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            {isCalculating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
                <span>PROPAGATING RIPPLE...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 text-amber-300" />
                <span>CALCULATE CASCADING EFFECT</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Cascading Flow */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={idx}>
              <div className={`p-5 rounded-2xl glass-panel border ${step.color} transition-all space-y-2`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-mono font-bold text-xs">
                    <Icon className="w-4 h-4" />
                    <span>{step.title}</span>
                  </div>
                  <EvidenceBadge level="HYPOTHETICAL" size="sm" />
                </div>
                <ul className="space-y-1.5 text-xs text-slate-200 list-disc list-inside">
                  {step.items.map((it, i) => (
                    <li key={i} className="leading-relaxed">{it}</li>
                  ))}
                </ul>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-slate-500 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
