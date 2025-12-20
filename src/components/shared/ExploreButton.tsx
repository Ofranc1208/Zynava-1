'use client'

import styles from './ExploreButton.module.css'

interface ExploreButtonProps {
  onClick?: () => void
  text?: string
}

/**
 * ExploreButton - Reusable CTA button for homepage sections
 * Opens the Supplement Advisor modal when clicked
 */
export default function ExploreButton({ 
  onClick,
  text = 'Try the Advisor'
}: ExploreButtonProps) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={styles.exploreButton}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.arrow}>→</span>
    </button>
  )
}

