/**
 * Z-SCORE™ Algorithm Orchestrator
 * 
 * This is a thin orchestrator that coordinates all scoring components.
 * Individual scoring logic is in the ./scoring/ folder.
 * 
 * Full score range: 0-100 points
 * 
 * Components:
 * - IngredientScore (0-35) - Match quality + dosage
 * - GoalAlignmentScore (0-15) - Goal relevance  
 * - DemographicScore (0-15) - Age/gender fit
 * - ActivityScore (0-10) - Lifestyle fit
 * - QualityScore (0-15) - Brand + reviews
 * - DietaryBonusScore (0-10) - Diet compliance bonus
 * - CautionPenalty (0-20) - Safety deductions (future)
 */

// Re-export types for external consumers
export type { QuizInput, ScoredProduct } from './scoring'

// Import all scoring components
import {
  // Types
  type QuizInput,
  type ScoredProduct,
  
  // Scorers
  calculateIngredientScore,
  getTargetIngredients,
  calculateGoalScore,
  calculateDemographicScore,
  calculateActivityScore,
  calculateQualityScore,
  calculateDietaryScore,
  
  // Diversity
  applyDiversityFilter,
} from './scoring'

// ============================================
// MAIN SCORING FUNCTION
// ============================================

/**
 * Calculate Z-SCORE for a single product
 * Orchestrates all individual scoring components
 */
export function calculateZScore(
  product: ScoredProduct,
  quizInput: QuizInput
): ScoredProduct {
  // Step 1: Determine target ingredients
  const targetIngredients = getTargetIngredients(
    quizInput.concerns,
    quizInput.goals
  )
  
  // Step 2: Calculate all component scores
  const ingredient = calculateIngredientScore(product, targetIngredients)
  const goal = calculateGoalScore(product, quizInput.goals)
  const demographic = calculateDemographicScore(product, quizInput.demographic)
  const activity = calculateActivityScore(product, quizInput.activity)
  const quality = calculateQualityScore(product)
  const dietary = calculateDietaryScore(product, quizInput.dietPreferences)
  
  // Step 3: Sum all scores
  const totalScore = 
    ingredient.score +
    goal.score +
    demographic.score +
    activity.score +
    quality.score +
    dietary.score
  
  // Step 4: Collect match reasons (top 3)
  const matchReasons = [
    ...ingredient.reasons,
    ...goal.reasons,
    ...demographic.reasons,
    ...activity.reasons,
    ...quality.reasons,
    ...dietary.reasons,
  ].slice(0, 3)
  
  // Step 5: Return scored product
  return {
    ...product,
    zScore: Math.round(totalScore * 10) / 10,
    ingredientScore: Math.round(ingredient.score * 10) / 10,
    goalScore: Math.round(goal.score * 10) / 10,
    demographicScore: Math.round(demographic.score * 10) / 10,
    activityScore: Math.round(activity.score * 10) / 10,
    qualityScore: Math.round(quality.score * 10) / 10,
    dietaryScore: Math.round(dietary.score * 10) / 10,
    matchReasons,
  }
}

// ============================================
// RANKING FUNCTION
// ============================================

/**
 * Score and rank all products based on quiz input
 * Returns diverse, sorted results
 */
export function rankProductsByZScore(
  products: ScoredProduct[],
  quizInput: QuizInput
): ScoredProduct[] {
  // Step 1: Score all products
  const scoredProducts = products.map(product => 
    calculateZScore(product, quizInput)
  )
  
  // Step 2: HARD FILTER - Require BOTH ingredient match AND category relevance
  // This ensures we only show truly relevant products
  const relevantProducts = scoredProducts.filter(product => {
    // Must have ingredient match (score > 0)
    const hasIngredientMatch = (product.ingredientScore || 0) > 0
    
    // Must have direct category/goal match (not just related)
    // Products should have the user's goal in their category or goalTags
    const hasGoalMatch = 
      product.category?.includes(quizInput.goals) ||
      product.goalTags?.includes(quizInput.goals) ||
      // Also check for sleep-specific categories
      (quizInput.goals === 'sleep-stress' && (
        product.category?.some(c => ['sleep-quality', 'stress-anxiety', 'sleep-stress'].includes(c)) ||
        product.goalTags?.some(g => ['sleep-stress', 'sleep-quality', 'stress-anxiety'].includes(g))
      ))
    
    // Must pass BOTH checks
    return hasIngredientMatch && hasGoalMatch
  })
  
  // Step 3: Sort by Z-SCORE (descending)
  relevantProducts.sort((a, b) => (b.zScore || 0) - (a.zScore || 0))
  
  // Step 4: Enforce minimum score gap (1 point minimum between rankings)
  const gappedProducts = enforceMinimumScoreGap(relevantProducts, 1)
  
  // Step 5: Apply diversity filter
  const diverseProducts = applyDiversityFilter(gappedProducts)
  
  return diverseProducts
}

/**
 * Enforce minimum score gap between consecutive products
 * This ensures clear differentiation in rankings
 */
function enforceMinimumScoreGap(
  products: ScoredProduct[], 
  minGap: number
): ScoredProduct[] {
  if (products.length <= 1) return products
  
  const adjusted = [...products]
  
  for (let i = 1; i < adjusted.length; i++) {
    const prevScore = adjusted[i - 1].zScore || 0
    const currentScore = adjusted[i].zScore || 0
    
    // If gap is less than minimum, reduce current score
    if (prevScore - currentScore < minGap) {
      adjusted[i] = {
        ...adjusted[i],
        zScore: Math.round((prevScore - minGap) * 10) / 10
      }
    }
  }
  
  return adjusted
}

// ============================================
// UTILITY EXPORTS
// ============================================

/**
 * Get breakdown of scores for debugging/display
 */
export function getScoreBreakdown(product: ScoredProduct): {
  total: number
  components: Record<string, number>
} {
  return {
    total: product.zScore || 0,
    components: {
      ingredient: product.ingredientScore || 0,
      goal: product.goalScore || 0,
      demographic: product.demographicScore || 0,
      activity: product.activityScore || 0,
      quality: product.qualityScore || 0,
      dietary: product.dietaryScore || 0,
    }
  }
}
