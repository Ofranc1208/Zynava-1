'use client'

import styles from '../HomepageContent.module.css'

/**
 * TrustSafetySection - Trust, transparency, and safety disclaimers
 */
export default function TrustSafetySection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Trust, Transparency & Safety</h2>

      <div className={styles.card}>
        <h3 className={styles.cardTitleMedium}>What We Are Not</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className={styles.cardTextSpaced}>
            <strong>Not Medical:</strong> We don't diagnose, treat, cure, or prevent disease. Consult healthcare providers before using supplements.
          </p>
          <p className={styles.cardTextSpaced}>
            <strong>Not a Seller:</strong> We have no financial incentive to recommend one brand over another.
          </p>
          <p className={styles.cardText}>
            <strong>Not a Replacement:</strong> Professional guidance, nutrition counseling, and medical care come first.
          </p>
        </div>

        <h3 className={styles.cardTitleMedium}>What We Commit To</h3>
        <p className={styles.cardTextSpaced}>
          Ingredient-focused, evidence-informed guidance. Objective evaluation without brand bias. Transparent language: "may support," not guaranteed results.
        </p>
        <p className={styles.cardText}>
          Accuracy over sales. We never promise outcomes. Your autonomy and informed decision-making are our priority.
        </p>
      </div>
    </section>
  )
}

