'use client';

import dynamic from 'next/dynamic';
import HeroSection from './components/HeroSection';
import ProcessSteps from './components/ProcessSteps';

// Lazy load below-the-fold components
const InternalLinks = dynamic(() => import('./components/InternalLinks'), { ssr: false });
const ValueProps = dynamic(() => import('./components/ValueProps'), { ssr: false });
const Stats = dynamic(() => import('./components/Stats'), { ssr: false });
const MiniFAQ = dynamic(() => import('./components/MiniFAQ'), { ssr: false });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false });
const CallToAction = dynamic(() => import('./components/CallToAction'), { ssr: false });

/**
 * Main Page Component
 * 
 * Primary landing page for Smarter Payouts.
 * Enterprise-grade modular architecture following the same pattern as other migrated pages.
 * 
 * ## Architecture
 * - **HeroSection**: Hero with primary CTAs (above fold)
 * - **ProcessSteps**: 4-step process explanation (above fold)
 * - **InternalLinks**: Resource links and Mint AI feature (lazy loaded)
 * - **ValueProps**: Value propositions and benefits (lazy loaded)
 * - **Stats**: Company statistics (lazy loaded)
 * - **MiniFAQ**: FAQ section (lazy loaded)
 * - **Testimonials**: Client testimonials (lazy loaded)
 * - **CallToAction**: Final CTA section (lazy loaded)
 * 
 * @component MainPage
 * @author Smarter Payouts Team
 * @since 2024
 * @version 1.0.0 - Migrated from app/main to src structure
 */
export default function MainPage() {
  return (
    <>
      <HeroSection />
      <ProcessSteps />
      <InternalLinks />
      <ValueProps />
      <Stats />
      <MiniFAQ />
      <Testimonials />
      <CallToAction />
    </>
  );
}

