"use client";

import React, { useState, useEffect } from 'react';
import styles from './OscarFrancisCard.module.css';

interface OscarFrancisCardProps {
  className?: string;
}

const OscarFrancisCard: React.FC<OscarFrancisCardProps> = ({ className }) => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    // Trigger heart animation after component mounts
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.oscarCard} ${className || ''}`}>
      {/* Heart Animation Overlay */}
      {showHearts && (
        <div className={styles.heartContainer}>
          <div className={styles.heart}>💖</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>💝</div>
          <div className={styles.heart}>💖</div>
        </div>
      )}

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <span className={styles.avatarText}>OF</span>
          </div>
          <div className={styles.titleSection}>
            <h3 className={styles.name}>Oscar Francis</h3>
            <p className={styles.role}>Creator & Founder</p>
          </div>
        </div>

        <div className={styles.description}>
          <p className={styles.mainText}>
            Creator and founder of Smarter Payouts, dedicated to bringing fairness and transparency to structured settlements.
          </p>
          
          <div className={styles.missionPoints}>
            <div className={styles.missionPoint}>
              <span className={styles.icon}>🎯</span>
              <span>Passionate about providing access to structured settlement funds when needed most</span>
            </div>
            <div className={styles.missionPoint}>
              <span className={styles.icon}>⚖️</span>
              <span>Committed to ethical practices and eliminating hidden fees</span>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.quote}>
            "Fairness and transparency, one customer at a time."
          </div>
        </div>
      </div>
    </div>
  );
};

export default OscarFrancisCard;
