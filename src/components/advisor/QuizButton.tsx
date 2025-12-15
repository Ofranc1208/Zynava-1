'use client'

import React from 'react'
import styles from './QuizButton.module.css'

export interface QuizButtonProps {
  id: string
  label: string
  value: string
  description?: string
  isSelected?: boolean
  onClick: (value: string) => void
  disabled?: boolean
  multiSelect?: boolean
}

export default function QuizButton({
  id,
  label,
  value,
  description,
  isSelected = false,
  onClick,
  disabled = false,
  multiSelect = false,
}: QuizButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(value)
      // Blur immediately after click to remove focus state
      // This prevents buttons from appearing selected due to browser focus outline
      e.currentTarget.blur()
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }
  }

  // Handle touch end to immediately remove any hover/focus states
  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    // Blur the button immediately after touch to prevent sticky hover states
    e.currentTarget.blur()
  }

  // Extract emoji from label if it starts with one
  // Handles both simple emojis (💪, 🛡️) and complex emojis with ZWJ (🏃‍♂️, 🚶‍♂️, 🧘‍♀️)
  const spaceIndex = label.indexOf(' ')
  const firstPart = spaceIndex > 0 ? label.substring(0, spaceIndex) : null
  
  // Improved emoji detection:
  // 1. Check if it starts with an emoji character (Unicode ranges for emojis)
  // 2. Allow up to 8 characters to handle complex emojis with ZWJ and variation selectors
  // 3. Must not start with alphanumeric
  const isEmoji = firstPart && 
    firstPart.length > 0 &&
    firstPart.length <= 8 && // Increased from 4 to handle complex emojis (🏃‍♂️ = 4 chars, can be longer)
    !/^[a-zA-Z0-9]/.test(firstPart) &&
    // Check if it contains emoji characters (Unicode ranges: 1F300-1F9FF, 2600-26FF, 2700-27BF, etc.)
    /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{24C2}-\u{1F251}]/u.test(firstPart)
  
  const icon = isEmoji ? firstPart : null
  const displayLabel = isEmoji && spaceIndex > 0 ? label.substring(spaceIndex + 1) : label

  return (
    <button
      id={id}
      type="button"
      className={`${styles.quizButton} ${isSelected ? styles.selected : ''} ${disabled ? styles.disabled : ''}`}
      onClick={handleClick}
      onTouchEnd={handleTouchEnd}
      disabled={disabled}
      aria-pressed={isSelected}
      tabIndex={0}
    >
      {icon && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.label}>{displayLabel}</span>
      {multiSelect && (
        <div className={styles.checkbox}>
          {isSelected ? '✓' : ''}
        </div>
      )}
    </button>
  )
}

