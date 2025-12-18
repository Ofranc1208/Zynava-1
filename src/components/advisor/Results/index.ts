/**
 * Results Module
 * Main entry point for the advisor results page components.
 *
 * This barrel file provides centralized exports for the Results feature,
 * including components, algorithm functions, types, and constants.
 */

// ============================================
// COMPONENTS
// ============================================

/** Main results page component */
export { default as ResultsPage } from './ResultsPage'

/** Individual product card component */
export { default as ResultCard } from './ResultCard'

/** Filter and sort control bar */
export { default as ResultsControlBar } from './ResultsControlBar'

/** Additional filter UI */
export { default as ResultsFilters } from './ResultsFilters'

// ============================================
// ALGORITHM
// ============================================

/** Z-SCORE algorithm functions */
export {
  calculateZScore,
  rankProductsByZScore,
  getScoreBreakdown,
} from './zScoreAlgorithm'

// ============================================
// MOCK DATA
// ============================================

/** Mock product database */
export {
  ALL_PRODUCTS,
  MOCK_RESULTS,
  getResultsByQuizParams,
  getResultsBySegment,
} from './mockData'

// ============================================
// TYPES
// ============================================

// UI types
export type {
  QuizParams,
  SortBy,
  PriceRange,
  RatingFilter,
  FilterState,
  ResultsPageProps,
  ResultCardProps,
  ResultsControlBarProps,
  PreferenceChip,
  SortOption,
  PriceRangeOption,
  RatingOption,
} from './types'

// Algorithm types (re-exported from scoring)
export type {
  QuizInput,
  ScoredProduct,
  ScoreResult,
} from './types'

// ============================================
// CONSTANTS
// ============================================

// UI constants
export {
  RESULT_COUNTS,
  DEFAULT_RESULT_COUNT,
  SORT_OPTIONS,
  DEFAULT_SORT,
  BRAND_OPTIONS,
  PRICE_RANGE_OPTIONS,
  RATING_OPTIONS,
  RESULTS_COLORS,
  RESULTS_TYPOGRAPHY,
  RESULTS_LAYOUT,
} from './constants'

// ============================================
// SCORING SUB-MODULE
// ============================================

// Re-export scoring module for advanced usage
export * from './scoring'
