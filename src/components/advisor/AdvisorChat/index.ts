/**
 * @module AdvisorChat
 * 
 * Interactive supplement advisor quiz and chat interface.
 * 
 * This module provides a complete quiz flow for collecting user preferences
 * and matching them with supplement recommendations.
 * 
 * @example
 * ```tsx
 * import { AdvisorChat } from '@/src/components/advisor/AdvisorChat'
 * 
 * <AdvisorChat onClose={() => setIsOpen(false)} />
 * ```
 * 
 * @see README.md for full architecture documentation
 */

// =============================================================================
// MAIN COMPONENT
// =============================================================================

/** Main chat interface component */
export { default as AdvisorChat } from './AdvisorChat'

// =============================================================================
// CONTROLLER LAYER - State Management
// =============================================================================

/**
 * Quiz state management hook and data definitions.
 * Use these for custom quiz implementations or extending functionality.
 */
export { 
  useAdvisorQuiz,
  useQuizSelection, 
  QUIZ_STEPS, 
  STEP_ORDER 
} from './controller'

// Re-export the hook return type for TypeScript consumers
export type { UseAdvisorQuizReturn } from './controller/useAdvisorQuiz'

// =============================================================================
// COMPONENTS LAYER - UI Elements
// =============================================================================

/**
 * Presentational components for the advisor interface.
 * Can be imported individually for custom layouts.
 */
export {
  ChatBubble,
  QuizButton,
  QuizStepRenderer,
  ProgressIndicator,
  WelcomeSequence,
  ReviewStep,
  ProcessingAnimation,
  AdvisorInputBar,
  TypingIndicator
} from './components'

// =============================================================================
// DATA LAYER - Static Configuration
// =============================================================================

/**
 * Goal-specific concern mappings and lookup functions.
 * Used to dynamically load relevant options based on user's goal selection.
 */
export {
  GOAL_SPECIFIC_TITLES,
  GOAL_SPECIFIC_CONCERNS,
  getGoalSpecificTitle,
  getGoalSpecificConcerns,
  getConcernLabel
} from './data'
