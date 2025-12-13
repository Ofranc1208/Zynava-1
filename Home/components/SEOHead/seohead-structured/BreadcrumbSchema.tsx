'use client';

/**
 * Breadcrumb Schema Component
 * 
 * Provides structured data for breadcrumb navigation to help search engines
 * understand the site hierarchy and display breadcrumbs in search results.
 * 
 * @component BreadcrumbSchema
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function BreadcrumbSchema() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://smarterpayouts.com'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
}
