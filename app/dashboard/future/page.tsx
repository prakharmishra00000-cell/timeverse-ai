'use client';

import React, { useState } from 'react';
import { DEMO_FUTURE_SIMULATION } from '@/lib/store/demo-data';
import { simulateFutureScenario } from '@/lib/ai/timeverse-engine';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Rocket, Sliders, RefreshCw, AlertTriangle, Building2, Zap, Cpu, Globe } from 'lucide-react';
import { FutureSimulation } from '@/types/timeverse';

export default function FutureSimulatorPage() {
  const [simulation, setSimulation] = useState<FutureSimulation>(DEMO_FUTURE_SIMULATION);
  const [startingYear, setStartingYear] = useState<number>(2026);
  const [destinationYear, setDestinationYear] = useState<number>(2100);
  const [location, setLocation] = useState('Delhi NCR, India');
  const [aiLevel, setAiLevel] = useState('Autonomous Superintelligence Co-Governance');
  const [energyTech, setEnergyTech] = useState('Sub-Surface Fusion & Orbital Solar Beams');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleRunSimulation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    try {
      const result = await simulateFutureScenario(
        startingYear,
        destinationYear,
        location,
        aiLevel,
        energyTech
      );
      setSimulation(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-2">
          <Rocket className="w-3.5 h-3.5 text-emerald-400" />
          <span>FUTURE SIMULATION MODE</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Speculative Future Simulator
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Configure tech, energy, AI level, and space exploration parameters to generate multi-stage future city scenarios.
        </p>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-3 text-amber-200 text-xs">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold font-mono">SPECULATIVE SIMULATION NOTICE:</span>
          <p className="mt-0.5 opacity-90">{simulation.disclaimer}</p>
        </div>
      </div>

      {/* Parameter Control Form */}
      <form onSubmit={handleRunSimulation} className="p-6 rounded-2xl glass-panel border border-emerald-500/30 space-y-4">
        <h3 className="text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-emerald-400" />
          <span>SIMULATION PARAMETERS</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Target Metropolis / Region</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-xl glass-input text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Destination Year</label>
            <select
              value={destinationYear}
              onChange={(e) => setDestinationYear(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono"
            >
              <option value={2030}>2030 (Near Future)</option>
              <option value={2050}>2050 (Mid-Century)</option>
              <option value={2100}>2100 (Bio-City Era)</option>
              <option value={2200}>2200 (Post-Scarcity)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">AI Governance Level</label>
            <select
              value={aiLevel}
              onChange={(e) => setAiLevel(e.target.value)}
              className="w-full px-3 py-2 rounded-xl glass-input text-xs"
            >
              <option value="Autonomous Superintelligence Co-Governance">Superintelligence Co-Governance</option>
              <option value="Human-Guided Autonomous Agents">Human-Guided Autonomous Agents</option>
              <option value="Decentralized Quantum AI Mesh">Decentralized Quantum AI Mesh</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Primary Energy Tech</label>
            <input
              type="text"
              value={energyTech}
              onChange={(e) => setEnergyTech(e.target.value)}
              className="w-full px-3 py-2 rounded-xl glass-input text-xs"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSimulating}
            className="cyber-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-300" />
                <span>COMPUTING FUTURE SCENARIO...</span>
              </>
            ) : (
              <>
                <Rocket className="w-4 h-4 text-emerald-300" />
                <span>GENERATE FUTURE SIMULATION</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Simulation Stage Output */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="text-base font-mono font-bold text-slate-100 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>{simulation.title}</span>
          </h2>
          <EvidenceBadge level="SPECULATIVE" size="md" />
        </div>

        {/* Stages Timeline Cards */}
        <div className="space-y-6">
          {simulation.stages.map((stage) => (
            <div
              key={stage.year}
              className="p-6 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500/40 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-emerald-950 border border-emerald-500/40 font-mono font-bold text-emerald-300 text-sm">
                    {stage.year} CE
                  </span>
                  <h3 className="text-base font-bold text-slate-100">{stage.headline}</h3>
                </div>
              </div>

              {/* 10 Domain breakdown grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {[
                  { label: 'Technology', val: stage.technology },
                  { label: 'Transportation', val: stage.transportation },
                  { label: 'Energy', val: stage.energy },
                  { label: 'Cities', val: stage.cities },
                  { label: 'Education', val: stage.education },
                  { label: 'Economy', val: stage.economy },
                  { label: 'Work', val: stage.work },
                  { label: 'Healthcare', val: stage.healthcare },
                  { label: 'Space', val: stage.spaceExploration },
                  { label: 'Daily Life', val: stage.dailyLife },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-space-950/70 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
