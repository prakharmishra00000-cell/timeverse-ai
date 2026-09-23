'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Hourglass,
  GitBranch,
  Rocket,
  Globe,
  Search,
  TestTube,
  Dna,
  Zap,
  Building2,
  Lightbulb,
  Camera,
  Brain,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DEMO_USER_PROFILE } from '@/lib/store/demo-data';

export default function DashboardPage() {
  const router = useRouter();

  const primaryCards = [
    {
      title: 'PAST',
      subtitle: 'Explore documented history',
      desc: 'Probe ancient civilizations, recorded wars, and scientific breakthroughs with clear evidence indicators.',
      icon: Hourglass,
      color: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30',
      textColor: 'text-cyan-400',
      href: '/dashboard/time-machine',
    },
    {
      title: 'ALTERNATE',
      subtitle: 'Change an event',
      desc: 'Modify pivotal moments in history and generate 10-year, 50-year, and 100-year causal timelines.',
      icon: GitBranch,
      color: 'from-purple-500/20 to-pink-600/10 border-purple-500/30',
      textColor: 'text-purple-400',
      href: '/dashboard/alternate',
    },
    {
      title: 'FUTURE',
      subtitle: 'Simulate tomorrow',
      desc: 'Adjust AI governance, climate tech, and space exploration parameters to simulate years 2030 to 2200.',
      icon: Rocket,
      color: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30',
      textColor: 'text-emerald-400',
      href: '/dashboard/future',
    },
    {
      title: 'UNIVERSE',
      subtitle: 'Create a world',
      desc: 'Design complete fictional universes with custom physics, factions, geography, and characters.',
      icon: Globe,
      color: 'from-amber-500/20 to-orange-600/10 border-amber-500/30',
      textColor: 'text-amber-400',
      href: '/dashboard/universe-builder',
    },
    {
      title: 'DETECTIVE',
      subtitle: 'Solve a case',
      desc: 'Step into historical time mysteries. Inspect clues, interrogate suspects, and prevent temporal paradoxes.',
      icon: Search,
      color: 'from-rose-500/20 to-red-600/10 border-rose-500/30',
      textColor: 'text-rose-400',
      href: '/dashboard/detective',
    },
    {
      title: 'PARADOX',
      subtitle: 'Break causality',
      desc: 'Simulate Grandfather, Bootstrap, and Predestination loops across 4 theoretical time travel models.',
      icon: TestTube,
      color: 'from-indigo-500/20 to-cyan-600/10 border-indigo-500/30',
      textColor: 'text-indigo-400',
      href: '/dashboard/paradox-lab',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Hero Banner */}
      <div className="p-8 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-space-900 via-space-850 to-space-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TEMPORAL PORTAL ACTIVE</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-mono font-extrabold text-slate-100">
              Welcome back, {DEMO_USER_PROFILE.name}
            </h1>
            <p className="text-slate-300 text-sm mt-1 font-sans">
              "Where do you want to travel today?"
            </p>
          </div>

          {/* User Level & XP Banner */}
          <div className="flex items-center gap-4 bg-space-950/90 p-4 rounded-2xl border border-purple-500/30 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-200">
                LEVEL 0{DEMO_USER_PROFILE.level} TRAVELER
              </div>
              <div className="text-[11px] text-purple-300 font-mono mt-0.5">
                {DEMO_USER_PROFILE.xp} / {DEMO_USER_PROFILE.nextLevelXp} XP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Portal Cards */}
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <span>PRIMARY TEMPORAL DIMENSIONS</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {primaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => router.push(card.href)}
                className={`glass-panel p-6 rounded-2xl border cursor-pointer bg-gradient-to-br ${card.color} hover:scale-[1.02] transition-all duration-200 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold tracking-wider text-slate-100">
                      {card.title}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-space-950/80 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40">
                      <Icon className={`w-5 h-5 ${card.textColor}`} />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-1">{card.subtitle}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  <span>ENTER PORTAL</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Secondary Modules Grid */}
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <span>SPECIALIZED SIMULATION ENGINES</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: 'Parallel Lives', href: '/dashboard/parallel-lives', icon: Dna },
            { title: 'Butterfly Effect', href: '/dashboard/butterfly-effect', icon: Zap },
            { title: 'City Machine', href: '/dashboard/city-time-machine', icon: Building2 },
            { title: 'Invention Engine', href: '/dashboard/invention', icon: Lightbulb },
            { title: 'Walk History', href: '/dashboard/walk-through-history', icon: Camera },
            { title: 'Memory Vault', href: '/dashboard/memory', icon: Brain },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.title}
                href={m.href}
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 hover:bg-space-850 flex flex-col items-center text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-space-900 border border-white/10 flex items-center justify-center mb-2.5 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-200">{m.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Achievements Showcase */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10">
        <h3 className="text-sm font-mono font-bold text-slate-100 mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-400" />
          <span>UNLOCKED ACHIEVEMENTS</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {DEMO_USER_PROFILE.achievements.map((ach) => (
            <div
              key={ach.id}
              className="px-3 py-1.5 rounded-lg bg-space-900 border border-purple-500/30 text-xs font-mono text-slate-200 flex items-center gap-2"
            >
              <span>{ach.title}</span>
              <span className="text-[10px] text-slate-500">({ach.unlockedAt})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
