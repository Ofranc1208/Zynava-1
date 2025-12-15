"use client";

import React from 'react';
import ReviewSection from './ReviewSection';
import styles from './ReviewSection.module.css';
import { LCPLifestyleData, LCPProfileData, LCPHealthData } from '../../../../types';

export interface LifestyleSectionProps {
  lifestyleData: LCPLifestyleData;
  profileData: LCPProfileData; // For body frame
  healthData: LCPHealthData; // For smoking, health, cardiac
}

/**
 * LifestyleSection - Displays weight, body frame, smoking, and health information
 * Consolidates lifestyle-related data from multiple sources
 */
const LifestyleSection: React.FC<LifestyleSectionProps> = ({
  lifestyleData,
  profileData,
  healthData
}) => {
  const hasAnyData = lifestyleData?.weight || profileData?.bodyFrame || 
                     healthData?.smoke || healthData?.health || healthData?.cardiac;

  if (!hasAnyData) {
    return (
      <ReviewSection title="Lifestyle">
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.value}>No lifestyle information provided</span>
          </li>
        </ul>
      </ReviewSection>
    );
  }

  return (
    <ReviewSection title="Lifestyle">
      <ul className={styles.list}>
        {/* Weight */}
        {lifestyleData?.weight && (
          <li className={styles.listItem}>
            <span className={styles.label}>Weight:</span>
            <span className={styles.value}>{lifestyleData.weight}</span>
          </li>
        )}
        
        {/* Body Frame (moved from Profile to Lifestyle) */}
        {profileData?.bodyFrame && (
          <li className={styles.listItem}>
            <span className={styles.label}>Body Frame:</span>
            <span className={styles.value}>{profileData.bodyFrame}</span>
          </li>
        )}
        
        {/* Smoking Status (moved from Health to Lifestyle) */}
        {healthData?.smoke && (
          <li className={styles.listItem}>
            <span className={styles.label}>Smoking Status:</span>
            <span className={styles.value}>{healthData.smoke}</span>
          </li>
        )}
        
        {/* Health Profile (moved from Health to Lifestyle) */}
        {healthData?.health && (
          <li className={styles.listItem}>
            <span className={styles.label}>Health Profile:</span>
            <span className={styles.value}>{healthData.health}</span>
          </li>
        )}
        
        {/* Cardiac Health (moved from Health to Lifestyle) */}
        {healthData?.cardiac && (
          <li className={styles.listItem}>
            <span className={styles.label}>Cardiac Health:</span>
            <span className={styles.value}>{healthData.cardiac}</span>
          </li>
        )}
      </ul>
    </ReviewSection>
  );
};

export default LifestyleSection;
