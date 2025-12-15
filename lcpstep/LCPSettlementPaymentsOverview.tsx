"use client";

import React, { useState } from 'react';
import LCPStepContainer from './LCPStepContainer';
import { LCPButton, LCPSection, LCPNavigationButton, QuickHelpBadge } from './shared';
import layout from './utils/LCPLayout.module.css';

const FREQUENCIES = ['Monthly', 'Quarterly', 'Semi', 'Lump Sum'];
const INCREASES = [0, 1, 2, 3, 4, 5, 6];

interface Props {
  initialData?: {
    paymentMode?: string;
    annualIncrease?: number;
  };
  onNext: (data: { paymentMode: string; annualIncrease: number }) => void;
  currentStep: number;
  totalSteps: number;
}

const LCPSettlementPaymentsOverview: React.FC<Props> = ({ initialData, onNext, currentStep, totalSteps }) => {
  const [paymentMode, setPaymentMode] = useState(initialData?.paymentMode || 'Monthly');
  const [annualIncrease, setAnnualIncrease] = useState<number>(
    initialData?.annualIncrease ?? 0
  );
  const [showInstructions, setShowInstructions] = useState(false);

  // Update state when initialData changes (for edit functionality)
  React.useEffect(() => {
    if (initialData?.paymentMode) setPaymentMode(initialData.paymentMode);
    if (initialData?.annualIncrease !== undefined) setAnnualIncrease(initialData.annualIncrease);
  }, [initialData]);

  const isValid = paymentMode;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onNext({ paymentMode, annualIncrease });
    }
  };

  return (
    <LCPStepContainer title="Settlement Payments Overview" currentStep={currentStep} totalSteps={totalSteps}>
      {/* Instructions Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
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
                <li style={{ marginBottom: '0.5rem' }}>Select how often you currently receive your structured settlement payments</li>
                <li style={{ marginBottom: '0.5rem' }}>Indicate if your payments increase yearly and by what percentage</li>
                <li style={{ marginBottom: '0.5rem' }}>Click "Continue" to proceed to the next step</li>
              </ul>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                💡 <em>Your current payment structure helps us calculate the most accurate payout value for your remaining payments.</em>
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <LCPSection label="How often do you receive your payments?">
          {FREQUENCIES.map((freq) => (
            <LCPButton
              key={freq}
              variant="option"
              selected={paymentMode === freq}
              onClick={() => setPaymentMode(freq)}
            >
              {freq}
            </LCPButton>
          ))}
        </LCPSection>

        <LCPSection label="Do your payments increase yearly?">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.86rem',
            justifyContent: 'center',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            {/* First row: 0, 1, 2, 3 */}
            {INCREASES.slice(0, 4).map((inc) => (
              <LCPButton
                key={inc}
                variant="option"
                selected={annualIncrease === inc}
                onClick={() => setAnnualIncrease(inc)}
              >
                {inc}
              </LCPButton>
            ))}
            {/* Second row: 4, 5, 6 centered */}
            <div style={{ gridColumn: '1 / 5', display: 'flex', gap: '0.86rem', justifyContent: 'center' }}>
              {INCREASES.slice(4).map((inc) => (
                <LCPButton
                  key={inc}
                  variant="option"
                  selected={annualIncrease === inc}
                  onClick={() => setAnnualIncrease(inc)}
                >
                  {inc}
                </LCPButton>
              ))}
            </div>
          </div>
        </LCPSection>

        <div className={layout.actionRow}>
          <LCPNavigationButton
            direction="back"
            disabled={true}
            type="button"
            aria-label="Back to previous step"
          />
          <LCPNavigationButton
            direction="next"
            disabled={!isValid}
            type="submit"
            aria-label="Continue to next step"
          />
        </div>
      </form>
    </LCPStepContainer>
  );
};

export default LCPSettlementPaymentsOverview; 