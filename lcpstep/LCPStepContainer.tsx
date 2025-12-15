"use client";

import React, { Suspense } from 'react';
import styles from './LCPStepContainer.module.css';

interface LCPStepContainerProps {
  title: string;
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

const LCPStepContainerContent: React.FC<LCPStepContainerProps> = ({ title, children, currentStep, totalSteps }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.stepIndicator}>
          Step {currentStep} of {totalSteps}
        </div>
      </header>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

const LCPStepContainer: React.FC<LCPStepContainerProps> = (props) => {
  return (
    <Suspense fallback={
      <div className={`${styles.container} ${styles.loading}`}>
        <div>Loading...</div>
      </div>
    }>
      <LCPStepContainerContent {...props} />
    </Suspense>
  );
};

export default LCPStepContainer; 