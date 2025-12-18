'use client'

import styles from '../HomepageContent.module.css'

/**
 * HowItWorksSection - Explains the 3-step process
 */
export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: 'Answer Questions',
      description: 'Tell us about your wellness goals, lifestyle, dietary preferences, and personal needs. Simple questions designed to understand what you\'re actually seeking.',
    },
    {
      step: 2,
      title: 'Get Personalized Matches',
      description: 'ZYNAVA analyzes thousands of supplements and identifies matches based on your responses. See exactly why each recommendation aligns with your goals.',
    },
    {
      step: 3,
      title: 'Explore & Decide',
      description: 'Review ingredient profiles, learn why supplements match your goals, and connect to trusted retailers. You control whether to purchase anything.',
    },
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>How ZYNAVA Works</h2>

      <div className={styles.grid3}>
        {steps.map((item) => (
          <div key={item.step} className={styles.card}>
            <div className={styles.stepBadge}>{item.step}</div>
            <h3 className={styles.stepTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

