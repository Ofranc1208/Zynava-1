'use client'

import { useState, useEffect } from 'react'
import ChatBubble from './ChatBubble'
import TypingIndicator from './TypingIndicator'
import styles from './WelcomeSequence.module.css'

interface WelcomeSequenceProps {
  onGetStarted: () => void
  hideButton?: boolean
}

export default function WelcomeSequence({ onGetStarted, hideButton = false }: WelcomeSequenceProps) {
  const [isTyping, setIsTyping] = useState(true)
  const [animationStep, setAnimationStep] = useState(0)
  // 0 = typing, 1 = greeting bubble, 2 = typing, 3 = match supplements bubble, 4 = typing, 5 = no personal info bubble, 6 = typing, 7 = show Get Started

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    // Animated message sequence (streamlined - 3 messages + button)
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(1) // Greeting bubble
    }, 1200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(2) // Typing indicator for match supplements
    }, 2000))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(3) // Match supplements bubble appears
    }, 3200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(4) // Typing indicator for no personal info
    }, 4000))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(5) // No personal info bubble appears
    }, 5200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(6) // Typing indicator before Get Started button
    }, 5800))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(7) // Show Get Started button
    }, 7000))

    return () => timers.forEach(t => clearTimeout(t))
  }, [])

  return (
    <>
      {/* Typing indicator for first message */}
      {animationStep === 0 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* First greeting message - Z styled prominently */}
      {animationStep >= 1 && (
        <ChatBubble
          message={
            <>
              Hi, I'm <span className={styles.zLetter}>Z</span>, your <span className={styles.matchmakerText}>Supplement Matchmaker</span>.
            </>
          }
          sender="advisor"
          timestamp={new Date()}
        />
      )}
      
      {/* Typing indicator for second message */}
      {animationStep === 2 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Second message - Match supplements */}
      {animationStep >= 3 && (
        <ChatBubble
          message={
            <>
              I compare <strong>30,000+</strong> supplements from big brands and hidden gems to find the best fit so you <strong>save time</strong> and <strong>avoid overpaying</strong>.
            </>
          }
          sender="advisor"
          timestamp={new Date()}
        />
      )}
      
      {/* Typing indicator for third message */}
      {animationStep === 4 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Third message - No personal info */}
      {animationStep >= 5 && (
        <ChatBubble
          message={
            <>
              <strong>No personal info</strong> or <strong>sign up</strong> is ever needed.
            </>
          }
          sender="advisor"
          timestamp={new Date()}
        />
      )}
      
      {/* Typing indicator before Get Started button */}
      {animationStep === 6 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Get Started button - hide after clicking */}
      {animationStep >= 7 && !hideButton && (
        <div className={styles.getStartedContainer}>
          <button
            className={styles.getStartedButton}
            onClick={onGetStarted}
          >
            Try now →
          </button>
        </div>
      )}
    </>
  )
}

