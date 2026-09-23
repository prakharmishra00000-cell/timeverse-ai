'use client';

import React, { useState } from 'react';
import { DEMO_HISTORICAL_CITY } from '@/lib/store/demo-data';
import { EvidenceBadge } from '@/components/ui/Badge';
import { Building2, MapPin, Users, TramFront, Shield, Calendar, Landmark, Map } from 'lucide-react';
import { CityEra } from '@/types/timeverse';

export default function CityTimeMachinePage() {
  const [city, setCity] = useState(DEMO_HISTORICAL_CITY);
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(0);

  const era = city.eras[selectedEraIndex];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-mono text-amber-300 mb-2">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          <span>CITY TIME MACHINE</span>
        </div>
        <h1 className="text-3xl font-mono font-extrabold text-slate-100">
          {city.name} Through History ({city.country})
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans">
          {city.description}
        </p>
      </div>

      {/* Era Scrubber Controls */}
      <div className="p-6 rounded-2xl glass-panel border border-amber-500/30 space-y-4">
        <h3 className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center justify-between">
          <span>SELECT ERA YEAR MARKER</span>
          <span className="text-amber-400 font-bold">{era.year} CE — {era.eraName}</span>
        </h3>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {city.eras.map((e, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedEraIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                selectedEraIndex === idx
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 bg-space-950/70 border border-white/5'
              }`}
            >
              {e.year} CE
            </button>
          ))}
        </div>
      </div>

      {/* Selected Era Detail Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map & Architecture Overview */}
        <div className="lg:col-span-1 p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-slate-100 flex items-center gap-2">
              <Map className="w-4 h-4 text-amber-400" />
              <span>URBAN LAYOUT & MAP</span>
            </h3>
            <EvidenceBadge level="DOCUMENTED" size="sm" />
          </div>

          <div className="p-4 rounded-xl bg-space-950 border border-white/10 text-xs text-slate-300 leading-relaxed font-sans">
            {era.mapOverlayDescription}
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="font-mono text-slate-400">ESTIMATED POPULATION:</span>{' '}
              <span className="font-bold text-amber-300 font-mono">{era.population}</span>
            </div>
            <div>
              <span className="font-mono text-slate-400">ARCHITECTURE STYLE:</span>{' '}
              <span className="text-slate-200">{era.architectureStyle}</span>
            </div>
            <div>
              <span className="font-mono text-slate-400">PRIMARY TRANSIT:</span>{' '}
              <span className="text-slate-200">{era.transportation}</span>
            </div>
          </div>
        </div>

        {/* Culture, Events & Daily Life */}
        <div className="lg:col-span-2 p-6 rounded-2xl glass-panel border border-amber-500/30 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-base font-bold text-slate-100">{era.eraName} ({era.year} CE)</h3>
            <EvidenceBadge level="DOCUMENTED" size="sm" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-space-950/80 border border-white/10">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase block mb-1">
                TECHNOLOGY LEVEL:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{era.technologyLevel}</p>
            </div>

            <div className="p-4 rounded-xl bg-space-950/80 border border-white/10">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase block mb-1">
                DAILY LIFE & SOCIETY:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{era.dailyLife}</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-slate-300 uppercase block mb-2">KEY HISTORICAL EVENTS</span>
            <ul className="space-y-1.5 text-xs text-slate-200 list-disc list-inside">
              {era.keyEvents.map((evt, i) => (
                <li key={i}>{evt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
