'use client'

import { useState, useEffect } from 'react'
import styles from './SupplementAdvisorCard.module.css'

export default function SupplementAdvisorCard() {
  const [canStart, setCanStart] = useState(false)
  const [step, setStep] = useState(0)
  // 0 = typing, 1 = greeting, 2 = typing, 3 = first message, 4 = typing, 5 = second message, 6 = show button

  // Check if promo overlay has been dismissed
  useEffect(() => {
    const checkPromoStatus = () => {
      const promoSeen = sessionStorage.getItem('zynava_promo_seen')
      if (promoSeen === 'true') {
        setCanStart(true)
        return true
      }
      return false
    }

    // Check immediately
    if (checkPromoStatus()) return

    // Poll every 500ms if promo not yet dismissed
    const interval = setInterval(() => {
      if (checkPromoStatus()) {
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Start animation sequence only after promo is dismissed
  useEffect(() => {
    if (!canStart) return

    const timers: NodeJS.Timeout[] = []
    
    // 20% faster timing for better engagement
    timers.push(setTimeout(() => setStep(1), 1440))  // Show greeting
    timers.push(setTimeout(() => setStep(2), 2560))  // Show typing
    timers.push(setTimeout(() => setStep(3), 3840))  // Show first message
    timers.push(setTimeout(() => setStep(4), 4960))  // Show typing
    timers.push(setTimeout(() => setStep(5), 6240))  // Show second message
    timers.push(setTimeout(() => setStep(6), 7200))  // Show button

    return () => timers.forEach(t => clearTimeout(t))
  }, [canStart])

  const handleChatClick = () => {
    console.log('Chat button clicked - open advisor')
  }

  // Don't render anything until promo is dismissed
  if (!canStart) {
    return null
  }

  return (
    <div className={styles.chatCard}>
      <div className={styles.chatContent}>
        {step === 0 && (
          <div className={styles.typingBubble}>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        {step >= 1 && (
          <div className={styles.messageBubble}>
            Hey there 👋
          </div>
        )}
        
        {step === 2 && (
          <div className={styles.typingBubble}>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        {step >= 3 && (
          <div className={`${styles.messageBubble} ${styles.animated}`}>
            Don't just <strong>BUY</strong> supplements.
          </div>
        )}
        
        {step === 4 && (
          <div className={styles.typingBubble}>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        {step >= 5 && (
          <div className={`${styles.messageBubble} ${styles.animated}`}>
            <strong>Understand</strong> why they work.
          </div>
        )}
        
        {step >= 6 && (
          <button 
            className={styles.chatButton}
            onClick={handleChatClick}
            aria-label="Supplement Advisor"
          >
            Supplement Advisor
            <span className={styles.arrow}>→</span>
          </button>
        )}
      </div>
    </div>
  )
}
