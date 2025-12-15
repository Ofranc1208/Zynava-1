"use client";

import React from 'react';
import ReviewSection from './ReviewSection';
import styles from './ReviewSection.module.css';
import { LCPDetailsData } from '../../../../types';

export interface DetailsSectionProps {
  detailsData: LCPDetailsData;
}

// Helper to format dates for display
function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * DetailsSection - Displays start/end dates for non-lump sum payments
 */
const DetailsSection: React.FC<DetailsSectionProps> = ({
  detailsData
}) => {
  return (
    <ReviewSection title="Details">
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Start Date:</span>
          <span className={styles.value}>
            {detailsData?.startDate ? formatDate(detailsData.startDate) : 'Not specified'}
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>End Date:</span>
          <span className={styles.value}>
            {detailsData?.endDate ? formatDate(detailsData.endDate) : 'Not specified'}
          </span>
        </li>
      </ul>
    </ReviewSection>
  );
};

export default DetailsSection;
