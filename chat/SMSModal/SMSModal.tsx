'use client';
import React, { useState } from 'react';
import styles from './SMSModal.module.css';

interface SMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
}

const SMSModal: React.FC<SMSModalProps> = ({
  isOpen,
  onClose,
  phoneNumber = '+15615831280'
}) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendSMS = async () => {
    if (!message.trim()) return;

    setIsSending(true);
    try {
      // Use simple SMS link approach
      const smsUrl = `sms:${phoneNumber}${message ? `?body=${encodeURIComponent(message)}` : ''}`;
      window.location.href = smsUrl;

      // Reset and close
      setMessage('');
      onClose();
    } catch (error) {
      console.error('SMS failed:', error);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <h3 className={styles.modalTitle}>📱 Send Text Message</h3>

        <div className={styles.phoneNumber}>
          To: {phoneNumber}
        </div>

        <div className={styles.messageContainer}>
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi, I'm interested in learning about structured settlement options..."
            maxLength={160}
            rows={4}
          />
          <div className={styles.charCount}>
            {message.length}/160 characters
          </div>
        </div>

        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button
            onClick={handleSendSMS}
            disabled={!message.trim() || isSending}
            className={styles.sendButton}
          >
            {isSending ? 'Opening...' : '📱 Open Messages'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SMSModal;
