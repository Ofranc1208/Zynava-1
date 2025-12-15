"use client";

import React, { useState, useEffect } from 'react';
import styles from './LCPFormInput.module.css';

/**
 * ============================================================================
 * LCP FORM INPUT - SHARED COMPONENT
 * ============================================================================
 *
 * Centralized form input component for LCP calculator steps.
 * Eliminates ~100 lines of duplicated input styling across step components.
 *
 * Features:
 * - Text and date input types
 * - Validation state display (error, valid, neutral)
 * - Error message display
 * - Consistent styling across all inputs
 */

export interface LCPFormInputProps {
  type: 'text' | 'date';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
  className?: string;
  maxLength?: number;
  min?: string;
  max?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLInputElement>) => void;
}

const LCPFormInput: React.FC<LCPFormInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  isValid,
  className,
  maxLength,
  min,
  max,
  onFocus,
  onBlur,
  onClick,
  onMouseDown,
  onTouchStart
}) => {
  const [focused, setFocused] = useState(false);

  // Determine input state for styling
  const getInputState = () => {
    if (error) return 'error';
    if (isValid && value) return 'valid';
    return 'neutral';
  };

  const inputState = getInputState();

  // Handle focus events for enhanced UX
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (!error) {
      e.currentTarget.style.borderColor = '#22c55e';
      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.1)';
    }
    // Call custom onFocus handler if provided
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (!error) {
      if (isValid && value) {
        e.currentTarget.style.borderColor = '#22c55e';
        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.1)';
      } else {
        e.currentTarget.style.borderColor = '#d1d5db';
        e.currentTarget.style.boxShadow = 'none';
      }
    }
    // Call custom onBlur handler if provided
    onBlur?.();
  };

  // Handle text input sanitization (for numeric inputs)
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'text') {
      // Allow only numbers and decimal point for amount inputs
      let sanitized = e.target.value.replace(/[^0-9.]/g, '');
      
      // Enforce maximum 7 digits before decimal point
      const parts = sanitized.split('.');
      if (parts[0].length > 7) {
        parts[0] = parts[0].substring(0, 7);
        sanitized = parts.join('.');
      }
      
      onChange(sanitized);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${styles.inputWrapper} ${className || ''}`}>
      <input
        type={type}
        value={value}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        placeholder={placeholder}
        maxLength={maxLength}
        min={min}
        max={max}
        className={`${styles.input} ${styles[`input${inputState.charAt(0).toUpperCase() + inputState.slice(1)}`]}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${type}-error` : undefined}
      />
      {error && (
        <p
          id={`${type}-error`}
          className={styles.errorMessage}
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default LCPFormInput;

// Export props interface for TypeScript users
export type { LCPFormInputProps };
