/**
 * Navigation Types
 * Centralized type definitions for the navigation module.
 */

/**
 * Represents a single navigation link item.
 */
export interface NavLink {
  /** The URL path for the link */
  href: string
  /** The display label for the link */
  label: string
  /** If true, renders as a prominent CTA button instead of a regular link */
  isButton?: boolean
}

/**
 * Props for navigation link styling based on active state.
 */
export interface NavLinkStyleProps {
  isActive: boolean
  isButton?: boolean
}

