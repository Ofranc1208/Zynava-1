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
 * 
 * @returns The TopBrandsBanner component
 */
export default function TopBrandsBanner() {
  // Duplicate the logos for seamless loop
  const duplicatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS]

  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>Top Brands</h2>
        
        {/* Ticker Container */}
        <div className={styles.tickerWrapper}>
          <div className={styles.ticker}>
            {duplicatedLogos.map((brand, index) => (
              <div key={`${brand.alt}-${index}`} className={styles.tickerItem}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={44}
                  height={44}
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
