/**
 * Home Module
 * Main entry point for the Home page and its components.
 *
 * This barrel file provides centralized exports for the Home page feature,
 * including the main HomePage component, sub-components, types, and constants.
 */

// Main page component
export { HomePage, default } from './HomePage'

// Sub-components
export { default as HeroSection } from './components/Hero'
export { default as TopBrandsBanner } from './components/TopBrandsBanner'
export { default as SupplementAdvisorCard } from './components/SupplementAdvisor'
export { default as HomepageContent } from './components/HomepageContent'

// Hooks
export { usePromoCheck } from './components/SupplementAdvisor'

// Types
export type {
  CardStyle,
  SectionProps,
  BrandLogo,
  FeatureCard,
  StepCard,
} from './types'
export { AnimationStep } from './types'

// Constants
export {
  HOME_COLORS,
  HOME_TYPOGRAPHY,
  HOME_SPACING,
  BASE_CARD_STYLE,
  ANIMATION_TIMINGS,
  PROMO_CONFIG,
  BRAND_LOGOS,
} from './constants'

