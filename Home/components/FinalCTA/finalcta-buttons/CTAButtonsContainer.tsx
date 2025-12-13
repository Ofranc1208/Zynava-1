import PrimaryCTAButton from './PrimaryCTAButton';
import SecondaryCTAButton from './SecondaryCTAButton';

/**
 * CTA Buttons Container Component
 * 
 * Orchestrates the primary and secondary CTA buttons.
 * 
 * @component CTAButtonsContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function CTAButtonsContainer() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '32px',
      flexWrap: 'wrap'
    }}>
      <PrimaryCTAButton />
      <SecondaryCTAButton />
    </div>
  );
}
