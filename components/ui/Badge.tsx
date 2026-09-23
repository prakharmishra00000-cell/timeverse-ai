import React from 'react';
import { EvidenceLevel } from '@/types/timeverse';
import { EVIDENCE_BADGE_MAP } from '@/lib/utils';
import { Info } from 'lucide-react';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  showDescription?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  level,
  showDescription = false,
  size = 'md',
  className = '',
}) => {
  const badgeInfo = EVIDENCE_BADGE_MAP[level] || EVIDENCE_BADGE_MAP['DOCUMENTED'];

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-2',
    lg: 'text-sm px-3.5 py-1.5 gap-2.5',
  }[size];

  return (
    <div className="group relative inline-flex items-center">
      <span
        className={`inline-flex items-center rounded-full font-mono font-medium border transition-all ${badgeInfo.bgColor} ${badgeInfo.borderColor} ${badgeInfo.color} ${sizeClasses} ${className}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${badgeInfo.dotColor}`} />
        <span>{badgeInfo.label}</span>
      </span>

      {/* Hover Tooltip explaining status */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        <div className="glass-panel p-2.5 rounded-lg text-xs text-slate-200 shadow-xl border border-cyan-500/30">
          <div className="flex items-center gap-1.5 font-bold mb-1 text-slate-100">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>{badgeInfo.label}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{badgeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};
