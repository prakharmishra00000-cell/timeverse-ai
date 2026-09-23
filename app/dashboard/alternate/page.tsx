'use client';

import React, { useState } from 'react';
import { InteractiveTimelineEngine } from '@/components/timeline/InteractiveTimelineEngine';
import { DEMO_TIMELINE } from '@/lib/store/demo-data';
import { generateAlternateTimelineBranch } from '@/lib/ai/timeverse-engine';
import { GitBranch, Sparkles, SlidersHorizontal, ArrowRightLeft, Check, RefreshCw } from 'lucide-react';
import { TimelineBranch } from '@/types/timeverse';

export default function AlternateTimelinePage() {
  const [timeline, setTimeline] = useState(DEMO_TIMELINE);
  const [prompt, setPrompt] = useState('What if the Internet was never invented?');
  const [pivotYear, setPivotYear] = useState<number>(1989);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const handleGenerateBranch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    try {
      const newBranch = await generateAlternateTimelineBranch(prompt, pivotYear);
      setTimeline((prev) => ({
        ...prev,
        branches: [...prev.branches, newBranch],
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-mono text-purple-300 mb-2">
            <GitBranch className="w-3.5 h-3.5 text-purple-400" />
            <span>ALTERNATE TIMELINE ENGINE</span>
          </div>
          <h1 className="text-3xl font-mono font-extrabold text-slate-100">
            Causal Branching Simulator
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
            Change a historical pivot and calculate 10-year, 50-year, and 100-year downstream consequences in an interactive node graph.
          </p>
        </div>

        <button
          onClick={() => setShowComparison(!showComparison)}
          className="px-4 py-2 rounded-xl bg-space-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-2 hover:bg-space-850 transition-colors"
        >
          <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
          <span>{showComparison ? 'Hide Comparison' : 'Compare Timelines'}</span>
        </button>
      </div>

      {/* Generator Prompt Panel */}
      <form onSubmit={handleGenerateBranch} className="p-6 rounded-2xl glass-panel border border-purple-500/30 space-y-4">
        <h3 className="text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>CREATE HYPOTHETICAL DIVERGENCE POINT</span>
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs font-mono text-slate-400 mb-1">Pivot Event Prompt</label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. What if smartphones were invented 20 years earlier?"
              className="w-full px-4 py-2 rounded-xl glass-input text-xs"
            />
          </div>

          <div className="w-full sm:w-36">
            <label className="block text-xs font-mono text-slate-400 mb-1">Divergence Year</label>
            <input
              type="number"
              value={pivotYear}
              onChange={(e) => setPivotYear(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              disabled={isGenerating}
              className="cyber-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 h-10 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-purple-300" />
                  <span>CALCULATING TIMELINE...</span>
                </>
              ) : (
                <>
                  <GitBranch className="w-4 h-4 text-purple-300" />
                  <span>GENERATE BRANCH</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Signature Interactive Timeline Engine Canvas */}
      <InteractiveTimelineEngine
        timeline={timeline}
        onCreateBranch={(node) => {
          setPivotYear(typeof node.year === 'number' ? node.year : 2026);
          setPrompt(`What if an alternate event occurred at ${node.title}?`);
        }}
      />

      {/* Timeline Comparison View (if enabled) */}
      {showComparison && (
        <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-sm font-mono font-bold text-slate-100 flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
              <span>REAL WORLD VS ALTERNATIVE TIMELINE MATRIX</span>
            </h3>
            <span className="text-xs font-mono text-cyan-300">Comparing 2026 Outcomes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Real World Column */}
            <div className="p-4 rounded-xl bg-space-950/80 border border-cyan-500/20">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3 uppercase">REAL WORLD (Baseline)</div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Global high-speed TCP/IP packet switching network.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Screen-based social media and smartphone saturation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Cloud data center infrastructure powering generative AI models.</span>
                </li>
              </ul>
            </div>

            {/* Alternative World Column */}
            <div className="p-4 rounded-xl bg-space-950/80 border border-purple-500/20">
              <div className="text-xs font-mono font-bold text-purple-400 mb-3 uppercase">ALTERNATIVE TIMELINE A</div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>Metropolitan subterranean pneumatic document tubes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>High-frequency radio teletype shortwave financial trading.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span>Steampunk mechanical difference engines managing city logistics.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
