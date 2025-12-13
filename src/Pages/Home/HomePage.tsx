'use client'

import HeroSection from './components/Hero'
import NavigationBar from './components/NavigationBar'
import TrustBadge from './components/Hero/hero-badge'
import WhyChooseSection from './components/WhyChoose'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <NavigationBar />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0.6rem 0 0.15rem 0'
      }}>
        <TrustBadge />
      </div>
      <WhyChooseSection />
    </main>
  )
}
