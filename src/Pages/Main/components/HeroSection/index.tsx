'use client'

import HeroHeading from './HeroHeading'
import HeroButtons from './HeroButtons'
import HeroFooterText from './HeroFooterText'

export default function HeroSection() {
  return (
    <section style={{
      paddingTop: '2rem',
      paddingBottom: '3rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e9f9f1 50%, #f0fdf4 100%)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'radial-gradient(circle at 20% 80%, rgba(5, 150, 105, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <HeroHeading />
        <HeroButtons />
        <HeroFooterText />
      </div>
    </section>
  )
}

