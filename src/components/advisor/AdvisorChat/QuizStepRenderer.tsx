'use client'

import QuizButton from '../QuizButton'
import ProgressIndicator from './ProgressIndicator'
import { useQuizSelection } from './useQuizSelection'
import { STEP_ORDER } from './quizData'
import { getGoalSpecificConcerns, getGoalSpecificTitle } from './goalSpecificConcerns'
import type { AdvisorStep, AdvisorInput, GoalId, ConcernId } from '../types'
import styles from './QuizStepRenderer.module.css'

interface QuizStepRendererProps {
  step: AdvisorStep
  input: AdvisorInput
  onGoalSelect: (value: GoalId) => void
  onDemographicSelect: (value: string) => void
  onLifestyleSelect: (value: string) => void
  onDietSelect: (value: string) => void
  onConcernSelect: (value: ConcernId) => void
  onBudgetSelect: (value: string) => void
  canProceed: boolean
  onNext: () => void
  onPrevious?: () => void
}

export default function QuizStepRenderer({
  step,
  input,
  onGoalSelect,
  onDemographicSelect,
  onLifestyleSelect,
  onDietSelect,
  onConcernSelect,
  onBudgetSelect,
  canProceed,
  onNext,
  onPrevious,
}: QuizStepRendererProps) {
  const { getIsSelected } = useQuizSelection({ step, input })

  // Get dynamic concerns and title if this is the concerns step
  const dynamicOptions = step.id === 'concerns' && input.goals.length > 0
    ? getGoalSpecificConcerns(input.goals[0] as GoalId)
    : step.options

  // Get dynamic title for concerns step
  const dynamicTitle = step.id === 'concerns' && input.goals.length > 0
    ? getGoalSpecificTitle(input.goals[0] as GoalId)
    : step.message

  if (!dynamicOptions) return null

  // Calculate current step number (excluding welcome)
  const quizSteps = STEP_ORDER.filter(s => s !== 'welcome')
  const currentStepIndex = quizSteps.indexOf(step.id as any)
  const currentStepNumber = currentStepIndex + 1
  const totalSteps = quizSteps.length
  const isFirstStep = currentStepIndex === 0

  const handleOptionClick = (value: string) => {
    switch (step.type) {
      case 'goals':
        onGoalSelect(value as GoalId)
        break
      case 'demographics':
        onDemographicSelect(value)
        break
      case 'lifestyle':
        onLifestyleSelect(value)
        break
      case 'diet':
        onDietSelect(value)
        break
      case 'concerns':
        onConcernSelect(value as ConcernId)
        break
      case 'budget':
        onBudgetSelect(value)
        break
    }
  }

  return (
    <div className={styles.quizStepContainer} data-quiz-card>
      {/* Question text with back button on same line */}
      <div className={styles.questionHeader}>
        {!isFirstStep && onPrevious && (
          <button
            className={styles.backLink}
            onClick={onPrevious}
            type="button"
            aria-label="Go back to previous question"
          >
            ← Back
          </button>
        )}
        <div>
          <div className={styles.questionText}>
            {dynamicTitle}
          </div>
          {step.type === 'budget' && (
            <p className={styles.questionSubtitle}>
              Add up to 3
            </p>
          )}
        </div>
      </div>
      
      {/* Progress Indicator */}
      <ProgressIndicator 
        currentStep={currentStepNumber} 
        totalSteps={totalSteps} 
      />
      
      <div className={styles.quizOptions}>
        {dynamicOptions.map((option) => (
          <QuizButton
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={getIsSelected(option.value)}
            onClick={handleOptionClick}
            multiSelect={step.type === 'concerns' || step.type === 'budget'}
          />
        ))}
        
        {/* Continue button in empty slot for budget step */}
        {step.type === 'budget' && input.shoppingPreferences.length > 0 && (
          <button 
            className={styles.continueSlotButton}
            onClick={onNext}
            type="button"
          >
            <span className={styles.continueCount}>{input.shoppingPreferences.length} of 3</span>
            <span className={styles.continueText}>Continue →</span>
          </button>
        )}
      </div>

    </div>
  )
}

