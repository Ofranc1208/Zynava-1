"use client";
import { useState, useCallback } from 'react';
import { CalculationService } from '../../../../services/calculationService';
import { LCPMappingService } from '../../../../utils/lcpMappingService';
import {
  LCPFormData,
  LCPCalculationResult,
  CalculationError,
  LCPStep
} from '../../../../types';

// ============================================================================
// HOOK - Self-contained LCP flow management
// ============================================================================

export const useLCPFlow = () => {
  const [currentStep, setCurrentStep] = useState<LCPStep | null>(null);
  const [formData, setFormData] = useState<LCPFormData>({});
  
  // Calculation result state management
  const [result, setResult] = useState<LCPCalculationResult | null>(null);
  const [error, setError] = useState<CalculationError | undefined>(undefined);
  const [showResults, setShowResults] = useState(false);

  const startLCPFlow = useCallback(() => {
    setCurrentStep('lcp_payment');
  }, []);

  const goToNextStep = useCallback((step: LCPStep) => {
    setCurrentStep(step);
  }, []);

  // ✅ FIXED: Simple updateFormData that handles the nested structure correctly
  const updateFormData = useCallback((data: Partial<LCPFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  }, []);

  // ============================================================================
  // STEP HANDLERS - Following Guaranteed pattern
  // ============================================================================

  const handlePaymentNext = useCallback((data: { paymentMode: string; amount: string }) => {
    setFormData(prev => ({
      ...prev,
      paymentData: data
    }));
    goToNextStep('lcp_details');
  }, [goToNextStep]);

  const handleDetailsNext = useCallback((data: { startDate: string; endDate: string; annualIncrease: number }) => {
    setFormData(prev => ({
      ...prev,
      detailsData: data
    }));
    goToNextStep('lcp_profile');
  }, [goToNextStep]);

  const handleProfileNext = useCallback((data: { ageRange: string; gender: string; bodyFrame: string }) => {
    setFormData(prev => ({
      ...prev,
      profileData: data
    }));
    goToNextStep('lcp_lifestyle');
  }, [goToNextStep]);

  const handleLifestyleNext = useCallback((data: { weight: string }) => {
    setFormData(prev => ({
      ...prev,
      lifestyleData: data
    }));
    goToNextStep('lcp_health');
  }, [goToNextStep]);

  const handleHealthNext = useCallback((data: { smoke: string; health: string; cardiac: string }) => {
    setFormData(prev => ({
      ...prev,
      healthData: data
    }));
    goToNextStep('lcp_review');
  }, [goToNextStep]);

  // ============================================================================
  // CALCULATION LOGIC
  // ============================================================================

  const handleCalculate = useCallback((currentFormData: Partial<LCPFormData>) => {
    setError(undefined);
    setResult(null);
    
    try {
      let calculationResult: LCPCalculationResult;
      
      // Check if this is a lump sum payment
      const paymentMode = currentFormData.paymentData?.paymentMode;
      const lumpSumPayments = currentFormData.lumpSumPayments;
      
      if (paymentMode === 'Lump Sum' && lumpSumPayments && lumpSumPayments.length > 0) {
        // Use LCP Lump Sum calculation
        const lcpKeys = LCPMappingService.mapFormValuesToCalculationKeys(currentFormData as LCPFormData);
        
        calculationResult = CalculationService.calculateLCPLumpSum({
          payments: lumpSumPayments,
          lcpKeys,
          annualIncrease: currentFormData.detailsData?.annualIncrease || 0
        });
        
        // Fill in the missing profile data for the result
        calculationResult.profileData = currentFormData.profileData || { ageRange: '', gender: '', bodyFrame: '' };
        calculationResult.lifestyleData = currentFormData.lifestyleData || { weight: '' };
        calculationResult.healthData = currentFormData.healthData || { smoke: '', health: '', cardiac: '' };
        calculationResult.lumpSumPayments = lumpSumPayments;
      } else {
        // Use regular LCP calculation
        calculationResult = CalculationService.calculateLCP(currentFormData as LCPFormData);
      }
      
      setResult(calculationResult);
      setShowResults(true);
      goToNextStep('lcp_results');
    } catch (e: any) {
      console.error('[useLCPFlow] Calculation failed:', e);
      setError({ message: e.message || 'Calculation failed. Please check your inputs.' });
    }
  }, [goToNextStep]);

  const handleBackToReview = useCallback(() => {
    setShowResults(false);
    goToNextStep('lcp_review');
  }, [goToNextStep]);

  return {
    currentStep,
    formData,
    result,
    error,
    showResults,
    startLCPFlow,
    goToNextStep,
    updateFormData,
    handlePaymentNext,
    handleDetailsNext,
    handleProfileNext,
    handleLifestyleNext,
    handleHealthNext,
    handleCalculate,
    handleBackToReview,
  };
};
