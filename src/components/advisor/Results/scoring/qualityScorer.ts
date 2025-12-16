/**
 * Quality Score Calculator (0-15 points)
 * Trust signals based on brand reputation, reviews, and certifications
 * 
 * Components:
 * - Brand Tier Score (0-6 points)
 * - Review Score (0-6 points)
 * - Certification Bonus (0-3 points)
 */

import type { ScoredProduct, ScoreResult, BrandTier } from './types'
import { BRAND_TIERS, BRAND_TIER_POINTS } from './constants'

/**
 * Get brand tier for a product
 */
function getBrandTier(product: ScoredProduct): BrandTier {
  // First check if product has explicit tier
  if (product.brandTier) {
    return product.brandTier
  }
  // Look up in brand tiers map
  return BRAND_TIERS[product.brand] || 'C'
}

/**
 * Calculate brand tier score (0-6 points)
 */
function calculateBrandTierScore(product: ScoredProduct): { score: number; reason: string | null } {
  const tier = getBrandTier(product)
  const score = BRAND_TIER_POINTS[tier]
  
  // Only add reason for premium brands
  const reason = tier === 'A' ? `Premium brand: ${product.brand}` : null
  
  return { score, reason }
}

/**
 * Calculate review score (0-6 points)
 * - Rating points: 0-3 (based on 5-star rating)
 * - Volume points: 0-3 (logarithmic scale for review count)
 */
function calculateReviewScore(product: ScoredProduct): { score: number; reason: string | null } {
  // Rating points (0-3)
  const ratingPoints = (product.rating / 5) * 3
  
  // Volume points - logarithmic scale (0-3)
  // 10 reviews = 1pt, 100 = 2pts, 1000 = 3pts
  const volumePoints = Math.min(3, Math.log10(product.reviewCount + 1))
  
  const score = ratingPoints + volumePoints
  
  // Add reason for highly rated products
  const reason = product.rating >= 4.7 ? `Highly rated (${product.rating}★)` : null
  
  return { score, reason }
}

/**
 * Calculate certification bonus (0-3 points)
 */
function calculateCertificationBonus(product: ScoredProduct): { score: number; reason: string | null } {
  let score = 0
  let reason: string | null = null
  
  if (product.thirdPartyTested) {
    score += 1.5
    reason = 'Third-party tested'
  }
  
  // Future: Add more certification checks
  // if (product.gmpCertified) score += 1
  // if (product.nsfCertified || product.uspVerified) score += 1
  
  return { score, reason }
}

/**
 * Calculate Quality Score (0-15 points)
 */
export function calculateQualityScore(product: ScoredProduct): ScoreResult {
  const reasons: string[] = []
  
  // Calculate components
  const brandTier = calculateBrandTierScore(product)
  const review = calculateReviewScore(product)
  const certification = calculateCertificationBonus(product)
  
  // Collect reasons
  if (brandTier.reason) reasons.push(brandTier.reason)
  if (review.reason) reasons.push(review.reason)
  if (certification.reason) reasons.push(certification.reason)
  
  // Sum scores
  const score = brandTier.score + review.score + certification.score
  
  return { score, reasons }
}

