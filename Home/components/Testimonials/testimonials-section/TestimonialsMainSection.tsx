import { TestimonialsHeaderContainer } from '../testimonials-header';
import { TestimonialsGrid } from '../testimonials-cards';

/**
 * Testimonials Main Section Component
 * 
 * Main orchestrator for the Testimonials section, combining:
 * - Header (title and description)
 * - Testimonials grid (customer testimonial cards)
 * 
 * @component TestimonialsMainSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TestimonialsMainSection() {
  return (
    <section style={{
      padding: '48px 16px',
      backgroundColor: 'white'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <TestimonialsHeaderContainer />
        <TestimonialsGrid />
      </div>
    </section>
  );
}
