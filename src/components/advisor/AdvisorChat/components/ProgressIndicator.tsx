'use client'

import styles from './ProgressIndicator.module.css'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  showPercentage?: boolean
  subtitle?: string // Optional inline subtitle (e.g., "Select all that apply")
}

export default function ProgressIndicator({ 
  currentStep, 
  totalSteps,
  showPercentage = true,
  subtitle
}: ProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span className={styles.stepText}>Step {currentStep} of {totalSteps}</span>
        {subtitle && (
          <span className={styles.subtitleText}>· {subtitle}</span>
        )}
        {showPercentage && (
          <span className={styles.percentageText}>• {Math.round(percentage)}%</span>
        )}
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

