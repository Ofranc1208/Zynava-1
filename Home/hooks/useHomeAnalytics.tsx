'use client';
import { useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface UseHomeAnalyticsReturn {
  trackHeroCTAClick: (buttonType: 'primary' | 'secondary') => void;
  trackFeatureCardClick: (featureTitle: string) => void;
  trackSectionView: (sectionName: string) => void;
  trackTestimonialInteraction: (testimonialId: string) => void;
  trackFinalCTAClick: (buttonType: 'primary' | 'secondary') => void;
  trackPageView: () => void;
  trackScrollDepth: (depth: number) => void;
}

export default function useHomeAnalytics(): UseHomeAnalyticsReturn {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      // Analytics event tracked
    }
  }, []);

  const trackHeroCTAClick = useCallback((buttonType: 'primary' | 'secondary') => {
    trackEvent({
      action: 'hero_cta_click',
      category: 'engagement',
      label: `hero_${buttonType}_button`
    });
  }, [trackEvent]);

  const trackFeatureCardClick = useCallback((featureTitle: string) => {
    trackEvent({
      action: 'feature_card_click',
      category: 'engagement',
      label: featureTitle.toLowerCase().replace(/\s+/g, '_')
    });
  }, [trackEvent]);

  const trackSectionView = useCallback((sectionName: string) => {
    trackEvent({
      action: 'section_view',
      category: 'content_interaction',
      label: sectionName
    });
  }, [trackEvent]);

  const trackTestimonialInteraction = useCallback((testimonialId: string) => {
    trackEvent({
      action: 'testimonial_interaction',
      category: 'social_proof',
      label: testimonialId
    });
  }, [trackEvent]);

  const trackFinalCTAClick = useCallback((buttonType: 'primary' | 'secondary') => {
    trackEvent({
      action: 'final_cta_click',
      category: 'conversion',
      label: `final_${buttonType}_button`
    });
  }, [trackEvent]);

  const trackPageView = useCallback(() => {
    trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: 'home_page'
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent({
      action: 'scroll_depth',
      category: 'engagement',
      label: 'home_page',
      value: depth
    });
  }, [trackEvent]);

  return {
    trackHeroCTAClick,
    trackFeatureCardClick,
    trackSectionView,
    trackTestimonialInteraction,
    trackFinalCTAClick,
    trackPageView,
    trackScrollDepth
  };
}
