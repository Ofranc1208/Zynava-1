'use client'

import styles from './ProgressIndicator.module.css'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span className={styles.stepText}>Step {currentStep} of {totalSteps}</span>
        <span className={styles.percentageText}>• {Math.round(percentage)}%</span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

