import { TimelineBranch, FutureSimulation, ParallelLifeSimulation, ButterflyEffectChain, UniverseProfile } from '@/types/timeverse';

/**
 * TIMEVERSE AI Abstraction Layer
 * Handles live generation with Gemini API hooks or dynamic fallback generators.
 */

export async function generateAlternateTimelineBranch(
  eventPrompt: string,
  pivotYear: number
): Promise<TimelineBranch> {
  // Simulate AI computation latency
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const branchId = `br_${Date.now()}`;
  const cleanPrompt = eventPrompt.trim();

  return {
    id: branchId,
    name: `Timeline: ${cleanPrompt.slice(0, 30)}...`,
    pivotYear: pivotYear,
    pivotEvent: cleanPrompt,
    divergencePoint: `History diverges sharply at ${pivotYear} due to ${cleanPrompt}.`,
    color: '#a855f7',
    nodes: [
      {
        id: `node_${pivotYear}_1`,
        year: pivotYear,
        title: `The Pivot: ${cleanPrompt.slice(0, 25)}`,
        description: `Immediate outcome: ${cleanPrompt} takes place, sending shockwaves through political and technical structures.`,
        evidenceLevel: 'HYPOTHETICAL',
        confidenceScore: 88,
        impactCategory: 'Technology',
        branchName: 'Alternative Timeline',
        x: 100,
        y: 200,
        details: {
          overview: `The initial divergence disrupts traditional historical trajectory within 12 months.`,
          keyChanges: [
            'Immediate reallocation of capital and state focus',
            'Surge in alternative engineering paradigms',
            'New trade and geopolitical alliances formed'
          ],
          affectedDomains: {
            'Society': 'Public opinion splits into early adopters vs traditionalists.',
            'Economy': 'Market volatility spikes as old industrial monopolies crumble.'
          }
        }
      },
      {
        id: `node_${pivotYear + 10}_2`,
        year: pivotYear + 10,
        title: '10-Year Ripple Effect',
        description: `A decade later, secondary effects mature into permanent institutional shifts.`,
        evidenceLevel: 'HYPOTHETICAL',
        confidenceScore: 79,
        impactCategory: 'Economy',
        branchName: 'Alternative Timeline',
        x: 300,
        y: 200,
      },
      {
        id: `node_${pivotYear + 50}_3`,
        year: pivotYear + 50,
        title: '50-Year Paradigm Shift',
        description: `Half a century on, an entirely distinct civilization standard emerges.`,
        evidenceLevel: 'SPECULATIVE',
        confidenceScore: 68,
        impactCategory: 'Society',
        branchName: 'Alternative Timeline',
        x: 500,
        y: 200,
      },
      {
        id: `node_${pivotYear + 100}_4`,
        year: pivotYear + 100,
        title: '100-Year Alternative Civilization',
        description: `Centennial outcome: Planetary culture is unrecognizable from the baseline 21st century.`,
        evidenceLevel: 'SPECULATIVE',
        confidenceScore: 55,
        impactCategory: 'Environment',
        branchName: 'Alternative Timeline',
        x: 700,
        y: 200,
      }
    ]
  };
}

export async function simulateFutureScenario(
  startingYear: number,
  destinationYear: number,
  location: string,
  aiLevel: string,
  energyTech: string
): Promise<FutureSimulation> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    id: `fut_${Date.now()}`,
    title: `${location} ${destinationYear}: Speculative Scenario`,
    startingYear,
    destinationYear,
    location,
    aiDevelopment: aiLevel,
    climateAssumptions: 'Atmospheric Geo-Engineering & Micro-Climate Domes',
    energyTech,
    spaceTech: 'Lunar Helium-3 Mining & Orbital Relays',
    populationTrend: 'Optimized Urban Density with Zero Carbon Output',
    disclaimer: 'Labelled strictly as an AI speculative simulation, not a factual forecast.',
    stages: [
      {
        year: startingYear + 5,
        headline: 'Early Infrastructure Transition',
        technology: 'Autonomous AI grid optimization & early fusion trials',
        transportation: 'Maglev transit corridors & autonomous electric fleets',
        energy: energyTech,
        cities: 'Vertical hydroponic towers & solar-glass facades',
        education: 'AI-assisted adaptive learning pods',
        economy: 'Transition to automated bio-economy',
        work: '3-day workweeks with focus on creative & social innovation',
        healthcare: 'Preventative genomic medicine & robotic surgery',
        spaceExploration: 'Permanent lunar habitat expansion',
        dailyLife: 'Air quality index stabilized; urban gardens cover 40% of roof space.',
      },
      {
        year: destinationYear,
        headline: `Fully Integrated ${destinationYear} Metropolis`,
        technology: `Quantum Mesh & ${aiLevel}`,
        transportation: 'Subterranean vacuum tube trains & sky-drones',
        energy: 'Wireless orbital solar transmission',
        cities: 'Bio-synthetic self-healing arcologies',
        education: 'Direct neural interface skill acquisition',
        economy: 'Resource-abundance universal dividend',
        work: 'Universe creation, scientific research, and deep arts',
        healthcare: 'Cellular rejuvenation extending active life to 130+ years',
        spaceExploration: 'First crewed interstellar probe launched to Alpha Centauri',
        dailyLife: 'Living in harmony with planetary ecological systems under AI co-stewardship.',
      }
    ]
  };
}

export async function generateButterflyEffect(triggerInput: string): Promise<ButterflyEffectChain> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const trigger = triggerInput.trim();

  return {
    id: `bf_${Date.now()}`,
    trigger,
    immediateEffects: [
      `Initial disruption: ${trigger} immediately shifts research and investment priorities within 6 months.`,
      `Regulatory bodies rush to draft frameworks governing this new paradigm.`
    ],
    technologyEffects: [
      `Next-generation engineering platforms adapt to leverage ${trigger.slice(0, 30)}.`,
      `Accelerated micro-chip and materials science breakthroughs.`
    ],
    economicEffects: [
      `Legacy industrial sectors experience rapid consolidation or displacement.`,
      `Surge in venture capital targeting high-yield temporal ventures.`
    ],
    socialEffects: [
      `Public adoption reaches tipping point, restructuring daily workplace habits.`,
      `Emergence of new socio-cultural norms and digital communities.`
    ],
    politicalEffects: [
      `Geopolitical realignment as nations compete for dominance in this new domain.`,
      `International treaties established to regulate cross-border impacts.`
    ],
    culturalEffects: [
      `Media, art, and philosophy reflect the changed realities of existence.`,
      `Popular literature embraces counterfactual themes inspired by the shift.`
    ],
    longTermConsequences: [
      `By the turn of the century, humanity views the prior baseline as a primitive precursor era.`
    ]
  };
}

export async function generateUniverse(prompt: string): Promise<UniverseProfile> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const title = prompt.trim().slice(0, 35);

  return {
    id: `uni_${Date.now()}`,
    name: title.length > 5 ? title : 'Aetheria Prime: Quantum Reality',
    tagline: `A world built upon: "${prompt}"`,
    originEvent: 'The Great Primordial Shift',
    currentYear: 'Year of the Cosmos 4200',
    author: 'You (Universe Creator)',
    isPublic: true,
    likes: 1,
    saves: 1,
    forks: 0,
    category: 'Sci-Fi',
    worldOverview: {
      geography: 'Floating crystal archipelagos orbiting a dual-star system.',
      civilization: 'Synthetically evolved cyber-organic humanoids.',
      technology: 'Zero-point energy arrays, sub-space instant portals.',
      government: 'Council of Sovereign Architects.',
      culture: 'Harmonic resonance light festivals.',
      language: 'Quantum-symbolic telemetry.',
    },
    characters: [
      { name: 'Architect Orion', role: 'Prime World Weaver', bio: 'Founder of the crystalline bridge grid.' }
    ],
    factions: [
      { name: 'The Resonance Seekers', ideology: 'Harmonizing planetary frequencies', influence: 'High' }
    ],
    locations: [
      { name: 'Crystal Spire of Sol', region: 'Upper Stratosphere', features: 'Focusing lens for orbital energy.' }
    ],
    timelineEvents: [
      { year: 'Year 0', title: 'Universe Genesis Event', detail: prompt }
    ]
  };
}
