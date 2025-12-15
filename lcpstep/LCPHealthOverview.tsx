"use client";

import React, { useState } from 'react';
import LCPStepContainer from './LCPStepContainer';
import { LCPButton, LCPSection, LCPNavigationButton, QuickHelpBadge } from './shared';
import layout from './utils/LCPLayout.module.css';
import utilities from './utils/LCPUtilities.module.css';

const SMOKE_OPTIONS = ['Yes', 'No'];
const HEALTH_OPTIONS = ['Great', 'Normal', 'Fair', 'Below'];
const CARDIAC_OPTIONS = ['Normal', 'Medicated', 'High', 'Unsure'];

interface Props {
  initialData?: {
    smoke?: string;
    health?: string;
    cardiac?: string;
  };
  onNext: (data: { smoke: string; health: string; cardiac: string }) => void;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}

const LCPHealthOverview: React.FC<Props> = ({ initialData, onNext, onBack, currentStep, totalSteps }) => {
  const [smoke, setSmoke] = useState(initialData?.smoke || '');
  const [health, setHealth] = useState(initialData?.health || '');
  const [cardiac, setCardiac] = useState(initialData?.cardiac || '');
  const [touched, setTouched] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Update state when initialData changes (for edit functionality)
  React.useEffect(() => {
    if (initialData?.smoke) setSmoke(initialData.smoke);
    if (initialData?.health) setHealth(initialData.health);
    if (initialData?.cardiac) setCardiac(initialData.cardiac);
  }, [initialData]);

  const isValid = smoke && health && cardiac;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (isValid) {
      onNext({ smoke, health, cardiac });
    }
  };

  return (
    <LCPStepContainer title="Lifestyle Overview" currentStep={currentStep} totalSteps={totalSteps}>
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
                <li style={{ marginBottom: '0.5rem' }}>Indicate whether you currently smoke or use tobacco products</li>
                <li style={{ marginBottom: '0.5rem' }}>Rate your overall health status</li>
                <li style={{ marginBottom: '0.5rem' }}>Describe your cardiac health condition</li>
                <li style={{ marginBottom: '0.5rem' }}>Click "Continue" to proceed to the next step</li>
              </ul>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                💡 <em>Your lifestyle and health information helps us provide more accurate payout calculations for your structured settlement.</em>
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <LCPSection label="Do You Smoke?">
          {SMOKE_OPTIONS.map((opt) => (
            <LCPButton
              key={opt}
              variant="option"
              selected={smoke === opt}
              onClick={() => setSmoke(opt)}
            >
              {opt}
            </LCPButton>
          ))}
        </LCPSection>

        <LCPSection label="Health Profile">
          {HEALTH_OPTIONS.map((opt) => (
            <LCPButton
              key={opt}
              variant="option"
              selected={health === opt}
              onClick={() => setHealth(opt)}
            >
              {opt}
            </LCPButton>
          ))}
        </LCPSection>

        <LCPSection label="Cardiac Health">
          {CARDIAC_OPTIONS.map((opt) => (
            <LCPButton
              key={opt}
              variant="option"
              selected={cardiac === opt}
              onClick={() => setCardiac(opt)}
            >
              {opt}
            </LCPButton>
          ))}
        </LCPSection>

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
            disabled={!isValid}
            type="submit"
            aria-label="Continue to next step"
          />
        </div>

        {touched && !isValid && (
          <p className={utilities.error} style={{ textAlign: 'center' }}>
            Please answer all questions.
          </p>
        )}
      </form>
    </LCPStepContainer>
  );
};

export default LCPHealthOverview; 