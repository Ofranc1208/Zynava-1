import HowItWorksTitle from './HowItWorksTitle';
import HowItWorksDescription from './HowItWorksDescription';

/**
 * How It Works Header Container Component
 * 
 * Orchestrates the title and description for the How It Works section.
 * 
 * @component HowItWorksHeaderContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HowItWorksHeaderContainer() {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '48px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <HowItWorksTitle />
        <HowItWorksDescription />
      </div>
    </div>
  );
}
