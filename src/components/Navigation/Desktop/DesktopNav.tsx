'use client'

import Link from 'next/link'

export function DesktopNav() {
  return (
    <div
      style={{
        display: 'none',
        padding: '1rem 2rem',
        borderBottom: '1px solid #e5e5e5',
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
        <Link href="/" style={{ textDecoration: 'none', color: '#333' }}>
          Home
        </Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#333' }}>
          About
        </Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: '#333' }}>
          Contact
        </Link>
        <Link href="/faq" style={{ textDecoration: 'none', color: '#333' }}>
          FAQ
        </Link>
        <Link href="/products" style={{ textDecoration: 'none', color: '#333' }}>
          Shop
        </Link>
        <Link href="/cart" style={{ textDecoration: 'none', color: '#333' }}>
          Cart
        </Link>
      </div>
    </div>
  )
}

