'use client';

import React, { useState } from 'react';
import { DEMO_PARALLEL_LIVES } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Dna, User, Sparkles, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { ParallelLifeSimulation } from '@/types/timeverse';

export default function ParallelLivesPage() {
  const [simulation, setSimulation] = useState<ParallelLifeSimulation>(DEMO_PARALLEL_LIVES);
  const [selectedTrajectory, setSelectedTrajectory] = useState<number>(0);

  const activeTrajectory = simulation.trajectories[selectedTrajectory];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
          <Dna className="w-3.5 h-3.5 text-cyan-400" />
          <span>PARALLEL LIVES SIMULATOR</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Personal Trajectory Simulator
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Simulate multiple hypothetical life choices across 1, 3, 5, 10, and 20 years. Never presented as guaranteed predictions.
        </p>
      </div>

      {/* User Current Profile Card */}
      <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono font-bold">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-mono font-bold text-slate-100">{simulation.userName} (Age {simulation.currentAge})</h2>
            <p className="text-xs text-slate-400 font-mono">Current Career: {simulation.career}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <EvidenceBadge level="HYPOTHETICAL" size="md" />
        </div>
      </div>

      {/* Trajectory Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        {simulation.trajectories.map((traj, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTrajectory(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              selectedTrajectory === idx
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'text-slate-400 hover:text-slate-200 bg-space-900/60'
            }`}
          >
            {traj.pathName}
          </button>
        ))}
      </div>

      {/* Active Trajectory Milestones */}
      <div className="space-y-6">
        <div className="p-5 rounded-xl bg-space-950/80 border border-white/10">
          <h3 className="text-sm font-bold text-slate-100 mb-1">{activeTrajectory.pathName}</h3>
          <p className="text-xs text-slate-300">{activeTrajectory.summary}</p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTrajectory.milestones.map((ms, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="px-3 py-1 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs">
                  +{ms.yearOffset} YEAR HORIZON
                </span>
                <span className="text-[10px] font-mono text-slate-400">Hypothetical Scenario</span>
              </div>

              <h4 className="text-sm font-bold text-slate-100">{ms.headline}</h4>

              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">Skills Acquired:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ms.skillsAcquired.map((sk, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-space-900 border border-white/10 text-[11px] text-slate-300">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">Lifestyle & Environment:</span>
                <p className="text-xs text-slate-300">{ms.lifestyle}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block">Key Opportunities:</span>
                  <ul className="text-[11px] text-slate-300 list-disc list-inside mt-0.5 space-y-0.5">
                    {ms.opportunities.map((o, i) => (
                      <li key={i} className="truncate">{o}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase block">Challenges:</span>
                  <ul className="text-[11px] text-slate-300 list-disc list-inside mt-0.5 space-y-0.5">
                    {ms.challenges.map((c, i) => (
                      <li key={i} className="truncate">{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
