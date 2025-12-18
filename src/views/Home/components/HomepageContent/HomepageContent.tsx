'use client'

import styles from './HomepageContent.module.css'
import {
  WhyZynavaSection,
  WhatZynavaDoesSection,
  HowItWorksSection,
  IngredientFocusSection,
  UserExperienceSection,
  TrustSafetySection,
  WhoWeServeSection,
  ResponsibleWellnessSection,
  CTASection,
} from './sections'

/**
 * HomepageContent - Long-form content sections for the home page
 * 
 * Contains educational content about ZYNAVA's mission, approach,
 * and value proposition. Split into modular section components
 * for better maintainability.
 */
export default function HomepageContent() {
  return (
    <div className={styles.container}>
      <WhyZynavaSection />
      <WhatZynavaDoesSection />
      <HowItWorksSection />
      <IngredientFocusSection />
      <UserExperienceSection />
      <TrustSafetySection />
      <WhoWeServeSection />
      <ResponsibleWellnessSection />
      <CTASection />
    </div>
  )
}
