'use client'

import { useState, useEffect, useRef, useTransition } from 'react'
import styles from './SupplementAdvisorCard.module.css'
import { AdvisorModal } from '@/src/components/advisor'
import { AnimationStep } from '../../types'
import { ANIMATION_TIMINGS } from '../../constants'
import { usePromoCheck } from './hooks'

/**
 * SupplementAdvisorCard - Interactive chat card component
 * 
 * Displays an animated chat-style card that introduces the Supplement Advisor.
 * Features a typing animation sequence that reveals messages progressively,
 * culminating in a CTA button to open the full advisor modal.
 * 
 * Features:
 * - Animated typing indicators between messages
 * - Progressive message reveal with smooth animations
 * - Promo overlay integration (waits for dismissal)
 * - Full accessibility support (ARIA, reduced motion)
 * - Browser-compatible smooth scrolling
 * 
 * @returns The SupplementAdvisorCard component
 */
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
  useEffect(() => {
    if (step > AnimationStep.INITIAL_TYPING && messagesEndRef.current) {
      requestAnimationFrame(() => {
        if (messagesEndRef.current) {
          try {
            messagesEndRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'end' 
            })
          } catch {
            try {
              messagesEndRef.current.scrollIntoView(false)
            } catch {
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

  // Show loading state for hydration safety
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
              <strong>Match</strong> products <strong>to your goals</strong> and <strong>Budget</strong>.
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {step >= AnimationStep.SHOW_BUTTON && (
          <div className={styles.chatActions}>
            <a 
              href="#how-it-works"
              className={styles.secondaryButton}
              aria-label="Learn about our process"
            >
              See our process
            </a>
            <button 
              className={styles.chatButton}
              onClick={handleChatClick}
              aria-label="Open Supplement Advisor chat"
              type="button"
            >
              Start Matching
              <span className={styles.arrow} aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
      
      <AdvisorModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
