'use client'

import { useState } from 'react'
import ProcessingAnimation from '@/src/components/advisor/AdvisorChat/ProcessingAnimation'

export default function ProcessingTestPage() {
  const [step, setStep] = useState<'processing' | 'complete'>('processing')

  const handleComplete = () => {
    console.log('Processing complete!')
  }

  const handleViewResults = () => {
    console.log('Navigating to results...')
    alert('Would navigate to results page!')
  }

  const resetAnimation = () => {
    setStep('processing')
    // Force remount by changing key
    window.location.reload()
  }

  return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '1rem 2rem',
        paddingTop: '2rem',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
      <h1 style={{
        fontSize: '2.2rem',
        fontWeight: 800,
        marginBottom: '1.5rem',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f59e0b 50%, #ff6b35 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center',
        position: 'relative',
        animation: 'titleGlow 2s ease-in-out infinite alternate'
      }}>
        ✨ Processing Animation Test ✨
      </h1>
      
      <div style={{
        maxWidth: '500px',
        width: '100%'
      }}>
        <ProcessingAnimation 
          onComplete={handleComplete}
          onViewResults={handleViewResults}
        />
      </div>

      <button
        onClick={resetAnimation}
        style={{
          marginTop: '1.5rem',
          padding: '12px 28px',
          background: 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: '0.95rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
          transition: 'all 0.2s ease'
        }}
      >
        🔄 Reset Animation
      </button>

      <p style={{
        marginTop: '1rem',
        color: '#6b7280',
        fontSize: '0.9rem',
        textAlign: 'center',
        maxWidth: '400px',
        lineHeight: '1.5'
      }}>
        🚀 Test and perfect the processing animation!
      </p>
      
      <style jsx>{`
        @keyframes titleGlow {
          0% {
            filter: brightness(1) drop-shadow(0 0 5px rgba(255, 107, 53, 0.5));
            transform: scale(1);
          }
          100% {
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 107, 53, 0.8));
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  )
}
