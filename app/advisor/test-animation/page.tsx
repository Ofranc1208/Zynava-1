'use client'

import { useState } from 'react'
import ProcessingAnimation from '@/src/components/advisor/AdvisorChat/ProcessingAnimation'

export default function TestAnimationPage() {
  const [hasCompleted, setHasCompleted] = useState(false)
  const [hasViewedResults, setHasViewedResults] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const handleComplete = () => {
    console.log('Animation completed!')
    setHasCompleted(true)
  }

  const handleViewResults = () => {
    console.log('View results triggered!')
    setHasViewedResults(true)
    // Note: In production, this would navigate to /advisor/results
    // For testing, we just show the status message
  }

  const handleReset = () => {
    setHasCompleted(false)
    setHasViewedResults(false)
    // Force remount of ProcessingAnimation by changing key
    setAnimationKey(prev => prev + 1)
  }

  return (
    <div style={{ 
      padding: '2rem', 
      minHeight: '100vh', 
      background: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Processing Animation Test Page
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
          Test the loading animation independently
        </p>
        <button
          onClick={handleReset}
          style={{
            padding: '0.5rem 1rem',
            background: '#ff6b35',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Reset Animation
        </button>
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '600px',
        position: 'relative'
      }}>
        <ProcessingAnimation 
          key={animationKey}
          onComplete={handleComplete}
          onViewResults={handleViewResults}
        />
      </div>

      {(hasCompleted || hasViewedResults) && (
        <div style={{
          padding: '1rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          color: '#15803d',
          textAlign: 'center'
        }}>
          {hasCompleted && <p>✓ Animation completed!</p>}
          {hasViewedResults && <p>✓ View results triggered!</p>}
        </div>
      )}
    </div>
  )
}

