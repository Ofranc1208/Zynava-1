"use client";

import React from 'react';
import { LCPSection } from '../shared';
import styles from './PaymentAmountInput.module.css';

export interface PaymentAmountInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  index: number;
}

/**
 * PaymentAmountInput - Custom amount input with $ prefix and validation
 */
const PaymentAmountInput: React.FC<PaymentAmountInputProps> = ({
  value,
  onChange,
  error,
  index
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Filter and format amount input
    const filteredValue = e.target.value
      .replace(/[^\d.]/g, '')
      .replace(/^(\d*\.\d{0,2}).*$/, '$1');
    onChange(filteredValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!error) {
      e.currentTarget.style.borderColor = '#22c55e';
      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.1)';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!error) {
      e.currentTarget.style.borderColor = '#d1d5db';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  return (
    <LCPSection label="Payment Amount ($)">
      <div className={styles.inputContainer}>
        <span className={styles.dollarSign}>$</span>
        <input
          type="text"
          inputMode="decimal"
          className={`${styles.input} ${error ? styles.error : ''}`}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter amount"
        />
      </div>
      {error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </LCPSection>
  );
};

export default PaymentAmountInput;
