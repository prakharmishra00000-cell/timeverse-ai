'use client';

import React, { useState } from 'react';
import { DEMO_DETECTIVE_CASE } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Search, ShieldAlert, Award, FileText, UserCheck, Key, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { DetectiveCase, SuspectProfile } from '@/types/timeverse';

export default function TimeDetectivePage() {
  const [activeCase, setActiveCase] = useState<DetectiveCase>(DEMO_DETECTIVE_CASE);
  const [selectedTab, setSelectedTab] = useState<'briefing' | 'evidence' | 'suspects'>('briefing');
  const [selectedSuspect, setSelectedSuspect] = useState<SuspectProfile | null>(activeCase.suspects[0]);
  const [interrogationLog, setInterrogationLog] = useState<string[]>([]);

  const handleInterrogate = (suspect: SuspectProfile) => {
    setSelectedSuspect(suspect);
    const sample = suspect.dialogueSamples[Math.floor(Math.random() * suspect.dialogueSamples.length)];
    setInterrogationLog((prev) => [
      ...prev,
      `[AI Simulation - ${suspect.name}]: ${sample}`
    ]);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/30 text-xs font-mono text-rose-300 mb-2">
            <Search className="w-3.5 h-3.5 text-rose-400" />
            <span>TIME DETECTIVE AGENCY</span>
          </div>
          <h1 className="text-3xl font-mono font-extrabold text-slate-100">
            {activeCase.caseNumber}: {activeCase.title}
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
            YEAR {activeCase.year} • {activeCase.location}
          </p>
        </div>

        {/* Score & Progress */}
        <div className="flex items-center gap-4 bg-space-900/90 p-4 rounded-2xl border border-rose-500/30">
          <div>
            <div className="text-[10px] font-mono text-slate-400">DETECTIVE SCORE</div>
            <div className="text-lg font-mono font-bold text-rose-400">{activeCase.score} XP</div>
          </div>
          <EvidenceBadge level="AI RECONSTRUCTION" size="sm" />
        </div>
      </div>

      {/* Case Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        {[
          { id: 'briefing', label: 'Case Briefing & Objectives', icon: FileText },
          { id: 'evidence', label: 'Clue Inventory & Evidence Board', icon: Key },
          { id: 'suspects', label: 'AI Suspect Simulations', icon: UserCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                selectedTab === tab.id
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 bg-space-900/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Briefing Tab */}
      {selectedTab === 'briefing' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-2xl glass-panel border border-rose-500/30 space-y-4">
            <h3 className="text-sm font-mono font-bold text-slate-100 uppercase">MISSION OBJECTIVE</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{activeCase.objective}</p>

            <h3 className="text-sm font-mono font-bold text-slate-100 uppercase pt-2">CASE BRIEFING</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{activeCase.briefing}</p>

            <div className="p-3 rounded-xl bg-space-950/80 border border-white/10 text-[11px] font-mono text-slate-400">
              ⚠️ Note: Historical figures are presented as AI simulations based on 19th-century records.
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-100 uppercase">MISSION CHECKLIST</h3>
            <div className="space-y-2.5">
              {activeCase.missionObjectives.map((obj) => (
                <div key={obj.id} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${obj.completed ? 'text-emerald-400' : 'text-slate-600'}`} />
                  <span className={obj.completed ? 'line-through text-slate-500' : ''}>{obj.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Evidence Tab */}
      {selectedTab === 'evidence' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCase.clues.map((clue) => (
            <div
              key={clue.id}
              className={`p-5 rounded-2xl glass-panel border transition-all ${
                clue.discovered ? 'border-rose-500/30 bg-space-900/90' : 'border-white/5 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300">
                  {clue.discovered ? 'CLUE DISCOVERED' : 'LOCKED EVIDENCE'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{clue.location}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-100 mb-1">{clue.name}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{clue.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Suspects & Interrogation Tab */}
      {selectedTab === 'suspects' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase">SUSPECT DOSSIERS</h3>
            {activeCase.suspects.map((susp) => (
              <div
                key={susp.id}
                onClick={() => setSelectedSuspect(susp)}
                className={`p-4 rounded-xl glass-panel border cursor-pointer transition-all ${
                  selectedSuspect?.id === susp.id
                    ? 'border-rose-500/50 bg-space-900'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <h4 className="text-xs font-bold text-slate-100">{susp.name}</h4>
                <p className="text-[11px] text-rose-300 font-mono mt-0.5">{susp.role}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 p-6 rounded-2xl glass-panel border border-rose-500/30 space-y-4">
            {selectedSuspect && (
              <>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-100">{selectedSuspect.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">{selectedSuspect.role} ({selectedSuspect.era})</p>
                  </div>
                  <button
                    onClick={() => handleInterrogate(selectedSuspect)}
                    className="cyber-button px-4 py-2 rounded-xl text-xs flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Interrogate AI Simulation</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  <div><span className="font-mono text-slate-400">ALIBI:</span> <span className="text-slate-200">{selectedSuspect.alibi}</span></div>
                  <div><span className="font-mono text-slate-400">MOTIVE:</span> <span className="text-slate-200">{selectedSuspect.motive}</span></div>
                </div>

                {/* Interrogation Transcript */}
                <div className="mt-4 p-4 rounded-xl bg-space-950 border border-white/10 space-y-2 h-48 overflow-y-auto font-mono text-xs text-slate-300">
                  <div className="text-[10px] text-slate-500 mb-2">--- AI SIMULATION TRANSCRIPT ---</div>
                  {interrogationLog.length === 0 ? (
                    <div className="text-slate-500 italic">Click "Interrogate AI Simulation" to begin interrogation...</div>
                  ) : (
                    interrogationLog.map((log, i) => <div key={i}>{log}</div>)
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
