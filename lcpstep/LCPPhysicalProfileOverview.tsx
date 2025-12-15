"use client";

import React, { useState, useRef, useEffect } from 'react';
import LCPStepContainer from './LCPStepContainer';
import { LCPButton, LCPSection, LCPNavigationButton, QuickHelpBadge } from './shared';
import layout from './utils/LCPLayout.module.css';
import utilities from './utils/LCPUtilities.module.css';
import styles from './LCPPhysicalProfileOverview.module.css';

const AGES = ['18–25', '26–35', '36–45', '46–50', '51–56', '57–65'];
const GENDERS = ['Male', 'Female', 'Other'];
const BODY_FRAMES = ['Small', 'Medium', 'Large'];
const WEIGHTS = [
  { short: 'Under', full: 'Underweight' },
  { short: 'Normal', full: 'Normal Weight' },
  { short: 'Over', full: 'Overweight' },
  { short: 'Obese', full: 'Obesity' },
  { short: 'Severe', full: 'Severe Obesity' },
];

interface Props {
  initialData?: {
    ageRange?: string;
    gender?: string;
    bodyFrame?: string;
    weight?: string;
  };
  onNext: (data: { ageRange: string; gender: string; bodyFrame: string; weight: string }) => void;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}

const LCPPhysicalProfileOverview: React.FC<Props> = ({ initialData, onNext, onBack, currentStep, totalSteps }) => {
  const [ageRange, setAgeRange] = useState(initialData?.ageRange || '');
  const [gender, setGender] = useState(initialData?.gender || '');
  const [bodyFrame, setBodyFrame] = useState(initialData?.bodyFrame || '');
  const [weight, setWeight] = useState(initialData?.weight || '');
  const [touched, setTouched] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const genderSectionRef = useRef<HTMLDivElement>(null);
  const bodyFrameSectionRef = useRef<HTMLDivElement>(null);
  const weightSectionRef = useRef<HTMLDivElement>(null);

  // Update state when initialData changes (for edit functionality)
  React.useEffect(() => {
    if (initialData?.ageRange) setAgeRange(initialData.ageRange);
    if (initialData?.gender) setGender(initialData.gender);
    if (initialData?.bodyFrame) setBodyFrame(initialData.bodyFrame);
    if (initialData?.weight) setWeight(initialData.weight);
  }, [initialData]);

  // Auto-scroll to next section when a field is filled
  useEffect(() => {
    if (ageRange && genderSectionRef.current) {
      genderSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [ageRange]);

  useEffect(() => {
    if (gender && bodyFrameSectionRef.current) {
      bodyFrameSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [gender]);

  useEffect(() => {
    if (bodyFrame && weightSectionRef.current) {
      weightSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [bodyFrame]);

  const isValid = ageRange && gender && bodyFrame && weight;

  const handleWeightSelect = (full: string) => {
    setWeight(full);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (isValid) {
      onNext({ ageRange, gender, bodyFrame, weight });
    }
  };

  return (
    <LCPStepContainer title="Physical Profile Overview" currentStep={currentStep} totalSteps={totalSteps}>
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
                <li style={{ marginBottom: '0.5rem' }}>Select your current age range</li>
                <li style={{ marginBottom: '0.5rem' }}>Indicate your gender identity</li>
                <li style={{ marginBottom: '0.5rem' }}>Choose your body frame size (small, medium, large)</li>
                <li style={{ marginBottom: '0.5rem' }}>Select your current weight category</li>
                <li style={{ marginBottom: '0.5rem' }}>Click "Continue" to proceed to the next step</li>
              </ul>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                💡 <em>Your physical profile helps us provide more accurate health-based payout calculations for your structured settlement.</em>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <LCPSection label="Approximate Age">
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.86rem',
              justifyContent: 'center',
              maxWidth: '350px',
              margin: '0 auto'
            }}>
              {/* First row: 18–25, 26–35, 36–45 */}
              {AGES.slice(0, 3).map((age) => (
                <LCPButton
                  key={age}
                  variant="option"
                  selected={ageRange === age}
                  onClick={() => setAgeRange(age)}
                >
                  {age}
                </LCPButton>
              ))}
              {/* Second row: 46–50, 51–56, 57–65 */}
              {AGES.slice(3).map((age) => (
                <LCPButton
                  key={age}
                  variant="option"
                  selected={ageRange === age}
                  onClick={() => setAgeRange(age)}
                >
                  {age}
                </LCPButton>
              ))}
            </div>
          </LCPSection>

          <div ref={genderSectionRef}>
            <LCPSection label="Gender">
              {GENDERS.map((g) => (
                <LCPButton
                  key={g}
                  variant="option"
                  selected={gender === g}
                  onClick={() => setGender(g)}
                >
                  {g}
                </LCPButton>
              ))}
            </LCPSection>
          </div>

          <div ref={bodyFrameSectionRef}>
            <LCPSection label="Body Frame">
              {BODY_FRAMES.map((frame) => (
                <LCPButton
                  key={frame}
                  variant="option"
                  selected={bodyFrame === frame}
                  onClick={() => setBodyFrame(frame)}
                >
                  {frame}
                </LCPButton>
              ))}
            </LCPSection>
          </div>

          <div ref={weightSectionRef}>
            <LCPSection label="Weight">
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.86rem',
                justifyContent: 'center',
                maxWidth: '350px',
                margin: '0 auto'
              }}>
                {/* First row: Under, Normal, Over */}
                {WEIGHTS.slice(0, 3).map((w) => (
                  <LCPButton
                    key={w.full}
                    variant="option"
                    selected={weight === w.full}
                    onClick={() => handleWeightSelect(w.full)}
                  >
                    {w.short}
                  </LCPButton>
                ))}
                {/* Second row: Obese, Severe centered */}
                <div style={{ gridColumn: '1 / 4', display: 'flex', gap: '0.86rem', justifyContent: 'center' }}>
                  {WEIGHTS.slice(3).map((w) => (
                    <LCPButton
                      key={w.full}
                      variant="option"
                      selected={weight === w.full}
                      onClick={() => handleWeightSelect(w.full)}
                    >
                      {w.short}
                    </LCPButton>
                  ))}
                </div>
              </div>
            </LCPSection>
          </div>

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
      </div>
    </LCPStepContainer>
  );
};

export default LCPPhysicalProfileOverview;
