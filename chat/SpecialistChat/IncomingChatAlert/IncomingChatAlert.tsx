'use client';

/**
 * Incoming Chat Alert Component
 * 
 * Displays a prominent notification when a new customer chat request arrives.
 * Shows customer info, context, and provides Accept/Decline actions.
 * 
 * Features:
 * - Full-screen overlay with professional design
 * - Customer context preview
 * - Priority indicator
 * - Accept/Decline buttons with loading states
 * - Auto-dismiss after timeout (optional)
 * - Sound notification (optional)
 * 
 * @author Smarter Payouts Team
 * @since Phase 2 - Live Chat Implementation
 */

import React, { useState, useEffect } from 'react';
import type { LiveChatSession } from '../../../../../services/chat';
import styles from './IncomingChatAlert.module.css';

interface IncomingChatAlertProps {
  session: LiveChatSession;
  onAccept: (sessionId: string) => Promise<void>;
  onDecline: (sessionId: string) => Promise<void>;
  onDismiss?: () => void;
  autoCloseTimeout?: number; // in seconds, 0 = no auto-close
  playSound?: boolean;
}

export const IncomingChatAlert: React.FC<IncomingChatAlertProps> = ({
  session,
  onAccept,
  onDecline,
  onDismiss,
  autoCloseTimeout = 30,
  playSound = true
}) => {
  const [isAccepting, setIsAccepting] = useState(false);
  const [isDeclining, setIsDeclining] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(autoCloseTimeout);

  // Play notification sound on mount
  useEffect(() => {
    if (playSound && typeof window !== 'undefined') {
      // Create a simple notification beep
      // Note: AudioContext requires user interaction to start, so this might not work on first load
      const playBeep = async () => {
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          
          // Resume AudioContext if it's suspended (required by browser autoplay policy)
          if (audioContext.state === 'suspended') {
            await audioContext.resume();
          }
          
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.value = 800;
          oscillator.type = 'sine';
          
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.5);
        } catch (err) {
          // Silently fail - browser autoplay policy prevents sound without user interaction
          console.debug('Notification sound blocked by browser autoplay policy');
        }
      };
      
      playBeep();
    }
  }, [playSound]);

  // Auto-close countdown
  useEffect(() => {
    if (autoCloseTimeout === 0) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          // Use setTimeout to avoid calling setState during render
          setTimeout(() => {
            if (onDismiss) onDismiss();
          }, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [autoCloseTimeout, onDismiss]);

  const handleAccept = async () => {
    setIsAccepting(true);
    try {
      await onAccept(session.id);
    } catch (err) {
      console.error('Failed to accept chat:', err);
      alert('Failed to accept chat. Please try again.');
    } finally {
      setIsAccepting(false);
    }
  };

  const handleDecline = async () => {
    setIsDeclining(true);
    try {
      await onDecline(session.id);
    } catch (err) {
      console.error('Failed to decline chat:', err);
      alert('Failed to decline chat. Please try again.');
    } finally {
      setIsDeclining(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return styles.priorityHigh;
      case 'medium': return styles.priorityMedium;
      case 'low': return styles.priorityLow;
      default: return styles.priorityMedium;
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴 High Priority';
      case 'medium': return '🟡 Medium Priority';
      case 'low': return '🟢 Low Priority';
      default: return '🟡 Medium Priority';
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.alertContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.pulseIcon}>
              <div className={styles.pulseRing} />
              <div className={styles.pulseRing} style={{ animationDelay: '0.5s' }} />
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className={styles.headerText}>
              <h2 className={styles.title}>New Chat Request</h2>
              <p className={styles.subtitle}>A customer needs assistance</p>
            </div>
          </div>
          {autoCloseTimeout > 0 && (
            <div className={styles.timer}>
              <span className={styles.timerText}>{timeRemaining}s</span>
            </div>
          )}
        </div>

        {/* Customer Info */}
        <div className={styles.customerInfo}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Customer:</span>
            <span className={styles.infoValue}>
              {session.userInfo?.name || 'Anonymous Customer'}
            </span>
          </div>
          
          {session.userInfo?.email && (
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Email:</span>
              <span className={styles.infoValue}>{session.userInfo.email}</span>
            </div>
          )}
          
          {session.userInfo?.phone && (
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Phone:</span>
              <span className={styles.infoValue}>{session.userInfo.phone}</span>
            </div>
          )}
          
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Intent:</span>
            <span className={styles.infoValue}>
              {session.userInfo?.initialIntent || 'General inquiry'}
            </span>
          </div>

          {/* Priority Badge */}
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Priority:</span>
            <span className={`${styles.priorityBadge} ${getPriorityColor(session.context?.priority || 'medium')}`}>
              {getPriorityLabel(session.context?.priority || 'medium')}
            </span>
          </div>
        </div>

        {/* Context Preview */}
        {session.context?.botTranscript && session.context.botTranscript.length > 0 && (
          <div className={styles.contextSection}>
            <h3 className={styles.contextTitle}>Previous Conversation</h3>
            <div className={styles.contextPreview}>
              {session.context.botTranscript.slice(-3).map((msg: any, idx: number) => (
                <div key={idx} className={styles.contextMessage}>
                  <span className={styles.contextSender}>
                    {msg.sender === 'user' ? (
                      <>
                        <span style={{ fontSize: '14px', marginRight: '4px' }}>👤</span> Customer
                      </>
                    ) : (
                      <>
                        <img
                          src="/assets/images/mint-mascot.png"
                          alt="Mint AI"
                          style={{
                            width: '16px',
                            height: '16px',
                            marginRight: '4px'
                          }}
                        />
                        Mint AI
                      </>
                    )}:
                  </span>
                  <span className={styles.contextText}>{msg.content}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.declineButton}`}
            onClick={handleDecline}
            disabled={isAccepting || isDeclining}
          >
            {isDeclining ? (
              <>
                <span className={styles.spinner} />
                Declining...
              </>
            ) : (
              'Decline'
            )}
          </button>
          
          <button
            className={`${styles.button} ${styles.acceptButton}`}
            onClick={handleAccept}
            disabled={isAccepting || isDeclining}
          >
            {isAccepting ? (
              <>
                <span className={styles.spinner} />
                Accepting...
              </>
            ) : (
              <>
                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accept Chat
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomingChatAlert;

