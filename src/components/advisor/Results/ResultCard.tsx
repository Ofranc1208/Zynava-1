'use client'

import React from 'react'
import styles from './ResultCard.module.css'
import type { ScoredProduct } from './types'

/**
 * Props for the ResultCard component.
 */
interface ResultCardProps {
  /** The scored product to display */
  product: ScoredProduct
  /** Whether this is the top-ranked result */
  isTopMatch?: boolean
}

/**
 * ResultCard - Individual product card component
 * 
 * Displays a single supplement product with its Z-SCORE, details, and CTA.
 * 
 * Features:
 * - Z-SCORE badge (top right corner)
 * - Top Match badge for first result
 * - Sale badge when applicable
 * - Star rating with review count
 * - Match reasons (why this product fits the user)
 * - Product badges (e.g., "Vegan", "Non-GMO")
 * - Price with original price strikethrough for sales
 * - CTA button to view on vendor site
 * 
 * @param props - Component props
 * @returns The ResultCard component
 */
export default function ResultCard({ product, isTopMatch = false }: ResultCardProps) {
  const {
    title,
    brand,
    vendor,
    price,
    originalPrice,
    badges,
    benefit,
    rating,
    reviewCount,
    zScore,
    matchReasons,
  } = product

  // Render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalf = rating % 1 >= 0.5
    const stars = []
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className={styles.starFull}>★</span>)
      } else if (i === fullStars && hasHalf) {
        stars.push(<span key={i} className={styles.starHalf}>★</span>)
      } else {
        stars.push(<span key={i} className={styles.starEmpty}>★</span>)
      }
    }
    return stars
  }

  const handleViewProduct = () => {
    // Placeholder - will link to actual vendor in production
    alert(`This would open ${title} on ${vendor}.\n\nThis is a placeholder - real affiliate links coming soon!`)
  }

  return (
    <div className={styles.card}>
      {/* Product Image */}
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderIcon}>💊</span>
        </div>
        {/* Quality Score Badge */}
        {zScore !== undefined && (
          <span className={styles.zScoreBadge}>
            <span className={styles.zScoreLabel}>QUALITY</span>
            <span className={styles.zScoreValue}>{zScore}</span>
          </span>
        )}
        {isTopMatch && (
          <span className={styles.topMatchBadge}>🏆 Top Match</span>
        )}
        {badges.includes('On Sale') && (
          <span className={styles.saleBadge}>Sale</span>
        )}
      </div>

      {/* Product Info */}
      <div className={styles.info}>
        <p className={styles.brand}>{brand}</p>
        <h3 className={styles.title}>{title}</h3>
        
        {/* Rating */}
        <div className={styles.rating}>
          <span className={styles.stars}>{renderStars(rating)}</span>
          <span className={styles.reviewCount}>({reviewCount.toLocaleString()})</span>
        </div>

        {/* Match Reasons */}
        {matchReasons && matchReasons.length > 0 && (
          <div className={styles.matchReasons}>
            {matchReasons.slice(0, 2).map((reason, idx) => (
              <span key={idx} className={styles.matchReason}>
                ✓ {reason}
              </span>
            ))}
          </div>
        )}

        {/* Badges - Filter out "Top Pick" as it conflicts with algorithm ranking */}
        <div className={styles.badges}>
          {badges
            .filter(b => b !== 'Top Pick' && b !== 'Best Seller')
            .slice(0, 2)
            .map((badge, idx) => (
              <span key={idx} className={styles.badge}>
                {badge}
              </span>
            ))}
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>{price}</span>
          {originalPrice && (
            <span className={styles.originalPrice}>{originalPrice}</span>
          )}
        </div>

        {/* Vendor */}
        <p className={styles.vendor}>Available on {vendor}</p>

        {/* CTA */}
        <button 
          className={styles.ctaButton}
          onClick={handleViewProduct}
        >
          View on {vendor}
        </button>
      </div>
    </div>
  )
}

