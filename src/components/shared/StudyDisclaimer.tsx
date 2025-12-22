import React from 'react'
import styles from './StudyDisclaimer.module.css'

interface StudyDisclaimerProps {
  className?: string
}

export default function StudyDisclaimer({ className }: StudyDisclaimerProps) {
  return (
    <div className={`${styles.disclaimer} ${className || ''}`}>
      <div className={styles.disclaimerIcon}>⚠️</div>
      <p className={styles.disclaimerText}>
        Scientific studies linked below are provided for educational reference regarding the active ingredients only.
        They do not refer to this specific product and are not intended to imply that this product treats, cures, or prevents any disease.
      </p>
    </div>
  )
}
