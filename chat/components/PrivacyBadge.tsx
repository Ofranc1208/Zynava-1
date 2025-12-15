import React from 'react';
import styles from './WelcomeComponents.module.css';

interface PrivacyBadgeProps {
  onClick: () => void;
}

const PrivacyBadge: React.FC<PrivacyBadgeProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={styles.privacyBadge}
    >
      <div className={styles.privacyHeader}>
        <span className={styles.lockIcon}>🔒</span>
        <span className={styles.privacyTitle}>
          100% Private & Secure
        </span>
      </div>
      <p className={styles.privacyDescription}>
        No personal information required • Instant responses • Completely confidential
      </p>
    </div>
  );
};

export default PrivacyBadge;
