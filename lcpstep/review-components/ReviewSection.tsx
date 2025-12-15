"use client";

import React from 'react';
import styles from './ReviewSection.module.css';

export interface ReviewSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable section wrapper for review step sections
 * Provides consistent styling and layout for all review sections
 */
const ReviewSection: React.FC<ReviewSectionProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ReviewSection;
