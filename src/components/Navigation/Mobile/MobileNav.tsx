'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: '/main', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/products', label: 'Shop' },
    { href: '/cart', label: 'Cart' },
  ]

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: '0 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="mobile-nav"
      >
        <Link
          href="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#1a1a1a',
            letterSpacing: '0.05em'
          }}
        >
          ZYNAVA
        </Link>
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#333',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease',
          }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            animation: 'fadeIn 0.3s ease',
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: '400px',
          background: '#ffffff',
          zIndex: 1000,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          pointerEvents: isOpen ? 'auto' : 'none',
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        {/* Header with Logo and Close Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#1a1a1a',
              letterSpacing: '0.05em'
            }}
          >
            ZYNAVA
          </Link>
          <button
            onClick={closeMenu}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.75rem',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#333',
              minWidth: '48px',
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              transition: 'background-color 0.2s ease',
            }}
            aria-label="Close menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                textDecoration: 'none',
                color: '#1a1a1a',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.2s ease',
                animation: isOpen ? `slideInRight 0.3s ease ${index * 0.05}s both` : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb'
                e.currentTarget.style.borderColor = '#d1d5db'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff'
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6'
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff'
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

