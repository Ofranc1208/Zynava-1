import { useMemo } from 'react'
import type { AdvisorInput, AdvisorStep, GoalId, ConcernId, ShoppingPreference, DietType, Sex, AgeRange, SupplementFormat } from '../../types'

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
          // Check if it matches sex, age range, or legacy demographic
          return optionValue === input.sex || 
                 optionValue === input.ageRange || 
                 optionValue === input.demographic
        
        case 'diet':
          return input.dietPreferences.includes(optionValue as DietType)
        
        case 'concerns':
          return input.concerns.includes(optionValue as ConcernId)
        
        case 'format':
          return input.formatPreferences.includes(optionValue as SupplementFormat)
        
        case 'budget':
          return input.shoppingPreferences.includes(optionValue as ShoppingPreference)
        
        case 'lifestyle':
          return optionValue === input.activityLevel
        
        default:
          return false
      }
    }
  }, [step.type, input])

  return { getIsSelected }
}

