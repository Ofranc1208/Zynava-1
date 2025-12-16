/**
 * Diversity Filter
 * Ensures variety in results - prevents showing 5 nearly identical products
 * 
 * Rules:
 * - No more than 2 products from the same brand
 * - No more than 2 products with the same primary ingredient
 * - Future: At least 3 unique ingredient categories in top 5
 */

import type { ScoredProduct } from './types'
import { DIVERSITY_LIMITS } from './constants'

interface DiversityTracker {
  brandCounts: Record<string, number>
  ingredientCounts: Record<string, number>
  categorySet: Set<string>
}

/**
 * Check if a product passes diversity rules
 */
function passesDiversityCheck(
  product: ScoredProduct,
  tracker: DiversityTracker
): boolean {
  // Check brand limit
  const brandCount = tracker.brandCounts[product.brand] || 0
  if (brandCount >= DIVERSITY_LIMITS.MAX_PER_BRAND) {
    return false
  }
  
  // Check primary ingredient limit
  const primaryIngredient = product.masterIngredients?.[0] || ''
  if (primaryIngredient) {
    const ingCount = tracker.ingredientCounts[primaryIngredient] || 0
    if (ingCount >= DIVERSITY_LIMITS.MAX_PER_INGREDIENT) {
      return false
    }
  }
  
  return true
}

/**
 * Update tracker after accepting a product
 */
function updateTracker(product: ScoredProduct, tracker: DiversityTracker): void {
  // Track brand
  tracker.brandCounts[product.brand] = (tracker.brandCounts[product.brand] || 0) + 1
  
  // Track primary ingredient
  const primaryIngredient = product.masterIngredients?.[0] || ''
  if (primaryIngredient) {
    tracker.ingredientCounts[primaryIngredient] = 
      (tracker.ingredientCounts[primaryIngredient] || 0) + 1
  }
  
  // Track categories (for future use)
  product.category?.forEach(cat => tracker.categorySet.add(cat))
}

/**
 * Apply diversity rules to scored products
 * Returns filtered list with variety enforced
 */
export function applyDiversityFilter(
  scoredProducts: ScoredProduct[],
  maxResults: number = DIVERSITY_LIMITS.MAX_RESULTS
): ScoredProduct[] {
  const diverseProducts: ScoredProduct[] = []
  
  const tracker: DiversityTracker = {
    brandCounts: {},
    ingredientCounts: {},
    categorySet: new Set(),
  }
  
  for (const product of scoredProducts) {
    // Check if product passes diversity rules
    if (passesDiversityCheck(product, tracker)) {
      diverseProducts.push(product)
      updateTracker(product, tracker)
      
      // Stop when we have enough results
      if (diverseProducts.length >= maxResults) {
        break
      }
    }
  }
  
  return diverseProducts
}

/**
 * Get diversity stats for debugging
 */
export function getDiversityStats(products: ScoredProduct[]): {
  uniqueBrands: number
  uniqueIngredients: number
  uniqueCategories: number
} {
  const brands = new Set(products.map(p => p.brand))
  const ingredients = new Set(products.flatMap(p => p.masterIngredients || []))
  const categories = new Set(products.flatMap(p => p.category || []))
  
  return {
    uniqueBrands: brands.size,
    uniqueIngredients: ingredients.size,
    uniqueCategories: categories.size,
  }
}

