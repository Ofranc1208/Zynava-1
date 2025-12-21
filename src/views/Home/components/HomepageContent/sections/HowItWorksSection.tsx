'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface StepData {
  step: number
  title: string
  preview: string
  fullText: string
  ctaText: string
}

const steps: StepData[] = [
  {
    step: 1,
    title: 'Answer Questions',
    preview: 'Tell us your goals—energy, sleep, immunity, fitness, or general wellness.',
    fullText: `Our questionnaire covers your wellness goals, dietary preferences, lifestyle factors, and any supplements you currently take. We ask simple, straightforward questions designed to understand your unique situation:

• What wellness goals are most important to you? (Energy, sleep, immunity, digestion, fitness, skin health, cognitive function, stress management)
• Do you have any dietary restrictions? (Vegan, vegetarian, gluten-free, allergen concerns)
• What supplements have you tried before? What worked, what didn't?
• Are you looking for specific nutrients like vitamin B12, vitamin D, omega-3s, or probiotics?

The questionnaire takes about 3-5 minutes. No medical jargon. No confusing terminology. Just clear questions that help us understand what you're actually seeking so we can provide relevant, personalized recommendations.`,
    ctaText: 'Start here',
  },
  {
    step: 2,
    title: 'Get Matches',
    preview: 'We analyze thousands of products and show you what fits your goals.',
    fullText: `Our Quality and Safety algorithm evaluates thousands of supplements from trusted retailers, analyzing ingredient quality, purity standards, third-party testing, and brand reputation to find products that align with your questionnaire responses.

For each recommendation, you'll see exactly why we matched it to your goals:

• The specific ingredients and their forms (methylcobalamin B12 vs cyanocobalamin, vitamin D3 vs D2)
• Quality indicators like third-party testing and clean labels
• What public research suggests about ingredient benefits
• Any relevant considerations for your dietary preferences

This isn't vague marketing like "best seller" or "customer favorite." It's actual ingredient-quality reasoning you can verify yourself. We show our work so you can understand—and question—our logic. For dosage guidance, consult your healthcare provider.`,
    ctaText: 'Get my matches',
  },
  {
    step: 3,
    title: 'Decide & Shop',
    preview: 'Compare options side-by-side, then connect to trusted retailers when ready.',
    fullText: `Review your matched supplements in detail. Compare ingredient quality, purity standards, and formulations side-by-side. Learn about different forms of vitamins and minerals—why magnesium glycinate absorbs differently than oxide, why some probiotic strains target gut health while others support immunity.

When you're ready to purchase, we connect you directly to trusted retailers including health food stores, vitamin shops, and online supplement retailers. You choose where to buy and when to buy.

There's no rush and no pressure. Research at your own pace. Save your results. Come back later if you need more time. ZYNAVA is a guidance platform, not a sales funnel. Whether you purchase something or not, we consider it a success if you leave more informed than when you arrived. Remember to consult your healthcare provider for personalized dosage recommendations.`,
    ctaText: 'Start shopping',
  },
]

interface HowItWorksSectionProps {
  onOpenAdvisor?: () => void
}

/**
 * HowItWorksSection - The 3-step process
 * SEO-optimized with 350+ words
 */
export default function HowItWorksSection({ onOpenAdvisor }: HowItWorksSectionProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set())

  const toggleStep = (step: number) => {
    setExpandedSteps(prev => {
      const next = new Set(prev)
      if (next.has(step)) {
        next.delete(step)
      } else {
        next.add(step)
      }
      return next
    })
  }

  return (
    <section id="how-it-works" className={styles.section}>
      <h2 className={styles.sectionTitle}>How It Works</h2>

      <div className={styles.grid3}>
        {steps.map((item) => {
          const isExpanded = expandedSteps.has(item.step)
          // All steps use consistent Turquoise for "Process" theme
          const cardClass = styles.cardTurquoise
          const badgeClass = expandStyles.stepBadgeTurquoise
          
          return (
            <article key={item.step} className={cardClass}>
              <div className={badgeClass}>Step {item.step}</div>
              
              <h3 className={expandStyles.cardTitleCentered}>{item.title}</h3>
              
              <p className={styles.cardText}>
                <span className={isExpanded ? expandStyles.hidden : expandStyles.preview}>
                  {item.preview}
                </span>
                <span 
                  className={`${expandStyles.fullContent} ${isExpanded ? expandStyles.visible : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {item.fullText}
                </span>
              </p>
              
              <span className={expandStyles.seoHidden} aria-hidden="true">
                {item.fullText}
              </span>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                <button
                  onClick={() => toggleStep(item.step)}
                  className={expandStyles.readMoreBtn}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                  <span className={expandStyles.chevron}>{isExpanded ? '↑' : '↓'}</span>
                </button>
                <ExploreButton 
                  text={item.ctaText} 
                  onClick={onOpenAdvisor}
                  variant="turquoise"
                />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
