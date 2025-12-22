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
 * Expanded to 10 goals including Muscle & Performance and Weight Management.
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
  | 'muscle-performance'   // NEW - The Builder
  | 'weight-management'    // NEW - The Slimmer

/**
 * Age range brackets for demographic grouping.
 * Simplified to 6 decade-based options for cleaner UX.
 */
export type AgeRange = '18-29' | '30-39' | '40-49' | '50-59' | '60-69' | '70+' | 'skip'

/**
 * Sex/Gender selection for Step 2 Profile.
 */
export type Sex = 'male' | 'female'

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
 * 8 options for clear categorization + skip.
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
  | 'skip'

/**
 * Dietary restrictions and preferences.
 * Expanded to 10 options (removed Kosher, added Vegetarian, Dairy-Free, Keto).
 */
export type DietType = 
  | 'no-preference' 
  | 'vegan' 
  | 'vegetarian'        // NEW
  | 'gluten-free' 
  | 'dairy-free'        // NEW
  | 'sugar-free' 
  | 'keto-low-carb'     // NEW
  | 'halal' 
  | 'non-gmo-organic'

/**
 * Preferred supplement format.
 * NEW Step 6 - Important for accessibility and user preference.
 */
export type SupplementFormat =
  | 'capsules'
  | 'tablets'
  | 'gummies'
  | 'powder'
  | 'liquid'
  | 'softgels'
  | 'chewables'
  | 'single-serve-packs'
  | 'no-preference'

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
 * - Muscle/Performance specific (NEW)
 * - Weight Management specific (NEW)
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
  | 'gut-greens'
  | 'gut-colostrum'
  // Overall health specific (supplement types)
  | 'overall-multivitamin'
  | 'overall-vitamin-d'
  | 'overall-omega3'
  | 'overall-probiotics'
  | 'overall-magnesium'
  | 'overall-vitamin-c'
  | 'overall-b-complex'
  | 'overall-greens'
  | 'overall-collagen'
  // Immunity specific
  | 'immune-cold-flu'
  | 'immune-antioxidants'
  | 'immune-vitamin-d'
  | 'immune-zinc'
  | 'immune-elderberry'
  | 'immune-probiotics'
  | 'immune-seasonal'
  | 'immune-mushroom'
  | 'immune-nac'
  // Energy specific
  | 'energy-fatigue'
  | 'energy-afternoon'
  | 'energy-morning'
  | 'energy-b12'
  | 'energy-iron'
  | 'energy-coq10'
  | 'energy-adrenal'
  | 'energy-beetroot'
  | 'energy-electrolytes'
  // Joint specific
  | 'joint-mobility'
  | 'joint-pain'
  | 'joint-calcium'
  | 'joint-vitamin-d'
  | 'joint-glucosamine'
  | 'joint-arthritis'
  | 'joint-inflammation'
  | 'joint-msm'
  | 'joint-fishoil'
  // Heart specific
  | 'heart-cholesterol'
  | 'heart-blood-pressure'
  | 'heart-omega3'
  | 'heart-coq10'
  | 'heart-circulation'
  | 'heart-antioxidants'
  | 'heart-magnesium'
  | 'heart-garlic'
  | 'heart-k2'
  // Sleep/stress specific
  | 'sleep-insomnia'
  | 'sleep-melatonin'
  | 'sleep-magnesium'
  | 'stress-cortisol'
  | 'stress-adaptogens'
  | 'sleep-gaba'
  | 'sleep-tart-cherry'
  // Brain specific
  | 'brain-memory'
  | 'brain-focus'
  | 'brain-omega3'
  | 'brain-b12'
  | 'brain-ginkgo'
  | 'brain-lion-mane'
  | 'brain-cognitive'
  | 'brain-choline'
  | 'brain-magnesium'
  // Muscle/Performance specific (NEW)
  | 'muscle-whey'
  | 'muscle-creatine'
  | 'muscle-preworkout'
  | 'muscle-bcaa'
  | 'muscle-plant'
  | 'muscle-casein'
  | 'muscle-mass'
  | 'muscle-test'
  | 'muscle-glutamine'
  | 'muscle-pump'
  // Weight Management specific (NEW)
  | 'weight-fatburner'
  | 'weight-protein'
  | 'weight-fiber'
  | 'weight-cla'
  | 'weight-carnitine'
  | 'weight-appetite'
  | 'weight-metabolism'
  | 'weight-acv'
  | 'weight-tea'
  | 'weight-keto'

/**
 * Shopping/buying preferences.
 * User can select up to 3 to influence product ranking.
 * Expanded to 9 options with trust signals.
 */
export type ShoppingPreference = 
  | 'budget-friendly'
  | 'premium-quality'
  | 'free-shipping'
  | 'new-arrivals'
  | 'on-sale'
  | 'bundle-deals'
  | 'subscribe-save'
  | 'usa-manufactured'     // NEW - Trust signal
  | 'third-party-tested'   // NEW - Safety signal

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
  /** Sex selection */
  sex?: Sex
  /** Age range */
  ageRange?: AgeRange
  /** Physical activity level */
  activityLevel?: ActivityLevel
  /** Dietary preferences - multi-select (e.g., vegan + sugar-free) */
  dietPreferences: DietType[]
  /** Health concerns / supplement focus to address */
  concerns: ConcernId[]
  /** Preferred supplement formats - multi-select (up to 3, ordered) */
  formatPreferences: SupplementFormat[]
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
  type: 'welcome' | 'goals' | 'demographics' | 'lifestyle' | 'diet' | 'concerns' | 'format' | 'budget' | 'processing' | 'results'
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
  /** Optional image URL for the option */
  image?: string
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
