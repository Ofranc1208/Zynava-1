'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './ResultCard.module.css'
import type { ScoredProduct } from './types'
import { getStudiesForProduct, getStudiesForIngredient } from '@/src/lib/utils/studyHelpers'

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
 * Get the match level description based on Z-SCORE
 */
function getMatchLevel(score: number): { level: string; description: string; color: string } {
  if (score >= 90) {
    return { 
      level: 'Excellent Match', 
      description: 'This supplement is highly aligned with your profile and goals.',
      color: '#059669'
    }
  } else if (score >= 80) {
    return { 
      level: 'Great Match', 
      description: 'This supplement strongly matches your needs and preferences.',
      color: '#0d9488'
    }
  } else if (score >= 70) {
    return { 
      level: 'Good Match', 
      description: 'This supplement is a solid option for your profile.',
      color: '#0369a1'
    }
  } else if (score >= 60) {
    return { 
      level: 'Moderate Match', 
      description: 'This supplement partially aligns with your needs.',
      color: '#ca8a04'
    }
  } else {
    return { 
      level: 'Basic Match', 
      description: 'This supplement may work but isn\'t optimized for your profile.',
      color: '#9ca3af'
    }
  }
}

/**
 * ResultCard - Individual product card component
 * 
 * Displays a single supplement product with its Z-SCORE, details, and CTA.
 * 
 * Features:
 * - Z-SCORE badge (top right corner) - clickable for explanation
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
  const [showZScorePopup, setShowZScorePopup] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Track mount state for portal (SSR compatibility)
  useEffect(() => {
    setMounted(true)
  }, [])
  
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
    masterIngredients,
  } = product
  
  const matchInfo = zScore ? getMatchLevel(zScore) : null

  // Get relevant studies for this product
  const productStudies = getStudiesForProduct(masterIngredients || [])

  // Find the first ingredient that has studies for the "View All" link
  const getFirstIngredientWithStudies = () => {
    if (!masterIngredients) return ''
    for (const ingredient of masterIngredients) {
      if (getStudiesForIngredient(ingredient).length > 0) {
        return ingredient
      }
    }
    return masterIngredients[0] || '' // Fallback to first ingredient
  }

  const searchIngredient = getFirstIngredientWithStudies()

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
        {/* Z-SCORE Badge - Clickable, bottom-right */}
        {zScore !== undefined && (
          <button 
            className={styles.zScoreBadge}
            onClick={() => setShowZScorePopup(true)}
            aria-label="Learn about Z-SCORE"
          >
            <span className={styles.zScoreLabel}>Z-SCORE</span>
            <span className={styles.zScoreValue}>{zScore}</span>
          </button>
        )}
        {isTopMatch && (
          <span className={styles.topMatchBadge}>🏆 Top Match</span>
        )}
        {badges.includes('On Sale') && (
          <span className={styles.saleBadge}>Sale</span>
        )}
      </div>
      
      {/* Z-SCORE Popup Modal - Rendered via Portal to avoid transform containment issues */}
      {mounted && showZScorePopup && zScore !== undefined && matchInfo && createPortal(
        <div className={styles.zScoreOverlay} onClick={() => setShowZScorePopup(false)}>
          <div className={styles.zScorePopup} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.popupClose}
              onClick={() => setShowZScorePopup(false)}
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className={styles.popupHeader}>
              <span className={styles.popupScoreBadge}>
                <span className={styles.popupScoreLabel}>Z-SCORE</span>
                <span className={styles.popupScoreValue}>{zScore}</span>
              </span>
              <span 
                className={styles.popupMatchLevel}
                style={{ color: matchInfo.color }}
              >
                {matchInfo.level}
              </span>
            </div>
            
            <p className={styles.popupDescription}>
              {matchInfo.description}
            </p>
            
            <div className={styles.popupDivider}></div>
            
            <h4 className={styles.popupTitle}>What is Z-SCORE?</h4>
            <p className={styles.popupText}>
              The Z-SCORE is Zynava&apos;s personalized matching algorithm. It calculates how well 
              this supplement aligns with <strong>your unique profile</strong> based on:
            </p>
            <ul className={styles.popupList}>
              <li>Your health goals and priorities</li>
              <li>Your demographic information</li>
              <li>Your dietary preferences</li>
              <li>Ingredient quality and relevance</li>
            </ul>
            <p className={styles.popupNote}>
              A higher Z-SCORE means this supplement is more tailored to your needs. 
              The same product may score differently for different people.
            </p>
            
            <button 
              className={styles.popupButton}
              onClick={() => setShowZScorePopup(false)}
            >
              Got it!
            </button>
          </div>
        </div>,
        document.body
      )}

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

        {/* Badges - Plain text style, not clickable */}
        {badges.filter(b => b !== 'Top Pick' && b !== 'Best Seller').length > 0 && (
          <div className={styles.badgeList}>
            {badges
              .filter(b => b !== 'Top Pick' && b !== 'Best Seller')
              .slice(0, 3)
              .map((badge, idx) => (
                <span key={idx} className={styles.badgeText}>
                  {badge}
                </span>
              ))}
          </div>
        )}

        {/* Research Link - Above price, slim and subtle */}
        {productStudies.length > 0 && (
          <a
            href={`/research?q=${encodeURIComponent(searchIngredient)}`}
            className={styles.researchLink}
          >
            📖 Read Research
          </a>
        )}

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

