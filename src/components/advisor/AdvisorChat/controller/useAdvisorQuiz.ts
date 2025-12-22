'use client'

import { useState, useCallback } from 'react'
import { QUIZ_STEPS, STEP_ORDER } from './quizData'
import type { 
  AdvisorInput, 
  GoalId,
  DemographicId,
  ActivityLevel,
  DietType,
  ConcernId,
  ShoppingPreference,
  SupplementFormat,
  Sex,
  AgeRange
} from '../../types'

/**
 * Return type for the useAdvisorQuiz hook
 */
export interface UseAdvisorQuizReturn {
  /** Current step ID in the quiz flow */
  currentStep: string
  /** All quiz step definitions */
  steps: typeof QUIZ_STEPS
  /** Current user input/selections */
  input: AdvisorInput
  /** Handler for selecting a wellness goal */
  handleGoalSelect: (goalId: GoalId) => void
  /** Handler for selecting demographics */
  handleDemographicSelect: (value: string) => void
  /** Handler for selecting activity level */
  handleLifestyleSelect: (value: string) => void
  /** Handler for selecting diet preference */
  handleDietSelect: (value: string) => void
  /** Handler for selecting health concerns (multi-select) */
  handleConcernSelect: (concernId: ConcernId) => void
  /** Handler for selecting preferred format */
  handleFormatSelect: (value: string) => void
  /** Handler for selecting shopping preferences (max 3) */
  handleBudgetSelect: (value: string) => void
  /** Navigate to next step or complete quiz */
  handleNext: () => void
  /** Navigate to previous step */
  handlePrevious: () => void
  /** Jump to a specific step by ID */
  goToStep: (stepId: string) => void
  /** Check if current step has valid selection to proceed */
  canProceed: () => boolean
  /** Reset quiz to initial state */
  resetQuiz: () => void
}

/**
 * Main quiz controller hook for the Supplement Advisor.
 * 
 * Manages the complete quiz flow including:
 * - Step navigation (forward, backward, jump to step)
 * - User input collection for all quiz questions
 * - Validation of selections per step
 * - Quiz completion callback
 * 
 * @param onComplete - Callback fired when user completes all quiz steps
 * @returns Quiz state and handler functions
 * 
 * @example
 * ```tsx
 * const {
 *   currentStep,
 *   input,
 *   handleGoalSelect,
 *   handleNext,
 *   canProceed
 * } = useAdvisorQuiz((input) => {
 *   console.log('Quiz completed:', input)
 * })
 * ```
 */
export function useAdvisorQuiz(onComplete: (input: AdvisorInput) => void): UseAdvisorQuizReturn {
  const [currentStep, setCurrentStep] = useState<string>('welcome')
  const [input, setInput] = useState<AdvisorInput>({
    goals: [],
    dietPreferences: [],
    concerns: [],
    formatPreferences: [],
    shoppingPreferences: [],
  })

  const steps = QUIZ_STEPS

  /**
   * Select a primary wellness goal (single selection, replaces previous)
   */
  const handleGoalSelect = useCallback((goalId: GoalId) => {
    setInput(prev => ({ ...prev, goals: [goalId] }))
  }, [])

  /**
   * Select demographic profile (sex and age range separately)
   * This handles both sex and age selections from the same step
   */
  const handleDemographicSelect = useCallback((value: string) => {
    // Check if it's a skip value
    if (value === 'skip') {
      setInput(prev => ({ ...prev, sex: undefined, ageRange: 'skip' as AgeRange }))
      return
    }
    
    // Check if it's a sex value
    const validSex: Sex[] = ['male', 'female']
    if (validSex.includes(value as Sex)) {
      setInput(prev => ({ ...prev, sex: value as Sex }))
      return
    }
    
    // Check if it's an age range value
    const validAgeRanges: AgeRange[] = ['18-29', '30-39', '40-49', '50-59', '60-69', '70+', 'skip']
    if (validAgeRanges.includes(value as AgeRange)) {
      setInput(prev => ({ ...prev, ageRange: value as AgeRange }))
      return
    }

    // Legacy support for combined demographic values
    const validDemographics: DemographicId[] = [
      'male-18-35', 'male-36-50', 'male-51-65', 'male-65-plus',
      'female-18-35', 'female-36-50', 'female-51-65', 'female-65-plus'
    ]
    if (validDemographics.includes(value as DemographicId)) {
      setInput(prev => ({ ...prev, demographic: value as DemographicId }))
    }
  }, [])

  /**
   * Select activity level (single selection)
   */
  const handleLifestyleSelect = useCallback((value: string) => {
    // Handle skip value
    if (value === 'skip') {
      setInput(prev => ({ ...prev, activityLevel: 'skip' as ActivityLevel }))
      return
    }
    
    const validActivityLevels: ActivityLevel[] = [
      'power-lifter', 'endurance-athlete', 'regular-gym-goer', 'active-lifestyle',
      'light-exercise', 'desk-worker', 'low-activity', 'recovery-injury'
    ]
    if (validActivityLevels.includes(value as ActivityLevel)) {
      setInput(prev => ({ ...prev, activityLevel: value as ActivityLevel }))
    }
  }, [])

  /**
   * Toggle a dietary preference (multi-select).
   * Selecting 'no-preference' clears all other selections.
   */
  const handleDietSelect = useCallback((value: string) => {
    const validDietTypes: DietType[] = [
      'no-preference', 'vegan', 'vegetarian', 'gluten-free',
      'dairy-free', 'sugar-free', 'keto-low-carb', 'halal', 'non-gmo-organic'
    ]
    if (validDietTypes.includes(value as DietType)) {
      setInput(prev => {
        const currentPrefs = prev.dietPreferences
        const dietValue = value as DietType
        
        // If selecting "no-preference", clear all and set only that
        if (dietValue === 'no-preference') {
          return { ...prev, dietPreferences: ['no-preference'] }
        }
        
        // If already selected, remove it
        if (currentPrefs.includes(dietValue)) {
          return { ...prev, dietPreferences: currentPrefs.filter(d => d !== dietValue && d !== 'no-preference') }
        }
        
        // Add the new selection (remove 'no-preference' if present)
        return { ...prev, dietPreferences: [...currentPrefs.filter(d => d !== 'no-preference'), dietValue] }
      })
    }
  }, [])

  /**
   * Toggle a health concern selection (multi-select).
   * Selecting 'none' clears all other selections.
   */
  const handleConcernSelect = useCallback((concernId: ConcernId) => {
    setInput(prev => {
      const currentConcerns = prev.concerns
      if (concernId === 'none') {
        return { ...prev, concerns: ['none'] }
      } else if (currentConcerns.includes(concernId)) {
        return { ...prev, concerns: currentConcerns.filter(c => c !== concernId && c !== 'none') }
      } else {
        return { ...prev, concerns: [...currentConcerns.filter(c => c !== 'none'), concernId] }
      }
    })
  }, [])

  /**
   * Select preferred supplement format (single selection)
   */
  /**
   * Toggle a format preference (multi-select, max 3).
   * Selecting 'no-preference' clears all other selections.
   */
  const handleFormatSelect = useCallback((value: string) => {
    const validFormats: SupplementFormat[] = [
      'capsules', 'tablets', 'gummies', 'powder', 'liquid',
      'softgels', 'chewables', 'single-serve-packs', 'no-preference'
    ]
    if (validFormats.includes(value as SupplementFormat)) {
      setInput(prev => {
        const currentFormats = prev.formatPreferences
        const formatValue = value as SupplementFormat
        
        // If selecting "no-preference", clear all and set only that
        if (formatValue === 'no-preference') {
          return { ...prev, formatPreferences: ['no-preference'] }
        }
        
        // If already selected, remove it
        if (currentFormats.includes(formatValue)) {
          return { ...prev, formatPreferences: currentFormats.filter(f => f !== formatValue && f !== 'no-preference') }
        }
        
        // If already have 3 selections, don't add more
        if (currentFormats.filter(f => f !== 'no-preference').length >= 3) {
          return prev
        }
        
        // Add the new selection (remove 'no-preference' if present)
        return { ...prev, formatPreferences: [...currentFormats.filter(f => f !== 'no-preference'), formatValue] }
      })
    }
  }, [])

  /**
   * Toggle a shopping preference (max 3 selections allowed)
   */
  const handleBudgetSelect = useCallback((value: string) => {
    const validPreferences: ShoppingPreference[] = [
      'budget-friendly', 'premium-quality', 'free-shipping',
      'new-arrivals', 'on-sale', 'bundle-deals', 'subscribe-save',
      'usa-manufactured', 'third-party-tested' // NEW trust signals
    ]
    if (validPreferences.includes(value as ShoppingPreference)) {
      setInput(prev => {
        const currentPrefs = prev.shoppingPreferences
        if (currentPrefs.includes(value as ShoppingPreference)) {
          return { ...prev, shoppingPreferences: currentPrefs.filter(p => p !== value) }
        }
        if (currentPrefs.length >= 3) {
          return prev
        }
        return { ...prev, shoppingPreferences: [...currentPrefs, value as ShoppingPreference] }
      })
    }
  }, [])

  /**
   * Navigate to the next step, or trigger onComplete if at the end
   */
  const handleNext = useCallback(() => {
    const currentIndex = STEP_ORDER.indexOf(currentStep as typeof STEP_ORDER[number])
    
    if (currentIndex < STEP_ORDER.length - 1) {
      setCurrentStep(STEP_ORDER[currentIndex + 1])
    } else {
      onComplete(input)
    }
  }, [currentStep, input, onComplete])

  /**
   * Navigate to the previous step
   */
  const handlePrevious = useCallback(() => {
    const currentIndex = STEP_ORDER.indexOf(currentStep as typeof STEP_ORDER[number])
    
    if (currentIndex > 0) {
      setCurrentStep(STEP_ORDER[currentIndex - 1])
    }
  }, [currentStep])

  /**
   * Jump directly to a specific step by ID
   */
  const goToStep = useCallback((stepId: string) => {
    if (STEP_ORDER.includes(stepId as typeof STEP_ORDER[number])) {
      setCurrentStep(stepId)
    }
  }, [])

  /**
   * Check if the current step has a valid selection to allow proceeding.
   * Diet, Format, and Budget steps return false (requires manual "Continue" button click).
   */
  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 'goals':
        return input.goals.length === 1
      case 'demographics':
        // Check for: (sex + age) OR skip OR legacy demographic
        return (!!input.sex && !!input.ageRange) || input.ageRange === 'skip' || !!input.demographic
      case 'lifestyle':
        return !!input.activityLevel
      case 'diet':
        return false // Manual proceed required (like budget)
      case 'concerns':
        return input.concerns.length > 0
      case 'format':
        return false // Manual proceed required (multi-select step)
      case 'budget':
        return false // Manual proceed required
      default:
        return false
    }
  }, [currentStep, input])

  /**
   * Reset the quiz to its initial state
   */
  const resetQuiz = useCallback(() => {
    setCurrentStep('welcome')
    setInput({
      goals: [],
      dietPreferences: [],
      concerns: [],
      shoppingPreferences: [],
    })
  }, [])

  return {
    currentStep,
    steps,
    input,
    handleGoalSelect,
    handleDemographicSelect,
    handleLifestyleSelect,
    handleDietSelect,
    handleConcernSelect,
    handleFormatSelect,
    handleBudgetSelect,
    handleNext,
    handlePrevious,
    goToStep,
    canProceed,
    resetQuiz,
  }
}
