export const INITIAL_SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    shortDesc: 'Modern SaaS web applications, responsive customer portals, and high-performance web systems.',
    icon: 'Globe',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    startingPrice: '$2,500',
    deliverableTime: '2 to 6 weeks',
    features: [
      'Modern, mobile-first responsive architecture',
      'Secure REST & GraphQL API integrations',
      'SEO optimization & Core Web Vitals 95+ performance',
      'Continuous deployment (CI/CD) and cloud setup'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    shortDesc: 'Cross-platform and native iOS & Android applications built for speed, offline reliability, and fluid UX.',
    icon: 'Smartphone',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    startingPrice: '$3,800',
    deliverableTime: '4 to 8 weeks',
    features: [
      'Intuitive UX designed for iOS & Android standards',
      'Offline-first architecture and real-time syncing',
      'Push notifications and in-app purchases (Stripe, Apple Pay)',
      'Store release assistance for App Store & Google Play'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    shortDesc: 'Headless e-commerce stores, custom cart flows, and multi-currency payment infrastructure.',
    icon: 'ShoppingBag',
    technologies: ['Shopify', 'Next.js Commerce', 'Stripe', 'Saleor', 'Medusa'],
    startingPrice: '$3,200',
    deliverableTime: '3 to 6 weeks',
    features: [
      'Ultra-fast headless storefront with Next.js',
      'Frictionless multi-currency checkout & Stripe billing',
      'Inventory, shipping, and automated order webhooks',
      'Analytics and conversion tracking integrations'
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortDesc: 'User research, design systems, high-fidelity clickable wireframes, and developer-ready Figma assets.',
    icon: 'Palette',
    technologies: ['Figma', 'Design Systems', 'Wireframing', 'Prototyping'],
    startingPrice: '$1,800',
    deliverableTime: '1 to 3 weeks',
    features: [
      'UX research and streamlined user conversion journeys',
      'Complete design system with atomic reusable tokens',
      'High-fidelity interactive prototype ready for testing',
      'Smooth pixel-perfect handoff with full developer specs'
    ]
  },
  {
    id: 'other',
    title: 'Other (AI & Cloud)',
    shortDesc: 'Custom AI agent integrations, RAG pipelines, cloud migrations, and specialized engineering.',
    icon: 'Sparkles',
    technologies: ['OpenAI', 'Python', 'Docker', 'AWS', 'FastAPI'],
    startingPrice: '$2,800',
    deliverableTime: '2 to 5 weeks',
    features: [
      'Intelligent conversational agents & RAG semantic search',
      'Automated data ingestion and document processing',
      'Cloud containerization with Docker and Kubernetes',
      'Custom microservices and webhook architecture'
    ]
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'B2B Logistics Analytics SaaS Platform',
    clientName: 'Sarah Jenkins',
    clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    clientCompany: 'Nexus Supply Global',
    serviceType: 'Web Development',
    category: 'web-dev',
    budget: '$6,500 - $8,000',
    budgetMin: 6500,
    budgetMax: 8000,
    deadline: '2026-10-30',
    deadlineDisplay: 'Before Oct 30, 2026',
    shortDesc: 'Real-time fleet tracking dashboard with interactive Mapbox maps, live GPS telemetry, and carbon emission analytics.',
    fullDesc: 'We are seeking a senior Fullstack engineer or boutique agency to build the MVP of our B2B logistics analytics SaaS. The platform requires multi-tenant organization access, telemetry integration via WebSockets for real-time vehicle tracking on Mapbox, and automated summary reports exportable to PDF and Excel.',
    requiredSkills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Mapbox', 'Tailwind CSS'],
    deliverables: [
      'Multi-role client and administrator dashboard',
      'Live Mapbox interactive telemetry map component',
      'Automated email and webhook alert dispatcher',
      'Well-documented source code with unit test coverage'
    ],
    publishedAt: '2026-09-20',
    status: 'open',
    proposalsCount: 4,
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Telemedicine & Patient Care Mobile App',
    clientName: 'Dr. Michael Chen',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    clientCompany: 'Metro Health Clinics',
    serviceType: 'Mobile Development',
    category: 'mobile-dev',
    budget: '$9,000 - $12,000',
    budgetMin: 9000,
    budgetMax: 12000,
    deadline: '2026-11-15',
    deadlineDisplay: 'Before Nov 15, 2026',
    shortDesc: 'React Native mobile app for patient record access, instant appointment scheduling, and encrypted video consultations.',
    fullDesc: 'The goal of this project is to modernize patient access across our 12 clinical branches. Core features include HIPAA-compliant secure authentication, real-time shared provider calendar slots, peer-to-peer encrypted WebRTC video calls, and instant Stripe payment processing for consultations.',
    requiredSkills: ['React Native', 'WebRTC', 'Firebase', 'Stripe', 'Node.js'],
    deliverables: [
      'iOS and Android production-ready builds ready for store review',
      'Encrypted video call room module with in-app chat',
      'Push notification reminders and SMS alerts',
      'Secure backend API synchronized with healthcare ERP'
    ],
    publishedAt: '2026-09-18',
    status: 'open',
    proposalsCount: 6,
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Headless Luxury E-commerce Storefront',
    clientName: 'Claire Beaumont',
    clientAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    clientCompany: 'Maison Beaumont Paris',
    serviceType: 'E-commerce',
    category: 'ecommerce',
    budget: '$5,500 - $7,500',
    budgetMin: 5500,
    budgetMax: 7500,
    deadline: '2026-10-25',
    deadlineDisplay: 'Before Oct 25, 2026',
    shortDesc: 'Next.js storefront connected to Shopify headless API with custom product configurator and multi-currency checkout.',
    fullDesc: 'We are relaunching our luxury home goods catalog. We need an experienced e-commerce developer to engineer a blazing-fast headless Next.js frontend using Shopify Storefront API and Tailwind CSS. The site will feature an interactive 3D/canvas product color customizer, dynamic cart drawer, and frictionless international checkout.',
    requiredSkills: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe', 'TypeScript'],
    deliverables: [
      'Performant Next.js 14 App Router storefront',
      'Custom product visual customizer component',
      'Multi-currency checkout with tax calculations',
      'Automated inventory webhook synchronization'
    ],
    publishedAt: '2026-09-15',
    status: 'open',
    proposalsCount: 3,
    featured: true
  },
  {
    id: 'proj-4',
    title: 'FinTech Design System & Interactive Figma Prototype',
    clientName: 'David Vance',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    clientCompany: 'PayFlow Technologies',
    serviceType: 'UI/UX Design',
    category: 'ui-ux',
    budget: '$3,200 - $4,500',
    budgetMin: 3200,
    budgetMax: 4500,
    deadline: '2026-10-10',
    deadlineDisplay: 'Before Oct 10, 2026',
    shortDesc: 'Complete UI/UX design overhaul, atomic design system, and clickable prototype for our web & mobile payment application.',
    fullDesc: 'PayFlow is undergoing a complete product redesign. We are looking for an exceptional UI/UX product designer with deep FinTech experience. Deliverables must include an atomic design system (typography scales, color variables, component library in Figma), 28 responsive screen wireframes, and an interactive clickable prototype.',
    requiredSkills: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping', 'FinTech UX'],
    deliverables: [
      'Comprehensive Figma library with auto-layout components and tokens',
      'Desktop & mobile responsive user journeys (dashboard, transfers, billing)',
      'High-fidelity interactive prototype tested with 5 users',
      'Developer handoff documentation and style guides'
    ],
    publishedAt: '2026-09-12',
    status: 'open',
    proposalsCount: 2,
    featured: false
  },
  {
    id: 'proj-5',
    title: 'AI Enterprise Document Search & Workflow Automation',
    clientName: 'Alexander Meyer',
    clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    clientCompany: 'Meyer Legal & Consulting',
    serviceType: 'Other',
    category: 'other',
    budget: '$7,000 - $9,500',
    budgetMin: 7000,
    budgetMax: 9500,
    deadline: '2026-11-01',
    deadlineDisplay: 'Before Nov 01, 2026',
    shortDesc: 'RAG semantic search and automated summary assistant over 15,000 confidential contracts and corporate documents.',
    fullDesc: 'We require a customized internal AI assistant to allow our 20 legal consultants to query confidential document archives in natural language. The system must cite exact source references (page and paragraph), preserve zero-retention data privacy, and deliver results through a crisp web UI.',
    requiredSkills: ['Python', 'LangChain', 'OpenAI / Claude API', 'ChromaDB / Pinecone', 'FastAPI', 'React'],
    deliverables: [
      'Document chunking and vector embedding ingestion pipeline',
      'Hybrid semantic search with re-ranking',
      'Clean web chat interface with verifiable citations',
      'Docker container for private deployment on on-premise cloud'
    ],
    publishedAt: '2026-09-10',
    status: 'open',
    proposalsCount: 5,
    featured: false
  }
];

export const MEETING_TYPES = [
  {
    id: 'online-meeting',
    title: 'Online Meeting',
    duration: '30 min',
    description: 'Video conference via Google Meet with our lead architects to discuss requirements, feasibility, and budget.',
    badge: 'Recommended / Video Call',
    icon: 'Video'
  },
  {
    id: 'in-person-meeting',
    title: 'In-person Meeting',
    duration: '45 min',
    description: 'Face-to-face briefing at our DevPulse Tech Studio or client headquarters for comprehensive project scoping.',
    badge: 'On-site Meeting',
    icon: 'Building'
  }
];

export const TIME_SLOTS = [
  '09:00 AM - 09:30 AM',
  '10:00 AM - 10:30 AM',
  '11:15 AM - 11:45 AM',
  '02:00 PM - 02:30 PM',
  '03:30 PM - 04:00 PM',
  '04:45 PM - 05:15 PM'
];

export const TEAM_MEMBERS = [
  {
    name: 'Thomas Dubois',
    role: 'Lead Architect & Senior Fullstack Engineer',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    experience: '9+ years experience',
    specialty: 'React, Node, Cloud & System Architecture'
  },
  {
    name: 'Camille Laurent',
    role: 'Head of Product & UI/UX Specialist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    experience: '7+ years experience',
    specialty: 'Figma, Design Systems & Product Strategy'
  },
  {
    name: 'Marcus Vance',
    role: 'AI Engineer & DevOps Lead',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    experience: '8+ years experience',
    specialty: 'LLMs, Microservices, Kubernetes & AWS'
  }
];
