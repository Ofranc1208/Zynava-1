import { SEOConfiguration } from '../types';

export const HOME_SEO_CONFIG: SEOConfiguration = {
  metadata: {
    title: 'Smarter Payouts - Get Cash for Your Structured Settlement | Free Quote',
    description: 'Smarter Payouts is the industry\'s first fully self-quoting platform for structured settlement transfers. Use our DIY lump-sum calculator to get instant quotes in under 60 seconds—no personal info required.',
    keywords: 'structured settlement, cash for settlement, sell structured settlement, settlement buyer, structured settlement company, cash advance, settlement funding',
    canonicalUrl: 'https://smarterpayouts.com',
    imageUrl: 'https://www.usa.gov/',
    siteName: 'Smarter Payouts',
    twitterSite: '@smarterpayouts'
  },
  openGraph: {
    type: 'website',
    title: 'Smarter Payouts - Get Cash for Your Structured Settlement',
    description: 'Smarter Payouts is the industry\'s first fully self-quoting platform for structured settlement transfers. Use our DIY lump-sum calculator to get instant quotes in under 60 seconds—no personal info required.',
    url: 'https://smarterpayouts.com',
    siteName: 'Smarter Payouts',
    image: {
      url: 'https://www.usa.gov/',
      width: 1200,
      height: 630,
      alt: 'Smarter Payouts - Structured Settlement Cash Solutions'
    },
    locale: 'en_US'
  },
  twitterCard: {
    card: 'summary_large_image',
    site: '@smarterpayouts',
    title: 'Get Cash for Your Structured Settlement - Smarter Payouts',
    description: 'Smarter Payouts is the industry\'s first fully self-quoting platform. Use our DIY lump-sum calculator to get instant quotes in under 60 seconds—no personal info required.',
    image: 'https://www.usa.gov/',
    imageAlt: 'Smarter Payouts Homepage'
  },
  structuredData: {
    // Organization and FinancialService schemas are provided globally via app/layout.tsx
    // Only page-specific schemas should be defined here
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Smarter Payouts',
      url: 'https://smarterpayouts.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://smarterpayouts.com/',
        'query-input': 'required name=search_term_string'
      }
    }
  }
};

export const PRELOAD_RESOURCES = [
  '/videos/hero-background.mp4',
  '/images/hero-background.jpg',
  '/fonts/inter-var.woff2'
];

export const CRITICAL_CSS_RESOURCES = [
  '/styles/critical.css'
];
