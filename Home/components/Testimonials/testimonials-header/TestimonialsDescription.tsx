/**
 * Testimonials Description Component
 * 
 * Displays the description text for the Testimonials section.
 * 
 * @component TestimonialsDescription
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TestimonialsDescription() {
  return (
    <p style={{
      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
      fontWeight: '300',
      color: '#6c757d',
      lineHeight: '1.6'
    }}>
      Real feedback from real people who chose Smarter Payouts.
    </p>
  );
}
