'use client'

import { useEffect } from 'react'
import styles from './AdvisorModal.module.css'
import AdvisorChat from './AdvisorChat'

interface AdvisorModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdvisorModal({ isOpen, onClose }: AdvisorModalProps) {
  // Prevent body scroll when modal is open
  // Browser-compatible version
  useEffect(() => {
    if (typeof window === 'undefined' || !document?.body) return
    
    if (isOpen) {
      // Store original overflow value for restoration
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore original overflow value
        if (document?.body) {
          document.body.style.overflow = originalOverflow || 'unset'
        }
      }
    } else {
      if (document?.body) {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  // Always render modal container for better browser compatibility
  // Use CSS to hide/show instead of conditional rendering
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close button is handled inside AdvisorChat header */}
        <AdvisorChat onClose={onClose} />
      </div>
    </div>
  )
}

