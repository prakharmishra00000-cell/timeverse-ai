'use client';

import React, { useState } from 'react';
import { DEMO_MEMORIES } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Brain, Search, Lock, Plus, Calendar, FileText, Image as ImageIcon, Tag, Sparkles } from 'lucide-react';
import { MemoryItem } from '@/types/timeverse';

export default function MemoryTimeMachinePage() {
  const [memories, setMemories] = useState<MemoryItem[]>(DEMO_MEMORIES);
  const [semanticQuery, setSemanticQuery] = useState('');
  const [queryResult, setQueryResult] = useState<string | null>(null);

  const handleSemanticSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!semanticQuery.trim()) return;

    if (semanticQuery.includes('2023') || semanticQuery.toLowerCase().includes('working')) {
      setQueryResult('In April 2023, you authored the initial architecture sketch for the Spatial Simulation Engine ("What if a timeline was an interactive node graph?").');
    } else {
      setQueryResult(`Found 2 memory nodes matching "${semanticQuery}" across 2024 and 2026 timelines.`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-mono text-purple-300 mb-2">
            <Brain className="w-3.5 h-3.5 text-purple-400" />
            <span>MY MEMORY TIME MACHINE</span>
          </div>
          <h1 className="text-3xl font-mono font-extrabold text-slate-100">
            Personal Private Memory Vault
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
            Chronological AI memory index. Secure, encrypted, and private to your account.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-space-900 px-3 py-1.5 rounded-xl border border-emerald-500/30">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>END-TO-END ENCRYPTED</span>
        </div>
      </div>

      {/* Semantic Memory AI Query Form */}
      <form onSubmit={handleSemanticSearch} className="p-6 rounded-2xl glass-panel border border-purple-500/30 space-y-4">
        <h3 className="text-xs font-mono font-bold text-slate-200 flex items-center gap-2 uppercase">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>ASK YOUR MEMORY TIME MACHINE</span>
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={semanticQuery}
            onChange={(e) => setSemanticQuery(e.target.value)}
            placeholder='e.g. "What was I working on in 2023?" or "When did I first mention this project?"'
            className="flex-1 px-4 py-2.5 rounded-xl glass-input text-xs"
          />
          <button
            type="submit"
            className="cyber-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-purple-300" />
            <span>QUERY VAULT</span>
          </button>
        </div>

        {queryResult && (
          <div className="p-4 rounded-xl bg-space-950 border border-purple-500/30 text-xs text-slate-200 leading-relaxed font-mono">
            <span className="text-purple-400 font-bold block mb-1">AI MEMORY RETRIEVAL RESULT:</span>
            {queryResult}
          </div>
        )}
      </form>

      {/* Chronological Personal Timeline */}
      <div className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">MY TIMELINE (2019 - 2026)</h2>

        <div className="space-y-4">
          {memories.map((mem) => (
            <div
              key={mem.id}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all flex flex-col md:flex-row items-start justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-space-900 border border-purple-500/30 font-mono font-bold text-purple-300 text-sm shrink-0">
                  {mem.year}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">{mem.date}</div>
                  <h3 className="text-sm font-bold text-slate-100">{mem.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">{mem.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {mem.tags.map((tg, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-space-950 border border-white/10 text-[10px] font-mono text-purple-300">
                        #{tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {mem.mediaUrl && (
                <div className="w-full md:w-36 h-24 rounded-xl bg-space-950 border border-white/10 overflow-hidden shrink-0">
                  <img src={mem.mediaUrl} alt={mem.title} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
