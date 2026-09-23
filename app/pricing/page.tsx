'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Explorer',
      price: '$0',
      period: 'Forever Free',
      desc: 'For curious minds starting their journey through history & timelines.',
      features: [
        'Access to Documented History Explorer',
        '3 Alternate Timeline generations / month',
        'Single-stage Future Simulations',
        'Standard Evidence Badges',
        'Community Universe Exploration',
      ],
      cta: 'Get Started Free',
      highlight: false,
    },
    {
      name: 'Time Traveler',
      price: '$19',
      period: 'per month',
      desc: 'For timeline researchers and scenario architects.',
      features: [
        'Unlimited Alternate Timeline Branching',
        'Multi-stage Future Simulations (2030-2200)',
        'Parallel Lives Simulator (5 trajectories)',
        'Time Detective Missions Access',
        'Paradox Lab & Causal Loop Graph',
        'Export Timelines as Interactive Node Maps',
      ],
      cta: 'Start 14-Day Free Trial',
      highlight: true,
    },
    {
      name: 'Universe Creator',
      price: '$49',
      period: 'per month',
      desc: 'For fiction authors, world-builders, and game designers.',
      features: [
        'Everything in Time Traveler',
        'Unlimited Fictional Universe Generation',
        'Universe Dashboard & Rule Recalculation',
        'Public Creator Marketplace Publishing',
        'Custom Evidence Badge Override',
        'Priority Gemini AI Vector Compute',
      ],
      cta: 'Become Universe Creator',
      highlight: false,
    },
    {
      name: 'Studio & Team',
      price: '$149',
      period: 'per month',
      desc: 'For educational institutions, film studios & collaborative teams.',
      features: [
        'Collaborative Multi-User Universe Workspaces',
        'Custom Domain Sharing & Embed Code',
        'Enterprise Knowledge Base Vector Ingestion',
        'Dedicated Temporal Compute Pipeline',
        'API Access for Custom Game Integration',
        'Dedicated 24/7 Priority Support',
      ],
      cta: 'Contact Studio Team',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex flex-col py-12 px-6 max-w-7xl mx-auto space-y-12">
      {/* Navigation link back */}
      <div className="flex items-center justify-between">
        <Link href="/" className="font-mono text-xl font-bold tracking-wider text-glow-cyan text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>TIMEVERSE AI</span>
        </Link>
        <Link href="/dashboard" className="cyber-button px-4 py-2 rounded-xl text-xs">
          Return to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>FLEXIBLE SUBSCRIPTION PLANS</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-mono font-extrabold text-slate-100">
          Choose Your Temporal Access Level
        </h1>
        <p className="text-slate-300 text-sm font-sans">
          Unlock unlimited alternate timeline branching, future simulation stages, world building, and team collaboration.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl glass-panel border flex flex-col justify-between transition-all ${
              p.highlight
                ? 'border-cyan-400 bg-space-900/90 shadow-[0_0_30px_rgba(0,240,255,0.2)] scale-[1.03]'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-mono font-bold text-slate-100">{p.name}</h3>
                {p.highlight && (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500 text-space-950">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-3xl font-mono font-extrabold text-slate-100">{p.price}</span>
                <span className="text-xs text-slate-400 font-mono ml-1">/ {p.period}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">{p.desc}</p>

              <div className="space-y-2.5 text-xs text-slate-200">
                {p.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <Link
                href="/dashboard"
                className={`w-full py-2.5 rounded-xl text-xs font-bold text-center block transition-all ${
                  p.highlight
                    ? 'cyber-button shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-space-900 hover:bg-space-800 text-slate-200 border border-white/10'
                }`}
              >
                {p.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
