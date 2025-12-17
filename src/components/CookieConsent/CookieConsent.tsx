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
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.25rem 1.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.9rem',
            color: '#374151',
            lineHeight: '1.6',
            margin: 0,
            textAlign: 'center',
          }}
        >
          We use cookies to improve your experience and track affiliate referrals. By using Zynava, you agree to our{' '}
          <Link
            href="/privacy"
            style={{
              color: '#ff6b35',
              textDecoration: 'none',
              fontWeight: '500',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            Privacy Policy
          </Link>
          {' '}and{' '}
          <Link
            href="/terms"
            style={{
              color: '#ff6b35',
              textDecoration: 'none',
              fontWeight: '500',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            Terms
          </Link>
          .
        </p>
        
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleAccept}
            style={{
              padding: '0.625rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#ffffff',
              backgroundColor: '#ff6b35',
              border: '2px solid #ff6b35',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minHeight: '44px',
              minWidth: '120px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e55a2b'
              e.currentTarget.style.borderColor = '#e55a2b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6b35'
              e.currentTarget.style.borderColor = '#ff6b35'
            }}
          >
            Accept
          </button>
          
          <button
            onClick={handleDecline}
            style={{
              padding: '0.625rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: '#4b5563',
              backgroundColor: 'transparent',
              border: '2px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minHeight: '44px',
              minWidth: '120px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb'
              e.currentTarget.style.borderColor = '#9ca3af'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = '#d1d5db'
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

