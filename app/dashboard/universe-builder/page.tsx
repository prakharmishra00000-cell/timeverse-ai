'use client';

import React, { useState } from 'react';
import { DEMO_UNIVERSES } from '@/lib/store/demo-data';
import { generateUniverse } from '@/lib/ai/timeverse-engine';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Globe, Sparkles, RefreshCw, UserCheck, Shield, MapPin, Plus, Share2 } from 'lucide-react';
import { UniverseProfile } from '@/types/timeverse';

export default function UniverseBuilderPage() {
  const [universes, setUniverses] = useState<UniverseProfile[]>(DEMO_UNIVERSES);
  const [selectedUniverseId, setSelectedUniverseId] = useState<string>(DEMO_UNIVERSES[0].id);
  const [promptInput, setPromptInput] = useState('Create a civilization where humans evolved underwater');
  const [isGenerating, setIsGenerating] = useState(false);

  const activeUniverse = universes.find((u) => u.id === selectedUniverseId) || universes[0];

  const handleGenerateUniverse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setIsGenerating(true);
    try {
      const newUni = await generateUniverse(promptInput);
      setUniverses((prev) => [newUni, ...prev]);
      setSelectedUniverseId(newUni.id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>UNIVERSE BUILDER ENGINE</span>
          </div>
          <h1 className="text-3xl font-mono font-extrabold text-slate-100">
            Alternate Universe Dashboard
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
            Build, edit, and recalculate complete fictional realities, species, technologies, and historical timelines.
          </p>
        </div>
      </div>

      {/* Universe Prompt Generator Form */}
      <form onSubmit={handleGenerateUniverse} className="p-6 rounded-2xl glass-panel border border-cyan-500/30 space-y-4">
        <h3 className="text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>GENERATE NEW FICTIONAL UNIVERSE</span>
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="e.g. Create a civilization where gravity operates horizontally..."
            className="flex-1 px-4 py-2.5 rounded-xl glass-input text-xs"
          />
          <button
            type="submit"
            disabled={isGenerating}
            className="cyber-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-300" />
                <span>BUILDING WORLD...</span>
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 text-cyan-300" />
                <span>GENERATE UNIVERSE</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Universe Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto">
        {universes.map((u) => (
          <button
            key={u.id}
            onClick={() => setSelectedUniverseId(u.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
              selectedUniverseId === u.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'text-slate-400 hover:text-slate-200 bg-space-900/60'
            }`}
          >
            {u.name}
          </button>
        ))}
      </div>

      {/* Selected Universe Overview Dashboard */}
      <div className="space-y-6">
        {/* Banner */}
        <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                {activeUniverse.category}
              </span>
              <span className="text-xs font-mono text-slate-400">By {activeUniverse.author}</span>
            </div>
            <h2 className="text-2xl font-mono font-extrabold text-slate-100">{activeUniverse.name}</h2>
            <p className="text-xs text-slate-300 mt-1">{activeUniverse.tagline}</p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
            <span>❤️ {activeUniverse.likes} Likes</span>
            <span>🔖 {activeUniverse.saves} Saves</span>
            <span>🍴 {activeUniverse.forks} Forks</span>
            <EvidenceBadge level="FICTIONAL" size="sm" />
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Geography', val: activeUniverse.worldOverview.geography },
            { label: 'Civilization', val: activeUniverse.worldOverview.civilization },
            { label: 'Technology', val: activeUniverse.worldOverview.technology },
            { label: 'Government', val: activeUniverse.worldOverview.government },
            { label: 'Culture', val: activeUniverse.worldOverview.culture },
            { label: 'Language', val: activeUniverse.worldOverview.language },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl glass-panel border border-white/10 space-y-1">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                {item.label}
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">{item.val}</p>
            </div>
          ))}
        </div>

        {/* Characters & Factions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
            <h3 className="text-xs font-mono font-bold text-slate-100 uppercase flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>KEY CHARACTERS</span>
            </h3>
            <div className="space-y-2">
              {activeUniverse.characters.map((c, i) => (
                <div key={i} className="p-3 rounded-xl bg-space-950/80 border border-white/5 text-xs">
                  <div className="font-bold text-slate-100">{c.name} ({c.role})</div>
                  <p className="text-slate-400 text-[11px] mt-0.5">{c.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
            <h3 className="text-xs font-mono font-bold text-slate-100 uppercase flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>WORLD FACTIONS</span>
            </h3>
            <div className="space-y-2">
              {activeUniverse.factions.map((f, i) => (
                <div key={i} className="p-3 rounded-xl bg-space-950/80 border border-white/5 text-xs">
                  <div className="font-bold text-slate-100">{f.name} ({f.influence})</div>
                  <p className="text-slate-400 text-[11px] mt-0.5">{f.ideology}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
