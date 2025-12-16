/**
 * Goal Alignment Score Calculator (0-15 points)
 * Measures how well a product aligns with user's primary wellness goal
 * Uses the Goal Relatedness Matrix
 */

import type { ScoredProduct, ScoreResult } from './types'
import { GOAL_RELATEDNESS, SCORE_WEIGHTS } from './constants'

/**
 * Calculate Goal Alignment Score (0-15 points)
 */
export function calculateGoalScore(
  product: ScoredProduct,
  userGoal: string
): ScoreResult {
  const reasons: string[] = []
  
  // No goal tags - give neutral score
  if (!product.goalTags || product.goalTags.length === 0) {
    return { 
      score: SCORE_WEIGHTS.GOAL * 0.5, // 7.5 points (neutral)
      reasons 
    }
  }
  
  // Find best relatedness between user goal and product goals
  let bestRelatedness = 0
  
  for (const productGoal of product.goalTags) {
    const relatedness = GOAL_RELATEDNESS[userGoal]?.[productGoal] || 0
    if (relatedness > bestRelatedness) {
      bestRelatedness = relatedness
    }
  }
  
  const score = bestRelatedness * SCORE_WEIGHTS.GOAL
  
  // Generate reasons based on relatedness
  if (bestRelatedness >= 0.8) {
    reasons.push(`Perfect match for your ${userGoal.replace(/-/g, ' ')} goal`)
  } else if (bestRelatedness >= 0.5) {
    reasons.push(`Supports your wellness goals`)
  }
  
  return { score, reasons }
}

