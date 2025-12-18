'use client'

import styles from '../HomepageContent.module.css'

/**
 * WhatZynavaDoesSection - Describes ZYNAVA's independent approach
 */
export default function WhatZynavaDoesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>What ZYNAVA Does</h2>

      <div className={styles.card}>
        <h3 className={styles.cardTitleLarge}>Our Independent Approach</h3>
        <p className={styles.cardTextSpaced}>
          We evaluate and analyze thousands of supplements across trusted retailers without financial incentive. Our focus is ingredient-level transparency, not brand recognition or marketing narratives. Every recommendation is rooted in your personal goals and ingredient profiles.
        </p>
        <p className={styles.cardText}>
          We match you with supplements that may support your stated wellness goals based on structured questionnaire responses. You maintain complete control: exploring recommendations, researching products, and deciding whether to purchase from trusted retailers.
        </p>
      </div>
    </section>
  )
}

