'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, GitBranch, Globe, Hourglass, Key, Brain } from 'lucide-react';
import { EvidenceBadge } from '@/components/ui/Badge';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = [
    { type: 'Timeline', title: 'What if the Internet was never invented?', year: '1989 Divergence', href: '/dashboard/alternate', badge: 'HYPOTHETICAL' as const },
    { type: 'Universe', title: 'Sub-Oceania: The Deep Abyssal Empire', year: 'Era 3400', href: '/dashboard/universe-builder', badge: 'FICTIONAL' as const },
    { type: 'Historical Era', title: 'Delhi Shahjahanabad Era', year: '1800 CE', href: '/dashboard/city-time-machine', badge: 'DOCUMENTED' as const },
    { type: 'Detective Case', title: 'The Missing Tesla Wardenclyffe Prototype', year: '1893 CE', href: '/dashboard/detective', badge: 'AI RECONSTRUCTION' as const },
    { type: 'Future Scenario', title: 'Delhi 2100 Bio-Architectural Megacity', year: '2100 CE', href: '/dashboard/future', badge: 'SPECULATIVE' as const },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
          <Search className="w-3.5 h-3.5 text-cyan-400" />
          <span>GLOBAL TEMPORAL SEARCH</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Search Results for "{query || 'All Content'}"
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Searching across documented history, alternate timelines, speculative future scenarios, universes, and private memory vaults.
        </p>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.map((res, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-950 text-cyan-300 border border-white/10">
                  {res.type}
                </span>
                <span className="text-xs font-mono text-slate-400">{res.year}</span>
                <EvidenceBadge level={res.badge} size="sm" />
              </div>
              <h3 className="text-sm font-bold text-slate-100">{res.title}</h3>
            </div>

            <a
              href={res.href}
              className="cyber-button px-3.5 py-1.5 rounded-xl text-xs"
            >
              Open Result
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalSearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs font-mono text-cyan-400">Loading search engine...</div>}>
      <SearchContent />
    </Suspense>
  );
}
