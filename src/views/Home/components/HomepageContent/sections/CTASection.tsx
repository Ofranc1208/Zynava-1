'use client'

import styles from '../HomepageContent.module.css'

/**
 * CTASection - Final call-to-action with disclaimer
 */
export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.sectionTitle}>Start Your Guided Exploration</h2>

      <p className={styles.ctaText}>
        Your journey to clarity begins with straightforward questions about your wellness goals. ZYNAVA matches you with supplements that may align with those goals, giving you ingredient information and connections to trusted retailers for further research.
      </p>

      <div className={styles.disclaimerBox}>
        <p className={styles.disclaimerText}>
          <strong>Important Disclaimer:</strong> ZYNAVA provides educational and informational guidance only. These statements have not been evaluated by the Food and Drug Administration. ZYNAVA recommendations are not intended to diagnose, treat, cure, or prevent disease. Before using supplements, especially with existing health conditions, medications, pregnancy, or medical concerns, consult a qualified healthcare professional. Supplements never replace professional medical advice. Individual experiences vary.
        </p>
      </div>
    </section>
  )
}

