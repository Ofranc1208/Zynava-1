"use client";

import React from 'react';
import ReviewSection from './ReviewSection';
import styles from './ReviewSection.module.css';
import { LCPHealthData } from '../../../../types';

export interface HealthSectionProps {
  healthData: LCPHealthData;
}

/**
 * HealthSection - Displays health data information
 * Note: Most health data is now shown in LifestyleSection for better UX
 */
const HealthSection: React.FC<HealthSectionProps> = ({
  healthData
}) => {
  return (
    <ReviewSection title="Health">
      <ul className={styles.list}>
        {Object.entries(healthData || {}).map(([key, value]) => (
          <li key={key} className={styles.listItem}>
            <span className={styles.label}>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
            </span>
            <span className={styles.value}>
              {String(value) || 'Not specified'}
            </span>
          </li>
        ))}
      </ul>
    </ReviewSection>
  );
};

export default HealthSection;
