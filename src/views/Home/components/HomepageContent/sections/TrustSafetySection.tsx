'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

/**
 * TrustSafetySection - Trust, transparency, and non-sponsored commitment
 * SEO-optimized with 200+ words
 */
export default function TrustSafetySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const preview = 'Non-sponsored recommendations. No medical claims. Education so you can make informed supplement decisions.'
  
  const fullText = `What We're Not:

• Not Medical Advice — ZYNAVA doesn't diagnose, treat, cure, or prevent disease. Our guidance on vitamins, minerals, probiotics, omega-3s, collagen, melatonin, and other supplements is educational only. Always consult healthcare providers before starting any supplement regimen, especially if you have existing health conditions or take medications.

• Not a Supplement Retailer — We don't sell vitamins, probiotics, collagen, or any supplements directly. Our recommendations are non-sponsored and based purely on ingredient analysis and your stated wellness goals—not brand partnerships or advertising revenue.

• Not a Replacement for Healthcare — Professional medical guidance, nutrition counseling, and regular healthcare checkups come first. ZYNAVA supplements—never replaces—your relationship with qualified healthcare providers.

What We Commit To:

• Non-sponsored, ingredient-focused recommendations for vitamins, minerals, and specialty supplements
• Objective evaluation without brand bias or hidden agendas
• Transparent language: we say "may support," never guaranteed results
• Clear reasoning for every recommendation so you can verify our logic
• Your autonomy and informed decision-making as our highest priority
• Privacy protection—we never sell your wellness data`

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Trust & Transparency</h2>

      <div className={styles.card}>        
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
        
        <span className={expandStyles.seoHidden} aria-hidden="true">
          {fullText}
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={expandStyles.readMoreBtn}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Read less' : 'Read more'}
            <span className={expandStyles.chevron}>{isExpanded ? '↑' : '↓'}</span>
          </button>
          <ExploreButton text="Learn more" />
        </div>
      </div>
    </section>
  )
}
