"use client";
import React, { useRef } from 'react';
import styles from './ChoiceButton.module.css';

export interface ChoiceButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
  index?: number; // For staggered animations
  [key: string]: any; // Allow any additional props
}

/**
 * Choice Button Component - Deployment-Safe Version
 *
 * Simplified button component with reduced complexity for better
 * deployment compatibility. Removes complex animations that may
 * cause issues in production environments.
 *
 * @component ChoiceButton
 * @author Smarter Payouts Team
 * @since 2024
 * @version 3.0.0 - Deployment Fix
 */

/**
 * Choice Button - Simplified Single-Click Implementation
 *
 * ## Key Improvements
 * - ✅ Immediate navigation on single click (no two-step interaction)
 * - ✅ Entire button area is clickable (including edges)
 * - ✅ Simplified click handler for better reliability
 * - ✅ Removed redundant mouse handlers that caused double-click issue
 * - ✅ Visual feedback handled by CSS :active state only
 *
 * ## Changes from Previous Version
 * - Removed isPressed state and ripple effect (caused two-step interaction)
 * - Removed onMouseDown/onMouseUp handlers (interfered with navigation)
 * - Simplified click handler to execute immediately
 * - Ensured icon has pointer-events: none for full button clickability
 */
const ChoiceButton: React.FC<ChoiceButtonProps> = ({ icon, text, onClick, className, index = 0, ...otherProps }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Simplified click handler - executes immediately
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent any default button behavior
    e.stopPropagation(); // Stop event bubbling
    
    try {
      if (onClick) {
        // Execute immediately without any delays
        onClick();
      } else if (process.env.NODE_ENV === 'development') {
        console.warn('[ChoiceButton] onClick handler is undefined');
      }
    } catch (error) {
      console.error('[ChoiceButton] ❌ CRITICAL ERROR in click handler:', error);
      console.error('[ChoiceButton] Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      // Show user-friendly error
      if (typeof window !== 'undefined') {
        window.alert('Button click failed. Please refresh the page and try again.');
      }
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      type="button"
      className={`${styles.choiceButton} ${className || ''}`}
      style={{ width: '100%' }}
      {...otherProps}
    >
      {/* Live indicator dot */}
      <div className={styles.liveIndicator}></div>

      {icon && (
        <span 
          className={styles.iconContainer}
          style={{ pointerEvents: 'none' }}
        >
          {React.isValidElement(icon) 
            ? React.cloneElement(icon as React.ReactElement, {
                style: { pointerEvents: 'none', ...((icon as React.ReactElement)?.props?.style || {}) }
              })
            : icon
          }
        </span>
      )}

      <span className={styles.buttonText}>
        {text}
      </span>

      <span className={styles.arrowIcon}>
        →
      </span>
    </button>
  );
};

export default ChoiceButton; 