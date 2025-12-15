"use client";

import React, { useState, useEffect } from 'react';
import styles from './SaharBakhshCard.module.css';

interface SaharBakhshCardProps {
  className?: string;
}

const SaharBakhshCard: React.FC<SaharBakhshCardProps> = ({ className }) => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    // Trigger heart animation after component mounts
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.saharCard} ${className || ''}`}>
      {/* Heart Animation Overlay */}
      {showHearts && (
        <div className={styles.heartContainer}>
          <div className={styles.heart}>💖</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>💝</div>
          <div className={styles.heart}>💖</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>💝</div>
          <div className={styles.heart}>💖</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>💝</div>
        </div>
      )}

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <span className={styles.avatarHeart}>❤️</span>
          </div>
          <div className={styles.titleSection}>
            <h3 className={styles.name}>Dr. Sahar Bakhsh</h3>
            <p className={styles.role}>The Driving Force Behind Smarter Payouts</p>
          </div>
        </div>

        <div className={styles.description}>
          <p className={styles.mainText}>
            Oscar's beloved wife and dedicated doctor.
          </p>
          
          <div className={styles.missionPoints}>
            <div className={styles.missionPoint}>
              <span className={styles.icon}>👩‍⚕️</span>
              <span>Dedicated doctor with a heart for healing</span>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.loveNote}>
            💕 Created with love by Oscar Francis 💕
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaharBakhshCard;
