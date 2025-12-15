"use client";

import React from 'react';
import ReviewSection from './ReviewSection';
import styles from './PaymentSection.module.css';
import { LCPPaymentData, LCPDetailsData } from '../../../../types';

export interface PaymentSectionProps {
  paymentData: LCPPaymentData;
  detailsData: LCPDetailsData;
  lumpSumPayments?: Array<{ amount: string; lumpSumDate: string }>;
}

// Helper to format dates for display
function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * PaymentSection - Handles all payment display logic
 * Supports Monthly, Annual, and Lump Sum payment modes
 */
const PaymentSection: React.FC<PaymentSectionProps> = ({
  paymentData,
  detailsData,
  lumpSumPayments
}) => {
  const renderPaymentContent = () => {
    return (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Payment Mode:</span>
          <span className={styles.value}>
            {paymentData?.paymentMode || 'Not specified'}
          </span>
        </li>
        
        {/* Handle Lump Sum payments differently */}
        {paymentData?.paymentMode === 'Lump Sum' ? (
          <>
            <li className={styles.listItem}>
              <span className={styles.label}>Number of Payments:</span>
              <span className={styles.value}>
                {lumpSumPayments?.length || 0}
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.label}>Total Amount:</span>
              <span className={styles.value}>
                ${lumpSumPayments?.reduce((sum: number, payment: any) => 
                  sum + (Number(payment.amount) || 0), 0).toLocaleString() || 'Not specified'}
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.label}>Annual Increase:</span>
              <span className={styles.value}>
                {detailsData?.annualIncrease !== undefined ? `${detailsData.annualIncrease}%` : 'Not specified'}
              </span>
            </li>
            
            {/* Show individual payments */}
            {lumpSumPayments?.map((payment: any, index: number) => (
              <li key={index} className={styles.lumpSumPayment}>
                <div className={styles.paymentDetails}>
                  <div className={styles.paymentRow}>
                    <span className={styles.paymentLabel}>Payment {index + 1}:</span>
                    <span className={styles.paymentValue}>
                      ${Number(payment.amount).toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.paymentRow}>
                    <span className={styles.paymentLabel}>Date:</span>
                    <span className={styles.paymentValue}>
                      {formatDate(payment.lumpSumDate)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <>
            <li className={styles.listItem}>
              <span className={styles.label}>Amount:</span>
              <span className={styles.value}>
                ${paymentData?.amount ? Number(paymentData.amount).toLocaleString() : 'Not specified'}
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.label}>Annual Increase:</span>
              <span className={styles.value}>
                {detailsData?.annualIncrease !== undefined ? `${detailsData.annualIncrease}%` : 'Not specified'}
              </span>
            </li>
          </>
        )}
      </ul>
    );
  };

  return (
    <ReviewSection title="Payment">
      {renderPaymentContent()}
    </ReviewSection>
  );
};

export default PaymentSection;
