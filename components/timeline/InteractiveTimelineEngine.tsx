'use client';

import React, { useState } from 'react';
import { Timeline, TimelineNode, TimelineBranch } from '@/types/timeverse';
import { EvidenceBadge } from '@/components/ui/Badge';
import { ZoomIn, ZoomOut, RefreshCw, GitBranch, Share2, Bookmark, Sparkles, X, ChevronRight } from 'lucide-react';

interface InteractiveTimelineEngineProps {
  timeline: Timeline;
  onNodeSelect?: (node: TimelineNode) => void;
  onCreateBranch?: (node: TimelineNode) => void;
}

export const InteractiveTimelineEngine: React.FC<InteractiveTimelineEngineProps> = ({
  timeline,
  onNodeSelect,
  onCreateBranch,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedNode, setSelectedNode] = useState<TimelineNode | null>(
    timeline.branches[0]?.nodes[0] || null
  );
  const [activeBranchId, setActiveBranchId] = useState<string>(timeline.branches[0]?.id || '');

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.6));
  const handleResetZoom = () => setZoomLevel(1);

  const activeBranch = timeline.branches.find((b) => b.id === activeBranchId) || timeline.branches[0];

  return (
    <div className="relative w-full rounded-2xl glass-panel border border-cyan-500/30 overflow-hidden flex flex-col h-[620px]">
      {/* Timeline Controls & Header */}
      <div className="p-4 border-b border-white/10 bg-space-900/90 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-cyan-400" />
            {timeline.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5 max-w-xl truncate">{timeline.description}</p>
        </div>

        {/* Branch Tabs & Zoom Toolbar */}
        <div className="flex items-center gap-3">
          {/* Branch Switcher */}
          <div className="flex items-center gap-1 bg-space-950/80 p-1 rounded-lg border border-white/10">
            {timeline.branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                  activeBranchId === b.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-space-950/80 p-1 rounded-lg border border-white/10">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono text-slate-400 px-1">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 transition-colors"
              title="Reset View"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Node Canvas */}
      <div className="flex-1 relative overflow-x-auto overflow-y-hidden bg-space-950 bg-grid-pattern p-8 flex items-center">
        {/* Scale Container */}
        <div
          className="relative min-w-[900px] w-full flex items-center justify-start transition-transform duration-300 transform-origin-left"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Horizontal Central Spine */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/40 to-cyan-500/30 -translate-y-1/2 z-0" />

          {/* Branch Lines SVG overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path
              d="M 150 200 C 220 200, 220 320, 300 320"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Timeline Nodes List */}
          <div className="relative z-10 flex items-center justify-between w-full px-12 gap-16">
            {activeBranch.nodes.map((node, index) => {
              const isSelected = selectedNode?.id === node.id;
              const isPivot = node.branchName?.includes('Alternative') || node.evidenceLevel === 'HYPOTHETICAL';

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setSelectedNode(node);
                    onNodeSelect?.(node);
                  }}
                  className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  {/* Year Tag Above */}
                  <div className="mb-3 px-2.5 py-0.5 rounded-full bg-space-900 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-300 shadow-md">
                    {node.year}
                  </div>

                  {/* Node Circle Anchor */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                      isSelected
                        ? 'bg-cyan-500 border-white shadow-[0_0_25px_#00f0ff]'
                        : isPivot
                        ? 'bg-purple-950 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                        : 'bg-space-900 border-cyan-400/60 group-hover:border-cyan-300'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isSelected ? 'bg-space-950' : isPivot ? 'bg-purple-400' : 'bg-cyan-400'
                      }`}
                    />
                  </div>

                  {/* Node Content Card below */}
                  <div
                    className={`mt-4 w-52 p-3 rounded-xl glass-panel border transition-all text-left ${
                      isSelected
                        ? 'border-cyan-400 bg-space-900/90 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                        : 'border-white/10 group-hover:border-white/20'
                    }`}
                  >
                    <div className="mb-1.5">
                      <EvidenceBadge level={node.evidenceLevel} size="sm" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-100 line-clamp-2">{node.title}</h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{node.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Node Detail Drawer at bottom */}
      {selectedNode && (
        <div className="p-4 border-t border-cyan-500/30 bg-space-900/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 z-20">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-sm">
              {selectedNode.year}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-100">{selectedNode.title}</h3>
                <EvidenceBadge level={selectedNode.evidenceLevel} size="sm" />
              </div>
              <p className="text-xs text-slate-300 mt-1">{selectedNode.description}</p>
              {selectedNode.sources && selectedNode.sources.length > 0 && (
                <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400 font-mono">
                  <span>SOURCES:</span>
                  {selectedNode.sources.map((src, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-space-950 border border-white/10 text-slate-300">
                      {src}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onCreateBranch && (
              <button
                onClick={() => onCreateBranch(selectedNode)}
                className="cyber-button px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5"
              >
                <GitBranch className="w-3.5 h-3.5 text-cyan-300" />
                <span>Branch Here</span>
              </button>
            )}
            <button className="px-3 py-1.5 rounded-lg bg-space-800 hover:bg-white/10 text-slate-300 border border-white/10 text-xs flex items-center gap-1.5 transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
