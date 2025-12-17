'use client'

import { useState, useEffect, useRef, useTransition } from 'react'
import styles from './SupplementAdvisorCard.module.css'
import { AdvisorModal } from '@/src/components/advisor'

// Animation step enum for type safety
enum AnimationStep {
  INITIAL_TYPING = 0,
  GREETING = 1,
  TYPING_BEFORE_FIRST = 2,
  FIRST_MESSAGE = 3,
  TYPING_BEFORE_SECOND = 4,
  SECOND_MESSAGE = 5,
  SHOW_BUTTON = 6,
}

// Animation timings configuration
const ANIMATION_TIMINGS = {
  GREETING: 1440,
  TYPING_1: 2560,
  FIRST_MESSAGE: 3840,
  TYPING_2: 4960,
  SECOND_MESSAGE: 6240,
  BUTTON: 7200,
} as const

// Promo checking configuration
const PROMO_CONFIG = {
  STORAGE_KEY: 'zynava_promo_seen',
  INITIAL_CHECK_DELAY: 100,
  FALLBACK_DELAY: 200,
  POLL_INTERVAL: 500,
  MAX_POLLS: 10,
} as const

// Custom hook for promo checking logic
function usePromoCheck() {
  const [canStart, setCanStart] = useState(false)

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

    const checkPromoStatus = (): boolean => {
      const promoSeen = getSessionStorage(PROMO_CONFIG.STORAGE_KEY)
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
      setCanStart(true)
    }, PROMO_CONFIG.FALLBACK_DELAY)

    // Check if promo is disabled (after delay to let page load)
    const initialCheck = setTimeout(() => {
      const promoSeen = getSessionStorage(PROMO_CONFIG.STORAGE_KEY)
      if (!promoSeen) {
        // Promo is likely disabled - start immediately
        clearTimeout(fallbackTimer)
        setCanStart(true)
        return
      }
    }, PROMO_CONFIG.INITIAL_CHECK_DELAY)

    // Poll every 500ms if promo not yet dismissed (for when promo is enabled)
    // But limit to max polls to prevent infinite polling
    let pollCount = 0
    const interval = setInterval(() => {
      pollCount++
      if (checkPromoStatus() || pollCount >= PROMO_CONFIG.MAX_POLLS) {
        clearInterval(interval)
        clearTimeout(fallbackTimer)
        // If we've polled max times and still no promo seen, start anyway
        if (pollCount >= PROMO_CONFIG.MAX_POLLS) {
          setCanStart(true)
        }
      }
    }, PROMO_CONFIG.POLL_INTERVAL)

    return () => {
      clearTimeout(initialCheck)
      clearTimeout(fallbackTimer)
      clearInterval(interval)
    }
  }, [])

  return canStart
}

export default function SupplementAdvisorCard(): JSX.Element {
  const canStart = usePromoCheck()
  const [step, setStep] = useState<AnimationStep>(AnimationStep.INITIAL_TYPING)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [, startTransition] = useTransition()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Start animation sequence only after promo is dismissed
  useEffect(() => {
    if (!canStart) return

    const timers: NodeJS.Timeout[] = []
    
    // Use transition for non-urgent UI updates to prevent blocking
    const scheduleStep = (stepValue: AnimationStep, delay: number) => {
      timers.push(setTimeout(() => {
        startTransition(() => {
          setStep(stepValue)
        })
      }, delay))
    }

    // Schedule animation sequence with defined timings
    scheduleStep(AnimationStep.GREETING, ANIMATION_TIMINGS.GREETING)
    scheduleStep(AnimationStep.TYPING_BEFORE_FIRST, ANIMATION_TIMINGS.TYPING_1)
    scheduleStep(AnimationStep.FIRST_MESSAGE, ANIMATION_TIMINGS.FIRST_MESSAGE)
    scheduleStep(AnimationStep.TYPING_BEFORE_SECOND, ANIMATION_TIMINGS.TYPING_2)
    scheduleStep(AnimationStep.SECOND_MESSAGE, ANIMATION_TIMINGS.SECOND_MESSAGE)
    scheduleStep(AnimationStep.SHOW_BUTTON, ANIMATION_TIMINGS.BUTTON)

    return () => timers.forEach(t => clearTimeout(t))
  }, [canStart, startTransition])

  // Auto-scroll to bottom when new messages appear
  // Browser-compatible version with fallback
  useEffect(() => {
    if (step > AnimationStep.INITIAL_TYPING && messagesEndRef.current) {
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

  const handleChatClick = (): void => {
    setIsModalOpen(true)
  }

  const handleCloseModal = (): void => {
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
        <div 
          className={styles.chatMessages}
          role="log"
          aria-live="polite"
          aria-atomic="true"
          aria-label="Chat conversation"
        >
          {step === AnimationStep.INITIAL_TYPING && (
            <div className={styles.typingBubble} aria-label="Typing indicator">
              <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          {step >= AnimationStep.GREETING && (
            <div className={styles.messageBubble}>
              Hey there 👋
            </div>
          )}
          
          {step === AnimationStep.TYPING_BEFORE_FIRST && (
            <div className={styles.typingBubble} aria-label="Typing indicator">
              <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          {step >= AnimationStep.FIRST_MESSAGE && (
            <div className={`${styles.messageBubble} ${styles.animated}`}>
              Don't just <strong>BUY</strong> supplements.
            </div>
          )}
          
          {step === AnimationStep.TYPING_BEFORE_SECOND && (
            <div className={styles.typingBubble} aria-label="Typing indicator">
              <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          {step >= AnimationStep.SECOND_MESSAGE && (
            <div className={`${styles.messageBubble} ${styles.animated}`}>
              <strong>Discover the benefits</strong>, <strong>compare prices</strong>, and <strong>decide if it's worth it</strong>.
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {step >= AnimationStep.SHOW_BUTTON && (
          <div className={styles.chatActions}>
            <button 
              className={styles.chatButton}
              onClick={handleChatClick}
              aria-label="Open Supplement Advisor chat"
              type="button"
            >
              Supplement Advisor
              <span className={styles.arrow} aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
      
      <AdvisorModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
