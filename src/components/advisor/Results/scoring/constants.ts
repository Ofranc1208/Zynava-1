/**
 * Z-SCORE™ Quality and Safety Score Algorithm Constants
 * Single source of truth for all scoring parameters
 * 
 * COMPLIANCE NOTE: This algorithm focuses on QUALITY and SAFETY only.
 * We do NOT evaluate or recommend dosages - that is a medical decision
 * for healthcare providers based on individual patient needs.
 */

import type { BrandTier } from './types'

// ============================================
// SCORING WEIGHTS (out of 100 total)
// Reweighted to emphasize Quality & Purity over Dosage
// ============================================

export const SCORE_WEIGHTS = {
  INGREDIENT: 45,      // 0-45 points (Quality & Purity - increased from 35)
  GOAL: 15,            // 0-15 points (Goal alignment)
  DEMOGRAPHIC: 10,     // 0-10 points (Age/gender appropriateness)
  ACTIVITY: 5,         // 0-5 points (Lifestyle fit)
  QUALITY: 15,         // 0-15 points (Brand reputation & reviews)
  DIETARY: 10,         // 0-10 points (Dietary compliance)
  // SAFETY_PENALTY: -30, // 0-30 points deducted (contraindications - future)
} as const

// ============================================
// QUALITY MULTIPLIERS (replaces dosage multipliers)
// Focus on purity, testing, and ingredient quality
// ============================================

export const QUALITY_MULTIPLIERS = {
  BASE: 0.6,                  // Base score for any matched ingredient
  THIRD_PARTY_TESTED: 0.15,   // Bonus for third-party testing certification
  CLEAN_LABEL: 0.10,          // Bonus for clean label (no fillers/additives)
  ORGANIC: 0.10,              // Bonus for organic certification
  NON_GMO: 0.05,              // Bonus for non-GMO verification
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

