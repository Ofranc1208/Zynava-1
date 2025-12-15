"use client";

import React from 'react';
import styles from './ActionButtons.module.css';

export interface ActionButtonsProps {
  onEdit?: (step: number) => void;
  onCalculate: () => void;
  showEditButton?: boolean;
}

/**
 * ActionButtons - Edit Form and Calculate buttons
 * Handles all user actions in the review step
 */
const ActionButtons: React.FC<ActionButtonsProps> = ({
  onEdit,
  onCalculate,
  showEditButton = true
}) => {
  return (
    <div className={styles.container}>
      {/* Edit Form Button */}
      {showEditButton && onEdit && (
        <div className={styles.editButtonContainer}>
          <button 
            onClick={() => onEdit(1)}
            type="button"
            className={styles.editButton}
          >
            ✏️ Edit Form
          </button>
        </div>
      )}
      
      {/* Calculate Button */}
      <button 
        className={styles.calculateButton}
        onClick={onCalculate} 
        type="button"
      >
        Calculate
      </button>
    </div>
  );
};

export default ActionButtons;
