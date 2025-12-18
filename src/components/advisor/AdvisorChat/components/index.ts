/**
 * @module AdvisorChat/components
 * 
 * UI components for the supplement advisor interface.
 * 
 * All components are self-contained with co-located CSS modules
 * following the single-responsibility principle.
 */

/** Chat message bubble - displays advisor/user messages */
export { default as ChatBubble } from './ChatBubble'

/** Option selection button - used in quiz steps */
export { default as QuizButton } from './QuizButton'

/** Quiz step container - renders options grid with navigation */
export { default as QuizStepRenderer } from './QuizStepRenderer'

/** Progress bar - shows current step position */
export { default as ProgressIndicator } from './ProgressIndicator'

/** Welcome animation - animated intro messages */
export { default as WelcomeSequence } from './WelcomeSequence'

/** Review step - allows editing before submission */
export { default as ReviewStep } from './ReviewStep'

/** Loading animation - shown while finding supplements */
export { default as ProcessingAnimation } from './ProcessingAnimation'

/** Chat input bar - text input with send button */
export { default as AdvisorInputBar } from './AdvisorInputBar'

/** Typing indicator - "Z is typing..." animation */
export { default as TypingIndicator } from './TypingIndicator'
