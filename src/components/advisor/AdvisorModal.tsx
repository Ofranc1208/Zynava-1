'use client'

import { useEffect, useRef } from 'react'
import styles from './AdvisorModal.module.css'
import AdvisorChat from './AdvisorChat'

interface AdvisorModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdvisorModal({ isOpen, onClose }: AdvisorModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Cross-browser body scroll lock with position: fixed
  // Works on iOS Safari, Chrome, Firefox, Edge, and all mobile browsers
  useEffect(() => {
    if (typeof window === 'undefined' || !document?.body) return
    
    if (isOpen) {
      // Store the element that had focus before opening modal
      previousFocusRef.current = document.activeElement as HTMLElement
      
      // Capture current scroll position
      const scrollY = window.scrollY
      const body = document.body
      
      // Store original values for restoration
      const originalPosition = body.style.position
      const originalTop = body.style.top
      const originalWidth = body.style.width
      const originalOverflow = body.style.overflow
      
      // Lock scroll using position: fixed (works across all browsers)
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.width = '100%' // Prevent layout shift
      body.style.overflow = 'hidden' // Extra safeguard for Firefox
      
      // Focus the modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus()
      }
      
      return () => {
        // Restore original body styles
        body.style.position = originalPosition
        body.style.top = originalTop
        body.style.width = originalWidth
        body.style.overflow = originalOverflow
        
        // Restore scroll position (works on all browsers)
        window.scrollTo(0, scrollY)
        
        // Restore focus to the element that opened the modal
        if (previousFocusRef.current && previousFocusRef.current.focus) {
          previousFocusRef.current.focus()
        }
      }
    }
  }, [isOpen])

  // Handle Escape key to close modal (accessibility best practice)
  useEffect(() => {
    if (!isOpen) return
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Always render modal container for better browser compatibility
  if (!isOpen) return null

  return (
    <div 
      className={styles.overlay} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="advisor-chat-title"
    >
      <div 
        ref={modalRef}
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        role="document"
      >
        {/* Close button is handled inside AdvisorChat header */}
        <AdvisorChat onClose={onClose} />
      </div>
    </div>
  )
}

