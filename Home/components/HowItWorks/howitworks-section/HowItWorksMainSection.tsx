import { HowItWorksHeaderContainer } from '../howitworks-header';
import { StepsGrid } from '../howitworks-steps';

/**
 * How It Works Main Section Component
 * 
 * Main orchestrator for the How It Works section, combining:
 * - Header (title and description)
 * - Steps grid (3-step process cards)
 * 
 * @component HowItWorksMainSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HowItWorksMainSection() {
  return (
    <section style={{
      padding: '48px 16px',
      background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <HowItWorksHeaderContainer />
        <StepsGrid />
      </div>
    </section>
  );
}
