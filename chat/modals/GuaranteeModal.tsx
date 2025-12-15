import React from 'react';
import styles from './Modal.module.css';

interface GuaranteeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuaranteeModal: React.FC<GuaranteeModalProps> = ({ isOpen, onClose }) => {
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
          Our 100% Guarantee Promise
        </h3>
        
        <div className={styles.modalBody}>
          <p>
            <strong>What we're trying to say is simple:</strong> We believe in transparency and we are going to give you a 100% real offer with no games.
          </p>
          <p>
            We don't ask for any personal information upfront - we just give you the offer for you to see, review it, and that's about it. If you like it, we want to work with you.
          </p>
          <p>
            <strong>This is a structured settlement revolution</strong> - the first of its kind. We provide guaranteed quotes by simply asking about:
          </p>
          <ul className={styles.modalList}>
            <li>The payment information you're trying to exchange for a lump sum</li>
            <li>Some basic health questions (non-personal) just to get an accurate assessment</li>
          </ul>
          <p className={styles.modalClosing}>
            <strong>That's it.</strong> No sales pressure, no personal details, just honest numbers from Smarter Payouts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeModal;
