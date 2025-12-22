import styles from '../HomepageContent.module.css'
import ExploreButton from '@/src/components/shared/ExploreButton'

interface CTASectionProps {
  onOpenAdvisor?: () => void
}

/**
 * CTASection - Final call-to-action with disclaimer
 * Concise, action-oriented with legal compliance
 */
export default function CTASection({ onOpenAdvisor }: CTASectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Ready to Find Your Match?</h2>

      <p className={styles.ctaText} style={{ textAlign: 'left' }}>
        Answer a few questions about your wellness goals. Get non-sponsored supplement recommendations based on ingredients and research—not marketing hype.
      </p>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
        <ExploreButton text="Start now" onClick={onOpenAdvisor} />
      </div>

      <div className={styles.disclaimerBox}>
        <p className={styles.disclaimerText}>
          <strong>Disclaimer:</strong> ZYNAVA provides educational guidance only—not medical advice. These statements have not been evaluated by the Food and Drug Administration. Our recommendations for vitamins, minerals, probiotics, omega-3s, collagen, and other supplements are not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional before using supplements, especially if you have health conditions or take medications. All recommendations are non-sponsored and based on ingredient analysis and publicly available research.
        </p>
      </div>
    </section>
  )
}
