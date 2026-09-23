import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EvidenceLevel, EvidenceBadgeInfo } from '@/types/timeverse';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EVIDENCE_BADGE_MAP: Record<EvidenceLevel, EvidenceBadgeInfo> = {
  'DOCUMENTED': {
    label: 'DOCUMENTED',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-950/60',
    borderColor: 'border-emerald-500/40',
    dotColor: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
    description: 'Verified historical record backed by primary sources & academic consensus.',
  },
  'AI RECONSTRUCTION': {
    label: 'AI RECONSTRUCTION',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-950/60',
    borderColor: 'border-cyan-500/40',
    dotColor: 'bg-cyan-400 shadow-[0_0_8px_#00f0ff]',
    description: 'Algorithmic synthesis and historical filling of unrecorded detail.',
  },
  'HYPOTHETICAL': {
    label: 'HYPOTHETICAL',
    color: 'text-purple-400',
    bgColor: 'bg-purple-950/60',
    borderColor: 'border-purple-500/40',
    dotColor: 'bg-purple-400 shadow-[0_0_8px_#a855f7]',
    description: 'Reasoned counterfactual extrapolation based on physical and social dynamics.',
  },
  'SPECULATIVE': {
    label: 'SPECULATIVE',
    color: 'text-amber-400',
    bgColor: 'bg-amber-950/60',
    borderColor: 'border-amber-500/40',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_#f59e0b]',
    description: 'High-variance future projection or theoretical scenario with high uncertainty.',
  },
  'FICTIONAL': {
    label: 'FICTIONAL',
    color: 'text-rose-400',
    bgColor: 'bg-rose-950/60',
    borderColor: 'border-rose-500/40',
    dotColor: 'bg-rose-400 shadow-[0_0_8px_#f43f5e]',
    description: 'Purely imaginative world-building or alternate physics concept.',
  },
};
