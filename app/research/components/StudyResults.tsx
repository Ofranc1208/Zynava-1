'use client'

import { useMemo } from 'react'
import StudyCard from '@/src/components/shared/StudyCard'
import { searchStudies, StudyFilters } from '@/src/lib/utils/studyHelpers'
import styles from '../research.module.css'

interface StudyResultsProps {
  query: string
  filters: StudyFilters
}

export default function StudyResults({ query, filters }: StudyResultsProps) {
  // Compute results immediately - no loading state needed
  const results = useMemo(() => {
    return searchStudies(query, filters)
  }, [query, filters])

  if (results.length === 0 && query) {
    return (
      <div className={styles.noResults}>
        <h3>No studies found</h3>
        <p>Try: magnesium, vitamin D, omega-3, ashwagandha</p>
      </div>
    )
  }

  return (
    <div className={styles.resultsContainer}>
      {query && (
        <div className={styles.resultsHeader}>
          <h2>Studies for "{query}"</h2>
          <span className={styles.resultCount}>{results.length} studies found</span>
        </div>
      )}

      <div className={styles.studiesGrid}>
        {results.map((study) => (
          <StudyCard
            key={study.id}
            study={study}
            showAbstract={false}
          />
        ))}
      </div>
    </div>
  )
}
