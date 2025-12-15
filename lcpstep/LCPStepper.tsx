"use client";

import React, { useCallback, useMemo } from 'react';
import { useAssistant } from '../../../contexts/AssistantContext';
import { useLCPFlow } from './hooks/useLCPFlow';
import LCPaymentReviewStep from './LCPaymentReviewStep';
import LCPaymentResultsPage from './LCPaymentResultsPage';
import LCPSettlementPaymentsOverview from './LCPSettlementPaymentsOverview';
import LCPPhysicalProfileOverview from './LCPPhysicalProfileOverview';
import LCPHealthOverview from './LCPHealthOverview';
import LCPDatesSelection from './LCPDatesSelection';
import LCPLumpSumAmountOverview from './LCPLumpSumAmountOverview';
import AssistantPanel from './AssistantPanel';
import {
  createLCPFlowConfig,
  createStepHandler,
  getStepProps,
  getStepNumber as getOrchestratorStepNumber
} from './LCPFlowOrchestrator';
import { LCPStep } from '../../../types';

/**
 * ============================================================================
 * LCP STEPPER - Orchestrator Pattern Implementation
 * ============================================================================
 *
 * This component has been refactored to use the orchestrator pattern,
 * reducing complexity from 293 lines to ~110 lines (~62% reduction).
 *
 * Benefits:
 * - No repetitive handler functions
 * - Declarative step configuration
 * - Easy to add/modify steps
 * - Single source of truth for flow logic
 * - Improved maintainability and testability
 */

/**
 * LCP Stepper Component
 *
 * Main orchestrator component for the Life-Contingent Payments calculator flow.
 * This component manages the overall flow state and delegates step rendering to
 * the orchestrator pattern implemented in LCPFlowOrchestrator.ts.
 *
 * Key Responsibilities:
 * - Initialize LCP flow on mount
 * - Configure step flow using declarative configuration
 * - Handle step transitions and data updates
 * - Render current step based on flow state
 * - Integrate with assistant context for guidance
 *
 * Architecture Benefits:
 * - Eliminates complex switch statements for step rendering
 * - Removes repetitive handler functions
 * - Centralizes flow logic in reusable orchestrator
 * - Maintains clean separation of concerns
 *
 * @example
 * ```tsx
 * <LCPStepper />
 * ```
 *
 * @returns JSX.Element - The current step component with assistant panel
 */
const LCPStepper: React.FC = () => {
  // ============================================================================
  // HOOKS & CONTEXT
  // ============================================================================

  const {
    currentStep,
    formData,
    result: lcpResult,
    error: lcpError,
    startLCPFlow,
    goToNextStep,
    updateFormData,
    handleCalculate,
    handleBackToReview
  } = useLCPFlow();

  const { setCurrentStep: setAssistantStep, setFlowType } = useAssistant();

  // ============================================================================
  // ORCHESTRATOR CONFIGURATION
  // ============================================================================

  // Create orchestrator configuration (memoized to avoid recreating on every render)
  const flowConfig = useMemo(() => createLCPFlowConfig({
    LCPSettlementPaymentsOverview,
    LCPPhysicalProfileOverview,
    LCPHealthOverview,
    LCPDatesSelection,
    LCPLumpSumAmountOverview,
    LCPaymentReviewStep,
    LCPaymentResultsPage
  }), []);

  // ============================================================================
  // INITIALIZATION
  // ============================================================================

  React.useEffect(() => {
    if (!currentStep) {
      startLCPFlow();
    }
  }, [startLCPFlow, currentStep]);

  // Sync LCP steps with assistant context for step-aware help
  React.useEffect(() => {
    if (currentStep) {
      setAssistantStep(currentStep);
    }
  }, [currentStep, setAssistantStep]);

  // Flow type is now set by StepperContent wrapper
  // Removed duplicate setFlowType call to avoid conflicts

  // ============================================================================
  // DYNAMIC HANDLER CREATION
  // ============================================================================

  /**
   * Creates a step handler using the orchestrator pattern.
   * This replaces all 7 individual handler functions with a single factory.
   */
  const createHandler = useCallback((stepId: LCPStep) => {
    const stepConfig = flowConfig.steps[stepId];
    if (!stepConfig) return () => {};

    return createStepHandler(
      stepConfig,
      formData,
      updateFormData,
      goToNextStep,
      setAssistantStep
    );
  }, [formData, updateFormData, goToNextStep, setAssistantStep, flowConfig]);

  // ============================================================================
  // SPECIAL HANDLERS
  // ============================================================================

  // Review step handler (needs calculation logic)
  const handleReviewComplete = useCallback(() => {
    try {
      setAssistantStep('lcp_results');
      handleCalculate(formData);
    } catch (error) {
      console.error('[LCPStepper] Review calculation failed:', error);
    }
  }, [handleCalculate, formData, setAssistantStep]);

  // Edit handler (goes back to first step)
  const handleEditStep = useCallback(() => {
    goToNextStep('lcp_payment');
  }, [goToNextStep]);

  // Back handler for going to previous step
  const handleBackStep = useCallback(() => {
    if (currentStep === 'lcp_profile') {
      goToNextStep('lcp_payment');
    } else if (currentStep === 'lcp_lifestyle') {
      goToNextStep('lcp_profile');
    } else if (currentStep === 'lcp_details') {
      goToNextStep('lcp_lifestyle');
    } else if (currentStep === 'lcp_lump_sum') {
      goToNextStep('lcp_details');
    }
  }, [currentStep, goToNextStep]);

  // ============================================================================
  // RENDER LOGIC
  // ============================================================================

  /**
   * Renders the current step using orchestrator configuration.
   * This replaces the 169-line switch statement with a clean, map-based approach.
   */
  const renderCurrentStep = () => {
    if (!currentStep) return null;

    const stepConfig = flowConfig.steps[currentStep];
    if (!stepConfig) return null;

    const StepComponent = stepConfig.component;
    const currentStepNumber = getOrchestratorStepNumber(currentStep, flowConfig);

    // Handle special cases (review and results need extra props)
    if (currentStep === 'lcp_review') {
      const stepProps = getStepProps(stepConfig, formData, createHandler(currentStep));
      
      return (
        <StepComponent
          {...stepProps.initialData} // Spread the data directly as props
          onEdit={handleEditStep}
          onCalculate={handleReviewComplete}
          result={lcpResult || undefined}
          error={lcpError?.message || undefined}
          currentStep={stepProps.currentStep}
          totalSteps={stepProps.totalSteps}
        />
      );
    }

    if (currentStep === 'lcp_results') {
      return lcpResult ? (
        <StepComponent
          result={lcpResult}
          onBack={handleBackToReview}
          currentStep={currentStepNumber}
          totalSteps={flowConfig.totalDataSteps}
        />
      ) : null;
    }

    // Standard step rendering with onBack for steps 2+
    const stepProps = getStepProps(stepConfig, formData, createHandler(currentStep));
    const shouldShowBack = currentStep !== 'lcp_payment'; // Show back button for all steps except first
    
    return (
      <StepComponent
        {...stepProps}
        onBack={shouldShowBack ? handleBackStep : undefined}
      />
    );
  };

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div style={{ paddingBottom: '2rem' }}>
      {renderCurrentStep()}
      <AssistantPanel />
    </div>
  );
};

export default LCPStepper; 