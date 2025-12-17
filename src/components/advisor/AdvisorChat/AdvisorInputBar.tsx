'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import styles from './AdvisorInputBar.module.css'

interface AdvisorInputBarProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
  isLoading?: boolean
}

export default function AdvisorInputBar({ 
  onSend, 
  disabled = false,
  placeholder = 'Ask anything about supplements...',
  isLoading = false
}: AdvisorInputBarProps) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea with max height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      const scrollHeight = textareaRef.current.scrollHeight
      const maxHeight = 120 // Max 3 lines
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`
    }
  }, [input])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim() && !disabled && !isLoading) {
      onSend(input.trim())
      setInput('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleMicClick = () => {
    // TODO: Implement voice input
    console.log('Voice input not yet implemented')
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      {/* Plus icon button */}
      <button
        type="button"
        className={styles.plusButton}
        onClick={() => {
          // TODO: Implement attachment/file upload if needed
          console.log('Attachment not yet implemented')
        }}
        disabled={disabled || isLoading}
        aria-label="Attach file"
        title="Attach file"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      {/* Text input */}
      <div className={styles.inputWrapper}>
        <textarea
          id="advisor-message-input"
          name="message"
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={styles.input}
          disabled={disabled || isLoading}
          rows={1}
          maxLength={1000}
          aria-label="Message input"
          autoComplete="off"
        />
      </div>

      {/* Action buttons */}
      <div className={styles.actionsContainer}>
        {/* Microphone button */}
        {!input.trim() && (
          <button
            type="button"
            className={styles.micButton}
            onClick={handleMicClick}
            disabled={disabled}
            aria-label="Voice input"
            title="Voice input"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>
        )}

        {/* Send button */}
        {input.trim() && (
          <button
            type="submit"
            className={styles.sendButton}
            disabled={disabled || !input.trim() || isLoading}
            aria-label="Send message"
            title="Send message"
          >
            {isLoading ? (
              <div className={styles.loadingSpinner} />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            )}
          </button>
        )}
      </div>
    </form>
  )
}

