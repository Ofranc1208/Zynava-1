'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'

/**
 * ResponsibleWellnessSection - Responsible wellness approach
 * Full text for SEO with natural keyword integration
 */
export default function ResponsibleWellnessSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const preview = 'Education over promises. Guidance over hype. Respect for your autonomy. We help you understand vitamins, minerals, and supplements so your choices reflect your values, not marketing.'
  
  const fullText = `ZYNAVA commits to education over promises, guidance over hype, and respect for your autonomy in supplement decisions. The wellness industry too often profits from uncertainty and urgency—pushing vitamins, probiotics, collagen, and other supplements with exaggerated claims. We operate differently.

Supplements—whether vitamin B12, vitamin D, vitamin C, omega-3 fish oil, probiotics for gut health, collagen for skin and joints, melatonin for sleep, curcumin for inflammation, or creatine for fitness—can support wellness exploration. But never as prescriptive solutions or replacements for professional healthcare. Individual differences matter—what supports one person may be unsuitable for another. That's why we focus on your specific goals and circumstances rather than one-size-fits-all vitamin recommendations.

We believe you make better wellness decisions with time, clear information, and support. Our role is helping you understand the supplement landscape—vitamin forms, probiotic strains, ingredient quality, purity standards, and what research suggests—so your choices reflect your values, not marketing narratives from supplement stores. For personalized dosage guidance, always consult your healthcare provider.

The wellness journey is personal and ongoing. ZYNAVA is designed to be a trusted resource you can return to as your goals evolve. Whether you're exploring vitamins for the first time, refining an existing supplement regimen, or researching new products at health food stores and vitamin shops—we provide the ingredient-focused information you need to make confident, informed decisions.`

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>A Responsible Approach to Vitamins & Supplements</h2>

      <div className={styles.cardAmber}>
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
