'use client'

import Link from 'next/link'
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
              fontSize: 'clamp(1.2rem, 3.2vw, 2rem)', // Reduced by 20%
              fontWeight: '900',
              color: '#ffffff',
              margin: '0 0 0.75rem 0',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              fontFamily: 'Poppins, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              AWAKEN VITALITY
            </h2>
        <p style={{
          fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
          color: '#ffffff',
          margin: '0 0 0.5rem 0',
          lineHeight: 1.4,
          fontFamily: 'Inter, sans-serif',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
        }}>
          Support your body naturally
        </p>
        <p style={{
          fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
          color: '#ffffff',
          margin: '0 0 1.5rem 0',
          lineHeight: 1.4,
          fontFamily: 'Inter, sans-serif',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
        }}>
          with premium supplements.
        </p>
        <Link 
          href="/products"
          style={{
            display: 'inline-block',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#dc2626',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b91c1c'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(220, 38, 38, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#dc2626'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.4)'
          }}
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  )
}

