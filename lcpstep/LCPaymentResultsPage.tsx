"use client";

import React, { useEffect, useState } from 'react';
import { LCPCalculationResult } from '../../../types';
import styles from './LCPaymentResultsPage.module.css';
import { OfferLoadingAnimation } from './results-components';
import { validateOfferThreshold, formatCurrency } from './utils/validationHelpers';
import { OfferCaptureOverlay } from '../shared-results';

interface Props {
  result: LCPCalculationResult;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

/**
 * ============================================================================
 * LCP PAYMENT RESULTS PAGE
 * ============================================================================
 * The most exciting page in the calculator - shows loading animation first,
 * then reveals the professional contract-style offer display
 */
const LCPaymentResultsPage: React.FC<Props> = ({ result, onBack, currentStep, totalSteps }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setShowResults(true);
  };

  // Validate offer threshold - check if MAXIMUM payout is below $10,000
  const offerValidation = validateOfferThreshold(result.maxPayout || 0);
  
  console.log('🔍 [LCPaymentResultsPage] Offer validation:', {
    maxPayout: result.maxPayout,
    isValid: offerValidation.isValid,
    error: offerValidation.error
  });

  // Show loading animation first
  if (showLoading) {
    return <OfferLoadingAnimation onComplete={handleLoadingComplete} />;
  }

  // If maximum offer is below $10,000 threshold, show "No Offers Available" message
  if (!offerValidation.isValid) {
    console.log('⚠️ [LCPaymentResultsPage] Maximum offer below threshold, showing no offers message');
    
    return (
      <div className={styles.pageContainer}>
        <div className={styles.noOffersCard}>
          <h3 className={styles.noOffersTitle}>No Offers Available</h3>
          <p className={styles.noOffersMessage}>{offerValidation.error}</p>
          <div className={styles.suggestionsContainer}>
            <h4 className={styles.suggestionsTitle}>Suggestions to get an offer:</h4>
            <ul className={styles.suggestionsList}>
              <li className={styles.suggestionItem}>Increase your payment amount</li>
              <li className={styles.suggestionItem}>Extend your date range</li>
              <li className={styles.suggestionItem}>Consider including more payments</li>
              <li className={styles.suggestionItem}>Contact our specialists for assistance</li>
            </ul>
          </div>
          <button onClick={onBack} className={styles.contactButton}>
            Go Back to Edit
          </button>
        </div>
      </div>
    );
  }

  // Then show the results
  return (
    <>
      <div className={styles.pageContainer}>
        {/* Contract-Inspired Document */}
        <div className={styles.documentCard}>
          {/* Decorative Border Corners */}
          <div className={styles.cornerTopLeft} />
          <div className={styles.cornerTopRight} />
          <div className={styles.cornerBottomLeft} />
          <div className={styles.cornerBottomRight} />

          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>Early Payout Offer</h1>
            <p className={styles.subtitle}>STRUCTURED SETTLEMENT VALUATION</p>
          </div>

          {/* Minimum Payout - Top, Smaller, Center-Aligned */}
          {result.minPayout !== undefined && (
            <div className={styles.minimumPayoutContainer}>
              <p className={styles.minimumLabel}>Minimum Payout</p>
              <p className={styles.minimumAmount}>{formatCurrency(result.minPayout)}</p>
            </div>
          )}

          {/* Maximum Payout - Center & Largest with Shimmer */}
          {result.maxPayout !== undefined && (
            <div className={styles.maximumPayoutContainer}>
              <p className={styles.maximumLabel}>Maximum Payout</p>
              <p className={styles.maximumAmount}>{formatCurrency(result.maxPayout)}</p>
            </div>
          )}

          {/* Family Protection Value - Bottom, Center-Aligned */}
          {result.familyProtectionNPV !== undefined && (
            <div className={styles.familyProtectionContainer}>
              <p className={styles.familyLabel}>Family Protection Value</p>
              <p className={styles.familyAmount}>{formatCurrency(result.familyProtectionNPV)}</p>
            </div>
          )}

          {/* Footer Note */}
          <div className={styles.footer}>
            <p className={styles.disclaimer}>
              This offer is based on the information you provided and represents an estimated range.<br />
              Final terms subject to verification and approval.
            </p>
          </div>
        </div>
      </div>

      {/* Offer Capture Overlay - Only show when results are displayed */}
      {showResults && offerValidation.isValid && result.minPayout !== undefined && result.maxPayout !== undefined && (
        <OfferCaptureOverlay
          calculatorType="lcp"
          delaySeconds={5}
          quoteData={{
            minOffer: result.minPayout,
            maxOffer: result.maxPayout,
            familyProtectionValue: result.familyProtectionNPV, // Include family protection value for LCP
          }}
          onSuccess={(data) => {
            console.log('Offer captured:', data);
          }}
        />
      )}
    </>
  );
};

export default React.memo(LCPaymentResultsPage); 