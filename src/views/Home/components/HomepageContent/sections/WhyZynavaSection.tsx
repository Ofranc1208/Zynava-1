'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface CardData {
  title: string
  preview: string
  fullText: string
  ctaText: string
}

const cards: CardData[] = [
  {
    title: 'The Problem',
    preview: 'Thousands of supplements. Conflicting claims. Aggressive marketing. How do you choose?',
    fullText: `The supplement market overwhelms consumers with thousands of products, conflicting information, and aggressive marketing. Walk into any health food store or browse any vitamin retailer online—you'll find hundreds of options for vitamin B12 alone. Add vitamin D, omega-3 fish oil, probiotics, collagen, melatonin, magnesium, and specialty supplements, and the choices become paralyzing.

Every brand claims to be the best. Every product promises results. Celebrity endorsements compete with influencer recommendations. One source says you need more vitamin D; another says you're getting too much. Probiotic marketing touts billions of CFUs without explaining which strains actually matter for your goals.

People spend hours researching at health food stores, comparing labels, cross-referencing reviews, reading ingredient lists—only to feel uncertain about their final choice. The sheer volume of options, combined with conflicting expert opinions and relentless advertising, leads many to give up entirely or make expensive purchases they later regret.

The supplement industry profits from this confusion. ZYNAVA exists to end it.`,
    ctaText: 'Find my solution',
  },
  {
    title: 'Our Solution',
    preview: 'We simplify supplement decisions through ingredient transparency and personalized guidance.',
    fullText: `ZYNAVA simplifies supplement decisions by focusing on what actually matters: ingredients, not marketing. We provide personalized guidance based on your specific wellness goals—whether that's better sleep with melatonin, more energy with vitamin B12, stronger immunity with vitamin C, improved gut health with probiotics, or joint support with collagen.

Our approach is different from typical supplement stores or vitamin retailers. We don't push products based on profit margins or brand partnerships. Instead, we analyze ingredients, compare formulations, and match you with supplements that align with your stated goals.

When you use ZYNAVA, you get:
• Personalized recommendations based on your questionnaire responses
• Ingredient-level transparency showing exactly what's in each product
• Clear explanations of why specific supplements match your goals
• Connections to trusted retailers where you can purchase if you choose

Our mission is to transform the overwhelming supplement shopping experience into a confident, informed journey. You'll understand exactly what you're putting in your body, why we recommended it, and what the research suggests about its efficacy.

No more guessing. No more confusion. Just clarity.`,
    ctaText: 'Try it now',
  },
]

interface WhyZynavaSectionProps {
  onOpenAdvisor?: () => void
}

/**
 * WhyZynavaSection - The problem and our solution
 * SEO-optimized with 400+ words
 */
export default function WhyZynavaSection({ onOpenAdvisor }: WhyZynavaSectionProps) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Why ZYNAVA Exists</h2>

      <div className={styles.grid2}>
        {cards.map((card, index) => {
          const isExpanded = expandedCards.has(index)
          // Red for Problem (index 0), Emerald for Solution (index 1)
          const cardClass = index === 0 ? styles.cardRed : styles.cardEmerald
          
          return (
            <article key={index} className={cardClass}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              
              <p className={styles.cardText}>
                <span className={isExpanded ? expandStyles.hidden : expandStyles.preview}>
                  {card.preview}
                </span>
                <span 
                  className={`${expandStyles.fullContent} ${isExpanded ? expandStyles.visible : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {card.fullText}
                </span>
              </p>
              
              <span className={expandStyles.seoHidden} aria-hidden="true">
                {card.fullText}
              </span>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                <button
                  onClick={() => toggleCard(index)}
                  className={expandStyles.readMoreBtn}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                  <span className={expandStyles.chevron}>{isExpanded ? '↑' : '↓'}</span>
                </button>
                <ExploreButton 
                  text={card.ctaText} 
                  onClick={onOpenAdvisor}
                  variant={index === 0 ? 'emerald-outline' : 'emerald'}
                />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
