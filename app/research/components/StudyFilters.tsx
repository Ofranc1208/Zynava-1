'use client'

import type { StudyFilters } from '@/src/lib/utils/studyHelpers'
import styles from '../research.module.css'

interface StudyFiltersProps {
  filters: StudyFilters
  onChange: (filters: StudyFilters) => void
}

export default function StudyFilters({ filters, onChange }: StudyFiltersProps) {
  const sources = ['PubMed', 'NIH', 'Mayo Clinic', 'Cleveland Clinic', 'WebMD']
  const types = ['clinical-trial', 'review', 'meta-analysis', 'general']
  const yearRanges = ['2020-Present', '2015-2019', '2010-2014', 'Before 2010']

  const handleFilterChange = (filterType: string, value: string) => {
    onChange({
      ...filters,
      [filterType]: value === 'all' ? '' : value
    })
  }

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterGroup}>
        <label htmlFor="filter-source">Source:</label>
        <select
          id="filter-source"
          name="filter-source"
          value={filters.source}
          onChange={(e) => handleFilterChange('source', e.target.value)}
        >
          <option value="">All Sources</option>
          {sources.map(source => (
            <option key={source} value={source}>{source}</option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="filter-type">Type:</label>
        <select
          id="filter-type"
          name="filter-type"
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>
              {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="filter-year">Year:</label>
        <select
          id="filter-year"
          name="filter-year"
          value={filters.yearRange}
          onChange={(e) => handleFilterChange('yearRange', e.target.value)}
        >
          <option value="">All Years</option>
          {yearRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
