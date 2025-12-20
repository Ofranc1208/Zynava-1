/**
 * Dietary Bonus Score Calculator (0-10 points)
 * Bonus points for meeting and exceeding dietary requirements
 * 
 * Base score: 5 points (for passing hard dietary filters)
 * Bonus points for additional dietary certifications
 * 
 * Updated: Now supports multi-select diet preferences (array)
 */

import type { ScoredProduct, ScoreResult } from './types'
import { SCORE_WEIGHTS } from './constants'

// Base score for passing dietary filters
const BASE_DIETARY_SCORE = 5

/**
 * Calculate Dietary Bonus Score (0-10 points)
 * Now accepts an array of diet preferences for multi-select support
 */
export function calculateDietaryScore(
  product: ScoredProduct,
  userDietPreferences: string[]
): ScoreResult {
  const reasons: string[] = []
  let score = BASE_DIETARY_SCORE
  
  // No preference selected - just return base score
  if (!userDietPreferences || userDietPreferences.length === 0 || userDietPreferences.includes('no-preference')) {
    return { score, reasons }
  }
  
  // Vegan bonus (+2 pts)
  if (userDietPreferences.includes('vegan') && product.isVegan) {
    score += 2
    reasons.push('Vegan certified')
  }
  
  // Gluten-free bonus (+1.5 pts)
  if (userDietPreferences.includes('gluten-free') && product.isGlutenFree) {
    score += 1.5
    reasons.push('Gluten-free')
  }
  
  // Sugar-free bonus (+1 pt)
  if (userDietPreferences.includes('sugar-free') && product.isSugarFree) {
    score += 1
    reasons.push('Sugar-free')
  }
  
  // Non-GMO/Organic bonus (+1.5 organic, +1 non-gmo additional)
  if (userDietPreferences.includes('non-gmo-organic')) {
    if (product.isOrganic) {
      score += 1.5
      reasons.push('Organic')
    }
    if (product.isNonGMO) {
      score += 1
    }
  }
  
  // Kosher bonus (+1 pt)
  if (userDietPreferences.includes('kosher') && product.isKosher) {
    score += 1
    reasons.push('Kosher')
  }
  
  // Halal bonus (+1 pt)
  if (userDietPreferences.includes('halal') && product.isHalal) {
    score += 1
    reasons.push('Halal')
  }
  
  // Additional quality bonuses (apply if product has these, regardless of request)
  if (product.allergenFree) {
    score += 1
  }
  if (product.cleanLabel) {
    score += 0.5
  }
  
  // General organic bonus if not already counted (+0.5 pts)
  if (product.isOrganic && !userDietPreferences.includes('non-gmo-organic')) {
    score += 0.5
  }
  
  return { 
    score: Math.min(SCORE_WEIGHTS.DIETARY, score), // Cap at max (10)
    reasons 
  }
}

