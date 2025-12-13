'use client';

/**
 * Secondary CTA Button Component
 * 
 * Displays the secondary call-to-action button (Talk to Expert).
 * 
 * @component SecondaryCTAButton
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function SecondaryCTAButton() {
  return (
    <a 
      href="tel:+18552143510"
      style={{
        display: 'inline-block',
        padding: '0.875rem 1.75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '8px',
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#059669',
        backgroundColor: 'transparent',
        border: '1px solid #059669',
        fontWeight: '600',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f0fdf4';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      Talk to Expert
    </a>
  );
}
