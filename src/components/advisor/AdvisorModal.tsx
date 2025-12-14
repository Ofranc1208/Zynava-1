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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

