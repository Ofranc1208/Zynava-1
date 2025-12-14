'use client'

import { useState, useCallback } from 'react'
import { QUIZ_STEPS, STEP_ORDER } from './AdvisorChat/quizData'
import type { 
  AdvisorInput, 
  AdvisorStep, 
  AdvisorMessage,
  GoalId,
  AgeRange,
  ActivityLevel,
  DietType,
  ConcernId,
  BudgetTier
} from './types'

interface AdvisorQuizControllerProps {
  onComplete: (input: AdvisorInput) => void
}

export function useAdvisorQuiz(onComplete: (input: AdvisorInput) => void) {
  const [currentStep, setCurrentStep] = useState<string>('welcome')
  const [input, setInput] = useState<AdvisorInput>({
    goals: [],
    concerns: [],
  })
  const [messages, setMessages] = useState<AdvisorMessage[]>(() => {
    // Initialize with welcome message
    const welcomeStep = {
      id: 'welcome',
      type: 'welcome' as const,
      message: "Hi! I'm your Zynava Supplement Advisor. I'll help you find the right supplements based on your goals. Let's get started!",
      isComplete: false,
    }
    return [{
      id: 'welcome-1',
      type: 'quiz-step',
      sender: 'advisor',
      step: welcomeStep,
      timestamp: new Date(),
    }]
  })

  const steps = QUIZ_STEPS

  const handleGoalSelect = useCallback((goalId: GoalId) => {
    setInput(prev => {
      // Single selection - replace current goal
      return { ...prev, goals: [goalId] }
    })
  }, [])

  const handleLifestyleSelect = useCallback((value: string) => {
    setInput(prev => {
      // Store the exact selected value
      if (['very-active', 'moderately-active', 'lightly-active', 'sedentary'].includes(value)) {
        return { ...prev, activityLevel: value as ActivityLevel }
      }
      return prev
    })
  }, [])

  const handleDietSelect = useCallback((value: string) => {
    setInput(prev => {
      // Store the exact selected value
      if (['no-preference', 'vegan', 'gluten-free'].includes(value)) {
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
    if (['budget-conscious', 'moderate-spending', 'premium-quality'].includes(value)) {
      setInput(prev => ({ ...prev, budgetTier: value as BudgetTier }))
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

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 'goals':
        return input.goals.length === 1 // Require exactly one primary goal
      case 'lifestyle':
        return !!input.activityLevel
      case 'diet':
        return !!input.diet
      case 'concerns':
        return true // Optional step
      case 'budget':
        return !!input.budgetTier
      default:
        return false
    }
  }, [currentStep, input])

  const resetQuiz = useCallback(() => {
    setCurrentStep('welcome')
    setInput({
      goals: [],
      concerns: [],
    })
  }, [])

  return {
    currentStep,
    steps,
    input,
    messages,
    handleGoalSelect,
    handleLifestyleSelect,
    handleDietSelect,
    handleConcernSelect,
    handleBudgetSelect,
    handleNext,
    canProceed,
    resetQuiz,
  }
}

