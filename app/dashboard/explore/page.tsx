'use client';

import React, { useState } from 'react';
import { DEMO_UNIVERSES } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Compass, Heart, Bookmark, GitFork, Search, Sparkles, User, Globe } from 'lucide-react';
import { UniverseProfile } from '@/types/timeverse';

export default function CommunityExplorePage() {
  const [universes, setUniverses] = useState<UniverseProfile[]>(DEMO_UNIVERSES);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Sci-Fi', 'Alternate History', 'Fantasy', 'Future', 'Educational'];

  const filtered = selectedCategory === 'All'
    ? universes
    : universes.filter((u) => u.category === selectedCategory);

  const handleLike = (id: string) => {
    setUniverses((prev) =>
      prev.map((u) => (u.id === id ? { ...u, likes: u.likes + 1 } : u))
    );
  };

  const handleFork = (u: UniverseProfile) => {
    const forked: UniverseProfile = {
      ...u,
      id: `uni_fork_${Date.now()}`,
      name: `${u.name} (Forked Branch)`,
      author: 'You (Forked)',
      forks: 0,
      likes: 1,
    };
    setUniverses((prev) => [forked, ...prev]);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>COMMUNITY DISCOVERY & MARKETPLACE</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Explore Public Universes & Timelines
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Discover user-created alternate histories, sci-fi worlds, and mystery cases. Fork any universe to build your own reality.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'text-slate-400 hover:text-slate-200 bg-space-900/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Universes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((uni) => (
          <div
            key={uni.id}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {uni.category}
                </span>
                <EvidenceBadge level="FICTIONAL" size="sm" />
              </div>

              <h3 className="text-lg font-mono font-bold text-slate-100">{uni.name}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{uni.tagline}</p>
              <div className="text-[11px] font-mono text-slate-400 mt-2">Creator: {uni.author}</div>
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-4 text-slate-400">
                <button
                  onClick={() => handleLike(uni.id)}
                  className="flex items-center gap-1 hover:text-rose-400 transition-colors"
                >
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>{uni.likes}</span>
                </button>
                <span className="flex items-center gap-1">
                  <Bookmark className="w-4 h-4 text-amber-400" />
                  <span>{uni.saves}</span>
                </span>
              </div>

              <button
                onClick={() => handleFork(uni)}
                className="cyber-button px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5"
              >
                <GitFork className="w-3.5 h-3.5 text-cyan-300" />
                <span>Fork Universe</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
