"use client";

import React from 'react';
import { useAssistant } from '../../../../contexts/AssistantContext';
import styles from './AssistantPrompt.module.css';

/**
 * ============================================================================
 * ASSISTANT PROMPT - CALL TO ACTION
 * ============================================================================
 * 
 * Displays a prominent call-to-action button to open the AI assistant.
 * This component is shown at the top of the LCP calculator flow to encourage
 * users to get help when needed.
 * 
 * Features:
 * - Animated pulsing effect to draw attention
 * - Responsive design for all screen sizes
 * - Accessible button with proper ARIA labels
 * - Smooth hover and active states
 * 
 * @example
 * ```tsx
 * import { AssistantPrompt } from './assistant-components';
 * 
 * <AssistantPrompt />
 * ```
 */
const AssistantPrompt: React.FC = () => {
  const { openAssistant } = useAssistant();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <strong className={styles.title}>Need help?</strong>
          <span className={styles.subtitle}>
            Ask Mint AI instantly
          </span>
        </div>
        <button 
          className={styles.button}
          onClick={openAssistant}
          type="button"
          aria-label="Open AI Assistant for help"
        >
          Ask Mint
        </button>
      </div>
    </div>
  );
};

export default AssistantPrompt;

