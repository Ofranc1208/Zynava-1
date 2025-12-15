'use client'

import Link from 'next/link'

export function DesktopNav() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '0 1.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className="desktop-nav"
    >
      <Link
        href="/"
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#1a1a1a',
          letterSpacing: '0.05em'
        }}
      >
        ZYNAVA
      </Link>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <Link href="/main" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500' }}>
          Home
        </Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500' }}>
          About
        </Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500' }}>
          Contact
        </Link>
        <Link href="/faq" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500' }}>
          FAQ
        </Link>
        <Link href="/products" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500' }}>
          Shop
        </Link>
        <Link href="/cart" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: '500' }}>
          Cart
        </Link>
      </div>
    </div>
  )
}

