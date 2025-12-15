'use client';

import React from 'react';
import styles from './LocationCard.module.css';

/**
 * Location Card Component for Chat
 * 
 * Displays company address and location information in a clean, copyable format
 * when users ask "where are you located?" or similar questions.
 * 
 * Features:
 * - Clean, professional card design
 * - Copyable address
 * - Google Maps link
 * - Business hours
 * - Appointment scheduling info
 */
export default function LocationCard() {
  const address = {
    street: '15257 Amberly Dr Ste 233',
    city: 'Tampa',
    state: 'FL',
    zip: '33647',
    full: '15257 Amberly Dr Ste 233, Tampa, FL 33647'
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.full)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address.full).then(() => {
      // Optional: Show a toast notification
      const button = document.querySelector(`[data-copy-button]`) as HTMLElement;
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = '';
        }, 2000);
      }
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = address.full;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  };

  const handleGetDirections = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.locationContainer}>
      <div className={styles.locationHeader}>
        <h3 className={styles.locationTitle}>Our Office</h3>
        <p className={styles.locationSubtitle}>Visit us or get directions</p>
      </div>
      
      <div className={styles.addressSection}>
        <div className={styles.addressLabel}>Address:</div>
        <div className={styles.addressText}>
          <div className={styles.addressLine}>{address.street}</div>
          <div className={styles.addressLine}>{address.city}, {address.state} {address.zip}</div>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Business Hours:</span>
          <span className={styles.infoValue}>Monday-Friday, 9AM-6PM EST</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Phone:</span>
          <span className={styles.infoValue}>
            <a href="tel:+18552143510" style={{ color: '#047857', textDecoration: 'underline' }}>(855) 214-3510</a>
          </span>
        </div>
        <div className={styles.infoNote}>
          In-person consultations available by appointment
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button
          className={styles.copyButton}
          onClick={handleCopyAddress}
          data-copy-button
          aria-label="Copy address to clipboard"
        >
          📋 Copy Address
        </button>
        <button
          className={styles.directionsButton}
          onClick={handleGetDirections}
          aria-label="Get directions on Google Maps"
        >
          🗺️ Get Directions
        </button>
      </div>
    </div>
  );
}

