'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookie_consent')
    const consentDate = localStorage.getItem('cookie_consent_date')
    
    if (consent === 'true' && consentDate) {
      // Check if 30 days have passed
      const date = new Date(consentDate)
      const now = new Date()
      const daysDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      
      if (daysDiff < 30) {
        // Consent still valid, don't show banner
        return
      }
    }
    
    // Show banner if no consent or consent expired
    setIsVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true')
    localStorage.setItem('cookie_consent_date', new Date().toISOString())
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    localStorage.setItem('cookie_consent_date', new Date().toISOString())
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.06)',
        padding: '0.75rem 1rem',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontSize: '0.8rem',
            color: '#4b5563',
            lineHeight: '1.4',
            margin: 0,
            textAlign: 'center',
          }}
        >
          We use cookies to improve your experience.{' '}
          <Link
            href="/privacy"
            style={{
              color: '#ff6b35',
              textDecoration: 'none',
            }}
          >
            Privacy
          </Link>
          {' '}·{' '}
          <Link
            href="/terms"
            style={{
              color: '#ff6b35',
              textDecoration: 'none',
            }}
          >
            Terms
          </Link>
        </p>
        
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <button
            onClick={handleAccept}
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#ffffff',
              backgroundColor: '#ff6b35',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e55a2b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6b35'
            }}
          >
            Accept
          </button>
          
          <button
            onClick={handleDecline}
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              fontWeight: '500',
              color: '#6b7280',
              backgroundColor: 'transparent',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

