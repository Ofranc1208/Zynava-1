'use client'

import { useState } from 'react'
import styles from '../HomepageContent.module.css'
import expandStyles from './ExpandableContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface FeatureData {
  title: string
  preview: string
  fullText: string
  ctaText: string
}

const features: FeatureData[] = [
  {
    title: 'No Account Required',
    preview: 'Use ZYNAVA anonymously. No sign-up needed to get supplement recommendations.',
    fullText: `Explore our full questionnaire and get personalized supplement recommendations without creating an account. No email required. No passwords. No barriers to accessing helpful information about vitamins, minerals, probiotics, and specialty supplements.

Many health and wellness platforms force you to create an account before showing any useful content. We believe that's backwards. You should be able to explore, learn, and get recommendations before deciding whether to engage further.

When and if you choose to create an account to save your results or track your supplement research over time, that's entirely your decision. We never push.`,
    ctaText: 'Try it free',
  },
  {
    title: 'Your Data Stays Private',
    preview: 'We don\'t sell your wellness information to third parties. Ever.',
    fullText: `Your questionnaire responses about supplement preferences, wellness goals, and health priorities are handled with complete confidentiality. We don't sell your data to supplement companies, advertisers, or data brokers.

Unlike many health and wellness platforms that monetize user data, ZYNAVA treats your information as truly private:
• No selling data to third-party marketers
• No aggressive email campaigns about vitamin sales
• No tracking you across the internet with retargeting ads
• No sharing your supplement research with brands

Your wellness journey is personal. We treat it that way.`,
    ctaText: 'Start privately',
  },
  {
    title: 'No Pressure to Buy',
    preview: 'We provide information and guidance. You decide what to do with it.',
    fullText: `ZYNAVA never pressures you to purchase supplements. Browse recommendations for vitamin B12, explore probiotic options, research collagen formulations, compare omega-3 products—all at your own pace without countdown timers, limited-time offers, or aggressive sales tactics.

Our role is education and guidance, not sales conversion. Whether you buy a supplement from one of our retail partners or not, we consider it a success if you leave more informed than when you arrived.

Take your time. Save your results. Come back later. Discuss with your healthcare provider. Do more research. There's no rush because we have no inventory to sell and no quotas to meet.`,
    ctaText: 'Browse freely',
  },
]

interface UserExperienceSectionProps {
  onOpenAdvisor?: () => void
}

/**
 * UserExperienceSection - Privacy, no pressure, user control
 * SEO-optimized with 300+ words
 */
export default function UserExperienceSection({ onOpenAdvisor }: UserExperienceSectionProps) {
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
      <h2 className={styles.sectionTitle}>Your Experience Matters</h2>

      <div className={styles.grid3}>
        {features.map((feature, index) => {
          const isExpanded = expandedCards.has(index)
          return (
            <article key={feature.title} className={styles.card}>
              <h3 className={styles.stepTitle}>{feature.title}</h3>
              
              <p className={styles.cardText}>
                <span className={isExpanded ? expandStyles.hidden : expandStyles.preview}>
                  {feature.preview}
                </span>
                <span 
                  className={`${expandStyles.fullContent} ${isExpanded ? expandStyles.visible : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {feature.fullText}
                </span>
              </p>
              
              <span className={expandStyles.seoHidden} aria-hidden="true">
                {feature.fullText}
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
                <ExploreButton text={feature.ctaText} onClick={onOpenAdvisor} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
