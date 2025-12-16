'use client'

import React from 'react'
import styles from './ResultsFilters.module.css'

type Segment = 'top' | 'budget' | 'premium' | 'value'

interface ResultsFiltersProps {
  activeSegment: Segment
  onSegmentChange: (segment: Segment) => void
}

const SEGMENTS: { id: Segment; label: string; icon: string }[] = [
  { id: 'top', label: 'Top 5', icon: '⭐' },
  { id: 'budget', label: 'Budget', icon: '💰' },
  { id: 'premium', label: 'Premium', icon: '💎' },
  { id: 'value', label: 'Best Value', icon: '🏷️' },
]

export default function ResultsFilters({ activeSegment, onSegmentChange }: ResultsFiltersProps) {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterTabs}>
        {SEGMENTS.map((segment) => (
          <button
            key={segment.id}
            className={`${styles.filterTab} ${activeSegment === segment.id ? styles.active : ''}`}
            onClick={() => onSegmentChange(segment.id)}
          >
            <span className={styles.tabIcon}>{segment.icon}</span>
            <span className={styles.tabLabel}>{segment.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

