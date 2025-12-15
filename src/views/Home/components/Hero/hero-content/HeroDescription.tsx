'use client'

export default function HeroDescription() {
  return (
    <p style={{ 
      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
      color: '#f3f4f6',
      marginTop: '1rem',
      marginBottom: '2rem',
      lineHeight: '1.6',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
    }}>
      It&apos;s your health. Optimize it today. No gimmicks, just science-backed formulations that deliver real results.
    </p>
  )
}

