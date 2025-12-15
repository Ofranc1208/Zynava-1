"use client";

import React, { useState, useRef, useEffect } from 'react';
import LCPStepContainer from './LCPStepContainer';
import { LCPButton, LCPNavigationButton } from './shared';
import { NumberOfPaymentsInput, PaymentCard, Payment } from './lump-sum-components';
import layout from './utils/LCPLayout.module.css';

interface LCPLumpSumAmountOverviewProps {
  onNext: (data: { payments: Payment[] }) => void;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}

const LCPLumpSumAmountOverview: React.FC<LCPLumpSumAmountOverviewProps> = ({ 
  onNext,
  onBack,
  currentStep, 
  totalSteps 
}) => {
  const [numberOfPayments, setNumberOfPayments] = useState<number | ''>('');
  const [payments, setPayments] = useState<Payment[]>([{ amount: '', lumpSumDate: '' }]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showInstructions, setShowInstructions] = useState(false);

  // Update payments array when numberOfPayments changes
  React.useEffect(() => {
    if (typeof numberOfPayments === 'number' && numberOfPayments > 0) {
      const currentPayments = payments;
      const newPayments: Payment[] = [];
      for (let i = 0; i < numberOfPayments; i++) {
        newPayments.push(currentPayments[i] || { amount: '', lumpSumDate: '' });
      }
      setPayments(newPayments);
    }
  }, [numberOfPayments]);

  const handlePaymentChange = (index: number, field: 'amount' | 'lumpSumDate', value: string) => {
    const updatedPayments = [...payments];
    
    if (field === 'amount') {
      // Filter and format amount input
      const filteredValue = value
        .replace(/[^\d.]/g, '')
        .replace(/^(\d*\.\d{0,2}).*$/, '$1');
      updatedPayments[index].amount = filteredValue;
    } else {
      updatedPayments[index].lumpSumDate = value;
    }
    
    setPayments(updatedPayments);
  };

  const validateForm = (): boolean => {
    const currentErrors: { [key: string]: string } = {};

    // Check if number of payments is entered
    if (numberOfPayments === '' || !numberOfPayments) {
      currentErrors['numberOfPayments'] = 'Please enter the number of payments (1-10).';
    } else if (typeof numberOfPayments === 'number' && (numberOfPayments < 1 || numberOfPayments > 10)) {
      currentErrors['numberOfPayments'] = 'Please enter a number between 1 and 10.';
    }

    // Only validate payment details if we have a valid number of payments
    if (typeof numberOfPayments === 'number' && numberOfPayments > 0) {
      payments.forEach((payment, index) => {
        const amountValue = payment.amount;
        const parsedAmount = parseFloat(amountValue);

        if (!amountValue || isNaN(parsedAmount) || parsedAmount <= 0) {
          currentErrors[`payment-${index}-amount`] = 'Please enter a valid positive amount.';
        } else {
          const amountString = String(amountValue);
          const decimalIndex = amountString.indexOf('.');
          const wholePart = decimalIndex === -1 ? amountString : amountString.substring(0, decimalIndex);
          if (wholePart.length > 7) {
            currentErrors[`payment-${index}-amount`] = 'Amount cannot exceed 7 digits.';
          }
        }

        if (!payment.lumpSumDate) {
          currentErrors[`payment-${index}-date`] = 'Please enter a payment date.';
        }
      });
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onNext({ payments });
    }
  };

  // Handle number of payments input with validation
  const handleNumberOfPaymentsChange = (value: string) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
      setNumberOfPayments(numValue);
    } else if (value === '') {
      setNumberOfPayments('');
    }
  };

  return (
    <LCPStepContainer title="LCP Lump Sum Payment Details" currentStep={currentStep} totalSteps={totalSteps}>
      {/* Instructions Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <button
          type="button"
          onClick={() => setShowInstructions(true)}
          style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            border: '1px solid #3b82f6',
            borderRadius: '20px',
            padding: '0.3rem 0.7rem',
            fontSize: '0.7rem',
            fontWeight: '500',
            color: '#1e3a8a',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 3px rgba(59, 130, 246, 0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            userSelect: 'none',
            fontFamily: 'inherit'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
            e.currentTarget.style.color = '#1e3a8a';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(59, 130, 246, 0.2)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(59, 130, 246, 0.2)';
          }}
        >
          <span style={{ fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📋</span>
          Instructions
        </button>
      </div>

      {/* Instructions Modal */}
      {showInstructions && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}
          onClick={() => setShowInstructions(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, color: '#0369a1', fontSize: '1.25rem', fontWeight: '600' }}>
                📋 Page Instructions
              </h3>
              <button
                onClick={() => setShowInstructions(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#6b7280',
                  padding: '0',
                  lineHeight: '1'
                }}
              >
                ×
              </button>
            </div>
            <div style={{ color: '#374151', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '1rem', fontWeight: '500' }}>What you need to do:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Enter the <strong>number of lump sum payments</strong> you want to exchange (1-10)</li>
                <li style={{ marginBottom: '0.5rem' }}>For each payment, enter the <strong>payment amount</strong> - the dollar amount of the lump sum payment</li>
                <li style={{ marginBottom: '0.5rem' }}>Select the <strong>payment date</strong> - when you will receive each lump sum payment</li>
                <li style={{ marginBottom: '0.5rem' }}>Click "Continue" to proceed to the next step</li>
              </ul>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                💡 <em>Important: You can add up to 10 lump sum payments. Each payment must have an amount and date. These payments will be converted into an immediate lump sum payout.</em>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <NumberOfPaymentsInput
            value={numberOfPayments}
          onChange={handleNumberOfPaymentsChange}
          error={errors['numberOfPayments']}
        />

        {typeof numberOfPayments === 'number' && numberOfPayments > 0 && (
          <div className={layout.paymentList}>
            {payments.map((payment, index) => (
              <PaymentCard
                key={index}
                payment={payment}
                index={index}
                errors={errors}
                onPaymentChange={handlePaymentChange}
              />
            ))}
          </div>
        )}

        <div className={layout.actionRow}>
          <LCPNavigationButton
            direction="back"
            disabled={!onBack}
            onClick={onBack}
            type="button"
            aria-label="Back to previous step"
          />
          <LCPNavigationButton
            direction="next"
            disabled={numberOfPayments === '' || !numberOfPayments || (typeof numberOfPayments === 'number' && (numberOfPayments < 1 || numberOfPayments > 10))}
            type="submit"
            aria-label="Continue to next step"
          />
        </div>
      </form>
    </LCPStepContainer>
  );
};

export default LCPLumpSumAmountOverview; 