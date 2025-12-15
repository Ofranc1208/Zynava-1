"use client";

import React from 'react';
import styles from './ResultsContainer.module.css';

export interface ResultsContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ResultsContainer - Container for all result cards
 * Provides consistent layout and spacing for result displays
 */
const ResultsContainer: React.FC<ResultsContainerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default ResultsContainer;
