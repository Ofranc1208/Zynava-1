import FinalCTATitle from './FinalCTATitle';
import FinalCTADescription from './FinalCTADescription';

/**
 * Final CTA Header Container Component
 * 
 * Orchestrates the title and description for the Final CTA section.
 * 
 * @component FinalCTAHeaderContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function FinalCTAHeaderContainer() {
  return (
    <div style={{
      maxWidth: '800px',
      textAlign: 'center'
    }}>
      <FinalCTATitle />
      <FinalCTADescription />
    </div>
  );
}