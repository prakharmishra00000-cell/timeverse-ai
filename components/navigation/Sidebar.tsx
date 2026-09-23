'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Hourglass,
  GitBranch,
  Dna,
  Zap,
  TestTube,
  Search,
  Building2,
  Rocket,
  Lightbulb,
  Globe,
  Camera,
  Brain,
  Compass,
  Bookmark,
  Settings,
  Sparkles,
  Award
} from 'lucide-react';
import { DEMO_USER_PROFILE } from '@/lib/store/demo-data';

const NAV_ITEMS = [
  { label: 'Home', href: '/dashboard', icon: Home },
  { label: 'Time Machine', href: '/dashboard/time-machine', icon: Hourglass },
  { label: 'Alternate Timelines', href: '/dashboard/alternate', icon: GitBranch },
  { label: 'Parallel Lives', href: '/dashboard/parallel-lives', icon: Dna },
  { label: 'Butterfly Effect', href: '/dashboard/butterfly-effect', icon: Zap },
  { label: 'Paradox Lab', href: '/dashboard/paradox-lab', icon: TestTube },
  { label: 'Time Detective', href: '/dashboard/detective', icon: Search },
  { label: 'City Time Machine', href: '/dashboard/city-time-machine', icon: Building2 },
  { label: 'Future Simulator', href: '/dashboard/future', icon: Rocket },
  { label: 'Invention Time Machine', href: '/dashboard/invention', icon: Lightbulb },
  { label: 'My Universes', href: '/dashboard/universe-builder', icon: Globe },
  { label: 'Walk Through History', href: '/dashboard/walk-through-history', icon: Camera },
  { label: 'Memory Time Machine', href: '/dashboard/memory', icon: Brain },
  { label: 'Explore', href: '/dashboard/explore', icon: Compass },
  { label: 'Saved', href: '/dashboard/saved', icon: Bookmark },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 z-40 glass-panel border-r border-cyan-500/20 flex flex-col justify-between hidden md:flex">
      {/* Brand Header */}
      <div className="p-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-space-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-mono text-xl font-bold tracking-wider text-glow-cyan text-slate-100">
              TIMEVERSE<span className="text-cyan-400 text-xs ml-1 font-sans">AI</span>
            </h1>
            <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Temporal Engine v2.4</p>
          </div>
        </Link>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/10 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Traveler XP Stats & User Profile Footer */}
      <div className="p-4 border-t border-white/5 bg-space-900/60">
        <div className="mb-3 p-2.5 rounded-lg bg-space-950/80 border border-purple-500/20">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-mono text-purple-300">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              Level {DEMO_USER_PROFILE.level}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {DEMO_USER_PROFILE.xp} / {DEMO_USER_PROFILE.nextLevelXp} XP
            </span>
          </div>
          <div className="w-full bg-space-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(DEMO_USER_PROFILE.xp / DEMO_USER_PROFILE.nextLevelXp) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={DEMO_USER_PROFILE.avatarUrl}
            alt={DEMO_USER_PROFILE.name}
            className="w-9 h-9 rounded-full object-cover border border-cyan-500/40"
          />
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-slate-200 truncate">{DEMO_USER_PROFILE.name}</div>
            <div className="text-[10px] text-slate-400 truncate">Time Traveler</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
