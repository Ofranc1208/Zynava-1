/**
 * Ingredient Score Calculator (0-35 points)
 * Measures how well a product matches user's selected concerns/ingredients
 * Includes dosage quality evaluation
 */

import type { ScoredProduct, IngredientScoreResult } from './types'
import { 
  OPTIMAL_DOSAGE, 
  DOSAGE_MULTIPLIERS, 
  SCORE_WEIGHTS,
  CONCERN_TO_INGREDIENTS,
  STARTER_STACKS 
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
 * Calculate dosage quality multiplier for an ingredient
 */
function getDosageMultiplier(ingredient: string, dosage: number): number {
  const optimal = OPTIMAL_DOSAGE[ingredient]
  
  // No reference data - use default
  if (!optimal || dosage <= 0) {
    return DOSAGE_MULTIPLIERS.DEFAULT
  }
  
  if (dosage < optimal.min) {
    return DOSAGE_MULTIPLIERS.UNDERDOSED
  } else if (dosage < optimal.optimal) {
    return DOSAGE_MULTIPLIERS.SUBOPTIMAL
  } else if (dosage <= optimal.max) {
    return DOSAGE_MULTIPLIERS.OPTIMAL
  } else {
    return DOSAGE_MULTIPLIERS.OVERDOSED
  }
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
 * Calculate Ingredient Score (0-35 points)
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
  
  // Calculate dosage quality for each matched ingredient
  let totalDosageQuality = 0
  let bestIngredient = matchedIngredients[0]
  let bestScore = 0
  
  for (const ingredient of matchedIngredients) {
    const dosage = product.ingredientStrength?.[ingredient] || 0
    const dosageMultiplier = getDosageMultiplier(ingredient, dosage)
    
    totalDosageQuality += dosageMultiplier
    
    // Track best ingredient for display
    if (dosageMultiplier > bestScore) {
      bestScore = dosageMultiplier
      bestIngredient = ingredient
    }
    
    // Add reason for optimal dosage
    if (dosageMultiplier === DOSAGE_MULTIPLIERS.OPTIMAL) {
      reasons.push(`Optimal ${ingredient.replace(/-/g, ' ')} dosage`)
    }
  }
  
  // Calculate final score
  const matchRatio = matchedIngredients.length / targetIngredients.length
  const avgDosageQuality = totalDosageQuality / matchedIngredients.length
  const score = matchRatio * avgDosageQuality * SCORE_WEIGHTS.INGREDIENT
  
  // Add match ratio reason
  if (matchRatio >= 0.5) {
    reasons.push(`Matches ${Math.round(matchRatio * 100)}% of your selected concerns`)
  }
  
  return { 
    score, 
    primaryIngredient: bestIngredient, 
    reasons 
  }
}

