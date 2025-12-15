'use client'

import { useState, useEffect } from 'react'
import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'

/**
 * DualNavbar - Main Navigation Component
 * 
 * A complete navigation system that handles both desktop and mobile navigation.
 * Uses responsive detection to show only the appropriate navigation for the screen size.
 * 
 * Features:
 * - Responsive desktop/mobile switching (768px breakpoint)
 * - Client-side hydration for SSR compatibility
 * - Zero layout shift with pre-calculated heights
 * - Only one navigation bar rendered at a time (no duplicates)
 */

export function DualNavbar() {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Client-side hydration and responsive detection
  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth
      // Standard responsive breakpoint (768px)
      setIsMobile(width < 768)
    }

    // Immediate client-side rendering
    setIsClient(true)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkIsMobile)
      }
    }
  }, [])

  // Show loading state during SSR hydration
  if (!isClient) {
    return (
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        height: '54px',
        minHeight: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Loading navigation...</div>
      </nav>
    )
  }

  // Responsive heights: 54px for mobile, 64px for desktop
  const navbarHeight = isMobile ? '54px' : '64px'

  const navbarStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    height: navbarHeight,
    minHeight: navbarHeight,
    maxHeight: navbarHeight,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    margin: 0,
    padding: 0,
  }

  return (
    <nav style={navbarStyle}>
      {/* Only render ONE navigation based on screen size - no duplicates */}
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </nav>
  )
}

