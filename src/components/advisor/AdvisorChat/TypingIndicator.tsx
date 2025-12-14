'use client'

import styles from './TypingIndicator.module.css'

interface TypingIndicatorProps {
  isVisible: boolean
}

export default function TypingIndicator({ isVisible }: TypingIndicatorProps) {
  if (!isVisible) return null

  return (
    <div className={styles.typingIndicator}>
      <span className={styles.typingText}>Z is typing</span>
      <div className={styles.typingDots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

