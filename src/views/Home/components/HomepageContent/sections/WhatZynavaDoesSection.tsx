'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'

/**
 * WhatZynavaDoesSection - Describes ZYNAVA's independent approach
 * Full text for SEO with natural keyword integration
 */
export default function WhatZynavaDoesSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const preview = 'We analyze thousands of supplements based on their ingredients, not marketing budgets. You get personalized matches for vitamins, minerals, probiotics, and specialty supplements based on your goals.'
  
  const fullText = `We evaluate and analyze thousands of supplements across trusted health food stores, vitamin retailers, and natural supplement stores—all without financial incentive influencing our recommendations. Our focus is ingredient-level transparency, not brand recognition or marketing narratives. Every recommendation is rooted in your personal wellness goals and detailed ingredient profiles.

Whether you're looking for vitamin B12 supplements, vitamin D3, vitamin C, omega-3 fish oil, probiotics for gut health, collagen for skin and joints, melatonin for sleep, curcumin turmeric, creatine for fitness, or antioxidant formulas—ZYNAVA matches you with supplements that may support your stated wellness goals based on structured questionnaire responses.

You maintain complete control: exploring recommendations, researching products, and deciding whether to purchase from trusted retailers. ZYNAVA never sells supplements directly—we're purely an independent guidance platform focused on education and empowering informed decisions.

Our approach inverts the typical supplement shopping experience. Instead of starting with a brand and hoping their products fit your needs, you start with your specific goals and we identify products that genuinely align with what you're seeking. This ingredient-first methodology puts you in the driver's seat of your wellness journey, whether you're shopping at health food stores near you or buying vitamins online.`

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>What ZYNAVA Does</h2>

      <div className={styles.card}>
        <h3 className={styles.cardTitleLarge}>Independent, Ingredient-Focused Supplement Guidance</h3>
        
        <p className={styles.cardText}>
          <span className={isExpanded ? expandStyles.hidden : expandStyles.preview}>
            {preview}
          </span>
          <span 
            className={`${expandStyles.fullContent} ${isExpanded ? expandStyles.visible : ''}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {fullText}
          </span>
        </p>
        
        {/* SEO: Full text in DOM */}
        <span className={expandStyles.seoHidden} aria-hidden="true">
          {fullText}
        </span>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={expandStyles.readMoreBtn}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
          <span className={expandStyles.chevron}>{isExpanded ? '↑' : '↓'}</span>
        </button>
      </div>
    </section>
  )
}
