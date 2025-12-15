"use client";

import React, { useState } from 'react';
import styles from './ResultsDisplay.module.css';
import { LCPCalculationResult } from '../../../../types';

export interface ResultsDisplayProps {
  result?: LCPCalculationResult;
  error?: string;
}

/**
 * ResultsDisplay - Shows calculation results and error messages
 * Includes expandable details view
 */
const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  result,
  error
}) => {
  const [showDetails, setShowDetails] = useState(false);

  if (error) {
    return (
      <div className={styles.errorContainer}>
        {error}
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className={styles.resultsContainer}>
      <h3 className={styles.resultsTitle}>Result</h3>
      
      <div className={styles.resultsContent}>
        {/* Main Payout Amount */}
        <div className={styles.mainResult}>
          <span className={styles.resultLabel}>Payout Amount:</span>
          <span className={styles.resultValue}>
            ${result.npv?.toLocaleString(undefined, {
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2
            })}
          </span>
        </div>
        
        {/* Min Payout */}
        {result.minPayout !== undefined && (
          <div className={styles.resultRow}>
            <span className={styles.resultLabel}>Min Payout:</span>
            <span className={styles.resultSecondary}>
              ${result.minPayout?.toLocaleString(undefined, {
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2
              })}
            </span>
          </div>
        )}
        
        {/* Max Payout */}
        {result.maxPayout !== undefined && (
          <div className={styles.resultRow}>
            <span className={styles.resultLabel}>Max Payout:</span>
            <span className={styles.resultSecondary}>
              ${result.maxPayout?.toLocaleString(undefined, {
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2
              })}
            </span>
          </div>
        )}
        
        {/* Family Protection Value - Emphasized */}
        {result.familyProtectionNPV !== undefined && (
          <div className={styles.familyProtectionRow}>
            <span className={styles.familyProtectionLabel}>FAMILY PROTECTION VALUE</span>
            <span className={styles.familyProtectionValue}>
              ${result.familyProtectionNPV?.toLocaleString(undefined, {
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2
              })}
            </span>
          </div>
        )}
      </div>
      
      {/* Show/Hide Details Button */}
      <button
        className={styles.detailsButton}
        type="button"
        onClick={() => setShowDetails(prev => !prev)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      
      {/* Expandable Details */}
      {showDetails && (
        <pre className={styles.detailsContent}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ResultsDisplay;
