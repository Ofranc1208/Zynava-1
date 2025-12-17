'use client'

import HeroBackgroundContainer from '../hero-background'

export default function HomeHeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '25.6vh', // 20% reduced for mobile (32vh * 0.8)
      maxHeight: '25.6vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      margin: 0,
      paddingTop: '0.8rem',
      paddingBottom: '0.8rem'
    }}
    className="hero-section-responsive"
    >
      <HeroBackgroundContainer />
      
      {/* Banner Overlay - Left side, no background */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '1rem',
        zIndex: 4,
        maxWidth: '320px'
      }}>
            <h2 style={{
              fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 0.36rem 0', /* Reduced by another 10% from 0.4rem */
              textTransform: 'none',
              lineHeight: 1.15,
              fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              textShadow: '0 3px 8px rgba(0, 0, 0, 0.9)',
              letterSpacing: '-0.01em'
            }}>
              Find the Right Supplement
            </h2>
        <p style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
          color: '#ffffff',
          margin: '0',
          lineHeight: 1.4,
          fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.85)',
          fontWeight: '600'
        }}>
          No guesswork. Never overpay.
        </p>
        <p style={{
          fontSize: 'clamp(0.85rem, 2.04vw, 1.02rem)', /* Reduced by 15% */
          color: '#ffffff',
          margin: '0.27rem 0 0',
          lineHeight: 1.4,
          fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)',
          opacity: 0.95,
          fontWeight: '500',
          maxWidth: '100%',
          wordWrap: 'break-word'
        }}>
          100% price match guaranteed.
        </p>
        <p style={{
          fontSize: 'clamp(0.81rem, 1.87vw, 0.935rem)', /* Reduced by 15% */
          color: '#ffffff',
          margin: '0.27rem 0 0',
          lineHeight: 1.3,
          fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)',
          opacity: 0.9,
          fontWeight: '500',
          maxWidth: '100%',
          wordWrap: 'break-word'
        }}>
          30,000+ supplements analyzed by Z-SCORE™
        </p>
      </div>
    </section>
  )
}

