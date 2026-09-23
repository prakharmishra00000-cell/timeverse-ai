export type EvidenceLevel = 
  | 'DOCUMENTED' 
  | 'AI RECONSTRUCTION' 
  | 'HYPOTHETICAL' 
  | 'SPECULATIVE' 
  | 'FICTIONAL';

export interface EvidenceBadgeInfo {
  label: EvidenceLevel;
  color: string; // TailWind color string
  bgColor: string;
  borderColor: string;
  dotColor: string;
  description: string;
}

export interface TimelineNode {
  id: string;
  year: number | string;
  title: string;
  description: string;
  evidenceLevel: EvidenceLevel;
  confidenceScore?: number; // 0 to 100
  sources?: string[];
  impactCategory?: 'Technology' | 'Economy' | 'Culture' | 'Warfare' | 'Society' | 'Environment' | 'Space' | 'Transportation' | 'Communication' | 'Physics' | 'Politics' | 'Science';
  parentId?: string | null;
  childrenIds?: string[];
  x?: number;
  y?: number;
  branchName?: string;
  details?: {
    overview: string;
    keyChanges: string[];
    affectedDomains: Record<string, string>;
  };
}

export interface TimelineBranch {
  id: string;
  name: string;
  pivotYear: number | string;
  pivotEvent: string;
  divergencePoint: string;
  color: string;
  nodes: TimelineNode[];
}

export interface Timeline {
  id: string;
  title: string;
  description: string;
  originalYear: number | string;
  branches: TimelineBranch[];
  createdAt: string;
}

export interface FutureStage {
  year: number;
  headline: string;
  technology: string;
  transportation: string;
  energy: string;
  cities: string;
  education: string;
  economy: string;
  work: string;
  healthcare: string;
  spaceExploration: string;
  dailyLife: string;
}

export interface FutureSimulation {
  id: string;
  title: string;
  startingYear: number;
  destinationYear: number;
  location: string;
  aiDevelopment: string; // Low, High, Superintelligence
  climateAssumptions: string;
  energyTech: string;
  spaceTech: string;
  populationTrend: string;
  stages: FutureStage[];
  disclaimer: string;
}

export interface LifeTrajectory {
  pathName: string;
  pathType: 'Career' | 'Entrepreneurship' | 'Higher Education' | 'Creative' | 'Nomad';
  summary: string;
  milestones: {
    yearOffset: number; // 1, 3, 5, 10, 20
    headline: string;
    skillsAcquired: string[];
    lifestyle: string;
    opportunities: string[];
    challenges: string[];
  }[];
}

export interface ParallelLifeSimulation {
  id: string;
  userName: string;
  currentAge: number;
  skills: string[];
  career: string;
  goals: string[];
  trajectories: LifeTrajectory[];
}

export interface ButterflyEffectChain {
  id: string;
  trigger: string;
  immediateEffects: string[];
  technologyEffects: string[];
  economicEffects: string[];
  socialEffects: string[];
  politicalEffects: string[];
  culturalEffects: string[];
  longTermConsequences: string[];
}

export interface DetectiveClue {
  id: string;
  name: string;
  yearFound: number | string;
  location: string;
  description: string;
  imagePrompt?: string;
  discovered: boolean;
}

export interface SuspectProfile {
  id: string;
  name: string;
  role: string;
  era: string;
  alibi: string;
  motive: string;
  dialogueSamples: string[];
}

export interface DetectiveCase {
  id: string;
  caseNumber: string;
  year: number;
  location: string;
  title: string;
  objective: string;
  briefing: string;
  clues: DetectiveClue[];
  suspects: SuspectProfile[];
  missionObjectives: { id: string; text: string; completed: boolean }[];
  status: 'ACTIVE' | 'SOLVED' | 'FAILED';
  score: number;
}

export type TemporalModel = 'Fixed Timeline' | 'Branching Timeline' | 'Multiverse' | 'Self-Consistent Timeline';

export interface ParadoxConcept {
  id: string;
  name: string;
  type: TemporalModel;
  scenarioPrompt: string;
  explanation: string;
  consequencesByModel: Record<TemporalModel, string>;
  causalityNodes: { id: string; label: string; loopEdgeId?: string }[];
}

export interface CityEra {
  year: number | string;
  eraName: string;
  population: string;
  architectureStyle: string;
  transportation: string;
  keyEvents: string[];
  technologyLevel: string;
  dailyLife: string;
  economy: string;
  culture: string;
  mapOverlayDescription: string;
}

export interface HistoricalCity {
  id: string;
  name: string;
  country: string;
  description: string;
  eras: CityEra[];
}

export interface InventionComparison {
  id: string;
  invention: string;
  realInventionYear: number;
  hypotheticalYear: number;
  realHistorySummary: string;
  alternateHistorySummary: string;
  impactDomains: {
    category: 'Technology' | 'Economy' | 'Education' | 'Communication' | 'Warfare' | 'Transportation' | 'Culture' | 'Business';
    realWorld: string;
    alternativeWorld: string;
  }[];
}

export interface UniverseProfile {
  id: string;
  name: string;
  tagline: string;
  originEvent: string;
  currentYear: string;
  author: string;
  isPublic: boolean;
  likes: number;
  saves: number;
  forks: number;
  coverImage?: string;
  category: 'Sci-Fi' | 'Alternate History' | 'Fantasy' | 'Cyberpunk' | 'Future' | 'Educational';
  worldOverview: {
    geography: string;
    civilization: string;
    technology: string;
    government: string;
    culture: string;
    language: string;
  };
  characters: { name: string; role: string; bio: string }[];
  factions: { name: string; ideology: string; influence: string }[];
  locations: { name: string; region: string; features: string }[];
  timelineEvents: { year: string; title: string; detail: string }[];
}

export interface MemoryItem {
  id: string;
  year: number;
  date: string;
  title: string;
  description: string;
  tags: string[];
  mediaType?: 'photo' | 'note' | 'document' | 'journal';
  mediaUrl?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  level: number;
  xp: number;
  nextLevelXp: number;
  avatarUrl: string;
  achievements: { id: string; title: string; icon: string; unlockedAt: string }[];
  savedItemsCount: number;
  createdUniversesCount: number;
}
