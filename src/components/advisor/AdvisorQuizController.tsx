'use client'

import { useState, useCallback } from 'react'
import { QUIZ_STEPS, STEP_ORDER } from './AdvisorChat/quizData'
import type { 
  AdvisorInput, 
  GoalId,
  DemographicId,
  ActivityLevel,
  DietType,
  ConcernId,
  ShoppingPreference
} from './types'

export function useAdvisorQuiz(onComplete: (input: AdvisorInput) => void) {
  const [currentStep, setCurrentStep] = useState<string>('welcome')
  const [input, setInput] = useState<AdvisorInput>({
    goals: [],
    concerns: [],
    shoppingPreferences: [],
  })

  const steps = QUIZ_STEPS

  const handleGoalSelect = useCallback((goalId: GoalId) => {
    setInput(prev => {
      // Single selection - replace current goal
      return { ...prev, goals: [goalId] }
    })
  }, [])

  const handleDemographicSelect = useCallback((value: string) => {
    const validDemographics: DemographicId[] = [
      'male-18-35',
      'male-36-50',
      'male-51-65',
      'male-65-plus',
      'female-18-35',
      'female-36-50',
      'female-51-65',
      'female-65-plus'
    ]
    if (validDemographics.includes(value as DemographicId)) {
      setInput(prev => ({ ...prev, demographic: value as DemographicId }))
    }
  }, [])

  const handleLifestyleSelect = useCallback((value: string) => {
    setInput(prev => {
      // Store the exact selected value
      const validActivityLevels: ActivityLevel[] = [
        'power-lifter',
        'endurance-athlete',
        'regular-gym-goer',
        'active-lifestyle',
        'light-exercise',
        'desk-worker',
        'low-activity',
        'recovery-injury'
      ]
      if (validActivityLevels.includes(value as ActivityLevel)) {
        return { ...prev, activityLevel: value as ActivityLevel }
      }
      return prev
    })
  }, [])

  const handleDietSelect = useCallback((value: string) => {
    setInput(prev => {
      // Store the exact selected value
      const validDietTypes: DietType[] = [
        'no-preference',
        'vegan',
        'vegetarian',
        'gluten-free',
        'sugar-free',
        'kosher',
        'halal',
        'non-gmo-organic'
      ]
      if (validDietTypes.includes(value as DietType)) {
        return { ...prev, diet: value as DietType }
      }
      return prev
    })
  }, [])

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

  const handleBudgetSelect = useCallback((value: string) => {
    const validPreferences: ShoppingPreference[] = [
      'budget-friendly',
      'premium-quality',
      'free-shipping',
      'new-arrivals',
      'on-sale',
      'bundle-deals',
      'subscribe-save'
    ]
    if (validPreferences.includes(value as ShoppingPreference)) {
      setInput(prev => {
        const currentPrefs = prev.shoppingPreferences
        // Toggle selection - if already selected, remove it
        if (currentPrefs.includes(value as ShoppingPreference)) {
          return { ...prev, shoppingPreferences: currentPrefs.filter(p => p !== value) }
        }
        // Max 3 selections - if already at 3, don't add more
        if (currentPrefs.length >= 3) {
          return prev
        }
        // Add new selection
        return { ...prev, shoppingPreferences: [...currentPrefs, value as ShoppingPreference] }
      })
    }
  }, [])

  const handleNext = useCallback(() => {
    const currentIndex = STEP_ORDER.indexOf(currentStep as typeof STEP_ORDER[number])
    
    if (currentIndex < STEP_ORDER.length - 1) {
      const nextStep = STEP_ORDER[currentIndex + 1]
      setCurrentStep(nextStep)
    } else {
      // Quiz complete - trigger processing
      onComplete(input)
    }
  }, [currentStep, input, onComplete])

  const handlePrevious = useCallback(() => {
    const currentIndex = STEP_ORDER.indexOf(currentStep as typeof STEP_ORDER[number])
    
    if (currentIndex > 0) {
      const previousStep = STEP_ORDER[currentIndex - 1]
      setCurrentStep(previousStep)
    }
  }, [currentStep])

  const goToStep = useCallback((stepId: string) => {
    if (STEP_ORDER.includes(stepId as typeof STEP_ORDER[number])) {
      setCurrentStep(stepId)
    }
  }, [])

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 'goals':
        return input.goals.length === 1 // Require exactly one primary goal
      case 'demographics':
        return !!input.demographic // Require demographic selection
      case 'lifestyle':
        return !!input.activityLevel
      case 'diet':
        return !!input.diet
      case 'concerns':
        return input.concerns.length > 0 // Only auto-advance if selection made
      case 'budget':
        return false // Don't auto-advance, require manual "Proceed" button
      default:
        return false
    }
  }, [currentStep, input])

  const resetQuiz = useCallback(() => {
    setCurrentStep('welcome')
    setInput({
      goals: [],
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
    handleBudgetSelect,
    handleNext,
    handlePrevious,
    goToStep,
    canProceed,
    resetQuiz,
  }
}

