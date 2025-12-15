import React from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Logo/Brand Section */}
      <div className={styles.brandSection}>
        <h1 className={styles.title}>
          Smarter Payouts
        </h1>
        <p className={styles.subtitle}>
          100% No personal information required
        </p>
      </div>

      {/* Loading Animation */}
      <div className={styles.loadingSection}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>
          Loading calculator...
        </p>
        <p className={styles.stepText}>
          Current step: Initializing
        </p>
      </div>

      {/* Main Feature Badge - Centered */}
      <div className={styles.badgeSection}>
        <div className={styles.badge}>
          <div className={styles.badgeIcon}>
            🔒
          </div>
          <div className={styles.badgeContent}>
            <p className={styles.badgeTitle}>
              100% No Personal Information Required
            </p>
            <p className={styles.badgeDescription}>
              Complete transparency • We never ask for personal information to get a quote
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

