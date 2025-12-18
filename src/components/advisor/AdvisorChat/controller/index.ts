/**
 * @module AdvisorChat/controller
 * 
 * State management layer for the supplement advisor quiz.
 * 
 * Contains:
 * - `useAdvisorQuiz` - Main quiz orchestration hook
 * - `useQuizSelection` - Helper for tracking selected options
 * - `QUIZ_STEPS` - Step definitions with options
 * - `STEP_ORDER` - Navigation order array
 */

export { useAdvisorQuiz } from './useAdvisorQuiz'
export type { UseAdvisorQuizReturn } from './useAdvisorQuiz'
export { useQuizSelection } from './useQuizSelection'
export { QUIZ_STEPS, STEP_ORDER } from './quizData'
