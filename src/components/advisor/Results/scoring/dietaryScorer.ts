/**
 * Dietary Bonus Score Calculator (0-10 points)
 * Bonus points for meeting and exceeding dietary requirements
 * 
 * Base score: 5 points (for passing hard dietary filters)
 * Bonus points for additional dietary certifications
 */

import type { ScoredProduct, ScoreResult } from './types'
import { SCORE_WEIGHTS } from './constants'

// Base score for passing dietary filters
const BASE_DIETARY_SCORE = 5

/**
 * Calculate Dietary Bonus Score (0-10 points)
 */
export function calculateDietaryScore(
  product: ScoredProduct,
  userDiet: string
): ScoreResult {
  const reasons: string[] = []
  let score = BASE_DIETARY_SCORE
  
  // Vegan bonus
  if (userDiet === 'vegan' && product.isVegan) {
    score += 3
    reasons.push('Vegan certified')
  }
  
  // Gluten-free bonus
  if (userDiet === 'gluten-free' && product.isGlutenFree) {
    score += 2
  }
  
  // Organic bonus (valuable for any diet preference)
  if (product.isOrganic) {
    score += 2
    reasons.push('Organic')
  }
  
  // Future: Additional dietary bonuses
  // if (userDiet === 'non-gmo-organic' && product.isNonGMO) score += 2
  // if (product.allergenFree) score += 1
  // if (product.cleanLabel) score += 1
  
  return { 
    score: Math.min(SCORE_WEIGHTS.DIETARY, score), // Cap at max
    reasons 
  }
}

