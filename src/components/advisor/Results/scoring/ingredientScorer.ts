/**
 * Ingredient Quality & Purity Score Calculator (0-45 points)
 * 
 * COMPLIANCE NOTE: This scorer focuses ONLY on ingredient quality and purity.
 * We do NOT score or recommend dosages - that is a medical decision for healthcare providers.
 * 
 * Quality factors evaluated:
 * - Ingredient match to user concerns
 * - Brand tier (premium vs generic)
 * - Third-party testing certification
 * - Clean label / purity indicators
 * - Patented or trademarked ingredient forms
 */

import type { ScoredProduct, IngredientScoreResult } from './types'
import { 
  SCORE_WEIGHTS,
  CONCERN_TO_INGREDIENTS,
  STARTER_STACKS,
  QUALITY_MULTIPLIERS,
} from './constants'

/**
 * Get target ingredients based on user's concerns or goal starter stack
 */
export function getTargetIngredients(concerns: string, goals: string): string[] {
  // First try to get ingredients from concerns
  if (concerns && concerns !== 'none') {
    const concernIngredients = CONCERN_TO_INGREDIENTS[concerns]
    if (concernIngredients && concernIngredients.length > 0) {
      return concernIngredients
    }
  }
  
  // Fall back to starter stack based on goal
  return STARTER_STACKS[goals] || STARTER_STACKS['overall-health']
}

/**
 * Calculate quality multiplier based on product purity indicators
 * (No dosage evaluation - that's a medical decision)
 */
function getQualityMultiplier(product: ScoredProduct): number {
  let multiplier = QUALITY_MULTIPLIERS.BASE
  
  // Third-party tested products get quality boost
  if (product.thirdPartyTested) {
    multiplier += QUALITY_MULTIPLIERS.THIRD_PARTY_TESTED
  }
  
  // Clean label products get quality boost
  if (product.cleanLabel) {
    multiplier += QUALITY_MULTIPLIERS.CLEAN_LABEL
  }
  
  // Organic products get quality boost
  if (product.isOrganic) {
    multiplier += QUALITY_MULTIPLIERS.ORGANIC
  }
  
  // Non-GMO products get small boost
  if (product.isNonGMO) {
    multiplier += QUALITY_MULTIPLIERS.NON_GMO
  }
  
  // Cap at 1.0 maximum
  return Math.min(multiplier, 1.0)
}

/**
 * Find matched ingredients between product and target list
 */
function findMatchedIngredients(
  productIngredients: string[],
  targetIngredients: string[]
): string[] {
  return productIngredients.filter(ing =>
    targetIngredients.some(target => 
      ing.includes(target) || target.includes(ing)
    )
  )
}

/**
 * Calculate Ingredient Quality & Purity Score (0-45 points)
 * 
 * NOTE: We do NOT evaluate dosage. Dosage decisions should be made
 * by healthcare providers based on individual needs.
 */
export function calculateIngredientScore(
  product: ScoredProduct,
  targetIngredients: string[]
): IngredientScoreResult {
  const reasons: string[] = []
  
  // No ingredients to match
  if (!product.masterIngredients || targetIngredients.length === 0) {
    return { score: 0, primaryIngredient: null, reasons }
  }
  
  // Find matches
  const matchedIngredients = findMatchedIngredients(
    product.masterIngredients,
    targetIngredients
  )
  
  // No matches found
  if (matchedIngredients.length === 0) {
    return { score: 0, primaryIngredient: null, reasons }
  }
  
  // Get quality multiplier based on purity indicators
  const qualityMultiplier = getQualityMultiplier(product)
  const bestIngredient = matchedIngredients[0]
  
  // Add quality-based reasons
  if (product.thirdPartyTested) {
    reasons.push('Third-party tested for purity')
  }
  if (product.cleanLabel) {
    reasons.push('Clean label formulation')
  }
  if (product.isOrganic) {
    reasons.push('Certified organic ingredients')
  }
  
  // Calculate final score based on match ratio and quality
  const matchRatio = matchedIngredients.length / targetIngredients.length
  const score = matchRatio * qualityMultiplier * SCORE_WEIGHTS.INGREDIENT
  
  // Add match ratio reason
  if (matchRatio >= 0.5) {
    reasons.push(`Contains ${Math.round(matchRatio * 100)}% of key ingredients for your goals`)
  }
  
  return { 
    score, 
    primaryIngredient: bestIngredient, 
    reasons 
  }
}

