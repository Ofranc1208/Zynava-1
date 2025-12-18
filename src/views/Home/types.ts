/**
 * Home Module Types
 * Centralized type definitions for the Home page components.
 */

/**
 * Card style configuration for content sections.
 */
export interface CardStyle {
  background: string
  border: string
  borderRadius: string
  padding: string
  marginBottom: string
  boxShadow: string
  transition: string
  borderLeft?: string
}

/**
 * Section component props with optional custom styling.
 */
export interface SectionProps {
  className?: string
  style?: React.CSSProperties
}

/**
 * Animation step states for the SupplementAdvisorCard.
 */
export enum AnimationStep {
  INITIAL_TYPING = 0,
  GREETING = 1,
  TYPING_BEFORE_FIRST = 2,
  FIRST_MESSAGE = 3,
  TYPING_BEFORE_SECOND = 4,
  SECOND_MESSAGE = 5,
  SHOW_BUTTON = 6,
}

/**
 * Brand logo item for the TopBrandsBanner.
 */
export interface BrandLogo {
  src: string
  alt: string
}

/**
 * Feature card for "Why ZYNAVA" sections.
 */
export interface FeatureCard {
  title: string
  description: string
  highlight?: boolean
}

/**
 * Step card for "How It Works" section.
 */
export interface StepCard {
  step: number
  title: string
  description: string
}

