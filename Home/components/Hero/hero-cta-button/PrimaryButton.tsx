'use client';

import Link from 'next/link';

/**
 * Primary CTA Button Component
 * 
 * Main call-to-action button - "Get Instant Estimate" drives users
 * to the AI-powered quote flow for maximum conversion.
 * 
 * @component PrimaryButton
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function PrimaryButton() {
  return (
    <Link href="/mint-intelligent-chat" style={{
      fontWeight: '600',
      fontSize: 'clamp(0.8rem, 2vw, 0.88rem)',
      borderRadius: '19px',
      boxShadow: '0 3px 13px rgba(9, 180, 77, 0.3)',
      border: 'none',
      padding: '13px 26px',
      transition: 'all 0.2s ease',
      background: '#09b44d',
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      minWidth: '200px',
      width: 'fit-content',
      textAlign: 'center',
      cursor: 'pointer'
    }}>
      Get Instant Estimate
    </Link>
  );
}
