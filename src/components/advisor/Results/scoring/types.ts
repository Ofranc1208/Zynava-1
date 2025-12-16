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
  diet: string
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
  isVegan?: boolean
  isGlutenFree?: boolean
  isOrganic?: boolean
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

export interface DosageRange {
  min: number
  optimal: number
  max: number
}

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

