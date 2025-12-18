'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, CTA_LINK, LOGO_CONFIG, NAV_COLORS } from '../constants'
import type { NavLink } from '../types'

/**
 * MobileNav - Mobile Navigation with Hamburger Menu
 * 
 * Displays on screens <768px. Features:
 * - Hamburger menu toggle
 * - Full-screen slide-out menu
 * - Backdrop overlay when open
 * - Body scroll lock when menu is open
 * - Touch-friendly interactions
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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

  // Combine regular links with CTA for mobile menu
  // CTA appears after Home for prominence
  const mobileLinks: NavLink[] = [
    NAV_LINKS[0], // Home
    CTA_LINK,     // Supplement Advisor (prominent position)
    ...NAV_LINKS.slice(1), // Rest of the links
  ]

  return (
    <>
      {/* Mobile Header Bar */}
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
        className="mobile-nav"
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            marginLeft: '-0.75rem',
          }}
        >
          <Image
            src={LOGO_CONFIG.src}
            alt={LOGO_CONFIG.alt}
            width={LOGO_CONFIG.mobile.width}
            height={LOGO_CONFIG.mobile.height}
            style={{
              height: 'auto',
              width: 'auto',
              maxHeight: LOGO_CONFIG.mobile.maxHeight,
              maxWidth: LOGO_CONFIG.mobile.maxWidth,
            }}
            priority
          />
        </Link>

        {/* Hamburger Button */}
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

      {/* Slide-out Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: '400px',
          background: NAV_COLORS.background,
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
        {/* Menu Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${NAV_COLORS.border}`,
          }}
        >
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.mobile.width}
              height={LOGO_CONFIG.mobile.height}
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: LOGO_CONFIG.mobile.maxHeight,
                maxWidth: LOGO_CONFIG.mobile.maxWidth,
              }}
            />
          </Link>

          {/* Close Button */}
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
              e.currentTarget.style.backgroundColor = NAV_COLORS.backgroundHover
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
          {mobileLinks.map((link, index) => {
            const isActive = pathname === link.href
            const isButton = link.isButton || false

            if (isButton) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    color: '#ffffff',
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    backgroundColor: NAV_COLORS.primary,
                    border: `2px solid ${NAV_COLORS.primary}`,
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    animation: isOpen ? `slideInRight 0.3s ease ${index * 0.05}s both` : 'none',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = NAV_COLORS.primaryHover
                    e.currentTarget.style.borderColor = NAV_COLORS.primaryHover
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = NAV_COLORS.primary
                    e.currentTarget.style.borderColor = NAV_COLORS.primary
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = NAV_COLORS.primaryHover
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = NAV_COLORS.primary
                  }}
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: isActive ? '600' : '500',
                  textDecoration: 'none',
                  color: isActive ? NAV_COLORS.textActive : NAV_COLORS.textDark,
                  padding: '1rem 1.5rem',
                  borderRadius: '8px',
                  backgroundColor: isActive ? NAV_COLORS.backgroundActive : NAV_COLORS.background,
                  border: isActive ? `1px solid ${NAV_COLORS.primary}` : `1px solid ${NAV_COLORS.border}`,
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                  animation: isOpen ? `slideInRight 0.3s ease ${index * 0.05}s both` : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = NAV_COLORS.backgroundHover
                  e.currentTarget.style.borderColor = NAV_COLORS.borderHover
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isActive ? NAV_COLORS.backgroundActive : NAV_COLORS.background
                  e.currentTarget.style.borderColor = isActive ? NAV_COLORS.primary : NAV_COLORS.border
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6'
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = isActive ? NAV_COLORS.backgroundActive : NAV_COLORS.background
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
