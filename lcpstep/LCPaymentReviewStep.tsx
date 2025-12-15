"use client";

import React from 'react';
import LCPStepContainer from './LCPStepContainer';
import {
  PaymentSection,
  DetailsSection,
  ProfileSection,
  LifestyleSection,
  HealthSection,
  ResultsDisplay,
  ActionButtons
} from './review-components';
import {
  LCPPaymentData,
  LCPDetailsData,
  LCPProfileData,
  LCPLifestyleData,
  LCPHealthData,
  LCPCalculationResult
} from '../../../types';
import layout from './utils/LCPLayout.module.css';

interface Props {
  paymentData: LCPPaymentData;
  detailsData: LCPDetailsData;
  profileData: LCPProfileData;
  lifestyleData: LCPLifestyleData;
  healthData: LCPHealthData;
  lumpSumPayments?: Array<{ amount: string; lumpSumDate: string }>;
  onEdit?: (step: number) => void;
  onCalculate: () => void;
  result?: LCPCalculationResult;
  error?: string;
  currentStep: number;
  totalSteps: number;
}

const LCPaymentReviewStep: React.FC<Props> = ({
  paymentData,
  detailsData,
  profileData,
  lifestyleData,
  healthData,
  lumpSumPayments,
  onEdit,
  onCalculate,
  result,
  error,
  currentStep,
  totalSteps,
}) => {
  return (
    <div style={{
      padding: '1rem 1rem',
      maxWidth: '600px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Review Header - No Step Indicator */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#22b455',
          marginBottom: '0.25rem',
          letterSpacing: '-0.02em'
        }}>
          Review & Calculate
        </h1>
        <p style={{
          fontSize: '0.95rem',
          color: '#6b7280',
          fontWeight: 500
        }}>
          Review your information before calculating your offer
        </p>
      </div>

      <div style={{
        background: '#fff',
        borderRadius: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        padding: '1rem',
      }}>
        {/* Edit Form (secondary) and Calculate (primary) Buttons - 2025 best practices */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.75rem', 
          marginBottom: '0.75rem',
          flexWrap: 'wrap'
        }}>
          {onEdit && (
            <button 
              onClick={() => onEdit(1)}
              type="button"
              style={{
                background: 'transparent',
                color: '#6b7280',
                border: '1.5px solid #d1d5db',
                borderRadius: '10px',
                padding: '0.4rem 1rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '100px',
                maxWidth: '140px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f9fafb';
                e.currentTarget.style.borderColor = '#9ca3af';
                e.currentTarget.style.color = '#374151';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.color = '#6b7280';
              }}
            >
              ✏️ Edit Form
            </button>
          )}
          
          <button 
            onClick={onCalculate}
            type="button"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '0.65rem 1.5rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 3px 10px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.2s ease',
              flex: '1',
              minWidth: '130px',
              maxWidth: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 5px 14px rgba(34, 197, 94, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(34, 197, 94, 0.3)';
            }}
          >
            Calculate
          </button>
        </div>

        {/* Scrollable Review Sections Container - More space now */}
        <div 
          className="custom-green-scrollbar"
          style={{
            maxHeight: '500px',
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '0.25rem',
            marginBottom: '0.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            background: '#fafafa',
            scrollBehavior: 'smooth'
          }}
        >
          <style>{`
            .custom-green-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-green-scrollbar::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 10px;
            }
            .custom-green-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
              border-radius: 10px;
              transition: background 0.2s ease;
            }
            .custom-green-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
            }
            .custom-green-scrollbar::-webkit-scrollbar-thumb:active {
              background: linear-gradient(135deg, #15803d 0%, #14532d 100%);
            }
          `}</style>
          <div className={layout.formContainer}>
            {/* Payment Section */}
            <PaymentSection
              paymentData={paymentData}
              detailsData={detailsData}
              lumpSumPayments={lumpSumPayments}
            />

            {/* Details Section - Only show for non-lump sum payments */}
            {paymentData?.paymentMode !== 'Lump Sum' && (
              <DetailsSection detailsData={detailsData} />
            )}

            {/* Profile Section */}
            <ProfileSection profileData={profileData} />

            {/* Lifestyle Section */}
            <LifestyleSection
              lifestyleData={lifestyleData}
              profileData={profileData}
              healthData={healthData}
            />

            {/* Health Section */}
            <HealthSection healthData={healthData} />
          </div>
        </div>

        {/* Results Display */}
        <ResultsDisplay result={result} error={error} />
      </div>
    </div>
  );
};

export default LCPaymentReviewStep; 