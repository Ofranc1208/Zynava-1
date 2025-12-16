"use client";

import React, { useState, useEffect } from 'react';
import styles from './ProcessingAnimation.module.css';

interface ProcessingAnimationProps {
  onComplete: () => void;
  onViewResults: () => void;
}

/**
 * ============================================================================
 * SUPPLEMENT ADVISOR PROCESSING ANIMATION
 * ============================================================================
 * Shows animated loading steps while searching for supplements
 */
export default function ProcessingAnimation({ onComplete, onViewResults }: ProcessingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: 'Shopping through hundreds of brands...', duration: 1000 },
    { text: 'Searching thousands of products...', duration: 1000 },
    { text: 'Matching your health goals...', duration: 900 },
    { text: 'Filtering by your preferences...', duration: 900 },
    { text: 'Finding your perfect supplements...', duration: 800 },
  ];

  // Handle step progression
  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, steps[currentStep].duration);

      return () => clearTimeout(timer);
    } else {
      // All steps complete - go directly to results (no completion page)
      const finalDelay = setTimeout(() => {
        onComplete();
        onViewResults(); // Navigate directly to results page
      }, 400);

      return () => clearTimeout(finalDelay);
    }
  }, [currentStep, onComplete, onViewResults]);

  // Calculate progress correctly to reach exactly 100%
  const progress = currentStep >= steps.length 
    ? 100 
    : Math.min(((currentStep + 1) / steps.length) * 100, 100);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Container 1: Header - Heading + Subtitle */}
        <div className={styles.headerContainer}>
          <h2 className={styles.mainHeading}>Ready to be Amazed</h2>
          <h3 className={styles.processingTitle}>Finding Your Supplements</h3>
        </div>

        {/* Container 2: Steps - Only the animated step text */}
        <div className={styles.stepsContainer}>
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

        {/* Container 3: Progress - Progress bar + dots */}
        <div className={styles.bottomContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={styles.progressText}>{Math.round(progress)}%</p>
          <div className={styles.dotsContainer}>
            <span className={styles.dot} style={{ animationDelay: '0s' }} />
            <span className={styles.dot} style={{ animationDelay: '0.2s' }} />
            <span className={styles.dot} style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

