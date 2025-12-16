'use client'

import React, { useState } from 'react'
import styles from './ResultsControlBar.module.css'

type SortBy = 'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'value'

interface FilterState {
  brand?: string
  priceRange?: 'all' | 'under-15' | '15-30' | 'over-30'
  rating?: 'all' | '4' | '4.5'
}

interface ResultsControlBarProps {
  resultCount: number
  onResultCountChange: (count: number) => void
  sortBy: SortBy
  onSortChange: (sort: SortBy) => void
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

const RESULT_COUNTS = [5, 10, 20, 50]

const SORT_OPTIONS = [
  { id: 'relevance', label: 'Relevance' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'value', label: 'Best Value' },
]

const BRANDS = ['All Brands', 'NatureMade', 'NOW Foods', "Doctor's Best", 'Jarrow Formulas', 'Garden of Life']

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-15', label: 'Under $15' },
  { id: '15-30', label: '$15 - $30' },
  { id: 'over-30', label: 'Over $30' },
]

const RATING_OPTIONS = [
  { id: 'all', label: 'All Ratings' },
  { id: '4', label: '4+ Stars' },
  { id: '4.5', label: '4.5+ Stars' },
]

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
            {RESULT_COUNTS.map(count => (
              <option key={count} value={count}>
                {count}
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
            {BRANDS.map(brand => (
              <option key={brand} value={brand === 'All Brands' ? 'all' : brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range dropdown - inline with label */}
        <div className={styles.inlineGroup}>
          <label className={styles.inlineLabel}>Price</label>
          <select
            className={styles.inlineSelect}
            value={filters.priceRange || 'all'}
            onChange={e => onFiltersChange({ ...filters, priceRange: e.target.value as any })}
          >
            {PRICE_RANGES.map(range => (
              <option key={range.id} value={range.id}>
                {range.label}
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
            onChange={e => onFiltersChange({ ...filters, rating: e.target.value as any })}
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

