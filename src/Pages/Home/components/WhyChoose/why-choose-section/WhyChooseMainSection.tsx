'use client'

import WhyChooseHeaderContainer from '../why-choose-header'
import SupplementAdvisorCard from '../../SupplementAdvisor'
import FeaturesGrid from '../why-choose-features'

export default function WhyChooseMainSection() {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '8px 16px 24px 16px',
      backgroundColor: '#ffffff'
    }}>
      <WhyChooseHeaderContainer />
      <SupplementAdvisorCard />
      <FeaturesGrid />
    </section>
  )
}
