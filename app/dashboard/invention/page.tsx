'use client';

import React, { useState } from 'react';
import { DEMO_INVENTION_COMPARISON } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Lightbulb, ArrowRightLeft, Sparkles, Check, Globe } from 'lucide-react';
import { InventionComparison } from '@/types/timeverse';

export default function InventionTimeMachinePage() {
  const [invention, setInvention] = useState<InventionComparison>(DEMO_INVENTION_COMPARISON);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/80 border border-yellow-500/30 text-xs font-mono text-yellow-300 mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
          <span>INVENTION TIME MACHINE</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          What If This Existed Earlier?
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Simulate an advanced modern invention arriving decades or centuries ahead of its actual discovery date.
        </p>
      </div>

      {/* Invention Banner */}
      <div className="p-6 rounded-2xl glass-panel border border-yellow-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-yellow-400 mb-1">INVENTION ANCHOR</div>
          <h2 className="text-xl font-mono font-bold text-slate-100">{invention.invention}</h2>
          <p className="text-xs text-slate-300 mt-1 font-sans">
            Real Era: {invention.realInventionYear} CE • Simulated Arrival: {invention.hypotheticalYear} CE
          </p>
        </div>
        <EvidenceBadge level="HYPOTHETICAL" size="md" />
      </div>

      {/* Comparison Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-yellow-400" />
          <span>REAL HISTORY VS ALTERNATIVE HISTORY MATRIX</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {invention.impactDomains.map((dom, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono font-bold text-yellow-400 uppercase">{dom.category}</span>
                <span className="text-[10px] font-mono text-slate-400">DOMAIN COMPARISON</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-space-950/80 border border-cyan-500/20">
                  <span className="text-[10px] font-mono text-cyan-400 block mb-1">REAL HISTORY ({invention.realInventionYear}+):</span>
                  <p className="text-slate-300 leading-relaxed">{dom.realWorld}</p>
                </div>

                <div className="p-3 rounded-xl bg-space-950/80 border border-purple-500/20">
                  <span className="text-[10px] font-mono text-purple-400 block mb-1">ALTERNATIVE HISTORY ({invention.hypotheticalYear}+):</span>
                  <p className="text-slate-300 leading-relaxed">{dom.alternativeWorld}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
