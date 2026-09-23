'use client';

import React, { useState } from 'react';
import { EvidenceBadge } from '@/components/ui/Badge';
import { DEMO_TIMELINE } from '@/lib/store/demo-data';
import { Hourglass, Search, Calendar, Landmark, Info, BookOpen, Layers } from 'lucide-react';
import { EvidenceLevel } from '@/types/timeverse';

export default function TimeMachinePage() {
  const [selectedEra, setSelectedEra] = useState<number>(1989);
  const [searchQuery, setSearchQuery] = useState('');

  const historicalEvents = [
    {
      year: 1989,
      title: 'Publication of World Wide Web Proposal',
      description: 'Tim Berners-Lee submits "Information Management: A Proposal" at CERN, establishing hyper-text markup.',
      level: 'DOCUMENTED' as EvidenceLevel,
      confidence: 99,
      sources: ['CERN Archives', 'W3C Historical Records'],
      category: 'Technology',
    },
    {
      year: 1947,
      title: 'Indian Independence & Partition',
      description: 'The Indian Independence Act comes into effect, ending British Crown rule and establishing independent India and Pakistan.',
      level: 'DOCUMENTED' as EvidenceLevel,
      confidence: 100,
      sources: ['National Archives of India', 'British Parliamentary Records'],
      category: 'Politics',
    },
    {
      year: 1893,
      title: 'Nikola Tesla Demonstrates Wireless High-Frequency Power',
      description: 'Demonstrations of vacuum tube lighting powered wirelessly via electrostatic induction at St. Louis.',
      level: 'DOCUMENTED' as EvidenceLevel,
      confidence: 97,
      sources: ['IEEE Historical Milestones', 'Franklin Institute Proceedings'],
      category: 'Physics',
    },
    {
      year: 1850,
      title: 'Industrial Revolution Expansion & Telegraph Networks',
      description: 'Submarine telegraph cables laid across the English Channel, linking European financial hubs.',
      level: 'DOCUMENTED' as EvidenceLevel,
      confidence: 98,
      sources: ['Museum of Communication', 'Royal Society Annals'],
      category: 'Communication',
    },
    {
      year: 1687,
      title: 'Publication of Newton’s Philosophiæ Naturalis Principia Mathematica',
      description: 'Formulates the laws of motion and universal gravitation, laying the foundation of classical mechanics.',
      level: 'DOCUMENTED' as EvidenceLevel,
      confidence: 100,
      sources: ['Royal Society Library', 'Cambridge Manuscripts'],
      category: 'Science',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
            <Hourglass className="w-3.5 h-3.5 text-cyan-400" />
            <span>PAST EXPLORER</span>
          </div>
          <h1 className="text-3xl font-mono font-extrabold text-slate-100">
            Documented History Explorer
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
            Explore verified historical events backed by primary sources. Every claim is tagged with an authoritative evidence badge.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search historical record..."
            className="w-full pl-9 pr-4 py-1.5 rounded-xl glass-input text-xs"
          />
        </div>
      </div>

      {/* Legend for Evidence Badges */}
      <div className="p-4 rounded-2xl glass-panel border border-white/10">
        <h3 className="text-xs font-mono font-bold text-slate-300 mb-3 flex items-center gap-2">
          <Info className="w-4 h-4 text-cyan-400" />
          <span>EVIDENCE CLASSIFICATION BADGES</span>
        </h3>
        <div className="flex flex-wrap gap-4">
          <EvidenceBadge level="DOCUMENTED" showDescription />
          <EvidenceBadge level="AI RECONSTRUCTION" showDescription />
          <EvidenceBadge level="HYPOTHETICAL" showDescription />
          <EvidenceBadge level="SPECULATIVE" showDescription />
          <EvidenceBadge level="FICTIONAL" showDescription />
        </div>
      </div>

      {/* Historical Timeline List */}
      <div className="space-y-4">
        {historicalEvents.map((evt, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-space-900 border border-cyan-500/30 font-mono font-bold text-cyan-300 text-lg">
                {evt.year}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="text-base font-bold text-slate-100">{evt.title}</h3>
                  <EvidenceBadge level={evt.level} size="sm" />
                </div>
                <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">{evt.description}</p>

                <div className="flex flex-wrap items-center gap-3 mt-3 text-[11px] font-mono text-slate-400">
                  <span className="text-cyan-400">Category: {evt.category}</span>
                  <span>•</span>
                  <span>CONFIDENCE: {evt.confidence}%</span>
                  <span>•</span>
                  <span>SOURCES: {evt.sources.join(', ')}</span>
                </div>
              </div>
            </div>

            <button className="cyber-button px-4 py-2 rounded-xl text-xs flex items-center gap-2 self-end md:self-center">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Record</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
