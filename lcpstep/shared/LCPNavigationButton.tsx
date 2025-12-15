"use client";

import React from 'react';
import styles from './LCPNavigationButton.module.css';

/**
 * ============================================================================
 * LCP NAVIGATION BUTTON - SHARED COMPONENT
 * ============================================================================
 *
 * Circular arrow buttons for step navigation (back/next).
 * Provides consistent styling and behavior across all LCP calculator steps.
 *
 * Features:
 * - Back button (left arrow): Gray when disabled, green when enabled
 * - Next button (right arrow): Green when enabled, disabled gray
 * - Identical size and styling for perfect symmetry
 * - Smooth hover and active states
 * - Accessibility support
 */

export interface LCPNavigationButtonProps {
  direction: 'back' | 'next';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

const LCPNavigationButton: React.FC<LCPNavigationButtonProps> = ({
  direction,
  disabled = false,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const isBack = direction === 'back';
  const arrow = isBack ? '←' : '→';
  const defaultLabel = isBack ? 'Go back to previous step' : 'Continue to next step';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || defaultLabel}
      className={`${styles.navButton} ${disabled ? styles.navButtonDisabled : styles.navButtonEnabled}`}
    >
      <span className={styles.arrow}>{arrow}</span>
    </button>
  );
};

export default LCPNavigationButton;

// Export props interface for TypeScript users
export type { LCPNavigationButtonProps };

