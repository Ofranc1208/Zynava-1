'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ResearchSearch from './components/ResearchSearch'
import StudyResults from './components/StudyResults'
import StudyFilters from './components/StudyFilters'
import Link from 'next/link'
import { StudyFilters as StudyFiltersType } from '@/src/lib/utils/studyHelpers'
import styles from './research.module.css'

export default function ResearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [filters, setFilters] = useState<StudyFiltersType>({
    source: '',
    type: '',
    yearRange: ''
  })

  useEffect(() => {
    const queryFromUrl = searchParams.get('q')
    if (queryFromUrl) {
      setSearchQuery(queryFromUrl)
    }
  }, [searchParams])

  return (
    <main className={styles.researchPage}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        {initialQuery && (
          <button 
            onClick={() => window.history.back()}
            className={styles.backButton}
          >
            ← Back
          </button>
        )}
        <h1 className={styles.pageTitle}>Research Library</h1>
      </div>

      {/* 1. Filters Row - TOP */}
      <div className={styles.filtersRow}>
        <StudyFilters
          filters={filters}
          onChange={setFilters}
        />
      </div>

      {/* 2. Search Row - Below filters */}
      <div className={styles.searchRow}>
        <ResearchSearch
          initialQuery={initialQuery}
          onSearch={setSearchQuery}
        />
      </div>

      {/* Disclaimer - compact */}
      <p className={styles.disclaimer}>
        Studies are for educational reference only. <Link href="/disclaimer" className={styles.disclaimerLink}>Learn more</Link>
      </p>

      {/* 3. Studies List */}
      <div className={styles.studiesContainer}>
        <StudyResults
          query={searchQuery}
          filters={filters}
        />
      </div>
    </main>
  )
}
