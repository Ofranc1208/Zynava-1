'use client';

import WhyChooseTitle from './WhyChooseTitle';
import WhyChooseDescription from './WhyChooseDescription';

/**
 * Why Choose Header Container Component
 * 
 * Orchestrates the header title and description for the Why Choose section.
 * 
 * @component WhyChooseHeaderContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function WhyChooseHeaderContainer() {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '48px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <WhyChooseTitle />
        <WhyChooseDescription />
      </div>
    </div>
  );
}
