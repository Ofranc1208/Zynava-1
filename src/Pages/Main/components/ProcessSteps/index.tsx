'use client'

import StepGrid from './StepGrid'

export default function ProcessSteps() {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#ffffff',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-block',
            background: '#e8f5e8',
            border: '1px solid #09b44d',
            borderRadius: '24px',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#1a1a1a',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            How It Works
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1a1a1a',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #09b44d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            From Discovery to Results in 4 Simple Steps
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#6c757d',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Our science-backed approach ensures you get the right supplements for your wellness goals
          </p>
        </div>
        <StepGrid />
      </div>
    </section>
  )
}

