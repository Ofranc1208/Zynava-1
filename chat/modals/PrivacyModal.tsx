import React from 'react';
import styles from './Modal.module.css';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <h3 className={styles.modalTitle}>
          🔒 100% Private & Secure
        </h3>
        
        <div className={styles.modalBody}>
          <p>
            <strong>Your privacy is our top priority.</strong> We've built our system to protect your information at every step.
          </p>
          
          <div className={styles.modalSection}>
            <strong>What we DON'T ask for:</strong>
            <ul className={styles.modalList}>
              <li>Social Security Number</li>
              <li>Bank account information</li>
              <li>Personal addresses or contact details</li>
              <li>Financial statements or tax returns</li>
            </ul>
          </div>
          
          <div className={styles.modalSection}>
            <strong>What we DO provide:</strong>
            <ul className={styles.modalList}>
              <li>Instant responses with no waiting</li>
              <li>Completely confidential calculations</li>
              <li>Secure, encrypted data transmission</li>
              <li>No spam, no unwanted calls</li>
            </ul>
          </div>
          
          <p className={styles.modalClosing}>
            <strong>Your information stays private.</strong> We only need basic payment details to give you an accurate quote - nothing more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
