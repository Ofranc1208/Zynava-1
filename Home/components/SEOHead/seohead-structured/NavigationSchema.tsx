/**
 * Navigation Schema Component
 * 
 * Handles JSON-LD structured data for site navigation elements.
 * Optimized for Google Sitelinks - prioritizes calculators and high-value pages.
 * 
 * @component NavigationSchema
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function NavigationSchema() {
  // Primary navigation - what we want Google to show as sitelinks
  const navigationData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      "Home",
      "Free Financial Calculators",
      "Lump Sum Calculator",
      "How It Works",
      "About Us",
      "FAQs"
    ],
    "url": [
      "https://smarterpayouts.com/",
      "https://smarterpayouts.com/motivation-calculators",
      "https://smarterpayouts.com/pricing-calculator",
      "https://smarterpayouts.com/learn-about-process",
      "https://smarterpayouts.com/about",
      "https://smarterpayouts.com/faqs"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(navigationData)
      }}
    />
  );
}
