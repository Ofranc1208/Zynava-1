'use client'

import styles from './HomepageContent.module.css'
import {
  WhyZynavaSection,
  ResearchSection,
  HowItWorksSection,
  IngredientFocusSection,
  UserExperienceSection,
  TrustSafetySection,
  WhoWeServeSection,
  CTASection,
} from './sections'

/**
 * HomepageContent - Long-form content sections for the home page
 * 
 * Streamlined flow with 2,000+ words for SEO:
 * 1. Why ZYNAVA Exists - Problem & Solution
 * 2. Research You Can Use - Public research made accessible
 * 3. How It Works - 3-Step Process
 * 4. Why Ingredients Matter - Forms & bioavailability
 * 5. Your Experience Matters - Privacy & No Pressure
 * 6. Trust & Transparency - Non-sponsored commitment
 * 7. Who This Is For - Target Audiences
 * 8. CTA - Call to Action
 */
export default function HomepageContent() {
  return (
    <div className={styles.container}>
      <WhyZynavaSection />
      <ResearchSection />
      <HowItWorksSection />
      <IngredientFocusSection />
      <UserExperienceSection />
      <TrustSafetySection />
      <WhoWeServeSection />
      <CTASection />
    </div>
  )
}
