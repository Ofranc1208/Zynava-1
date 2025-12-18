/**
 * @module Advisor/types
 * 
 * Type definitions for the Supplement Advisor feature.
 * 
 * These types are used throughout the quiz flow, results scoring,
 * and URL parameter handling.
 */

// =============================================================================
// QUIZ SELECTION TYPES
// =============================================================================

/**
 * Primary wellness goal selected by the user.
 * Determines which supplements are most relevant.
 */
export type GoalId = 
  | 'overall-health'
  | 'boost-immunity'
  | 'energy-vitality'
  | 'bone-joint'
  | 'heart-health'
  | 'gut-health'
  | 'sleep-stress'
  | 'brain-health'

/**
 * Age range brackets for demographic grouping.
 */
export type AgeRange = '18-35' | '36-50' | '51-65' | '65+'

/**
 * Combined gender and age bracket identifier.
 * Format: `{gender}-{age-range}`
 */
export type DemographicId = 
  | 'male-18-35'
  | 'male-36-50'
  | 'male-51-65'
  | 'male-65-plus'
  | 'female-18-35'
  | 'female-36-50'
  | 'female-51-65'
  | 'female-65-plus'

/**
 * User's physical activity level.
 * Affects supplement recommendations (e.g., athletes need more protein).
 */
export type ActivityLevel = 
  | 'power-lifter' 
  | 'endurance-athlete' 
  | 'regular-gym-goer' 
  | 'active-lifestyle' 
  | 'light-exercise' 
  | 'desk-worker' 
  | 'low-activity' 
  | 'recovery-injury'

/**
 * Dietary restrictions and preferences.
 * Used to filter supplements that match user's diet.
 */
export type DietType = 
  | 'no-preference' 
  | 'vegan' 
  | 'vegetarian' 
  | 'gluten-free' 
  | 'sugar-free' 
  | 'kosher' 
  | 'halal' 
  | 'non-gmo-organic'

/**
 * Health concern/focus area identifiers.
 * 
 * Organized by goal category:
 * - Generic (fallback for any goal)
 * - Gut health specific
 * - Overall health specific
 * - Immunity specific
 * - Energy specific
 * - Joint specific
 * - Heart specific
 * - Sleep/stress specific
 * - Brain specific
 */
export type ConcernId =
  // Generic concerns (fallback)
  | 'sleep-quality'
  | 'low-energy'
  | 'digestive-sensitivity'
  | 'joint-discomfort'
  | 'stress-anxiety'
  | 'immune-support'
  | 'weight-management'
  | 'none'
  // Gut health specific
  | 'gut-digestive-enzymes'
  | 'gut-probiotic-balance'
  | 'gut-inflammation'
  | 'gut-bloating'
  | 'gut-constipation'
  | 'gut-leaky-gut'
  | 'gut-food-sensitivity'
  // Overall health specific (supplement types)
  | 'overall-multivitamin'
  | 'overall-vitamin-d'
  | 'overall-omega3'
  | 'overall-probiotics'
  | 'overall-magnesium'
  | 'overall-vitamin-c'
  | 'overall-b-complex'
  // Immunity specific
  | 'immune-cold-flu'
  | 'immune-antioxidants'
  | 'immune-vitamin-d'
  | 'immune-zinc'
  | 'immune-elderberry'
  | 'immune-probiotics'
  | 'immune-seasonal'
  // Energy specific
  | 'energy-fatigue'
  | 'energy-afternoon'
  | 'energy-morning'
  | 'energy-b12'
  | 'energy-iron'
  | 'energy-coq10'
  | 'energy-adrenal'
  // Joint specific
  | 'joint-mobility'
  | 'joint-pain'
  | 'joint-calcium'
  | 'joint-vitamin-d'
  | 'joint-glucosamine'
  | 'joint-arthritis'
  | 'joint-inflammation'
  // Heart specific
  | 'heart-cholesterol'
  | 'heart-blood-pressure'
  | 'heart-omega3'
  | 'heart-coq10'
  | 'heart-circulation'
  | 'heart-antioxidants'
  | 'heart-magnesium'
  // Sleep/stress specific
  | 'sleep-insomnia'
  | 'sleep-melatonin'
  | 'sleep-magnesium'
  | 'stress-cortisol'
  | 'stress-adaptogens'
  // Brain specific
  | 'brain-memory'
  | 'brain-focus'
  | 'brain-omega3'
  | 'brain-b12'
  | 'brain-ginkgo'
  | 'brain-lion-mane'
  | 'brain-cognitive'

/**
 * Shopping/buying preferences.
 * User can select up to 3 to influence product ranking.
 */
export type ShoppingPreference = 
  | 'budget-friendly'
  | 'premium-quality'
  | 'free-shipping'
  | 'new-arrivals'
  | 'on-sale'
  | 'bundle-deals'
  | 'subscribe-save'

// =============================================================================
// QUIZ STATE INTERFACES
// =============================================================================

/**
 * Complete user input from the quiz.
 * Passed to the results page for supplement scoring.
 */
export interface AdvisorInput {
  /** Selected wellness goal(s) - typically just one */
  goals: GoalId[]
  /** Gender + age bracket */
  demographic?: DemographicId
  /** Age range (alternative to demographic) */
  ageRange?: AgeRange
  /** Physical activity level */
  activityLevel?: ActivityLevel
  /** Dietary restriction/preference */
  diet?: DietType
  /** Health concerns to address */
  concerns: ConcernId[]
  /** Buying preferences (max 3) */
  shoppingPreferences: ShoppingPreference[]
}

/**
 * Definition of a single quiz step.
 */
export interface AdvisorStep {
  /** Unique step identifier */
  id: string
  /** Step type for rendering and logic */
  type: 'welcome' | 'goals' | 'demographics' | 'lifestyle' | 'diet' | 'concerns' | 'budget' | 'processing' | 'results'
  /** Question text or React component */
  message: string | React.ReactNode
  /** Available options for selection */
  options?: QuizOption[]
  /** Whether step has been completed */
  isComplete: boolean
}

/**
 * Individual option within a quiz step.
 */
export interface QuizOption {
  /** Unique option identifier */
  id: string
  /** Display label (may include emoji) */
  label: string
  /** Value stored when selected */
  value: string
  /** Optional description text */
  description?: string
}

/**
 * Chat message in the advisor interface.
 */
export interface AdvisorMessage {
  /** Unique message identifier */
  id: string
  /** Message content type */
  type: 'text' | 'quiz-step' | 'component'
  /** Who sent the message */
  sender: 'advisor' | 'user'
  /** Text content (if type is 'text') */
  text?: string
  /** Quiz step data (if type is 'quiz-step') */
  step?: AdvisorStep
  /** Custom component (if type is 'component') */
  component?: React.ReactNode
  /** When the message was sent */
  timestamp: Date
}
