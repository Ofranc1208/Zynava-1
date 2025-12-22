/**
 * Navigation Constants
 * Shared navigation link definitions used by both Desktop and Mobile navigation.
 * This ensures consistency across all navigation components.
 */

import type { NavLink } from './types'

/**
 * Primary navigation links displayed in both Desktop and Mobile navigation.
 * Order matters - links appear in this order in the navigation.
 */
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Call-to-action link for the Supplement Advisor.
 * Displayed as a prominent button in the navigation.
 */
export const CTA_LINK: NavLink = {
  href: '/advisor',
  label: 'Supplement Advisor',
  isButton: true,
}

/**
 * Logo configuration for consistent branding across navigation components.
 */
export const LOGO_CONFIG = {
  src: '/assets/images/Logo.png',
  alt: 'ZYNAVA Logo',
  desktop: {
    width: 343,
    height: 103,
    maxHeight: '97px',
    maxWidth: '322px',
  },
  mobile: {
    width: 257,
    height: 86,
    maxHeight: '82px',
    maxWidth: '240px',
  },
} as const

/**
 * Brand colors used in navigation styling.
 */
export const NAV_COLORS = {
  primary: '#ff6b35',
  primaryHover: '#e55a2b',
  text: '#4b5563',
  textDark: '#1a1a1a',
  textActive: '#ff6b35',
  background: '#ffffff',
  backgroundHover: '#f9fafb',
  backgroundActive: '#fff5f0',
  border: '#e5e7eb',
  borderHover: '#d1d5db',
} as const

