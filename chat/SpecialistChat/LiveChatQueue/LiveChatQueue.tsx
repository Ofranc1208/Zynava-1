/**
 * Live Chat Queue Component
 * 
 * Premium waiting experience with queue position, estimated wait time,
 * and smooth animations for professional user experience.
 * 
 * @author Smarter Payouts Team
 * @since Phase 2 - Live Chat Queue Experience
 */

'use client';

import React, { useState, useEffect } from 'react';
import { realtimeManager } from '../../../../../services/chat';
import styles from './LiveChatQueue.module.css';

interface LiveChatQueueProps {
  onAssigned: (specialistName: string) => void;
  initialQueuePosition?: number;
  initialWaitTime?: number; // in seconds
  sessionId?: string; // Session ID to monitor for real-time status changes
}

export const LiveChatQueue: React.FC<LiveChatQueueProps> = ({
  onAssigned,
  initialQueuePosition = 4,
  initialWaitTime = 420, // 7 minutes default - proper notification window for sales reps
  sessionId,
}) => {
  console.log('[LiveChatQueue] 🚀 Component mounted with props:', { 
    onAssigned: typeof onAssigned, 
    initialQueuePosition, 
    initialWaitTime,
    sessionId: sessionId || 'MISSING - THIS IS THE PROBLEM!'
  });
  
  const [queuePosition, setQueuePosition] = useState(initialQueuePosition);
  const [waitTime, setWaitTime] = useState(initialWaitTime);
  const [stage, setStage] = useState<'queue' | 'connecting' | 'assigned'>('queue');
  const [progress, setProgress] = useState(0);

  // Countdown timer for wait time
  useEffect(() => {
    if (stage !== 'queue' || waitTime <= 0) return;

    const interval = setInterval(() => {
      setWaitTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stage, waitTime]);

  // Monitor real-time session status changes
  useEffect(() => {
    if (!sessionId) {
      console.log('[LiveChatQueue] ⚠️ No sessionId provided, skipping real-time monitoring');
      return;
    }

    console.log('[LiveChatQueue] 👀 Setting up real-time monitoring for session:', sessionId);

    // Set up real-time listener for session status changes
    const unsubscribe = realtimeManager.onSessionsUpdate((sessions) => {
      const session = sessions[sessionId];
      
      if (!session) {
        console.log('[LiveChatQueue] ⚠️ Session not found:', sessionId);
        return;
      }

      console.log('[LiveChatQueue] 📊 Session status:', session.status, 'Specialist:', session.specialistId, 'Current stage:', stage);

      // If session ended or closed, do nothing further (support extra backend statuses defensively)
      const statusStr = String((session as any).status);
      if (statusStr === 'completed' || statusStr === 'closed' || statusStr === 'cancelled') {
        console.log('[LiveChatQueue] ⏹ Session ended/closed; keeping queue UI static.');
        return;
      }

      // When specialist accepts the chat (status becomes 'active')
      // Only transition if we're still in queue stage (prevent duplicate transitions)
      if (session.status === 'active' && session.specialistId && stage === 'queue') {
        console.log('[LiveChatQueue] ✅ Specialist accepted! Moving to connecting stage...');
        setStage('connecting');
      } else if (session.status === 'active' && session.specialistId && stage !== 'queue') {
        console.log('[LiveChatQueue] ⏭️ Already past queue stage, ignoring status update');
      }
    });

    return () => {
      console.log('[LiveChatQueue] 🧹 Cleaning up real-time listener...');
      unsubscribe();
    };
  }, [sessionId]);

  // Visual queue progression (UI only - not tied to actual connection)
  useEffect(() => {
    if (stage !== 'queue') return;

    console.log('[LiveChatQueue] 🎬 Starting visual queue progression...');

    // Progress bar updates based on 7-minute wait time
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / 420); // 7 minutes = 420 seconds
        return Math.min(newProgress, 95); // Cap at 95% until actually assigned
      });
    }, 1000);

    // Visual queue position updates (slower for 7-minute wait)
    // Reduce position every ~105 seconds (420/4 = 105)
    const queueInterval = setInterval(() => {
      setQueuePosition(prev => {
        console.log('[LiveChatQueue] 📊 Visual queue position:', prev);
        if (prev <= 1) {
          return 1; // Stay at position 1 until specialist accepts
        }
        return prev - 1;
      });
    }, 105000); // ~1.75 minutes per position

    return () => {
      console.log('[LiveChatQueue] 🧹 Cleaning up visual progression...');
      clearInterval(progressInterval);
      clearInterval(queueInterval);
    };
  }, [stage]);

  // Handle connecting stage (triggered when specialist accepts)
  useEffect(() => {
    if (stage !== 'connecting') return;

    console.log('[LiveChatQueue] 🔄 Entering connecting stage...');
    setProgress(95);
    
    const timer = setTimeout(() => {
      console.log('[LiveChatQueue] ✅ Connection established, calling onAssigned...');
      setProgress(100);
      setStage('assigned');
      
      // Get specialist name from session (will be available from real-time update)
      setTimeout(() => {
        console.log('[LiveChatQueue] 📞 Calling onAssigned callback...');
        onAssigned('Specialist'); // The actual specialist name will be in the session
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [stage, onAssigned]);

  // Format time display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.queueContainer}>
      {stage === 'queue' && (
        <div className={styles.compactCard}>
          <div className={styles.cardContent}>
            {/* Left side - Animated Icon */}
            <div className={styles.iconSection}>
              <div className={styles.pulseIcon}>
                <div className={styles.pulseRing} />
                <div className={styles.pulseRing} style={{ animationDelay: '0.5s' }} />
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            {/* Right side - Info */}
            <div className={styles.infoSection}>
              <div className={styles.statusRow}>
                <span className={styles.statusText}>Connecting to specialist...</span>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.queueInfo}>
                  <span className={styles.queueNumber}>{queuePosition}</span>
                  <span className={styles.queueLabel}>in queue</span>
                </div>
                <div className={styles.waitTimeInfo}>
                  <span className={styles.waitTimeNumber}>{formatTime(waitTime)}</span>
                  <span className={styles.waitTimeLabel}>wait time</span>
                </div>
              </div>
              <div className={styles.tipsSection}>
                <div className={styles.privacyRow}>
                  <span className={styles.tipIcon}>🔒</span>
                  <span className={styles.privacyText}>We will never ask you for any personal information to give you a quote</span>
                </div>
                <div className={styles.tipRow}>
                  <span className={styles.tipIcon}>📄</span>
                  <span className={styles.tipText}>Have your settlement payment information ready</span>
                </div>
                <div className={styles.tipRow}>
                  <span className={styles.tipIcon}>💰</span>
                  <span className={styles.tipText}>If you received an offer from a competitor, have those offer numbers ready</span>
                </div>
                <div className={styles.alternativesSection}>
                  <div className={styles.alternativesTitle}>Don't want to wait?</div>
                  <div className={styles.alternativesOptions}>
                    <a href="tel:855-214-3510" className={styles.alternativeOption}>
                      <span className={styles.optionIcon}>📞</span>
                      <span className={styles.optionText}>Call us at <strong>855-214-3510</strong></span>
                    </a>
                    <a href="mailto:info@smarterpayouts.com" className={styles.alternativeOption}>
                      <span className={styles.optionIcon}>✉️</span>
                      <span className={styles.optionText}>Email us</span>
                    </a>
                    <a href="sms:561-583-1280" className={styles.alternativeOption}>
                      <span className={styles.optionIcon}>💬</span>
                      <span className={styles.optionText}>Text us at <strong>561-583-1280</strong></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {stage === 'connecting' && (
        <div className={styles.compactCard}>
          <div className={styles.cardContent}>
            <div className={styles.iconSection}>
              <div className={styles.spinner}>
                <div className={styles.spinnerRing} />
                <div className={styles.spinnerRing} />
                <div className={styles.spinnerRing} />
              </div>
            </div>
            <div className={styles.infoSection}>
              <div className={styles.statusRow}>
                <span className={styles.statusText}>Connecting...</span>
              </div>
              <div className={styles.tipRow}>
                <span className={styles.tipText}>Finding your specialist</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {stage === 'assigned' && (
        <div className={styles.compactCard}>
          <div className={styles.cardContent}>
            <div className={styles.iconSection}>
              <div className={styles.checkmark}>
                <svg viewBox="0 0 52 52" className={styles.checkmarkSvg}>
                  <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                  <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
            </div>
            <div className={styles.infoSection}>
              <div className={styles.statusRow}>
                <span className={styles.statusText}>Connected!</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChatQueue;

