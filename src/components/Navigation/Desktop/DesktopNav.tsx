'use client'

import Link from 'next/link'

export function DesktopNav() {
  return (
    <div
      style={{
        padding: '0.45rem 1.75rem',
        borderBottom: '1px solid #e5e5e5',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000
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

