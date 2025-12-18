'use client'

import styles from './ReviewStep.module.css'
import { QUIZ_STEPS } from '../controller/quizData'
import { getConcernLabel, getGoalSpecificTitle } from '../data/goalSpecificConcerns'
import type { AdvisorInput } from '../../types'

interface ReviewStepProps {
  input: AdvisorInput
  onNext: () => void
  onPrevious: () => void
  onEdit: (stepId: string) => void
}

export default function ReviewStep({ input, onNext, onPrevious, onEdit }: ReviewStepProps) {
  const steps = QUIZ_STEPS

  // Get selected goal label
  const goalLabel = steps.goals.options?.find(o => o.value === input.goals[0])?.label || ''

  // Get demographic label
  const demographicLabel = steps.demographics.options?.find(o => o.value === input.demographic)?.label || ''

  // Get activity level label
  const activityLabel = steps.lifestyle.options?.find(o => o.value === input.activityLevel)?.label || ''

  // Get diet label
  const dietLabel = steps.diet.options?.find(o => o.value === input.diet)?.label || ''

  // Get concerns labels using dynamic mapping
  const concernLabels = input.concerns.length > 0
    ? input.concerns
        .filter(c => c !== 'none')
        .map(c => getConcernLabel(c, input.goals[0]))
        .filter(Boolean)
    : ['None']

  // Get shopping preferences labels
  const preferenceLabels = input.shoppingPreferences
    .map(p => steps.budget.options?.find(o => o.value === p)?.label)
    .filter(Boolean)

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.header}>
        <button
          className={styles.backLink}
          onClick={onPrevious}
          type="button"
          aria-label="Go back to previous question"
        >
          ← Back
        </button>
        <h2 className={styles.title}>Review Your Choices</h2>
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewItem}>
          <div className={styles.reviewItemHeader}>
            <span className={styles.reviewLabel}>Wellness Goal:</span>
            <button
              className={styles.editButton}
              onClick={() => onEdit('goals')}
              type="button"
              aria-label="Edit wellness goal"
            >
              Edit
            </button>
          </div>
          <span className={styles.reviewValue}>{goalLabel}</span>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewItemHeader}>
            <span className={styles.reviewLabel}>About You:</span>
            <button
              className={styles.editButton}
              onClick={() => onEdit('demographics')}
              type="button"
              aria-label="Edit demographics"
            >
              Edit
            </button>
          </div>
          <span className={styles.reviewValue}>{demographicLabel}</span>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewItemHeader}>
            <span className={styles.reviewLabel}>Activity Level:</span>
            <button
              className={styles.editButton}
              onClick={() => onEdit('lifestyle')}
              type="button"
              aria-label="Edit activity level"
            >
              Edit
            </button>
          </div>
          <span className={styles.reviewValue}>{activityLabel}</span>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewItemHeader}>
            <span className={styles.reviewLabel}>Diet:</span>
            <button
              className={styles.editButton}
              onClick={() => onEdit('diet')}
              type="button"
              aria-label="Edit diet"
            >
              Edit
            </button>
          </div>
          <span className={styles.reviewValue}>{dietLabel}</span>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewItemHeader}>
            <span className={styles.reviewLabel}>{getGoalSpecificTitle(input.goals[0])}:</span>
            <button
              className={styles.editButton}
              onClick={() => onEdit('concerns')}
              type="button"
              aria-label="Edit focus areas"
            >
              Edit
            </button>
          </div>
          <span className={styles.reviewValue}>{concernLabels.join(', ')}</span>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewItemHeader}>
            <span className={styles.reviewLabel}>Buying Preferences:</span>
            <button
              className={styles.editButton}
              onClick={() => onEdit('budget')}
              type="button"
              aria-label="Edit buying preferences"
            >
              Edit
            </button>
          </div>
          <span className={styles.reviewValue}>{preferenceLabels.join(', ')}</span>
        </div>
      </div>

      <button 
        className={styles.submitButton}
        onClick={onNext}
        type="button"
      >
        All Looks Good
      </button>
    </div>
  )
}

