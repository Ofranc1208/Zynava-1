import TestimonialsTitle from './TestimonialsTitle';
import TestimonialsDescription from './TestimonialsDescription';

/**
 * Testimonials Header Container Component
 * 
 * Orchestrates the title and description for the Testimonials section.
 * 
 * @component TestimonialsHeaderContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TestimonialsHeaderContainer() {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '48px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <TestimonialsTitle />
        <TestimonialsDescription />
      </div>
    </div>
  );
}
