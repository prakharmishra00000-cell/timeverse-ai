'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, Clock, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="h-16 border-b border-white/5 bg-space-950/70 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30 ml-0 md:ml-64">
      {/* Search Input Form */}
      <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search timelines, universes, historical events..."
          className="w-full pl-10 pr-4 py-1.5 rounded-full text-xs glass-input text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-cyan-500"
        />
      </form>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Temporal Anchor Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
          <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>CURRENT ERA: 2026 CE</span>
        </div>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-colors relative"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        </button>

        {/* Action button */}
        <button
          onClick={() => router.push('/dashboard/alternate')}
          className="cyber-button px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-2 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Create Branch</span>
        </button>
      </div>
    </header>
  );
};
