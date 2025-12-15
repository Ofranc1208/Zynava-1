'use client';

import React, { useState } from 'react';
import styles from './ContactOptions.module.css';
import SMSModal from '../SMSModal';
import AppointmentModal from '../AppointmentModal';

interface ContactOptionsProps {
  onContactClick?: () => void;
}

const ContactOptions: React.FC<ContactOptionsProps> = ({ onContactClick }) => {
  const [showSMSModal, setShowSMSModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleSMSClick = () => {
    setShowSMSModal(true);
    onContactClick?.();
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18552143510';
    onContactClick?.();
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@smarterpayouts.com';
    onContactClick?.();
  };

  const handleAppointmentClick = () => {
    setShowAppointmentModal(true);
    onContactClick?.();
  };

  return (
    <>
      <div className={styles.contactOptions}>
        <div className={styles.contactGrid}>
          <button
            className={styles.contactBtn}
            onClick={handleSMSClick}
            aria-label="Send text message"
          >
            <div className={styles.contactIcon}>
              <span className={styles.iconEmoji}>📱</span>
            </div>
            <div className={styles.contactContent}>
              <div className={styles.contactTitle}>Text Us</div>
              <div className={styles.contactDescription}>SMS available 24/7</div>
              <div className={styles.contactAction}>
                <a href="sms:+15615831280" style={{ color: '#047857', textDecoration: 'underline' }}>(561) 583-1280</a>
              </div>
            </div>
          </button>

          <button
            className={styles.contactBtn}
            onClick={handlePhoneClick}
            aria-label="Call us"
          >
            <div className={styles.contactIcon}>
              <span className={styles.iconEmoji}>📞</span>
            </div>
            <div className={styles.contactContent}>
              <div className={styles.contactTitle}>Call Us</div>
              <div className={styles.contactDescription}>Monday-Friday, 9AM-6PM EST</div>
              <div className={styles.contactAction}>
                <a href="tel:+18552143510" style={{ color: '#047857', textDecoration: 'underline' }}>(855) 214-3510</a>
              </div>
            </div>
          </button>

          <button
            className={styles.contactBtn}
            onClick={handleEmailClick}
            aria-label="Email us"
          >
            <div className={styles.contactIcon}>
              <span className={styles.iconEmoji}>✉️</span>
            </div>
            <div className={styles.contactContent}>
              <div className={styles.contactTitle}>Email Us</div>
              <div className={styles.contactDescription}>Response within 24 hours</div>
              <div className={styles.contactAction}>
                <a href="mailto:info@smarterpayouts.com" style={{ color: '#047857', textDecoration: 'underline' }}>info@smarterpayouts.com</a>
              </div>
            </div>
          </button>

          <button
            className={styles.contactBtn}
            onClick={handleAppointmentClick}
            aria-label="Book appointment"
          >
            <div className={styles.contactIcon}>
              <span className={styles.iconEmoji}>📅</span>
            </div>
            <div className={styles.contactContent}>
              <div className={styles.contactTitle}>Book Appointment</div>
              <div className={styles.contactDescription}>Free Consultation</div>
              <div className={styles.contactAction}>Schedule Now</div>
            </div>
          </button>
        </div>
      </div>

      {/* SMS Modal */}
      <SMSModal
        isOpen={showSMSModal}
        onClose={() => setShowSMSModal(false)}
        phoneNumber="+15615831280"
      />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={showAppointmentModal}
        onClose={() => setShowAppointmentModal(false)}
      />

      {/* Inject CSS animations */}
      <style jsx>{`
        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes gentleGlow {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(5, 150, 105, 0.15);
          }
          50% {
            box-shadow: 0 4px 16px rgba(5, 150, 105, 0.3), 0 0 20px rgba(16, 185, 129, 0.2);
          }
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </>
  );
};

export default ContactOptions;
