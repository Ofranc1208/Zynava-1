"use client";

import { useState, useEffect, useCallback } from 'react';
import { UseDeviceDetectionReturn } from '../types';
import { isMobileDevice, isKeyboardVisible as checkKeyboardVisible } from '../utils';

/**
 * useDeviceDetection Hook - Orchestra Pattern
 *
 * Detects mobile device and keyboard visibility for responsive behavior
 * Provides device state management for the SmartInputBar component
 *
 * @hook useDeviceDetection
 * @author Smarter Payouts Team
 * @since 2024
 */
export const useDeviceDetection = (): UseDeviceDetectionReturn => {
  // Initialize with actual detection to avoid flickering
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return isMobileDevice();
  });
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  /**
   * Detects mobile device
   */
  const checkMobile = useCallback(() => {
    setIsMobile(isMobileDevice());
  }, []);

  /**
   * Detects keyboard visibility on mobile
   */
  const checkKeyboard = useCallback(() => {
    if (isMobile) {
      setIsKeyboardVisible(checkKeyboardVisible());
    }
  }, [isMobile]);

  /**
   * Handles resize events for mobile/keyboard detection
   */
  const handleResize = useCallback(() => {
    checkMobile();
    checkKeyboard();
  }, [checkMobile, checkKeyboard]);

  // Initial check
  useEffect(() => {
    checkMobile();
    checkKeyboard();
  }, [checkMobile, checkKeyboard]);

  // Listen for resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
    };
  }, [handleResize]);

  return {
    isMobile,
    isKeyboardVisible,
  };
};

export default useDeviceDetection;
