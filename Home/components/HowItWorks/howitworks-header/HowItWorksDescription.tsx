/**
 * How It Works Description Component
 * 
 * Displays the description text for the How It Works section.
 * 
 * @component HowItWorksDescription
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HowItWorksDescription() {
  return (
    <p style={{
      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
      fontWeight: '300',
      color: '#6c757d',
      lineHeight: '1.6'
    }}>
      Get your cash in 3 simple steps — all handled digitally with full transparency.
    </p>
  );
}
