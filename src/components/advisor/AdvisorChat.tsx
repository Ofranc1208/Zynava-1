'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './AdvisorChat.module.css'
import ChatBubble from './ChatBubble'
import TypingIndicator from './AdvisorChat/TypingIndicator'
import WelcomeSequence from './AdvisorChat/WelcomeSequence'
import QuizStepRenderer from './AdvisorChat/QuizStepRenderer'
import UserSelectionSummary from './AdvisorChat/UserSelectionSummary'
import AdvisorInputBar from './AdvisorChat/AdvisorInputBar'
import ProcessingAnimation from './AdvisorChat/ProcessingAnimation'
import ReviewStep from './AdvisorChat/ReviewStep'
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
  const [isNavigatingBack, setIsNavigatingBack] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([])
  const [isChatLoading, setIsChatLoading] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const previousStepRef = useRef<string>('welcome')

  const handleComplete = async (input: AdvisorInput) => {
    console.log('Quiz completed with input:', input)
    // Show review step first
    setShowReview(true)
  }

  const handleReviewNext = () => {
    // User confirmed, show processing animation
    setShowReview(false)
    setIsProcessing(true)
  }

  const handleReviewBack = () => {
    // Go back to budget step
    setShowReview(false)
    handlePrevious()
  }

  const handleReviewEdit = (stepId: string) => {
    // Navigate to specific step for editing
    setShowReview(false)
    goToStep(stepId)
  }

  const router = useRouter()

  const handleProcessingComplete = () => {
    // Processing animation complete, but don't show results in chat
    // Results will be shown on separate page
  }

  const handleViewResults = () => {
    // Navigate to results page with quiz data as URL params
    const params = new URLSearchParams()
    
    // Add all quiz selections to URL params
    if (input.goals.length > 0) {
      params.set('goals', input.goals.join(','))
    }
    if (input.demographic) {
      params.set('demographic', input.demographic)
    }
    if (input.activityLevel) {
      params.set('activity', input.activityLevel)
    }
    if (input.diet) {
      params.set('diet', input.diet)
    }
    if (input.concerns.length > 0) {
      params.set('concerns', input.concerns.join(','))
    }
    if (input.shoppingPreferences.length > 0) {
      params.set('preferences', input.shoppingPreferences.join(','))
    }
    
    router.push(`/advisor/results?${params.toString()}`)
  }

  const {
    currentStep,
    steps,
    input,
    handleGoalSelect,
    handleDemographicSelect,
    handleLifestyleSelect,
    handleDietSelect,
    handleConcernSelect,
    handleBudgetSelect,
    handleNext,
    handlePrevious,
    goToStep,
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

  // Track navigation direction to prevent auto-advance when going back
  useEffect(() => {
    const stepOrder = ['welcome', 'goals', 'demographics', 'lifestyle', 'diet', 'concerns', 'budget']
    const currentIndex = stepOrder.indexOf(currentStep)
    const previousIndex = stepOrder.indexOf(previousStepRef.current)
    
    // Only track direction if we have a valid previous step (not initial render)
    if (previousStepRef.current !== 'welcome' || currentStep !== 'welcome') {
      if (currentIndex < previousIndex && currentIndex >= 0) {
        // Navigating backwards
        setIsNavigatingBack(true)
      } else if (currentIndex > previousIndex && currentIndex >= 0) {
        // Navigating forwards - clear the flag
        setIsNavigatingBack(false)
      }
    }
    
    previousStepRef.current = currentStep
  }, [currentStep])

  // Auto-advance to next question when selection is made
  // BUT NOT when navigating backwards - user should be able to stay on the step they went back to
  // ALSO NOT for budget step - requires manual "Proceed" button
  useEffect(() => {
    if (!showQuiz || isNavigatingBack || currentStep === 'budget') return
    
    if (canProceed()) {
      // Auto-advance after a short delay for better UX
      const timer = setTimeout(() => {
        handleNext()
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [showQuiz, currentStep, input, canProceed, handleNext, isNavigatingBack])

  // Clear isNavigatingBack when user makes a selection change after going back
  // This allows auto-advance to work again when user actively engages with the step
  useEffect(() => {
    if (isNavigatingBack) {
      // User changed their selection on a step they navigated back to
      // Clear the flag to allow auto-advance to work again
      setIsNavigatingBack(false)
    }
  }, [input]) // Watch for input changes

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
    setIsNavigatingBack(false)
    previousStepRef.current = 'welcome'
    resetQuiz()
  }

  const handleBackClick = () => {
    setIsNavigatingBack(true)
    handlePrevious()
  }

  const handleChatMessage = async (message: string) => {
    // Add user message to chat
    setChatMessages(prev => [...prev, { role: 'user', content: message }])
    setIsChatLoading(true)

    try {
      // Prepare quiz context if quiz is completed
      const quizContext = (showReview || isProcessing) ? {
        goals: input.goals,
        demographic: input.demographic,
        activity: input.activityLevel,
        diet: input.diet,
        concerns: input.concerns,
      } : undefined

      // Call API
      const response = await fetch('/api/advisor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          conversationHistory: chatMessages,
          quizContext,
        }),
      })

      const data = await response.json()
      
      // Add assistant response
      if (data.message) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      } else if (data.error) {
        setChatMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'I apologize, but I\'m having trouble right now. Please try again.' 
        }])
      }
    } catch (error) {
      console.error('Chat error:', error)
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again.' 
      }])
    } finally {
      setIsChatLoading(false)
    }
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
          {showQuiz && !showReview && !isProcessing && currentStepData && currentStepData.type !== 'welcome' && (
            <QuizStepRenderer
              step={currentStepData}
              input={input}
              onGoalSelect={handleGoalSelect}
              onDemographicSelect={handleDemographicSelect}
              onLifestyleSelect={handleLifestyleSelect}
              onDietSelect={handleDietSelect}
              onConcernSelect={handleConcernSelect}
              onBudgetSelect={handleBudgetSelect}
              canProceed={canProceed()}
              onNext={handleNext}
              onPrevious={handleBackClick}
            />
          )}

          {/* Review Step - shown after all questions are answered */}
          {showReview && (
            <ReviewStep
              input={input}
              onNext={handleReviewNext}
              onPrevious={handleReviewBack}
              onEdit={handleReviewEdit}
            />
          )}

          {/* Processing Animation - shown after review confirmation */}
          {isProcessing && (
            <ProcessingAnimation 
              onComplete={handleProcessingComplete} 
              onViewResults={handleViewResults}
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

          {/* Chat messages */}
          {chatMessages.map((msg, idx) => (
            <ChatBubble
              key={idx}
              message={msg.content}
              sender={msg.role === 'user' ? 'user' : 'advisor'}
              timestamp={new Date()}
            />
          ))}

          {/* Chat loading indicator */}
          {isChatLoading && (
            <TypingIndicator isVisible={true} />
          )}
          
          {/* Extra spacing at bottom for better scroll experience */}
          <div className={styles.bottomSpacer} />
        </div>
      </div>

      {/* Input bar at bottom */}
      <AdvisorInputBar
        onSend={handleChatMessage}
        disabled={isTyping || isProcessing}
        isLoading={isChatLoading}
        placeholder="Ask anything about supplements..."
      />
    </div>
  )
}
