/**
 * How It Works Title Component
 * 
 * Displays the main title for the How It Works section.
 * 
 * @component HowItWorksTitle
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HowItWorksTitle() {
  return (
    <h2 style={{
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: '700',
      lineHeight: '1.2',
      marginBottom: '24px',
      color: '#2d5a27'
    }}>
      How It Works
    </h2>
  );
}
