"use client";

import React from 'react';
import styles from './AssistantBackdrop.module.css';

export interface AssistantBackdropProps {
  onClose: () => void;
}

/**
 * AssistantBackdrop - Overlay backdrop for assistant panel
 * Handles click-to-close functionality
 */
const AssistantBackdrop: React.FC<AssistantBackdropProps> = ({
  onClose
}) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      aria-label="Close assistant panel"
    />
  );
};

export default AssistantBackdrop;
