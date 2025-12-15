"use client";

import React, { useState } from 'react';
import LCPStepContainer from './LCPStepContainer';
import { LCPButton, LCPSection, LCPFormInput, LCPNavigationButton, QuickHelpBadge } from './shared';
import { validatePaymentAmount, validateDateRange, validateDateRangeWithAge, sanitizeNumericInput, VALIDATION_RULES } from './utils/validationHelpers';
import { getMaxEndDateStringByAge, getMinStartDateString } from './utils/dateHelpers';
import layout from './utils/LCPLayout.module.css';
import utilities from './utils/LCPUtilities.module.css';

interface Props {
  initialData?: {
    startDate?: string;
    endDate?: string;
    amount?: string;
    ageRange?: string;
  };
  onNext: (data: { startDate: string; endDate: string; amount: string }) => void;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}

const LCPDatesSelection: React.FC<Props> = ({ initialData, onNext, onBack, currentStep, totalSteps }) => {
  const [startDate, setStartDate] = useState(initialData?.startDate || '');
  const [endDate, setEndDate] = useState(initialData?.endDate || '');
  const [amount, setAmount] = useState(initialData?.amount || '');
  const [touched, setTouched] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    amount?: string;
    dates?: string;
  }>({});

  // Calculate maximum end date based on age range
  const maxEndDateString = initialData?.ageRange 
    ? getMaxEndDateStringByAge(initialData.ageRange)
    : undefined;
  
  // Calculate minimum start date (3 months from today)
  const minStartDateString = getMinStartDateString();

  // Update state when initialData changes (for edit functionality)
  React.useEffect(() => {
    if (initialData?.startDate) setStartDate(initialData.startDate);
    if (initialData?.endDate) setEndDate(initialData.endDate);
    if (initialData?.amount) setAmount(initialData.amount);
  }, [initialData]);

  // Enhanced validation logic
  const checkFormValidity = () => {
    const amountValidation = validatePaymentAmount(amount);
    if (!amountValidation.isValid) return false;

    const dateValidation = validateDateRangeWithAge(startDate, endDate, initialData?.ageRange);
    if (!dateValidation.isValid) return false;

    return true;
  };

  const validateAndSetErrors = () => {
    const errors: { amount?: string; dates?: string } = {};

    const amountValidation = validatePaymentAmount(amount);
    if (!amountValidation.isValid) {
      errors.amount = amountValidation.error;
    }

    const dateValidation = validateDateRangeWithAge(startDate, endDate, initialData?.ageRange);
    if (!dateValidation.isValid) {
      errors.dates = dateValidation.error;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = checkFormValidity();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (validateAndSetErrors()) {
      onNext({ startDate, endDate, amount });
    }
  };

  // Handle amount input with sanitization and real-time validation
  const handleAmountChange = (value: string) => {
    const sanitized = sanitizeNumericInput(value);
    setAmount(sanitized);
    
    // Validate immediately and show error if invalid
    if (sanitized) {
      const amountValidation = validatePaymentAmount(sanitized);
      if (!amountValidation.isValid) {
        setValidationErrors(prev => ({ ...prev, amount: amountValidation.error }));
      } else {
        setValidationErrors(prev => ({ ...prev, amount: undefined }));
      }
    } else {
      // Clear error if field is empty
      setValidationErrors(prev => ({ ...prev, amount: undefined }));
    }
  };

  // Handle date changes with immediate validation
  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    // Validate immediately if we have both dates
    if (value && endDate) {
      const dateValidation = validateDateRangeWithAge(value, endDate, initialData?.ageRange);
      if (!dateValidation.isValid) {
        setValidationErrors(prev => ({ ...prev, dates: dateValidation.error }));
      } else {
        setValidationErrors(prev => ({ ...prev, dates: undefined }));
      }
    } else {
      setValidationErrors(prev => ({ ...prev, dates: undefined }));
    }
  };

  const handleEndDateChange = (value: string) => {
    setEndDate(value);
    // Validate immediately if we have both dates
    if (startDate && value) {
      const dateValidation = validateDateRangeWithAge(startDate, value, initialData?.ageRange);
      if (!dateValidation.isValid) {
        setValidationErrors(prev => ({ ...prev, dates: dateValidation.error }));
      } else {
        setValidationErrors(prev => ({ ...prev, dates: undefined }));
      }
    } else {
      setValidationErrors(prev => ({ ...prev, dates: undefined }));
    }
  };

  return (
    <LCPStepContainer title="Select Payments to Cash Out" currentStep={currentStep} totalSteps={totalSteps}>
      <form onSubmit={handleSubmit}>
        <LCPSection 
          label="Payment Amount"
          hint={
            <span>
              (Minimum amount more than <span style={{ color: '#dc2626', fontWeight: '600' }}>$100</span>)
            </span>
          }
        >
          <LCPFormInput
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="$ 0.00"
            error={validationErrors.amount}
            isValid={amount ? validatePaymentAmount(amount).isValid : undefined}
          />
        </LCPSection>

        <LCPSection 
          label="First Payment Date"
          hint={(() => {
            const today = new Date();
            const threeMonthsFromNow = new Date(today);
            threeMonthsFromNow.setMonth(today.getMonth() + 3);
            const formattedDate = threeMonthsFromNow.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            });
            return (
              <span>
                (must be <span style={{ color: '#dc2626', fontWeight: '600' }}>{formattedDate}</span> or later)
              </span>
            );
          })()}
        >
          <LCPFormInput
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            min={minStartDateString}
            error={validationErrors.dates}
          />
        </LCPSection>

        <LCPSection label="Last Payment Date">
          <LCPFormInput
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            max={maxEndDateString}
            error={validationErrors.dates}
          />
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

        {touched && validationErrors.dates && (
          <p className={utilities.error} style={{ textAlign: 'center' }}>
            {validationErrors.dates}
          </p>
        )}
      </form>
    </LCPStepContainer>
  );
};

export default LCPDatesSelection; 