"use client";

import React, { useState, useEffect } from 'react';
import styles from './OfferLoadingAnimation.module.css';

interface OfferLoadingAnimationProps {
  onComplete: () => void;
}

/**
 * ============================================================================
 * OFFER LOADING ANIMATION
 * ============================================================================
 * Professional loading sequence that simulates analyzing rates and calculating
 * the best payout offer before revealing the results
 */
const OfferLoadingAnimation: React.FC<OfferLoadingAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  const steps = [
    { text: 'Analyzing your settlement structure...', duration: 1000 },
    { text: 'Comparing rates from multiple buyers...', duration: 1000 },
    { text: 'Calculating current interest rates...', duration: 900 },
    { text: 'Comparing competitive payout options...', duration: 900 },
    { text: 'Finalizing your offer...', duration: 800 },
  ];

  const companyInfo = [
    "We're looking for the highest price for you",
    "You're never captive to contracts",
    "We work to secure competitive rates based on current market conditions.",
    "Court-approved process for your protection",
    "Works with licensed brokers in all 50 states",
    "Comparing offers from top-rated buyers",
    "Your satisfaction is our priority",
  ];

  // Handle step progression
  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, steps[currentStep].duration);

      return () => clearTimeout(timer);
    } else {
      // All steps complete, trigger reveal
      const finalDelay = setTimeout(() => {
        onComplete();
      }, 400);

      return () => clearTimeout(finalDelay);
    }
  }, [currentStep, onComplete]);

  // Rotate company info messages every 2 seconds
  useEffect(() => {
    const infoTimer = setInterval(() => {
      setCurrentInfoIndex((prev) => (prev + 1) % companyInfo.length);
    }, 2000);

    return () => clearInterval(infoTimer);
  }, [companyInfo.length]);

  // Calculate progress correctly to reach exactly 100%
  const progress = currentStep >= steps.length 
    ? 100 
    : Math.min(((currentStep + 1) / steps.length) * 100, 100);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Simple Title Display */}
        <div className={styles.titleContainer}>
          <h2 className={styles.calculatingTitle}>Calculating Your Offer</h2>
        </div>

        {/* Current Step Text */}
        <div className={styles.textContainer}>
          {steps.map((step, index) => (
            <p
              key={index}
              className={`${styles.stepText} ${
                index === currentStep ? styles.active : ''
              } ${index < currentStep ? styles.completed : ''}`}
            >
              {index < currentStep && (
                <span className={styles.checkmark}>✓</span>
              )}
              {step.text}
            </p>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={styles.progressText}>{Math.round(progress)}%</p>
        </div>

        {/* Pulsing Dots */}
        <div className={styles.dotsContainer}>
          <span className={styles.dot} style={{ animationDelay: '0s' }} />
          <span className={styles.dot} style={{ animationDelay: '0.2s' }} />
          <span className={styles.dot} style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default OfferLoadingAnimation;

