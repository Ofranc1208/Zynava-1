'use client'

import styles from '../HomepageContent.module.css'

/**
 * UserExperienceSection - Describes the calm, user-first experience
 */
export default function UserExperienceSection() {
  const features = [
    {
      title: 'No Pressure. No Account Required.',
      description: 'Explore ZYNAVA without creating an account. No aggressive retargeting, subscription traps, or pressure to buy immediately.',
    },
    {
      title: 'Privacy First',
      description: 'Your questionnaire responses are handled with care. You\'re not a data point for sale. Privacy and respect are foundational.',
    },
    {
      title: 'Reduces Overwhelm',
      description: 'Clear questions, transparent information, factual recommendations. The entire platform is designed to reduce overwhelm and support confident decisions.',
    },
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>A Calm, User-First Experience</h2>

      <div className={styles.grid3}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <h3 className={styles.stepTitle}>{feature.title}</h3>
            <p className={styles.cardText}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

