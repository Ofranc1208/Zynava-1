'use client';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
// Import only critical above-the-fold components
import {
  SEOHead,
  HeroSection,
  HomePageErrorBoundary,
  SectionErrorBoundary
} from './components';

// Import lightweight loading component
import LoadingFallback from './components/LoadingFallback';

// Lazy load WhyChooseSection to reduce initial bundle
const WhyChooseSection = dynamic(() => import('./components/WhyChoose'), {
  loading: () => <LoadingFallback message="Loading Why Choose Us..." icon="🌟" />,
  ssr: false
});

// Lazy load below-the-fold sections for optimal performance
const HowItWorksSection = dynamic(() => import('./components/HowItWorks'), {
  loading: () => <LoadingFallback height="500px" message="Loading How It Works..." icon="⚡" />,
  ssr: false
});

const TestimonialsSection = dynamic(() => import('./components/Testimonials'), {
  loading: () => <LoadingFallback message="Loading Testimonials..." icon="💬" background="white" />,
  ssr: false
});

const FinalCTASection = dynamic(() => import('./components/FinalCTA'), {
  loading: () => <LoadingFallback message="Loading Final CTA..." icon="🚀" background="linear-gradient(135deg, #22b455 0%, #1a9a47 100%)" />,
  ssr: false
});

// Lazy load FAB Speed Dial for contact options - client-only
const LazyFABSpeedDial = dynamic(() => import('../../../../app/components/FABSpeedDial'), { 
  ssr: false,
  loading: () => null // Prevent hydration mismatch
});

import {
  useHomeAnalytics,
  useHomePerformance,
  useHomeAccessibility
} from './hooks';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useWebVitals } from './hooks/useWebVitals';

/**
 * Homepage Component
 * 
 * Main orchestrator component for the Smarter Payouts homepage. This component
 * follows enterprise-grade architecture principles by composing modular sections
 * rather than containing monolithic logic.
 * 
 * ## Architecture
 * - **SEOHead**: Meta tags, structured data, and performance optimization
 * - **HeroSection**: Video background hero with primary CTAs
 * - **WhyChooseSection**: Feature cards and company statistics
 * - **HowItWorksSection**: 3-step process explanation with interactive cards
 * - **TestimonialsSection**: Customer testimonials with ratings
 * - **FinalCTASection**: Final call-to-action with trust indicators
 * 
 * ## Features
 * - ✅ Fully responsive design
 * - ✅ Optimized for Core Web Vitals
 * - ✅ Accessibility compliant (WCAG 2.1 AA)
 * - ✅ SEO optimized with structured data
 * - ✅ Interactive hover effects and animations
 * 
 * @component HomePage
 * @example
 * ```tsx
 * import HomePage from './HomePage';
 * 
 * export default function Page() {
 *   return <HomePage />;
 * }
 * ```
 * @author Smarter Payouts Team
 * @since 2024
 * @version 2.0.0
 */
export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  
  const {
    trackHeroCTAClick,
    trackFeatureCardClick,
    trackSectionView,
    trackTestimonialInteraction,
    trackFinalCTAClick,
    trackPageView
  } = useHomeAnalytics();

  const { reportWebVitals } = useHomePerformance();
  const { announceToScreenReader } = useHomeAccessibility();
  
  // Progressive loading with intersection observer
  const howItWorksObserver = useIntersectionObserver({ rootMargin: '200px' });
  const testimonialsObserver = useIntersectionObserver({ rootMargin: '150px' });
  const finalCTAObserver = useIntersectionObserver({ rootMargin: '100px' });
  
  // Web Vitals tracking for performance optimization
  useWebVitals();

  useEffect(() => {
    // Mark component as mounted to prevent hydration mismatch
    setIsMounted(true);
    
    // Track page view on mount
    trackPageView();
    
    // Announce page load to screen readers
    announceToScreenReader('Homepage loaded successfully');
  }, [trackPageView, announceToScreenReader]);

  const handleHeroCTAClick = (buttonType: 'primary' | 'secondary') => {
    trackHeroCTAClick(buttonType);
  };

  const handleFeatureCardClick = (featureTitle: string) => {
    trackFeatureCardClick(featureTitle);
  };

  const handleSectionView = (sectionName: string) => {
    trackSectionView(sectionName);
  };

  const handleTestimonialInteraction = (testimonialId: string) => {
    trackTestimonialInteraction(testimonialId);
  };

  const handleFinalCTAClick = (buttonType: 'primary' | 'secondary') => {
    trackFinalCTAClick(buttonType);
  };

  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Home Page Error:', error, errorInfo);
    // Send error to monitoring service
  };

  return (
    <HomePageErrorBoundary onError={handleError}>
      <main>
        <SEOHead />
        
        {/* Critical above-the-fold content - loads immediately */}
        <SectionErrorBoundary sectionName="Hero">
          <HeroSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Why Choose Us">
          <WhyChooseSection />
        </SectionErrorBoundary>
        
        {/* Progressive loading for below-the-fold content */}
        <div ref={howItWorksObserver.elementRef}>
          {howItWorksObserver.isIntersecting && (
            <SectionErrorBoundary sectionName="How It Works">
              <HowItWorksSection />
            </SectionErrorBoundary>
          )}
        </div>
        
        <div ref={testimonialsObserver.elementRef}>
          {testimonialsObserver.isIntersecting && (
            <SectionErrorBoundary sectionName="Testimonials">
              <TestimonialsSection />
            </SectionErrorBoundary>
          )}
        </div>
        
        <div ref={finalCTAObserver.elementRef}>
          {finalCTAObserver.isIntersecting && (
            <SectionErrorBoundary sectionName="Final CTA">
              <FinalCTASection />
            </SectionErrorBoundary>
          )}
        </div>
        
        {/* Floating Action Button for Contact Options - Client-only */}
        {isMounted && (
          <Suspense fallback={null}>
            <LazyFABSpeedDial />
          </Suspense>
        )}
      </main>
    </HomePageErrorBoundary>
  );
}
