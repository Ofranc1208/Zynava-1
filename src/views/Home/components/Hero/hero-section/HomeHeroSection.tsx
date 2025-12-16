'use client'

import HeroBackgroundContainer from '../hero-background'

export default function HomeHeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '32vh',
      maxHeight: '32vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      margin: 0,
      paddingTop: '0.8rem',
      paddingBottom: '0.8rem'
    }}>
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
              fontWeight: '950',
              color: '#ffffff',
              margin: '0 0 0.8rem 0',
              textTransform: 'none',
              lineHeight: 1.15,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
              textShadow: '0 3px 8px rgba(0, 0, 0, 0.9)',
              letterSpacing: '-0.02em'
            }}>
              Find the Right Supplement
            </h2>
        <p style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
          color: '#ffffff',
          margin: '0',
          lineHeight: 1.4,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.85)',
          fontWeight: '600'
        }}>
          No guesswork. Never overpay.
        </p>
        <p style={{
          fontSize: 'clamp(1rem, 2.4vw, 1.2rem)',
          color: '#ffffff',
          margin: '0.6rem 0 0',
          lineHeight: 1.4,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)',
          opacity: 0.95,
          fontWeight: '500'
        }}>
          100% price match guaranteed.
        </p>
        <p style={{
          fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
          color: '#ffffff',
          margin: '0.6rem 0 0',
          lineHeight: 1.3,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)',
          opacity: 0.9,
          fontWeight: '500'
        }}>
          30,000+ supplements analyzed by Z-SCORE™
        </p>
      </div>
    </section>
  )
}

