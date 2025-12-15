'use client'

import Link from 'next/link'

export default function HeroButtons() {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '1.5rem'
    }}>
      <Link href="/products" style={{
        padding: '12px 24px',
        borderRadius: '8px',
        background: '#09b44d',
        color: 'white',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.2s ease',
        boxShadow: '0 3px 13px rgba(9, 180, 77, 0.3)'
      }}>
        Shop Products
      </Link>
      <Link href="/about" style={{
        padding: '12px 24px',
        borderRadius: '8px',
        background: 'white',
        color: '#09b44d',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        border: '2px solid #09b44d',
        transition: 'all 0.2s ease'
      }}>
        Learn More
      </Link>
    </div>
  )
}

