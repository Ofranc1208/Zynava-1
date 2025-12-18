'use client'

import { useState, useEffect } from 'react'
import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'
import { NAV_COLORS } from './constants'

/**
 * DualNavbar - Main Navigation Component
 * 
 * The primary navigation component that should be used in layouts.
 * Renders both Desktop and Mobile navigation, with CSS media queries
 * controlling which one is visible.
 * 
 * @example
 * ```tsx
 * import { DualNavbar } from '@/src/components/navigation'
 * 
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <DualNavbar />
 *       <main>{children}</main>
 *     </>
 *   )
 * }
 * ```
 * 
 * Performance optimizations:
 * - Uses CSS media queries for responsive display (no JS layout shift)
 * - Renders both navbars with CSS display:none initially (no hydration mismatch)
 * - Minimal client-side state changes
 */
export function DualNavbar() {
  const [isMounted, setIsMounted] = useState(false)

  // Minimal hydration - just track if we're on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <nav
      style={{
        backgroundColor: NAV_COLORS.background,
        borderBottom: `1px solid ${NAV_COLORS.border}`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        margin: 0,
        padding: 0,
      }}
    >
      {/* Desktop Navigation - hidden on mobile via CSS in globals.css */}
      <div style={{ display: 'none' }} className="nav-desktop">
        {isMounted && <DesktopNav />}
      </div>

      {/* Mobile Navigation - hidden on desktop via CSS in globals.css */}
      <div style={{ display: 'none' }} className="nav-mobile">
        {isMounted && <MobileNav />}
      </div>
    </nav>
  )
}

