'use client';

import Head from 'next/head';
import { MetaTags, PreloadLinks, EnhancedMetaTags } from '../seohead-meta';
import { OrganizationSchema, NavigationSchema, WebsiteSchema, BreadcrumbSchema } from '../seohead-structured';

/**
 * SEO Head Main Section Component
 * 
 * Main orchestrator for the SEO Head section, combining:
 * - Meta tags (title, description, Open Graph, Twitter)
 * - Preload links (performance optimization)
 * - Structured data (organization and navigation schemas)
 * 
 * @component SEOHeadMainSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function SEOHeadMainSection() {
  return (
    <Head>
      <MetaTags />
      <EnhancedMetaTags />
      <PreloadLinks />
      {/* OrganizationSchema removed - handled globally in app/layout.tsx */}
      <NavigationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema />
    </Head>
  );
}
