'use client';

import Link from 'next/link';

/**
 * Secondary CTA Button Component
 * 
 * Secondary call-to-action button - "How Our Process Works" provides
 * educational content for users who want to learn before taking action.
 * 
 * @component SecondaryButton
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function SecondaryButton() {
  return (
    <Link href="/main" style={{
      fontWeight: '600',
      fontSize: 'clamp(0.8rem, 2vw, 0.88rem)',
      borderRadius: '19px',
      boxShadow: '0 3px 13px rgba(251, 194, 51, 0.3)',
      border: 'none',
      padding: '13px 26px',
      transition: 'all 0.2s ease',
      background: '#fbc233',
      color: '#262626',
      textDecoration: 'none',
      display: 'block',
      minWidth: '200px',
      width: 'fit-content',
      textAlign: 'center',
      cursor: 'pointer'
    }}>
      How Our Process Works
    </Link>
  );
}
