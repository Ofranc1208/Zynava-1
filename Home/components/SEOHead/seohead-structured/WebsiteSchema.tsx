'use client';

import { HOME_SEO_CONFIG } from '../../../data';

/**
 * Website Schema Component
 * 
 * Provides structured data for the website entity to help search engines
 * understand the site structure and enable rich search features.
 * 
 * @component WebsiteSchema
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function WebsiteSchema() {
  const websiteSchema = HOME_SEO_CONFIG.structuredData.website;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema)
      }}
    />
  );
}
