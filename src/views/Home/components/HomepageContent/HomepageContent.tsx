'use client'

import { useState } from 'react'
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
import { AdvisorModal } from '@/src/components/advisor'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.container}>
      <WhyZynavaSection onOpenAdvisor={openModal} />
      <ResearchSection onOpenAdvisor={openModal} />
      <HowItWorksSection onOpenAdvisor={openModal} />
      <IngredientFocusSection onOpenAdvisor={openModal} />
      <UserExperienceSection onOpenAdvisor={openModal} />
      <TrustSafetySection onOpenAdvisor={openModal} />
      <WhoWeServeSection onOpenAdvisor={openModal} />
      <CTASection onOpenAdvisor={openModal} />
      
      <AdvisorModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
