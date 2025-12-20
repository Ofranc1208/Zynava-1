'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableSection.module.css'

interface ExpandableSectionProps {
  children: React.ReactNode
  defaultExpanded?: boolean
}

/**
 * ExpandableSection - Reusable wrapper for collapsible content sections
 * Reduces initial page scroll while keeping all content accessible and SEO-friendly
 */
export default function ExpandableSection({ 
  children, 
  defaultExpanded = false 
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={expandStyles.expandableWrapper}>
      <div className={`${expandStyles.contentWrapper} ${isExpanded ? expandStyles.expanded : ''}`}>
        {children}
      </div>

      {/* Read More Button */}
      <div className={expandStyles.buttonWrapper}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={expandStyles.readMoreButton}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Show less content' : 'Show more content'}
        >
          <span className={expandStyles.buttonText}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
          <span className={expandStyles.chevron}>
            {isExpanded ? '↑' : '↓'}
          </span>
        </button>
      </div>
    </div>
  )
}

