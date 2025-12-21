'use client'

import styles from './ExploreButton.module.css'

type ButtonVariant = 'primary' | 'turquoise' | 'indigo' | 'emerald' | 'emerald-outline'

interface ExploreButtonProps {
  onClick?: () => void
  text?: string
  variant?: ButtonVariant
}

/**
 * ExploreButton - Reusable CTA button for homepage sections
 * Opens the Supplement Advisor modal when clicked
 * Supports multiple color variants for visual variety
 */
export default function ExploreButton({ 
  onClick,
  text = 'Try the Advisor',
  variant = 'primary'
}: ExploreButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: styles.exploreButton,
    turquoise: styles.exploreButtonTurquoise,
    indigo: styles.exploreButtonIndigo,
    emerald: styles.exploreButtonEmerald,
    'emerald-outline': styles.exploreButtonEmeraldOutline,
  }
  
  return (
    <button 
      type="button"
      onClick={onClick}
      className={variantClasses[variant]}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.arrow}>→</span>
    </button>
  )
}

