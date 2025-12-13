/**
 * Testimonials Title Component
 * 
 * Displays the main title for the Testimonials section.
 * 
 * @component TestimonialsTitle
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TestimonialsTitle() {
  return (
    <h2 style={{
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: '700',
      lineHeight: '1.2',
      marginBottom: '24px',
      color: '#2d5a27'
    }}>
      What Our Clients Say
    </h2>
  );
}
