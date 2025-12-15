"use client";

import React, { useState } from 'react';
import styles from './LCPSection.module.css';

/**
 * ============================================================================
 * LCP SECTION - SHARED COMPONENT
 * ============================================================================
 *
 * Centralized section layout component for LCP calculator steps.
 * Eliminates ~200 lines of duplicated section markup across step components.
 *
 * Features:
 * - Consistent label styling
 * - Optional tooltip support
 * - Flexible children (button groups, inputs, etc.)
 * - Responsive layout
 */

export interface LCPSectionProps {
  label: string;
  tooltip?: string;
  hint?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const LCPSection: React.FC<LCPSectionProps> = ({
  label,
  tooltip,
  hint,
  children,
  className
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`${styles.section} ${className || ''}`}>
      <label className={styles.label}>
        {label}
        {tooltip && (
          <>
            <span
              className={styles.tooltipIcon}
              onClick={() => setShowTooltip(!showTooltip)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowTooltip(!showTooltip);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Show tooltip for ${label}`}
            >
              ?
            </span>
            {showTooltip && (
              <div
                className={styles.tooltip}
                onClick={() => setShowTooltip(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setShowTooltip(false);
                  }
                }}
                role="tooltip"
                aria-label={tooltip}
              >
                <div className={styles.tooltipContent}>
                  {tooltip}
                </div>
              </div>
            )}
          </>
        )}
      </label>
      {hint && (
        <div style={{
          fontSize: '0.75rem',
          color: '#6b7280',
          fontWeight: '500',
          marginTop: '2px',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          {typeof hint === 'string' ? hint : hint}
        </div>
      )}
      <div className={styles.buttonGroup}>
        {children}
      </div>
    </div>
  );
};

export default LCPSection;

// Export props interface for TypeScript users
export type { LCPSectionProps };
