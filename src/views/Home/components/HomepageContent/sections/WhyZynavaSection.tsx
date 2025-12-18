'use client'

import styles from '../HomepageContent.module.css'

/**
 * WhyZynavaSection - Explains why ZYNAVA exists
 */
export default function WhyZynavaSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Why ZYNAVA Exists</h2>

      <div className={styles.grid2}>
        <div className={styles.cardHighlight}>
          <h3 className={styles.cardTitle}>The Supplement Confusion</h3>
          <p className={styles.cardText}>
            The supplement market overwhelms consumers with thousands of products, conflicting information, and aggressive marketing. People spend hours researching, comparing labels, and cross-referencing reviews, only to feel uncertain about their final choice.
          </p>
        </div>

        <div className={styles.cardHighlight}>
          <h3 className={styles.cardTitle}>Our Core Mission</h3>
          <p className={styles.cardText}>
            ZYNAVA exists to simplify supplement decisions. We provide guidance based on ingredients, personal goals, and transparent information, not marketing budgets or brand popularity. Your clarity is our success.
          </p>
        </div>

        <div className={styles.cardHighlight}>
          <h3 className={styles.cardTitle}>What We're Not</h3>
          <p className={styles.cardText}>
            ZYNAVA doesn't sell supplements, manufacture products, or make medical claims. We're not a retailer, doctor, or replacement for healthcare advice. We're an independent guidance platform focused purely on education.
          </p>
        </div>
      </div>
    </section>
  )
}

