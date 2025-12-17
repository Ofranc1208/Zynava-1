'use client'

import Image from 'next/image'
import styles from './TopBrandsBanner.module.css'

// Brand logos from the Banner folder
const brandLogos = [
  { src: '/assets/images/Banner/icons8-iherb-48.png', alt: 'iHerb' },
  { src: '/assets/images/Banner/icons8-latex-48.png', alt: 'Latex' },
  { src: '/assets/images/Banner/icons8-nutanix-48.png', alt: 'Nutanix' },
  { src: '/assets/images/Banner/icons8-sass-48.png', alt: 'Sass' },
  { src: '/assets/images/Banner/icons8-taobao-48.png', alt: 'Taobao' },
  { src: '/assets/images/Banner/icons8-wattpad-48.png', alt: 'Wattpad' },
  { src: '/assets/images/Banner/icons8-zigbee-48.png', alt: 'Zigbee' },
  { src: '/assets/images/Banner/pngegg.png', alt: 'Brand' },
]

export default function TopBrandsBanner() {
  // Duplicate the logos for seamless loop
  const duplicatedLogos = [...brandLogos, ...brandLogos]

  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>Our Top Brands</h2>
        
        {/* Ticker Container */}
        <div className={styles.tickerWrapper}>
          <div className={styles.ticker}>
            {duplicatedLogos.map((brand, index) => (
              <div key={index} className={styles.tickerItem}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={43}
                  height={43}
                  className={styles.logoImage}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

