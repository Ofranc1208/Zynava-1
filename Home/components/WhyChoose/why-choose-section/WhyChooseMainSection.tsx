'use client';

import WhyChooseHeaderContainer from '../why-choose-header';
import FeaturesGrid from '../why-choose-features';
import StatisticsGrid from '../why-choose-statistics';

/**
 * Why Choose Main Section Component
 * 
 * Main orchestrator component that combines all why choose section elements.
 * 
 * Showcases the key benefits and features including:
 * - AI-Powered Calculator with Mint integration
 * - Court-Approved Process
 * - No Pressure Sales approach
 * - Statistics grid (400+ clients, $50M+, etc.)
 * - Interactive hover effects on all cards
 * 
 * @component WhyChooseMainSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function WhyChooseMainSection() {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 16px'
    }}>
      <WhyChooseHeaderContainer />
      
      {/* Trustpilot Review Badge */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '24px',
        marginBottom: '48px'
      }}>
        <a 
          href="https://www.trustpilot.com/review/smarterpayouts.com" 
          target="_blank" 
          rel="noopener noreferrer nofollow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.5rem 0.875rem',
            backgroundColor: '#ffffff',
            border: '1px solid #00b67a',
            borderRadius: '6px',
            color: '#000000',
            textDecoration: 'none',
            fontSize: '0.75rem',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0fdf4';
            e.currentTarget.style.borderColor = '#059669';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 182, 122, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.borderColor = '#00b67a';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
          }}
        >
          <span style={{ color: '#00b67a', fontSize: '0.875rem' }}>★</span>
          <span>Review us on Trustpilot</span>
        </a>
      </div>
      
      <FeaturesGrid />
      <StatisticsGrid />
    </section>
  );
}
