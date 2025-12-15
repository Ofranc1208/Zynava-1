'use client'

import { useState, useEffect } from 'react'
import ChatBubble from '../ChatBubble'
import TypingIndicator from './TypingIndicator'
import styles from './WelcomeSequence.module.css'

interface WelcomeSequenceProps {
  onGetStarted: () => void
  hideButton?: boolean
}

export default function WelcomeSequence({ onGetStarted, hideButton = false }: WelcomeSequenceProps) {
  const [isTyping, setIsTyping] = useState(true)
  const [animationStep, setAnimationStep] = useState(0)
  // 0 = typing, 1 = greeting bubble, 2 = typing, 3 = skip ads bubble, 4 = typing, 5 = match supplements bubble, 6 = typing, 7 = no personal info bubble, 8 = typing, 9 = show Get Started

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    // Animated message sequence
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(1) // Greeting bubble
    }, 1200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(2) // Typing indicator for skip ads
    }, 2000))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(3) // Skip ads bubble appears
    }, 3200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(4) // Typing indicator for match supplements
    }, 4000))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(5) // Match supplements bubble appears
    }, 5200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(6) // Typing indicator for no personal info
    }, 5800))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(7) // No personal info bubble appears
    }, 7000))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(8) // Typing indicator before Get Started button
    }, 7600))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(9) // Show Get Started button
    }, 8800))

    return () => timers.forEach(t => clearTimeout(t))
  }, [])

  return (
    <>
      {/* Typing indicator for first message */}
      {animationStep === 0 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* First greeting message */}
      {animationStep >= 1 && (
        <ChatBubble
          message="Hi, I'm Z."
          sender="advisor"
          timestamp={new Date()}
        />
      )}
      
      {/* Typing indicator for second message */}
      {animationStep === 2 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Second message - Skip ads */}
      {animationStep >= 3 && (
        <ChatBubble
          message={
            <>
              <strong>Skip</strong> the <strong>endless searching</strong> and <strong>sponsored ads</strong>.
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
      
      {/* Third message - Match supplements */}
      {animationStep >= 5 && (
        <ChatBubble
          message={
            <>
              Let's match supplements that align with your <strong>health goal</strong> and <strong>budget</strong>.
            </>
          }
          sender="advisor"
          timestamp={new Date()}
        />
      )}
      
      {/* Typing indicator for fourth message */}
      {animationStep === 6 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Fourth message - No personal info */}
      {animationStep >= 7 && (
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
      {animationStep === 8 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Get Started button - hide after clicking */}
      {animationStep >= 9 && !hideButton && (
        <div className={styles.getStartedContainer}>
          <button
            className={styles.getStartedButton}
            onClick={onGetStarted}
          >
            Get Started →
          </button>
        </div>
      )}
    </>
  )
}

