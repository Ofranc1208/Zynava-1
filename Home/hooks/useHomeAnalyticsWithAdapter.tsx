/**
 * Enhanced Home Analytics Hook with Unified Integration
 *
 * Extends the original useHomeAnalytics hook to integrate with the unified analytics system.
 * This provides both Google Analytics tracking and unified Performance Dashboard integration.
 *
 * @author Smarter Payouts Team
 * @since 2024
 */

'use client';
import { useCallback, useEffect } from 'react';
import { usePageAnalyticsAdapter } from '../../PerformanceDashboard/services/PageAnalyticsAdapter';
import useHomeAnalytics from './useHomeAnalytics';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface UseHomeAnalyticsWithAdapterReturn {
  // Original Google Analytics methods
  trackHeroCTAClick: (buttonType: 'primary' | 'secondary') => void;
  trackFeatureCardClick: (featureTitle: string) => void;
  trackSectionView: (sectionName: string) => void;
  trackTestimonialInteraction: (testimonialId: string) => void;
  trackFinalCTAClick: (buttonType: 'primary' | 'secondary') => void;
  trackPageView: () => void;
  trackScrollDepth: (depth: number) => void;

  // Unified analytics methods
  initializeUnifiedTracking: () => Promise<void>;
  updatePerformanceMetrics: (metrics: any) => void;
  updateAccessibilityMetrics: (metrics: any) => void;
  getAdapterStats: () => any;
}

/**
 * Enhanced hook that combines Google Analytics with unified Performance Dashboard tracking
 */
export default function useHomeAnalyticsWithAdapter(): UseHomeAnalyticsWithAdapterReturn {
  // Original Google Analytics hook
  const originalAnalytics = useHomeAnalytics();

  // Unified analytics adapter
  const {
    initialize,
    trackPageView: unifiedTrackPageView,
    trackCTAClick: unifiedTrackCTAClick,
    trackSectionView: unifiedTrackSectionView,
    updatePerformanceMetrics,
    updateAccessibilityMetrics,
    getStats
  } = usePageAnalyticsAdapter({
    pageName: 'home',
    enableRealTimeTracking: true,
    enablePerformanceTracking: true,
    enableAccessibilityTracking: true
  });

  /**
   * Initialize unified tracking
   */
  const initializeUnifiedTracking = useCallback(async () => {
    try {
      await initialize();
      console.log('🏠 Home page unified analytics initialized');
    } catch (error) {
      console.error('Failed to initialize home unified analytics:', error);
    }
  }, [initialize]);

  /**
   * Enhanced page view tracking - sends to both Google Analytics and unified system
   */
  const trackPageView = useCallback(() => {
    // Original Google Analytics tracking
    originalAnalytics.trackPageView();

    // Unified analytics tracking
    unifiedTrackPageView({
      pageTitle: 'Home Page',
      pageType: 'landing'
    });
  }, [originalAnalytics, unifiedTrackPageView]);

  /**
   * Enhanced CTA click tracking
   */
  const trackHeroCTAClick = useCallback((buttonType: 'primary' | 'secondary') => {
    // Original Google Analytics tracking
    originalAnalytics.trackHeroCTAClick(buttonType);

    // Unified analytics tracking
    unifiedTrackCTAClick('hero', buttonType, {
      section: 'hero',
      buttonType,
      page: 'home'
    });
  }, [originalAnalytics, unifiedTrackCTAClick]);

  /**
   * Enhanced feature card click tracking
   */
  const trackFeatureCardClick = useCallback((featureTitle: string) => {
    // Original Google Analytics tracking
    originalAnalytics.trackFeatureCardClick(featureTitle);

    // Unified analytics tracking
    unifiedTrackCTAClick('feature', featureTitle, {
      section: 'features',
      featureTitle,
      page: 'home'
    });
  }, [originalAnalytics, unifiedTrackCTAClick]);

  /**
   * Enhanced section view tracking
   */
  const trackSectionView = useCallback((sectionName: string) => {
    // Original Google Analytics tracking
    originalAnalytics.trackSectionView(sectionName);

    // Unified analytics tracking
    unifiedTrackSectionView(sectionName, {
      page: 'home',
      sectionType: 'content'
    });
  }, [originalAnalytics, unifiedTrackSectionView]);

  /**
   * Enhanced testimonial interaction tracking
   */
  const trackTestimonialInteraction = useCallback((testimonialId: string) => {
    // Original Google Analytics tracking
    originalAnalytics.trackTestimonialInteraction(testimonialId);

    // Unified analytics tracking
    unifiedTrackCTAClick('testimonial', testimonialId, {
      section: 'testimonials',
      testimonialId,
      page: 'home'
    });
  }, [originalAnalytics, unifiedTrackCTAClick]);

  /**
   * Enhanced final CTA click tracking
   */
  const trackFinalCTAClick = useCallback((buttonType: 'primary' | 'secondary') => {
    // Original Google Analytics tracking
    originalAnalytics.trackFinalCTAClick(buttonType);

    // Unified analytics tracking
    unifiedTrackCTAClick('final', buttonType, {
      section: 'final_cta',
      buttonType,
      page: 'home'
    });
  }, [originalAnalytics, unifiedTrackCTAClick]);

  /**
   * Enhanced scroll depth tracking
   */
  const trackScrollDepth = useCallback((depth: number) => {
    // Original Google Analytics tracking
    originalAnalytics.trackScrollDepth(depth);

    // Unified analytics tracking (as performance metric)
    updatePerformanceMetrics({
      scrollDepth: depth,
      engagementScore: depth > 75 ? 100 : depth > 50 ? 75 : depth > 25 ? 50 : 25
    });
  }, [originalAnalytics, updatePerformanceMetrics]);

  // Initialize unified tracking on mount
  useEffect(() => {
    initializeUnifiedTracking();
  }, [initializeUnifiedTracking]);

  return {
    // Original methods (now enhanced with unified tracking)
    trackHeroCTAClick,
    trackFeatureCardClick,
    trackSectionView,
    trackTestimonialInteraction,
    trackFinalCTAClick,
    trackPageView,
    trackScrollDepth,

    // Unified analytics methods
    initializeUnifiedTracking,
    updatePerformanceMetrics,
    updateAccessibilityMetrics,
    getAdapterStats: getStats
  };
}
