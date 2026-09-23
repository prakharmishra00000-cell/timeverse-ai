import {
  Timeline,
  FutureSimulation,
  ParallelLifeSimulation,
  ButterflyEffectChain,
  DetectiveCase,
  ParadoxConcept,
  HistoricalCity,
  InventionComparison,
  UniverseProfile,
  MemoryItem,
  UserProfile
} from '@/types/timeverse';

export const DEMO_USER_PROFILE: UserProfile = {
  id: 'usr_99812',
  name: 'Dr. Evelyn Vance',
  email: 'evelyn.vance@timeverse.ai',
  level: 7,
  xp: 1420,
  nextLevelXp: 2000,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  savedItemsCount: 24,
  createdUniversesCount: 3,
  achievements: [
    { id: 'ach_1', title: '🏛 Historian', icon: 'Landmark', unlockedAt: '2026-08-12' },
    { id: 'ach_2', title: '🌀 Timeline Builder', icon: 'GitBranch', unlockedAt: '2026-08-20' },
    { id: 'ach_3', title: '🔬 Paradox Explorer', icon: 'Zap', unlockedAt: '2026-09-01' },
    { id: 'ach_4', title: '🕵 Detective', icon: 'Search', unlockedAt: '2026-09-10' },
    { id: 'ach_5', title: '🌌 Universe Creator', icon: 'Globe', unlockedAt: '2026-09-18' },
    { id: 'ach_6', title: '🚀 Future Explorer', icon: 'Rocket', unlockedAt: '2026-09-22' },
  ],
};

export const DEMO_TIMELINE: Timeline = {
  id: 'tl_internet_never',
  title: 'What if the Internet was never invented?',
  description: 'Divergence Point: 1989 - Tim Berners-Lee’s proposal for the World Wide Web is rejected and lost to history. Communication evolves along mechanical, radio, and pneumatic networks.',
  originalYear: 2026,
  createdAt: '2026-09-20',
  branches: [
    {
      id: 'branch_orig',
      name: 'Original Timeline (Earth-Alpha)',
      pivotYear: 1989,
      pivotEvent: 'WWW Proposal Accepted',
      divergencePoint: 'ARPANET transitions into global TCP/IP Web.',
      color: '#00f0ff',
      nodes: [
        {
          id: 'n_orig_1989',
          year: 1989,
          title: 'Birth of the World Wide Web',
          description: 'CERN publishes the initial WWW protocol, ushering in the digital age.',
          evidenceLevel: 'DOCUMENTED',
          confidenceScore: 99,
          sources: ['CERN Historical Archive', 'W3C Consortium Records'],
          impactCategory: 'Technology',
          branchName: 'Original Timeline',
          x: 50,
          y: 150,
        },
        {
          id: 'n_orig_2000',
          year: 2000,
          title: 'Dot-Com Revolution & Global Connectivity',
          description: 'High-speed broadband spans continents; e-commerce reshapes global trade.',
          evidenceLevel: 'DOCUMENTED',
          confidenceScore: 98,
          sources: ['World Bank Tech Index', 'MIT Tech Review 2000'],
          impactCategory: 'Economy',
          branchName: 'Original Timeline',
          x: 250,
          y: 150,
        },
        {
          id: 'n_orig_2026',
          year: 2026,
          title: 'AI Paradigm & Hyper-Connected Mesh',
          description: 'Generative Neural Networks and IoT seamlessly link 8 billion devices.',
          evidenceLevel: 'DOCUMENTED',
          confidenceScore: 95,
          sources: ['IEEE Spectrum 2026', 'ACM Computing Surveys'],
          impactCategory: 'Technology',
          branchName: 'Original Timeline',
          x: 450,
          y: 150,
        },
      ]
    },
    {
      id: 'branch_alt_a',
      name: 'Timeline A: Pneumatic & Microfilm Grid',
      pivotYear: 1990,
      pivotEvent: 'WWW Proposal Vetoed at CERN',
      divergencePoint: 'Governments mandate physical paper archives & encrypted radio-teletype.',
      color: '#a855f7',
      nodes: [
        {
          id: 'n_alt_1995',
          year: 1995,
          title: 'Pneumatic Tube High-Speed Mail Networks',
          description: 'Metropolitan centers expand underground vacuum tubes delivering micro-fiche capsules within 5 minutes.',
          evidenceLevel: 'HYPOTHETICAL',
          confidenceScore: 82,
          impactCategory: 'Transportation',
          branchName: 'Timeline A',
          x: 250,
          y: 280,
          details: {
            overview: 'Without global digital packet switching, urban centers invest heavily in automated physical document distribution.',
            keyChanges: [
              'Underground pneumatic transit in London, New York, and Tokyo',
              'High-speed optical laser printing on miniature film',
              'Absence of mass social media privacy breaches'
            ],
            affectedDomains: {
              'Commerce': 'Retail relies on local catalog kiosks and pneumatic order fulfillment.',
              'Privacy': 'Personal data remains localized in encrypted physical vaults.',
              'News': 'Printed evening gazettes retain total dominance over public discourse.'
            }
          }
        },
        {
          id: 'n_alt_2015',
          year: 2015,
          title: 'High-Frequency Shortwave Data Beacons',
          description: 'Global stock exchanges trade via global shortwave radio pulses and analog computing engines.',
          evidenceLevel: 'HYPOTHETICAL',
          confidenceScore: 78,
          impactCategory: 'Economy',
          branchName: 'Timeline A',
          x: 450,
          y: 280,
        },
        {
          id: 'n_alt_2040',
          year: 2040,
          title: 'Cyber-Analog Steampunk Society',
          description: 'Quantum-mechanical brass difference engines manage city logistics without screen addiction or global malware.',
          evidenceLevel: 'SPECULATIVE',
          confidenceScore: 65,
          impactCategory: 'Society',
          branchName: 'Timeline A',
          x: 650,
          y: 280,
        },
      ]
    }
  ]
};

export const DEMO_FUTURE_SIMULATION: FutureSimulation = {
  id: 'sim_delhi_2100',
  title: 'Delhi 2100: Bio-Architectural Megacity',
  startingYear: 2026,
  destinationYear: 2100,
  location: 'Delhi NCR, India',
  aiDevelopment: 'Autonomous Superintelligence Co-Governance',
  climateAssumptions: 'Closed-Loop Atmospheric Dome Stabilization',
  energyTech: 'Sub-Surface Fusion & Orbital Solar Beams',
  spaceTech: 'Lunar Elevator Logistics Terminal',
  populationTrend: '18 Million (Stabilized Zero-Emissions Metropolis)',
  disclaimer: 'This scenario is an AI-generated speculative simulation for research & creative exploration. It does not constitute a guaranteed scientific prediction.',
  stages: [
    {
      year: 2030,
      headline: 'Autonomous Transport Grid & Vertical Canopy Initiative',
      technology: 'Level 5 Autonomous Flying Taxis & Grid Load Balancing AI',
      transportation: 'Magnetic Levitation Pods along Ring Roads',
      energy: '70% Solar-Glass Glazing & Roof Algae Micro-Reactors',
      cities: 'Vertical Forests covering Yamuna Riverfront Towers',
      education: 'Neural VR Classrooms connecting global mentors',
      economy: 'Green Tech Innovation Hub of South Asia',
      work: '4-day hybrid workweeks with AI co-pilots across all sectors',
      healthcare: 'Gene-editing clinics eradicating endemic urban asthma',
      spaceExploration: 'ISRO Commercial Orbital Hub Operations',
      dailyLife: 'Air quality index stays below 25 year-round due to smog towers.',
    },
    {
      year: 2050,
      headline: 'The Atmospheric Shield & Subterranean Logistics Network',
      technology: 'Nanotech Smog Absorption Membranes & Quantum Compute Grids',
      transportation: 'Subterranean Hyperloop linking Delhi to Mumbai in 40 minutes',
      energy: 'First Commercial Toroidal Fusion Power Plant operational in Greater Noida',
      cities: 'Sub-surface temperature-regulated underground arcologies',
      education: 'Direct Neural Sync Skill Transfer Modules',
      economy: 'Post-Scarcity Energy Credits Economy',
      work: '80% of routine logistics handled by humanoid synth-workers',
      healthcare: 'Synthetic Organ Printing & Cellular Longevity Therapeutics',
      spaceExploration: 'Permanent Moon Base Crew Exchange from Jewar Spaceport',
      dailyLife: 'Residents live in vertical bio-domes with simulated natural biomes.',
    },
    {
      year: 2100,
      headline: 'Bio-Living Metropolis & Terraformed Climate Balance',
      technology: 'Molecular Assemblers & Planetary Climate Tuning AI',
      transportation: 'Gravity-Assisted Sky-Transit Vessels',
      energy: 'Wireless Orbital Solar Transmission Beams',
      cities: 'Self-healing organic crystalline skyscrapers that absorb CO2',
      education: 'Universal Knowledge Telepathy Nodes',
      economy: 'Resource-Abundance Universal Dividend System',
      work: 'Creative exploration, universe design, and space colonizing',
      healthcare: 'Average lifespan reaches 140 active healthy years',
      spaceExploration: 'Interstellar Colony Probe Launch Command',
      dailyLife: 'Delhi becomes a global paradise of bio-architecture and ancient-futuristic harmony.',
    }
  ]
};

export const DEMO_PARALLEL_LIVES: ParallelLifeSimulation = {
  id: 'par_evelyn_paths',
  userName: 'Evelyn Vance',
  currentAge: 28,
  skills: ['AI Systems Architecture', 'Data Science', 'Creative Writing', 'Product Design'],
  career: 'Senior AI Engineer',
  goals: ['Pioneer next-gen spatial AI', 'Write a sci-fi bestseller', 'Achieve financial freedom'],
  trajectories: [
    {
      pathName: 'Path A: Deep AI Research Fellow',
      pathType: 'Career',
      summary: 'Focus strictly on fundamental frontier AI research at top international labs.',
      milestones: [
        {
          yearOffset: 1,
          headline: 'Publish breakthrough paper on Causality Neural Graphs',
          skillsAcquired: ['Tensor Physics', 'Quantum Machine Learning'],
          lifestyle: 'High focus, university lab environments, international conference keynote speaker.',
          opportunities: ['Tenure track offer at Oxford', 'Lead Scientist role at Anthropic'],
          challenges: ['High stress grants application process', 'Fierce peer review competition'],
        },
        {
          yearOffset: 5,
          headline: 'Founding Director of Autonomous Physics Lab',
          skillsAcquired: ['Lab Governance', 'Executive Leadership'],
          lifestyle: 'Splitting time between Zurich and San Francisco; publishing ground-breaking discoveries.',
          opportunities: ['Turing Award Nomination', 'Interplanetary AI Probe Advisor'],
          challenges: ['Managing large research teams', 'Ethical safety governance balancing'],
        }
      ]
    },
    {
      pathName: 'Path B: Temporal Tech Startup Founder',
      pathType: 'Entrepreneurship',
      summary: 'Launch a venture-backed startup building simulation engines for enterprise planning.',
      milestones: [
        {
          yearOffset: 1,
          headline: 'Raise $3.5M Seed Round from Sequoia & Founders Fund',
          skillsAcquired: ['Venture Fundraising', 'Equity Architecture', 'B2B Sales'],
          lifestyle: 'Fast-paced, high energy, assembling a elite team of 10 engineers.',
          opportunities: ['Y-Combinator Demo Day Top Pick', 'Fortune 500 Enterprise Pilot Contracts'],
          challenges: ['Cash runway anxiety', 'Rapid hiring and culture maintenance'],
        },
        {
          yearOffset: 5,
          headline: 'Unicorn IPO valuation & Global Expansion',
          skillsAcquired: ['Public Market Strategy', 'Global M&A'],
          lifestyle: 'Financial freedom unlocked, leading 300+ remote team across 4 continents.',
          opportunities: ['Angel Investing in Next-Gen Creators', 'Philanthropic Education Foundation'],
          challenges: ['Public shareholder quarterly expectations', 'Maintaining innovation agility'],
        }
      ]
    }
  ]
};

export const DEMO_BUTTERFLY_EFFECT: ButterflyEffectChain = {
  id: 'bf_smartphones_1987',
  trigger: 'What if Smartphones were invented 20 years earlier (in 1987)?',
  immediateEffects: [
    'Apple and IBM release the "Pocket Cyberspace Terminal" with touchscreen and 2G radio modem in late 1987.',
    'Mass production of portable micro-LCDs accelerates chip fabrication in East Asia.'
  ],
  technologyEffects: [
    'Digital photography completely replaces silver-halide film by 1991.',
    'Early mobile application stores emerge on floppy discs and cellular downloads by 1993.'
  ],
  economicEffects: [
    'Traditional newspaper print advertising collapses a decade earlier in 1994.',
    'Mobile banking and micro-transactions dominate developing markets before 1998.'
  ],
  socialEffects: [
    'Social media algorithms arrive during the early 1990s culture boom.',
    'Remote work culture emerges during the 1995 economic expansion.'
  ],
  politicalEffects: [
    'Real-time streaming citizen journalism exposes global conflicts during the early 90s.',
    'Cybersecurity legislation is passed globally in 1992.'
  ],
  culturalEffects: [
    '90s pop culture becomes hyper-curated and algorithmically customized.',
    'Cyberpunk aesthetics enter mainstream fashion and home design in 1990.'
  ],
  longTermConsequences: [
    'By 2026, humanity has already transitioned to Direct Neural Implant interfaces, bypassing handheld screens entirely.'
  ]
};

export const DEMO_DETECTIVE_CASE: DetectiveCase = {
  id: 'case_001',
  caseNumber: 'CASE #001',
  year: 1893,
  location: 'Royal Geographic Society, London, United Kingdom',
  title: 'The Missing Tesla Wardenclyffe Prototype',
  objective: 'Investigate the midnight disappearance of Nikola Tesla’s experimental wireless energy transmitter before it triggers a temporal paradox.',
  briefing: 'On November 14, 1893, during a private demonstration at the Royal Society, Tesla’s miniaturized wireless receiver mysteriously vanished from a locked brass vault. Suspicion falls on three prominent guests.',
  status: 'ACTIVE',
  score: 850,
  missionObjectives: [
    { id: 'obj_1', text: 'Inspect the locked brass vault for micro-magnetic residue.', completed: true },
    { id: 'obj_2', text: 'Interrogate Lord Harrington regarding his late-night telegram.', completed: true },
    { id: 'obj_3', text: 'Locate the hidden steam-powered telegraph receiver in the library.', completed: false },
    { id: 'obj_4', text: 'Identify the thief and recover the Wardenclyffe coil.', completed: false },
  ],
  clues: [
    {
      id: 'clue_1',
      name: 'Singed Brass Lock Mechanism',
      yearFound: 1893,
      location: 'RGS Vault Room',
      description: 'The lock shows signs of high-voltage arc melting, suggesting electrical manipulation rather than a physical key.',
      discovered: true,
    },
    {
      id: 'clue_2',
      name: 'Cryptic Telegram from Berlin',
      yearFound: 1893,
      location: 'Lord Harrington’s Coat Pocket',
      description: 'Contains coded message: "THE COIL MUST NOT REACH NEW YORK BEFORE THE EXPEDITION."',
      discovered: true,
    },
    {
      id: 'clue_3',
      name: 'Vial of Ozone-Scented Mineral Oil',
      yearFound: 1893,
      location: 'Library Balcony',
      description: 'Used exclusively to cool high-frequency Tesla transformers.',
      discovered: false,
    }
  ],
  suspects: [
    {
      id: 'susp_1',
      name: 'Lord Arthur Harrington',
      role: 'Patron of Industrial Metallurgy',
      era: 'Victorian Era (1893)',
      alibi: 'Claims he was sipping port wine in the Smoking Room with the Archbishop.',
      motive: 'Fears wireless energy will render his massive coal and copper investments worthless.',
      dialogueSamples: [
        '"My dear fellow, why would I steal a toy when I own three-quarters of the North Wales coal mines?"',
        '"Tesla is a visionary, yes, but wireless power is a danger to financial order!"'
      ]
    },
    {
      id: 'susp_2',
      name: 'Dr. Aris Thorne',
      role: 'Rival Austrian Physicist',
      era: 'Victorian Era (1893)',
      alibi: 'States he was presenting his paper on ether waves in the Main Hall.',
      motive: 'Desperate to patent the wireless apparatus under his own academic syndicate.',
      dialogueSamples: [
        '"Tesla’s mathematics are chaotic! He underestimates the resonance harmonics!"',
        '"I was nowhere near the vault! You can ask the hall porter!"'
      ]
    }
  ]
};

export const DEMO_PARADOX_CONCEPTS: ParadoxConcept[] = [
  {
    id: 'px_grandfather',
    name: 'The Grandfather Paradox',
    type: 'Branching Timeline',
    scenarioPrompt: 'A traveler voyages back to 1920 and accidentally prevents their grandfather from meeting their grandmother.',
    explanation: 'If the event is altered, the traveler would never be born. But if they were never born, who traveled back to alter the event?',
    consequencesByModel: {
      'Fixed Timeline': 'Impossibility Principle: Any action taken by the traveler in the past was already part of history. The attempt to separate the grandparents inadvertently causes them to bond.',
      'Branching Timeline': 'Temporal Bifurcation: The traveler alters Event X, causing history to branch into Timeline B. The traveler now exists in Timeline B as an orphan from another timeline.',
      'Multiverse': 'Quantum Decoherence: The traveler steps into Parallel Universe #882. Altering the past changes Universe #882 without modifying the home universe.',
      'Self-Consistent Timeline': 'Novikov Self-Consistency: Probability of grandfather prevention drops to absolute zero; gun jams or train is delayed.',
    },
    causalityNodes: [
      { id: 'node_origin', label: 'Traveler Born (2026)' },
      { id: 'node_travel', label: 'Travels to 1920' },
      { id: 'node_alter', label: 'Interferes with Grandfather' },
      { id: 'node_loop', label: 'Causal Contradiction / Branch Event', loopEdgeId: 'node_origin' }
    ]
  },
  {
    id: 'px_bootstrap',
    name: 'The Bootstrap Paradox (Causal Loop)',
    type: 'Self-Consistent Timeline',
    scenarioPrompt: 'A musician travels back to 1960 and gives young Beethoven the published score of his own 5th Symphony.',
    explanation: 'Where did the original idea for the 5th Symphony come from? Information exists without ever having been created.',
    consequencesByModel: {
      'Fixed Timeline': 'Information is self-existent in a closed temporal loop without an un-originated cause.',
      'Branching Timeline': 'The music originated in Timeline A, was transported to Timeline B, elevating Beethoven B.',
      'Multiverse': 'Cross-dimensional copy paste of musical assets across infinite multiverse nodes.',
      'Self-Consistent Timeline': 'The physical manuscript ages through infinite iterations until entropy collapses the loop.',
    },
    causalityNodes: [
      { id: 'node_b1', label: 'Future Score Printed (2026)' },
      { id: 'node_b2', label: 'Traveler hands score to Beethoven (1795)' },
      { id: 'node_b3', label: 'Beethoven publishes score as his own' },
      { id: 'node_b4', label: 'Score survives to 2026', loopEdgeId: 'node_b1' }
    ]
  }
];

export const DEMO_HISTORICAL_CITY: HistoricalCity = {
  id: 'city_delhi',
  name: 'Delhi',
  country: 'India',
  description: 'Explore the 1,000-year evolution of Delhi across empires, colonial eras, modern independence, and future AI arcologies.',
  eras: [
    {
      year: 1800,
      eraName: 'Shahjahanabad Era',
      population: '150,000',
      architectureStyle: 'Mughal Red Sandstone, Marbled Courtyards, & Haveli Enclaves',
      transportation: 'Horse-drawn carriages, bullock carts, and river boats on Yamuna',
      keyEvents: ['Peak of Shahjahanabad walled city culture', 'Poetic gatherings of Mirza Ghalib'],
      technologyLevel: 'Artisanal Metallurgy, Water Channels (Nehar-e-Behisht), Hand Paper Manufacture',
      dailyLife: 'Bustling Chandni Chowk bazaars filled with spices, silk weavers, and moonlit poetry readings.',
      economy: 'Textiles, spices, jewelry, and imperial grain tax collections.',
      culture: 'Urdu poetry, classical Hindustani music, and Mughal culinary mastery.',
      mapOverlayDescription: 'Walled city layout with 14 grand gates (Delhi Gate, Ajmeri Gate, Kashmiri Gate) anchoring the Yamuna bank.'
    },
    {
      year: 1857,
      eraName: 'The Uprising & Transition',
      population: '160,000',
      architectureStyle: 'Fortified Colonial Garrisons & Siege Works',
      transportation: 'Military steam locomotives arriving at Ridge stations',
      keyEvents: ['Siege of Delhi', 'End of Mughal Dynasty', 'British Crown Direct Control'],
      technologyLevel: 'Electric Telegraph lines, Steam Artillery, Early Daguerreotype Photography',
      dailyLife: 'Tense military patrols around the Red Fort; rapid transformation of urban governance.',
      economy: 'Colonial trade monopolies and railway expansion capital.',
      culture: 'Fading imperial traditions giving way to Victorian military administration.',
      mapOverlayDescription: 'British cantonments erected along the Northern Ridge overseeing the historic city walls.'
    },
    {
      year: 1947,
      eraName: 'Independence & Metropolis Genesis',
      population: '1,400,000',
      architectureStyle: 'Lutyens Imperial Modernism meets Post-Partition Settlement Townships',
      transportation: 'Trams, Ambassador Cars, Steam Trains, and Vintage Double-Decker Buses',
      keyEvents: ['Indian Independence Declaration at Red Fort', 'Partition Refugee Resettlement'],
      technologyLevel: 'Radio Broadcasting (All India Radio), Thermal Power Plants, Mechanical Presses',
      dailyLife: 'Rapid urban expansion, vibrant political debates in Connaught Place cafes.',
      economy: 'National planned economy, government civil service headquarters.',
      culture: 'Optimistic nation-building, multicultural fusion, and film music broadcasts.',
      mapOverlayDescription: 'Lutyens Grid (Rashtrapati Bhavan, Rajpath) merging with new suburbs (Karol Bagh, Lajpat Nagar).'
    },
    {
      year: 2026,
      eraName: 'Modern Hyper-Connected Capital',
      population: '33,000,000',
      architectureStyle: 'Contemporary Glass High-Rises, Metro Viaducts, & Eco-Parks',
      transportation: 'Driverless Metro System, Electric Buses, & EV Infrastructure Network',
      keyEvents: ['G20 Infrastructure Expansion', 'AI Innovation Corridor Launch'],
      technologyLevel: '5G/6G Networks, AI Urban Traffic Optimization, Solar Microgrids',
      dailyLife: 'A cosmopolitan melting pot blending street food heritage with high-tech startup hubs.',
      economy: 'IT services, financial services, government administration, and biotech innovation.',
      culture: 'Global food scene, digital arts festivals, and historic monument laser light shows.',
      mapOverlayDescription: 'Expansive National Capital Region (NCR) connected by 400km of high-speed metro lines.'
    }
  ]
};

export const DEMO_INVENTION_COMPARISON: InventionComparison = {
  id: 'inv_smartphone_1850',
  invention: 'Smartphone & Mobile Cyberspace',
  realInventionYear: 2007,
  hypotheticalYear: 1850,
  realHistorySummary: 'Smartphones emerged in the early 21st century, combining touchscreen capacitive glass, lithium batteries, and 3G/4G wireless internet.',
  alternateHistorySummary: 'If battery and vacuum tube miniaturization occurred in 1850, Victorian society would communicate via brass-bound "Telegraphic Pocket Slates" powered by miniaturized Leyden cells.',
  impactDomains: [
    {
      category: 'Communication',
      realWorld: 'Instant messaging, global video calls, and social networks dominate interpersonal interaction by 2010.',
      alternativeWorld: 'Victorian citizens send instant electro-pneumatic telegrams worldwide via copper wire grids from pocket slates.',
    },
    {
      category: 'Warfare',
      realWorld: 'Real-time satellite drone feeds and battlefield tactical mobile encryption in 21st century.',
      alternativeWorld: 'American Civil War (1861) fought with instantaneous mobile telegraph coordination, shortening conflict by 2 years.',
    },
    {
      category: 'Education',
      realWorld: 'Universal access to Wikipedia and online university courses on handheld screens.',
      alternativeWorld: 'Microfiche slate downloads enable 19th-century literacy rates to reach 95% across Europe and Asia by 1870.',
    },
    {
      category: 'Culture',
      realWorld: 'Short-form viral video platforms redefine entertainment and global youth culture.',
      alternativeWorld: 'Serialized Charles Dickens novels published via daily push notifications to pocket slates.',
    }
  ]
};

export const DEMO_UNIVERSES: UniverseProfile[] = [
  {
    id: 'uni_sub_oceania',
    name: 'Sub-Oceania: The Deep Abyssal Empire',
    tagline: 'A world where asteroid impact in 66M BC submerged continents, forcing hominids to adapt bioluminescent aquatic evolution.',
    originEvent: 'Great Oceanic Submergence (66,000,000 BC)',
    currentYear: 'Era of the Deep Trench 3400',
    author: 'Aeron Tide-Seeker',
    isPublic: true,
    likes: 1420,
    saves: 389,
    forks: 72,
    category: 'Sci-Fi',
    coverImage: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&auto=format&fit=crop&q=80',
    worldOverview: {
      geography: '100% ocean surface; abyssal city trenches heated by hydro-thermal vents.',
      civilization: 'Gill-breathing Homo Hydrois living in bio-engineered coral arcologies.',
      technology: 'Hydro-acoustic pulse computers, bioluminescent illumination grids, sonar communication.',
      government: 'Council of Trench Captains & Abyssal Stewards.',
      culture: 'Sonar poetry sung across hundreds of underwater miles.',
      language: 'Sub-aquatic click-resonance and bioluminescent skin flashing.',
    },
    characters: [
      { name: 'Nereus Triton', role: 'Grand Hydro-Engineer', bio: 'Architect of the 10,000-meter Deep Thermal Grid.' },
      { name: 'Kailani Vance', role: 'Whale-Song Translator', bio: 'First ambassador to communicate with Leviathan pod elders.' }
    ],
    factions: [
      { name: 'Trench Bio-Guild', ideology: 'Genetic harmony with abyssal fauna', influence: 'High Dominance' },
      { name: 'Surface Sky-Seekers', ideology: 'Building floating kelp platforms to see the stars', influence: 'Rising Reformers' }
    ],
    locations: [
      { name: 'Mariana Citadel', region: 'Central Abyssal Trench', features: 'Thermal vent towers powering 2 million residents.' }
    ],
    timelineEvents: [
      { year: 'Year 0', title: 'The Great Submergence', detail: 'Humanoid ancestors migrate to coastal kelp sanctuaries.' },
      { year: 'Year 1200', title: 'Bioluminescent Awakening', detail: 'Discovery of genetic skin glowing communication.' }
    ]
  },
  {
    id: 'uni_aetheria',
    name: 'Neo-Aetheria 1920: Anti-Gravity Steam Age',
    tagline: 'A universe where Nikola Tesla discovered Aetheric Levitation in 1898, creating sky-cities floating above clouds.',
    originEvent: 'Aetheric Resonance Discovery (1898)',
    currentYear: '1920 Sky-Calendar',
    author: 'Lady Victoria Vane',
    isPublic: true,
    likes: 2180,
    saves: 740,
    forks: 145,
    category: 'Alternate History',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    worldOverview: {
      geography: 'Floating islands anchored over Europe and North America.',
      civilization: 'Airship merchant clans and sky-dock engineers.',
      technology: 'Aetheric levitation coils, steam-turbine skyships, mechanical copper automata.',
      government: 'High Sky Admiralty Board.',
      culture: 'Jazz music played in cloud-side ballrooms.',
      language: 'Victorian English with Aetheric navigational slang.',
    },
    characters: [
      { name: 'Captain Sterling Hawke', role: 'Sky-Dreadnought Commander', bio: 'Veteran of the Cloud-Border Skirmishes.' }
    ],
    factions: [
      { name: 'Aetheric Guild', ideology: 'Monopolizing levitation energy', influence: 'Absolute Control' }
    ],
    locations: [
      { name: 'New London Sky Docks', region: 'Stratosphere 10,000ft', features: 'Floating docks receiving 500 brass skyships daily.' }
    ],
    timelineEvents: [
      { year: '1898', title: 'First Floating Platform Launched over Paris', detail: 'Tesla levitation coil lifts 50 tons of iron.' }
    ]
  }
];

export const DEMO_MEMORIES: MemoryItem[] = [
  {
    id: 'mem_1',
    year: 2023,
    date: '2023-04-15',
    title: 'First Architecture Sketch for Spatial Simulation Engine',
    description: 'Jotted down initial ideas in notebook: "What if a timeline was an interactive node graph where every decision branches live?"',
    tags: ['Idea', 'Architecture', 'Project Alpha'],
    mediaType: 'note'
  },
  {
    id: 'mem_2',
    year: 2024,
    date: '2024-09-10',
    title: 'Alpha Prototype Demo at Tech Summit',
    description: 'Presented initial demo of Temporal Causality Engine. Feedback was overwhelming regarding alternate history simulations.',
    tags: ['Demo', 'Keynote', 'Milestone'],
    mediaType: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mem_3',
    year: 2025,
    date: '2025-01-20',
    title: 'Launch of Universe Builder Module',
    description: 'Integrated multi-dimensional world creation engine with downstream consequence recalculation.',
    tags: ['Release', 'WorldBuilder'],
    mediaType: 'document'
  },
  {
    id: 'mem_4',
    year: 2026,
    date: '2026-09-23',
    title: 'TIMEVERSE AI Production Release',
    description: 'Complete platform deployment featuring 15 specialized simulation engines, Detective mode, Paradox Lab, and Community Marketplace.',
    tags: ['ProductLaunch', 'Milestone'],
    mediaType: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80'
  }
];
