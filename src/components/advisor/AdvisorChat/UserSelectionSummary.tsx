'use client'

/**
 * UserSelectionSummary - Shows user's quiz selections as chat bubbles
 * 
 * STATUS: Currently disabled in AdvisorChat.tsx
 * Can be re-enabled by uncommenting the usage in AdvisorChat.tsx
 */

import ChatBubble from '../ChatBubble'
import type { AdvisorInput } from '../types'
import { QUIZ_STEPS } from './quizData'
import { getConcernLabel } from './goalSpecificConcerns'

interface UserSelectionSummaryProps {
  currentStep: string
  input: AdvisorInput
}

export default function UserSelectionSummary({ currentStep, input }: UserSelectionSummaryProps) {
  const steps = QUIZ_STEPS

  // Goals selection
  if (currentStep === 'goals' && input.goals.length > 0) {
    const selectedLabels = input.goals
      .map(g => steps.goals.options?.find(o => o.value === g)?.label)
      .filter(Boolean)
      .join(', ')
    
    return (
      <ChatBubble
        message={`Selected: ${selectedLabels}`}
        sender="user"
        timestamp={new Date()}
      />
    )
  }
  
  // Lifestyle selection - updated to match current types
  if (currentStep === 'lifestyle' && input.activityLevel) {
    const option = steps.lifestyle.options?.find(o => o.value === input.activityLevel)
    
    return (
      <ChatBubble
        message={`Activity: ${option?.label || input.activityLevel}`}
        sender="user"
        timestamp={new Date()}
      />
    )
  }
  
  // Diet selection - updated to match current types
  if (currentStep === 'diet' && input.diet) {
    const option = steps.diet.options?.find(o => o.value === input.diet)
    
    return (
      <ChatBubble
        message={`Diet: ${option?.label || input.diet}`}
        sender="user"
        timestamp={new Date()}
      />
    )
  }
  
  // Concerns selection - using dynamic mapping
  if (currentStep === 'concerns' && input.concerns.length > 0) {
    const concernLabels = input.concerns
      .filter(c => c !== 'none')
      .map(c => getConcernLabel(c, input.goals[0]))
      .filter(Boolean)
      .join(', ') || 'None'
    
    return (
      <ChatBubble
        message={`Concerns: ${concernLabels}`}
        sender="user"
        timestamp={new Date()}
      />
    )
  }
  
  // Shopping preferences selection - multi-select (up to 3)
  if (currentStep === 'budget' && input.shoppingPreferences.length > 0) {
    const prefLabels = input.shoppingPreferences
      .map(p => steps.budget.options?.find(o => o.value === p)?.label)
      .filter(Boolean)
      .join(', ')
    
    return (
      <ChatBubble
        message={`Preferences: ${prefLabels}`}
        sender="user"
        timestamp={new Date()}
      />
    )
  }
  
  return null
}
