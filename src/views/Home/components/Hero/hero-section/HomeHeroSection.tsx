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
              fontSize: 'clamp(1.2rem, 3.2vw, 2rem)',
              fontWeight: '900',
              color: '#ffffff',
              margin: '0 0 0.75rem 0',
              textTransform: 'none',
              lineHeight: 1.1,
              fontFamily: 'Poppins, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              Are You Confused?
            </h2>
        <p style={{
          fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
          color: '#ffffff',
          margin: '0',
          lineHeight: 1.35,
          fontFamily: 'Inter, sans-serif',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
        }}>
          Don&apos;t Be. Premium Supplemenst Brands.
        </p>
        <p style={{
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          color: '#ffffff',
          margin: '0.5rem 0 0',
          lineHeight: 1.35,
          fontFamily: 'Inter, sans-serif',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
          opacity: 0.95
        }}>
          Best Price Match Guaranteed.
        </p>
      </div>
    </section>
  )
}

