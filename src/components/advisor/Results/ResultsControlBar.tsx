'use client'

import React from 'react'
import styles from './ResultsControlBar.module.css'
import type { SortBy, FilterState, PriceRange, RatingFilter } from './types'
import {
  RESULT_COUNTS,
  SORT_OPTIONS,
  BRAND_OPTIONS,
  PRICE_RANGE_OPTIONS,
  RATING_OPTIONS,
} from './constants'

/**
 * Props for the ResultsControlBar component.
 */
interface ResultsControlBarProps {
  /** Current number of results to display */
  resultCount: number
  /** Callback when result count changes */
  onResultCountChange: (count: number) => void
  /** Current sort option */
  sortBy: SortBy
  /** Callback when sort option changes */
  onSortChange: (sort: SortBy) => void
  /** Current filter state */
  filters: FilterState
  /** Callback when filters change */
  onFiltersChange: (filters: FilterState) => void
}

/**
 * ResultsControlBar - Filter and sort controls
 * 
 * Provides UI controls for filtering and sorting the results grid.
 * All controls are inline dropdowns for compact display.
 * 
 * Features:
 * - Result count selector (5, 10, 20, 50)
 * - Brand filter dropdown
 * - Price range filter dropdown
 * - Rating filter dropdown
 * - Sort order dropdown
 * 
 * @param props - Component props
 * @returns The ResultsControlBar component
 */
export default function ResultsControlBar({
  resultCount,
  onResultCountChange,
  sortBy,
  onSortChange,
  filters,
  onFiltersChange,
}: ResultsControlBarProps) {

  return (
    <div className={styles.controlBar}>
      {/* Single Row: All Controls */}
      <div className={styles.controlsRow}>
        {/* Show dropdown - inline with label */}
        <div className={styles.inlineGroup}>
          <label className={styles.inlineLabel}>Show</label>
          <select
            className={styles.inlineSelect}
            value={resultCount}
            onChange={e => onResultCountChange(parseInt(e.target.value))}
          >
            {RESULT_COUNTS.map((count: number) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range dropdown - inline with label (moved after Show) */}
        <div className={styles.inlineGroup}>
          <label className={styles.inlineLabel}>Price</label>
          <select
            className={styles.inlineSelect}
            value={filters.priceRange || 'all'}
            onChange={e => onFiltersChange({ ...filters, priceRange: e.target.value as PriceRange })}
          >
            {PRICE_RANGE_OPTIONS.map(range => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Brands dropdown - inline with label */}
        <div className={styles.inlineGroup}>
          <label className={styles.inlineLabel}>Brand</label>
          <select
            className={styles.inlineSelect}
            value={filters.brand || 'all'}
            onChange={e => onFiltersChange({ ...filters, brand: e.target.value === 'all' ? undefined : e.target.value })}
          >
            {BRAND_OPTIONS.map((brand: string) => (
              <option key={brand} value={brand === 'All Brands' ? 'all' : brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Rating dropdown - inline with label */}
        <div className={styles.inlineGroup}>
          <label className={styles.inlineLabel}>Rating</label>
          <select
            className={styles.inlineSelect}
            value={filters.rating || 'all'}
            onChange={e => onFiltersChange({ ...filters, rating: e.target.value as RatingFilter })}
          >
            {RATING_OPTIONS.map(opt => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort dropdown - inline with label (last) */}
        <div className={styles.inlineGroup}>
          <label className={styles.inlineLabel}>Sort</label>
          <select
            className={styles.inlineSelect}
            value={sortBy}
            onChange={e => onSortChange(e.target.value as SortBy)}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  )
}

