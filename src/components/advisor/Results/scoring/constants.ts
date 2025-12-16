/**
 * Z-SCORE™ Algorithm Constants & Reference Data
 * Single source of truth for all scoring parameters
 */

import type { DosageRange, BrandTier } from './types'

// ============================================
// SCORING WEIGHTS (out of 100 total)
// ============================================

export const SCORE_WEIGHTS = {
  INGREDIENT: 35,      // 0-35 points
  GOAL: 15,            // 0-15 points
  DEMOGRAPHIC: 15,     // 0-15 points
  ACTIVITY: 10,        // 0-10 points
  QUALITY: 15,         // 0-15 points
  DIETARY: 10,         // 0-10 points
  // CAUTION: -20,     // 0-20 points penalty (future)
} as const

// ============================================
// OPTIMAL DOSAGE REFERENCE
// ============================================

export const OPTIMAL_DOSAGE: Record<string, DosageRange> = {
  'magnesium-glycinate': { min: 100, optimal: 300, max: 500 },
  'vitamin-d3': { min: 1000, optimal: 2000, max: 5000 },
  'omega-3': { min: 500, optimal: 1000, max: 3000 },
  'ashwagandha': { min: 300, optimal: 600, max: 1200 },
  'zinc': { min: 15, optimal: 30, max: 50 },
  'vitamin-c': { min: 250, optimal: 500, max: 2000 },
  'b12': { min: 500, optimal: 1000, max: 5000 },
  'coq10': { min: 100, optimal: 200, max: 400 },
  'iron': { min: 18, optimal: 27, max: 45 },
  'collagen': { min: 5000, optimal: 10000, max: 20000 },
  'probiotics': { min: 10, optimal: 30, max: 100 }, // Billion CFU
  'melatonin': { min: 0.5, optimal: 3, max: 10 },
  'l-theanine': { min: 100, optimal: 200, max: 400 },
  'lions-mane': { min: 500, optimal: 1000, max: 3000 },
  'curcumin': { min: 250, optimal: 500, max: 1500 },
  'glucosamine': { min: 1000, optimal: 1500, max: 3000 },
}

// ============================================
// DOSAGE MULTIPLIERS
// ============================================

export const DOSAGE_MULTIPLIERS = {
  UNDERDOSED: 0.4,      // Below minimum
  SUBOPTIMAL: 0.7,      // Below optimal but above minimum
  OPTIMAL: 1.0,         // In optimal range
  OVERDOSED: 0.9,       // Above max (wasteful but not harmful)
  DEFAULT: 0.8,         // No dosage data available
} as const

// ============================================
// GOAL RELATEDNESS MATRIX
// How related different wellness goals are (0.0-1.0)
// ============================================

export const GOAL_RELATEDNESS: Record<string, Record<string, number>> = {
  'overall-health': {
    'overall-health': 1.0, 'boost-immunity': 0.5, 'energy-vitality': 0.6,
    'bone-joint': 0.4, 'heart-health': 0.5, 'gut-health': 0.4,
    'sleep-stress': 0.4, 'brain-health': 0.5
  },
  'boost-immunity': {
    'overall-health': 0.5, 'boost-immunity': 1.0, 'energy-vitality': 0.3,
    'bone-joint': 0.2, 'heart-health': 0.3, 'gut-health': 0.7,
    'sleep-stress': 0.4, 'brain-health': 0.2
  },
  'energy-vitality': {
    'overall-health': 0.6, 'boost-immunity': 0.3, 'energy-vitality': 1.0,
    'bone-joint': 0.2, 'heart-health': 0.5, 'gut-health': 0.4,
    'sleep-stress': 0.5, 'brain-health': 0.6
  },
  'bone-joint': {
    'overall-health': 0.4, 'boost-immunity': 0.2, 'energy-vitality': 0.3,
    'bone-joint': 1.0, 'heart-health': 0.2, 'gut-health': 0.3,
    'sleep-stress': 0.2, 'brain-health': 0.1
  },
  'heart-health': {
    'overall-health': 0.5, 'boost-immunity': 0.3, 'energy-vitality': 0.5,
    'bone-joint': 0.2, 'heart-health': 1.0, 'gut-health': 0.3,
    'sleep-stress': 0.4, 'brain-health': 0.5
  },
  'gut-health': {
    'overall-health': 0.5, 'boost-immunity': 0.7, 'energy-vitality': 0.4,
    'bone-joint': 0.3, 'heart-health': 0.3, 'gut-health': 1.0,
    'sleep-stress': 0.5, 'brain-health': 0.6
  },
  'sleep-stress': {
    'overall-health': 0.4, 'boost-immunity': 0.4, 'energy-vitality': 0.5,
    'bone-joint': 0.2, 'heart-health': 0.4, 'gut-health': 0.5,
    'sleep-stress': 1.0, 'brain-health': 0.7
  },
  'brain-health': {
    'overall-health': 0.5, 'boost-immunity': 0.2, 'energy-vitality': 0.6,
    'bone-joint': 0.1, 'heart-health': 0.5, 'gut-health': 0.6,
    'sleep-stress': 0.7, 'brain-health': 1.0
  }
}

// ============================================
// BRAND TIER SCORING
// A = Premium (6pts), B = Quality (4pts), C = Generic (2pts)
// ============================================

export const BRAND_TIERS: Record<string, BrandTier> = {
  // Tier A - Premium Clinical Grade
  'Nordic Naturals': 'A',
  'Pure Encapsulations': 'A',
  'Life Extension': 'A',
  'Jarrow Formulas': 'A',
  'Garden of Life': 'A',
  'Thorne': 'A',
  'Onnit': 'A',
  'Seed': 'A',
  'Ritual': 'A',
  'Care/of': 'A',
  'Host Defense': 'A',
  
  // Tier B - Quality Mainstream
  'NOW Foods': 'B',
  "Doctor's Best": 'B',
  'Nature Made': 'B',
  'Sports Research': 'B',
  'Nutricost': 'B',
  'Vital Proteins': 'B',
  'GNC': 'B',
  'Organifi': 'B',
  'KOS': 'B',
  'Goli': 'B',
  'Natural Vitality': 'B',
}

export const BRAND_TIER_POINTS: Record<BrandTier, number> = {
  'A': 6,
  'B': 4,
  'C': 2,
}

// ============================================
// CONCERN TO INGREDIENT MAPPING
// Maps quiz concerns to searchable ingredients
// ============================================

export const CONCERN_TO_INGREDIENTS: Record<string, string[]> = {
  // Sleep & Stress
  'sleep-quality': ['magnesium-glycinate', 'l-theanine', 'melatonin', 'valerian'],
  'stress-anxiety': ['ashwagandha', 'l-theanine', 'gaba', 'rhodiola'],
  
  // Energy
  'low-energy': ['b12', 'b-complex', 'coq10', 'iron', 'rhodiola'],
  
  // Digestive
  'digestive-sensitivity': ['probiotics', 'digestive-enzymes', 'l-glutamine'],
  
  // Joint
  'joint-discomfort': ['glucosamine', 'collagen', 'turmeric', 'omega-3'],
  
  // Immune
  'immune-support': ['vitamin-c', 'vitamin-d3', 'zinc', 'elderberry'],
  
  // Weight
  'weight-management': ['green-tea', 'fiber', 'cla', 'protein'],
  
  // None - triggers starter stack
  'none': [],
}

// ============================================
// STARTER STACKS BY GOAL
// Default ingredients when user selects "none" for concerns
// ============================================

export const STARTER_STACKS: Record<string, string[]> = {
  'overall-health': ['multivitamin', 'vitamin-d3', 'omega-3'],
  'boost-immunity': ['vitamin-d3', 'zinc', 'vitamin-c'],
  'energy-vitality': ['b-complex', 'coq10', 'iron'],
  'bone-joint': ['collagen', 'vitamin-d3', 'calcium'],
  'heart-health': ['omega-3', 'coq10', 'magnesium-glycinate'],
  'gut-health': ['probiotics', 'digestive-enzymes', 'l-glutamine'],
  'sleep-stress': ['magnesium-glycinate', 'ashwagandha', 'l-theanine'],
  'brain-health': ['omega-3', 'lions-mane', 'b-complex'],
}

// ============================================
// DIVERSITY RULES
// ============================================

export const DIVERSITY_LIMITS = {
  MAX_PER_BRAND: 2,           // No more than 2 products from same brand
  MAX_PER_INGREDIENT: 2,      // No more than 2 products with same primary ingredient
  MIN_UNIQUE_CATEGORIES: 3,   // At least 3 unique ingredient categories in top 5
  MAX_RESULTS: 10,            // Maximum results to return
} as const

