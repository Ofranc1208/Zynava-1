/**
 * Navigation Module
 * Main entry point for the site navigation components.
 *
 * This barrel file provides centralized exports for the navigation feature,
 * including the main DualNavbar component, sub-components, types, and constants.
 */

// Main navigation component (use this in layouts)
export { DualNavbar } from './DualNavbar'

// Sub-components (for direct access if needed)
export { DesktopNav } from './Desktop/DesktopNav'
export { MobileNav } from './Mobile/MobileNav'

// Types
export type { NavLink, NavLinkStyleProps } from './types'

// Constants (for extending or customizing navigation)
export { NAV_LINKS, CTA_LINK, LOGO_CONFIG, NAV_COLORS } from './constants'

