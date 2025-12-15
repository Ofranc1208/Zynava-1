"use client";

import React, { useState, useEffect } from 'react';
import { useAssistant } from '../../../../contexts/AssistantContext';
import LoadingScreen from './LoadingScreen';
import LCPStepper from '../LCPStepper';
import styles from './StepperContent.module.css';

/**
 * ============================================================================
 * LCP STEPPER CONTENT - Loading & Layout Wrapper
 * ============================================================================
 * Provides branded loading experience before showing calculator steps
 * Matches the Guaranteed calculator's loading pattern
 */
const StepperContent: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const { setFlowType } = useAssistant();

  // Set flow type on mount
  useEffect(() => {
    setFlowType('lcp');
  }, [setFlowType]);

  // Show loading screen for 2 seconds before revealing calculator
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show branded loading screen while initializing
  if (isPageLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.contentWrapper}>
      <LCPStepper />
    </div>
  );
};

export default StepperContent;

