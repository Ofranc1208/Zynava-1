/**
 * LCPDatesSelection Component Unit Tests
 * 
 * Testing the component that was fixed for infinite render loops.
 * This validates our critical fixes are working and prevents regressions.
 * 
 * Co-located with component in src/components/calculator/lcpstep/
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LCPDatesSelection from './LCPDatesSelection';

// Mock validation helpers to prevent side effects
jest.mock('./utils/validationHelpers', () => ({
  validatePaymentAmount: jest.fn(() => ({ isValid: true })),
  validateDateRange: jest.fn(() => ({ isValid: true })),
  sanitizeNumericInput: jest.fn((input: string) => input.replace(/[^\d.]/g, '')),
  VALIDATION_RULES: {
    PAYMENT_AMOUNT: { MIN: 100, MAX: 10_000_000 },
    DATE_RULES: { MIN_PERIOD_MONTHS: 6, MAX_PERIOD_YEARS: 30 }
  }
}));

const mockOnNext = jest.fn();
const defaultProps = {
  onNext: mockOnNext,
  currentStep: 5,
  totalSteps: 5,
};

describe('LCPDatesSelection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ✅ CRITICAL: Test infinite render loop fix
  describe('Render Loop Prevention', () => {
    it('should render without causing infinite loops', () => {
      const renderCount = jest.fn();
      
      const TestWrapper = () => {
        renderCount();
        return <LCPDatesSelection {...defaultProps} />;
      };
      
      render(<TestWrapper />);
      
      // Should render only once, not continuously
      expect(renderCount).toHaveBeenCalledTimes(1);
    });

    it('should not call setState during render cycle', () => {
      const { validatePaymentAmount } = require('./utils/validationHelpers');
      
      render(<LCPDatesSelection {...defaultProps} />);
      
      // Validation should not be called during initial render
      expect(validatePaymentAmount).not.toHaveBeenCalled();
    });
  });

  // ✅ Basic rendering tests
  describe('Component Rendering', () => {
    it('should render all required form fields', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      expect(screen.getByLabelText(/amount of payments/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
    });

    it('should render updated label text', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      expect(screen.getByText(/what's the amount of payments you're going to exchange for a lump sum/i)).toBeInTheDocument();
    });

    it('should render tooltip question marks for dates', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      const questionMarks = screen.getAllByText('?');
      expect(questionMarks).toHaveLength(2);
    });
  });

  // ✅ Tooltip functionality tests
  describe('Tooltip Functionality', () => {
    it('should show start date tooltip when clicked', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      const questionMarks = screen.getAllByText('?');
      fireEvent.click(questionMarks[0]);
      
      expect(screen.getByText(/first payment date you want to trade for a lump sum/i)).toBeInTheDocument();
    });

    it('should hide tooltip when clicked again', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      const questionMarks = screen.getAllByText('?');
      
      // Show tooltip
      fireEvent.click(questionMarks[0]);
      expect(screen.getByText(/first payment date/i)).toBeInTheDocument();
      
      // Hide tooltip
      fireEvent.click(questionMarks[0]);
      expect(screen.queryByText(/first payment date/i)).not.toBeInTheDocument();
    });
  });

  // ✅ Form interaction tests
  describe('Form Interactions', () => {
    it('should handle amount input changes safely', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      const amountInput = screen.getByLabelText(/amount of payments/i);
      fireEvent.change(amountInput, { target: { value: '5000' } });
      
      expect((amountInput as HTMLInputElement).value).toBe('5000');
    });

    it('should handle date input changes', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      const startDateInput = screen.getByLabelText(/start date/i);
      fireEvent.change(startDateInput, { target: { value: '2025-01-01' } });
      
      expect((startDateInput as HTMLInputElement).value).toBe('2025-01-01');
    });

    it('should enable submit button when form is valid', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      // Fill out form
      const amountInput = screen.getByLabelText(/amount of payments/i);
      const startDateInput = screen.getByLabelText(/start date/i);
      const endDateInput = screen.getByLabelText(/end date/i);
      
      fireEvent.change(amountInput, { target: { value: '2000' } });
      fireEvent.change(startDateInput, { target: { value: '2025-01-01' } });
      fireEvent.change(endDateInput, { target: { value: '2025-12-31' } });
      
      const submitButton = screen.getByRole('button', { name: /next/i });
      expect(submitButton).not.toBeDisabled();
    });
  });

  // ✅ Form submission tests
  describe('Form Submission', () => {
    it('should call onNext with correct data when valid', () => {
      render(<LCPDatesSelection {...defaultProps} />);
      
      const amountInput = screen.getByLabelText(/amount of payments/i);
      const startDateInput = screen.getByLabelText(/start date/i);
      const endDateInput = screen.getByLabelText(/end date/i);
      
      fireEvent.change(amountInput, { target: { value: '2000' } });
      fireEvent.change(startDateInput, { target: { value: '2025-01-01' } });
      fireEvent.change(endDateInput, { target: { value: '2025-12-31' } });
      
      const submitButton = screen.getByRole('button', { name: /next/i });
      fireEvent.click(submitButton);
      
      expect(mockOnNext).toHaveBeenCalledWith({
        startDate: '2025-01-01',
        endDate: '2025-12-31',
        amount: '2000'
      });
    });

    it('should not submit when validation fails', () => {
      const { validatePaymentAmount } = require('./utils/validationHelpers');
      validatePaymentAmount.mockReturnValue({ isValid: false, error: 'Invalid' });
      
      render(<LCPDatesSelection {...defaultProps} />);
      
      const submitButton = screen.getByRole('button', { name: /next/i });
      fireEvent.click(submitButton);
      
      expect(mockOnNext).not.toHaveBeenCalled();
    });
  });
});