/**
 * Demographic Score Calculator (0-15 points)
 * Measures how suitable a product is for user's age and gender
 */

import type { ScoredProduct, ScoreResult } from './types'
import { SCORE_WEIGHTS } from './constants'

// Default multiplier when no demographic data available
const DEFAULT_DEMOGRAPHIC_MULTIPLIER = 0.7

/**
 * Parse demographic string to extract gender and age
 */
function parseDemographic(demographic: string): { gender: string; age: string } {
  const parts = demographic.split('-')
  if (parts.length >= 2) {
    return {
      gender: parts[0],
      age: parts.slice(1).join('-')
    }
  }
  return { gender: 'unknown', age: 'unknown' }
}

/**
 * Calculate Demographic Score (0-15 points)
 */
export function calculateDemographicScore(
  product: ScoredProduct,
  demographic: string
): ScoreResult {
  const reasons: string[] = []
  
  // Get multiplier from product data or use default
  const multiplier = product.demographicScores?.[demographic] || DEFAULT_DEMOGRAPHIC_MULTIPLIER
  const score = multiplier * SCORE_WEIGHTS.DEMOGRAPHIC
  
  // Generate reason if highly optimized for this demographic
  if (multiplier >= 0.9) {
    const { gender, age } = parseDemographic(demographic)
    reasons.push(`Optimized for ${gender} ${age}`)
  }
  
  return { score, reasons }
}

