'use client'

import styles from '../HomepageContent.module.css'

/**
 * WhoWeServeSection - Target audience descriptions
 */
export default function WhoWeServeSection() {
  const audiences = [
    {
      title: 'Seeking Clarity',
      description: 'Confused by supplement marketing and overwhelming options? ZYNAVA transforms confusion into structured, ingredient-focused guidance.',
    },
    {
      title: 'New to Supplements',
      description: 'Don\'t know where to start? ZYNAVA provides a framework for systematic exploration rather than random trial.',
    },
    {
      title: 'Educated Consumers',
      description: 'Already knowledgeable? ZYNAVA\'s ingredient-focused approach and access to thousands of products makes discovery faster.',
    },
    {
      title: 'Skeptical Decision-Makers',
      description: 'Want concrete data before deciding? ZYNAVA\'s transparency and ingredient-level information gives you the facts you need.',
    },
    {
      title: 'Valuing Independence',
      description: 'Want guidance without financial incentives? ZYNAVA\'s independent approach aligns with your values.',
    },
    {
      title: 'Privacy-Conscious',
      description: 'Your data matters. We respect privacy and never sell information. You\'re a person seeking clarity, not a commodity.',
    },
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Who ZYNAVA Serves</h2>

      <div className={styles.grid6}>
        {audiences.map((audience) => (
          <div key={audience.title} className={styles.card}>
            <h3 className={styles.stepTitle}>{audience.title}</h3>
            <p className={styles.cardText}>{audience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

