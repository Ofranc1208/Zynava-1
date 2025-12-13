'use client';

export const HOME_CONSTANTS = {
  COMPANY_NAME: 'Smarter Payouts',
  PHONE: '+1-855-214-3510',
  EMAIL: 'info@smarterpayouts.com',
  BUSINESS_HOURS: {
    WEEKDAYS: 'Monday - Friday',
    HOURS: '9:00 AM - 6:00 PM',
    TIMEZONE: 'EST'
  }
} as const;

export const ANALYTICS_EVENTS = {
  HERO_CTA_CLICK: 'hero_cta_click',
  FEATURE_CARD_CLICK: 'feature_card_click',
  SECTION_VIEW: 'section_view',
  TESTIMONIAL_INTERACTION: 'testimonial_interaction',
  FINAL_CTA_CLICK: 'final_cta_click',
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth'
} as const;

export const PERFORMANCE_THRESHOLDS = {
  GOOD_LCP: 2500, // Largest Contentful Paint (ms)
  GOOD_FID: 100,  // First Input Delay (ms)
  GOOD_CLS: 0.1,  // Cumulative Layout Shift
  GOOD_FCP: 1800, // First Contentful Paint (ms)
  GOOD_TTFB: 800  // Time to First Byte (ms)
} as const;

export const SECTION_NAMES = {
  HERO: 'hero',
  WHY_CHOOSE: 'why_choose',
  HOW_IT_WORKS: 'how_it_works',
  TESTIMONIALS: 'testimonials',
  FINAL_CTA: 'final_cta'
} as const;

export const CTA_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

export const FEATURE_CARDS = {
  FAST_CASH: 'fast_cash',
  NO_FEES: 'no_fees',
  EXPERT_GUIDANCE: 'expert_guidance',
  SECURE_PROCESS: 'secure_process'
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  SECTION_ERROR: 'This section is temporarily unavailable.'
} as const;

export const SUCCESS_MESSAGES = {
  PAGE_LOADED: 'Homepage loaded successfully',
  ANALYTICS_INITIALIZED: 'Analytics tracking initialized',
  PERFORMANCE_MEASURED: 'Performance metrics captured'
} as const;
