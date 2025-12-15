"use client";

import React from 'react';
import styles from './AssistantHeader.module.css';

export interface AssistantHeaderProps {
  title?: string;
  onClose: () => void;
}

/**
 * AssistantHeader - Header component for assistant panel
 * Contains title and close button
 */
const AssistantHeader: React.FC<AssistantHeaderProps> = ({
  title = "Help Assistant",
  onClose
}) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close assistant"
        type="button"
      >
        ×
      </button>
    </div>
  );
};

export default AssistantHeader;
