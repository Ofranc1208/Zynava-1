/**
 * Results Page Type Definitions
 * UI-related types for the Results page components.
 * 
 * Note: Algorithm-specific types (QuizInput, ScoredProduct, etc.)
 * are defined in ./scoring/types.ts and re-exported via ./zScoreAlgorithm.ts
 */

// Re-export algorithm types for convenience
export type { QuizInput, ScoredProduct, ScoreResult } from './scoring'

// ============================================
// QUIZ PARAMS (from URL)
// ============================================

/**
 * Parameters extracted from the URL query string.
 * These are passed from the quiz completion to the results page.
 */
export interface QuizParams {
  goals: string
  demographic: string
  activity: string
  diet: string
  concerns: string
  preferences: string
}

// ============================================
// FILTER & SORT TYPES
// ============================================

/**
 * Available sort options for results ordering.
 */
export type SortBy = 'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'value'

/**
 * Price range filter options.
 */
export type PriceRange = 'all' | 'under-15' | '15-30' | 'over-30'

/**
 * Rating filter options.
 */
export type RatingFilter = 'all' | '4' | '4.5'

/**
 * Current filter state for the results page.
 */
export interface FilterState {
  /** Filter by specific brand name */
  brand?: string
  /** Filter by price range */
  priceRange?: PriceRange
  /** Filter by minimum rating */
  rating?: RatingFilter
}

// ============================================
// COMPONENT PROPS
// ============================================

/**
 * Props for the ResultsPage component.
 */
export interface ResultsPageProps {
  quizParams: QuizParams
}

/**
 * Props for the ResultCard component.
 */
export interface ResultCardProps {
  product: import('./scoring').ScoredProduct
  isTopMatch?: boolean
}

/**
 * Props for the ResultsControlBar component.
 */
export interface ResultsControlBarProps {
  resultCount: number
  onResultCountChange: (count: number) => void
  sortBy: SortBy
  onSortChange: (sort: SortBy) => void
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

// ============================================
// DISPLAY TYPES
// ============================================

/**
 * A preference chip displayed in the header.
 */
export interface PreferenceChip {
  label: string
  icon: string
}

/**
 * Sort option configuration.
 */
export interface SortOption {
  id: SortBy
  label: string
}

/**
 * Price range option configuration.
 */
export interface PriceRangeOption {
  id: PriceRange
  label: string
}

/**
 * Rating option configuration.
 */
export interface RatingOption {
  id: RatingFilter
  label: string
}

