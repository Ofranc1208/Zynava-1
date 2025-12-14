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
  // 0 = typing, 1 = first greeting, 2 = typing, 3 = second bubble, 4 = typing, 5 = third bubble, 6 = typing, 7 = show Get Started

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    // Animated message sequence
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(1)
    }, 1200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(2)
    }, 2000))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(3) // First bubble appears
    }, 3200))
    
    timers.push(setTimeout(() => {
      setIsTyping(true)
      setAnimationStep(4) // Typing indicator for second bubble
    }, 4000))
    
    timers.push(setTimeout(() => {
      setIsTyping(false)
      setAnimationStep(5) // Second bubble appears
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
      
      {/* First greeting message */}
      {animationStep >= 1 && (
        <ChatBubble
          message="Hi, I’m Z."
          sender="advisor"
          timestamp={new Date()}
        />
      )}
      
      {/* Typing indicator for second message */}
      {animationStep === 2 && (
        <TypingIndicator isVisible={isTyping} />
      )}
      
      {/* Second explanation message - first bubble */}
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
      
      {/* Third explanation message - second bubble */}
      {animationStep >= 5 && (
        <ChatBubble
          message={
            <>
              <strong>No personal info</strong> or <strong>sign up</strong>. Let's match supplements that align
              with your <strong>health goal</strong> and <strong>budget</strong>.
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
            Get Started →
          </button>
        </div>
      )}
    </>
  )
}

