'use client'

import Link from 'next/link'
import Image from 'next/image'

export function DesktopNav() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '0 1.75rem',
        paddingLeft: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className="desktop-nav"
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <Image
          src="/assets/images/Logo.png"
          alt="ZYNAVA Logo"
          width={343}
          height={103}
          style={{
            height: 'auto',
            width: 'auto',
            maxHeight: '103px',
            maxWidth: '343px',
          }}
          priority
        />
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

