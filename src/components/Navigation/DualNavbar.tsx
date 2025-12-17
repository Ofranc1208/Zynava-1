'use client'

import { useState, useEffect } from 'react'
import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'

/**
 * DualNavbar - Main Navigation Component
 * 
 * Optimized for fast load times:
 * - Uses CSS media queries for responsive design (no JS layout shift)
 * - Renders both navbars with CSS display:none (no hydration mismatch)
 * - Minimal client-side state changes
 */

export function DualNavbar() {
  const [isMounted, setIsMounted] = useState(false)

  // Minimal hydration - just track if we're on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

    return (
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    margin: 0,
    padding: 0,
    }}>
      {/* Desktop Navigation - hidden on mobile via CSS */}
      <div style={{ display: 'none' }} className="nav-desktop">
        {isMounted && <DesktopNav />}
      </div>
      
      {/* Mobile Navigation - hidden on desktop via CSS */}
      <div style={{ display: 'none' }} className="nav-mobile">
        {isMounted && <MobileNav />}
      </div>
    </nav>
  )
}

