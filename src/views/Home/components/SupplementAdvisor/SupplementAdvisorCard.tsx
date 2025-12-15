'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './SupplementAdvisorCard.module.css'
import { AdvisorModal } from '@/src/components/advisor'

export default function SupplementAdvisorCard() {
  const [canStart, setCanStart] = useState(false)
  const [step, setStep] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  // 0 = typing, 1 = greeting, 2 = typing, 3 = first message, 4 = typing, 5 = second message, 6 = show button

  // Check if promo overlay has been dismissed OR if it's disabled
  // Browser-compatible version with fallback
  useEffect(() => {
    // Helper function to safely access sessionStorage
    const getSessionStorage = (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          return window.sessionStorage.getItem(key)
        }
      } catch (e) {
        // sessionStorage might be disabled or unavailable
        console.warn('sessionStorage not available:', e)
      }
      return null
    }

    const checkPromoStatus = () => {
      const promoSeen = getSessionStorage('zynava_promo_seen')
      if (promoSeen === 'true') {
        setCanStart(true)
        return true
      }
      return false
    }

    // Check immediately
    if (checkPromoStatus()) return

    // Fallback: If sessionStorage is not available or promo check fails,
    // start the animation after a short delay (browser compatibility)
    const fallbackTimer = setTimeout(() => {
      // If we still haven't started, start anyway (browser compatibility fallback)
      setCanStart(true)
    }, 200)

    // Check if promo is disabled (after 100ms to let page load)
    const initialCheck = setTimeout(() => {
      const promoSeen = getSessionStorage('zynava_promo_seen')
      if (!promoSeen) {
        // Promo is likely disabled - start immediately
        clearTimeout(fallbackTimer)
        setCanStart(true)
        return
      }
    }, 100)

    // Poll every 500ms if promo not yet dismissed (for when promo is enabled)
    // But limit to 5 seconds max to prevent infinite polling
    let pollCount = 0
    const maxPolls = 10 // 10 * 500ms = 5 seconds max
    const interval = setInterval(() => {
      pollCount++
      if (checkPromoStatus() || pollCount >= maxPolls) {
        clearInterval(interval)
        clearTimeout(fallbackTimer)
        // If we've polled max times and still no promo seen, start anyway
        if (pollCount >= maxPolls) {
          setCanStart(true)
        }
      }
    }, 500)

    return () => {
      clearTimeout(initialCheck)
      clearTimeout(fallbackTimer)
      clearInterval(interval)
    }
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

  // Auto-scroll to bottom when new messages appear
  // Browser-compatible version with fallback
  useEffect(() => {
    if (step > 0 && messagesEndRef.current) {
      // Use requestAnimationFrame for better browser compatibility
      requestAnimationFrame(() => {
        if (messagesEndRef.current) {
          try {
            // Try smooth scroll first (modern browsers)
            messagesEndRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'end' 
            })
          } catch (e) {
            // Fallback for browsers that don't support smooth scroll
            try {
              messagesEndRef.current.scrollIntoView(false) // block: 'end'
            } catch (e2) {
              // Last resort: direct scroll
              if (messagesEndRef.current.parentElement) {
                messagesEndRef.current.parentElement.scrollTop = 
                  messagesEndRef.current.parentElement.scrollHeight
              }
            }
          }
        }
      })
    }
  }, [step])

  const handleChatClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Show loading state instead of null for better browser compatibility
  // This ensures the component always renders, preventing hydration issues
  if (!canStart) {
    return (
      <div className={styles.chatCard}>
        <div className={styles.chatMessages}>
          <div className={styles.typingBubble}>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={styles.chatCard}>
        <div className={styles.chatMessages}>
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
              <strong>Discover the benefits</strong>, <strong>compare prices</strong>, and <strong>decide if it's worth it</strong>.
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {step >= 6 && (
          <div className={styles.chatActions}>
            <button 
              className={styles.chatButton}
              onClick={handleChatClick}
              aria-label="Supplement Advisor"
            >
              Supplement Advisor
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        )}
      </div>
      
      <AdvisorModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
