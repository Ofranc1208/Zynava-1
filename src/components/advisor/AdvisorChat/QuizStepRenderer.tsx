'use client'

import QuizButton from '../QuizButton'
import ProgressIndicator from './ProgressIndicator'
import { useQuizSelection } from './useQuizSelection'
import { STEP_ORDER } from './quizData'
import type { AdvisorStep, AdvisorInput, GoalId, ConcernId } from '../types'
import styles from './QuizStepRenderer.module.css'

interface QuizStepRendererProps {
  step: AdvisorStep
  input: AdvisorInput
  onGoalSelect: (value: GoalId) => void
  onLifestyleSelect: (value: string) => void
  onDietSelect: (value: string) => void
  onConcernSelect: (value: ConcernId) => void
  onBudgetSelect: (value: string) => void
  canProceed: boolean
  onNext: () => void
}

export default function QuizStepRenderer({
  step,
  input,
  onGoalSelect,
  onLifestyleSelect,
  onDietSelect,
  onConcernSelect,
  onBudgetSelect,
  canProceed,
  onNext,
}: QuizStepRendererProps) {
  const { getIsSelected } = useQuizSelection({ step, input })

  if (!step.options) return null

  // Calculate current step number (excluding welcome)
  const quizSteps = STEP_ORDER.filter(s => s !== 'welcome')
  const currentStepIndex = quizSteps.indexOf(step.id as any)
  const currentStepNumber = currentStepIndex + 1
  const totalSteps = quizSteps.length

  const handleOptionClick = (value: string) => {
    switch (step.type) {
      case 'goals':
        onGoalSelect(value as GoalId)
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
    <div className={styles.quizStepContainer}>
      {/* Question text inside the fixed card */}
      <div className={styles.questionText}>
        {step.message}
      </div>
      
      {/* Progress Indicator */}
      <ProgressIndicator 
        currentStep={currentStepNumber} 
        totalSteps={totalSteps} 
      />
      
      <div className={styles.quizOptions}>
        {step.options.map((option) => (
          <QuizButton
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.value}
            description={option.description}
            isSelected={getIsSelected(option.value)}
            onClick={handleOptionClick}
            multiSelect={step.type === 'concerns'}
          />
        ))}
      </div>
      
      {/* Only show Continue button for concerns step (multi-select, optional) */}
      {/* All other steps auto-advance after selection */}
      {canProceed && step.type === 'concerns' && (
        <button
          className={styles.nextButton}
          onClick={onNext}
        >
          Continue →
        </button>
      )}
    </div>
  )
}

