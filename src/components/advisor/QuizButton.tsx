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
  const handleClick = () => {
    if (!disabled) {
      onClick(value)
      // Blur immediately after click to remove focus state
      // This prevents buttons from appearing selected due to browser focus outline
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }
  }

  // Extract emoji from label if it starts with one
  // Split by first space and check if first part looks like an emoji (non-ASCII start, short length)
  const spaceIndex = label.indexOf(' ')
  const firstPart = spaceIndex > 0 ? label.substring(0, spaceIndex) : null
  
  // Check if first part is an emoji (non-alphanumeric start, length <= 4 to handle variation selectors)
  const isEmoji = firstPart && 
    firstPart.length <= 4 && 
    firstPart.length > 0 &&
    !/^[a-zA-Z0-9]/.test(firstPart)
  
  const icon = isEmoji ? firstPart : null
  const displayLabel = isEmoji && spaceIndex > 0 ? label.substring(spaceIndex + 1) : label

  return (
    <button
      id={id}
      type="button"
      className={`${styles.quizButton} ${isSelected ? styles.selected : ''} ${disabled ? styles.disabled : ''}`}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={isSelected}
      tabIndex={0}
    >
      {icon && (
        <span className={styles.icon}>{icon}</span>
      )}
      <div className={styles.buttonContent}>
        <span className={styles.label}>{displayLabel}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
      {multiSelect && (
        <div className={styles.checkbox}>
          {isSelected ? '✓' : ''}
        </div>
      )}
    </button>
  )
}

