/**
 * @module AdvisorChat/data
 * 
 * Static data and configuration for the quiz.
 * 
 * Contains goal-specific concern mappings that dynamically
 * adjust based on the user's selected wellness goal.
 * 
 * @example
 * ```ts
 * import { getGoalSpecificConcerns } from './data'
 * 
 * const concerns = getGoalSpecificConcerns('gut-health')
 * // Returns gut-health specific options like probiotics, enzymes, etc.
 * ```
 */

export { 
  /** Title mappings per goal (e.g., "Supplement Focus") */
  GOAL_SPECIFIC_TITLES,
  
  /** Full concern options per goal */
  GOAL_SPECIFIC_CONCERNS,
  
  /** Get title for Step 4 based on selected goal */
  getGoalSpecificTitle,
  
  /** Get concern options based on selected goal */
  getGoalSpecificConcerns,
  
  /** Lookup label for a concern ID */
  getConcernLabel 
} from './goalSpecificConcerns'
