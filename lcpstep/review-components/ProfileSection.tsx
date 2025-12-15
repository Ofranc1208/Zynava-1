"use client";

import React from 'react';
import ReviewSection from './ReviewSection';
import styles from './ReviewSection.module.css';
import { LCPProfileData } from '../../../../types';

export interface ProfileSectionProps {
  profileData: LCPProfileData;
}

/**
 * ProfileSection - Displays age, gender, and body frame information
 */
const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileData
}) => {
  return (
    <ReviewSection title="Profile">
      <ul className={styles.list}>
        {Object.entries(profileData || {}).map(([key, value]) => (
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

export default ProfileSection;
