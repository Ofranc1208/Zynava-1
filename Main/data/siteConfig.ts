// ===============================================
// CENTRALIZED SITE LINKS & STATS CONFIGURATION
// ===============================================
export const SITE_STATS = {
  statesCovered: { 
    value: "50", 
    label: "States Covered", 
    link: "/structured-settlement-laws-by-state",
    description: "We serve all 50 states with full legal compliance - click to see laws by state"
  },
  compliance: { 
    value: "100%", 
    label: "Compliance Rate", 
    link: "/court-approval",
    description: "Full compliance with all state and federal requirements"
  },
  avgDays: { 
    value: "15-50", 
    label: "Days Average", 
    link: "/how-fast-can-i-get-my-money",
    description: "Average processing time from application to funding"
  },
  aiSupport: { 
    value: "24/7", 
    label: "AI Support", 
    link: "/mint-intelligent-chat",
    description: "Round-the-clock AI assistance with Mint"
  }
};

export const SITE_LINKS = {
  processes: [
    { href: "/get-a-quote", label: "Get Quote", keywords: ["quote", "price", "estimate", "calculator"] },
    { href: "/review-offer", label: "Review Offer", keywords: ["review", "offer", "evaluate", "analyze"] },
    { href: "/how-fast-can-i-get-my-money", label: "Timeline", keywords: ["fast", "timing", "speed", "how long", "timeline"] },
    { href: "/court-approval", label: "Court Process", keywords: ["court", "approval", "legal", "process"] }
  ],
  legal: [
    { href: "/state-laws-overview", label: "State Laws", keywords: ["laws", "states", "compliance", "regulations"] },
    { href: "/structured-settlement-laws", label: "Federal Laws", keywords: ["federal", "tax", "irs", "regulations"] },
    { href: "/structured-settlement-laws-by-state", label: "Laws by State", keywords: ["state laws", "by state", "specific"] }
  ],
  resources: [
    { href: "/structured-settlement-info-hub", label: "Knowledge Hub", keywords: ["info", "hub", "resources", "learn"] },
    { href: "/faqs", label: "FAQs", keywords: ["faq", "questions", "help", "answers"] },
    { href: "/testimonials", label: "Testimonials", keywords: ["testimonials", "reviews", "clients"] }
  ]
};

