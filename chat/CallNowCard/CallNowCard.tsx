'use client';

import React from 'react';
import styles from './CallNowCard.module.css';

/**
 * Call Now Card Component
 * 
 * Displays a focused card with call-to-action when users want to speak with someone.
 * Features a prominent "Call Now" button that auto-dials the phone number.
 * 
 * @module CallNowCard
 * @author Smarter Payouts Team
 * @since 2025
 */
export default function CallNowCard() {
  const handleCallClick = () => {
    window.location.href = 'tel:+18552143510';
  };

  return (
    <div className={styles.callNowCard}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <span className={styles.phoneIcon}>📞</span>
        </div>
        <div className={styles.message}>
          Great! You can call us anytime at
        </div>
        <div className={styles.phoneNumber}>
          <a href="tel:+18552143510">(855) 214-3510</a>
        </div>
        <button 
          className={styles.callButton}
          onClick={handleCallClick}
          aria-label="Call (855) 214-3510"
        >
          <span className={styles.callButtonIcon}>📞</span>
          <span className={styles.callButtonText}>Call Now</span>
        </button>
        <div className={styles.availability}>
          Monday-Friday, 9AM-6PM EST
        </div>
      </div>
    </div>
  );
}

