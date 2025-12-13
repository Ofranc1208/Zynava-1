import { FinalCTAHeaderContainer } from '../finalcta-header';
import { CTAButtonsContainer } from '../finalcta-buttons';
import { TrustIndicators } from '../finalcta-trust';

/**
 * Final CTA Main Section Component
 * 
 * Main orchestrator for the Final CTA section, combining:
 * - Header (title and description)
 * - CTA buttons (primary and secondary)
 * - Trust indicators (security, licensing, compliance)
 * 
 * @component FinalCTAMainSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function FinalCTAMainSection() {
  return (
    <section style={{
      padding: '48px 16px',
      background: '#f9fafb'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <FinalCTAHeaderContainer />
          <CTAButtonsContainer />
          <TrustIndicators />
        </div>
      </div>
    </section>
  );
}
