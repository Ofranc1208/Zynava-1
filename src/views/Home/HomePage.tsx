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
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1a202c',
          marginBottom: '1rem',
          textAlign: 'left',
        }}>
          What is ZYNAVA?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#374151',
          lineHeight: '1.7',
          textAlign: 'left',
        }}>
          ZYNAVA is an AI-driven supplement finder that searches thousands of products from trusted retailers like Amazon, iHerb, and Vitamin Shoppe. We match you with options tailored to your goals like better sleep, more energy, immune support, or cleaner ingredients like organic and vegan. We also highlight top prices, sales, and subscription savings, so you can get what fits your needs and budget.
        </p>
      </section>
      
      {/* Long-form Homepage Content */}
      <HomepageContent />
    </main>
  )
}

export default HomePage
