'use client'

export default function HeroTitle() {
  return (
    <h1 style={{ 
      fontWeight: '700', 
      color: 'white', 
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    }}>
      Perform at Your Peak
    </h1>
  )
}

