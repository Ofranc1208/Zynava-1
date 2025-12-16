/**
 * Activity Level Score Calculator (0-10 points)
 * Measures how well a product fits user's lifestyle and activity level
 */

import type { ScoredProduct, ScoreResult } from './types'
import { SCORE_WEIGHTS } from './constants'

// Default multiplier when no activity data available
const DEFAULT_ACTIVITY_MULTIPLIER = 0.7

// Human-readable activity names
const ACTIVITY_LABELS: Record<string, string> = {
  'power-lifter': 'power lifters',
  'endurance-athlete': 'endurance athletes',
  'regular-gym-goer': 'regular gym goers',
  'active-lifestyle': 'active lifestyles',
  'light-exercise': 'light exercise routines',
  'desk-worker': 'desk workers',
  'low-activity': 'low activity levels',
  'recovery-injury': 'recovery & injury support',
}

/**
 * Calculate Activity Score (0-10 points)
 */
export function calculateActivityScore(
  product: ScoredProduct,
  activity: string
): ScoreResult {
  const reasons: string[] = []
  
  // Get multiplier from product data or use default
  const multiplier = product.activityScores?.[activity] || DEFAULT_ACTIVITY_MULTIPLIER
  const score = multiplier * SCORE_WEIGHTS.ACTIVITY
  
  // Generate reason if highly suited for this activity level
  if (multiplier >= 0.9) {
    reasons.push(`Great for your activity level`)
  }
  
  return { score, reasons }
}

