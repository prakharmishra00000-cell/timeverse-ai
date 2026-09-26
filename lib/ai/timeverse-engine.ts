import { TimelineBranch, FutureSimulation, ParallelLifeSimulation, ButterflyEffectChain, UniverseProfile } from '@/types/timeverse';

/**
 * TIMEVERSE AI Engine — Real Gemini API Integration via Server Route
 * Routes through /api/gemini to access process.env.GEMINI_API_KEY securely on Render/Vercel.
 */

function getCustomKey(): string | null {
  if (typeof window !== 'undefined') {
    const userKey = localStorage.getItem('gemini_api_key');
    if (userKey && userKey.trim()) return userKey.trim();
  }
  return null;
}

async function callGeminiApi(systemPrompt: string, userPrompt: string): Promise<string | null> {
  const customKey = getCustomKey();

  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemPrompt,
        userPrompt,
        customKey,
      }),
    });

    if (!response.ok) {
      console.warn('/api/gemini responded with status:', response.status);
      return null;
    }

    const data = await response.json();
    return data.result || null;
  } catch (err) {
    console.warn('/api/gemini call failed, falling back to simulation engine:', err);
    return null;
  }
}

/**
 * Live Time Companion AI Chat with Gemini
 */
export async function chatWithTimeCompanion(
  userQuery: string,
  contextName: string,
  contextType: string
): Promise<string> {
  const systemPrompt = `You are the TIMEVERSE AI Time Companion — an advanced, articulate, sci-fi temporal laboratory assistant.
You are currently assisting a time traveler exploring the space: "${contextName}" (${contextType}).
Provide concise, insightful, atmospheric answers (2-4 sentences max). Offer temporal vectors and causal insights.`;

  const geminiText = await callGeminiApi(systemPrompt, userQuery);
  if (geminiText) return geminiText;

  // Fallback
  return `[Context: ${contextName}]\nAnalyzing temporal vectors for "${userQuery}"...\n\nBased on the causality matrix of ${contextName}, this shift alters local economic structures by ~34% and introduces a new branch node. Would you like to save this branch to your Universe profile?`;
}

/**
 * 1. Alternate Timeline Generator (Real Gemini API)
 */
export async function generateAlternateTimelineBranch(
  eventPrompt: string,
  pivotYear: number
): Promise<TimelineBranch> {
  const systemPrompt = `You are the TIMEVERSE AI Causal Branching Engine. Generate a hypothetical alternate timeline based on the user's pivot event prompt and divergence year.
Return ONLY valid raw JSON with this exact structure (no markdown codeblocks):
{
  "name": "Timeline Name",
  "divergencePoint": "Detailed description of the initial split",
  "nodes": [
    {
      "year": ${pivotYear},
      "title": "Pivot Title",
      "description": "Short immediate effect",
      "overview": "Detailed overview of initial 12 months",
      "keyChanges": ["Change 1", "Change 2", "Change 3"],
      "affectedDomains": { "Society": "...", "Economy": "..." }
    },
    {
      "year": ${pivotYear + 10},
      "title": "10-Year Ripple Effect",
      "description": "Secondary institutional shifts"
    },
    {
      "year": ${pivotYear + 50},
      "title": "50-Year Paradigm Shift",
      "description": "Half-century technological & societal standard"
    },
    {
      "year": ${pivotYear + 100},
      "title": "100-Year Alternative Civilization",
      "description": "Centennial planetary culture"
    }
  ]
}`;

  const geminiRaw = await callGeminiApi(systemPrompt, `Pivot Event: "${eventPrompt}" in Year ${pivotYear}`);

  if (geminiRaw) {
    try {
      const cleanJson = geminiRaw.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      const branchId = `br_gemini_${Date.now()}`;

      return {
        id: branchId,
        name: parsed.name || `Timeline: ${eventPrompt.slice(0, 30)}`,
        pivotYear,
        pivotEvent: eventPrompt,
        divergencePoint: parsed.divergencePoint || `History diverges at ${pivotYear}.`,
        color: '#a855f7',
        nodes: (parsed.nodes || []).map((node: any, idx: number) => ({
          id: `node_gemini_${pivotYear}_${idx}`,
          year: node.year || pivotYear + idx * 25,
          title: node.title || `Node ${idx + 1}`,
          description: node.description || 'Simulated temporal divergence.',
          evidenceLevel: idx === 0 ? 'HYPOTHETICAL' : 'SPECULATIVE',
          confidenceScore: Math.max(90 - idx * 12, 45),
          impactCategory: idx === 0 ? 'Technology' : idx === 1 ? 'Economy' : idx === 2 ? 'Society' : 'Environment',
          branchName: parsed.name || 'Alternative Timeline',
          x: 100 + idx * 200,
          y: 200,
          details: node.overview ? {
            overview: node.overview,
            keyChanges: node.keyChanges || ['Institutional shift', 'Capital reallocation'],
            affectedDomains: node.affectedDomains || { 'Society': 'Public opinion transforms.' }
          } : undefined,
        })),
      };
    } catch (e) {
      console.warn('Failed to parse Gemini JSON output, falling back:', e);
    }
  }

  // Fallback Simulator Engine
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    id: `br_${Date.now()}`,
    name: `Timeline: ${eventPrompt.slice(0, 30)}...`,
    pivotYear,
    pivotEvent: eventPrompt,
    divergencePoint: `History diverges sharply at ${pivotYear} due to ${eventPrompt}.`,
    color: '#a855f7',
    nodes: [
      {
        id: `node_${pivotYear}_1`,
        year: pivotYear,
        title: `Pivot: ${eventPrompt.slice(0, 25)}`,
        description: `Immediate outcome: ${eventPrompt} takes place, altering regional capital and technical paradigms.`,
        evidenceLevel: 'HYPOTHETICAL',
        confidenceScore: 88,
        impactCategory: 'Technology',
        branchName: 'Alternative Timeline',
        x: 100,
        y: 200,
        details: {
          overview: 'The initial divergence disrupts traditional historical trajectory within 12 months.',
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
        description: 'A decade later, secondary effects mature into permanent institutional shifts.',
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
        description: 'Half a century on, an entirely distinct civilization standard emerges.',
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
        description: 'Centennial outcome: Planetary culture is unrecognizable from the baseline 21st century.',
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

/**
 * 2. Future Scenario Simulator (Real Gemini API)
 */
export async function simulateFutureScenario(
  startingYear: number,
  destinationYear: number,
  location: string,
  aiLevel: string,
  energyTech: string
): Promise<FutureSimulation> {
  const systemPrompt = `You are the TIMEVERSE AI Future Simulator. Generate a multi-stage speculative future city scenario.
Return ONLY valid raw JSON with this exact structure (no markdown formatting codeblocks):
{
  "title": "${location} ${destinationYear}: Speculative Scenario",
  "stages": [
    {
      "year": ${startingYear + 5},
      "headline": "Headline...",
      "technology": "...",
      "transportation": "...",
      "energy": "...",
      "cities": "...",
      "education": "...",
      "economy": "...",
      "work": "...",
      "healthcare": "...",
      "spaceExploration": "...",
      "dailyLife": "..."
    },
    {
      "year": ${destinationYear},
      "headline": "Headline...",
      "technology": "...",
      "transportation": "...",
      "energy": "...",
      "cities": "...",
      "education": "...",
      "economy": "...",
      "work": "...",
      "healthcare": "...",
      "spaceExploration": "...",
      "dailyLife": "..."
    }
  ]
}`;

  const userPrompt = `Simulate ${location} in ${destinationYear}. AI Level: ${aiLevel}, Energy Tech: ${energyTech}`;
  const geminiRaw = await callGeminiApi(systemPrompt, userPrompt);

  if (geminiRaw) {
    try {
      const cleanJson = geminiRaw.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return {
        id: `fut_gemini_${Date.now()}`,
        title: parsed.title || `${location} ${destinationYear}: Speculative Scenario`,
        startingYear,
        destinationYear,
        location,
        aiDevelopment: aiLevel,
        climateAssumptions: 'Atmospheric Geo-Engineering & Micro-Climate Domes',
        energyTech,
        spaceTech: 'Lunar Helium-3 Mining & Orbital Relays',
        populationTrend: 'Optimized Urban Density with Zero Carbon Output',
        disclaimer: 'Labelled strictly as a Gemini AI speculative simulation, not a factual forecast.',
        stages: parsed.stages || [],
      };
    } catch (e) {
      console.warn('Failed to parse Gemini Future simulation JSON, falling back:', e);
    }
  }

  // Fallback
  await new Promise((resolve) => setTimeout(resolve, 800));
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

/**
 * 3. Butterfly Effect Generator (Real Gemini API)
 */
export async function generateButterflyEffect(triggerInput: string): Promise<ButterflyEffectChain> {
  const systemPrompt = `You are the TIMEVERSE AI Butterfly Effect Engine. Calculate cascading consequences of a single historical pivot change.
Return ONLY valid raw JSON with this exact structure (no markdown formatting codeblocks):
{
  "immediateEffects": ["...", "..."],
  "technologyEffects": ["...", "..."],
  "economicEffects": ["...", "..."],
  "socialEffects": ["...", "..."],
  "politicalEffects": ["...", "..."],
  "culturalEffects": ["...", "..."],
  "longTermConsequences": ["..."]
}`;

  const geminiRaw = await callGeminiApi(systemPrompt, `Pivot Trigger: "${triggerInput}"`);

  if (geminiRaw) {
    try {
      const cleanJson = geminiRaw.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return {
        id: `bf_gemini_${Date.now()}`,
        trigger: triggerInput,
        immediateEffects: parsed.immediateEffects || [],
        technologyEffects: parsed.technologyEffects || [],
        economicEffects: parsed.economicEffects || [],
        socialEffects: parsed.socialEffects || [],
        politicalEffects: parsed.politicalEffects || [],
        culturalEffects: parsed.culturalEffects || [],
        longTermConsequences: parsed.longTermConsequences || [],
      };
    } catch (e) {
      console.warn('Failed to parse Gemini Butterfly effect JSON:', e);
    }
  }

  // Fallback
  await new Promise((resolve) => setTimeout(resolve, 600));
  return {
    id: `bf_${Date.now()}`,
    trigger: triggerInput,
    immediateEffects: [
      `Initial disruption: ${triggerInput} immediately shifts research and investment priorities within 6 months.`,
      `Regulatory bodies rush to draft frameworks governing this new paradigm.`
    ],
    technologyEffects: [
      `Next-generation engineering platforms adapt to leverage ${triggerInput.slice(0, 30)}.`,
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

/**
 * 4. Universe Builder (Real Gemini API)
 */
export async function generateUniverse(prompt: string): Promise<UniverseProfile> {
  const systemPrompt = `You are the TIMEVERSE AI Universe Builder. Generate a complete fictional world profile based on the user prompt.
Return ONLY valid raw JSON with this exact structure (no markdown codeblocks):
{
  "name": "Universe Name",
  "tagline": "Short tagline...",
  "originEvent": "Origin Event Name",
  "category": "Sci-Fi",
  "worldOverview": {
    "geography": "...",
    "civilization": "...",
    "technology": "...",
    "government": "...",
    "culture": "...",
    "language": "..."
  },
  "characters": [{ "name": "...", "role": "...", "bio": "..." }],
  "factions": [{ "name": "...", "ideology": "...", "influence": "High" }],
  "locations": [{ "name": "...", "region": "...", "features": "..." }],
  "timelineEvents": [{ "year": "Year 0", "title": "Genesis", "detail": "..." }]
}`;

  const geminiRaw = await callGeminiApi(systemPrompt, `World Prompt: "${prompt}"`);

  if (geminiRaw) {
    try {
      const cleanJson = geminiRaw.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return {
        id: `uni_gemini_${Date.now()}`,
        name: parsed.name || prompt.slice(0, 30),
        tagline: parsed.tagline || prompt,
        originEvent: parsed.originEvent || 'Genesis Event',
        currentYear: 'Year of the Cosmos 4200',
        author: 'You (Gemini AI World Weaver)',
        isPublic: true,
        likes: 1,
        saves: 1,
        forks: 0,
        category: (parsed.category as any) || 'Sci-Fi',
        worldOverview: parsed.worldOverview || {
          geography: 'Floating archipelagos',
          civilization: 'Cybernetic humanoids',
          technology: 'Zero-point energy',
          government: 'Council of Architects',
          culture: 'Resonance festivals',
          language: 'Quantum telemetric',
        },
        characters: parsed.characters || [{ name: 'Architect Orion', role: 'World Weaver', bio: 'Founder' }],
        factions: parsed.factions || [{ name: 'Resonance Seekers', ideology: 'Planetary harmony', influence: 'High' }],
        locations: parsed.locations || [{ name: 'Crystal Spire', region: 'Stratosphere', features: 'Energy focus' }],
        timelineEvents: parsed.timelineEvents || [{ year: 'Year 0', title: 'Genesis', detail: prompt }],
      };
    } catch (e) {
      console.warn('Failed to parse Gemini Universe JSON:', e);
    }
  }

  // Fallback
  await new Promise((resolve) => setTimeout(resolve, 800));
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
