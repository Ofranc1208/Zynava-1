'use client';

import React from 'react';
import { useChat } from '../../../contexts/chat/ChatContext';
import styles from './QuoteButton.module.css';

/**
 * Quote Button Component for Chat
 * 
 * Displays clean, professional options to get a quote or speak with a specialist.
 * Designed to match the chat interface styling with elegant simplicity.
 * 
 * When "Get Instant Quote" is clicked, it starts the same conversational form flow
 * as the "New Quote" button - showing payment type selection in the chat.
 */
export default function QuoteButton() {
  const { startConversationalForm } = useChat();

  const handleGetQuote = () => {
    // Start the same conversational form flow as "New Quote" button
    startConversationalForm();
  };

  const handleCallSpecialist = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+18552143510';
    }
  };

  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteOptions}>
        {/* Get Quote Option */}
        <button
          className={styles.quoteOption}
          onClick={handleGetQuote}
          aria-label="Get your instant quote using our calculator"
        >
          <div className={styles.optionIcon}>
            <span className={styles.iconEmoji}>💰</span>
          </div>
          <div className={styles.optionContent}>
            <div className={styles.optionTitle}>Get Instant Quote</div>
            <div className={styles.optionDescription}>Use our calculator - no personal info required</div>
          </div>
          <div className={styles.optionArrow}>→</div>
        </button>

        {/* Speak with Specialist Option */}
        <button
          className={styles.quoteOption}
          onClick={handleCallSpecialist}
          aria-label="Call a specialist to speak about your quote"
        >
          <div className={styles.optionIcon}>
            <span className={styles.iconEmoji}>📞</span>
          </div>
          <div className={styles.optionContent}>
            <div className={styles.optionTitle}>Speak with Specialist</div>
            <div className={styles.optionDescription}>
              Call <a href="tel:+18552143510" style={{ color: '#047857', textDecoration: 'underline' }}>(855) 214-3510</a> for personalized help
            </div>
          </div>
          <div className={styles.optionArrow}>→</div>
        </button>
      </div>
    </div>
  );
}
