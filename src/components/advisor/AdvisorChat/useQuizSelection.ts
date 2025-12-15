import { useMemo } from 'react'
import type { AdvisorInput, AdvisorStep, GoalId, ConcernId } from '../types'

interface UseQuizSelectionProps {
  step: AdvisorStep
  input: AdvisorInput
}

export function useQuizSelection({ step, input }: UseQuizSelectionProps) {
  const getIsSelected = useMemo(() => {
    return (optionValue: string): boolean => {
      switch (step.type) {
        case 'goals':
          return input.goals.includes(optionValue as GoalId)
        
        case 'demographics':
          return optionValue === input.demographic
        
        case 'concerns':
          return input.concerns.includes(optionValue as ConcernId)
        
        case 'budget':
          return input.shoppingPreferences.includes(optionValue as import('../types').ShoppingPreference)
        
        case 'lifestyle':
          return optionValue === input.activityLevel
        
        case 'diet':
          return optionValue === input.diet
        
        default:
          return false
      }
    }
  }, [step.type, input])

  return { getIsSelected }
}

