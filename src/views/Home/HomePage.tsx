'use client'

import { useState, useEffect } from 'react'
import HeroSection from './components/Hero'
import TopBrandsBanner from './components/TopBrandsBanner'
import SupplementAdvisorCard from './components/SupplementAdvisor'
import HomepageContent from './components/HomepageContent'

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
      
      {/* Top Brands Banner */}
      <TopBrandsBanner />
      
      {/* Stacked layout: Chat card - vertical on all screen sizes */}
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
        {/* Chat section - larger on desktop */}
        <div style={{ 
          width: '100%',
          maxWidth: isDesktop ? '650px' : '500px'
        }}>
          <SupplementAdvisorCard />
        </div>
      </div>

      {/* Long-form Homepage Content */}
      <HomepageContent />
    </main>
  )
}

export default HomePage
