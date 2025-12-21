'use client'

import Image from 'next/image'
import styles from './TopBrandsBanner.module.css'
import { BRAND_LOGOS } from '../../constants'

/**
 * TopBrandsBanner - Scrolling brand logos ticker
 * 
 * Displays a horizontal scrolling ticker of brand logos.
 * Features infinite seamless loop animation with pause on hover.
 * 
 * Features:
 * - Seamless infinite scroll animation
 * - Pause on hover for better UX
 * - Fade edges for visual polish
 * - Reduced motion support
 * - Responsive design (smaller logos on mobile)
 * - TEST ONLY badge for development phase visibility
 * 
 * @returns The TopBrandsBanner component
 */
export default function TopBrandsBanner() {
  // Duplicate the logos for seamless loop, inserting "TEST ONLY" badges
  const logosWithTestBadge = BRAND_LOGOS.flatMap((brand, idx) => {
    // Insert TEST ONLY badge after every 4th logo
    if ((idx + 1) % 4 === 0) {
      return [brand, { type: 'test-badge' as const }]
    }
    return [brand]
  })
  
  const duplicatedLogos = [...logosWithTestBadge, ...logosWithTestBadge]

  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>Top Brands</h2>
        
        {/* Ticker Container */}
        <div className={styles.tickerWrapper}>
          <div className={styles.ticker}>
            {duplicatedLogos.map((item, index) => {
              // Check if this is a test badge or a logo
              if ('type' in item && item.type === 'test-badge') {
                return (
                  <div key={`test-badge-${index}`} className={styles.testBadge}>
                    TEST ONLY
                  </div>
                )
              }
              
              // Regular brand logo
              const brand = item as typeof BRAND_LOGOS[0]
              return (
                <div key={`${brand.alt}-${index}`} className={styles.tickerItem}>
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={44}
                    height={44}
                    className={styles.logoImage}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
