'use client';

import React from 'react';
import { Bookmark, GitBranch, Globe, Search, ArrowRight } from 'lucide-react';
import { EvidenceBadge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function SavedItemsPage() {
  const savedItems = [
    { title: 'What if the Internet was never invented?', type: 'Alternate Timeline', href: '/dashboard/alternate', badge: 'HYPOTHETICAL' as const },
    { title: 'Delhi 2100 Bio-Architectural Megacity', type: 'Future Simulation', href: '/dashboard/future', badge: 'SPECULATIVE' as const },
    { title: 'Sub-Oceania: Deep Abyssal Empire', type: 'Alternate Universe', href: '/dashboard/universe-builder', badge: 'FICTIONAL' as const },
    { title: 'The Missing Tesla Wardenclyffe Prototype', type: 'Detective Case', href: '/dashboard/detective', badge: 'AI RECONSTRUCTION' as const },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
          <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
          <span>SAVED TEMPORAL REPOSITORIES</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Saved Timelines & Universes
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Your bookmarked historical analyses, alternate timelines, and created universes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {savedItems.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-950 text-cyan-300 border border-white/10">
                  {item.type}
                </span>
                <EvidenceBadge level={item.badge} size="sm" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
            </div>

            <Link
              href={item.href}
              className="cyber-button px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 self-start"
            >
              <span>Explore Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
