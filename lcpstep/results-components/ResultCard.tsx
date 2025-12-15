"use client";

import React from 'react';
import styles from './ResultCard.module.css';

export interface ResultCardProps {
  label: string;
  amount: number;
  variant?: 'minimum' | 'maximum' | 'family';
  className?: string;
}

/**
 * ResultCard - Individual result display card
 * Shows payout amounts with consistent styling and formatting
 */
const ResultCard: React.FC<ResultCardProps> = ({
  label,
  amount,
  variant = 'minimum',
  className = ''
}) => {
  const formatAmount = (value: number) => {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const getAmountClass = () => {
    switch (variant) {
      case 'maximum':
        return styles.amountMaximum;
      case 'family':
        return styles.amountFamily;
      default:
        return styles.amountMinimum;
    }
  };

  return (
    <div className={`${styles.card} ${className}`}>
      <span className={styles.label}>{label}</span>
      <span className={`${styles.amount} ${getAmountClass()}`}>
        ${formatAmount(amount)}
      </span>
    </div>
  );
};

export default ResultCard;
