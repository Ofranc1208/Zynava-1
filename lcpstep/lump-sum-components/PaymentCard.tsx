"use client";

import React from 'react';
import { LCPSection, LCPFormInput } from '../shared';
import PaymentAmountInput from './PaymentAmountInput';
import styles from './PaymentCard.module.css';

export interface Payment {
  amount: string;
  lumpSumDate: string;
}

export interface PaymentCardProps {
  payment: Payment;
  index: number;
  errors: Record<string, string>;
  onPaymentChange: (index: number, field: 'amount' | 'lumpSumDate', value: string) => void;
}

/**
 * PaymentCard - Individual payment form card
 * Contains amount input and date input for a single payment
 */
const PaymentCard: React.FC<PaymentCardProps> = ({
  payment,
  index,
  errors,
  onPaymentChange
}) => {
  const handleAmountChange = (value: string) => {
    onPaymentChange(index, 'amount', value);
  };

  const handleDateChange = (value: string) => {
    onPaymentChange(index, 'lumpSumDate', value);
  };

  return (
    <div className={styles.card}>
      <h6 className={styles.title}>Payment {index + 1}</h6>

      <PaymentAmountInput
        value={payment.amount}
        onChange={handleAmountChange}
        error={errors[`payment-${index}-amount`]}
        index={index}
      />

      <LCPSection label="Payment Date">
        <LCPFormInput
          type="date"
          value={payment.lumpSumDate}
          onChange={handleDateChange}
          error={errors[`payment-${index}-date`]}
          isValid={payment.lumpSumDate !== ''}
        />
      </LCPSection>
    </div>
  );
};

export default PaymentCard;
