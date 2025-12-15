"use client";

import React, { useEffect, useState } from 'react';
import { useAssistant } from '../../../contexts/AssistantContext';
import { AssistantBackdrop, AssistantHeader, MessageContainer } from './assistant-components';
import { AssistantInputBar } from './AssistantInputBar';
import styles from './AssistantPanel.module.css';

const AssistantPanel: React.FC = () => {
  const { isOpen, closeAssistant, messages, isTyping, setIsTyping, addWelcomeMessage, addBotMessage, clearMessages, currentStep } = useAssistant();
  const [isLoading, setIsLoading] = useState(true);
  const [hasShownInitialAnimation, setHasShownInitialAnimation] = useState(false);
  const [lastStepShown, setLastStepShown] = useState<string | null>(null);

  // Show loading state briefly when panel opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle initial animation sequence when panel opens for the first time
  useEffect(() => {
    if (isOpen && !hasShownInitialAnimation && messages.length === 0) {
      console.log('[AssistantPanel] Starting initial animation sequence');
      setHasShownInitialAnimation(true);
      
      // Step 1: Show typing animation
      setIsTyping(true);
      
      // Step 2: After 1.5 seconds, hide typing and add welcome message
      setTimeout(() => {
        console.log('[AssistantPanel] Adding welcome message after animation');
        setIsTyping(false);
        addWelcomeMessage();
        setLastStepShown(currentStep as string);
      }, 1500);
    }
  }, [isOpen, hasShownInitialAnimation, messages.length, setIsTyping, addWelcomeMessage, currentStep]);

  // Add step-aware message when step changes and panel is open
  useEffect(() => {
    if (isOpen && currentStep && currentStep !== lastStepShown && messages.length > 0) {
      console.log('[AssistantPanel] Step changed from', lastStepShown, 'to', currentStep);
      setLastStepShown(currentStep as string);
      
      // Add automatic step change notification
      const stepMap: Record<string, { number: number; total: number; name: string }> = {
        'lcp_payment': { number: 1, total: 5, name: 'Payment Details' },
        'lcp_profile': { number: 2, total: 5, name: 'Physical Profile' },
        'lcp_health': { number: 3, total: 5, name: 'Health Overview' },
        'lcp_details': { number: 4, total: 5, name: 'Payment Schedule' },
        'lcp_lump_sum': { number: 4, total: 5, name: 'Lump Sum Details' },
        'lcp_review': { number: 5, total: 5, name: 'Review' },
        'lcp_results': { number: 5, total: 5, name: 'Results' }
      };

      const stepData = stepMap[currentStep as string];
      if (stepData) {
        const stepMessage = `I see you're now on step ${stepData.number} of ${stepData.total} (${stepData.name}).\n\nWhat can I help you with here?`;
        
        // Add bot message directly
        setTimeout(() => {
          addBotMessage(stepMessage);
        }, 300);
      }
    }
  }, [isOpen, currentStep, lastStepShown, messages.length, addBotMessage]);

  // Prevent body scroll when assistant panel is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
      
      return () => {
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <AssistantBackdrop onClose={closeAssistant} />

      <div className={styles.panel}>
        {/* Header with original green styling */}
        <div className={styles.header}>
          <h3 className={styles.title}>Help Assistant</h3>
          <div className={styles.headerButtons}>
            <button
              className={styles.resetButton}
              onClick={clearMessages}
              aria-label="Reset chat session"
              title="Reset chat session"
              type="button"
            >
              ↻
            </button>
            <button
              className={styles.closeButton}
              onClick={closeAssistant}
              aria-label="Close assistant"
              type="button"
            >
              ×
            </button>
          </div>
        </div>
        
        {/* Message Display Area */}
        <div className={styles.messagesContainer}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              Loading conversation...
            </div>
          ) : (
            <div className={styles.messagesWrapper}>
              <MessageContainer
                messages={messages}
                isTyping={isTyping}
                isLoading={false}
              />
            </div>
          )}
        </div>

        {/* Input Bar */}
        <AssistantInputBar />
      </div>
    </>
  );
};

export default AssistantPanel; 