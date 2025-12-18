/**
 * Home Module Constants
 * Shared configuration values used across Home page components.
 */

/**
 * Color palette for the Home page.
 */
export const HOME_COLORS = {
  primary: '#ff6b35',
  primaryHover: '#e55a2b',
  textDark: '#374151',
  textMuted: '#6b7280',
  background: '#ffffff',
  backgroundAlt: '#fafbfc',
  backgroundGradient: 'linear-gradient(135deg, #fafbfc 0%, #f3f4f6 100%)',
  border: '#e5e7eb',
  accent: '#eff6ff',
  warning: '#fffbf0',
  warningBorder: '#fde68a',
  warningText: '#744210',
} as const

/**
 * Typography settings for content sections.
 */
export const HOME_TYPOGRAPHY = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  headingLarge: '1.75rem',
  headingMedium: '1.3rem',
  headingSmall: '1.1rem',
  bodyLarge: '0.95rem',
  bodyMedium: '0.9rem',
  bodySmall: '0.8rem',
  lineHeight: '1.6',
} as const

/**
 * Spacing values for consistent layouts.
 */
export const HOME_SPACING = {
  sectionMargin: '3rem',
  cardPadding: '2rem',
  cardMargin: '2rem',
  gap: '2rem',
  containerMaxWidth: '1100px',
  containerPadding: '1.5rem',
} as const

/**
 * Base card style configuration.
 */
export const BASE_CARD_STYLE = {
  background: HOME_COLORS.background,
  border: `1px solid ${HOME_COLORS.border}`,
  borderRadius: '12px',
  padding: HOME_SPACING.cardPadding,
  marginBottom: HOME_SPACING.cardMargin,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
} as const

/**
 * Animation timing configuration for SupplementAdvisorCard.
 */
export const ANIMATION_TIMINGS = {
  GREETING: 806,       // 30% faster (was 1152)
  TYPING_1: 1434,      // 30% faster (was 2048)
  FIRST_MESSAGE: 2150, // 30% faster (was 3072)
  TYPING_2: 2778,      // 30% faster (was 3968)
  SECOND_MESSAGE: 3494, // 30% faster (was 4992)
  BUTTON: 4032,        // 30% faster (was 5760)
} as const

/**
 * Promo checking configuration.
 */
export const PROMO_CONFIG = {
  STORAGE_KEY: 'zynava_promo_seen',
  INITIAL_CHECK_DELAY: 100,
  FALLBACK_DELAY: 200,
  POLL_INTERVAL: 500,
  MAX_POLLS: 10,
} as const

/**
 * Brand logos for the TopBrandsBanner.
 */
export const BRAND_LOGOS = [
  { src: '/assets/images/Banner/icons8-iherb-48.png', alt: 'iHerb' },
  { src: '/assets/images/Banner/icons8-latex-48.png', alt: 'Latex' },
  { src: '/assets/images/Banner/icons8-nutanix-48.png', alt: 'Nutanix' },
  { src: '/assets/images/Banner/icons8-sass-48.png', alt: 'Sass' },
  { src: '/assets/images/Banner/icons8-taobao-48.png', alt: 'Taobao' },
  { src: '/assets/images/Banner/icons8-wattpad-48.png', alt: 'Wattpad' },
  { src: '/assets/images/Banner/icons8-zigbee-48.png', alt: 'Zigbee' },
  { src: '/assets/images/Banner/pngegg.png', alt: 'Brand' },
] as const

