'use client';
import { useEffect, useCallback } from 'react';

interface UseHomeAccessibilityReturn {
  announceToScreenReader: (message: string) => void;
  handleKeyboardNavigation: (event: KeyboardEvent) => void;
  focusManagement: {
    trapFocus: (container: HTMLElement) => void;
    restoreFocus: (element: HTMLElement) => void;
  };
  checkColorContrast: () => void;
}

export default function useHomeAccessibility(): UseHomeAccessibilityReturn {
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    
    document.body.appendChild(announcement);
    announcement.textContent = message;
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    // Handle common keyboard navigation patterns
    switch (event.key) {
      case 'Tab':
        // Ensure proper tab order
        break;
      case 'Enter':
      case ' ':
        // Handle activation of interactive elements
        const target = event.target as HTMLElement;
        if (target.getAttribute('role') === 'button') {
          target.click();
        }
        break;
      case 'Escape':
        // Close modals or dropdowns
        break;
    }
  }, []);

  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, []);

  const restoreFocus = useCallback((element: HTMLElement) => {
    element.focus();
  }, []);

  const checkColorContrast = useCallback(() => {
    // Basic color contrast checking for development
    if (process.env.NODE_ENV === 'development') {
      // Color contrast check initiated
      // In a real implementation, this would check WCAG contrast ratios
    }
  }, []);

  useEffect(() => {
    // Set up global keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Check accessibility on mount
    checkColorContrast();

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [handleKeyboardNavigation, checkColorContrast]);

  return {
    announceToScreenReader,
    handleKeyboardNavigation,
    focusManagement: {
      trapFocus,
      restoreFocus
    },
    checkColorContrast
  };
}
