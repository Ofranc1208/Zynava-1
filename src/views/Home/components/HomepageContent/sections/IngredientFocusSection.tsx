'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface IngredientFocusSectionProps {
  onOpenAdvisor?: () => void
}

/**
 * IngredientFocusSection - Why ingredients matter more than brands
 * SEO-optimized with 250+ words
 */
export default function IngredientFocusSection({ onOpenAdvisor }: IngredientFocusSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const preview = 'Not all ingredients are equal. Methylcobalamin vs Cyanocobalamin. D3 vs D2. Glycinate vs Oxide. The form matters for absorption and efficacy.'
  
  const fullText = `Understanding ingredient forms transforms supplement shopping from guessing to informed decision-making. Here's what most supplement marketing won't tell you:

Vitamin B12 Forms:
• Methylcobalamin is the active, bioavailable form your body can use directly
• Cyanocobalamin is synthetic and requires conversion—some people have genetic variations that make this conversion difficult

Vitamin D Forms:
• Vitamin D3 (cholecalciferol) is the form naturally produced by your skin and is more effective at raising blood levels
• Vitamin D2 (ergocalciferol) is plant-derived but less potent and shorter-lasting

Magnesium Forms:
• Magnesium glycinate offers superior absorption and is gentle on the stomach
• Magnesium oxide has poor absorption (4-5%) despite being cheap and common
• Magnesium citrate falls in between and may have digestive effects

Probiotic Considerations:
• Different strains serve different purposes—Lactobacillus acidophilus for general gut health, Bifidobacterium longum for immune support
• CFU count matters less than strain selection and viability

Collagen Types:
• Type I and III support skin, hair, and nails
• Type II targets joint and cartilage health

ZYNAVA provides this ingredient-level education for every recommendation. You see exactly what's in each product, understand the differences between forms, and learn what research suggests about bioavailability and efficacy. No more guessing at the supplement aisle—you'll know exactly what you're buying and why.`

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Why Ingredients Matter</h2>

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
          <ExploreButton text="Compare ingredients" onClick={onOpenAdvisor} />
        </div>
      </div>
    </section>
  )
}
