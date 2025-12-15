'use client';

import React, { useState } from 'react';
import AppointmentModal from '../AppointmentModal';
import styles from './BookAppointmentCard.module.css';

/**
 * Book Appointment Card Component
 * 
 * Displays a focused card with appointment booking when users want to schedule an appointment.
 * Features a prominent "Book Appointment" button that opens the appointment modal.
 * 
 * @module BookAppointmentCard
 * @author Smarter Payouts Team
 * @since 2025
 */
export default function BookAppointmentCard() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleBookClick = () => {
    setShowAppointmentModal(true);
  };

  return (
    <>
      <div className={styles.bookAppointmentCard}>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper}>
            <span className={styles.calendarIcon}>📅</span>
          </div>
          <div className={styles.message}>
            Schedule a free consultation with us
          </div>
          <div className={styles.description}>
            Book a time that works for you
          </div>
          <button 
            className={styles.bookButton}
            onClick={handleBookClick}
            aria-label="Book an Appointment"
          >
            <span className={styles.bookButtonText}>Book Appointment</span>
          </button>
          <div className={styles.availability}>
            Monday-Friday, 9AM-6PM EST
          </div>
        </div>
      </div>
      
      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={showAppointmentModal}
        onClose={() => setShowAppointmentModal(false)}
      />
    </>
  );
}

