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
 * - What ZYNAVA Is section
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
      
      {/* What ZYNAVA Is - Concise Value Proposition */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1a202c',
          marginBottom: '1rem',
        }}>
          What is ZYNAVA?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#374151',
          lineHeight: '1.7',
          marginBottom: '0.75rem',
        }}>
          ZYNAVA is an AI-powered supplement comparison tool. We analyze ingredients from 30,000+ products and match you with supplements that align with your wellness goals.
        </p>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          lineHeight: '1.6',
        }}>
          We don&apos;t sell products ourselves—we route you to trusted retailers like Amazon, iHerb, and Vitamin Shoppe where you can make your own informed purchase decisions.
        </p>
      </section>
      
      {/* Long-form Homepage Content */}
      <HomepageContent />
    </main>
  )
}

export default HomePage
