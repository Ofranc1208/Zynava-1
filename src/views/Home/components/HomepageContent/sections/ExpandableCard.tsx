'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import cardStyles from './ExpandableCard.module.css'

interface ExpandableCardProps {
  children: React.ReactNode
  defaultExpanded?: boolean
}

/**
 * ExpandableCard - Card with built-in "Read More" functionality
 * The expand/collapse button is integrated into the card itself
 */
export default function ExpandableCard({ 
  children, 
  defaultExpanded = false 
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={`${styles.card} ${cardStyles.expandableCard}`}>
      <div className={`${cardStyles.cardContent} ${isExpanded ? cardStyles.expanded : ''}`}>
        {children}
      </div>

      {/* Read More Button inside card */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cardStyles.readMoreButton}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Show less content' : 'Show more content'}
      >
        <span className={cardStyles.buttonText}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
        <span className={cardStyles.chevron}>
          {isExpanded ? '↑' : '↓'}
        </span>
      </button>
    </div>
  )
}

