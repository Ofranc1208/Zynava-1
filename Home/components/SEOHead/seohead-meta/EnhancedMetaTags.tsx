'use client';

import { HOME_SEO_CONFIG } from '../../../data';

/**
 * Enhanced Meta Tags Component
 * 
 * Provides comprehensive meta tags including Open Graph, Twitter Cards,
 * and additional SEO optimization tags for the homepage.
 * 
 * @component EnhancedMetaTags
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function EnhancedMetaTags() {
  const { metadata, openGraph, twitterCard } = HOME_SEO_CONFIG;

  return (
    <>
      {/* Enhanced Open Graph Tags */}
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:url" content={openGraph.url} />
      <meta property="og:site_name" content={openGraph.siteName} />
      <meta property="og:image" content={openGraph.image.url} />
      <meta property="og:image:width" content={openGraph.image.width.toString()} />
      <meta property="og:image:height" content={openGraph.image.height.toString()} />
      <meta property="og:image:alt" content={openGraph.image.alt} />
      <meta property="og:locale" content={openGraph.locale} />

      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content={twitterCard.card} />
      <meta name="twitter:site" content={twitterCard.site} />
      <meta name="twitter:title" content={twitterCard.title} />
      <meta name="twitter:description" content={twitterCard.description} />
      <meta name="twitter:image" content={twitterCard.image} />
      <meta name="twitter:image:alt" content={twitterCard.imageAlt} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="New York" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Smarter Payouts" />
      
      {/* Theme Colors */}
      <meta name="theme-color" content="#09b44d" />
      <meta name="msapplication-TileColor" content="#09b44d" />
      <meta name="msapplication-navbutton-color" content="#09b44d" />
    </>
  );
}
