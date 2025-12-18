/**
 * @module Advisor
 * 
 * Supplement Advisor Feature
 * 
 * A complete interactive quiz and recommendation system that helps users
 * find the right supplements based on their health goals, lifestyle, and preferences.
 * 
 * ## Quick Start
 * 
 * ```tsx
 * import { AdvisorModal } from '@/src/components/advisor'
 * 
 * function Page() {
 *   const [isOpen, setIsOpen] = useState(false)
 *   
 *   return (
 *     <>
 *       <button onClick={() => setIsOpen(true)}>Open Advisor</button>
 *       <AdvisorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
 *     </>
 *   )
 * }
 * ```
 * 
 * ## Module Structure
 * 
 * - `AdvisorModal` - Full-screen modal wrapper (recommended entry point)
 * - `AdvisorChat` - The chat/quiz interface component
 * - `useAdvisorQuiz` - Hook for custom quiz implementations
 * - `Results/` - Results page components and scoring algorithms
 */

// =============================================================================
// PRIMARY EXPORTS
// =============================================================================

/** 
 * Modal wrapper for the advisor interface.
 * Handles body scroll lock and accessibility.
 * @recommended Use this as the main entry point.
 */
export { default as AdvisorModal } from './AdvisorModal'

/** 
 * Main chat/quiz component.
 * Use directly if you need custom modal handling.
 */
export { AdvisorChat } from './AdvisorChat'

// =============================================================================
// CONTROLLER EXPORTS
// =============================================================================

/** 
 * Quiz state management hook.
 * Use for custom quiz implementations or testing.
 */
export { useAdvisorQuiz } from './AdvisorChat/controller'

// =============================================================================
// TYPE EXPORTS
// =============================================================================

/** All type definitions for the advisor feature */
export type * from './types'
