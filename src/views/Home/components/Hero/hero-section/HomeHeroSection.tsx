'use client'

import HeroBackgroundContainer from '../hero-background'

export default function HomeHeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '23vh', // Reduced by 10% from 25.6vh
      maxHeight: '23vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      margin: 0,
      paddingTop: '0.4rem',
      paddingBottom: '0.4rem'
    }}
    className="hero-section-responsive"
    >
      <HeroBackgroundContainer />
    </section>
  )
}

