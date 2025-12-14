'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './AdvisorChat.module.css'
import ChatBubble from './ChatBubble'
import TypingIndicator from './AdvisorChat/TypingIndicator'
import WelcomeSequence from './AdvisorChat/WelcomeSequence'
import QuizStepRenderer from './AdvisorChat/QuizStepRenderer'
import UserSelectionSummary from './AdvisorChat/UserSelectionSummary'
import AdvisorInputBar from './AdvisorChat/AdvisorInputBar'
import { useAdvisorQuiz } from './AdvisorQuizController'
import { QUIZ_STEPS } from './AdvisorChat/quizData'
import type { AdvisorInput } from './types'

interface AdvisorChatProps {
  onClose: () => void
}

export default function AdvisorChat({ onClose }: AdvisorChatProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [welcomeComplete, setWelcomeComplete] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleComplete = async (input: AdvisorInput) => {
    setIsTyping(true)
    // TODO: Call API to get recommendations
    console.log('Quiz completed with input:', input)
    
    // Simulate processing
    setTimeout(() => {
      setIsTyping(false)
      // TODO: Show results
    }, 2000)
  }

  const {
    currentStep,
    steps,
    input,
    handleGoalSelect,
    handleLifestyleSelect,
    handleDietSelect,
    handleConcernSelect,
    handleBudgetSelect,
    handleNext,
    canProceed,
    resetQuiz,
  } = useAdvisorQuiz(handleComplete)

  // Scroll to keep new messages visible in the middle of viewport
  useEffect(() => {
    if (!messagesContainerRef.current) return

    // Clear any pending auto-scroll
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current)
    }

    // Scroll to show new content in the middle of the viewport
    // This makes it easier to see and interact with
    autoScrollTimeoutRef.current = setTimeout(() => {
      if (messagesContainerRef.current) {
        const container = messagesContainerRef.current
        const scrollHeight = container.scrollHeight
        const clientHeight = container.clientHeight
        
        // If content fits in viewport, scroll to top
        if (scrollHeight <= clientHeight) {
          container.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          return
        }
        
        // Calculate scroll position to center new content in viewport
        // Position new content at approximately 1/3 from top (middle-upper area)
        // This leaves space at top and bottom for better visibility
        const viewportMiddle = clientHeight * 0.33 // Position at 1/3 from top
        const maxScroll = scrollHeight - clientHeight
        
        // Scroll to position where latest content appears in middle-upper area
        // We want: latest content position - viewportMiddle = scrollTop
        // Latest content is at scrollHeight, so:
        const targetScroll = Math.max(0, scrollHeight - clientHeight + viewportMiddle)
        
        // But we can't scroll past maxScroll
        const finalScroll = Math.min(targetScroll, maxScroll)
        
        container.scrollTo({
          top: finalScroll,
          behavior: 'smooth'
        })
      }
    }, 200) // Slightly longer delay to ensure DOM has updated

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current)
      }
    }
  }, [currentStep, showQuiz, isTyping, input, welcomeComplete])

  // Auto-advance to next question when selection is made (except concerns which is optional)
  useEffect(() => {
    if (!showQuiz || currentStep === 'concerns') return
    
    if (canProceed()) {
      // Auto-advance after a short delay for better UX
      const timer = setTimeout(() => {
        handleNext()
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [showQuiz, currentStep, input, canProceed, handleNext])

  const handleGetStarted = () => {
    setWelcomeComplete(true) // Mark welcome as complete
    setShowQuiz(true)
    handleNext() // Move to first quiz step
    // Scroll will happen automatically via useEffect when showQuiz changes
  }

  const handleReset = () => {
    setShowQuiz(false)
    setWelcomeComplete(false) // Reset welcome state
    setIsTyping(false)
    resetQuiz()
  }

  const currentStepData = steps[currentStep]

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.headerContent}>
          <h2 className={styles.headerTitle}>Supplement Advisor</h2>
          <p className={styles.headerSubtitle}>Your personal supplement decision guide.</p>
        </div>
        <div className={styles.headerButtons}>
          {/* Close button - always visible */}
          <button 
            className={styles.closeButton}
            onClick={onClose}
            title="Close advisor"
            aria-label="Close advisor"
          >
            ✕
          </button>
          {/* Reset button for testing - only shows during quiz */}
          {showQuiz && (
            <button 
              className={styles.resetButton}
              onClick={handleReset}
              title="Reset quiz"
              aria-label="Reset quiz"
            >
              ↺
            </button>
          )}
        </div>
      </div>

      <div 
        ref={messagesContainerRef}
        className={styles.messagesContainer}
      >
        <div className={styles.messagesContent}>
          {/* Welcome sequence - show button only if quiz hasn't started */}
          <WelcomeSequence 
            onGetStarted={handleGetStarted} 
            hideButton={welcomeComplete}
          />

          {/* Quiz steps - show below welcome messages */}
          {/* Question is now inside the fixed QuizStepRenderer card */}
          {showQuiz && currentStepData && currentStepData.type !== 'welcome' && (
            <QuizStepRenderer
              step={currentStepData}
              input={input}
              onGoalSelect={handleGoalSelect}
              onLifestyleSelect={handleLifestyleSelect}
              onDietSelect={handleDietSelect}
              onConcernSelect={handleConcernSelect}
              onBudgetSelect={handleBudgetSelect}
              canProceed={canProceed()}
              onNext={handleNext}
            />
          )}

          {/* User selection summary - DISABLED per user request */}
          {/* {showQuiz && (
            <UserSelectionSummary currentStep={currentStep} input={input} />
          )} */}

          {/* Typing indicator */}
          {isTyping && showQuiz && (
            <TypingIndicator isVisible={isTyping} />
          )}
          
          {/* Extra spacing at bottom for better scroll experience */}
          <div className={styles.bottomSpacer} />
        </div>
      </div>

      {/* Input bar at bottom */}
      <AdvisorInputBar
        onSend={(message) => {
          // TODO: Handle user message
          console.log('User message:', message)
        }}
        disabled={isTyping}
        placeholder="Ask anything"
      />
    </div>
  )
}
