/**
 * Z-SCORE™ Algorithm Type Definitions
 */

// ============================================
// QUIZ INPUT TYPES
// ============================================

export interface QuizInput {
  goals: string
  demographic: string
  activity: string
  dietPreferences: string[] // Changed to array for multi-select
  concerns: string
  preferences: string
}

// ============================================
// PRODUCT TYPES
// ============================================

export interface ScoredProduct {
  // Base product fields
  id: string
  title: string
  brand: string
  vendor: string
  price: string
  originalPrice?: string
  badges: string[]
  benefit: string
  image: string
  segment: string
  rating: number
  reviewCount: number
  category: string[]
  
  // Scoring input fields
  masterIngredients: string[]
  ingredientStrength: Record<string, number>
  goalTags: string[]
  demographicScores: Record<string, number>
  activityScores: Record<string, number>
  brandTier: 'A' | 'B' | 'C'
  
  // Dietary compliance flags
  isVegan?: boolean
  isGlutenFree?: boolean
  isOrganic?: boolean
  isNonGMO?: boolean
  isSugarFree?: boolean
  isKosher?: boolean
  isHalal?: boolean
  allergenFree?: boolean
  cleanLabel?: boolean
  
  // Quality certifications
  thirdPartyTested?: boolean
  
  // Calculated scores (filled by algorithm)
  zScore?: number
  ingredientScore?: number
  goalScore?: number
  demographicScore?: number
  activityScore?: number
  qualityScore?: number
  dietaryScore?: number
  matchReasons?: string[]
}

// ============================================
// SCORING RESULT TYPES
// ============================================

export interface ScoreResult {
  score: number
  reasons: string[]
}

export interface IngredientScoreResult extends ScoreResult {
  primaryIngredient: string | null
}

// ============================================
// REFERENCE DATA TYPES
// ============================================

// NOTE: DosageRange type removed - we do not evaluate dosages
// Dosage decisions should be made by healthcare providers

export type BrandTier = 'A' | 'B' | 'C'

export type GoalId = 
  | 'overall-health'
  | 'boost-immunity'
  | 'energy-vitality'
  | 'bone-joint'
  | 'heart-health'
  | 'gut-health'
  | 'sleep-stress'
  | 'brain-health'

export type ConcernId =
  | 'sleep-quality'
  | 'stress-anxiety'
  | 'low-energy'
  | 'digestive-sensitivity'
  | 'joint-discomfort'
  | 'immune-support'
  | 'weight-management'
  | 'none'

