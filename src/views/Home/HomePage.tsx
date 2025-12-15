'use client'

import { useState, useEffect } from 'react'
import HeroSection from './components/Hero'
import NavigationBar from './components/NavigationBar'
import TrustBadge from './components/Hero/hero-badge'
import SupplementAdvisorCard from './components/SupplementAdvisor'
import WhyChooseSection from './components/WhyChoose'

export function HomePage() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)

    return () => {
      window.removeEventListener('resize', checkIsDesktop)
    }
  }, [])

  return (
    <main>
      <HeroSection />
      
      {/* Stacked layout: Chat card, Stars, Navigation bar - vertical on all screen sizes */}
      <div style={{
        width: '100%',
        maxWidth: isDesktop ? '700px' : '600px',
        margin: '0 auto',
        padding: '1.5rem 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem'
      }}>
        {/* Row 1: Chat section - larger on desktop */}
        <div style={{ 
          width: '100%',
          maxWidth: isDesktop ? '650px' : '500px'
        }}>
          <SupplementAdvisorCard />
        </div>
        
        {/* Row 2: Stars */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}>
          <TrustBadge />
        </div>
        
        {/* Row 3: Navigation bar (Flash Deals, Top Seller, Bundle Deals) */}
        <div style={{ 
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ width: '100%' }}>
            <NavigationBar />
          </div>
        </div>
      </div>
      
      <WhyChooseSection />
    </main>
  )
}

export default HomePage
