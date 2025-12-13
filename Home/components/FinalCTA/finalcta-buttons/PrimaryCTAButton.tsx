'use client';

import Link from 'next/link';

/**
 * Primary CTA Button Component
 * 
 * Displays the primary call-to-action button (Get Instant Quote).
 * 
 * @component PrimaryCTAButton
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function PrimaryCTAButton() {
  return (
    <Link 
      href="/mint-chat-active?type=calculate&source=home-final-cta" 
      style={{
        display: 'inline-block',
        padding: '0.875rem 1.75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '8px',
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#059669',
        border: 'none',
        fontWeight: '600',
        transition: 'background-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#047857';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#059669';
      }}
    >
      Get Instant Quote
    </Link>
  );
}
