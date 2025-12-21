'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface AudienceData {
  title: string
  preview: string
  fullText: string
  ctaText: string
}

const audiences: AudienceData[] = [
  {
    title: 'Overwhelmed Shoppers',
    preview: 'Drowning in vitamin options? We cut through thousands of products to find what fits.',
    fullText: `You've stood in the supplement aisle at your local health food store feeling completely lost. Hundreds of vitamin B12 products. Dozens of probiotic brands. Countless omega-3 options. Conflicting label claims. No clear answer about which one is actually right for you.

ZYNAVA gives you a curated shortlist based on your specific wellness goals—not what's on sale, not what has the biggest marketing budget, and not what the store makes the highest margin on. Just supplements that match your needs based on their actual ingredients.`,
    ctaText: 'Simplify my search',
  },
  {
    title: 'First-Time Buyers',
    preview: 'New to vitamins and supplements? Start with clarity, not confusion.',
    fullText: `Don't know a probiotic from a prebiotic? Can't tell methylcobalamin from cyanocobalamin? Not sure whether you need vitamin D2 or D3? No problem.

Our questionnaire identifies what supplements might help based on your wellness goals, and explains everything in plain language. We break down complex ingredient information into understandable insights. No prior supplement knowledge required—just answer questions about what you're trying to improve, and we'll guide you through the options with clear explanations every step of the way.`,
    ctaText: 'Guide me',
  },
  {
    title: 'Ingredient-Savvy Users',
    preview: 'Already understand supplements? Find quality products faster with our analysis tools.',
    fullText: `You understand the difference between methylated B vitamins and synthetic forms. You check for third-party testing certifications. You compare CFU counts in probiotics and scrutinize collagen peptide sources. You look for bioavailable mineral forms and avoid unnecessary fillers.

Our ingredient-level data and analysis tools help you evaluate supplement options efficiently. Compare formulations side-by-side. See exactly what's in each product. Save hours of label-reading and cross-referencing. You bring the expertise; we bring the organized data.`,
    ctaText: 'Show me data',
  },
  {
    title: 'Skeptical Researchers',
    preview: 'Want facts, not marketing hype? We show our reasoning so you can verify it yourself.',
    fullText: `You don't trust flashy marketing claims. You want to see the actual evidence before adding any vitamin or supplement to your routine. You ask questions like "What does the research actually say about this ingredient?" and "Why is this form better than that one?"

Every ZYNAVA recommendation comes with clear reasoning based on publicly available research. See exactly why we matched a product to your goals. Understand the ingredient science. Question our logic. Verify our sources. We operate with complete transparency because skepticism makes for better supplement decisions.`,
    ctaText: 'See the facts',
  },
]

interface WhoWeServeSectionProps {
  onOpenAdvisor?: () => void
}

/**
 * WhoWeServeSection - Target audiences
 * SEO-optimized with 350+ words
 */
export default function WhoWeServeSection({ onOpenAdvisor }: WhoWeServeSectionProps) {
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
      <h2 className={styles.sectionTitle}>Who This Is For</h2>

      <div className={styles.grid2}>
        {audiences.map((audience, index) => {
          const isExpanded = expandedCards.has(index)
          // All audience cards use consistent Blue for "Who We Serve" theme
          const cardClass = styles.cardBlue
          const buttonVariant = 'indigo' as const
          
          return (
            <article key={audience.title} className={cardClass}>
              <h3 className={styles.stepTitle}>{audience.title}</h3>
              
              <p className={styles.cardText}>
                <span className={isExpanded ? expandStyles.hidden : expandStyles.preview}>
                  {audience.preview}
                </span>
                <span 
                  className={`${expandStyles.fullContent} ${isExpanded ? expandStyles.visible : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {audience.fullText}
                </span>
              </p>
              
              <span className={expandStyles.seoHidden} aria-hidden="true">
                {audience.fullText}
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
                <ExploreButton text={audience.ctaText} onClick={onOpenAdvisor} variant={buttonVariant} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
