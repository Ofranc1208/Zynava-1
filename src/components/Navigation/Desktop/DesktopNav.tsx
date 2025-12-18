'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, CTA_LINK, LOGO_CONFIG, NAV_COLORS } from '../constants'

/**
 * DesktopNav - Desktop Navigation Bar
 * 
 * Horizontal navigation bar displayed on screens ≥768px.
 * Features logo on left, navigation links on right with CTA button.
 * Hidden on mobile via CSS media queries in globals.css.
 */
export function DesktopNav() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure active route highlighting only works on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          marginLeft: '-1rem',
        }}
      >
        <Image
          src={LOGO_CONFIG.src}
          alt={LOGO_CONFIG.alt}
          width={LOGO_CONFIG.desktop.width}
          height={LOGO_CONFIG.desktop.height}
          style={{
            height: 'auto',
            width: 'auto',
            maxHeight: LOGO_CONFIG.desktop.maxHeight,
            maxWidth: LOGO_CONFIG.desktop.maxWidth,
          }}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div
        style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {/* Regular nav links (skip Home on desktop - logo serves as home link) */}
        {NAV_LINKS.filter(link => link.href !== '/').map((link) => {
          const isActive = isMounted && pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: isActive ? NAV_COLORS.textActive : NAV_COLORS.text,
                fontSize: '0.95rem',
                fontWeight: isActive ? '600' : '400',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = NAV_COLORS.primary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive ? NAV_COLORS.textActive : NAV_COLORS.text
              }}
            >
              {link.label}
            </Link>
          )
        })}

        {/* CTA Button */}
        <Link
          href={CTA_LINK.href}
          style={{
            textDecoration: 'none',
            padding: '0.625rem 1.5rem',
            backgroundColor: NAV_COLORS.primary,
            color: '#ffffff',
            fontSize: '0.95rem',
            fontWeight: '600',
            borderRadius: '6px',
            border: `2px solid ${NAV_COLORS.primary}`,
            transition: 'all 0.2s ease',
            letterSpacing: '-0.01em',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = NAV_COLORS.primaryHover
            e.currentTarget.style.borderColor = NAV_COLORS.primaryHover
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = NAV_COLORS.primary
            e.currentTarget.style.borderColor = NAV_COLORS.primary
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {CTA_LINK.label}
        </Link>
      </div>
    </div>
  )
}
