/**
 * Results Page Constants
 * UI-related constants for the Results page components.
 * 
 * Note: Algorithm-specific constants (SCORE_WEIGHTS, OPTIMAL_DOSAGE, etc.)
 * are defined in ./scoring/constants.ts
 */

import type { SortOption, PriceRangeOption, RatingOption } from './types'

// ============================================
// RESULT COUNT OPTIONS
// ============================================

/**
 * Available options for number of results to display.
 */
export const RESULT_COUNTS = [5, 10, 20, 50] as const

/**
 * Default number of results to show.
 */
export const DEFAULT_RESULT_COUNT = 5

// ============================================
// SORT OPTIONS
// ============================================

/**
 * Available sort options for the results dropdown.
 */
export const SORT_OPTIONS: SortOption[] = [
  { id: 'relevance', label: 'Relevance' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'value', label: 'Best Value' },
]

/**
 * Default sort option.
 */
export const DEFAULT_SORT: 'relevance' = 'relevance'

// ============================================
// FILTER OPTIONS
// ============================================

/**
 * Available brands for filtering.
 */
export const BRAND_OPTIONS = [
  'All Brands',
  'NatureMade',
  'NOW Foods',
  "Doctor's Best",
  'Jarrow Formulas',
  'Garden of Life',
] as const

/**
 * Price range filter options.
 */
export const PRICE_RANGE_OPTIONS: PriceRangeOption[] = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-15', label: 'Under $15' },
  { id: '15-30', label: '$15 - $30' },
  { id: 'over-30', label: 'Over $30' },
]

/**
 * Rating filter options.
 */
export const RATING_OPTIONS: RatingOption[] = [
  { id: 'all', label: 'All Ratings' },
  { id: '4', label: '4+ Stars' },
  { id: '4.5', label: '4.5+ Stars' },
]

// ============================================
// UI COLORS (matching global theme)
// ============================================

/**
 * Color palette for the Results page.
 */
export const RESULTS_COLORS = {
  /** Primary brand color */
  primary: '#ff6b35',
  /** Primary hover state */
  primaryHover: '#e55a2b',
  /** Page background (matches globals.css) */
  background: '#fffff2',
  /** Card background */
  cardBackground: '#ffffff',
  /** Dark text */
  textDark: '#1f2937',
  /** Medium text */
  textMedium: '#374151',
  /** Light/muted text */
  textMuted: '#6b7280',
  /** Border color */
  border: '#e2e8f0',
  /** Success/positive color */
  success: '#15803d',
  /** Success background */
  successBackground: '#f0fdf4',
  /** Sale/warning color */
  sale: '#dc2626',
  /** Z-SCORE badge gradient start */
  zScoreStart: '#1e3a5f',
  /** Z-SCORE badge gradient end */
  zScoreEnd: '#2c5282',
} as const

// ============================================
// TYPOGRAPHY
// ============================================

/**
 * Typography settings for the Results page.
 */
export const RESULTS_TYPOGRAPHY = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  titleSize: '1.8rem',
  titleWeight: 900,
  bodySize: '0.9rem',
  smallSize: '0.8rem',
  chipSize: '0.7rem',
} as const

// ============================================
// LAYOUT
// ============================================

/**
 * Layout settings for the Results page.
 */
export const RESULTS_LAYOUT = {
  /** Maximum container width on large screens */
  maxWidth: '1400px',
  /** Grid gap between cards */
  gridGap: '0.6rem',
  /** Padding on mobile */
  mobilePadding: '1rem',
  /** Padding on desktop */
  desktopPadding: '1.6rem',
} as const

