'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  GitBranch,
  Rocket,
  Search,
  TestTube,
  Globe,
  Building2,
  Compass,
  Zap,
  Play,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { DEMO_UNIVERSES } from '@/lib/store/demo-data';

export default function LandingPage() {
  const router = useRouter();
  const [cursorX, setCursorX] = useState<number>(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    setCursorX(Math.min(Math.max(xPct, 5), 95));
  };

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background Subtle Stars & Glow Effects */}
      <div className="fixed inset-0 pointer-events-none bg-dots-pattern opacity-30 z-0" />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top Navbar */}
      <nav className="w-full h-20 border-b border-white/5 bg-space-950/60 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-space-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <span className="font-mono text-2xl font-bold tracking-wider text-glow-cyan">
            TIMEVERSE<span className="text-cyan-400 text-xs ml-1 font-sans">AI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition-colors">WHAT IS TIMEVERSE</a>
          <a href="#universes" className="hover:text-cyan-400 transition-colors">UNIVERSES</a>
          <Link href="/pricing" className="hover:text-cyan-400 transition-colors">PRICING</Link>
          <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">HOW IT WORKS</a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="cyber-button px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <span>ENTER TIMEVERSE</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 max-w-6xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>NEXT-GEN TEMPORAL SIMULATION ENGINE</span>
        </div>

        {/* Main Hero Slogan */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-extrabold tracking-tight text-slate-100 max-w-4xl leading-[1.1]">
          Explore the past. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-glow-cyan">
            Alter the present.
          </span> <br />
          Simulate the future.
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
          An AI-powered universe where history, possibility and imagination collide. Create your own reality, alter pivotal moments, and explore hypothetical civilizations.
        </p>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="cyber-button px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition-all"
          >
            <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
            <span>ENTER TIMEVERSE</span>
          </Link>
          <Link
            href="/dashboard/explore"
            className="px-8 py-4 rounded-2xl bg-space-900 hover:bg-space-800 text-slate-200 border border-white/10 text-sm font-semibold flex items-center gap-2 transition-all hover:border-cyan-500/40"
          >
            <Globe className="w-4 h-4 text-purple-400" />
            <span>EXPLORE UNIVERSES</span>
          </Link>
          <a
            href="#how-it-works"
            className="px-6 py-4 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
          >
            [HOW IT WORKS]
          </a>
        </div>

        {/* Interactive Hero Timeline Visualizer */}
        <div
          onMouseMove={handleMouseMove}
          className="mt-16 w-full max-w-4xl glass-panel p-6 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative cursor-crosshair overflow-hidden"
        >
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-6 px-4">
            <span className="text-cyan-400">PAST (3000 BCE - 2025 CE)</span>
            <span className="text-purple-400">NOW (2026 CE)</span>
            <span className="text-emerald-400">FUTURE (2027 - 3000 CE)</span>
          </div>

          {/* Interactive Line & Scanner Cursor */}
          <div className="relative h-16 w-full flex items-center">
            {/* Base Glowing Spine */}
            <div className="w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-full shadow-[0_0_10px_#00f0ff]" />

            {/* Glowing Timeline Nodes */}
            <div className="absolute left-[15%] w-4 h-4 rounded-full bg-cyan-400 border-2 border-space-950 shadow-[0_0_15px_#00f0ff]" title="1850 Industrial Era" />
            <div className="absolute left-[50%] w-5 h-5 rounded-full bg-purple-400 border-2 border-space-950 shadow-[0_0_20px_#a855f7]" title="2026 Pivot Point" />
            <div className="absolute left-[85%] w-4 h-4 rounded-full bg-emerald-400 border-2 border-space-950 shadow-[0_0_15px_#10b981]" title="2100 Bio-City Era" />

            {/* Interactive Scanner Vertical Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_15px_#00f0ff] transition-all duration-75 pointer-events-none"
              style={{ left: `${cursorX}%` }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyan-500 text-space-950 text-[10px] font-mono font-bold whitespace-nowrap">
                SCANNING YEAR: {Math.round(1800 + (cursorX / 100) * 400)}
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] font-mono text-slate-400 text-center">
            ← Hover cursor over timeline to scan temporal vectors →
          </div>
        </div>
      </section>

      {/* Section 2: WHAT IS TIMEVERSE */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">[ CORE CONCEPT ]</h2>
          <h3 className="text-3xl md:text-5xl font-mono font-extrabold text-slate-100">
            "History is fixed. Possibility isn't."
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm">
            TIMEVERSE combines AI laboratory physics, timeline node graph engines, alternate history simulators, and sci-fi world-building platforms.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: GitBranch,
              title: 'Alternate Timeline Engine',
              desc: 'Alter a single historical pivot and watch 10-year, 50-year, and 100-year consequences branch out in an interactive node graph.',
              href: '/dashboard/alternate',
              color: 'text-cyan-400',
            },
            {
              icon: Rocket,
              title: 'Future Simulator',
              desc: 'Adjust energy technology, climate parameters, and AI governance levels to simulate speculative scenarios up to year 3000.',
              href: '/dashboard/future',
              color: 'text-purple-400',
            },
            {
              icon: Search,
              title: 'Time Travel Detective',
              desc: 'Solve interactive temporal mysteries. Inspect Victorian clues, interrogate simulated historical figures, and prevent paradoxes.',
              href: '/dashboard/detective',
              color: 'text-emerald-400',
            },
            {
              icon: TestTube,
              title: 'Paradox Lab',
              desc: 'Test theoretical time travel models (Fixed, Branching, Multiverse, Predestination) against Grandfather and Bootstrap loops.',
              href: '/dashboard/paradox-lab',
              color: 'text-pink-400',
            },
            {
              icon: Building2,
              title: 'Historical City Time Machine',
              desc: 'Scrub through 500 years of city evolution (Delhi, Rome, Tokyo, London) examining architecture, transit, and daily culture.',
              href: '/dashboard/city-time-machine',
              color: 'text-amber-400',
            },
            {
              icon: Globe,
              title: 'Universe Builder',
              desc: 'Generate complete fictional realities with geography, species, factions, and downstream recalculation when major rules change.',
              href: '/dashboard/universe-builder',
              color: 'text-cyan-400',
            },
          ].map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                onClick={() => router.push(f.href)}
                className="glass-panel-interactive p-6 rounded-2xl cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-space-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-slate-100 font-mono mb-2">{f.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-xs font-mono text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>LAUNCH MODULE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 bg-space-950 py-10 px-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2026 TIMEVERSE AI. All speculative scenarios clearly labelled.</div>
          <div className="flex gap-6">
            <Link href="/pricing" className="hover:text-cyan-400">Pricing</Link>
            <Link href="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
            <Link href="/dashboard/explore" className="hover:text-cyan-400">Marketplace</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
