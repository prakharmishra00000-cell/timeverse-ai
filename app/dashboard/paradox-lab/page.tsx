'use client';

import React, { useState } from 'react';
import { DEMO_PARADOX_CONCEPTS } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { TestTube, Zap, GitCommit, Layers, RefreshCw, AlertCircle } from 'lucide-react';
import { TemporalModel, ParadoxConcept } from '@/types/timeverse';

export default function ParadoxLabPage() {
  const [selectedParadox, setSelectedParadox] = useState<ParadoxConcept>(DEMO_PARADOX_CONCEPTS[0]);
  const [activeModel, setActiveModel] = useState<TemporalModel>('Branching Timeline');

  const models: TemporalModel[] = ['Fixed Timeline', 'Branching Timeline', 'Multiverse', 'Self-Consistent Timeline'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-2">
          <TestTube className="w-3.5 h-3.5 text-indigo-400" />
          <span>TIME TRAVEL PARADOX LAB</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Causality Experimentation Sandbox
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Simulate Grandfather, Bootstrap, and Predestination loops across 4 theoretical models of temporal physics.
        </p>
      </div>

      {/* Concept Switcher Buttons */}
      <div className="flex items-center gap-3">
        {DEMO_PARADOX_CONCEPTS.map((px) => (
          <button
            key={px.id}
            onClick={() => setSelectedParadox(px)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              selectedParadox.id === px.id
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                : 'text-slate-400 hover:text-slate-200 bg-space-900/60 border border-white/5'
            }`}
          >
            {px.name}
          </button>
        ))}
      </div>

      {/* Theoretical Model Selector Bar */}
      <div className="p-4 rounded-2xl glass-panel border border-indigo-500/30 space-y-3">
        <h3 className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>SELECT THEORETICAL PHYSICS MODEL</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {models.map((m) => (
            <button
              key={m}
              onClick={() => setActiveModel(m)}
              className={`p-3 rounded-xl text-xs font-mono font-semibold border transition-all text-left ${
                activeModel === m
                  ? 'bg-gradient-to-r from-indigo-500/30 to-purple-500/20 text-indigo-200 border-indigo-400 shadow-md'
                  : 'bg-space-950/70 text-slate-400 border-white/10 hover:border-white/20'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Active Paradox Simulation Box */}
      <div className="p-6 rounded-2xl glass-panel border border-indigo-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-mono font-bold text-slate-100">{selectedParadox.name}</h2>
            <p className="text-xs text-slate-300 mt-1 font-sans">{selectedParadox.scenarioPrompt}</p>
          </div>
          <EvidenceBadge level="SPECULATIVE" size="md" />
        </div>

        {/* Theoretical Model Explanation Output */}
        <div className="p-5 rounded-xl bg-space-950 border border-indigo-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
              MODEL OUTCOME: {activeModel}
            </span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {selectedParadox.consequencesByModel[activeModel]}
          </p>
        </div>

        {/* Causality Loop Interactive Graph */}
        <div className="p-5 rounded-xl bg-space-950/80 border border-white/10 space-y-3">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-indigo-400" />
            <span>CAUSALITY LOOP GRAPH</span>
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {selectedParadox.causalityNodes.map((n, i) => (
              <React.Fragment key={n.id}>
                <div className="px-4 py-2 rounded-xl bg-space-900 border border-indigo-500/40 text-xs font-mono text-indigo-200 shadow-md">
                  {n.label}
                </div>
                {i < selectedParadox.causalityNodes.length - 1 && (
                  <span className="text-slate-500 font-mono">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
