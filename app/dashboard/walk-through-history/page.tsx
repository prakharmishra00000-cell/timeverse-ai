'use client';

import React, { useState } from 'react';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Camera, Upload, Sliders, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function WalkThroughHistoryPage() {
  const [selectedEra, setSelectedEra] = useState<number>(1900);
  const [imageUploaded, setImageUploaded] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2">
          <Camera className="w-3.5 h-3.5 text-cyan-400" />
          <span>WALK THROUGH HISTORY</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          Visual Location Time Transition
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          Upload a photo of any landmark or location. The AI identifies the spatial coordinates and reconstructs visual time transitions.
        </p>
      </div>

      {/* Photo Upload / Analyzer Box */}
      <div className="p-8 rounded-2xl glass-panel border border-dashed border-cyan-500/40 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-400">
          <Upload className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-mono font-bold text-slate-100">Upload Location Photo</h3>
          <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, WEBP • Auto-identifies landmark & GPS metadata</p>
        </div>
        <button className="cyber-button px-5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-2">
          <span>Select Photo File</span>
        </button>
      </div>

      {/* Visual Time Transition Slider & Reconstructions */}
      <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-100 font-mono">Location Match: Red Fort & Chandni Chowk, Delhi</h3>
            <p className="text-xs text-slate-400">Identified coordinates: 28.6562° N, 77.2410° E</p>
          </div>
          <EvidenceBadge level="AI RECONSTRUCTION" size="md" />
        </div>

        {/* Era Selector Slider */}
        <div className="space-y-2">
          <label className="block text-xs font-mono text-slate-300 font-bold flex justify-between">
            <span>HISTORICAL ERA SCRUBBER</span>
            <span className="text-cyan-400 font-bold">{selectedEra} CE</span>
          </label>
          <div className="flex items-center gap-3">
            {[2026, 1900, 1850, 1700, 1638].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedEra(yr)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedEra === yr
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 bg-space-950/70 border border-white/5'
                }`}
              >
                {yr} CE
              </button>
            ))}
          </div>
        </div>

        {/* Visual Comparison Split View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 block font-bold">CURRENT PHOTO (2026)</span>
            <div className="h-64 rounded-2xl bg-space-950 border border-white/10 overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=80"
                alt="2026 Red Fort"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-space-950/80 border border-white/10 text-[10px] font-mono text-slate-300">
                Uploaded Original
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 block font-bold">AI HISTORICAL RECONSTRUCTION ({selectedEra})</span>
            <div className="h-64 rounded-2xl bg-space-950 border border-cyan-500/30 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80"
                alt="Historical Reconstruction"
                className="w-full h-full object-cover filter sepia-[0.3]"
              />
              <div className="absolute bottom-3 left-3">
                <EvidenceBadge level="AI RECONSTRUCTION" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
