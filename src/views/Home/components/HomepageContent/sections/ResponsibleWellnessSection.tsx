'use client'

import styles from '../HomepageContent.module.css'

/**
 * ResponsibleWellnessSection - Responsible wellness approach
 */
export default function ResponsibleWellnessSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>A Responsible Approach to Wellness</h2>

      <div className={styles.cardGradient}>
        <p className={styles.cardTextSpaced}>
          ZYNAVA commits to education over promises, guidance over hype, and respect for your autonomy. The wellness industry too often profits from uncertainty and urgency. We operate differently.
        </p>
        <p className={styles.cardTextSpaced}>
          Supplements can support wellness exploration, but never as prescriptive solutions or replacements for professional care. Individual differences matter. What supports one person may be unsuitable for another.
        </p>
        <p className={styles.cardText}>
          We believe you make better wellness decisions with time, clear information, and support. Our role is helping you understand the supplement landscape so your choices reflect your values, not marketing narratives.
        </p>
      </div>
    </section>
  )
}

