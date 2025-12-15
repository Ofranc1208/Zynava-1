'use client'

import Link from 'next/link'

export default function SecondaryButton() {
  return (
    <Link href="/main" style={{
      fontWeight: '600',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      borderRadius: '19px',
      boxShadow: '0 3px 13px rgba(245, 158, 11, 0.4)',
      border: 'none',
      padding: '13px 26px',
      transition: 'all 0.2s ease',
      background: '#f59e0b',
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      minWidth: '200px',
      width: 'fit-content',
      textAlign: 'center',
      cursor: 'pointer'
    }}>
      How Our Products Work
    </Link>
  )
}

