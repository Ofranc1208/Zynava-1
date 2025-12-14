import { useMemo } from 'react'
import type { AdvisorInput, AdvisorStep, GoalId, ConcernId, BudgetTier } from '../types'

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
        
        case 'concerns':
          return input.concerns.includes(optionValue as ConcernId)
        
        case 'budget':
          return optionValue === input.budgetTier
        
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

