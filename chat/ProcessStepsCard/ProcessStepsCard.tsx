'use client';

import React from 'react';
import styles from './ProcessStepsCard.module.css';

/**
 * Process Steps Card Component for Chat
 * 
 * Displays the 4-step process in a beautiful card format
 * when users ask about the process or how it works.
 */
export default function ProcessStepsCard() {
  const steps = [
    {
      number: '1',
      title: 'Get Instant Quote',
      description: 'AI-powered instant quote with no personal info required.'
    },
    {
      number: '2',
      title: 'Review Transparent Terms',
      description: 'Clear pricing with no hidden fees.'
    },
    {
      number: '3',
      title: 'Legal Process',
      description: 'We handle all court filings for you.'
    },
    {
      number: '4',
      title: 'Receive Funds',
      description: 'Get your money in 2-5 business days after approval.'
    }
  ];

  return (
    <div className={styles.processContainer}>
      <div className={styles.processHeader}>
        <h3 className={styles.processTitle}>Our 4-Step Process</h3>
        <p className={styles.processSubtitle}>From quote to cash in simple steps</p>
      </div>
      
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <h4 className={styles.stepTitle}>
              <span className={styles.stepNumber}>{step.number}.</span> {step.title}
            </h4>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

