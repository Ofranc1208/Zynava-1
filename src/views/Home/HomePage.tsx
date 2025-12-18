'use client'

import HeroSection from './components/Hero'
import TopBrandsBanner from './components/TopBrandsBanner'
import SupplementAdvisorCard from './components/SupplementAdvisor'
import HomepageContent from './components/HomepageContent'
import styles from './HomePage.module.css'

/**
 * HomePage - Main landing page component
 * 
 * Renders the complete home page with:
 * - Hero section with video background
 * - Top brands banner ticker
 * - Supplement Advisor chat card
 * - Long-form homepage content
 * 
 * Uses CSS modules for responsive behavior (SSR-safe).
 */
export function HomePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Top Brands Banner */}
      <TopBrandsBanner />
      
      {/* Supplement Advisor Card */}
      <div className={styles.advisorSection}>
        <div className={styles.advisorCard}>
          <SupplementAdvisorCard />
        </div>
      </div>
      
      {/* Long-form Homepage Content */}
      <HomepageContent />
    </main>
  )
}

export default HomePage
