'use client';

import React, { useState } from 'react';
import styles from './ContactInfo.module.css';
import AppointmentModal from '../AppointmentModal';

/**
 * Contact Information Component for Chat
 * 
 * Displays contact information in a modern, FABDial-style format
 * when users ask "how do i contact you guys?" or similar questions.
 * 
 * Features:
 * - Modern glassmorphism design matching FABDial
 * - Clickable phone and email links
 * - Clean, professional presentation
 * - Mobile responsive
 */
export default function ContactInfo() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const contactMethods = [
    {
      icon: '💬',
      title: 'Text Us',
      description: 'SMS available 24/7',
      action: 'sms:+15615831280',
      actionText: '(561) 583-1280'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Monday-Friday, 9AM-6PM EST',
      action: 'tel:+18552143510',
      actionText: '(855) 214-3510'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      description: 'Response within 24 hours',
      action: 'mailto:info@smarterpayouts.com',
      actionText: 'info@smarterpayouts.com'
    },
    {
      icon: '📅',
      title: 'Book Appointment',
      description: 'Free Consultation',
      action: '/contact',
      actionText: 'Schedule Now'
    }
  ];

  const handleContactClick = (action: string, type: string) => {
    if (type === 'external') {
      window.open(action, '_blank');
    } else if (action === '/contact') {
      // For appointment booking, open the appointment modal
      setShowAppointmentModal(true);
    } else {
      window.location.href = action;
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h3 className={styles.contactTitle}>Get in Touch</h3>
        <p className={styles.contactSubtitle}>Choose your preferred way to reach us</p>
      </div>
      
      <div className={styles.contactGrid}>
        {contactMethods.map((method, index) => (
          <button
            key={index}
            className={styles.contactButton}
            onClick={() => handleContactClick(method.action, method.action.includes('http') ? 'external' : 'internal')}
            aria-label={`${method.title} - ${method.description}`}
          >
            <div className={styles.contactIcon}>
              <span className={styles.iconEmoji}>{method.icon}</span>
            </div>
            <div className={styles.contactContent}>
              <div className={styles.contactTitle}>{method.title}</div>
              <div className={styles.contactDescription}>{method.description}</div>
              <div className={styles.contactAction}>{method.actionText}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={showAppointmentModal}
        onClose={() => setShowAppointmentModal(false)}
      />
    </div>
  );
}
