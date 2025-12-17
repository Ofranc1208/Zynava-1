'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function DesktopNav() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure active route highlighting only works on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navLinks = [
    { href: '/ingredients', label: 'Ingredients' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '0 2rem',
        paddingLeft: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto',
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
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {navLinks.map((link) => {
          const isActive = isMounted && pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: isActive ? '#ff6b35' : '#4b5563',
                fontSize: '0.95rem',
                fontWeight: isActive ? '600' : '400',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff6b35'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive ? '#ff6b35' : '#4b5563'
              }}
            >
              {link.label}
            </Link>
          )
        })}
        <Link
          href="/advisor"
          style={{
            textDecoration: 'none',
            padding: '0.625rem 1.5rem',
            backgroundColor: '#ff6b35',
            color: '#ffffff',
            fontSize: '0.95rem',
            fontWeight: '600',
            borderRadius: '6px',
            border: '2px solid #ff6b35',
            transition: 'all 0.2s ease',
            letterSpacing: '-0.01em',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e55a2b'
            e.currentTarget.style.borderColor = '#e55a2b'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ff6b35'
            e.currentTarget.style.borderColor = '#ff6b35'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Supplement Advisor
        </Link>
      </div>
    </div>
  )
}

