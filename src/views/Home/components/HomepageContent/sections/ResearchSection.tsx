'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface ResearchSectionProps {
  onOpenAdvisor?: () => void
}

/**
 * ResearchSection - Public research made accessible
 * Unique focus: How we curate and simplify supplement research
 */
export default function ResearchSection({ onOpenAdvisor }: ResearchSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const preview = 'We curate public research on vitamins, minerals, and supplements—then break it down into bite-sized, easy-to-understand insights.'
  
  const fullText = `Supplement research exists in academic journals, clinical studies, and government databases—but it's often dense, technical, and hard to access. ZYNAVA changes that by bringing this public research directly to you in a digestible format.

What We Curate:

• Published clinical studies on vitamin efficacy and absorption rates
• Research on probiotic strains and their specific health applications
• Studies comparing different forms of supplements (methylcobalamin vs cyanocobalamin, D3 vs D2, magnesium glycinate vs oxide)
• Safety data and recommended dosage ranges from peer-reviewed sources
• Emerging research on collagen peptides, omega-3 fatty acids, curcumin bioavailability, and more

How We Simplify It:

We translate complex scientific findings into plain language. Instead of wading through 50-page studies, you get the key takeaways: what the research suggests, what it means for your goals, and what questions remain unanswered.

Our team reviews publicly available research from sources like PubMed, NIH databases, and peer-reviewed nutrition journals. We don't create the research—we organize it, summarize it, and connect it to real supplement products so you can make evidence-informed decisions.

This means when you see a recommendation for a specific vitamin B12 form or a particular probiotic strain, you're not just getting our opinion—you're getting insights backed by publicly available scientific literature, presented in a way that's actually useful.`

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Research You Can Actually Use</h2>

      <div className={styles.cardAlt}>        
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
          <ExploreButton text="See how it works" onClick={onOpenAdvisor} />
        </div>
      </div>
    </section>
  )
}

